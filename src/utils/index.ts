// icons
import MakeupIcon from "@/assets/icons/makeup.webp";
import SkinCareIcon from "@/assets/icons/skincare.webp";
import HairCareIcon from "@/assets/icons/haircare.webp";
const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const categories = [
  {
    id: 1,
    name: "Makeup",
    icon: MakeupIcon,
  },
  {
    id: 2,
    name: "Skincare",
    icon: SkinCareIcon,
  },
  {
    id: 3,
    name: "Haircare",
    icon: HairCareIcon,
  },
];

const formatCategory = (category: number) => {
  return categories.find(cat => cat.id === category)?.name;
};

const formatUnit = (unit: number) => {
  return unit === 1 ? "1 unit" : `${unit} units`;
};

export { formatPrice, formatCategory, formatUnit, categories };
