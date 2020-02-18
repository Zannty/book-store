import React from "react";
import BookListItem from "./../BookListItem/BookListItem";
import ErrorIndicator from "./../ErrorIndicator/ErrorIndicator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withBookStoreService } from "./../hoc";
import { fetchBooks, onAddToCart, sumOrder } from "./../../actions/";
import { compose } from "./../../utils";
import Spinner from "./../Spinner/Spinner";
import "./BookList.css";

const BookList = ({ books, onAddToCart, sumOrder }) => {
  return (
    <ul className="book-list">
      {books.map(el => {
        return (
          <li key={el.id}>
            <BookListItem
              onAddToCart={() => onAddToCart(el.id)}
              book={el}
              sumOrder={() => sumOrder()}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books, loading, error, onAddToCart, sumOrder } = this.props;

    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <BookList books={books} onAddToCart={onAddToCart} sumOrder={sumOrder} />
    );
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookStoreService } = ownProps;
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookStoreService),
      onAddToCart,
      sumOrder
    },
    dispatch
  );
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
