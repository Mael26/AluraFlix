// import FooterBar from "../components/footerBar/FooterBar.jsx";
import Header from "../components/Header/index.jsx";
// import Home from "../pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NewVideo from "../pages/newVideo/NewVideo.jsx";
// import { VideoProvider } from "../contexts/VideoContext.jsx";
// import Footer from "../components/footer/Footer.jsx";

const AppRoutes = () => {
    return (
        // <VideoProvider>
            <BrowserRouter>
                <div className="app-container">
                    <Header />
                    <div className="content">
                        <Routes>
                            {/* <Route index element={<Home />}></Route> */}
                            {/* <Route path="newVideo" element={<NewVideo />}></Route> */}
                        </Routes>
                    </div>
                    {/* <FooterBar /> */}
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        // </VideoProvider>
    );
}

export default AppRoutes;