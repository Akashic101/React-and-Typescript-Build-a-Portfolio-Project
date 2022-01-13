interface ChildProps {
	color: string;
    onClick: () => void; //This is how you define a function-property with no arguments and no return-value
}

/*
With this approach TS does not know we are creating a React-Component
and there will not give us access to the properties of it
*/
export const Child = ({ color, onClick }: ChildProps) => {
	return <div>{color}
    <button onClick={onClick}>Click me</button></div>;
};

/*
Creating a FC or FunctionComponent (both work, it does the same) tells TS that this is a React-Component
Therefore we will have access to its properties, for example ChildAsFc.displayName

If you use this approach you can define a component which can directly recieve children
*/
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
	return <div>{color}
    <button onClick={onClick}>Click me</button></div>;
};
