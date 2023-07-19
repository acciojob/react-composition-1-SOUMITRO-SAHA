import React, { useState } from "react";

const Tabs = ({ tabs }) => {
	console.log(tabs);
	const [currentTab, setCurrentTab] = useState(1);
	console.log(currentTab);
	return (
		<div>
			<ul>
				{tabs.map((tab, idx) => {
					return (
						<li key={idx} onClick={() => setCurrentTab(tab.content)}>
							{tab.title} {tab.content}
						</li>
					);
				})}
			</ul>
			<p>This is the content for Tab {currentTab}.</p>
		</div>
	);
};

export default Tabs;
