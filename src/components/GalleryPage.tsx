import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GalleryYear from "../components/GalleryYear";
import "react-tabs/style/react-tabs.css";

const GalleryPage: React.FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-1">
              Explore Our <span className="text-red-500">Events</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Discover the highlights of our previous events.
            </p>
          </div>
          <div className="flex space-x-4">
            <Tabs
              selectedIndex={selectedTabIndex}
              onSelect={handleTabSelect}
              className="tabs-transition"
            >
              <TabList className="flex space-x-4">
                <Tab
                  className={`py-2 px-6 rounded-lg bg-white text-gray-800 font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer ${selectedTabIndex === 0 ? "bg-red-600 text-white" : ""}`}
                >
                  Electrical
                </Tab>
                <Tab
                  className={`py-2 px-6 rounded-lg bg-white text-gray-800 font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer ${selectedTabIndex === 1 ? "bg-red-600 text-white" : ""}`}
                >
                  Mechanical
                </Tab>
                <Tab
                  className={`py-2 px-6 rounded-lg bg-white text-gray-800 font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer ${selectedTabIndex === 2 ? "bg-red-600 text-white" : ""}`}
                >
                  Industrial
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>

        <Tabs
          selectedIndex={selectedTabIndex}
          onSelect={handleTabSelect}
          className="tabs-transition"
        >
          <TabPanel>
            <GalleryYear year={2021} />
          </TabPanel>
          <TabPanel>
            <GalleryYear year={2020} />
          </TabPanel>
          <TabPanel>
            <GalleryYear year={2019} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default GalleryPage;
