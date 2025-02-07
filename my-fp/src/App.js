import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Section from './Components/Section';
import CoursesPage from './Components/CoursePage';
import Navbar from './Components/Navbar';
import PricingPlans from './Components/PricingPlans';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import CurriculumCreators from './Components/CurriculumCreators';
import LearningOutcomes from './Components/LearningOutcomes';
import AboutEplanet from './Components/AboutEplanet';
import ComparisonTable from './Components/ComparisonTable';
import CarouselDisplay from './Components/CarouselDisplay';
import TimeSlotSelector from './Components/TimeSlotSelector';
import Calender from './Components/Calender';



function App() {
  return (
    <div className='body'>
      <Router>
        <Navbar />
        <Routes>
          {/* Home route displays the main page components */}
          <Route
            path="/"
            element={
              <>
                <Section />
                <CoursesPage />
                <LearningOutcomes />
                <Carousel />
                <PricingPlans />
                <ComparisonTable />
                <CurriculumCreators />
                <CarouselDisplay />
                <AboutEplanet />

              </>
            }
          />
          {/* Calender route opens a separate page */}
          <Route path="/calender" element={<TimeSlotSelector />} />
          <Route path='/home' element={<Section/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
