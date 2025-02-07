import React from 'react'
import imh from './imh.png'
import "./section.css";
const Section = () => {

  
        return (
            <div className='section'>
                <div className="container">
                    <h1>Your Own Personal Teacher
                        Live, <br />Online Classes</h1>
                    <div className='card'>
                        <h2> Book your FREE class</h2>
                        <p> Get instant access to our expert teachers and start learning today!</p>
                        <div class="class-grid">
                            <button>Class 1</button>
                            <button>Class 2</button>
                            <button>Class 3</button>
                            <button>Class 4</button>
                            <button>Class 5</button>
                            <button>Class 6</button>
                            <button>Class 7</button>
                            <button>Class 8</button>
                            <button>Class 9</button>
                            <button>Class 10</button>
                            <button>Class 11</button>
                            <button>Class 12</button>
                        </div>
                        <button className="course-button-s">Book Free Demo Class</button>
                    </div>
                </div>
                <img src={imh} />

            </div>

        )
    }

    export default Section
