import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import OurVision from "./components/OurVision/OurVision";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import DonationCards from "./components/DonationCards/DonationCards";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import Contact from "./components/Pages/Contact";
import Donation from "./pages/Donation";
import CreateDonation from "./pages/CreateDonation";
import MyDonations from './pages/MyDonations';
import MyCampaigns from './pages/MyCampaigns';
import EditCampaign from './pages/EditCampaign';

const Home = () => {
  return (
    <>
      <Hero />
      <OverviewCounter />
      <OurVision />
      <Banner />
      <Banner2 />
      <VideoBanner />
      <Blogs />
    </>
  );
};

const App = () => {
  return (
    <main className='overflow-x-hidden dark:bg-gray-900 bg-white'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonationCards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/create-donation" element={<CreateDonation />} />
        <Route path="/my-donations" element={<MyDonations />} />
        <Route path="/my-campaigns" element={<MyCampaigns />} />
        <Route path="/edit-campaign/:id" element={<EditCampaign />} />
      </Routes>
      <Footer/>
    </main>
  );
};

export default App;
