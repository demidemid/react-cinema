import { Dispatch } from "react";
import { getMovieListData, setDataRef } from "../../service/firebase";
import {
  IFilmInfo,
  IMovieCard,
  IUserComment,
} from "../../interfaces/MovieCard.entities";
import { ICardAction, IStateProps } from "./card.reducer";
import { CardActionTypes, FETCH_CARD_LISTS } from "./card.types";

export interface IAppProps {
  movieCards?: IStateProps;
}

export interface INewMovie {
  id: number;
  filmInfo: IFilmInfo;
}

export const addMovieItem = (newMovie: INewMovie) => (
  dispatch: Dispatch<ICardAction>
) => {
  const { id } = newMovie;

  const newCard = {
    ...newMovie,
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [],
  };

  setDataRef(id, newCard);

  dispatch({
    type: CardActionTypes.ADD_ITEM,
    payload: newCard,
  });
};

interface IUserDetailControlProps {
  [n: string]: boolean;
}

export const addNewComment = (card: IMovieCard, comment: IUserComment) => (
  dispatch: Dispatch<ICardAction>
) => {
  const { id } = card;
  const commentsList =
    card.comments && card.comments.length ? card.comments : [];
  const newCard = {
    ...card,
    comments: [...commentsList, comment],
  };

  setDataRef(id, newCard);

  dispatch({
    type: CardActionTypes.TOGGLE_USER_DETAILS,
    payload: newCard,
  });
};

export const deleteComment = (
  card: IMovieCard,
  currentComment: IUserComment
) => (dispatch: Dispatch<ICardAction>) => {
  const { id } = card;

  const newCard = {
    ...card,
    comments: [
      ...card.comments.filter(
        (comment: IUserComment) => comment.id !== currentComment.id
      ),
    ],
  };

  setDataRef(id, newCard);

  dispatch({
    type: CardActionTypes.TOGGLE_USER_DETAILS,
    payload: newCard,
  });
};

export type toggleUserDetailControlFn = (
  card: IMovieCard,
  control: IUserDetailControlProps
) => (dispatch: Dispatch<ICardAction>) => void;

export const toggleUserDetailControl: toggleUserDetailControlFn = (
  card: IMovieCard,
  control: IUserDetailControlProps
) => (dispatch: Dispatch<ICardAction>) => {
  try {
    const { id } = card;
    const controlKey = Object.keys(control)[0];
    const controlValue = Object.values(control)[0];

    const toggledCard = {
      ...card,
      userDetails: {
        ...card.userDetails,
        [`${controlKey}`]: !controlValue,
      },
    };

    setDataRef(id, toggledCard);

    dispatch({
      type: CardActionTypes.TOGGLE_USER_DETAILS,
      payload: toggledCard,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CARD_LISTS.REJECT,
      error,
    });
  }
};

export const getMovieList = (state: IAppProps) => state?.movieCards?.payload;

export const getMovieListIsLoading = (state: IAppProps) =>
  state?.movieCards?.isLoading;

export const getMovieListAction = () => (dispatch: Dispatch<ICardAction>) => {
  dispatch({ type: FETCH_CARD_LISTS.REQUEST });

  try {
    getMovieListData.then((res) => {
      dispatch({
        type: FETCH_CARD_LISTS.RESOLVE,
        payload: res.val(),
      });
    });
  } catch (error) {
    dispatch({
      type: FETCH_CARD_LISTS.REJECT,
      error,
    });
  }
};
