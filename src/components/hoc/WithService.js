import React from "react";
import { BookStoreServiceConsumer } from "../ServiceContext/ServiceContext";

export const withBookStoreService = () => Wrap => {
  return props => {
    return (
      <BookStoreServiceConsumer>
        {bookStoreService => {
          return <Wrap {...props} bookStoreService={bookStoreService} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
};
