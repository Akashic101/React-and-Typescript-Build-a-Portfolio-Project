import { useState, useRef, useReducer, useEffect } from "react";

const users = [
	{ name: "David", age: 23 },
	{ name: "Noelle", age: 24 },
];

const UserSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null); //Create ref with current value "null" and will be an InputElement or Null
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string; age: number } | undefined>(); //A user can only be of type User or undefined, so we use a Union-type


	/*
	With useEffect we can apply effects like auto-focus on an element.
	We do need to check if that element exists before since it could be null

	TODO IF-statement vs inputRef.current?.focus();

	*/

	useEffect(() => {
		if(!inputRef.current) {
			return;
		}
		inputRef.current.focus();
	}, []) //Makes sure this effect can only exist once

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
