/* eslint-disable no-console */
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatsPage from "./pages/Stats";
import CardDetail from "./components/CardDetail";
import { IMovieCard } from "./interfaces/MovieCard.entities";
import Main from "./components/Main";
import Header from "./components/Header";
import store from "./redux/store";
import Footer from "./components/Footer";
import {
  getMovieList,
  getMovieListAction,
  getMovieListIsLoading,
  IAppProps,
} from "./redux/card/card.actions";
import Loader from "./components/Loader";
import AddNewMoviePage from "./pages/AddNewMovie";

store.subscribe(() => {
  console.log(`STORE_STATE: `, store.getState());
});

const App: React.FC<IAppProps> = (ppp) => {
  const dispatch = useDispatch();
  const movieList = useSelector(getMovieList);
  const isLoading = useSelector(getMovieListIsLoading);

  useEffect(() => {
    dispatch(getMovieListAction());
  }, [dispatch]);

  const getSelectedCard = (movieItems: IMovieCard[] = [], id: string) =>
    movieItems.filter((item: IMovieCard) => +id === item.id)[0];

  const getWatchingRankCount = (array: IMovieCard[] = []) => {
    let count = 0;

    if (array && array.length) {
      array.forEach((item: IMovieCard) => {
        if (item.userDetails.isWatched) {
          count += 1;
        }
      });
    }

    return count;
  };

  console.log(
    `APP`,
    `isLoading`,
    isLoading?.toString(),
    `array `,
    Boolean(movieList?.length).toString()
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Header watchingRankCount={getWatchingRankCount(movieList)} />
        <Switch>
          <Route path="/" exact>
            {isLoading ? <Loader /> : <Main movieList={movieList || []} />}
          </Route>
          <Route path="/stats">
            <StatsPage />
          </Route>
          <Route path="/add-new-movie">
            <AddNewMoviePage />
          </Route>
          <Route
            path="/:id"
            render={(props) => {
              const selectedCard = getSelectedCard(
                movieList,
                // eslint-disable-next-line react/prop-types
                props?.match?.params?.id
              );

              return (
                <>
                  {movieList && <Main movieList={movieList} />}

                  {movieList && selectedCard && (
                    <CardDetail card={selectedCard} />
                  )}
                </>
              );
            }}
          />
        </Switch>
      </BrowserRouter>

      <Footer movieCounter={(movieList && movieList.length) || 0} />
    </div>
  );
};

export default App;
