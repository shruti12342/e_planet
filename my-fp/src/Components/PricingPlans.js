import React, { useState } from "react";
import BatchOptions from "./BatchOptions";
import "./PricingPlans.css";

const PricingPlans = () => {
    const [selectedOption, setSelectedOption] = useState("Online");
    const [selectedBatch, setSelectedBatch] = useState("5 Students");

    const handleSelectOption = (value) => {
        setSelectedOption(value);
        setSelectedBatch("5 Students"); // Reset batch selection on mode change
    };

    const handleBatchChange = (batch) => {
        setSelectedBatch(batch);
    };

    const onlinePlans = {
        "5 Students": [
            {
                title: "Monthly Plan",
                classes: "8 Classes",
                curriculum: ["Basic English", "Vocabulary"],
                price: "₹ 1000",
                tag: "Basic",
            },
            {
                title: "6 Month Plan",
                classes: "96 Classes",
                curriculum: ["Basic English", "English Grammar", "Vocabulary"],
                price: "₹ 5500",
                tag: "Most Popular",
            },
            {
                title: "Annual Plan",
                classes: "180 Classes",
                curriculum: [
                    "Basic English",
                    "English Grammar",
                    "Vocabulary",
                    "English Communication",
                ],
                price: "₹ 11000",
                tag: "Popular",
            },
        ],
        "3 Students": [
            {
                title: "Monthly Plan",
                classes: "8 Classes",
                curriculum: ["Basic English", "Vocabulary"],
                price: "₹ 1200",
                tag: "Basic",
            },
            {
                title: "6 Month Plan",
                classes: "96 Classes",
                curriculum: ["Basic English", "English Grammar", "Vocabulary"],
                price: "₹ 6500",
                tag: "Most Popular",
            },
            {
                title: "Annual Plan",
                classes: "180 Classes",
                curriculum: [
                    "Basic English",
                    "English Grammar",
                    "Vocabulary",
                    "English Communication",
                ],
                price: "₹ 13500",
                tag: "Popular",
            },
        ],
        "1 Student": [
            {
                title: "Monthly Plan",
                classes: "8 Classes",
                curriculum: ["Basic English", "Vocabulary"],
                price: "₹ 1500",
                tag: "Basic",
            },
            {
                title: "6 Month Plan",
                classes: "96 Classes",
                curriculum: ["Basic English", "English Grammar", "Vocabulary"],
                price: "₹ 8500",
                tag: "Most Popular",
            },
            {
                title: "Annual Plan",
                classes: "180 Classes",
                curriculum: [
                    "Basic English",
                    "English Grammar",
                    "Vocabulary",
                    "English Communication",
                ],
                price: "₹ 17000",
                tag: "Popular",
            },
        ],
    };

    const offlinePlans = [
        {
            title: "Monthly Plan",
            classes: "6 Classes",
            curriculum: ["Basic English", "Speaking Practice"],
            price: "₹ 2000",
            tag: "Basic",
        },
        {
            title: "6 Month Plan",
            classes: "72 Classes",
            curriculum: ["Basic English", "Grammar", "Speaking Practice"],
            price: "₹ 12000",
            tag: "Most Popular",
        },
        {
            title: "Annual Plan",
            classes: "144 Classes",
            curriculum: [
                "Basic English",
                "Grammar",
                "Speaking Practice",
                "Professional Communication",
            ],
            price: "₹ 22000",
            tag: "Popular",
        },
    ];

    const plans =
        selectedOption === "Online"
            ? onlinePlans[selectedBatch]
            : offlinePlans;

    return (
        <>
            <div className="pricing-header">
                <h1>Pricing Plans</h1>
                <p>Choose the plan that suits you best</p>
            </div>

            <div className="mode-selection">
                <div
                    className={`button-option ${selectedOption === "Online" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Online")}
                >
                    <h3>Online</h3>
                </div>
                <div
                    className={`button-option ${selectedOption === "Offline" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Offline")}
                >
                    <h3>Offline</h3>
                </div>
            </div>

            {selectedOption === "Online" && (
                <BatchOptions
                    selectedBatch={selectedBatch}
                    onBatchChange={handleBatchChange}
                />
            )}

            <div className="pricing-container">
                {plans.map((plan, index) => (
                    <div key={index} className="plan-card">
                        {plan.tag && <span className="plan-tag">{plan.tag}</span>}
                        <h2 className="plan-title">{plan.title}</h2>
                        <p className="plan-classes">{plan.classes}</p>
                        <div className="curriculum">
                            <h3>Curriculum Includes</h3>
                            <ul>
                                {plan.curriculum.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <a href="/" className="view-details">
                                View Detailed Curriculum
                            </a>
                        </div>
                        <h3 className="plan-price">{plan.price}</h3>
                        <button className="buy-now-btn">Buy Now</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PricingPlans;
