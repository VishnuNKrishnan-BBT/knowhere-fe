import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './contexts/MainContext'
import AppStyles from './App.module.css'
import Track from './pages/Track/Track'
import Dashboard from './pages/Dashboard/Dashboard';
import NavMenuPrimary from './components/NavMenuPrimary/NavMenuPrimary';
import Favourites from './pages/Favourites/Favourites';
import Analytics from './pages/Analytics/Analytics';
import Search from './pages/Search/Search';
import Settings from './pages/Settings/Settings';
import AboutVehicle from './pages/AboutVehicle/AboutVehicle';
import TrackMap from './pages/TrackMap/TrackMap';
import AssignDriver from './pages/AssignDriver/AssignDriver';

function App() {
  return (
    <ContextProvider>
      <div className={AppStyles.appWrapper}>
        <BrowserRouter>
          <NavMenuPrimary />
          <Routes>
            {/* <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/" element={<Track />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/track" element={<Track />} />
            <Route path="/track/about" element={<AboutVehicle />} />
            <Route path="/assignUser" element={<AssignDriver />} />
            <Route path="/track/birdseye" element={<TrackMap />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
