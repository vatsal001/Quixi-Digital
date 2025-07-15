import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import ServicePages from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePages />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-single/:slug" element={<ProjectSingle />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
