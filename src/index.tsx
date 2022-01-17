import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import EventComponent from "./events/Event.Component";
import UserSearch from "./refs/UserSearch";

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
