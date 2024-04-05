class song{
     constructor(name, genre, theme, artist){
          this.name=name;
          this.genre=genre;
          this.theme=theme;
          this.artist=artist;
     }
}


const a = new song("Song 1",  "Genre 1", "theme1" ,"Artist 1",);
const b = new song("Song 2", "Genre 2","theme2", "Artist 2", );
const c = new song("Song 3", "Genre 3","theme3" ,"Artist 3");

const songs= [a, b, c];


     // Function to dynamically  recently played songs
function RecentlyPlayed() {
     const recentlyPlayedList = document.getElementById("recentlyPlayed");
     songs.forEach(song => {
         const li = document.createElement("li");
         li.textContent = song.name;
         recentlyPlayedList.appendChild(li);
          });
 }

     // Function to dynamically  artists
function Artists() {
     const artistsList = document.getElementById("artists");
     songs.forEach(song => {
              const li = document.createElement("li");
              li.textContent = song.artist;
              artistsList.appendChild(li);
     });
 }

     // Function to dynamically  genres
function Genres() {
     const genresList = document.getElementById("genres");
     songs.forEach(song => {
         const li = document.createElement("li");
         li.textContent = song.genre;
         genresList.appendChild(li);
     });
}

RecentlyPlayed();
Artists();
Genres();