export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY":
      return {
        ...state,
        clickedCategory: payload,
      };
    case "LIKED_VIDEO":
      return {
        ...state,
        likedVideo: payload,
      };
    case "HISTORY_VIDEO":
      return { ...state, historyVideo: payload };
    case "ARCHIVED_VIDEO":
      return {
        ...state,
        archivedVideo: payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "SINGLE_ID":
      return {
        ...state,
        singleId: payload,
      };
    case "PLAYLIST_NAME":
      return {
        ...state,
        playlistName: payload,
      };
    case "PLAYLIST_VIDEO":
      return { ...state, playlistVideo: payload };
    default:
      return state;
  }
};
