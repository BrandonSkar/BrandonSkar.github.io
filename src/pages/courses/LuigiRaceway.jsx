import React, { useState } from "react";
import Tooltip from "../../components/Tooltip";
import CourseLayout from "../CourseLayout.jsx";
import { courses } from "../../data/courses.js";
import "../../styles/LuigiRaceway.css";

const LR = courses.find(c => c.code === "LR");

export default function LuigiRaceway() {
	const shortcuts = {
		original: (
			<ul>
				<li>Flap Shortcut</li>
				<li>3-Lap Myle Style Shortcut</li>
				<li>Wall Jump Shortcut</li>
			</ul>
		),
		jp: (
			<ul>
				<li>3-Lap JP Shortcut</li>
				<li>Flap Shortcut</li>
				<li>0.1 / 0.2 JP Version Shortcut</li>
			</ul>
		)
	};

	return <CourseLayout course={LR} hasJPN={LR.hasJPN} children={shortcuts} />;
}
