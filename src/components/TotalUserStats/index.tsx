import React from "react";

interface ITotalUserStatsProps {
  totalWatched: number;
  totalTime: {
    hours: number;
    minutes: number;
  };
  topGenre: string;
}

const TotalUserStats = ({
  totalWatched,
  totalTime,
  topGenre,
}: ITotalUserStatsProps) => (
  <ul className="statistic__text-list">
    <li className="statistic__text-item">
      <h4 className="statistic__item-title">You watched</h4>
      <p className="statistic__item-text">
        {totalWatched}{" "}
        <span className="statistic__item-description">movies</span>
      </p>
    </li>
    <li className="statistic__text-item">
      <h4 className="statistic__item-title">Total duration</h4>
      <p className="statistic__item-text">
        {totalTime.hours} <span className="statistic__item-description">h</span>{" "}
        {totalTime.minutes}{" "}
        <span className="statistic__item-description">m</span>
      </p>
    </li>
    <li className="statistic__text-item">
      <h4 className="statistic__item-title">Top genre</h4>
      <p className="statistic__item-text">{topGenre}</p>
    </li>
  </ul>
);

export default TotalUserStats;
