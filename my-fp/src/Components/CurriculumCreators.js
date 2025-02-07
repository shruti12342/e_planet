import React, { useState, useEffect } from "react";
import CreatorCard from "./CreatorCard";
import "./curriculum.css";
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

// Initialize Firebase app
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Firestore
const db = getFirestore(app);

const CurriculumCreators = () => {
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCreators = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "teachers"));
                const creatorList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCreators(creatorList);
            } catch (error) {
                console.error("Error fetching creators:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCreators();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="curriculum-creators">
            <h1>Meet our Teachers</h1>
            <div className="creators-container">
                {creators.length === 0 ? (
                    <p>No creators found.</p>
                ) : (
                    creators.map((creator, index) => (
                        <CreatorCard
                            key={index}
                            name={creator.teacherName}
                            title={creator.educationAndAchievement}
                            image={creator.imageUrl || ""}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default CurriculumCreators;
