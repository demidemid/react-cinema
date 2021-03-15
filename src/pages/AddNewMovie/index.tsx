import React from "react";
import AddNewMovieForm from "../../components/AddNewMovieForm";
import MovieTableList from "../../components/CardDetail/MovieTableList";

const AddNewMoviePage = () => (
  <div className="add-movie">
    <AddNewMovieForm />
    <MovieTableList />
  </div>
);

export default AddNewMoviePage;
