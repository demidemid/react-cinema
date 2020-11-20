 const movieList = [
  {
    id: 0,
    filmInfo: {
      title: `Made for Each Other`,
      alternativeTitle: `Made for Each Other`,
      totalRaiting: 6.4,
      poster: `https://m.media-amazon.com/images/M/MV5BZDhmYWI4NzItYTU4Ny00ODRlLTk4YTgtZDE2ZDUzZWEwNTJlXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_FMjpg_UX717_.jpg`,
      description: `While on a business trip, an ambitious young lawyer meets and immediately falls in love with a stranger. They wed the following day, and tragedy soon strikes.`,
      director: `John Cromwell`,
      runtime: `1h 32min`,
      actors: [`Carole Lombard`, `James Stewart`, `Charles Coburn`],
      release: {
        countries: `USA`,
        date: `10 February 1939`,
      },
      genres: [`Drama`, `Film-Noir`, `Mystery`],
      writers: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 1,
    filmInfo: {
      title: `Popeye Meets Sinbad`,
      alternativeTitle: `Popeye the Sailor Meets Sindbad the Sailor`,
      totalRaiting: 7.3,
      poster: `https://m.media-amazon.com/images/M/MV5BZTdhMjczYzYtNjFkYy00NjkzLWFiZmYtNDA0YTdjMjRjMGU1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX713_.jpg`,
      description: `The legendary sailors Popeye and Sindbad do battle to see which one is the greatest.`,
      director: `Dave Fleischer, Willard Bowsky`,
      runtime: `16min`,
      actors: [`Jack Mercer`, `Mae Questel`],
      release: {
        countries: `USA`,
        date: `27 November 1936`,
      },
      genres: [`Animation`, `Short`, `Adventure` ],
      writers: [ ],
      ageRating: `9+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 2,
    filmInfo: {
      title: `Sagebrush Trail`,
      alternativeTitle: `Sagebrush Trail`,
      totalRaiting: 5.4,
      poster: `https://m.media-amazon.com/images/M/MV5BNjlhY2IwNGEtNzY1OS00NWYxLWJmYzYtOTA4ZTZhNjJhNzRiXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_FMjpg_UX1200_.jpg`,
      description: `The Duke is wrongly convicted for a killing, but he escapes from prison and heads out west to find the real killer.`,
      director: `Armand Schaefer`,
      runtime: `54min`,
      actors: [ `John Wayne`, `Nancy Shubert`, `Lane Chandler`],
      release: {
        countries: `USA`,
        date: `15 December 1933`,
      },
      genres: [ `Action`, `Drama`, `Romance`],
      writers: [`Lindsley Parsons`, `Lindsley Parsons` ],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 3,
    filmInfo: {
      title: `Santa Claus Conquers The Martians`,
      alternativeTitle: `Santa Claus Conquers The Martians`,
      totalRaiting: 2.7,
      poster: `https://m.media-amazon.com/images/M/MV5BZDllYzM0YjktYWNjOC00MjZjLWE2Y2EtOGRkMTY1N2I3MjUxXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_FMjpg_UX600_.jpg`,
      description: `The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.`,
      director: `Nicholas Webster`,
      runtime: `1h 21min`,
      actors: [ `John Call`, `Leonard Hicks`, `Vincent Beck`],
      release: {
        countries: `USA`,
        date: `14 November 1964`,
      },
      genres: [ `Adventure`, `Comedy`, `Family` ],
      writers: [ `Glenville Mareth`, `Paul L. Jacobson`],
      ageRating: `12+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 4,
    filmInfo: {
      title: `The Dance of Life`,
      alternativeTitle: `The Dance of Life`,
      totalRaiting: 6.5,
      poster: `https://m.media-amazon.com/images/M/MV5BNmM3MGJhMTYtMTIwNi00Nzg5LThhMGMtZmZlZDYyNWY1YTJiXkEyXkFqcGdeQXVyMDI3OTIzOA@@._V1_FMjpg_UY836_.jpg`,
      description: `A vaudeville comic and a pretty young dancer aren't having much luck in their separate careers, so they decide to combine their acts and in order to save money on the road, they get married.`,
      director:  `John Cromwell, A. Edward Sutherland`,
      runtime: `1h 55 min`,
      actors: [`Hal Skelly`, `Nancy Carroll`, `Dorothy Revier` ],
      release: {
        countries: `USA`,
        date: `16 August 1929`,
      },
      genres: [ `Drama`, `Musical`, `Romance`],
      writers: [ `Benjamin Glazer`, `Arthur Hopkins` ],
      ageRating: `8+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [],
  },
  {
    id: 5,
    filmInfo: {
      title: `The Great Flamarion`,
      alternativeTitle: `The Great Flamarion`,
      totalRaiting: 6.5,
      poster: `https://m.media-amazon.com/images/M/MV5BNzcyY2FhNmUtMWVhZC00ZGE1LWE5MDktODE4NWIzZjk4MzNjXkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_FMjpg_UX184_.jpg`,
      description: `Part of an entertainment act, a beautiful but unscrupulous female performer manipulates all the men in her life in order to achieve her aims.`,
      director: `Anthony Mann`,
      runtime: `1h 18min`,
      actors: [ `Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`],
      release: {
        countries: `USA`,
        date: `30 March 1945`,
      },
      genres: [ `Drama`, `Film-Noir`, `Mystery`],
      writers: [ `Anne Wigton`, `Heinz Herald`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 6,
    filmInfo: {
      title: `The Man With The Golden Arm`,
      alternativeTitle: `The Man With The Golden Arm`,
      totalRaiting: 7.4,
      poster: `https://m.media-amazon.com/images/M/MV5BNGJiMzc0M2ItMjEwYy00NmQ0LWFkZmQtZDFlYThlNDMwZDgwXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_FMjpg_UY817_.jpg`,
      description: `A strung-out junkie deals with a demoralizing drug addiction while his crippled wife and card sharks pull him down.`,
      director: `Otto Preminger`,
      runtime: `1h 59min`,
      actors: [`Frank Sinatra`, `Kim Novak`, `Eleanor Parker`],
      release: {
        countries: `Brazil`,
        date: `16 January 1956`,
      },
      genres: [ `Crime`, `Drama`, `Romance`],
      writers: [ `Walter Newman`, `Lewis Meltzer` ],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 7,
    filmInfo: {
      title: `12 Angry Men`,
      alternativeTitle: `12 Angry Men`,
      totalRaiting: 8.9,
      poster: `https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX974_.jpg`,
      description: `A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.`,
      director: `Sidney Lumet`,
      runtime: `1h 36min`,
      actors: [` Henry Fonda`, `Lee J. Cobb`, `Martin Balsam`],
      release: {
        countries: `USA`,
        date: `10 February 1939`,
      },
      genres: [ `Crime`, `Drama` ],
      writers: [`Reginald Rose`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 8,
    filmInfo: {
      title: `Schindler's List`,
      alternativeTitle: `Schindler's List`,
      totalRaiting: 8.9,
      poster: `https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY853_.jpg`,
      description: `In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.`,
      director: `Steven Spielberg`,
      runtime: `3h 15min`,
      actors: [`Thomas Keneally`, `Steven Zaillian`],
      release: {
        countries: `USA`,
        date: `30 November 1993`,
      },
      genres: [`Biography`, `Drama`, `History`],
      writers: [ `Thomas Keneally`, `Steven Zaillian`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [],
  },
  {
    id: 9,
    filmInfo: {
      title: `Pulp Fiction`,
      alternativeTitle: `Pulp Fiction`,
      totalRaiting: 8.9,
      poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1055_.jpg`,
      description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
      director: `Quentin Tarantino`,
      runtime: `2h 34min`,
      actors: [ `John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
      release: {
        countries: `USA`,
        date: `29 September 1995`,
      },
      genres: [`Crime`, `Drama` ],
      writers: [`Quentin Tarantino`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 10,
    filmInfo: {
      title: `The Lord of the Rings: The Return of the King`,
      alternativeTitle: `The Lord of the Rings: The Return of the King`,
      totalRaiting: 8.8,
      poster: `https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX800_.jpg`,
      description: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
      director: `Peter Jackson`,
      runtime: `2h 58min`,
      actors: [`Elijah Wood`, `Ian McKellen`, `Orlando Bloom`],
      release: {
        countries: `USA`,
        date: ` 1 March 2002`,
      },
      genres: [ `Action`, `Adventure`, `Drama`],
      writers: [`J.R.R. Tolkien`, `Fran Walsh` ],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 11,
    filmInfo: {
      title: `The Godfather: Part II`,
      alternativeTitle: `The Godfather: Part II`,
      totalRaiting: 9.0,
      poster: `https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY898_.jpg`,
      description: `The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.`,
      director: `Francis Ford Coppola`,
      runtime: `3h 22min`,
      actors: [ `Al Pacino`, `Robert De Niro`, `Robert Duvall`],
      release: {
        countries: `USA`,
        date: `18 December 1974`,
      },
      genres: [`Crime`, `Drama`],
      writers: [ `Francis Ford Coppola`, `Mario Puzo`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [],
  },
  {
    id: 12,
    filmInfo: {
      title: `The Godfather`,
      alternativeTitle: `The Godfather`,
      totalRaiting: 9.2,
      poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY901_.jpg`,
      description: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
      director: `Francis Ford Coppola`,
      runtime: `2h 55min`,
      actors: [ `Marlon Brando`, `Al Pacino`, `James Caan`],
      release: {
        countries: `USA`,
        date: ` 24 March 1972`,
      },
      genres: [ `Crime`, `Drama`],
      writers: [`Mario Puzo`, `Francis Ford Coppola`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [ ],
  },
  {
    id: 13,
    filmInfo: {
      title: `The Shawshank Redemption`,
      alternativeTitle: `The Shawshank Redemption`,
      totalRaiting: 9.3,
      poster: `https://m.media-amazon.com/images/M/MV5BMmExYjczMTQtYzc3OS00MDA2LWFkZjItZjE0NGM4YTRhYTY2L2ltYWdlXkEyXkFqcGdeQXVyNjMzMjk3ODc@._V1_FMjpg_UY861_.jpg`,
      description: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
      director: `Frank Darabont`,
      runtime: `2h 22min`,
      actors: [ `Tim Robbins`, `Morgan Freeman`, `Bob Gunton`],
      release: {
        countries: `USA`,
        date: `14 October 1994`,
      },
      genres: [`Drama`],
      writers: [ `Stephen King`, `Frank Darabont`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
  {
    id: 14,
    filmInfo: {
      title: `The Good, the Bad and the Ugly`,
      alternativeTitle: `Il buono, il brutto, il cattivo`,
      totalRaiting: 8.8,
      poster: `https://m.media-amazon.com/images/M/MV5BMTU2MDk4MDA3OV5BMl5BanBnXkFtZTgwNTQ4ODE5MDE@._V1_FMjpg_UX348_.jpg`,
      description: `A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.`,
      director: `Sergio Leone`,
      runtime: `2h 41min`,
      actors: [`Clint Eastwood`, `Eli Wallach`, `Lee Van Cleef`],
      release: {
        countries: `Italy`,
        date: `23 December 1966`,
      },
      genres: [`Western`],
      writers: [ `Luciano Vincenzoni`, `Sergio Leone`],
      ageRating: `18+`,
    },
    userDetails: {
      intoWatchList: false,
      isWatched: false,
      isFavorite: false,
      personalRaiting: null,
    },
    comments: [
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
      {
        emotion: `smile.png`,
        userName: `Tim Macoveev`,
        date: `Today`,
        commentTexts: `Booooooooooring`,
      },
    ],
  },
];

export default movieList;