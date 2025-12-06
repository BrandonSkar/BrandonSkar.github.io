import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const BB = courses.find(c => c.code === "BB");

export default function BansheeBoardwalk() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={BB} hasJPN={BB.hasJPN} children={shortcuts} />;
}
