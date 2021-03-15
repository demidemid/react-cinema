/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { IMovieCard } from "../../interfaces/MovieCard.entities";
import QueryTypes from "../../interfaces/QueryTypes.etities";
import MovieCard from "../MovieCard";
import Navigation, { FilterNames } from "../Navigation";
import ShowMoreList from "../ShowMoreList";
import SortFilter, { SortNames } from "../SortFilter";
import TopListExtra from "../TopListExtra";

interface IMainProps {
  movieList: IMovieCard[];
}

const Main: React.FC<IMainProps> = ({ movieList }: IMainProps) => {
  const query = useQuery();

  const filterMovielist = (
    array: IMovieCard[],
    queryParam: URLSearchParams
  ) => {
    const queryName = queryParam.get(QueryTypes.NAME);
    const querySort = queryParam.get(QueryTypes.SORT);
    const querysearchValue = (
      queryParam.get(QueryTypes.SEARCH_VALUE) || ``
    ).toLowerCase();
    let resArr: IMovieCard[] = [...array];

    if (querysearchValue) {
      resArr = resArr.filter((item) =>
        item.filmInfo.title.toLowerCase().includes(querysearchValue)
      );
    }

    if (queryName) {
      switch (queryName) {
        case FilterNames.WATCHLIST.toLowerCase():
          resArr = resArr.filter((item) => item.userDetails.intoWatchList);
          break;

        case FilterNames.HISTORY.toLowerCase():
          resArr = resArr.filter((item) => item.userDetails.isWatched);
          break;

        case FilterNames.FAVORITIES.toLowerCase():
          resArr = resArr.filter((item) => item.userDetails.isFavorite);
          break;

        default:
          break;
      }
    }

    if (querySort) {
      switch (querySort) {
        case SortNames.DATE:
          resArr = resArr.sort(
            (item1, item2) =>
              Number(item2.filmInfo.release.date.trim().split(` `)[2]) -
              Number(item1.filmInfo.release.date.trim().split(` `)[2])
          );
          break;

        case SortNames.RATING:
          resArr = resArr.sort(
            (item1, item2) =>
              item2.filmInfo.totalRaiting - item1.filmInfo.totalRaiting
          );
          break;

        default:
          break;
      }
    }

    return resArr;
  };

  const filtredMovieList = filterMovielist(movieList, query);

  const movieStat = movieList.reduce(
    (acc, data) => {
      if (data.userDetails.intoWatchList) {
        acc.watchlist += 1;
      }
      if (data.userDetails.isWatched) {
        acc.watched += 1;
      }
      if (data.userDetails.isFavorite) {
        acc.favorite += 1;
      }
      return acc;
    },
    { watchlist: 0, watched: 0, favorite: 0 }
  );

  const renderCardLink = (card: IMovieCard) => (
    <li className="films-list__item" key={card.id}>
      <Link to={`/${card?.id}`}>
        <MovieCard card={card} />
      </Link>
    </li>
  );

  const topTwoRatedMovieList = [...movieList]
    .sort(
      (movie1, movie2) =>
        movie2.filmInfo.totalRaiting - movie1.filmInfo.totalRaiting
    )
    .slice(0, 2);

  const topTwoCommentedMovieList = [...movieList]
    .sort(
      (movie1, movie2) =>
        (movie2?.comments?.length || 0) - (movie1?.comments?.length || 0)
    )
    .slice(0, 2);

  console.log(movieList);

  return (
    <main className="main">
      <Navigation userStat={movieStat} />
      <SortFilter />

      <section className="films">
        <section className="films-list">
          <h2 className="films-list__title visually-hidden">
            All movies. Upcoming
          </h2>

          <ShowMoreList
            items={filtredMovieList}
            itemsOnPage={5}
            shomMoreStep={5}
            renderTemplate={renderCardLink}
          />
        </section>

        <TopListExtra name="Top rated">
          {topTwoRatedMovieList.map((card: IMovieCard) => renderCardLink(card))}
        </TopListExtra>

        <TopListExtra name="Most commented">
          {topTwoCommentedMovieList.map((card: IMovieCard) =>
            renderCardLink(card)
          )}
        </TopListExtra>
      </section>
    </main>
  );
};

export default Main;
