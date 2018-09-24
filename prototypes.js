// Constructor Function - template for creating Song objects
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

// Prototype - list of all methods for a kind of object
// ----------------------------------------------------
// - the prototype is connected to the constructor function
// - add methods to the prototype with assignment (=)
// - INSIDE METHODS "this" refers to the object that you called it with
Song.prototype.play = function () {
  console.log("PLAYING '" + this.title + "' by " + this.artist);
};

Song.prototype.pause = function () {
  console.log("PAUSING '" + this.title + "' by " + this.artist);
};


// constructor functions are called with the "new" keyword to CREATE objects
// (prototypes make them even less repetitive)
var songA = new Song("Poker Face", "Lady Gaga", "The Fame", 2008, 216);
var songB = new Song("Creep", "Radiohead", "Pablo Honey", 1993, 236);
var songC = new Song("Not Afraid", "Eminem", "Recovery", 2010, 259);

songA.play();
songB.play();
songC.play();
