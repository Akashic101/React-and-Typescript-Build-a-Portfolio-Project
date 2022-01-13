import { useState } from "react";

/*
Using useState makes a component controlled
*/

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
	const [guests, setGuests] = useState<string[]>([]);
	//By default TS does not know what type the array is, thus never[]
	//Adding <string[]> makes sure that TS knows that this will be a string-array

	const onClick = () => {
		setName("");
		setGuests([...guests, name]); //This takes the current array and pushes the new element to it
	};

	return (
		<div>
			<h3>Guest List</h3>
			<input value={name} onChange={(event) => setName(event.target.value)} />
			<button onClick={onClick}>Add Guest</button>
		</div>
	);
};

export default GuestList;
