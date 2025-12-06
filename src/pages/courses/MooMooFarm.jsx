import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const MMF = courses.find(c => c.code === "MMF");

export default function MooMooFarm() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
		// No JP shortcuts
	};

	return <CourseLayout course={MMF} hasJPN={MMF.hasJPN} children={shortcuts} />;
}
