import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/Event.Component";

const App = () => {
	return (
		<>
			<div>
				<GuestList />
			</div>
			<div>
				<UserSearch />
			</div>
			<div>
				<EventComponent />
			</div>
		</>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
