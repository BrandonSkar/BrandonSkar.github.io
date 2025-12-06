import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const WS = courses.find(c => c.code === "WS");

export default function WarioStadium() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={WS} hasJPN={WS.hasJPN} children={shortcuts} />;
}
