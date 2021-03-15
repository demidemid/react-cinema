import React from "react";
import { useSelector } from "react-redux";
import BarChart from "../../components/BarChart";
import Loader from "../../components/Loader";
import StatNav from "../../components/StatNav";
import TotalUserStats from "../../components/TotalUserStats";
import UserRank from "../../components/UserRank";
import {
  getMovieList,
  getMovieListIsLoading,
} from "../../redux/card/card.actions";

interface MovieStat {
  watched: number;
  genres: string[];
  totalTime: {
    hours: number;
    minutes: number;
  };
}

const StatsPage = () => {
  const movieList = useSelector(getMovieList);
  const isLoading = useSelector(getMovieListIsLoading);

  const movieStat: MovieStat | undefined = movieList?.reduce(
    (acc, data) => {
      if (data.userDetails.isWatched) {
        acc.watched += 1;
      }

      if (data.filmInfo.genres.length && data.userDetails.isWatched) {
        data.filmInfo.genres.forEach((item) => acc.genres.push(item));
      }

      if (data.filmInfo.runtime) {
        acc.totalTime.minutes +=
          +data.filmInfo.runtime.trim().split(` `)[1]?.slice(0, 2) || 0;
        acc.totalTime.hours +=
          +data.filmInfo.runtime.trim().split(` `)[0]?.slice(0, -1) || 0;
      }

      return acc;
    },
    { watched: 0, genres: [``], totalTime: { hours: 0, minutes: 0 } }
  );

  interface ICountGenres {
    [n: string]: number;
  }

  const countGenres: ICountGenres = {};
  let topGenres: any[] = [];

  movieStat?.genres.forEach((el) => {
    countGenres[el] = 1 + (countGenres[el] || 0);
  });

  topGenres = Object.entries(countGenres)
    .filter((item) => item[0])
    .sort((a, b) => b[1] - a[1]);

  const totalMinutes = (movieStat?.totalTime?.minutes || 0) % 60;
  const totalHours =
    (movieStat?.totalTime?.hours || 0) +
    Math.round((movieStat?.totalTime?.minutes || 0) / 60);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="statistic">
      <UserRank rank={(topGenres.length && topGenres[0][0]) || ``} />
      <StatNav />
      <TotalUserStats
        totalWatched={movieStat?.watched || 0}
        totalTime={{ hours: totalHours, minutes: totalMinutes }}
        topGenre={(topGenres.length && topGenres[0][0]) || ``}
      />

      <div className="statistic__chart-wrap">
        {/* <canvas className="statistic__chart" width="1000" /> */}
        <BarChart stat={topGenres} />
      </div>
    </section>
  );
};

export default StatsPage;
