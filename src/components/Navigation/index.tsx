/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import cn from "classnames";
import queryString from "query-string";
import CommonUtils from "../../utils/common";
import useQuery from "../../hooks/useQuery";
import QueryTypes from "../../interfaces/QueryTypes.etities";

export interface IUserStat {
  watchlist: number;
  watched: number;
  favorite: number;
}

// eslint-disable-next-line no-shadow
export enum FilterNames {
  ALL_MOVIES = `All movies`,
  WATCHLIST = `Watchlist`,
  HISTORY = `History`,
  FAVORITIES = `Favorites`,
}

const Navigation = ({ userStat }: any) => {
  const filterElements = [
    {
      id: 0,
      name: FilterNames.ALL_MOVIES,
      count: ``,
      isActive: true,
    },
    {
      id: 1,
      name: FilterNames.WATCHLIST,
      count: userStat.watchlist,
      isActive: false,
    },
    {
      id: 2,
      name: FilterNames.HISTORY,
      count: userStat.watched,
      isActive: false,
    },
    {
      id: 3,
      name: FilterNames.FAVORITIES,
      count: userStat.favorite,
      isActive: false,
    },
  ];

  const [navList, setNavList] = useState(filterElements);
  const history = useHistory();
  const query = useQuery();
  const queryName = query.get(QueryTypes.NAME);

  useEffect(() => {
    setNavList(filterElements);
  }, [userStat]);

  useEffect(() => {
    const id =
      filterElements.find((item) => item.name.toLowerCase() === queryName)
        ?.id || 0;

    setNavList(CommonUtils.toggleIsActiveInArray(id, filterElements));
  }, [userStat, queryName]);

  const hadleButtonClick = (id: number, name: string) => {
    const queryValue = name === FilterNames.ALL_MOVIES ? `` : name;

    history.push(
      `?${queryString.stringify(
        CommonUtils.concatQueryParams(
          { name: queryValue.toLowerCase() },
          history.location.search
        )
      )}`
    );

    setNavList(CommonUtils.toggleIsActiveInArray(id, filterElements));
  };

  return (
    <nav className="main-navigation">
      {navList.map((nav) => (
        <button
          type="button"
          className={cn(
            "main-navigation__item",
            nav.isActive && `main-navigation__item--active`
          )}
          key={nav.id}
          onClick={() => hadleButtonClick(nav.id, nav.name)}
        >
          {nav.name}{" "}
          {nav.count && (
            <span className="main-navigation__item-count">{nav.count}</span>
          )}
        </button>
      ))}

      <span className="main-navigation__item main-navigation__item--additional">
        <Link to="stats">Stats</Link>
      </span>
    </nav>
  );
};

export default Navigation;
