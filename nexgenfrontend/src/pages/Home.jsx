import EmblaCarouselReact from "embla-carousel-react";
import React from "react";
import SubscriptionForm from "../components/SubscriptionForm";
import "../style/Home.css";
import ImageCarousel from '../components/ImageCarousel';
import HTMLCarousel from "../components/HTMLCarousel";
import HTMLContent1 from "../components/HTMLcontent1";
import HTMLContent2 from "../components/HTMLContent2";
import img1 from"../assets/CarouselHome1.png";
import img2 from"../assets/CarouselHome2.png";
import img3 from"../assets/CarouselHome3.png";
import img4 from"../assets/CarouselHome4.png";
import img5 from"../assets/CarouselHome5.png";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES1 = [img1,img3,img5,img2,img4]
const SLIDES2 = [<HTMLContent1/>,<HTMLContent2/>]
const Home = () => {
  return (
    
    <div className="home">

      <div className="carousel1">
      <h2>Building the Next Generation of <h1 className="orangetext">Elite Athletes</h1></h2>
        <p>Your journey to becoming a pro starts here.</p>
        <div className="buttonAbout">
          <button>Learn More</button>
        </div>
      </div>
      <div className="scroller">
        <div className="scroller-inner" data-content="LUND LUND LUND">
          <div className="scroller-item">⚠️Webpage Under Construction⚠️</div>
          <div className="scroller-item">⚠️Webpage Under Construction⚠️</div> 
          <div className="scroller-item">⚠️Webpage Under Construction⚠️</div>
        </div>
      </div>
      <div className="shade">
        <ImageCarousel slides={SLIDES1} options={OPTIONS} />
      </div>
      
      <div className="subsForm">
      <SubscriptionForm />
      </div>
      
    </div>
  );
};

export default Home;
