import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
const Header = ({ countTotal, orderTotal }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-text">
        BookStore
      </Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {countTotal} предмет(ов) ({orderTotal} руб.)
      </Link>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { countTotal, orderTotal } }) => {
  return {
    countTotal,
    orderTotal
  };
};

export default connect(mapStateToProps)(Header);
