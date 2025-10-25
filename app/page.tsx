"use client";

import Image from "next/image";
import { useState, useEffect, ChangeEvent } from "react";

interface GalleryImage {
  id: number;
  src: string;
}

export default function ProfileLayout() {
  const [activeTab, setActiveTab] = useState<string>("About Me"); // default active tab
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sampleImages: GalleryImage[] = [
    { id: 1, src: "/sample1.jpg" },
    { id: 2, src: "/sample2.jpg" },
    { id: 3, src: "/sample3.jpg" },
  ];

  const tabs = ["About Me", "Experiences", "Recommended"];

  // Load images from storage on mount
  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    try {
      const stored = localStorage.getItem("gallery-images");
      if (stored) {
        const userImages: GalleryImage[] = JSON.parse(stored);
        setImages([...sampleImages, ...userImages]);
      } else {
        setImages(sampleImages);
      }
    } catch (error) {
      console.log("No images stored yet");
      setImages(sampleImages);
    }
  };

  const saveImages = (newImages: GalleryImage[]) => {
    try {
      // save only user-uploaded images, not samples
      const userImages = newImages.filter(
        (img) => !sampleImages.some((s) => s.src === img.src)
      );
      localStorage.setItem("gallery-images", JSON.stringify(userImages));
    } catch (error) {
      console.error("Error saving images:", error);
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result;
        if (typeof src === "string") {
          const newImages = [
            ...images,
            { id: Date.now() + Math.random(), src },
          ];
          setImages(newImages);
          saveImages(newImages);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < Math.max(0, images.length - 3) ? prev + 1 : prev
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-[#282C31] to-[#1A1C20] text-white font-poppins p-4 md:p-8">
      {/* LEFT SIDE (Hidden on mobile) */}
      <div className="hidden sm:flex lg:w-1/2 md:w-[45%] items-center justify-center bg-[#2B2F33]/40 rounded-2xl border border-[#3D434A] transition-all duration-300"></div>

      {/* RIGHT SIDE */}
      <div className="w-full sm:w-[90%] md:w-[55%] lg:w-1/2 flex flex-col gap-6 mx-auto sm:mx-0 mt-4 md:mt-0 sm:pl-6">
        {/* ABOUT SECTION */}
        <div className="bg-[#363C42] rounded-2xl p-4 sm:p-5 shadow-lg border border-[#444B52]">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 bg-[#1E1F22] rounded-xl p-2 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative cursor-pointer px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-lg font-medium rounded-xl shadow-inner overflow-hidden
      transition-colors duration-300
      ${activeTab === tab ? "bg-[#2C2C2E] text-white" : "text-gray-400"}
      ${
        activeTab !== tab
          ? "hover:bg-gradient-to-r hover:from-white/20 hover:to-white/0 hover:text-white"
          : ""
      }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Scrollable content with colored scrollbar */}
          <div className="custom-scrollbar max-h-[100px] overflow-y-auto pr-2 font-jakarta_sans">
            {activeTab === "About Me" && (
              <>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've
                  been working at this awesome company for 3 years now.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed">
                  I was born and raised in Albany, NY & have been living in
                  Santa Carla for the past 10 years with my wife Tiffany and my
                  4-year-old twin daughters- Emma and Ella. Both of them are
                  just starting school, so my calendar is usually blocked
                  between 9-10 AM. This is a...
                </p>
              </>
            )}
            {activeTab === "Experiences" && (
              <>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've
                  been working at this awesome company for 3 years now.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed">
                  I was born and raised in Albany, NY & have been living in
                  Santa Carla for the past 10 years with my wife Tiffany and my
                  4-year-old twin daughters- Emma and Ella. Both of them are
                  just starting school, so my calendar is usually blocked
                  between 9-10 AM. This is a...
                </p>
              </>
            )}
            {activeTab === "Recommended" && (
              <>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've
                  been working at this awesome company for 3 years now.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed">
                  I was born and raised in Albany, NY & have been living in
                  Santa Carla for the past 10 years with my wife Tiffany and my
                  4-year-old twin daughters- Emma and Ella. Both of them are
                  just starting school, so my calendar is usually blocked
                  between 9-10 AM. This is a...
                </p>
              </>
            )}
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="bg-[#363C42] rounded-2xl p-6 shadow-lg border border-[#444B52]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg text-white bg-[#1C1D1F] px-6 py-2.5 rounded-xl font-medium">
                Gallery
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="imageUpload"
                className="text-sm bg-[#40464D] px-6 py-2.5 rounded-full hover:bg-[#4A4A4F] transition font-bold cursor-pointer"
              >
                + ADD IMAGE
              </label>
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="w-10 h-10 bg-[#1d1f22] rounded-full flex items-center justify-center hover:bg-[#4A4A4F] cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= Math.max(0, images.length - 3)}
                className="w-10 h-10 bg-[#1d1f22] rounded-full flex items-center justify-center hover:bg-[#4A4A4F] cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {images.length === 0
              ? sampleImages.map((img) => (
                  <div
                    key={img.id}
                    className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl overflow-hidden"
                  ></div>
                ))
              : visibleImages.map((img) => (
                  <div
                    key={img.id}
                    className="aspect-square bg-[#2C2C2E] rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:translate-x-2"
                  >
                    <Image
                      src={img.src}
                      alt="Gallery"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transform transition-all duration-500 ease-in-out hover:-rotate-3"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
