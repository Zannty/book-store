import { updBookList } from "./updBookList";
import { updShoppingCart } from "./updShoppingCart";
const reducer = (state, action) => {
  return {
    bookList: updBookList(state, action),
    shoppingCart: updShoppingCart(state, action)
  };
};

export default reducer;
