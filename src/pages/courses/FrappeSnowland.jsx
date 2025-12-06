import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const FS = courses.find(c => c.code === "FS");

export default function FrappeSnowland() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={FS} hasJPN={FS.hasJPN} children={shortcuts} />;
}
