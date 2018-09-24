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

// Prototype - list of all methods for Song objects
Song.prototype.play = function () {
  console.log("PLAYING '" + this.title + "' by " + this.artist);
};

Song.prototype.pause = function () {
  console.log("PAUSING '" + this.title + "' by " + this.artist);
};


// Inheritance - make a new constructor with the structure and methods of the old
// ------------------------------------------------------------------------------
// - you can customize properties and methods in the new one
function CoverSong (coverArtist, songTitle, albumName, year, seconds, oldArtist) {
  // re-use the Song constructor to get the properties (structure)
  Song.call(this, coverArtist, songTitle, albumName, year, seconds);
  // OldFunction.call(this, param1, param2, ...)

  this.originalArtist = oldArtist;
}

// re-use the Song protoype to get the methods
// (must come BEFORE new methods)
CoverSong.prototype = Object.create(Song.prototype);
// NewFunction.prototype = Object.create(OldFunction.prototype);

CoverSong.prototype.compare = function () {
  console.log("The " + this.originalArtist + " version is better.");
};

var coverA = new CoverSong("Knockin' on Heaven's Door", "Guns'N'Roses", "Days of Thunder", 1990, 337, "Bob Dylan");

console.log(coverA);

coverA.play();
coverA.compare();
