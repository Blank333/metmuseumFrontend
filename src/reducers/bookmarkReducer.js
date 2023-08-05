const initialState = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addBookmark":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case "removeBookmark":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
