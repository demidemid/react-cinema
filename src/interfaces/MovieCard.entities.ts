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
    countries: string[];
    date: string;
  };
  genres: string[];
  writers: string[];
  ageRating: string;
}

export interface IUserDetails {
  intoWatchList: false;
  isWatched: false;
  isFavorite: false;
  personalRaiting: null;
}

export interface IUserComment {
  id?: number;
  emotion: string;
  userName: string;
  date: number;
  commentTexts: string;
}

export interface IMovieCard {
  id: number;
  filmInfo: IFilmInfo;
  userDetails: IUserDetails;
  comments: IUserComment[];
}
