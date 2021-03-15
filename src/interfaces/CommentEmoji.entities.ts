/* eslint-disable no-shadow */
import Angry from "../images/emoji/angry.png";
import Puke from "../images/emoji/puke.png";
import Sleeping from "../images/emoji/sleeping.png";
import Smile from "../images/emoji/smile.png";
import Trophy from "../images/emoji/trophy.png";

export enum CommentEmojiTypes {
  ANGRY = `angry`,
  PUKE = `puke`,
  SLEEPING = `sleeping`,
  SMILE = `smile`,
  TROPHY = `trophy`,
}

export const CommentEmojies = {
  angry: Angry,
  puke: Puke,
  sleeping: Sleeping,
  smile: Smile,
  trophy: Trophy,
}

export const setEmojiImage = (name: string): string => {
  switch (name) {
    case CommentEmojiTypes.ANGRY:
      return CommentEmojies.angry;
    case CommentEmojiTypes.PUKE:
      return CommentEmojies.puke;
    case CommentEmojiTypes.SLEEPING:
      return CommentEmojies.sleeping;
    case CommentEmojiTypes.SMILE:
      return CommentEmojies.smile;
    case CommentEmojiTypes.TROPHY:
      return CommentEmojies.trophy;

    default:
      return ``;
  }
};