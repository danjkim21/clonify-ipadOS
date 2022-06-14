// ---- Get API Keys from config ----
const weatherApiKey = config.OPENWEATHER_API_KEY;
const lastFmApiKey = config.LASTFM_API_KEY;

// ---- Date/time display ----
// Get current time and format
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return '' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min); // + ":" +
  //(sec < 10 ? ("0" + sec) : sec);
}
function getDate() {
  let date = new Date(),
    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    cmonth = months[date.getMonth()],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    cday = days[date.getDay()],
    cnum = date.getDate();
  return '' + cday + ', ' + cmonth + ' ' + cnum;
}
// Set up the clock and date
document.querySelector('.timeInsert1').innerHTML = getTime();
document.querySelector('.timeInsert2').innerHTML = getTime();
document.querySelector('.timeInsert3').innerHTML = getTime();

document.querySelector('.dateInsert1').innerHTML = getDate();
document.querySelector('.dateInsert2').innerHTML = getDate();
document.querySelector('.dateInsert3').innerHTML = getDate();

// Set clock interval to tick clock
setInterval(() => {
  document.querySelector('.timeInsert1').innerHTML = getTime();
  document.querySelector('.timeInsert2').innerHTML = getTime();
  document.querySelector('.timeInsert3').innerHTML = getTime();
}, 1000);
setInterval(() => {
  document.querySelector('.dateInsert1').innerHTML = getDate();
  document.querySelector('.dateInsert2').innerHTML = getDate();
  document.querySelector('.dateInsert3').innerHTML = getDate();
}, 100000);

// ---- Set weather temp and icon ----
window.onload = () => {
  let xhr = new XMLHttpRequest();
  // Request to open weather map
  xhr.open(
    'GET',
    `https://api.openweathermap.org/data/2.5/weather?id=4140963&units=imperial&appid=${weatherApiKey}`
  );
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var prefix = 'wi-';
        var date = new Date();
        var hour = date.getHours();
        var dn = '';
        if (hour > 6 && hour < 20) {
          dn = '';
        } else {
          dn = 'night-';
        }
        let json = JSON.parse(xhr.responseText);
        // console.log(json);
        var code = json.weather[0].id;
        wIcon = prefix + 'owm-' + dn + code;
        // console.log(wIcon);
        document.getElementById('temp').innerHTML = json.main.temp.toFixed(0) + '°';
        document.getElementById('weather-icon').classList.add(wIcon);
      } else {
        console.log('error msg: ' + xhr.status);
      }
    }
  };
  xhr.send();
};

// ---- Set battery level in status bar ----
navigator.getBattery().then(function (battery) {
  // Battery level is between 0 and 1, so we multiply it by 100 to get in percents
  console.log('Battery level: ' + battery.level * 100 + '%');
  document.querySelector('.batteryLevel').innerHTML = `${battery.level * 100}%`;
});

// ---- Messenger app: Send message via input area ----
let input = document.querySelector('.messageBox');
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    let msgValue = document.createElement('p');
    msgValue.innerHTML = document.querySelector('.messageBox').value;

    // alert(msgValue);
    msgValue.setAttribute('class', 'userTextMsg');
    document.querySelector('#messageBody').appendChild(msgValue);
  }
});

// ---- Ipad OS cursor test - Credits to Ralph J. Smit! https://ralphjsmit.com/animated-custom-cursor/ ----
var cursor = document.getElementById('cursor'); //Getting the cursor
var body = document.querySelector('body'); //Get the body element

//Functions for showing and hiding the cursor
//They are referenced the
function showCursor(e) {
  //Function to show/hide the cursor
  if (cursor.classList.contains('cursorHidden')) {
    cursor.classList.remove('cursorHidden');
  }
  cursor.classList.add('cursorVisible');
}

function hideCursor(e) {
  if (cursor.classList.contains('cursorVisible')) {
    cursor.classList.remove('cursorVisible');
  }
  cursor.classList.add('cursorHidden');
}

function mousemove(e) {
  //Function to correctly position the cursor
  showCursor(); //Toggle show/hide

  var cursorWidth = cursor.offsetWidth * 0.5;
  var cursorHeight = cursor.offsetHeight * 0.5;

  var cursorX = e.clientX - cursorWidth; //x-coordinate
  var cursorY = e.clientY - cursorHeight; //y-coordinate
  var cursorPos = `translate(${cursorX}px, ${cursorY}px)`;
  cursor.style.transform = cursorPos;
}

//Eventlisteners
window.addEventListener('mousemove', mousemove); //Attach an event listener
body.addEventListener('mouseleave', hideCursor);

// ---- App interactions ----

// Open Safari app by toggling .hidden class
document.querySelector('.appSafari').addEventListener('click', openSafari);
function openSafari() {
  document.querySelector('#safari').classList.toggle('hidden');
  document.querySelector('#messenger').classList.add('hidden');
  document.querySelector('#music').classList.add('hidden');
  document.querySelector('#mail').classList.add('hidden');
  document.querySelector('#settings').classList.add('hidden');
}

// Open Messenger app
document.querySelector('.appMessenger').addEventListener('click', openMessenger);
function openMessenger() {
  document.querySelector('#messenger').classList.toggle('hidden');
  document.querySelector('#safari').classList.add('hidden');
  document.querySelector('#music').classList.add('hidden');
  document.querySelector('#mail').classList.add('hidden');
  document.querySelector('#settings').classList.add('hidden');
}

// Open Music app
document.querySelector('.appMusic').addEventListener('click', openMusic);
function openMusic() {
  document.querySelector('#music').classList.toggle('hidden');
  document.querySelector('#safari').classList.add('hidden');
  document.querySelector('#messenger').classList.add('hidden');
  document.querySelector('#mail').classList.add('hidden');
  document.querySelector('#settings').classList.add('hidden');
}

// Open Mail app
document.querySelector('.appMail').addEventListener('click', openMail);
function openMail() {
  document.querySelector('#mail').classList.toggle('hidden');
  document.querySelector('#safari').classList.add('hidden');
  document.querySelector('#music').classList.add('hidden');
  document.querySelector('#messenger').classList.add('hidden');
  document.querySelector('#settings').classList.add('hidden');
}

// Open Settings app
document.querySelector('.appSettings').addEventListener('click', openSettings);
function openSettings() {
  document.querySelector('#settings').classList.toggle('hidden');
  document.querySelector('#safari').classList.add('hidden');
  document.querySelector('#music').classList.add('hidden');
  document.querySelector('#mail').classList.add('hidden');
  document.querySelector('#messenger').classList.add('hidden');
}

// Close iPad Login Screen (wipe up)
const outer = document.querySelector('.ipadLoginDisplay');
const next = document.querySelector('.ipadBorderInner');
const loginDisplayContent = document.querySelector('.loginDisplayContent');
const closeLoginBtn = document.querySelector('#dragBarContainer');

closeLoginBtn.addEventListener('click', closeLogin);

function closeLogin(evnt) {
  outer.style.maxHeight = null;
  outer.classList.add('closed');
  loginDisplayContent.classList.add('hidden');
  next.classList.remove('hidden');
  setTimeout(() => {
    outer.classList.add('hidden');
  }, 200);
}

outer.style.maxHeight = outer.scrollHeight + 'px';

// ---- Last.FM Music API Integration ----
// Song WIDGET Selectors
const currentSongImageWidget = document.querySelector('#currentSongImage');
const songTitleWidget = document.querySelector('#songTitleWidget');
const songAuthorWidget = document.querySelector('#songAuthorWidget');
const prevSongBtnWidget = document.querySelector('#prevSongBtnWidget');
const nextSongBtnWidget = document.querySelector('#nextSongBtnWidget');
// Song APP selectors
const currentSongImageApp = document.querySelector('.albumCoverImg');
const songTitleApp = document.querySelector('.songTitle');
const songAuthorApp = document.querySelector('.songAuthor');
const prevSongBtnApp = document.querySelector('.prevSongBtnApp');
const nextSongBtnApp = document.querySelector('.nextSongBtnApp');

// Fetch top 10 songs from Last.FM API
async function fetchTopMusic() {
  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com//2.0/?method=chart.gettoptracks&api_key=${lastFmApiKey}&limit=10&format=json`
    );
    const data = await response.json();
    const tracklist = data.tracks.track;
    console.log(tracklist);
    console.log(tracklist.length);

    // NEXT Song Trigger 'on click' on nextSongBtnWidget & nextSongBtnApp
    let songIterator = 0;
    function nextSong() {
      songIterator += 1;
      songIterator = songIterator % tracklist.length;
      // return tracklist[songIterator];
      return songIterator;
    }
    nextSongBtnWidget.addEventListener('click', displayNextSong);
    nextSongBtnApp.addEventListener('click', displayNextSong);

    function displayNextSong(e) {
      let i = nextSong();
      console.log(i);
      // Updates Current Song WIDGET information
      songTitleWidget.innerHTML = tracklist[i].name;
      songAuthorWidget.innerHTML = tracklist[i].artist.name;
      currentSongImageWidget.src = tracklist[i].image[3]['#text'];
      // Updates Current Song APP information
      songTitleApp.innerHTML = tracklist[i].name;
      songAuthorApp.innerHTML = tracklist[i].artist.name;
      currentSongImageApp.src = tracklist[i].image[3]['#text'];
    }

    // PREVIOUS Song Trigger 'on click' on nextSongBtnWidget & nextSongBtnApp
    // ** TO DO **

  } catch (err) {
    console.error(err);
  }
}
fetchTopMusic();
