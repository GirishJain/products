import { Link } from "react-router-dom";
import { IProducts } from "../store/productsStore";
import { observer } from "mobx-react-lite";

interface IProps {
  product: IProducts;
}

export const Product = observer((props: IProps) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="400"
          src={props.product.image}
          alt="Product Images"
        />
        <div className="card-body">
          <p className="card-text">{props.product.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={`/react-project-with-mobx/products/${props.product.id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </Link>
            </div>
            <b>₹{props.product.price}</b>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Product;
