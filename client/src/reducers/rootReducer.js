const initialState = {
  selectedTrack: {
    id: null,
  },
  isPlaying: false,
  selectedArtist: {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF"
    },
    "followers" : {
      "href" : null,
      "total" : 306565
    },
    "genres" : [ "indie folk", "indie pop" ],
    "href" : "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
    "id" : "0OdUWJ0sBjDrqHygGUXeCF",
    "images" : [ {
      "height" : 816,
      "url" : "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
      "width" : 1000
    }, {
      "height" : 522,
      "url" : "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
      "width" : 640
    }, {
      "height" : 163,
      "url" : "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
      "width" : 200
    }, {
      "height" : 52,
      "url" : "https://i.scdn.co/image/4f25297750dfa4051195c36809a9049f6b841a23",
      "width" : 64
    } ],
    "name" : "Band of Horses",
    "popularity" : 59,
    "type" : "artist",
    "uri" : "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF"
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_ARTIST':
      console.log('SELECT_ARTIST');
      return {
        ...state,
        selectedArtist: action.item,
      };
    case 'SELECT_TRACK':
      console.log('SELECT_TRACK');
      console.log('IS PLAYING: ', state.isPlaying);

      let playingState;

      // if you've selected the same track invert the playing state
      if (action.item.id === state.selectedTrack.id) {
        playingState = !state.isPlaying;
      } else {
        playingState = true;
      }
      
      return {
        ...state,
        selectedTrack: action.item,
        isPlaying: playingState,
      };
    default:
      return state;
  }
}

export default rootReducer;