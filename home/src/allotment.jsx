import React, { useState } from "react";

function AllotmentPage() {
  const [slots, setSlots] = useState([
    { id: 1, level: "Level 1", slot: "A1", occupied: false },
    { id: 2, level: "Level 1", slot: "A2", occupied: true },
    { id: 3, level: "Level 2", slot: "B1", occupied: false },
    { id: 4, level: "Level 2", slot: "B2", occupied: true },
    { id: 5, level: "Level 3", slot: "C1", occupied: false },
    { id: 6, level: "Level 3", slot: "C2", occupied: false },
  ]);

  // Toggle slot occupancy status
  const toggleOccupancy = (id) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === id ? { ...slot, occupied: !slot.occupied } : slot
      )
    );
  };

  return (
    <div className="bg-black text-gray-400 min-h-screen p-6">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Parking Allotment</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className={`p-6 rounded-lg text-center cursor-pointer ${
                slot.occupied ? "bg-red-700" : "bg-green-700"
              }`}
              onClick={() => toggleOccupancy(slot.id)}
            >
              <h3 className="text-xl font-semibold">{slot.level}</h3>
              <p>Slot: {slot.slot}</p>
              <p>Status: {slot.occupied ? "Occupied" : "Available"}</p>
              <button
                className="mt-4 py-2 px-4 bg-gray-800 text-gray-200 rounded hover:bg-gray-700"
                onClick={() => toggleOccupancy(slot.id)}
              >
                Toggle Status
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-800 fixed w-full py-4 px-6 shadow-md z-50">
      <ul className="flex justify-center space-x-8">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Allotments</li>
        <li className="hover:text-white cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
}

export default AllotmentPage;
