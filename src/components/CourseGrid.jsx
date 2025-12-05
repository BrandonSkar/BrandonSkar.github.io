import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import "../styles/CourseGrid.css";

export default function CourseGrid() {
    return (
        <div className="course-grid">
            {courses.map(c => (
                <Link key={c.code} to={`/${c.code}`}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/map-images/${c.code}-course.png`}
                        alt={c.name}
                    />
                </Link>
            ))}
        </div>
    );
}
