// Constructor Function - template for creating a kind of object
// -------------------------------------------------------------
// - first letter is always uppercase
// - name is typically SINGULAR
// - name is typically generic ("Product", "User", "Task", etc.)
function Song (songTitle, artistName, albumName, year, seconds) {
  // "this" represents the new object we are creating
  this.title = songTitle;
  this.artist = artistName;
  this.album = albumName;
  this.releaseYear = year;
  this.duration = seconds;

  // some properties always have the same starting value
  this.likes = 0;
  this.playlists = [];
}

// constructor functions are called with the "new" keyword to CREATE objects
// (they make creating objects less repetitive)
var songA = new Song("Poker Face", "Lady Gaga", "The Fame", 2008, 216);
songA.play = function () {
  console.log("PLAYING '" + songA.title + "' by " + songA.artist);
};
songA.pause = function () {
  console.log("PAUSING '" + songA.title + "' by " + songA.artist);
};

var songB = new Song("Creep", "Radiohead", "Pablo Honey", 1993, 236);
songB.play = function () {
  console.log("PLAYING '" + songB.title + "' by " + songB.artist);
};
songB.pause = function () {
  console.log("PAUSING '" + songB.title + "' by " + songB.artist);
};

var songC = new Song("Not Afraid", "Eminem", "Recovery", 2010, 259);
songC.play = function () {
  console.log("PLAYING '" + songC.title + "' by " + songC.artist);
};
songC.pause = function () {
  console.log("PAUSING '" + songC.title + "' by " + songC.artist);
};

console.log(songA);
console.log(songB);
console.log(songC);

songA.play();
songB.play();
songC.play();
