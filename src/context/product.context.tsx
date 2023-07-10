import { createContext, useCallback, useEffect, useState } from "react";
import {
  QuerySnapshot,
  DocumentData,
  QueryDocumentSnapshot,
  query,
  collection,
  orderBy,
  where,
  getDocs,
  startAfter,
  limit,
  getCountFromServer,
} from "firebase/firestore";
// firebase
import firebase from "../firebase";
// interfaces
import {
  Product,
  ProductContextType,
  QueryParams,
  WrapperProps,
} from "@/interfaces";

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

export const ProductProvider = ({ children }: WrapperProps) => {
  const limitNum = 6;
  const order = "name";
  const [category, setCategory] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const [products, setProducts] = useState<Product[]>([]);

  const spreadProducts = (data: QuerySnapshot<DocumentData>) => {
    const productsData = data.docs.map((doc: QueryDocumentSnapshot) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsData;
  };

  const searchCollection = async ({ filterValue, lastDoc }: QueryParams) => {
    const doc = lastDoc ? lastDoc : Date.now().toString();
    const filterBy = filterValue ? "category" : undefined;
    const initQuery = query(
      collection(firebase.db, "products"),
      orderBy(order, "asc")
    );

    let querySnapshot = query(initQuery);

    if (filterValue && filterBy) {
      querySnapshot = query(
        initQuery,
        where(filterBy, "==", Number(filterValue))
      );
    }
    const count = (await getCountFromServer(querySnapshot)).data().count;
    setCount(count);

    return await getDocs(
      query(querySnapshot, startAfter(doc), limit(limitNum))
    );
  };

  const getProducts = useCallback(
    async ({ lastDoc, filterValue }: QueryParams) => {
      setLoading(true);
      const data = await searchCollection({
        lastDoc,
        filterValue,
      });

      const productsData = spreadProducts(data) as Product[];

      setProducts(productsData);
      setLoading(false);
    },
    []
  );

  const onPaginateProducts = async ({ lastDoc, filterValue }: QueryParams) => {
    const data = await searchCollection({
      filterValue,
      lastDoc,
    });

    const productsData = spreadProducts(data);

    const newProducts = [...products, ...productsData] as Product[];
    setProducts(newProducts);
  };

  const onFilterProducts = (filterValue: string) => {
    setCategory(Number(filterValue));

    setLoading(true);
    if (!filterValue) {
      getProducts({});
      return;
    }

    getProducts({ filterValue: filterValue });
  };

  useEffect(() => {
    getProducts({});
  }, [getProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        count,
        loading,
        category,
        getProducts,
        onFilterProducts,
        onPaginateProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
