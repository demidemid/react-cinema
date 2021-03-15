import { IMovieCard } from "../../interfaces/MovieCard.entities";
import { CardActionTypes, FETCH_CARD_LISTS } from "./card.types";
import { addNewCardToList } from "./card.utils";

type CardActions = CardActionTypes | FETCH_CARD_LISTS;

export interface ICardAction {
  type: CardActions;
  payload?: any;
  error?: any;
}

export interface IStateProps {
  payload: IMovieCard[];
  error: null | object;
  isLoading: boolean;
}

export const cartInitialState: IStateProps = {
  payload: [],
  error: null,
  isLoading: false,
};

const cartReducer = (
  state: IStateProps = cartInitialState,
  action: ICardAction
) => {
  switch (action.type) {
    case CardActionTypes.ADD_ITEM:
      return {
        ...state,
        payload: [...state.payload, action.payload],
      };

    case CardActionTypes.TOGGLE_USER_DETAILS:
      return {
        ...state,
        payload: addNewCardToList(state.payload, action),
      };

    case FETCH_CARD_LISTS.REQUEST:
      return {
        ...state,
        payload: [],
        error: null,
        isLoading: true,
      };

    case FETCH_CARD_LISTS.RESOLVE:
      return {
        ...state,
        payload: action.payload,
        error: null,
        isLoading: false,
      };

    case FETCH_CARD_LISTS.REJECT:
      return {
        ...state,
        payload: null,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
