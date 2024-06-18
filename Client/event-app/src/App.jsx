import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import EventPage from './pages/EventPage';
// import NavBar from './components/NavBar';
import ServicesPage from './pages/ServicesPage';
import ProfilePage from './pages/ProfilePage';
import AllEventPage from './pages/AllEventPage';
import './App.css';
import EntertainmentPage from './pages/EntertainmentPage';
import EventVenuePage from './pages/EventVenuePage';
import SecurityPersonnelPage from './pages/SecurityPersonnelPage';
import McPage from './pages/McPage';
import CateringPage from './pages/CateringPage';
// import All from './components/All';
import DjPage from './pages/DjPage';
import DancerPage from './pages/DancerPage';
import ComedianPage from './pages/ComedianPage';
import MusicPage from './pages/MusicPage';
import CateringServicePage from './pages/CateringServicePage';
import Alls from './components/Alls';
import UpcomingEventPage from './pages/UpcomingEventPage';
import DiscoverVenues from './pages/DiscoverVenues';
import IndividualEvent from './pages/IndividualEvent';
import IndividualVenue from './pages/IndividualVenue';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <div className='p-4'>
          <div className=''>
            <ToastContainer />
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/' element={<EventPage />} />
              <Route path='/services' element={<ServicesPage />} />
              <Route
                path='/services/entertainment'
                element={<EntertainmentPage />}
              />
              <Route
                path='/services/catering'
                element={<CateringServicePage />}
              />
              <Route
                path='/services/securityPersonnel'
                element={<SecurityPersonnelPage />}
              />
              <Route path='/services/entertainment/mc' element={<McPage />} />
              <Route
                path='/services/entertainment/catering'
                element={<CateringPage />}
              />
              <Route path='/services/entertainment/all' element={<Alls />} />
              <Route path='/services/entertainment/dj' element={<DjPage />} />
              <Route
                path='/services/entertainment/dancer'
                element={<DancerPage />}
              />
              <Route
                path='/services/entertainment/comedian'
                element={<ComedianPage />}
              />
              <Route
                path='/services/entertainment/music'
                element={<MusicPage />}
              />
              <Route path='/services/eventVenue' element={<EventVenuePage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/events/page' element={<AllEventPage />} />
              <Route
                path='/event/upcoming-event'
                element={<UpcomingEventPage />}
              />
              <Route path='/venue/discover' element={<DiscoverVenues />} />
              <Route path='/event/:id' element={<IndividualEvent />} />
              <Route path='/venue/:id' element={<IndividualVenue />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
