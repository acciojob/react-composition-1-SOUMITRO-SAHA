import React from "react";
import "./../styles/App.css";
import Tabs from "./Tabs.Component";

const App = () => {
	const data = [
		{
			title: "Tab",
			content: 1,
		},
		{
			title: "Tab",
			content: 2,
		},
		{
			title: "Tab",
			content: 3,
		},
	];
	return (
		<div>
			{/* Do not remove the main div */}
			<Tabs tabs={data} />
		</div>
	);
};

export default App;
