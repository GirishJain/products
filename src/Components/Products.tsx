import { map } from "lodash";
import Product from "./Product";
import { useEffect } from "react";
import { useStore } from "../Hooks/useStore";
import { observer } from "mobx-react-lite";

export const Products = observer(() => {
  const {
    rootStore: { productsStore },
  } = useStore();

  useEffect(() => {
    productsStore.fetchProducts();
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {map(productsStore.products, (p, index) => (
            <Product key={index} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Products;
