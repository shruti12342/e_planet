import React, { useState, useEffect } from "react";
import "./CoursePage.css"; // Include your page styling
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7OuII_7uoDgvomQQbPVwT9ri5bXqs84M",
    authDomain: "akprortfolio.firebaseapp.com",
    databaseURL: "https://akprortfolio-default-rtdb.firebaseio.com",
    projectId: "akprortfolio",
    storageBucket: "akprortfolio.firebasestorage.app",
    messagingSenderId: "784602760468",
    appId: "1:784602760468:web:02238859fa918e89cbee01",
    measurementId: "G-YPLD4B7HP7",
};

// Initialize Firebase app only if it hasn't been initialized already
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Firestore
const db = getFirestore(app);

const CoursesPage = () => {
    const [courses, setCourses] = useState([]); // State to store fetched courses
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle error

    // Fetch courses from Firestore
    const fetchCourses = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "courses"));
            const coursesData = querySnapshot.docs.map((doc) => ({
                id: doc.id, // Add the document ID
                ...doc.data(),
            }));
            setCourses(coursesData); // Store courses in the state
        } catch (error) {
            setError("Error fetching courses: " + error.message);
        } finally {
            setLoading(false); // Set loading to false after fetch is done
        }
    };

    useEffect(() => {
        fetchCourses(); // Fetch courses when component mounts
    }, []);

    // CourseCard Component defined within the same file
    const CourseCard = ({ title, className, imageUrl }) => {
        return (
            <div className="course-card">

                <img className="course-image" src={imageUrl} alt={title} />

                <div className="course-info">
                    <h2>{title}</h2>
                    <p>{className}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="courses-page">
            <h1 className="courses-title">Our Courses</h1>
            {loading && <p>Loading courses...</p>} {/* Show loading text */}
            {error && <p>{error}</p>} {/* Show error message if there's any */}
            <div className="courses-grid">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard key={course.id} {...course} /> // Pass each course as props to CourseCard
                    ))
                ) : (
                    !loading && <p>No courses available.</p> // Display no courses if none exist
                )}
            </div>
        </div>
    );
};

export default CoursesPage;
