export const booksRequest = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};

export const booksLoaded = newBooks => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
};

export const booksError = error => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
};

export const fetchBooksOld = (bookStoreService, dispatch) => () => {
  dispatch(booksRequest());
  bookStoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};
export const fetchBooks = bookStoreService => () => dispatch => {
  dispatch(booksRequest());
  bookStoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};
export const onAddToCart = id => {
  return {
    type: "BOOK_ADD_TO_CART",
    payload: id
  };
};
export const onRemoveToCart = id => {
  return {
    type: "BOOK_REMOVE_TO_CART",
    payload: id
  };
};
export const onDecToCart = id => {
  return {
    type: "BOOK_DEC_TO_CART",
    payload: id
  };
};

export const sumOrder = () => {
  return {
    type: "SUM_ORDER"
  };
};
