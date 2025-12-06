import React, { useState } from "react";
import "../styles/Tooltip.css";

export default function Tooltip({ children }) {
	const [visible, setVisible] = useState(false);

	return (
		<span
			className="tooltip-wrapper"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
			{children[0]}
			{visible && <div className="tooltip-content">{children.slice(1)}</div>}
		</span>
	);
}
