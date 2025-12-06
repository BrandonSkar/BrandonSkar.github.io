import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const YV = courses.find(c => c.code === "YV");

export default function YoshiValley() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={YV} hasJPN={YV.hasJPN} children={shortcuts} />;
}
