export const updBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null
    };
  }
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    default:
      return state.bookList;
  }
};
