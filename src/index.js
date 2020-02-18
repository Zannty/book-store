import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import thunkMiddleware from "redux-thunk";
import App from "./components/App/App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { BrowserRouter } from "react-router-dom";
import BookStoreService from "./services/BookStoreService";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { BookStoreServiceProvider } from "./components/ServiceContext/ServiceContext";
const logMiddleware = store => next => action => {
  console.log(action.type, store.getState());
  return next(action);
};
const stringMiddleware = store => next => action => {
  if (action === "string") {
    return next({
      type: action
    });
  }
  return next(action);
};
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);
const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookStoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
