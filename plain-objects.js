// Encapsulation
// - Combining information with functions that work with the information
// - In JavaScript we do that with OBJECTS

// Song
// Information of songs (properties of the object)
// - duration
// - title
// - artist
// - releaseYear
// - album

// Behaviors of songs (methods of the object)
// - play
// - pause

var songA = {
  title: "Poker Face",
  artist: "Lady Gaga",
  album: "The Fame",
  releaseYear: 2008,
  duration: 216,
  play: function () {
    console.log("PLAYING '" + songA.title + "' by " + songA.artist);
  },
  pause: function () {
    console.log("PAUSING '" + songA.title + "' by " + songA.artist);
  }
};

var songB = {};
songB.title = "Creep";
songB.artist = "Radiohead";
songB.album = "Pablo Honey";
songB.releaseYear = 1993;
songB.duration = 236;
songB.play = function () {
  console.log("PLAYING '" + songB.title + "' by " + songB.artist);
};
songB.pause = function () {
  console.log("PAUSING '" + songB.title + "' by " + songB.artist);
};

console.log(songA);
console.log(songB);

songA.play();
songB.play();
