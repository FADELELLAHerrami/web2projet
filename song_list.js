//song list
let All_song = [
   {
     name: "dawi khawi",
     path: "music1.mp3",
     img: "raja1.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "dawi khawi",
     path: "music2.mp3",
     img: "raja2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "music3",
     path: "music3.mp3",
     img: "raja3.jpg",
     singer: "Audio Library"
   },
   {
     name: "music4",
     path: "music4.mp3",
     img: "raja4.jpg",
     singer: "imshahed"
   },
   {
     name: "music5",
     path: "music5.mp3",
     img: "raja3.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "music6",
    path: "music6.mp3",
    img: "raja6.jpg",
    singer: "Magic Free Release"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/