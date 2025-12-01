"use client";
import React from "react";

function TopRecentReviews() {
  return (
    <div>
      <h2 className="text-xl font-bold mt-4 p-5">Most Recent Reviews</h2>
      <div className="border rounded-lg p-4 mt-4">
        <p>
          <strong>05/11/2024</strong>
        </p>
        <p>
          <strong>S. Rama Mohan</strong>
        </p>
        <p>
          I’m using NutriVeda Active and it’s been a great experience! It keeps
          me energetic, helps in faster recovery after workouts, and improves my
          overall stamina. I love how it combines Ayurveda with modern nutrition
          — truly a perfect supplement for an active lifestyle.
        </p>
        {/* <p>S. Rama Mohan, Guntur. Mob:9182533059</p> */}
      </div>
      <div className="border rounded-lg p-4 mt-4">
        <p>
          <strong>10/18/2023</strong>
        </p>
        <p>
          <strong>Vivek Jaiswal</strong>
        </p>
        <p>
          I’ve been taking NutriVeda Active for some time, and it really makes a
          difference. I feel more active, focused, and refreshed throughout the
          day. It supports my workouts and recovery naturally — a perfect blend
          of Ayurvedic herbs and modern nutrition. Highly recommended!
        </p>
      </div>
    </div>
  );
}

export default TopRecentReviews;
