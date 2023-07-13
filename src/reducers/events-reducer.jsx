export const initialEventsState = {
  events: [],
  searchInput: "",
  eventType: "both"
};

export const eventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_EVENTS":
      return { ...state, events: payload };
      case "SEARCH_FILTER":
        return { ...state, searchInput: payload };  
        case "EVENT_TYPE_FILTER":
        return { ...state, eventType: payload };  

    default:
      return state;
  }
};
