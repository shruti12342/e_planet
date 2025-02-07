import React from "react";
import "./LearningOutcomes.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.png";
import img4 from "./img1.jpg";

const LearningOutcomes = () => {
    const outcomes = [
        { icon: img1, text: "Grammar" },
        { icon: img2, text: "Vocabulary" },
        { icon: img3, text: "Communication" },
        { icon: img1, text: "Comprehension" },
        { icon: img3, text: "Critical Thinking" },
    ];

    return (
        <div className="learning-outcomes">
            <h2>Your Child Will Learn</h2>
            <div className="outcomes-container">
                {outcomes.map((outcome, index) => (
                    <div key={index} className="outcome-item">
                        <div className="outcome-icon">
                            <img src={outcome.icon} alt={`${outcome.text} Icon`} />
                        </div>
                        <p>{outcome.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearningOutcomes;
