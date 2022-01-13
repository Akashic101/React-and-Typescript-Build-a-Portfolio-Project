import { Child, ChildAsFC } from "./child";

const Parent = () => {
	return (
		<>
			<Child
				color={"rot"}
				onClick={(): void => {
					console.log("This button has been pressed");
				}}
			></Child>

			<ChildAsFC
				color={"rot"}
				onClick={(): void => {
					console.log("This button has been pressed");
				}}
			></ChildAsFC>
		</>
	);
};

export default Parent;
