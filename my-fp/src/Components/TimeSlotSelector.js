import React, { useState, useEffect } from 'react';
import './TimeSlotSelector.css';
import { getDatabase, ref, push, onValue } from "firebase/database";

function TimeSlotSelector() {
    const [selectedSlot, setSelectedSlot] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        className: "",
        subject: "",
    });
    const [bookings, setBookings] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    // Generate time slots
    const generateTimeSlots = (startHour, endHour) => {
        const slots = [];
        for (let hour = startHour; hour < endHour; hour++) {
            const start = `${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? 'AM' : 'PM'}`;
            const end = `${(hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12} ${(hour + 1) < 12 ? 'AM' : 'PM'}`;
            slots.push(`${start} - ${end}`);
        }
        return slots;
    };

    const timeSlots = generateTimeSlots(9, 18); // 9 AM to 6 PM

    // Get tomorrow's and the day after tomorrow's dates
    const getFormattedDate = (daysAhead) => {
        const date = new Date();
        date.setDate(date.getDate() + daysAhead); // Add daysAhead to current date
        return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' }); // Format as 'DD MMM, YYYY'
    };

    const tomorrow = getFormattedDate(1);
    const dayAfterTomorrow = getFormattedDate(2);

    // Default selected date: tomorrow on page load
    useEffect(() => {
        setSelectedDate(tomorrow);
    }, []);

    // Handle click on a time slot
    const handleClick = (slot) => {
        // Only show form if slot is not already booked for selected date
        if (!bookings.some(booking => booking.slot === slot && booking.date === selectedDate)) {
            setSelectedSlot(slot);
            setShowForm(true);
        }
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Save data to Firebase under the selected date
        const db = getDatabase();
        const dbRef = ref(db, 'bookings');
        push(dbRef, {
            ...formData,
            slot: selectedSlot,
            date: selectedDate, // Save the selected date as well
        })
            .then(() => {
                alert("Booking submitted successfully!");
                setShowForm(false);
                setFormData({ name: "", className: "", subject: "" });
                setSelectedSlot("");
            })
            .catch((error) => {
                console.error("Error submitting booking:", error);
            });
    };

    // Fetch and listen to data from Firebase
    useEffect(() => {
        const db = getDatabase();
        const dbRef = ref(db, 'bookings');
        const unsubscribe = onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            const bookingsList = data ? Object.values(data) : [];
            setBookings(bookingsList);
        });

        // Cleanup listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="timeslot-container">
            <div className="dates">
                <button 
                    className={`date-button ${selectedDate === tomorrow ? "selected" : ""}`} 
                    onClick={() => setSelectedDate(tomorrow)}
                >
                    {tomorrow}
                </button>
                <button 
                    className={`date-button ${selectedDate === dayAfterTomorrow ? "selected" : ""}`} 
                    onClick={() => setSelectedDate(dayAfterTomorrow)}
                >
                    {dayAfterTomorrow}
                </button>
            </div>

            <h2>Select a Time Slot for {selectedDate}</h2>
            <div className="button-container">
                {timeSlots.map((slot, index) => {
                    const isBooked = bookings.some(booking => booking.slot === slot && booking.date === selectedDate);
                    return (
                        <button
                            key={index}
                            onClick={() => handleClick(slot)}
                            className={`timeslot-button ${selectedSlot === slot ? "selected" : ""} ${isBooked ? "booked" : ""}`}
                            disabled={isBooked} // Disable the button if booked for selected date
                        >
                            {slot}
                        </button>
                    );
                })}
            </div>

            {showForm && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Book Time Slot: {selectedSlot}</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Class Name:</label>
                                <input
                                    type="text"
                                    name="className"
                                    value={formData.className}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Subject:</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TimeSlotSelector;
