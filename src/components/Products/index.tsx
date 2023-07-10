import { useContext, useMemo } from "react";
// components
import Button from "../Button";
import DefaultMessage from "../DefaultMessage";
import LoadingIcon from "../Icons/LoadingIcon";
import ProductCard from "../ProductCard";
// context
import { ProductContext } from "@/context/product.context";
// icons
import All from "@/assets/icons/all.webp";
// styles
import * as C from "./styles";
// utils
import { categories } from "@/utils";

export default function Products() {
  const {
    products,
    onPaginateProducts,
    category,
    count,
    loading,
    onFilterProducts,
  } = useContext(ProductContext);

  const onPaginate = () => {
    const lastDoc = products.slice(-1)[0].name;
    const defaultQuery = { lastDoc };
    const query = category
      ? { ...defaultQuery, filterValue: category }
      : defaultQuery;

    onPaginateProducts(query);
  };

  const onFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterProducts(e.target.value);
  };

  const showLoadMore = useMemo(
    () => products.length > 0 && products.length < count && !loading,
    [products, count, loading]
  );

  return (
    <C.Container>
      <C.Field>
        <C.Label htmlFor="all" className={!category ? "active" : ""}>
          <img src={All} alt="all" width="50px" height="50px" />
          All
          <C.Input
            onChange={onFilter}
            type="radio"
            id="all"
            value=""
            checked={!category}
          />
        </C.Label>

        {categories.map(cat => {
          return (
            <C.Label
              key={cat.id}
              htmlFor={cat.name}
              className={category === cat.id ? "active" : ""}>
              <img src={cat.icon} alt={cat.name} width="50px" height="50px" />
              {cat.name}{" "}
              <C.Input
                onChange={onFilter}
                type="radio"
                id={cat.name}
                value={cat.id}
                checked={cat.id === category}
              />
            </C.Label>
          );
        })}
      </C.Field>
      <hr />
      {loading && (
        <DefaultMessage message="Loading..." icon={<LoadingIcon />} />
      )}
      <C.CardGrid>
        {!loading &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </C.CardGrid>
      {showLoadMore && <Button onClick={onPaginate}>Load more</Button>}
    </C.Container>
  );
}
