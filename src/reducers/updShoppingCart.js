export const updShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      countTotal: 0
    };
  }
  switch (action.type) {
    case "BOOK_ADD_TO_CART":
      const {
        bookList: { books },
        shoppingCart: { cartItems }
      } = state;
      const book = books.find(book => book.id === action.payload);
      const newItem = {
        id: book.id,
        name: book.name,
        count: 1,
        total: book.price
      };
      const itemscart = cartItems.find(book => book.id === newItem.id);
      if (itemscart === undefined) {
        return {
          ...state,
          cartItems: [...cartItems, newItem]
        };
      } else {
        return {
          ...state,
          cartItems: cartItems.map(el => {
            if (el.id === newItem.id) {
              return {
                ...el,
                count: el.count + 1,
                total: el.total + newItem.total
              };
            } else return el;
          })
        };
      }
    case "BOOK_REMOVE_TO_CART":
      return {
        ...state,
        cartItems: state.shoppingCart.cartItems.filter(
          el => el.id !== action.payload
        )
      };

    case "BOOK_DEC_TO_CART":
      const item = state.bookList.books.find(
        book => book.id === action.payload
      );
      return {
        ...state,
        cartItems: state.shoppingCart.cartItems
          .map(el =>
            el.id === action.payload
              ? { ...el, count: el.count - 1, total: el.total - item.price }
              : el
          )
          .filter(el => el.count !== 0)
      };

    case "SUM_ORDER":
      return {
        cartItems: state.shoppingCart.cartItems,
        orderTotal: state.shoppingCart.cartItems.reduce(
          (result, nextvalue) => result + nextvalue.total,
          0
        ),
        countTotal: state.shoppingCart.cartItems.reduce(
          (result, nextvalue) => result + nextvalue.count,
          0
        )
      };

    default:
      return state.shoppingCart;
  }
};
