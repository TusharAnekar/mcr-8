import { createContext, useEffect, useReducer } from "react";
import { eventsReducer, initialEventsState } from "../reducers/events-reducer";
import { meetups } from "../db/events";

export const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [eventsState, eventsDispatch] = useReducer(
    eventsReducer,
    initialEventsState
  );

  function getEvents() {
    eventsDispatch({ type: "DISPLAY_EVENTS", payload: meetups });
  }

  useEffect(() => {
    getEvents();
  }, []);

  const searchFilteredEvents = eventsState?.searchInput.length
  ? eventsState.events.filter(({ title }) =>
      title.toLowerCase().includes(eventsState?.searchInput.toLowerCase())
    )
  : eventsState.events;

  const eventTypeFilteredEvents = eventsState.eventType === "both" ? searchFilteredEvents : searchFilteredEvents.filter(({eventType}) => eventsState.eventType === eventType.toLowerCase()) 

  return (
    <EventsContext.Provider value={{ eventsState, eventsDispatch,searchFilteredEvents,eventTypeFilteredEvents }}>
      {children}
    </EventsContext.Provider>
  );
}
