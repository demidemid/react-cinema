/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export interface IFilmInfo {
  title: string;
  alternativeTitle: string;
  totalRaiting: number;
  poster: string;
  description: string;
  director: string;
  runtime: string;
  actors: string[];
  release: {
    countries: string;
    date: string;
  };
  genres: string[];
  writers: string[];
  ageRating: string;
}

export interface IUserDetails {
  intoWatchList: boolean;
  isWatched: boolean;
  isFavorite: boolean;
  personalRaiting: number;
}

export interface IUserComment {
  emotion: string,
  userName: string,
  date: string,
  commentTexts: string,
}

export interface IMovieCard {
  id: number;
  filmInfo: IFilmInfo;
  userDetails: IUserDetails;
  comments: IUserComment[];
}

class MovieCard extends React.Component<{card: IMovieCard}> {

  render() {
    console.log(`props:`, this.props.card)
    const { filmInfo, comments } = this.props.card;

    return (
      <article className="film-card">
        <h3 className="film-card__title">{filmInfo.title}</h3>
        <p className="film-card__rating">{filmInfo.totalRaiting}</p>
        <p className="film-card__info">
          <span className="film-card__year">
            {filmInfo.release.date.split(` `)[2]}
          </span>
          <span className="film-card__duration">{filmInfo.runtime}</span>
          <span className="film-card__genre">{filmInfo.genres[0]}</span>
        </p>
        <img src={filmInfo.poster} alt={filmInfo.title} className="film-card__poster" />
        <p className="film-card__description">{filmInfo.description}</p>
        <a className="film-card__comments">
          {comments.length} {comments.length === 1 ? `comment` : `comments`}
        </a>
        <form className="film-card__controls">
          <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">
            Add to watchlist
          </button>
          <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">
            Mark as watched
          </button>
          <button className="film-card__controls-item button film-card__controls-item--favorite">
            Mark as favorite
          </button>
        </form>
      </article>
    );
  }
}

export default MovieCard;
