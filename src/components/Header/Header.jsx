import { useContext } from "react"
import "./header.css"
import { EventsContext } from "../../context/events-context"

export function Header () {
    const {eventsDispatch} = useContext(EventsContext)

    function handleInput (e) {
        eventsDispatch({ type: "SEARCH_FILTER", payload: e.target.value });
    }

    return(
        <div className="header_container">
            <h1>Meetup</h1>
            <input type="text" placeholder="search by title" onChange={handleInput}/>
        </div>
    )
}