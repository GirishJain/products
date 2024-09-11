import { CartStore } from "./cartStore";
import { LoginStore } from "./loginStore";
import { ProductsStore } from "./productsStore";

export interface IRootStore {
  loginStore: LoginStore;
  productsStore: ProductsStore;
  cartStore: CartStore;
}

export class RootStore implements IRootStore {
  loginStore: LoginStore;
  productsStore: ProductsStore;
  cartStore: CartStore;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.productsStore = new ProductsStore(this);
    this.cartStore = new CartStore(this);
  }
}
