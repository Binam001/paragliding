"use client";

import { Tooltip } from "./ui/tooltip";

const members = [
  {
    id: 1,
    name: "Biru Bomjan",
    role: "Founder",
    avatar: "/images/team/Biru-Bomjan.jpg",
    desc: "It's because of the keen interest of Biru to promote paragliding business in Nepal, is the reason why we are here today. He is also known as the founder of the paragliding business in Nepal. We are grateful to all his efforts and dedication to help establish this adventure activity which has become a major industry in Nepal. We can't think of paragliding in Nepal without relating Biru to it.",
  },
  {
    id: 2,
    name: "Rajesh Bomjan",
    role: "Director",
    avatar: "/images/team/Rajesh-Bomjan.jpg",
    desc: "Officially the first Nepali paraglider pilot and also the Managing Director of Sunrise, Rajesh has been passionately flying for the last 25 years and has clocked several thousand hours of flying amongst these pristine mountains which he calls home. His dedication and top notch professionalism ensures a safe future for paragliding in Nepal.",
  },
  {
    id: 3,
    name: "Punam Bomjan",
    role: "Office Manager",
    avatar: "/images/team/Punam-Bomjan.jpg",
    desc: "Punam is a veteran of the paragliding business in Nepal, and she's been working beside us for the last 25 years since the beginning of the activity here in Nepal. She is also an intermediate paragliding pilot herself, evolving in paragliding and very knowledgeable and helpful with her fluent English, and communication skills with tourists from all over. Come see her at Sunrise office for all the information that you need for paragliding.",
  },
  {
    id: 4,
    name: "Trisha Shrestha Bomjan",
    role: "Tandem Pilot",
    avatar: "/images/team/Trisha-Bomjan.jpg",
    desc: "Flying for 13 years, Trisha can lay claim to be the best female pilot that Nepal has to offer. She has proven that by appearing on the podium as a “Nepali Female Champion” on multiple occasions. She is a real inspiration for so many young Nepali girls, and a loving mum to a child. She also loves spending free time in her kitchen garden connecting to the Earth that nurtures us.",
  },
  {
    id: 5,
    name: "Ajay Kumar",
    role: "Tandem Pilot/Instructor",
    avatar: "/images/team/Ajay-Kumar.jpg",
    desc: "Originally from North India - Manali, Ajay has spent 20 years of his prime life learning, improvising and becoming a full fledged pilot here in this very play ground of Nepal, which he refers as his second home. 28 years of full time flying, 8 times Indian National Champion, and 4 times winner of Nepal Open Championship, he brings in a wealth of experience to the table.",
  },
  {
    id: 6,
    name: "Binod Bomjan",
    role: "Tandem Pilot",
    avatar: "/images/team/Binod-Bomjan.jpg",
    desc: "2 times Nepali Champion, Binod has been flying for 20 years. Along with flying he also loves running ultra marathons here in these foothills pushing his physical limits. Outdoor is his lifestyle. It could be dirt biking, hiking, running marathons, fishing, camping and constantly exploring these pristine mountains with friends.",
  },
  {
    id: 7,
    name: "Suraj Thapa",
    role: "Tandem Pilot",
    avatar: "/images/team/Suraj-Thapa.jpg",
    desc: "Suraj is amongst the handful young generation of passionate pilots in Nepal and has been flying for 9 years. Who also loves chasing for the cross country distance records here and flying competitions and racing paragliders. Go big, or go home is his motto.",
  },
  {
    id: 8,
    name: "Milan Pariyar",
    role: "Tandem Pilot",
    avatar: "/images/team/Milan-Pariyar.jpg",
    desc: "Since very young Milan grew up around paragliding, helping pack gliders and learning to kite all day. He started flying from a very young age of 15 and quickly progressed as a young dynamic pilot, and has been flying for 14 years. Don't forget to ask him to do some tricks if you end up flying with him.",
  },
  {
    id: 9,
    name: "Sachin Bomjan",
    role: "Tandem Pilot",
    avatar: "/images/team/Sachin-Bomjan.jpg",
    desc: "Being the youngest of Bomjan siblings he chose the footsteps of his elder brothers to make paragliding a lifestyle for him too. He is a highly experienced pilot and a jolly person to fly with and loves flying cross country when he is free with tandems. Don't forget to ask for some local advice for getting around town.",
  },
  {
    id: 10,
    name: "Maan Chhetri",
    role: "Tandem Pilot",
    avatar: "/images/team/Maan-Chhetri.jpg",
    desc: "Flying for almost 13 years, Maan is also into love for Mountain biking, exploring new trails around the outskirts of Pokhara valley constantly. It's good seeing the trails from the air and going to ride them later, he says.",
  },
];

const leadershipMembers = members.filter(
  (member) =>
    member.role === "Founder" ||
    member.role === "Director" ||
    member.role === "Office Manager"
);

const otherMembers = members.filter(
  (member) =>
    member.role !== "Founder" &&
    member.role !== "Director" &&
    member.role !== "Office Manager"
);
export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="">
        <div>
          <h3 className="mb-6 text-lg font-medium">Leadership</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {leadershipMembers.map((member, index) => (
              <div key={index} className="w-max">
                <Tooltip text={member.desc} position="right" delay={false}>
                  <div className="size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                    <img
                      className="aspect-square rounded-full object-cover"
                      src={member.avatar}
                      alt={member.name}
                      height="460"
                      width="460"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 block text-sm">{member.name}</span>
                  <span className="text-muted-foreground block text-xs">
                    {member.role}
                  </span>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Pilots & Instructors</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4 space-y-4"
          >
            {otherMembers.map((member, index) => (
              <div key={index} className="w-max">
                <Tooltip text={member.desc} position="right" delay={false}>
                  <div className="size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                    <img
                      className="aspect-square rounded-full object-cover"
                      src={member.avatar}
                      alt={member.name}
                      height="460"
                      width="460"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 block text-sm">{member.name}</span>
                  <span className="text-muted-foreground block text-xs">
                    {member.role}
                  </span>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
