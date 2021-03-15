import React from "react";
import { useSelector } from "react-redux";
import { IMovieCard } from "../../../interfaces/MovieCard.entities";
import { getMovieList } from "../../../redux/card/card.actions";

const MovieTableList = () => {
  const movieList = useSelector(getMovieList);
  const reverseMovieList = [...(movieList || [])].reverse() ;

  return (
    <article className="table-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Poster</th>
            <th>Name</th>
            <th>Year</th>
            <th>Description</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {reverseMovieList.map((item: IMovieCard) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.filmInfo.poster} alt="Movie" height="120" />
              </td>
              <td>{item.filmInfo.title}</td>
              <td>{item.filmInfo.release.date}</td>
              <td>{item.filmInfo.description}</td>
              <td>{item?.comments?.length || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default MovieTableList;
