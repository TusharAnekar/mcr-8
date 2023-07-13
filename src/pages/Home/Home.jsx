import "./home.css";
import { useContext } from "react";
import { EventsContext } from "../../context/events-context";

export function Home() {
  const {
    eventsState: { eventType },
    eventsDispatch,
    eventTypeFilteredEvents,
  } = useContext(EventsContext);

  function handleSelect(e) {
    eventsDispatch({ type: "EVENT_TYPE_FILTER", payload: e.target.value });
  }

  return (
    <div className="home_container">
      <div className="filters_container">
        <h2>Meetup Events</h2>

        <select name="" id="" value={eventType} onChange={handleSelect}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="both">Both</option>
        </select>
      </div>

      <div className="events_container">
        {eventTypeFilteredEvents.map(
          ({ id, title, eventStartTime, eventThumbnail, eventType }) => (
            <div key={id} className="event_container">
              <img src={eventThumbnail} alt="People in an event" />
              <p>{eventType}</p>
              <p>{eventStartTime}</p>
              <h3>{title}</h3>
            </div>
          )
        )}
      </div>
    </div>
  );
}
