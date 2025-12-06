import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const DKJP = courses.find(c => c.code === "DKJP");

export default function DKJungleParkway() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={DKJP} hasJPN={DKJP.hasJPN} children={shortcuts} />;
}
