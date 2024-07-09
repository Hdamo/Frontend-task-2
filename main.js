let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let playpause_btn=document.querySelector(".play-pause-track");
let next_btn=document.querySelector(".next-track");
let prex_btn=document.querySelector(".prev-track");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider=document.querySelector(".volume_slider");
let curr_time=document.querySelector(".current-time");
let total_duration=document.querySelector(".total-duration");
let track_lyrics=document.querySelector(".vocals");
let track_index=0;
let isPlaying=false;
let updateTimer;

let curr_track= new Audio();
let track_list = [
    {
        name:"Faded",
        artist: "Alan Walker",
        image: "https://imgs.search.brave.com/XNoHLY7ZQOY2JSqva1jJqmXrSbSflFy9E6RHCw3rYpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eW9mc29uZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDUvQWxhbl9XYWxr/ZXJfLV9GYWRlZC5w/bmc",
        path: "Alan Walker - Faded.mp3",
        song_vocals:"You were the shadow to my light\n Did you feel us?\n Another star\n You fade away\n Afraid our aim is out of sight\n Wanna see us\n Alight\n \n Where are you now?\n Where are you now?\n Where are you now?\n Was it all in my fantasy?\n Where are you now?\n Were you only imaginary?\n \n Where are you now?\n Atlantis\n Under the sea\n Under the sea\n Where are you now?\n Another dream\n The monster’s running wild inside of me\n I’m faded\n I’m faded\n So lost, I’m faded\n I’m faded\n So lost, I’m faded\n \n These shallow waters never met what I needed\n I’m letting go a deeper dive\n Eternal silence of the sea, I’m breathing\n Alive\n \n Where are you now?\n Where are you now?\n Under the bright but faded lights\n You’ve set my heart on fire\n Where are you now?\n Where are you now?\n \n Where are you now?\n Atlantis\n Under the sea\n Under the sea\n Where are you now?\n Another dream\n The monster’s running wild inside of me\n I’m faded\n I’m faded\n So lost, I’m faded\n I’m faded\n So lost, I’m faded"
    },
    {
        name:"Counting Stars",
        artist: "One Republic",
        image: "https://imgs.search.brave.com/DDHgXJZ8FM1MLyGDLO6c4YEjjsEfMR8UgzeQraIQAJQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDA0/MDgxNDQ5My1ldTNr/cjMtdDUwMHg1MDAu/anBn",
        path: "OneRepublic - Counting Stars.mp3",
        song_vocals: "Lately, I've been, I've been losing sleep\n Dreaming about the things that we could be\n But, baby, I've been, I've been praying hard\n Said no more counting dollars, we'll be counting stars\n Yeah, we'll be counting stars\n \n I see this life like a swinging vine\n Swing my heart across the line\n And in my face is flashing signs\n Seek it out and ye shall find\n \n Old but I'm not that old\n Young but I'm not that bold\n And I don't think the world is sold\n On just doing what we're told\n \n I feel something so right doing the wrong thing\n And I feel something so wrong doing the right thing\n I couldn't lie, couldn't lie, couldn't lie\n Everything that kills me makes me feel alive\n \n Lately, I've been, I've been losing sleep\n Dreaming about the things that we could be\n But, baby, I've been, I've been praying hard\n Said no more counting dollars, we'll be counting stars\n \n Lately, I've been, I've been losing sleep\n Dreaming about the things that we could be\n But, baby, I've been, I've been praying hard\n Said no more counting dollars, we'll be, we'll be counting stars\n \n I feel your love, and I feel it burn\n Down this river every turn\n Hope is our four-letter word\n Make that money, watch it burn\n \n Old, but I'm not that old\n Young, but I'm not that bold\n And I don't think the world is sold\n On just doing what we're told\n \n And I feel something so wrong doing the right thing\n I couldn't lie, couldn't lie, couldn't lie\n Everything that drowns me makes me wanna fly"
    },
    {
        name:"The River",
        artist: "Axel Johansson",
        image: "https://imgs.search.brave.com/F5rXIPLu_kbsIyLsKJ85A1t_dNLdlOXkixJcs6zH40w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saW5r/c3RvcmFnZS5saW5r/ZmlyZS5jb20vbWVk/aWFsaW5rcy9pbWFn/ZXMvOWQ0MjgyNjQt/NjlhNy00ZWQ5LWJk/ZmQtNjZlMzA4ZmYw/OWQ2L2FydHdvcmst/NDQweDQ0MC5qcGc",
        path: "Axel Johansson - The River (Official Video).mp3",
        song_vocals: "You can kill the lights, you can draw the blinds\n My heart's shackled down, bound to your bed\n Can you stay a while, keep me by your side?\n Feel my scattered heart, fix me, I said\n \n We could lay here underneath the river\n If you stay, if you stay\n We could sleep here underneath the river\n If you stay, if you stay, we could go home\n \n We could go home\n Down below, low, low\n Nobody knows where we will go\n Down below, low, low\n \n Can we stay inside, lay here by the fire?\n Please don't let me go, say it ain't so\n Leave me in the night with no warning sign\n Are we burning out? Mirrors and smoke\n \n We could lay here underneath the river\n If you stay, if you stay\n We could sleep here underneath the river\n If you stay, if you stay, we could go home\n \n We could go home\n Down below, low, low\n Nobody knows where we will go\n Down below, low, low\n \n We could lay here underneath the river\n If you stay, if you stay\n We could sleep here underneath the river\n If you stay, if you stay, we could go home\n \n We could go home\n Down below, low, low\n Nobody knows where we will go (nobody knows, we will go)\n Down below, low, low\n \n We could go home\n Down below, low, low\n Nobody knows (nobody knows) where we will go\n Down below, low, low"
    },
    {
        name:"Do I Wanna Know?",
        artist: "Arctic Monkeys",
        image: "https://imgs.search.brave.com/M2Xdfbos8gXl5dg-BHq-owtp6pUt9PYIaQ4zXdfFBW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXJv/bGVzMmNoYW5zb25z/LmxlbW9uZGUuZnIv/bGliL2ltYWdlcy9h/bGJ1bS81YjA0MGZh/MTdiNDBkLmpwZw",
        path: "Arctic Monkeys - Do I Wanna Know_ (Official Video).mp3",
        song_vocals:"Have you got colour in your cheeks?\n Do you ever get that fear that you can't shift\n The type that sticks around like summat in your teeth?\n Are there some aces up your sleeve?\n Have you no idea that you're in deep?\n I dreamt about you nearly every night this week\n How many secrets can you keep?\n 'Cause there's this tune I found that makes me think of you somehow and I play it on repeat\n Until I fall asleep\n Spilling drinks on my settee\n \n (Do I wanna know?)\n If this feeling flows both ways?\n (Sad to see you go)\n Was sort of hoping that you'd stay\n (Baby, we both know)\n That the nights were mainly made for saying things that you can't say tomorrow day\n \n Crawling back to you\n \n Ever thought of calling when you've had a few?\n 'Cause I always do\n Maybe I'm too busy being yours to fall for somebody new\n Now I've thought it through\n \n Crawling back to you\n \n So have you got the guts?\n Been wondering if your heart's still open and if so I wanna know what time it shuts\n Simmer down and pucker up\n I'm sorry to interrupt. It's just I'm constantly on the cusp of trying to kiss you\n I don't know if you feel the same as I do\n But we could be together if you wanted to\n \n (Do I wanna know?)\n If this feeling flows both ways?\n (Sad to see you go)\n Was sort of hoping that you'd stay\n (Baby, we both know)\n That the nights were mainly made for saying things that you can't say tomorrow day\n \n Crawling back to you (crawling back to you)\n \n Ever thought of calling when you've had a few? (you've had a few)\n 'Cause I always do ('cause I always do)\n Maybe I'm too (maybe I'm too busy) busy being yours to fall for somebody new\n Now I've thought it through\n \n Crawling back to you\n \n (Do I wanna know?)\n If this feeling flows both ways?\n (Sad to see you go)\n Was sort of hoping that you'd stay\n (Baby, we both know)\n That the nights were mainly made for saying things that you can't say tomorrow day\n \n (Do I wanna know?)\n Too busy being yours to fall\n (Sad to see you go)\n Ever thought of calling darling?\n (Do I wanna know?)\n Do you want me crawling back to you?"
    },
    {
        name:"Unstoppable",
        artist: "The Score",
        image: "https://imgs.search.brave.com/gsKzYaPoT6mSTQY-d6RP5-9ckUwRJXSvHaU-y9zRlF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLUt6OFhM/M3NjRFAxNi0wLXQ1/MDB4NTAwLmpwZw",
        path: "The Score - Unstoppable (Lyric Video).mp3",
        song_vocals:"There's a moment\n In your bones when\n When the fire takes over\n Blood is running\n Heart is pumping\n As the battle gets closer\n Ooh, they can say what they want now\n Ooh, 'cause we'll be screaming out\n \n We can be heroes everywhere we go\n We can have all that we ever want\n Swinging like Ali, knocking out bodies\n Standing on top like a champion\n Keep your silver, give me that gold\n You'll remember when I say\n We can be heroes everywhere we go\n Keeping us down is impossible\n 'Cause we're unstoppable\n \n Oh whoa, we're unstoppable\n Oh whoa, we're unstoppable\n \n [Verse 2]\n Every spotlight\n Every sound byte\n Everybody who gave up\n Is just the fuel for\n Wanting it more\n Than anybody against us\n Ooh, they can say what they want now\n Ooh, 'cause we'll be screaming out\n \n We can be heroes everywhere we go\n We can have all that we ever want\n Swinging like Ali, knocking out bodies\n Standing on top like a champion\n Keep your silver, give me that gold\n You'll remember when I say\n We can be heroes everywhere we go\n Keeping us down is impossible\n 'Cause we're unstoppable\n \n Oh whoa, we're unstoppable\n Oh whoa, we're unstoppable\n \n Ooh, they can say what they want now\n Ooh, 'cause we'll be screaming out\n \n We can be heroes everywhere we go\n We can have all that we ever want\n Swinging like Ali, knocking out bodies\n Standing on top like a champion\n Keep your silver, give me that gold\n You'll remember when I say\n We can be heroes everywhere we go\n Keeping us down is impossible\n We're unstoppable"
    },
    {
        name:"Blinding Lights",
        artist: "The Weeknd",
        image: "https://imgs.search.brave.com/mS3E94FwZI_g3OYXUQVPkY3ZQZKJO5vZpRd1j2O1O8g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8xMS90/aGUtd2Vla25kLWJs/aW5kaW5nLWxpZ2h0/cy1jb3Zlci1maW5h/bC1lMTU4MTYyMTg2/NjkwOS5qcGc_dz0x/MDAwJmg9NjY3JmNy/b3A9MQ",
        path: "The Weeknd - Blinding Lights (Official Video).mp3",
        song_vocals:"Yeah\n \n I've been tryna call\n I've been on my own for long enough\n Maybe you can show me how to love, maybe\n I'm going through withdrawals\n You don't even have to do too much\n You can turn me on with just a touch, baby\n \n I look around and\n Sin City's cold and empty (Oh)\n No one's around to judge me (Oh)\n I can't see clearly when you're gone\n \n I said, ooh, I'm blinded by the lights\n No, I can't sleep until I feel your touch\n I said, ooh, I'm drowning in the night\n Oh, when I'm like this, you're the one I trust\n Hey, hey, hey\n \n I'm running out of time\n 'Cause I can see the sun light up the sky\n So I hit the road in overdrive, baby, oh\n \n The city's cold and empty (Oh)\n No one's around to judge me (Oh)\n I can't see clearly when you're gone\n \n I said, ooh, I'm blinded by the lights\n No, I can't sleep until I feel your touch\n I said, ooh, I'm drowning in the night\n Oh, when I'm like this, you're the one I trust\n \n I'm just calling back to let you know (Back to let you know)\n I could never say it on the phone (Say it on the phone)\n Will never let you go this time (Ooh)\n \n I said, ooh, I'm blinded by the lights\n No, I can't sleep until I feel your touch\n Hey, hey, hey\n Hey, hey, hey\n \n I said, ooh, I'm blinded by the lights\n No, I can't sleep until I feel your touch"
    },
]


function loadTrack(track_index){
    clearInterval(updateTimer);
    resetValues();

    curr_track.src=track_list[track_index].path;


    track_art.style.backgroundImage="url(" + track_list[track_index].image + ")";
    track_name.textContent=track_list[track_index].name;
    track_artist.textContent=track_list[track_index].artist;
    now_playing.textContent="Playing song no. " + (track_index+1);
    track_lyrics.innerHTML=track_list[track_index].song_vocals.replace(/\n/g, '<br>');
    updateTimer=setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}

function random_bg_color(){
    colors=["#00ADB5", "#393E46", "#222831", "#36BA98", "#9CDBA6"]
    rand_num_1=Math.floor(Math.random()*colors.length)
    document.querySelector(".player").style.background="linear-gradient(to right, #404343, " + colors[rand_num_1] + ")";
}


function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent="00:00";
    seek_slider.value=0;
}

function playpauseTrack(){
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying=true;
    playpause_btn.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack(){
    curr_track.pause();
    isPlaying=false;
    playpause_btn.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';

}

function nextTrack(){
    if (track_index<track_list.length-1)
        track_index+=1;
    else track_index=0 ;   

    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if (track_index>0)
        track_index-=1;
    else track_index=track_list.length-1;
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto=curr_track.duration*(seek_slider.value/100);
    curr_track.currentTime=seekto;
}

function setVolume() {
    curr_track.volume=volume_slider.value/100;
}

function seekUpdate() {
    let seekPosition=0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
     
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
     
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
      }
}

loadTrack(track_index);



