import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import { useEffect, useState } from "react";

function Home({ setFilmSelection }) {
  const [movie, setMovie] = useState([
    {
      id: Math.random(),
      title: "Sweet Girl",
      description:
        "A man (Jason Momoa) vows to avenge those responsible for his wife's death, while protecting his daughter, the only family he has left.",
      posterUrl:
        "https://fr.web.img3.acsta.net/pictures/21/07/12/11/38/1972167.jpg",
      rate: 2
    },

    {
      id: Math.random(),
      title: "The Tomorrow War",
      description:
        "The world is stunned when a group of travelers arrives from the future - precisely the year 2051 - to deliver an urgent message: in 30 years, Humanity will lose a world-class war against a deadly alien species that has come destroy our civilization.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/21/06/22/15/09/2596029.jpg",
      rate: 3
    },

    {
      id: Math.random(),
      title: "Wrong Turn",
      description:
        "A group of friends hiking in the Appalachians deviate from the trail and go deep into the forest where they fall prey to psychopaths who have lived in autarky for several centuries ...",
      posterUrl:
        "https://image.over-blog.com/3QKHwmbQyLnEfcZyC6jLaqwr-IA=/filters:no_upscale()/image%2F1199205%2F20210212%2Fob_649780_0519684-jpg-r-1920-1080-f-jpg-q-x-xxyx.jpg",
      rate: 4
    },

    {
      id: Math.random(),
      title: "Annabelle",
      description:
        "In 1970, in Santa Monica, John Form, a doctor, gave his pregnant wife, Mia, a rare vintage porcelain doll as a gift for their first child. Mia places it in her collection of dolls in the room of their future child.",
      posterUrl:
        "https://i.pinimg.com/originals/9f/cc/8f/9fcc8f236fcd804676e59048a610a969.jpg",
      rate: 5
    },

    {
      id: Math.random(),
      title: "Fear Street",
      description:
        "A colonial town is caught up on a hysterical witch hunt that has deadly consequences for centuries to come, and it's up to the teens of 1994 to try and end their town's curse, before it is over. too late.",
      posterUrl:
        "https://img3.cdn.cinoche.com/images/a1fd9a55f0663432fafab6698261cb3b.jpg",
      rate: 3
    }
  ]);
  const [rateValue, setRateValue] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filtredMovie, setFiltredMovie] = useState(movie);
  const [formDisplay, setFormDisplay] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [moviePosterUrl, setMoviePosterUrl] = useState("");
  const [movieRate, setMovieRate] = useState("");
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    setFiltredMovie(
      movie.filter(
        (el) =>
          el.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          el.rate >= rateValue
      )
    );
  }, [searchValue, rateValue, movie]);

  const handleSubmit = () => {
    setMovie([
      ...movie,
      {
        id: Math.random(),
        title: movieTitle,
        description: movieDescription,
        posterUrl: moviePosterUrl,
        rate: movieRate,
        trailer: trailer
      }
    ]);
    setFormDisplay(false);
  };

  return (
    <div>
      {formDisplay ? (
        <AddMovie
          setMovieTitle={setMovieTitle}
          setMoviePosterUrl={setMoviePosterUrl}
          setMovieRate={setMovieRate}
          setMovieDescription={setMovieDescription}
          setTrailer={setTrailer}
          setFormDisplay={setFormDisplay}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <div className="header">
            <button className="addMovie" onClick={() => setFormDisplay(true)}>
              ADD MOVIE
            </button>
            <Filter
              setSearchValue={setSearchValue}
              setRateValue={setRateValue}
              rateValue={rateValue}
            />
          </div>

          <MovieList
            filtredMovie={filtredMovie}
            setFilmSelection={setFilmSelection}
          />
        </>
      )}
    </div>
  );
}

export default Home;
