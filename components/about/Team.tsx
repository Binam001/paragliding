"use client";

import TeamSection from "@/components/team";
import React from "react";
import ScrollFloat from "../WaveAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { memberLists } from "@/constants";

const leadershipMembers = memberLists.filter(
  (member) =>
    member.role === "Founder" ||
    member.role === "Director" ||
    member.role === "Office Manager"
);

const otherMembers = memberLists.filter(
  (member) =>
    member.role !== "Founder" &&
    member.role !== "Director" &&
    member.role !== "Office Manager"
);

const Team = () => {
  const [activeTab, setActiveTab] = React.useState("tab-1");
  return (
    <div className="mt-8 md:mt-16">
      <div className="space-y-2">
        <div className="text-center text-6xl font-bold">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=30%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Our Team
          </ScrollFloat>
        </div>
        <p className="text-center font-semibold text-lg">
          “Over 100 years of Flying experience combined”
        </p>
        <p>
          Sunrise Paragliding are the pioneers of paragliding in Nepal so it's
          no surprise that our team comprises of some of the most experienced
          and accomplished pilots in Nepal.
        </p>
      </div>

      <div className="mt-8">
        {/* <TeamSection /> */}

        <Tabs
          defaultValue="tab-1"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="w-full flex md:gap-8 items-center bg-white mb-4">
            <TabsTrigger value="tab-1">
              All{" "}
              <span
                className={`rounded-full ml-2 text-xs size-5 flex items-center justify-center transition-colors ${
                  activeTab === "tab-1"
                    ? "bg-white text-gray-800"
                    : "bg-black text-white"
                }`}
              >
                {memberLists.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value="tab-2">
              Leadership{" "}
              <span
                className={`rounded-full ml-2 text-xs size-5 flex items-center justify-center transition-colors ${
                  activeTab === "tab-2"
                    ? "bg-white text-gray-800"
                    : "bg-black text-white"
                }`}
              >
                {leadershipMembers.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value="tab-3">
              Tandem Pilot{" "}
              <span
                className={`rounded-full ml-2 text-xs size-5 flex items-center justify-center transition-colors ${
                  activeTab === "tab-3"
                    ? "bg-white text-gray-800"
                    : "bg-black text-white"
                }`}
              >
                {otherMembers.length}
              </span>
            </TabsTrigger>
          </TabsList>
          {/* <div key={member.id}> */}
          <TabsContent
            value="tab-1"
            className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8"
          >
            {memberLists.map((member) => (
              <div className="w-full" key={member.id}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-b-xl rounded-r-xl"
                />
                <div className="mt-2">
                  <p>{member.name}</p>
                  <p className="text-zinc-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="tab-2"
            className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8"
          >
            {leadershipMembers.map((member) => (
              <div className="w-full" key={member.id}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-b-xl rounded-r-xl"
                />
                <div className="mt-2">
                  <p>{member.name}</p>
                  <p className="text-zinc-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="tab-3"
            className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8"
          >
            {otherMembers.map((member) => (
              <div className="w-full" key={member.id}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-b-xl rounded-r-xl"
                />
                <div className="mt-2">
                  <p>{member.name}</p>
                  <p className="text-zinc-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Team;
