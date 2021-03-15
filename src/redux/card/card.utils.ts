import { IMovieCard } from "../../interfaces/MovieCard.entities";
import { ICardAction } from "./card.reducer";

export const addItemToCart = (
  cartItems: IMovieCard[],
  cartItemToAdd: IMovieCard
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, comments: [...cartItemToAdd.comments] }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const addNewCardToList = (
  cartItems: IMovieCard[],
  action: ICardAction
) => {
  const { id } = action.payload;
  const isCartExisting = cartItems.some((cartItem) => cartItem.id === id);

  return isCartExisting
    ? cartItems.map((cartItem) =>
        cartItem.id === id ? action.payload : cartItem
      )
    : cartItems;
};
