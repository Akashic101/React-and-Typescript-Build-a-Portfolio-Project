import { Component } from "react";

interface User {
	name: string;
	age: number;
}

interface UserSearchProps {
	users: User[];
}

interface UserSearchState {
	name: string;
	user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
	state: UserSearchState = {
		name: "",
		user: undefined,
	};

	onClick = () => {
		const foundUser = this.props.users.find((user) => {
			return user.name === this.state.name;
		});

		this.setState({ user: foundUser });
	};

	render() {
		const { name, user } = this.state;
		return (
			<div>
				<h3>User Search</h3>
				<input
					value={name}
					onChange={(event) => this.setState({ name: event.target.value })}
				></input>
				<button onClick={this.onClick}>Find User</button>
				<div>
					{user && user.name}
					{/*Only access user.name if user is truthy (not undefined);*/}
					{user && user.age}
				</div>
			</div>
		);
	}
}

export default UserSearch;
