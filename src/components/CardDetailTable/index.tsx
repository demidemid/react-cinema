import React from "react";
import { IFilmInfo } from "../../interfaces/MovieCard.entities";
import CommonUtils from "../../utils/common";

interface IMovieDetailTableProps {
  filmInfo: IFilmInfo;
}

const CardDetailTable = ({ filmInfo }: IMovieDetailTableProps) => {
  const {
    title,
    director,
    runtime,
    actors,
    release,
    genres,
    writers,
    alternativeTitle,
    totalRaiting,
    description,
  } = filmInfo;

  // eslint-disable-next-line no-console
  console.log(`tablet: `, )

  return (
    <div className="film-details__info">
      <div className="film-details__info-head">
        <div className="film-details__title-wrap">
          <h3 className="film-details__title">{alternativeTitle}</h3>
          <p className="film-details__title-original">Original: {title}</p>
        </div>

        <div className="film-details__rating">
          <p className="film-details__total-rating">{totalRaiting}</p>
        </div>
      </div>

      <table className="film-details__table">
        <tbody>
          <tr className="film-details__row">
            <td className="film-details__term">Director</td>
            <td className="film-details__cell">{director}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">
              Writer{CommonUtils.getPlural(writers?.length)}
            </td>
            <td className="film-details__cell">{writers?.join(`, `)}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">
              Actor{CommonUtils.getPlural(actors?.length)}
            </td>
            <td className="film-details__cell">{actors.join(`, `)}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Release Date</td>
            <td className="film-details__cell">{release.date}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Runtime</td>
            <td className="film-details__cell">{runtime}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Country</td>
            <td className="film-details__cell">
              {release.countries.join(`, `)}
            </td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">
              Genre{CommonUtils.getPlural(genres?.length)}
            </td>
            <td className="film-details__cell">
              {genres.map((genre: string) => (
                <span key={genre} className="film-details__genre">
                  {genre}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      <p className="film-details__film-description">{description}</p>
    </div>
  );
};

export default React.memo(CardDetailTable);
