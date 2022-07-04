const SongsManager = function () {
  let songs = {};
  const addSong = function (title, link) {
    const value = link.split('https://www.youtube.com/watch?v=').pop();
    songs[title] = value;
  };
  const getSong = (name) => {
    console.log('https://www.youtube.com/watch?v=' + songs[name]);
  };
  return {
    addSong: addSong,
    getSong: getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong('sax', 'https://www.youtube.com/watch?v=3JZ4pnNtyxQ');
songsManager.addSong('how long', 'https://www.youtube.com/watch?v=CwfoyVa980U');
songsManager.addSong("ain't me", 'https://www.youtube.com/watch?v=D5drYkLiLI8');

songsManager.getSong('how long'); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
