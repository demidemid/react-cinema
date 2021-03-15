/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import {
  CommentEmojiTypes,
  setEmojiImage,
} from "../../interfaces/CommentEmoji.entities";

interface IAppComment {
  sendComment: (comment: IAddNewComment) => void;
}

export interface IAddNewComment {
  selectedEmoji: string;
  textarea: string;
}

const AddComment = ({ sendComment }: IAppComment) => {
  const [selectedEmoji, setSelectedEmoji] = useState(``);
  const [textarea, setTextarea] = useState(``);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedEmoji && textarea) {
      setIsButtonDisabled(false);
    }
  }, [selectedEmoji, textarea]);

  const addComment = (comment: IAddNewComment) => {
    if (selectedEmoji && textarea) {
      sendComment(comment);
      setSelectedEmoji(``);
      setTextarea(``);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <div className="film-details__new-comment">
      <div className="film-details__add-emoji-label">
        {selectedEmoji && (
          <img
            src={setEmojiImage(selectedEmoji)}
            width="55"
            height="55"
            alt="emoji"
          />
        )}
      </div>

      <label className="film-details__comment-label">
        <textarea
          className="film-details__comment-input"
          placeholder="Select reaction below and write comment here"
          name="comment"
          onChange={(e) => setTextarea(e.target.value)}
          value={textarea}
        />
      </label>

      <button
        className="submit-button film-details__comment-submit-button"
        type="button"
        onClick={() => addComment({ selectedEmoji, textarea })}
        disabled={isButtonDisabled}
      >
        Submit
      </button>

      <ul className="film-details__emoji-list">
        {Object.values(CommentEmojiTypes).map((type) => (
          <li className="film-details__emoji-list-item" key={type}>
            <input
              className="film-details__emoji-item visually-hidden"
              name="comment-emoji"
              type="radio"
              id={type}
              value="sleeping"
              onClick={() => setSelectedEmoji(type)}
            />
            <label className="film-details__emoji-label" htmlFor={type}>
              <img
                src={setEmojiImage(type)}
                width="30"
                height="30"
                alt="emoji"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddComment;
