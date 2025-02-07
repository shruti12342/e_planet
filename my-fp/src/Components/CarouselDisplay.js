import React, { useState, useEffect } from "react";
import "./Carousel.css";
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

const CarouselDisplay = () => {
    const [carouselData, setCarouselData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch carousel data from Firestore
    useEffect(() => {
        const fetchCarouselData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "testimonals"));
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCarouselData(data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching carousel data: ", error);
                setError("Failed to load testimonials.");
                setLoading(false);
            }
        };
        fetchCarouselData();
    }, []);

    // Navigate to previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    // Navigate to next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Navigate to a specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (loading) {
        return <p>Loading carousel...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (carouselData.length === 0) {
        return <p>No testimonials found.</p>;
    }

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Student Projects & Counting</h2>
            <div className="carousel-wrapper">
                {/* Custom Prev Button */}
                <button className="carousel-prev" onClick={prevSlide}>
                    &#8249;
                </button>

                {/* Carousel Content */}
                <div className="carousel-slide">
                    <div className="carousel-card">
                        <img
                            src={carouselData[currentIndex].imageUrl}
                            alt={carouselData[currentIndex].title}
                            className="carousel-image"
                        />
                        <div className="carousel-details">
                            <h3 className="carousel-name">
                                {carouselData[currentIndex].title}
                            </h3>
                            <p className="carousel-description">
                                {carouselData[currentIndex].description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Custom Next Button */}
                <button className="carousel-next" onClick={nextSlide}>
                    &#8250;
                </button>

                {/* Dots Navigation */}
                <div className="carousel-dots">
                    {carouselData.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselDisplay;
