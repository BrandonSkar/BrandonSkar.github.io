import React from "react";
import Tooltip from "../../components/Tooltip";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";

const TT = courses.find(c => c.code === "TT");

export default function ToadsTurnpike() {
	const shortcuts = {
		original: (
			<ul>
				<li>Original Shortcut A</li>
				<li>Original Shortcut B</li>
			</ul>
		),
		jp: (
			<ul>
				<li>JP 1.0 Shortcut A</li>
				<li>JP 1.0 Shortcut B</li>
			</ul>
		)
	};

	return <CourseLayout course={TT} hasJPN={TT.hasJPN} children={shortcuts} />;
}
