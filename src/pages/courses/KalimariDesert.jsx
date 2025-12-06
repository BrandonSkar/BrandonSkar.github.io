import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const KD = courses.find(c => c.code === "KD");

export default function KalimariDesert() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={KD} hasJPN={KD.hasJPN} children={shortcuts} />;
}
