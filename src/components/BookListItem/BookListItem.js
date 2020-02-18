import React from "react";
import "./BookListItem.css";
import { Link } from "react-router-dom";
const BookListItem = ({ book, onAddToCart, sumOrder }) => {
  const { name, author, genre, price, photo } = book;
  return (
    <div className="book-list-item">
      <div className="book-img">
        <img src={photo} alt="Error" />
      </div>
      <div onClick={sumOrder} className="book-details">
        <Link to="/" className="book-name">
          {name}
        </Link>
        <div className="book-author">Автор: {author}</div>
        <div className="book-genre">Жанр: {genre}</div>
        <div className="book-price">Цена: {price}руб</div>
        <button onClick={onAddToCart} className="btn btn-info">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
