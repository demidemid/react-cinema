/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { IMovieCard } from "../../interfaces/MovieCard.entities";
import CommonUtils from "../../utils/common";
import * as actions from "../../redux/card/card.actions";
import MovieActionButton, { ActionTypes } from "../MovieActionButton";
import { toggleUserDetailControlFn } from "../../redux/card/card.actions";

class MovieCard extends React.Component<{
  card: IMovieCard;
  toggleUserDetailControl: toggleUserDetailControlFn;
}> {
  render() {
    const { card, toggleUserDetailControl } = this.props;
    const { filmInfo, comments, userDetails } = card;
    const { isFavorite, isWatched, intoWatchList } = userDetails;

    return (
      <article className="film-card">
        <h3 className="film-card__title">{filmInfo.title}</h3>
        <p className="film-card__rating">{filmInfo.totalRaiting}</p>
        <p className="film-card__info">
          <span className="film-card__year">
            {filmInfo.release.date.trim().split(` `)[2]}
          </span>
          <span className="film-card__duration">{filmInfo.runtime}</span>
          <span className="film-card__genre">{filmInfo.genres[0]}</span>
        </p>
        <img
          src={filmInfo.poster}
          alt={filmInfo.title}
          className="film-card__poster"
        />
        <p className="film-card__description">{filmInfo.description}</p>
        <div className="film-card__comments">
          {comments?.length || 0} comment
          {CommonUtils.getPlural(comments?.length)}
        </div>
        <form className="film-card__controls">
          <MovieActionButton
            actionType={ActionTypes.WATCHLIST}
            isActive={intoWatchList}
            onClick={() => toggleUserDetailControl(card, { intoWatchList })}
          />

          <MovieActionButton
            actionType={ActionTypes.WATCHLED}
            isActive={isWatched}
            onClick={() => toggleUserDetailControl(card, { isWatched })}
          />

          <MovieActionButton
            actionType={ActionTypes.FAVORITE}
            isActive={isFavorite}
            onClick={() => toggleUserDetailControl(card, { isFavorite })}
          />
        </form>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(MovieCard);
