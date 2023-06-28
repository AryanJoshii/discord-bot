module.exports = (Discord, client) => {
  
  var presences = [
    {
        type: "WATCHING",
        name: `${client.users.cache.size} people 👀`
    },
    {
        type: "PLAYING",
        name: "with TheObsty"
    },
    {
        type: "LISTENING",
        name: "Spotify 🎧"    
    }]

let i = 0; // an iterator to keep track of your statuses

setInterval(() => {
    if (i > 2) i = 0; // resets the status loop.

    client.user.setPresence({
        activity: {
            type: presences[i].type,
            name: presences[i].name
        }
    });

    i++;
}, 10000);
  
};