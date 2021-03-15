import React from "react";
import { setEmojiImage } from "../../interfaces/CommentEmoji.entities";
import { IUserComment } from "../../interfaces/MovieCard.entities";
import CommonUtils from "../../utils/common";

interface IUserCommentProps {
  comment: IUserComment;
  deleteComment: any
}

const UserComment: React.FC<IUserCommentProps> = ({
  comment, deleteComment
}: IUserCommentProps) => {
  const { emotion, userName, date, commentTexts } = comment;

  return (
    <li className="film-details__comment">
      <span className="film-details__comment-emoji">
        <img
          src={setEmojiImage(emotion)}
          width="55"
          height="55"
          alt={emotion}
        />
      </span>
      <div>
        <p className="film-details__comment-text">{commentTexts}</p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">{userName}</span>
          <span className="film-details__comment-day">{CommonUtils.formateDate(date)}</span>
          <button className="film-details__comment-delete" type="button" onClick={() => deleteComment(comment)}>
            Delete
          </button>
        </p>
      </div>
    </li>
  );
};

export default UserComment;
