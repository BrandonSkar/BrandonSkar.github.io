import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const SL = courses.find(c => c.code === "SL");

export default function SherbetLand() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={SL} hasJPN={SL.hasJPN} children={shortcuts} />;
}
