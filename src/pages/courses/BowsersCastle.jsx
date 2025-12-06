import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const BC = courses.find(c => c.code === "BC");

export default function BowsersCastle() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={BC} hasJPN={BC.hasJPN} children={shortcuts} />;
}
