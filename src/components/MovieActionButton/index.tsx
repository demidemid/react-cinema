/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-shadow */
import { ReactNode } from "react";
import cn from "classnames";
import { ReactComponent as WatchlistIcon } from "../../images/icons/icon-watchlist.svg";
import { ReactComponent as WatchedIcon } from "../../images/icons/icon-watched.svg";
import { ReactComponent as FavoriteIcon } from "../../images/icons/icon-favorite.svg";

type OnClickType = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface IButtonProps {
  actionType: ActionTypes;
  onClick: OnClickType;
  children?: ReactNode;
  isActive: boolean;
}

export enum ActionTypes {
  WATCHLIST = `watchlist`,
  WATCHLED = `watched`,
  FAVORITE = `favorite`,
}

const getIconButton = (iconType: ActionTypes) => {
  switch (iconType) {
    case ActionTypes.FAVORITE:
      return <FavoriteIcon />;

    case ActionTypes.WATCHLIST:
      return <WatchlistIcon />;

    case ActionTypes.WATCHLED:
      return <WatchedIcon />;

    default:
      return <></>;
  }
};

const MovieActionButton: React.FC<IButtonProps> = ({
  actionType,
  onClick,
  children,
  isActive,
}: IButtonProps) => {
  const classNames = cn(
    `film-details__action-button`,
    `film-details__action-button--${actionType}`,
    `${isActive && `film-details__action-button--active`}`
  );

  const handleClickAction = (
    evt: React.MouseEvent<HTMLButtonElement>,
    fn: OnClickType
  ) => {
    evt.preventDefault();
    fn(evt);
  };

  return (
    <button
      className={classNames}
      type="button"
      onClick={(evt) => handleClickAction(evt, onClick)}
      title={children?.toString() || actionType}
    >
      {getIconButton(actionType)}
      {children && <span className="film-details__action-button-name">{children}</span>}
    </button>
  );
};

export default MovieActionButton;
