const EventComponent: React.FC = () => {
	/*
    If we define the event ahead of time and not inline, TS does not know the type of the event.
    The fastest way to get the right type is to write the function inline, then moving the mouse
    over event and copying the type
    */

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	};

	return (
		<div>
			<input onChange={onChange}></input>
		</div>
	);
};

export default EventComponent;
