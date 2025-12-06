import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const CM = courses.find(c => c.code === "CM");

export default function ChocoMountain() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={CM} hasJPN={CM.hasJPN} children={shortcuts} />;
}
