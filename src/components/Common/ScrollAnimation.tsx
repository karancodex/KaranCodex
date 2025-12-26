"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger); // Register Gsap Scroll Trigger Plugin

// I used freepik images link for this purpose
const imageUrls = [
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/premium-photo/blazing-sun-vast-savanna_1272857-120118.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
];

const ScrollAnimation = () => {
  const imagesRef = useRef<any[]>([]); // Fix to store multiple refs

  useGSAP(() => {
    // Convert the current array of image references to a proper array for GSAP manipulation
    const images = gsap.utils.toArray(imagesRef.current);

    // Iterate over each image element
    images.forEach((panel: any, i: number) => {
      let scale = 1;

      // If the current image is not the last one, adjust the scale based on its index
      if (i !== images.length - 1) {
        scale = 0.9 + 0.025 * i; // Create a slight scaling effect for images based on their index
      }

      gsap.to(panel, {
        scale: scale,
        transformOrigin: "top center", // Specify the point from which the scaling transformation occurs
        ease: "none",

        // Configure the ScrollTrigger plugin for scroll-based animations
        scrollTrigger: {
          trigger: panel, // Set the current image as the trigger for the ScrollTrigger

          // Define when the animation should start based on the position of the trigger
          start: "top " + (70 + 40 * i), // Start the animation when the top of the panel is 70px down plus an offset based on index
          end: "bottom +=650px", // Define when the animation should end (bottom of the panel + 650px)
          endTrigger: ".end", // Specify the end trigger element
          pin: true, // Pin the current panel/image in place while it is being triggered
          pinSpacing: false, // Disable additional spacing around pinned elements
          scrub: true, // Enable scrub for smooth animation with scrolling
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 mx-auto max-w-2xl py-12">
      {imageUrls.map((image, index) => (
        <div
          key={index}
          ref={(el) => {
            imagesRef.current[index] = el;
          }}
          className=""
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
      <div className="end"></div>
    </div>
  );
};

export default ScrollAnimation;