import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

export default function CoursePage() {
    const { code } = useParams();
    const course = courses.find(c => c.code === code);

    if (!course) return <h1>Course Not Found</h1>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{course.name}</h1>
            <img
                src={`${process.env.PUBLIC_URL}/assets/map-images/${course.code}-course.png`}
                alt={course.name}
                style={{ maxWidth: "500px", width: "100%", borderRadius: "8px" }}
            />

            <p>Shortcuts, videos, and notes will go here.</p>
        </div>
    );
}
