import React, { useEffect } from "react";
import BrowseByCategory from "../components/home/BrowseByCategory";
import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";
import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    AOS.refresh();    
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <Landing />
        </div>


        <div
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <LandingIntro />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <HotCollections />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <NewItems />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <TopSellers />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <BrowseByCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
