import React, { useState } from "react";
import Map from "../components/Map";
import Card from "../components/Cards";
import SearchFilter from "../components/SearchFilter";
import profilesData from "../mockData/data"; // Import static profiles data
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  const [profiles, setProfiles] = useState(profilesData); // Use static profiles data
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null); // Track selected profile
  const [sortOption, setSortOption] = useState(""); // State to track sorting option

  const handleSearch = (query) => {
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  const handleFilter = (city, state) => {
    const filtered = profiles.filter(
      (profile) =>
        (!city || profile.city === city) && (!state || profile.state === state)
    );
    setFilteredProfiles(filtered);
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sortedProfiles = [...filteredProfiles].sort((a, b) => {
      if (option === "name") {
        return a.name.localeCompare(b.name);
      } else if (option === "city") {
        return a.city.localeCompare(b.city);
      } else if (option === "state") {
        return a.state.localeCompare(b.state);
      }
      return 0;
    });
    setFilteredProfiles(sortedProfiles);
  };

  const handleSummaryClick = (profile) => {
    setSelectedAddress(profile.address);
    setSelectedProfile(profile); // Set the selected profile to show more info
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <div className="flex flex-col h-screen py-4 md:flex-row md:space-x-4">
        {/* Right side: Map (comes first on mobile) */}
        <div className="w-full h-full p-4 order-first md:order-none md:w-1/2 md:p-6 md:min-h-[600px] min-h-[400px]">
          <Map selectedAddress={selectedAddress} profile={selectedProfile} />
        </div>

        {/* Left side: Search box, filters, and profile cards */}
        <div className="w-full p-4 md:w-1/2 md:p-6 border-b md:border-b-0 md:border-r border-gray-300 overflow-y-auto">
          <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
          {/* Sort options */}
          <div className="my-4">
            <label
              htmlFor="sort"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Select</option>
              <option value="name">Name</option>
              <option value="city">City</option>
              <option value="state">State</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            {filteredProfiles.map((profile) => (
              <Card
                key={profile.email}
                profile={profile}
                onSummaryClick={handleSummaryClick}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
