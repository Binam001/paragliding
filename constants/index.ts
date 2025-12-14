const navLists = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Tandem Flights",
    href: "/services",
  },
  {
    id: 3,
    name: "About",
    href: "/about",
  },
  {
    id: 4,
    name: "Gallery",
    href: "/gallery",
  },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 6,
    name: "Contact",
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
    slug: "cloud-buster",
    image: "/images/package/package1.jpg",
    time: ["9:30AM", "11:30AM", "1:30PM"],
    duration: "20-30",
    cost: "8,500",
    optional: "2000",
    altitude: "1600m",
    desc: "This mid day flight gives you the thrill of flying in rising currents of warm air in order to stay a lot in the air, and soar all the way up to clouds accompanied by eagles and vultures. And we come to land by one of the bars very close to Lakeside.",
  },
  {
    id: 2,
    title: "Cross Country",
    slug: "cross-country",
    image: "/images/package/package2.jpg",
    time: ["9:30AM", "11:30AM", "1:30PM"],
    duration: "50-60",
    cost: "11,500",
    optional: "2000",
    altitude: "1800m",
    desc: "We take you on an unforgettable journey towards the north of Sarangkot ridge overlooking an amazing backdrop of the Annapurnas while silently gliding over villages forgotten by time. We aim to fly as far as possible using thermals to our advantage and return to land by Lakeside the same afternoon.",
  },
  {
    id: 3,
    title: "Hike & Fly",
    slug: "hike-fly",
    image: "/images/package/package3.jpg",
    cost: "29,500",
    altitude: "2000m",
    desc: "This trip offers an excellent get away from the hustle of the city and experience the beautiful outskirts of Pokhara, meanwhile enjoying magnificent sunrise and sunset views over the Annapurnas from your tented accommodation. A scenic two and half hours of walk through ruins of the most beautiful villages and lush nature gets us to our takeoff at around 2000 meters overlooking Pokhara valley and the majestic Annapurna range. From here we aim to fly back to Pokhara.",
    subDesc: "A premium adventure trip in the Himalayas !",
  },
];

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
      "I've had a very great experience at Sunrise Paragliding in February 2020. I went there for a Cross Country flight, and I want to point out multiple things that made me enjoy so much working with them: - The team is extremely professional and friendly, they are relaxed.",
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
    span: "col-span-1",
    shortDesc:
      "Pokhara's tranquil centerpiece and our scenic landing approach.",
    desc: "Behold the serene majesty of Phewa Lake, the soul of Pokhara. This iconic freshwater lake, dotted with the vibrant colors of traditional 'doongas' and framed by the lush green of the surrounding hills, serves as a tranquil mirror to the sky. For our flyers, it's the breathtaking final view on approach, a calm and welcoming sight that marks the gentle end to an exhilarating journey through the clouds.",
    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
  {
    id: 2,
    src: "/images/blog/blog2.jpg",
    slug: "sunrise",
    title: "Sunrise",
    span: "md:col-span-2",
    shortDesc:
      "A magical sunrise over the Annapurnas from our Sarangkot launch point.",
    desc: "There's nothing quite like a Himalayan sunrise. From the vantage point of Sarangkot, watch as the first rays of dawn kiss the snow-capped peaks of the Annapurna range, painting them in hues of gold and rose. This magical moment, with traditional mountain homes stirring to life below, is the perfect, awe-inspiring start to a day of high-flying adventure.",
    descTitle1: "The 4 AM Wake-Up Call: Is It Worth It?",
    desc1:
      "Every traveler asks me this: 'Do I really need to wake up before dawn?' My answer is always a resounding yes. The Sarangkot sunrise isn't just about the sun coming up; it's about the 'Alpenglow.' Before the sun even hits the valley floor, the highest peaks—Annapurna and Dhaulagiri—catch the light. They turn from a cold, ghostly grey to a burning amber and finally to a brilliant white. It’s a light show put on by nature that lasts only 15 minutes, and you have to be there to witness it.",
    descTitle2: "The Anticipation on the Launchpad",
    desc2:
      "Arriving at the launch site early offers a unique atmosphere. The air is crisp and cold, and there is a hush over the mountain. You can see the pilots checking their gear, unfolding the gliders like giant colorful wings on the grass. There is a nervous, excited energy in the air as everyone waits for that first thermal breeze to kick in. It’s the calm before the thrill.",
    descTitle3: "Photography Tips for the Golden Hour",
    desc3:
      "If you're bringing a camera, the dynamic range can be tricky. The mountains are bright, but the valley is still dark. My advice? Expose for the highlights (the snow). Let the valley fall into shadow—it creates a dramatic, moody silhouette that emphasizes the sheer height of the Himalayas. And don't forget to put the camera down for a moment; some things are best captured with your eyes.",
  },
  {
    id: 3,
    src: "/images/blog/blog3.jpg",
    slug: "machapuchare-mountain",
    title: "Machapuchare Mountain",
    span: "col-span-1",
    shortDesc:
      "Soar beside the sacred 'Fishtail' peak, your breathtaking companion.",
    desc: "Dominating the skyline is the magnificent Machapuchare, or 'Fishtail' mountain. This sacred, unclimbed peak is a constant, breathtaking companion during your flight. Its distinctive double summit provides a powerful and humbling backdrop, reminding you of the raw, untouched beauty of the Himalayas as you soar through its domain.",
    descTitle1: "Why You Can't Climb It (But You Can Fly Near It)",
    desc1:
      "Machapuchare is sacred to the god Shiva and remains one of the few unclimbed peaks in the Himalayas. Scaling it is forbidden to preserve its sanctity. This makes paragliding the *only* way to get up close and personal with the Fishtail without disturbing it. Gliding silently on the thermals, you feel a sense of reverence. You are a guest in the domain of the gods, witnessing a view that mountaineers are not allowed to access.",
    descTitle2: "The Shape-Shifter",
    desc2:
      "One thing few people realize is how much Machapuchare changes depending on your angle. From Lakeside, it looks like a sharp triangle. But once we take off and gain altitude, if we catch a cross-country thermal, you might see the 'Fishtail' split—the distinctive double summit that gives the mountain its name. Seeing that split with your own eyes is a badge of honor for any flyer.",
    descTitle3: "A Vertical Perspective",
    desc3:
      "The sheer vertical relief of this mountain is mind-boggling. It rises so sharply from the valley floor that it creates its own weather systems. As pilots, we watch the clouds forming around its tip to judge the wind. It’s not just a beautiful backdrop; it’s our weather beacon. Flying in its shadow makes you realize just how small we really are.",
  },
  {
    id: 4,
    src: "/images/blog/blog4.avif",
    slug: "lakeside-night-view",
    title: "LakeSide night view",
    span: "md:col-span-2",
    shortDesc:
      "Vibrant Lakeside nightlife with colorful lights reflecting on the water.",
    desc: "When the sun sets, Pokhara's Lakeside district transforms into a vibrant hub of energy and light. This captivating view captures the lively atmosphere as colorful lights from cafes, shops, and the local Ferris wheel dance upon the calm surface of Phewa Lake. It's the perfect place to celebrate the day's adventure and soak in the local culture.",
    descTitle1: "The Post-Flight Vibe Shift",
    desc1:
      "After a day of adrenaline and high altitude, the body craves two things: relaxation and food. Lakeside provides both in abundance. The transition is stark—one moment you are 1,600 meters up in silent air, and the next you are walking down a street alive with live bands, jazz music, and the smell of wood-fired pizza mixed with traditional Dal Bhat. It’s the perfect decompression zone.",
    descTitle2: "The Ferris Wheel and the Reflection",
    desc2:
      "Recently, the addition of the small amusement park near the lake has changed the nightscape. The colorful lights reflecting on the water create a festival-like atmosphere every single night. For photographers, this is a long-exposure paradise. Set up a tripod near the 'Basundhara Park' area to capture the light trails of the boats and the Ferris wheel against the dark silhouette of the hills.",
    descTitle3: "Where the Pilots Hang Out",
    desc3:
      "If you want to hear the best flying stories, follow the pilots. After the gear is packed, the paragliding community gathers at the local Lakeside bars. It’s a global community here; you’ll hear French, Spanish, Russian, and Nepali voices all recounting the day's thermals. It’s a welcoming culture—buy a pilot a beer, and you’ll learn more about the weather and the mountains in one hour than you would in a week of reading.",
  },
  {
    id: 5,
    src: "/images/blog/blog5.webp",
    slug: "white-gumba",
    title: "White Gumba",
    span: "sm:col-span-1",
    shortDesc:
      "The iconic World Peace Pagoda, a symbol of tranquility seen from above.",
    desc: "Perched atop a hill overlooking the entire valley, the World Peace Pagoda (Shanti Stupa) is a monument to tranquility. This brilliant white stupa offers unparalleled panoramic views of Phewa Lake, Pokhara city, and the Annapurna range. It's a key landmark you'll see from the air, representing the profound sense of peace that flying in this incredible landscape inspires.",
    descTitle1: "A Beacon of White",
    desc1:
      "The Shanti Stupa is the first landmark you spot when you look across the lake, and it's a pivotal waypoint for our cross-country flights. Its brilliant white dome stands in stark contrast to the deep greens of the Raniban forest. When we fly near it, the perspective is entirely different—you don't just see the stupa; you see the circumambulation of the monks and the tourists looking up at you, shielding their eyes from the sun.",
    descTitle2: "The Hike vs. The Flight",
    desc2:
      "Most people hike or drive up to the Peace Pagoda for the view. It’s a steep, sweaty 45-minute climb from the boat station. But when you are paragliding, you arrive at eye level with the golden statues of the Buddha without breaking a sweat. It’s a silent, respectful approach. We often glide silently past, ensuring we don't disturb the peace, offering our flyers a moment of Zen at 1,100 meters.",
    descTitle3: "The Best Sunset Spot",
    desc3:
      "If you aren't flying in the late afternoon, I recommend heading up here for sunset. While Sarangkot owns the sunrise, the Peace Pagoda owns the sunset. You can watch the sun dip behind the Kaskikot hills, casting a long shadow over the lake while the stupa itself glows pink and orange. It’s a spiritual end to a physical day.",
  },
  {
    id: 6,
    src: "/images/blog/blog14.jpg",
    slug: "pilot",
    title: "Pilot",
    span: "col-span-1",
    shortDesc:
      "Meet our experienced pilots, your partners for a safe and thrilling flight.",
    desc: "The heart of our experience lies with our world-class pilots. This image captures the shared joy and trust between a flyer and their guide. With years of experience and a passion for the sky, our pilots are not just experts in safety and technique; they are your partners in adventure, ensuring your flight is as thrilling as it is secure.",
    descTitle1: "More Than Just Drivers",
    desc1:
      "A common misconception is that the pilot is just there to steer. In reality, your pilot is a meteorologist, a navigator, a tour guide, and a photographer all rolled into one. They are constantly reading the 'invisible map' of the sky—watching how eagles fly, how leaves rustle on the trees below, and how clouds are forming—to find the invisible elevators of air called thermals.",
    descTitle2: "The Trust Factor",
    desc2:
      "Strapping yourself to a stranger and running off a cliff requires immense trust. We understand that. That's why our pilots are trained not just in flight mechanics, but in psychology. They know how to calm your nerves, when to crack a joke, and when to let you simply float in silence. The bond formed in those 30 minutes is surprisingly strong; many clients stay friends with their pilots for years after.",
    descTitle3: "Safety is a Lifestyle",
    desc3:
      "In Pokhara, paragliding isn't a weekend hobby; it's a full-time profession. Our pilots log hundreds of flights a year. They carry reserve parachutes (which are rarely used but always checked), radios, and GPS trackers. Before you even buckle up, they have already assessed the wind speed and the cloud cycle. If they say 'we wait,' we wait. Your safety is the only metric that matters.",
  },
  {
    id: 7,
    src: "/images/blog/blog7.webp",
    slug: "paragliding",
    title: "Paragliding",
    span: "col-span-1",
    shortDesc:
      "Soar over lush landscapes for an unforgettable eagle's-eye view.",
    desc: "This is the freedom you've been dreaming of. Soaring gracefully above a patchwork of lush, terraced farmlands and dense green forests, you'll feel the wind lift you higher. This action shot perfectly illustrates the exhilarating feeling of flight, offering an eagle's-eye perspective of the stunning Nepalese countryside unfolding beneath you.",
    descTitle1: "The 'Run, Run, Run' Moment",
    desc1:
      "The most intense part of paragliding is the first 10 seconds. You are standing on a slope, the wing pulls up, and your pilot yells 'Run, run, run!' Your instinct is to stop at the edge, but you have to push through. Then, suddenly, the running stops. The ground drops away. The noise of footsteps is replaced by the sound of wind. That moment of transition from earth to sky is pure magic.",
    descTitle2: "It’s Surprisingly Peaceful",
    desc2:
      "Movies make flying look loud and chaotic. Real paragliding is surprisingly quiet. Once you are away from the launch site, the only sound is the wind in the lines and the beep of the variometer (the instrument that tells us we are going up). You can talk to your pilot without shouting. You can hear birds calling to each other. It’s a meditative experience, not a terrifying one.",
    descTitle3: "The Thermal Game",
    desc3:
      "The goal of the flight is to find 'thermals'—columns of rising warm air. When we catch one, we circle inside it, spiraling upward just like the vultures and eagles do. It’s a game of chess with nature. Sometimes we gain 500 meters in a few minutes, lifting us high above the takeoff point. This is where you get the 'eagle's eye' view that drones can only dream of.",
  },
  {
    id: 8,
    src: "/images/blog/blog15.jpg",
    slug: "paragliding-second",
    title: "Paragliding",
    span: "col-span-1",
    shortDesc:
      "Share the sky in a collective journey of awe against a Himalayan backdrop.",
    desc: "Flying in tandem means sharing the sky. Here, two gliders navigate the air currents together, showcasing the social and shared nature of this incredible sport. Whether you're flying alongside friends or making new ones in the air, the experience is a collective journey of awe and excitement against the backdrop of the world's highest peaks.",
    descTitle1: "The Sky Party",
    desc1:
      "Paragliding in Pokhara is a communal event. At any given time, there might be 50 gliders in the air. This creates a colorful mosaic against the blue sky. We often fly in 'gaggles' (groups), especially when we find a strong thermal. It’s an incredible feeling to look to your left and see your friend in another glider, waving at you from 50 feet away while you both float over a mountain.",
    descTitle2: "Capturing the Moment",
    desc2:
      "Because we often fly close to other gliders, it offers amazing photo opportunities. You can get photos of yourself with other gliders in the background, which adds scale and depth to your pictures. Our pilots are experts at maneuvering to get that perfect shot where the wing, the mountains, and your smile all align.",
    descTitle3: "Cross-Country Possibilities",
    desc3:
      "For the adventurous souls, we don't just float down; we go exploring. This is called 'Cross Country' or XC. We can fly from Sarangkot along the ridge towards the Green Wall and back. It requires teamwork between pilots and a good understanding of the valley winds. It turns a standard flight into a mini-expedition.",
  },
  {
    id: 9,
    src: "/images/blog/blog10.jpg",
    slug: "mountain-range",
    title: "Mountain Range",
    span: "sm:col-span-2",
    shortDesc:
      "Stunning reflections of the Annapurna range on the calm Phewa Lake.",
    desc: "The perfect summary of Pokhara's unparalleled beauty. This stunning reflection captures the majestic Annapurna and Machhapuchhare peaks mirrored in the tranquil waters of Phewa Lake. It's a view that encapsulates the harmony of water, earth, and sky—a landscape that has captivated adventurers for generations and provides the ultimate reward for every flight.",
    descTitle1: "Naming the Giants",
    desc1:
      "The view from Pokhara isn't just 'mountains'; it's a specific lineup of legends. From left to right, you have Dhaulagiri (8,167m), Annapurna South (7,219m), Annapurna I (8,091m), and the iconic Machapuchare (6,993m). Seeing two 8,000-meter peaks in a single glance is rare on this planet. During the flight, your pilot will point them out, giving you a guided tour of the roof of the world.",
    descTitle2: "The Wall of Snow",
    desc2:
      "What makes the Annapurna range so special is its proximity to Pokhara. The elevation rises from 800m (Pokhara) to over 8,000m in a span of just 30 kilometers. This creates a vertical wall of rock and ice that looks almost fake because it towers so high above the city. When you are flying, you are suspended right in the middle of this vertical gap, giving you the true scale of the planet.",
    descTitle3: "Seasonal Secrets",
    desc3:
      "The mountains wear different clothes in different seasons. In Autumn (Oct-Dec), the air is scrubbed clean, and the visibility is crystal clear—you can see details in the glaciers. In Spring (March-May), the base of the mountains is hazy with heat, but the peaks float above the mist like islands in the sky, and the rhododendrons bloom red on the lower hills. There is no 'bad' time, just different moods.",
  },
];

const aboutUs = [
  {
    id: 1,
    title: "Uncompromising Safety Equipment",
    icon: "codicon:workspace-trusted",
  },
  {
    id: 2,
    title: "Decades of Trust and Experience",
    icon: "ph:handshake",
  },
  {
    id: 3,
    title: "Personalized Care for Every Flyer",
    icon: "healthicons:palliative-care-outline-24px",
  },
  {
    id: 4,
    title: "The Ultimate Himalayan Flying Adventure",
    icon: "fluent-emoji-high-contrast:parachute",
  },
];

const memberLists = [
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

const FAQsLists = [
  {
    id: 1,
    title: "What is paragliding?",
    image: "/images/faqs/faq1.png",
    description:
      "Paragliding is the recreational and competitive adventure sport of flying paragliders: lightweight, free-flying, foot-launched glider aircraft with no rigid primary structure. The pilot sits in a harness suspended below a fabric wing.",
  },
  {
    id: 2,
    title: "Is paragliding safe?",
    image: "/images/faqs/faq2.png",
    description:
      "Yes, paragliding is very safe when conducted with certified and experienced pilots. We use modern, certified equipment that undergoes daily checks. Our pilots are internationally licensed and have thousands of hours of flight experience, making your safety our top priority.",
  },
  {
    id: 3,
    title: "Do I need experience to paraglide?",
    image: "/images/faqs/faq3.png",
    description:
      "No prior experience is necessary for a tandem flight! You will be flying with a professional pilot who will handle all aspects of the flight. You just need to relax and enjoy the breathtaking views. A short briefing is provided before takeoff.",
  },
  {
    id: 4,
    title: "What should I wear for paragliding?",
    image: "/images/faqs/faq4.png",
    description:
      "We recommend wearing comfortable, sturdy, closed-toe shoes (like sneakers or hiking boots), long trousers, and a windproof jacket. The temperature can be cooler at higher altitudes, so dressing in layers is a good idea. Sunglasses are also highly recommended.",
  },
];

export {
  navLists,
  whyUs,
  packageLists,
  testimonialLists,
  socialLinkLists,
  articleLists,
  aboutUs,
  memberLists,
  FAQsLists,
};
