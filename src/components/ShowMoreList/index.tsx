/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

interface IShowMoreProps {
  items: any[];
  itemsOnPage: number;
  shomMoreStep: number;
  renderTemplate: any;
}

const ShowMoreList = ({
  items,
  itemsOnPage,
  shomMoreStep,
  renderTemplate,
}: IShowMoreProps) => {
  const [isShowMoreButtonInvisible, setIsShowMoreButtonInvisible] = useState(
    false
  );

  const [itemsOnPageState, setItemsOnPageState] = useState<number>(itemsOnPage);

  useEffect(() => {
    setItemsOnPageState(itemsOnPage);
    setIsShowMoreButtonInvisible(itemsOnPage >= items.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const handleShowMore = () => {
    const nextStepCount = itemsOnPageState + shomMoreStep;

    if (nextStepCount <= items.length) {
      setItemsOnPageState(nextStepCount);
    }

    if (nextStepCount >= items.length) {
      setItemsOnPageState(items.length);
      setIsShowMoreButtonInvisible(true);
    }
  };

  return (
    <>
      <ul className="films-list__container">
        {items?.slice(0, itemsOnPageState).map((card) => renderTemplate(card))}
      </ul>

      {isShowMoreButtonInvisible || (
        <button
          type="button"
          className="films-list__show-more"
          onClick={() => handleShowMore()}
        >
          Show more
        </button>
      )}
    </>
  );
};

export default ShowMoreList;
