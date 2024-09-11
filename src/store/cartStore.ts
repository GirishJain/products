import { action, makeObservable, observable, computed } from "mobx";
import { IRootStore } from "./RootStore";
import { IProducts } from "./productsStore";
import { filter } from "lodash";

export interface ICart {
  products?: IProducts[];
}

export class CartStore {
  cart: ICart = { products: [] };
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      cart: observable,
      addProductInCart: action,
      removeProductInCart: action,
      getCarts: computed,
      getCartCount: computed,
    });
    this.rootStore = rootStore;
  }

  addProductInCart(product: IProducts) {
    this.cart.products?.push(product);
  }

  removeProductInCart(product: IProducts) {
    const products = filter(this.cart.products, (p) => p.id !== product.id);
    this.cart.products = products || [];
  }

  get getCarts() {
    return this.cart.products || [];
  }

  get getCartCount() {
    return this.cart.products?.length || 0;
  }
}
