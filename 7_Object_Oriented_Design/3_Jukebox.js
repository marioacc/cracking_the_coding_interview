class Jukebox {
    constructor(cdPlayer, user, cdCollection, songSelector) {
        this.CDPlayer = this.CDPlayer;
        this.user = user;
        this.cdCollection = cdCollection;
        this.songSelector = songSelector;
    }

    getCurrentSong(){}
    setUser(){}
}

class CDPlayer{
    constructor(playlist,cd){
        this.playlist = playlist;
        this.cd = cd;
    }

    playSong(){}
    getPlaylist(){}
    setPlaylist(){}

    getCD(){}
    setCD(){}
}

class PlayList{
    constructor(song, songQueue){
        this.song = song;
        this.queue = songQueue;
    }

    getNextSongToPlay(){
        return this.queue.peek();
    }

    queueUpSong(song){
        this.queue.push(song);
    }
}

class CD{/**data for id, artist, songs, etc */}
class Song{/**data for id, title, lenght, etc */}

class User{/*data for id, name, lastname,  */}