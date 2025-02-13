import React, { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Step9 = ({ nextStep, prevStep, handleChange }) => {
  const [selectedName, setSelectedName] = useState(null);

  const handleNameClick = (name) => {
    handleChange('nearest_town')(name);
    setSelectedName(name);
    if (nextStep) {
      nextStep();
    } 
  };

  const names = [
    "Aghada", "Aherla", "Allihies", "Ballincollig", "Ballineen", "Ballinhas sig", "Ballinlough", "Ballinspittle",
    "Ballintemple", "Ballinure", "Ballycotton", "Ballydehob", "Ballygarvan", "Ballyphehane", "Ballyvolane",
    "Ballyvourney", "Baltimore", "Bandon", "Banteer", "Bantry", "Barley Cove", "Barnavara", "Beara", "Berrings",
    "Bishopstown", "Blackpool", "Blackrock", "Blarney", "Boher Bue", "Brinny", "Святіgaline", "Сагrignavar",
    "Сагrigrohane", "Сагrigtwohill", "Castlelyons", "Castlemagner", "Castlemartyr", "Castletown Berehaven",
    "Castletownsend", "Charleville", "City Centre", "Clogheen", "Cloghroe", "Clonakilty", "Cloyne", "Coachford",
    "Cobb", "Conna", "Cork Airport", "Cork City", "Courtmarsherry", "Crookstown", "Crossbarry", "Crosshaven",
    "Curraheen", "Donnybrook", "Douglas", "Drimoleague", "Drinagh", "Dripsey", "Farran", "Dublin Hill", "Fermoy",
    "Dunmanway", "Fota", "Enniskeane", "Frankfield", "Farnanes", "Garryvoe", "Glandore", "Glanmire", "Glasheen",
    "Glenbrook", "Grehagh", "Glengariff", "Glenville", "Glounthaune", "Grange", "Gurranabraher", "Halfway",
    "Inniscarra", "Innishannon", "Islands", "Jacobs Island", "Kanturk", "Kerry Pike", "Kerrypike", "Kilbrittain",
    "Kilorohane", "Kiloorrery", "Kileady", "Killeagh", "Kilworth", "Kinsale", "Knocknaheeny", "Ladysbridge",
    "Leap", "Lislevane", "Lissarda", "Little Island", "Lyre", "Macroom", "Mahon", "Mahon Point", "Mallow",
    "Mayfield", "Michelstown", "Midleton", "Model Farm", "Millstreet", "Monkstown", "Montenotte", "Newmarket",
    "Rai", "Ovens", "Oysterhaven", "Passage West", "Raheen", "Rathcormac", "Rathduff", "Ringaskiddy", "Riverstick",
    "Riverstown", "Rochestown", "Rosscarbery", "Rostellan", "Rylane", "Schull", "Shanakiel", "Shanballymore",
    "Shangarry", "Skibbereen", "St. Lukes", "Sundays Well", "Templemartin", "Timoleague", "Tivoli", "Togher",
    "Tower", "Tullylease", "Turners Cross", "Union Hall", "Waterfall", "Watergrasshill", "Whitechurch", "Whitegate",
    "Wilton", "Youghal"
  ];

  // Split names into chunks of 4 for each column
  const chunkSize = 4;
  const nameChunks = [];
  for (let i = 0; i < names.length; i += chunkSize) {
    nameChunks.push(names.slice(i, i + chunkSize));
  }

  return (
    <div>
      <div className="container-fluid step3bg">
        <div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="step1font text-light">What is the nearest town?</h1>
              <p className="step1para text-light">Select the town closest to the property.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          {nameChunks.map((chunk, index) => (
            <div key={index} className="col-12 col-md-12 px-5 px-md-0">
              <div className="d-flex flex-column flex-md-row">
                {chunk.map((name) => (
                  <button
                    key={name}
                    className={`btn mx-2 step3button w-100 mb-2 ${name === selectedName ? "selected" : ""}`}
                    onClick={() => handleNameClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button
            onClick={prevStep}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#003366",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaLongArrowAltLeft />
          </button>

          <button
            onClick={nextStep}
            style={{
              padding: "10px 20px",
              backgroundColor: selectedName ? "#003366" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              cursor: selectedName ? "pointer" : "not-allowed",
              fontSize: "14px",
            }}
            disabled={!selectedName}
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step9;