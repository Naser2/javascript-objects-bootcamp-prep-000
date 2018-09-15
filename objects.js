 const playlist = {
 song: 'I wanna  love you '
 }
   
   // objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
  playlist[arti
const updatePlaylist = function(playlist, artistName, songTitle)  {
// objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artist) {
 return  delete playlist[artist]
}