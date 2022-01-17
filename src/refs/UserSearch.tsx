import { useState, useRef, useReducer } from "react";

const users = [
	{ name: "David", age: 23 },
	{ name: "Noelle", age: 24 },
];

const UserSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null); //Create ref with current value "null" and will be an InputElement or Null
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string; age: number } | undefined>(); //A user can only be of type User or undefined, so we use a Union-type

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});

		setUser(foundUser);
	};

	return (
		<div>
			<h3>User Search</h3>
			<input
				ref={inputRef}
				value={name}
				onChange={(event) => setName(event.target.value)}
			></input>
			<button onClick={onClick}>Find User</button>
			<div>
				{user && user.name}
				{/*Only access user.name if user is truthy (not undefined);*/}
				{user && user.age}
			</div>
		</div>
	);
};

export default UserSearch;
