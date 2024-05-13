"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Strava() {
  const { ref } = useSectionInView("Strava", 0.5);

  return (
    <section ref={ref} id="strava" className="scroll-mt-28 mb-28">
      <SectionHeading>My Favorite App/Service</SectionHeading>
      <div className="w-full md:w-3/4 mx-auto">
        <div className="mb-10">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
        <div className="bg-gray-100 border border-black/5 rounded-lg hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-12">
            <div className="md:col-span-12 flex flex-col md:flex-row">
              <div className="hidden md:flex md:justify-start md:items-start md:w-[10%] mr-5">
                <Image
                  src="/strava.png"
                  alt="Strava Icon"
                  width={125}
                  height={125}
                  className="aspect-square rounded-lg object-cover mb-4 md:mb-0" // mb-4 on mobile to space out from title
                />
              </div>
              <div className="md:w-[90%]">
                <h3 className="text-2xl font-semibold">Strava: Run, Bike, Hike</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-justify">
                  Strava is one of my favorite apps because it is not just a running app; it's a community that energizes my passion for running. It helps me reach my goals by providing detailed insights and fostering a sense of camaraderie in my community.              </p>
              </div>
            </div>

            <div className="md:col-span-12">
              <ul className="list-disc pl-5 mt-4">
                <li><strong>User Interface:</strong> Strava's design is clean and intuitive, which makes the app accessible to beginners while still offering advanced features for seasoned athletes. The straightforward layout allows me to focus on my performance without unnecessary distractions.</li>
                <br></br>
                <li><strong>Performance Tracking:</strong>  Beyond basic metrics like pace, distance, and heart rate, it provides advanced performance analytics that include elevation gained, calories burned, and a detailed analysis of my running pace over different terrains. This comprehensive data helps me understand the nuances of my workouts and improve my program to improve my endurance and speed.</li>
                <br></br>
                <li><strong>Social Network for Athletes:</strong> Strava creates a vibrant community where athletes can connect, share their activities, and motivate each other. This social connectivity is more than just sharing; it's about celebrating each other's achievements and pushing one another to excel.</li>
                <br></br>
                <li><strong>Groups/Clubs/Community:</strong> The app fosters a sense of belonging by allowing me to join various clubs and groups where I can participate in challenges and meet runners with similar interests. This community aspect makes running a more social and engaging activity.</li><br></br>
                <li><strong>Explore and Compete:</strong>  Strava's "Segment Leaderboard" and exploration features are brilliantly designed to bring a sense of adventure and competition to every run. I can explore segments that other users have created, attempt to claim the top spot, or even create my own segments. This feature transforms ordinary routes into exciting challenges, keeping my routine fresh and engaging.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}