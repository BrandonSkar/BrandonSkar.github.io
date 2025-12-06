import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const MR = courses.find(c => c.code === "MR");

export default function MarioRaceway() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={MR} hasJPN={MR.hasJPN} children={shortcuts} />;
}
