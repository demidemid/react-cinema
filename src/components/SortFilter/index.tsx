import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import CommonUtils from "../../utils/common";
import useQuery from "../../hooks/useQuery";
import QueryTypes from "../../interfaces/QueryTypes.etities";

interface ISortItem {
  id: number;
  name: string;
  isActive: boolean;
}

// eslint-disable-next-line no-shadow
export enum SortNames {
  DEFAULT = `default`,
  DATE = `date`,
  RATING = `rating`,
}

const SortFilter = () => {
  const sortItems: ISortItem[] = [
    {
      id: 0,
      name: SortNames.DEFAULT,
      isActive: true,
    },
    {
      id: 1,
      name: SortNames.DATE,
      isActive: false,
    },
    {
      id: 2,
      name: SortNames.RATING,
      isActive: false,
    },
  ];
  
  const [sortList, setSortList] = useState(sortItems);
  const history = useHistory();
  const query = useQuery();
  const queryName = query.get(QueryTypes.SORT);

  useEffect(() => {
    const id =
      sortItems.find((item) => item.name.toLowerCase() === queryName)
        ?.id || 0;

    setSortList(CommonUtils.toggleIsActiveInArray(id, sortItems));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryName]);


  const handleClick = (id: number, name: string) => {
    const queryValue = name === SortNames.DEFAULT ? `` : name;

    history.push(
      `?${queryString.stringify(
        CommonUtils.concatQueryParams(
          { sort: queryValue.toLowerCase() },
          history.location.search
        )
      )}`
    );

    setSortList(CommonUtils.toggleIsActiveInArray(id, sortItems));
  };

  return (
    <ul className="sort">
      {sortList.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            className={cn(
              `sort__button`,
              `${item.isActive && `sort__button--active`}`
            )}
            onClick={() => handleClick(item.id, item.name)}
          >
            Sort by {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SortFilter;
