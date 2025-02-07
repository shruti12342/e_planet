import './App.css';
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
function App() {
  return (
    <div className='body'>
      <Navbar />
      <Section />
      <CoursesPage/>
      <LearningOutcomes />
      <Carousel />
      <PricingPlans />
      <ComparisonTable />
      <CurriculumCreators />
      <CarouselDisplay />
      <AboutEplanet />
      <Footer />
    </div>
  );
}
export default App;
