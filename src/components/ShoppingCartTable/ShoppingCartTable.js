import React, { useEffect } from "react";
import "./ShoppingCartTable.css";
import { connect } from "react-redux";
import {
  onAddToCart,
  onRemoveToCart,
  onDecToCart,
  sumOrder
} from "./../../actions/";

const ShoppingCartTable = ({
  cartItems,
  onInc,
  orderTotal,
  onRemoveToCart,
  onDecToCart,
  sumOrder
}) => {
  useEffect(() => {
    sumOrder();
  });
  return (
    <div className="shopping-cart-table">
      <h2>Ваш Заказ:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Предмет</th>
            <th>Колличество</th>
            <th>Цена</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, idx) => {
            const { id, name, count, total } = item;
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}руб</td>
                <td>
                  <button
                    onClick={() => {
                      onRemoveToCart(id);
                    }}
                    className="btn btn-outline-danger btn-sm float-right"
                  >
                    <i className="fa fa-trash-o" />
                  </button>
                  <button
                    onClick={() => {
                      onInc(id);
                    }}
                    className="btn btn-outline-success btn-sm float-right"
                  >
                    <i className="fa fa-plus-circle" />
                  </button>
                  <button
                    onClick={() => {
                      onDecToCart(id);
                    }}
                    className="btn btn-outline-warning btn-sm float-right"
                  >
                    <i className="fa fa-minus-circle" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total">Всего:{orderTotal} руб</div>
    </div>
  );
};
const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    cartItems,
    orderTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInc: id => {
      dispatch(onAddToCart(id));
    },
    onDecToCart: id => {
      dispatch(onDecToCart(id));
    },
    onRemoveToCart: id => {
      dispatch(onRemoveToCart(id));
    },
    sumOrder: () => {
      dispatch(sumOrder());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
