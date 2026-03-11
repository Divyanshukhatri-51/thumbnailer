import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import LenisScroll from "./components/LenisScroll";
import Generate from "./pages/Generate";
import Mygeneration from "./pages/Mygeneration";
import YTPreview from "./pages/YTPreview";
import Login from "./components/Login";
import { useEffect } from "react";
import {Toaster} from 'react-hot-toast'

export default function App() {
    const {pathname} = useLocation()

    useEffect(()=> {
        window.scrollTo(0,0)
    },[pathname])
    return (
        <>
            <Toaster />
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/my-generations" element={<Mygeneration />} />
                <Route path="/preview" element={<YTPreview />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}