const navLists = [
  {
    id: 1,
    name: "home",
    href: "/",
  },
  {
    id: 2,
    name: "about",
    href: "/about",
  },
  {
    id: 3,
    name: "blog",
    href: "/blog",
  },
  {
    id: 4,
    name: "gallery",
    href: "/gallery",
  },
  {
    id: 5,
    name: "services",
    href: "/services",
  },
  {
    id: 6,
    name: "contact",
    href: "/contact",
  },
];

const whyUs = [
  {
    id: 1,
    title: "Best Service",
    desc: "We will always be there for your assistance during your journey.",
  },
  {
    id: 2,
    title: "Safety Major",
    desc: "Nothing is more important to us than your safety, comfort, and trust.",
  },
  {
    id: 3,
    title: "Best Experience",
    desc: "We are committed to making private aviation sustainable.",
  },
];

const packageLists = [
  {
    id: 1,
    title: "Cloud Buster",
    href: "cloud-buster",
    image: "/images/package/package1.jpg",
    time: "9.30am, 11.30am, 1.30pm",
    duration: "20-30",
    cost: "8,500",
    optional: "2000",
    desc: "This mid day flight gives you the thrill of flying in rising currents of warm air in order to stay a loft in the air, and soar all the way up to clouds accompanied by eagles and vultures. And we come to land by one of the bars very close to Lakeside.",
  },
  {
    id: 2,
    title: "Cross Country",
    href: "cross-country",
    image: "/images/package/package2.jpg",
    time: "9.30am, 11.30am, 1.30pm",
    duration: "50-60",
    cost: "11,500",
    optional: "2000",
    desc: "We take you on an unforgettable journey towards the north of Sarangkot ridge overlooking an amazing backdrop of the Annapurnas while silently gliding over villages forgotten by time. We aim to fly as far as possible using thermals to our advantage and return to land by Lakeside the same afternoon.",
  },
  {
    id: 3,
    title: "Hike & Fly",
    href: "hike-fly",
    image: "/images/package/package3.jpg",
    cost: "29,500",
    desc: "This trip offers an excellent get away from the hustle of the city and experience the beautiful outskirts of Pokhara, meanwhile enjoying magnificent sunrise and sunset views over the Annapurnas from your tented accommodation. A scenic two and half hours of walk through ruins of the most beautiful villages and lush nature gets us to our takeoff at around 2000 meters overlooking Pokhara valley and the majestic Annapurna range. From here we aim to fly back to Pokhara.",
    subDesc: "A premium adventure trip in the Himalayas !",
  },
];

// const packageLists = [
//   {
//     id: 1,
//     front: {
//       title: "Cloud Buster",
//       imageSrc: "/images/package/package1.jpg",
//       imageAlt: "cloud buster image",
//       description:
//         "Ride warm mid-day thermals, soar high with eagles and vultures, and land near a Lakeside bar.",
//       cost: "8500",
//     },
//     back: {
//       title: "Cloud Buster",
//       time: "9.30am, 11.30am, 1.30pm",
//       duration: "20-30",
//       cost: "8500",
//       optional: "2000",
//       description:
//         "This mid day flight gives you the thrill of flying in rising currents of warm air in order to stay aloft in the air, and soar all the way up to clouds accompanied by eagles and vultures. And we come to land by one of the bars very close to Lakeside.",
//     },
//   },
//   {
//     id: 2,
//     front: {
//       title: "Cross Country",
//       imageSrc: "/images/package/package2.jpg",
//       imageAlt: "cross country image",
//       description:
//         "Fly north along the Sarangkot ridge with stunning Annapurna views, gliding silently over timeless villages before returning to land near Lakeside.",
//       cost: "11500",
//     },
//     back: {
//       title: "Cross Country",
//       time: "9.30am, 11.30am, 1.30pm",
//       duration: "50-60",
//       cost: "11500",
//       optional: "2000",
//       description:
//         "We take you on an unforgettable journey towards the north of Sarangkot ridge overlooking an amazing backdrop of the Annapurnas while silently gliding over villages forgotten by time. We aim to fly as far as possible using thermals to our advantage and return to land by Lakeside the same afternoon.",
//     },
//   },
//   {
//     id: 3,
//     front: {
//       title: "Hike & Fly",
//       imageSrc: "/images/package/package3.webp",
//       imageAlt: "hike & fly image",
//       description: "A premium adventure trip in the Himalayas!",
//       cost: "29500",
//     },
//     back: {
//       title: "Hike & Fly",
//       time: "9.30am, 11.30am, 1.30pm",
//       duration: "20-30",
//       cost: "29500",
//       optional: "2000",
//       description:
//         "This trip offers an excellent get away from the hustle of the city and experience the beautiful outskirts of Pokhara, meanwhile enjoying magnificent sunrise and sunset views over the Annapurnas from your tented accommodation. A scenic two and half hours of walk through ruins of the most beautiful villages and lush nature gets us to our takeoff at around 2000 meters overlooking Pokhara valley and the majestic Annapurna range. From here we aim to fly back to Pokhara.",
//     },
//   },
// ];

const testimonialLists = [
  {
    id: 1,
    name: "Eric L",
    date: "1 February 2020",
    content:
      "First of all, this experience is incredible and unique. It really is a mindblowing experience to soar through the sky with such a spectacular backdrop.  Secondly, the staff were accomodating and professional. Not only did they let me change the day of my session (as the planned)",
  },
  {
    id: 2,
    name: "Shreman S",
    date: "1 November 2021",
    content:
      "This was one of the best experiences I've had! The sunrise paragliding team are awesome. They're very professional, considerate, and make sure you understand everything before you set off. They're very kind and Trisha + Rajesh were awesome.",
  },
  {
    id: 3,
    name: "Adam",
    date: "1 March 2020",
    content:
      "The whole experience went amazing, I had Ajay as my pilot and felt lucky to have him with over 26 years in the business the guy is a pro. He made me feel at ease and relax then enjoy the 30 mins in the sky! We went as high possible floating above near the mountains then cruised",
  },
  {
    id: 4,
    name: "WildRiceFamily",
    date: "1 November 2021",
    content:
      "Our family of 4 went paragliding with this company in November 2021. They were excellent, quick to respond via facebook messenger, and extremely professional and friendly in person. Our package included photos and video, and each of the paragliding pilots had their own selfie  stick and took lots of photos and videos for us, which we downloaded onto our computer afterwards. This was a present for our sons, ages 13 and 14, and we were delighted they were old enough to participate. Their pilots even did a few spins with them to give them an extra thrill. Overall, our experience couldn't have been better or felt safer.  Thanks, Sunrise, for an amazing experience. We hope business continues to pick up!",
  },
  {
    id: 5,
    name: "CWegg",
    date: "1 February 2020",
    content:
      "My husband and I flew with Sunrise this morning and had a wonderful time. We were lucky enough to get a spot by walking into the office the day before. We weren't sure if we wanted to do the standard flight or the long flight, so they let us decide when we were in the air.",
  },
  {
    id: 6,
    name: "Gavin M",
    date: "1 April 2019",
    content:
      "Very safe, experienced professional job. Amazing view of annapurna circuit and the lake. Went with Maan Chhetri, very helpful.",
  },
  {
    id: 7,
    name: "Gael DP",
    date: "1 February 2020",
    content:
      "I've had a very great experience at Sunrise Paragliding in February 2020. I went there for a Cross Country flight, and I want to point out multiple things that made me enjoy so much working with them: - The team is extremely professional and friendly, they are relaxed",
  },
  {
    id: 8,
    name: "Guillaume C",
    date: "1 November 2021",
    content:
      "Great experience with an experimented team! The package comes along with insightful comments about paragliding + pictures/videos.",
  },
  {
    id: 9,
    name: "Chris Janssen",
    date: "1 April 2021",
    content:
      "We had a great experience with sunrise paragliding. Very friendly and professional people. Felt very safe and well instructed. Got some nice pictures and videos out it as well 🙂",
  },
];

const socialLinkLists = [
  {
    id: 1,
    title: "Facebook",
    icon: "/images/social/facebook.svg",
    fillIcon: "/images/social/facebook-fill.png",
    link: "https://www.facebook.com/sunriseparaglidingpokhara#",
    username: "#sunriseparaglidingpokhara",
  },
  {
    id: 2,
    title: "Instagram",
    icon: "/images/social/instagram.svg",
    fillIcon: "/images/social/instagram-fill.png",
    link: "https://www.instagram.com/sunriseparaglidingnepal/",
    username: "@sunriseparaglidingnepal",
  },
  {
    id: 3,
    title: "Email",
    icon: "/images/social/mail.svg",
    fillIcon: "/images/social/mail-fill.png",
    link: "mailto:info@sunrise-paragliding.com",
    username: "info@sunrise-paragliding.com",
  },
  {
    id: 4,
    title: "Youtube",
    icon: "/images/social/youtube.svg",
    fillIcon: "/images/social/youtube-fill.svg",
    link: "https://www.youtube.com/channel/UCuAW_Yl3GQ0W0vMZfbxwVjw",
    username: "@SunriseParagliding",
  },
  {
    id: 5,
    title: "Google",
    icon: "/images/social/google.svg",
    fillIcon: "/images/social/google-fill.svg",
    link: "https://www.google.com/search?q=sunrise+paragliding+google+reviews&rlz=1C5CHFA_enES919ES920&oq=sun&aqs=chrome.0.69i59l2j69i57j69i59j46i67j0i20i263i433i512j0i67l2j46i67i199i291j46i67i199i465.1213j0j15&sourceid=chrome&ie=UTF-8#lrd=0x3995951e3d520047:0x8731ef408affb9c0,1,,,",
    username: "@SunriseParagliding",
  },
  {
    id: 6,
    title: "Trip Advisor",
    icon: "/images/social/tripadvisor.svg",
    fillIcon: "/images/social/tripadvisor-fill.svg",
    link: "https://www.tripadvisor.co.uk/Attraction_Review-g293891-d3682719-Reviews-Sunrise_Paragliding-Pokhara_Gandaki_Zone_Western_Region.html",
    username: "@SunriseParagliding",
  },
  // {
  //   id: 4,
  //   title: "Contact",
  //   icon: "/images/social/phone.svg",
  //   // link: "+977 61 453174 +977 98171 98617",
  //   desc: "+977 61 453174, +977 98171 98617",
  // },
];
const articleLists = [
  {
    id: 1,
    src: "/images/blog/blog1.jpg",
    slug: "phewa-lake",
    title: "Phewa Lake",
    desc: "A wide-angle shot showing the iconic lake dotted with colorful boats (doongas) and water lilies, framed by mountains. This is Pokhara's centerpiece, often the landing spot for paragliders.",
    span: "col-span-1",
  },
  {
    id: 2,
    src: "/images/blog/blog2.jpg",
    slug: "sunrise",
    title: "Sunrise",
    desc: "A classic view of the Annapurna range (likely from Sarangkot or another viewpoint) bathed in the warm light of dawn, with traditional mountain homes in the foreground. This captures the serene beauty of the region.",
    span: "sm:col-span-2",
  },
  {
    id: 3,
    src: "/images/blog/blog3.jpg",
    slug: "machapuchare-mountain",
    title: "Machapuchare Mountain",
    desc: "A close-up of the distinctive, 'fishtail' peak, a sacred and prominent landmark of Pokhara. Its unique shape is visible from almost everywhere in the city, providing a stunning backdrop for activities like paragliding.",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "/images/blog/blog4.avif",
    slug: "lakeside-night-view",
    title: "LakeSide night view",
    desc: "A captivating nighttime shot of the vibrant Lakeside area reflecting on the water, highlighting the Ferris wheel and the area's lively atmosphere after dark.",
    span: "col-span-2",
  },
  {
    id: 5,
    src: "/images/blog/blog5.webp",
    slug: "white-gumba",
    title: "White Gumba",
    desc: "A photo of a prominent white Buddhist stupa (Gumba or Gompa), likely the World Peace Pagoda (Shanti Stupa) located on a hilltop. This offers panoramic views of the lake and mountains, including the typical take-off and landing zones.",
    span: "sm:col-span-1",
  },
  {
    id: 6,
    src: "/images/blog/blog14.jpg",
    slug: "pilot",
    title: "Pilot",
    desc: "A selfie or close-up of a paragliding tandem pilot and a client, both wearing helmets and gear, smiling against the mountain backdrop. This humanizes the experience and builds trust.",
    span: "col-span-1",
  },
  {
    id: 7,
    src: "/images/blog/blog7.webp",
    slug: "paragliding",
    title: "Paragliding",
    desc: "Two action shots showing paragliders in flight. One highlights the vast, green landscape below, and the other shows a pair of gliders soaring over distinct terraced farmlands, illustrating the exhilarating experience and the scenic flight path.",
    span: "col-span-1",
  },
  {
    id: 8,
    src: "/images/blog/blog15.jpg",
    slug: "paragliding-second",
    title: "Paragliding",
    desc: "Two action shots showing paragliders in flight. One highlights the vast, green landscape below, and the other shows a pair of gliders soaring over distinct terraced farmlands, illustrating the exhilarating experience and the scenic flight path.",
    span: "col-span-1",
  },
  {
    id: 9,
    src: "/images/blog/blog10.jpg",
    slug: "mountain-range",
    title: "Mountain Range",
    desc: "A reflection shot across a body of water (likely Phewa Lake) showing the majestic Annapurna and Machhapuchhare peaks clearly defined in the distance. This summarizes the stunning scenery travelers come to enjoy.",
    span: "sm:col-span-2",
  },
];

export {
  navLists,
  whyUs,
  packageLists,
  testimonialLists,
  socialLinkLists,
  articleLists,
};
