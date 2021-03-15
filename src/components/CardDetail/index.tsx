import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import CommonUtils from "../../utils/common";
import { IMovieCard, IUserComment } from "../../interfaces/MovieCard.entities";
import UserComment from "../UserComment";
import AddComment, { IAddNewComment } from "../AddComment";
import { nameList, surnameList } from "../../data/mock";
import {
  addNewComment,
  deleteComment,
  toggleUserDetailControl,  
} from "../../redux/card/card.actions";
import CardDetailTable from "../CardDetailTable";
import useKeypress from "../../hooks/useKeyPress";
import MovieActionButton, { ActionTypes } from "../MovieActionButton";

interface ICardDetailProps {
  card: IMovieCard;
}

const CardDetail: React.FC<ICardDetailProps> = ({ card }: ICardDetailProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { title, poster, ageRating } = card.filmInfo;
  const { intoWatchList, isWatched, isFavorite } = card.userDetails;

  const sendComment = (comment: IAddNewComment) => {
    const name = nameList[CommonUtils.randomInteger(1, nameList.length - 1)];
    const surname =
      surnameList[CommonUtils.randomInteger(1, surnameList.length - 1)];

    dispatch(
      addNewComment(card, {
        id: CommonUtils.getUniqId(card.comments),
        emotion: comment.selectedEmoji,
        userName: `${name} ${surname}`,
        date: Date.now(),
        commentTexts: comment.textarea,
      })
    );
  };

  const handleDeleteComment = (comment: IUserComment) => {
    dispatch(deleteComment(card, comment));
  };

  const ClosePopup = () => history.push("/");
  useKeypress("Escape", ClosePopup);

  return (
    <section className="film-details">
      <form className="film-details__inner" action="" method="get">
        <div className="form-details__top-container">
          <div className="film-details__close">
            <button
              className="film-details__close-btn"
              type="button"
              onClick={() => ClosePopup()}
            >
              close
            </button>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img
                className="film-details__poster-img"
                src={poster}
                alt={title}
              />
              <p className="film-details__age">{ageRating}</p>
            </div>
            <CardDetailTable filmInfo={card.filmInfo} />
          </div>

          <section className="film-details__controls">
            <MovieActionButton
              actionType={ActionTypes.WATCHLIST}
              isActive={intoWatchList}
              onClick={() => dispatch(toggleUserDetailControl(card, { intoWatchList }))}
            >
              Add to watchlist
            </MovieActionButton>

            <MovieActionButton
              actionType={ActionTypes.WATCHLED}
              isActive={isWatched}
              onClick={() => dispatch(toggleUserDetailControl(card, { isWatched }))}
            >
              Mark as watched
            </MovieActionButton>

            <MovieActionButton
              actionType={ActionTypes.FAVORITE}
              isActive={isFavorite}
              onClick={() => dispatch(toggleUserDetailControl(card, { isFavorite }))}
            >
              Mark as favorite
            </MovieActionButton>
          </section>
        </div>

        <div className="form-details__bottom-container">
          <section className="film-details__comments-wrap">
            <h3 className="film-details__comments-title">
              Comment{CommonUtils.getPlural(card.comments?.length)}{" "}
              <span className="film-details__comments-count">
                {card.comments?.length || 0}
              </span>
            </h3>

            <ul className="film-details__comments-list">
              {card.comments?.map((comment: IUserComment, i) => (
                <UserComment
                  key={comment.id}
                  comment={comment}
                  deleteComment={handleDeleteComment}
                />
              ))}
            </ul>

            <AddComment sendComment={sendComment} />
          </section>
        </div>
      </form>
    </section>
  );
};

export default CardDetail;
