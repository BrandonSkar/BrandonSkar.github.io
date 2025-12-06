import React from "react";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const KTB = courses.find(c => c.code === "KTB");

export default function KoopaTroopaBeach() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut 1</li>
				<li>Original Shortcut 2</li>
			</ul>
		)
	};

	return <CourseLayout course={KTB} hasJPN={KTB.hasJPN} children={shortcuts} />;
}
