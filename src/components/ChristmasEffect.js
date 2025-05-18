import React, { useEffect, useState } from "react";
import "./ChristmasEffect.css";

const ChristmasEffect = () => {
  const [isChristmasSeason, setIsChristmasSeason] = useState(false);

  useEffect(() => {
    // Check if it's Christmas season (December)
    const checkChristmasSeason = () => {
      const currentDate = new Date();
      // const currentMonth = currentDate.getMonth(); // 0-based (0 = January, 11 = December)
      const currentMonth = currentDate.getMonth(); // 0-based (0 = January, 11 = December)

      const currentDay = currentDate.getDate();

      // Show Christmas effects from December 1st to December 31st
      if (currentMonth === 11 || (currentMonth === 0 && currentDay <= 7)) {
        setIsChristmasSeason(true);
      }
    };

    checkChristmasSeason();
  }, []);

  if (!isChristmasSeason) return null;

  // Array of snowflake characters for variety
  const snowflakes = ["❄", "❅", "❆", "✻", "✼", "❉"];
  // Array of holiday colors
  const colors = ["#1B95E0", "#8CC6DE", "#4C6D9F", "#5D8CAE", "#3A6EA5"];

  // Render the Christmas effects only during Christmas season
  return (
    <div className="christmas-effect">
      {/* Snowflakes */}
      {[...Array(50)].map((_, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomFlake =
          snowflakes[Math.floor(Math.random() * snowflakes.length)];

        return (
          <div
            key={index}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              color: randomColor,
              textShadow: `0 0 5px ${randomColor}`,
              opacity: 0.8 + Math.random() * 0.2,
            }}
          >
            {randomFlake}
          </div>
        );
      })}
    </div>
  );
};

export default ChristmasEffect;
