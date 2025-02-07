import React from 'react';
import './ComparisonTable.css'; // Create this CSS file for styling

const ComparisonTable = () => {
    return (

        <div className="comparison-table">
            <h1>World’s first of its kind learning pedagogy</h1>
            <p> Private Batch vs Solo Class</p>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Private Batch <span className="recommended-tag">Recommended</span></th>
                        <th>Solo Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Class Size</td>
                        <td>Up to 6 students</td>
                        <td>1 student</td>
                    </tr>
                    <tr>
                        <td>Individual Attention</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Fixed Class Schedule</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Individual Projects</td>
                        <td>✅</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Personalised 1 on 1 Learning Experience</td>
                        <td>❌</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Learning in an interactive & social setting</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Class Recordings covering key concepts</td>
                        <td>✅</td>
                        <td>❌</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;
