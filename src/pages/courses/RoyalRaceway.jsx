import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const RRy = courses.find(c => c.code === "RRy");

export default function RoyalRaceway() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={RRy} hasJPN={RRy.hasJPN} children={shortcuts} />;
}
