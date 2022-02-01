import PLANETS from "../images/planets.png";
import TOURISM from "../images/tourism.png";
import APOD from "../images/apod.png";
import ROVER from "../images/rover.png";
import NEO from "../images/neo.png";
import GAMES from "../images/games.png";

const projectsData = [
  {
    title: "planets facts",
    picture: PLANETS,
    text: "Discover the planets of the solar system and their main properties",
    btn: "explore",
    link: "/:earth",
  },
  {
    title: "picture of the day",
    picture: APOD,
    text: "Daily picture from the NASA apod API",
    btn: "visit",
  },
  {
    title: "mars rover photos",
    picture: ROVER,
    text: "image data gathered by NASA's rovers on Mars",
    btn: "visit",
  }, 
  {
    title: "space tourism",
    picture: TOURISM,
    text: "So, you want to travel to Space?  Let’s face it!",
    btn: "visit",
  }, 
  {
    title: "asteroid tracker",
    picture: NEO,
    text: "Search for Asteroids based on their closest approach date to Earth",
    btn: "search",
  },

  {
    title: "space games",
    picture: GAMES,
    text: "Arcade games, quizz, memorie game, hangman ...",
    btn: "play",
  },


];

export default projectsData;
