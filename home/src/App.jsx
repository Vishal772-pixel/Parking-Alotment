import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-gray-400 min-h-screen">
      <main className="container mx-auto py-10 px-4">
        <VehicleContainers />
        <ParkingCarousel />
        <ExcitingSection />
      </main>
    </div>
  );
}

function VehicleContainers() {
  return (
    <section className="mt-20 mb-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Available Parking Categories</h2>
      <div className="flex justify-around flex-wrap gap-4">
        <div className="bg-gray-800 p-6 rounded-lg text-center w-40 h-32 flex items-center justify-center">Car Parking</div>
        <div className="bg-gray-800 p-6 rounded-lg text-center w-40 h-32 flex items-center justify-center">Bike Parking</div>
        <div className="bg-gray-800 p-6 rounded-lg text-center w-40 h-32 flex items-center justify-center">Truck Parking</div>
        <div className="bg-gray-800 p-6 rounded-lg text-center w-40 h-32 flex items-center justify-center">Bicycle Parking</div>
      </div>
    </section>
  );
}

function ParkingCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Parking Spots Overview</h2>
      <Slider {...settings}>
        <div className="flex justify-center items-center bg-gray-800 p-20 rounded-lg">
          <h3 className="text-xl">Level 1 - 50 spots available</h3>
        </div>
        <div className="flex justify-center items-center bg-gray-800 p-20 rounded-lg">
          <h3 className="text-xl">Level 2 - 30 spots available</h3>
        </div>
        <div className="flex justify-center items-center bg-gray-800 p-20 rounded-lg">
          <h3 className="text-xl">Level 3 - 20 spots available</h3>
        </div>
      </Slider>
    </section>
  );
}

function ExcitingSection() {
  const [parkingSpots, setParkingSpots] = React.useState(100);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setParkingSpots((prevSpots) => Math.max(prevSpots - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-10 bg-gray-800 p-6 rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Exciting Feature: Live Parking Spot Countdown</h2>
      <p className="text-4xl font-bold text-green-400">Available Parking Spots: {parkingSpots}</p>
    </section>
  );
}

export default App;
