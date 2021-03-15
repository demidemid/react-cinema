import React from "react";
import userPic from "../../images/bitmap@2x.png";

interface IUserRankProps {
  rank: string;
}

const UserRank = ({ rank }: IUserRankProps) => (
  <p className="statistic__rank">
    Your rank
    <img
      className="statistic__img"
      src={userPic}
      alt="Avatar"
      width="35"
      height="35"
    />
    <span className="statistic__rank-label">{rank}tic</span>
  </p>
);

export default UserRank;
