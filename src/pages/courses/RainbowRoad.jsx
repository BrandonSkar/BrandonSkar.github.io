import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const RRd = courses.find(c => c.code === "RRd");

export default function RainbowRoad() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={RRd} hasJPN={RRd.hasJPN} children={shortcuts} />;
}
