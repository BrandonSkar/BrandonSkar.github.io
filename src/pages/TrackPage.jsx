import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Tooltip from "../components/Tooltip.jsx";
import { courses } from "../data/courses.js";
import { Link } from "react-router-dom";
// Import all shortcuts
import { LR_shortcuts } from "../data/shortcuts/LR";
import { MMF_shortcuts } from "../data/shortcuts/MMF";
import { KTB_shortcuts } from "../data/shortcuts/KTB";
import { KD_shortcuts } from "../data/shortcuts/KD";
import { TT_shortcuts } from "../data/shortcuts/TT";
import { FS_shortcuts } from "../data/shortcuts/FS";
import { CM_shortcuts } from "../data/shortcuts/CM";
import { MR_shortcuts } from "../data/shortcuts/MR";
import { WS_shortcuts } from "../data/shortcuts/WS";
import { SL_shortcuts } from "../data/shortcuts/SL";
import { RRy_shortcuts } from "../data/shortcuts/RRy";
import { BC_shortcuts } from "../data/shortcuts/BC";
import { DKJP_shortcuts } from "../data/shortcuts/DKJP";
import { YV_shortcuts } from "../data/shortcuts/YV";
import { BB_shortcuts } from "../data/shortcuts/BB";
import { RRd_shortcuts } from "../data/shortcuts/RRd";

import "../styles/TrackLayout.css";

// Map of course code to shortcut object
const shortcutMap = {
	LR: LR_shortcuts,
	MMF: MMF_shortcuts,
	KTB: KTB_shortcuts,
	KD: KD_shortcuts,
	TT: TT_shortcuts,
	FS: FS_shortcuts,
	CM: CM_shortcuts,
	MR: MR_shortcuts,
	WS: WS_shortcuts,
	SL: SL_shortcuts,
	RRy: RRy_shortcuts,
	BC: BC_shortcuts,
	DKJP: DKJP_shortcuts,
	YV: YV_shortcuts,
	BB: BB_shortcuts,
	RRd: RRd_shortcuts,
};

export default function TrackPage({ course }) {
	const location = useLocation();
	const [selectedSet, setSelectedSet] = useState("na");
	const [activeShortcutId, setActiveShortcutId] = useState(null);

	const [modalOpen, setModalOpen] = useState(false);
	const [modalSrc, setModalSrc] = useState("");

	const openModal = (src) => {
		setModalSrc(src);
		setModalOpen(true);
	};

	const shortcuts = shortcutMap[course.code] || { na: [], jp: [] };
	const hasJPN = course.hasJPN;

	const currentList = React.useMemo(() => {
		// Put ALL the logic inside the memo
		const list = shortcuts?.[selectedSet];
		return list || [];
	}, [shortcuts, selectedSet]);

	// Set first shortcut as active by default
	React.useEffect(() => {
		if (currentList.length > 0) {
			setActiveShortcutId(currentList[0].id);
		}
	}, [selectedSet, course.code, currentList]);

	const activeShortcut = currentList.find((s) => s.id === activeShortcutId);

	return (
		<div className="layout-wrapper">
			{/* LEFT NAV */}
			<nav className="course-nav">
				{courses.map((c) => (
					<div key={c.code}>
						{location.pathname === `/${c.code}` ? (
							<span className="nav-item active">{c.name}</span>
						) : (
							<Link className="nav-item" onClick={() => setSelectedSet("na")} to={`/${c.code}`}>{c.name}</Link>
						)}
					</div>
				))}
			</nav>

			{/* MAIN CONTENT */}
			<div className="course-page">
				<div className="top-section">
					<div className="left">
						<img
							src={`${process.env.PUBLIC_URL}/assets/map-images/${course.code}-course.png`}
							alt={course.name}
							className="course-image"
						/>

						{/* Shortcut Set Selector */}
						
						<div className="shortcut-selector">
							<button
								className={selectedSet === "na" ? "active" : ""}
								onClick={() => setSelectedSet("na")}
							>
								NA / PAL Shortcuts
							</button>
							{hasJPN && <button
								className={selectedSet === "jp" ? "active" : ""}
								onClick={() => setSelectedSet("jp")}
							>
								{course.code === "LR"
									? "JP 1.0 or JP 1.1 Required"
									: "JP 1.0 Required"}
							</button>}
						</div>
						

						{/* Shortcut Buttons */}
						<div className="shortcut-buttons">
							{currentList.map((s) => (
								<button
									key={s.id}
									className={s.id === activeShortcutId ? "active" : ""}
									onClick={() => setActiveShortcutId(s.id)}
								>
									{s.title}
								</button>
							))}
						</div>
					</div>

					{activeShortcut?.resources && <div className="right">
						<h1 className="title">Resources</h1>
						<div className="resource-container">
							{activeShortcut.resources.map((r, i) => (
								<a
									key={r.link}
									href={r.link}
									target="_blank"
									rel="noopener noreferrer"
									className="resource"
								>
									{r.label}
								</a>
							))}
						</div>
					</div>}
				</div>

				{selectedSet === "jp" && hasJPN && (
					<Tooltip>
						<p
							className="jp-exclaimer"
							onClick={() =>
								window.open(
									"https://www.ebay.com/sch/i.html?_nkw=mario+kart+64+JP+1.0",
									"_blank",
									"noopener,noreferrer"
								)
							}
						>
							⚠ JP 1.0 or JP 1.1 Required (Click for eBay search)
						</p>

						<div>
							<p className="title">
								Ask in Mario Kart Discord for help finding a JP 1.0 copy
							</p>
							<img
								src={`${process.env.PUBLIC_URL}/assets/tooltips/jp-cartridge.png`}
								alt="JP Cartridge"
								className="jp-cartridge"
							/>
						</div>
					</Tooltip>
				)}

				{/* Active Shortcut Display */}
				{activeShortcut && (
					<div className="shortcut-details">
						<h2>{activeShortcut.title}</h2>
						<p className="description">{activeShortcut.description}</p>
						<ul className="list-container">
							{activeShortcut.steps.map(step => (
								<div className="item-container">
									{activeShortcut.id && <li className="item list-item">{step.title}</li>}
									{step.images && <div className="image-container">
										{step.images.map((image, i) => (
											<img key={image} src={image} onClick={() => openModal(image)} alt={`Step ${i + 1}`} className="item image" />
										))}
									</div>}
									{step.snipClips && <div className="snip-container">
										{step.snipClips.map((clip) => (
											<video key={clip} controls className="item snip">
												<source src={clip} type="video/mp4" />
												Your browser does not support the video tag.
											</video>
										))}
									</div>}
									{step.links && <div className="item links-container">
										{step.links.map((link, i) => (
											<a
												key={link.link}
												href={link.link}
												target="_blank"
												rel="noopener noreferrer"
												className="link"
											>
												{link.label}
											</a>
										))}
									</div>}

								</div>
							))}
						</ul>
					</div>
				)}
			</div>
			{modalOpen && (
				<div className="image-modal" onClick={() => setModalOpen(false)}>
					<img src={modalSrc} alt="Enlarged" className="modal-image" />
				</div>
			)}
		</div>
	);
}