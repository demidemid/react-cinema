import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProfileAvatar from "../../images/bitmap@2x.png";
import UserRanks from "../../interfaces/UserRank.etities";
import Search from "../Search";

interface IHeaderProps {
  watchingRankCount: number;
}

const Header: React.FC<IHeaderProps> = ({
  watchingRankCount,
}: IHeaderProps) => {
  const {pathname} = useLocation();
  const isSearchNeeded = Boolean(pathname === `/`);


  // eslint-disable-next-line consistent-return
  const getMovieRankName = (count: number) => {
    if (count >= 1 && count <= 10) {
      return UserRanks.NOVICE;
    }

    if (count >= 11 && count <= 20) {
      return UserRanks.FAN;
    }

    if (count >= 21) {
      return UserRanks.MOVIE_BUFF;
    }

    if (!count) {
      return ``;
    }
  };

  return (
    <header className="header">
      <h1 className="header__logo logo">
        <Link to="/">Cinemaddict</Link>
      </h1>

      {isSearchNeeded && <Search />}

      <section className="header__profile profile">
        {watchingRankCount === 0 || (
          <p className="profile__rating">
            {getMovieRankName(watchingRankCount)}
          </p>
        )}
        <Link to="/add-new-movie">
          <img
            className="profile__avatar"
            src={ProfileAvatar}
            alt="Avatar"
            width="35"
            height="35"
          />
        </Link>
      </section>
    </header>
  );
};

export default Header;
