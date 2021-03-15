/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, addMovieItem } from "../../redux/card/card.actions";
import CommonUtils from "../../utils/common";
import Accordeon from "../Accordeon";

const AddNewMovieForm = () => {
  const arrayPlaceholder = `Перечисляти значения через запятую`;
  const [inputs, setInputs] = useState<any>({});
  const movieList = useSelector(getMovieList);

  const dispatch = useDispatch();

  const handleChange = (evt: any) => {
    setInputs({ ...inputs, [evt.target.name]: evt.target.value });
  };

  const makeArrayFromString = (str: string): string[] =>
    str.split(`,`).map((item: string) => item.trim());

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const filmInfo = {
      ...inputs,
      writers: makeArrayFromString(inputs.writers),
      actors: makeArrayFromString(inputs.actors),
      genres: makeArrayFromString(inputs.genres),
      release: {
        countries: makeArrayFromString(inputs.countries),
        date: inputs.date,
      },
    };

    delete filmInfo.countries;
    delete filmInfo.date;

    if (movieList?.length) {
      dispatch(
        addMovieItem({ filmInfo, id: CommonUtils.getUniqId(movieList) })
      );

      Object.keys(inputs).forEach((key: string) => {
        inputs[key] = ``;
      });
    }
  };

  return (
    <Accordeon title="Add new movie">
      <form className="add-movie__form" onSubmit={handleSubmit}>
        <legend className="add-movie__legend">Add new movie</legend>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Title: </span>
          <input
            type="text"
            className="add-movie__input"
            name="title"
            onChange={handleChange}
            value={inputs.title}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Alternative title: </span>
          <input
            type="text"
            className="add-movie__input"
            name="alternativeTitle"
            onChange={handleChange}
            value={inputs.alternativeTitle}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Raiting: </span>
          <input
            type="number"
            className="add-movie__input"
            name="totalRaiting"
            onChange={handleChange}
            value={inputs.totalRaiting}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Poster URL: </span>
          <input
            type="text"
            className="add-movie__input"
            name="poster"
            onChange={handleChange}
            value={inputs.poster}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Description: </span>
          <textarea
            className="add-movie__input"
            name="description"
            cols={10}
            onChange={handleChange}
            value={inputs.description}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Director: </span>
          <input
            type="text"
            className="add-movie__input"
            name="director"
            onChange={handleChange}
            value={inputs.director}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Runtime: </span>
          <input
            type="text"
            className="add-movie__input"
            name="runtime"
            onChange={handleChange}
            value={inputs.runtime}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Actors: </span>
          <input
            type="text"
            className="add-movie__input"
            name="actors"
            onChange={handleChange}
            placeholder={arrayPlaceholder}
            value={inputs.actors}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Countries: </span>
          <input
            type="text"
            className="add-movie__input"
            name="countries"
            onChange={handleChange}
            value={inputs.countries}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Date: </span>
          <input
            type="text"
            className="add-movie__input"
            name="date"
            onChange={handleChange}
            value={inputs.date}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Genres: </span>
          <input
            type="text"
            className="add-movie__input"
            name="genres"
            onChange={handleChange}
            placeholder={arrayPlaceholder}
            value={inputs.genres}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Writers: </span>
          <input
            type="text"
            className="add-movie__input"
            name="writers"
            onChange={handleChange}
            placeholder={arrayPlaceholder}
            value={inputs.writers}
            required
          />
        </label>

        <label className="add-movie__label">
          <span className="add-movie__label-text">Age rating: </span>
          <input
            type="text"
            className="add-movie__input"
            name="ageRating"
            onChange={handleChange}
            value={inputs.ageRating}
            required
          />
        </label>

        <input
          type="submit"
          className="submit-button add-movie__submit-button"
        />
      </form>
    </Accordeon>
  )
};

export default AddNewMovieForm;
