import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import VideoModal from "./components/VideoModal";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const videoData = [
  {
    id: 1,
    title: "AI Commercial",
    thumbnail:
      "https://m.media-amazon.com/images/S/aplus-media/vc/09679e0b-d23f-4afb-a821-7bd728d91562.__CR0,0,970,600_PT0_SX970_V1___.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    orientation: "landscape",
  },
  {
    id: 2,
    title: "Tech Animation", 
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/31GjEJUp2EL.jpg",
    video: "https://www.youtube.com/embed/jNQXAC9IVRw",
    orientation: "vertical",
  },
  {
    id: 3,
    title: "Product Showcase",
    thumbnail:
      "https://teknonel.com/wp-content/uploads/2022/06/5-Best-gaming-mouse-under-30-in-2022-min.jpg",
    video: "https://www.youtube.com/embed/M7lc1UVf-VE",
    orientation: "landscape",
  },
  {
    id: 4,
    title: "Lamborghini",
    thumbnail:
      "https://tse2.mm.bing.net/th/id/OIP.udVRZ3t2BwxQW9GlKTu1fgHaNE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    video: "https://www.youtube.com/embed/YyNz4--6fro",
    orientation: "vertical",
  },
  {
    id: 5,
    title: "Motion Graphics",
    thumbnail:
      "https://cubicleninjas.com/wp-content/uploads/2019/09/motion-graphics-examples.jpg",
    video: "https://www.youtube.com/embed/L_jWHffIx5E",
    orientation: "landscape",
  },
  {
    id: 6,
    title: "AI Visualization",
    thumbnail:
      "https://img.freepik.com/premium-photo/innovative-intelligence-artificial-intelligence-depicted-through-brain-digital-elements-vertical_904318-11327.jpg",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
    orientation: "vertical",
  },
  {
    id: 7,
    title: "Digital Art",
    thumbnail: "https://wallpaperaccess.com/full/176937.jpg",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
    orientation: "landscape",
  },
  {
    id: 8,
    title: "Future Tech",
    thumbnail:
      "https://tse3.mm.bing.net/th/id/OIP.hzXCVO3ceyYL35RSiDGBvAHaHn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    video: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    orientation: "vertical",
  },
];

function App() {
  const [activeItem, setActiveItem] = useState("home");
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof videoData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoPlay = (video: (typeof videoData)[0]) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const handleBackToHome = () => {
    setActiveItem("home");
  };

  const handleStartCreating = () => {
    setActiveItem("contact");
  };

  useEffect(() => {
    // Add global styles for animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0) translateX(0) rotate(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(20px) rotate(360deg); opacity: 0; }
      }
      @keyframes shine {
        from { transform: translateX(-100%) rotate(0deg); }
        to { transform: translateX(100%) rotate(5deg); }
      }
      @keyframes gradient-x {
        0% { background-size: 100%; background-position: 0% 0%; }
        50% { background-size: 200%; background-position: 100% 0%; }
        100% { background-size: 100%; background-position: 0% 0%; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Page Content */}
      {activeItem === "home" && (
        <HomePage 
          videoData={videoData}
          onVideoPlay={handleVideoPlay} 
          onStartCreating={handleStartCreating}
        />
      )}
      {activeItem === "portfolio" && (
        <PortfolioPage
          videoData={videoData}
          onVideoPlay={handleVideoPlay}
          onBack={handleBackToHome}
        />
      )}
      {activeItem === "about" && (
        <AboutPage onBack={handleBackToHome} />
      )}
      {activeItem === "contact" && (
        <ContactPage onBack={handleBackToHome} />
      )}

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;