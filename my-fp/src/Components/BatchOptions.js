import React from "react";
import "./BatchOptions.css";

const BatchOptions = ({ selectedBatch, onBatchChange }) => {
    const batchOptions = ["5 Students", "3 Students", "1 Student"];

    return (
        <div className="batch-options">
            <h3>Batch-wise Pricing</h3>
            <div className="batch-cards">
                {batchOptions.map((batch, index) => (
                    <div
                        key={index}
                        className={`batch-card ${selectedBatch === batch ? "selected" : ""
                            }`}
                        onClick={() => onBatchChange(batch)}
                    >
                        <h4>{batch}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BatchOptions;
