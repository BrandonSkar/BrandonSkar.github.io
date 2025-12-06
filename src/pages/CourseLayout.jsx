import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "../components/Tooltip.jsx";
import { courses } from "../data/courses.js";
import "../styles/CourseLayout.css";

export default function CourseLayout({ course, hasJPN, children }) {
    const [selected, setSelected] = useState("original");
    const location = useLocation();

    return (
        <div className="layout-wrapper">

            {/* LEFT NAV */}
            <nav className="course-nav">
                {courses.map((c) => {
                    const isActive = location.pathname.endsWith("/" + c.code);

                    return (
                        <div key={c.code}>
                            {isActive ? (
                                <span className="nav-item active">{c.name}</span>
                            ) : (
                                <Link className="nav-item" to={`/${c.code}`}>
                                    {c.name}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* MAIN CONTENT */}
            <div className="course-page">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/map-images/${course.code}-course.png`}
                    alt={course.name}
                    className="course-image"
                />

                {hasJPN && (
                    <div className="shortcut-selector">
                        <button
                            className={selected === "original" ? "active" : ""}
                            onClick={() => setSelected("original")}
                        >
                            Original Shortcuts
                        </button>

                        <button
                            className={selected === "jp" ? "active" : ""}
                            onClick={() => setSelected("jp")}
                        >
                            {course.code === "LR"
                                ? "JP 1.0 or JP 1.1 Required"
                                : "JP 1.0 Required"}
                        </button>
                    </div>
                )}

                <div className="shortcut-pages">
                    <div className={`shortcut-page ${selected === "original" ? "fade-in" : ""}`}>
                        {selected === "original" && children.original}
                    </div>

                    {hasJPN && (
                        <div className={`shortcut-page ${selected === "jp" ? "fade-in" : ""}`}>
                            {selected === "jp" && (
                                <div>
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

                                    {children.jp}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
