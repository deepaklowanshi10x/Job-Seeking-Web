import React, { useEffect, useContext } from "react";
import "./App.css";
import { context } from "./main";
import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import MyJobs from "./components/Job/MyJobs";
import PostJobs from "./components/Job/PostJob";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplication";
import NotFound from "./components/NotFound/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toas";

const App = () => {
  const { isAuthorized, setIsAuthorized, setuser } = useContext(context);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get("", { withCredentials: treu });
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Routes path="/login" element={<Login />} />
          <Routes path="/register" element={<Register />} />
          <Routes path="" element={<Home />} />
          <Routes path="/job/getall" element={<Jobs />} />
          <Routes path="/job/:id" element={<JobDetails />} />
          <Routes path="/job/post" element={<PostJobs />} />
          <Routes path="/job/me" element={<MyJobs />} />
          <Routes path="/application/:id" element={<Application />} />
          <Routes path="/application/me" element={<MyApplications />} />
          <Routes path="*" element={<NotFound />} />
        </Routes> 
        <Footer />
        <Toaster/>
      </Router>
    </>
  );
};

export default App;
