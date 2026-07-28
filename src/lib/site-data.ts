export const business = {
  name: "Elevate Electrical Ltd",
  phone: "01273 555 018",
  email: "hello@elevate-electrical.co.uk",
  address: "Unit 7, Fairfield Works, Lewes Road, Brighton BN2 4AA",
  hours: "Monday to Friday, 7.30am to 5.30pm. Emergency call out 24/7.",
  area: "Brighton, Hove, Lewes and the surrounding villages",
};

export const photo = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  homeHero: photo("1621905251189-08b45d6a269e"),
  aboutHero: photo("1503387762-592deb58ef4e"),
  servicesHero: photo("1621905252507-b35492cc74b4"),
  galleryHero: photo("1600585154340-be6161a56a0c"),
  testimonialsHero: photo("1497366216548-37526070297c"),
  faqHero: photo("1581092160562-40aa08e78837"),
  contactHero: photo("1454165804606-c3d57bc86b40"),
  bookingHero: photo("1516156008625-3a9d6067fab5"),
  team: photo("1521791136064-7986c2920216"),
  van: photo("1558618666-fcd25c85cd64"),
  board: photo("1517420704952-d9f39e95b43e"),
};

export const gallery = [
  {
    src: photo("1600585154340-be6161a56a0c", 1200),
    title: "Full rewire, Victorian terrace",
    place: "Hanover, Brighton",
    tag: "Rewires",
  },
  {
    src: photo("1621905251189-08b45d6a269e", 1200),
    title: "Consumer unit upgrade to 18th Edition",
    place: "Hove",
    tag: "Consumer units",
  },
  {
    src: photo("1497366216548-37526070297c", 1200),
    title: "Office lighting and small power fit out",
    place: "New England House",
    tag: "Commercial",
  },
  {
    src: photo("1581092160562-40aa08e78837", 1200),
    title: "Kitchen extension first fix",
    place: "Lewes",
    tag: "Renovations",
  },
  {
    src: photo("1516156008625-3a9d6067fab5", 1200),
    title: "7kW EV charger, bonded and tested",
    place: "Withdean",
    tag: "EV charging",
  },
  {
    src: photo("1493397212122-2b85dda8106b", 1200),
    title: "Garden lighting on a timed circuit",
    place: "Ditchling",
    tag: "Outdoor",
  },
  {
    src: photo("1541888946425-d81bb19240f5", 1200),
    title: "Landlord safety inspection and remedials",
    place: "Kemptown",
    tag: "Testing",
  },
  {
    src: photo("1621905252507-b35492cc74b4", 1200),
    title: "Three phase distribution board replacement",
    place: "Portslade",
    tag: "Commercial",
  },
  {
    src: photo("1596526131083-e8c633c948d2", 1200),
    title: "Loft conversion lighting design",
    place: "Preston Park",
    tag: "Renovations",
  },
];

export const services = [
  {
    title: "Full and partial rewires",
    blurb:
      "Old rubber or fabric wiring replaced properly, room by room, with dust sheets down and a clear plan for which days you lose which sockets.",
    points: ["Period property specialists", "Chasing and making good", "Staged so you can stay at home"],
  },
  {
    title: "Consumer unit upgrades",
    blurb:
      "Metal clad boards with RCBO protection, full circuit testing and a certificate the same week. If the board is fine, we will tell you that too.",
    points: ["18th Edition compliant", "Surge protection fitted", "Circuits labelled clearly"],
  },
  {
    title: "EV charger installation",
    blurb:
      "Zappi, Ohme and Hypervolt units installed with load management and DNO notification handled for you. Cable runs planned so nothing looks bolted on.",
    points: ["OZEV registered installers", "Load curtailment set up", "Tidy cable routing"],
  },
  {
    title: "Fault finding",
    blurb:
      "Tripping RCDs, flickering lights, sockets that only work in the summer. We trace the cause rather than swapping parts until it stops.",
    points: ["Insulation resistance testing", "Written findings", "Fixed hourly rate"],
  },
  {
    title: "EICRs and landlord certificates",
    blurb:
      "Electrical Installation Condition Reports for landlords, agents and buyers, with photographs of every code and a quote for remedials only where needed.",
    points: ["Reports within 48 hours", "Plain English coding notes", "Remedial work optional"],
  },
  {
    title: "Lighting design and installation",
    blurb:
      "Layered lighting for kitchens, extensions and gardens. Dimmable circuits that actually dim, and switch positions chosen before the plaster goes on.",
    points: ["Circuit planning at first fix", "Warm dim LED", "Outdoor and garden schemes"],
  },
  {
    title: "Commercial and landlord maintenance",
    blurb:
      "Planned maintenance for shops, studios and small offices across the city, including emergency lighting testing and three phase work.",
    points: ["Emergency light testing", "Three phase boards", "Out of hours visits"],
  },
  {
    title: "Emergency call out",
    blurb:
      "Loss of power, burning smells, water near a board. Someone answers the phone, day or night, and tells you what to isolate before we arrive.",
    points: ["24 hour response", "Make safe first", "No call out surcharge on weekdays"],
  },
];

export const faqs = [
  {
    q: "Are you registered and insured?",
    a: "Yes. We are NICEIC approved contractors and Part P registered, with £5 million public liability cover. Certificates are issued through the scheme and notified to building control where the work requires it.",
  },
  {
    q: "How much does a rewire cost?",
    a: "It depends on the size of the property, how much of the existing wiring is reusable and how much making good you want us to do. We visit, measure up and send a written quote with a fixed price. There is no charge for the quote.",
  },
  {
    q: "Can I stay in the house during a rewire?",
    a: "Most of our customers do. We work floor by floor and keep at least one working circuit for the kitchen and one for the router. You will lose power in the room being worked on for the day, not the whole house.",
  },
  {
    q: "How long does an EICR take?",
    a: "A two bedroom flat is usually two to three hours. A four bedroom house with outbuildings can be most of a day. We send the report within 48 hours with photographs of anything coded C1, C2 or C3.",
  },
  {
    q: "Do I need to upgrade my fuse board?",
    a: "Not always. If your board is a modern metal unit with working RCD protection and the circuits test well, we will tell you to leave it. Old plastic boards with rewireable fuses are a different conversation.",
  },
  {
    q: "Can you install an EV charger if I park on the street?",
    a: "Not safely, and trailing a cable across a pavement is not something we will sign off. If you have a driveway, garage or allocated bay we can usually get a charger in within a fortnight of survey.",
  },
  {
    q: "What areas do you cover?",
    a: "Brighton, Hove, Lewes, Shoreham, Peacehaven and the villages up to Ditchling and Hurstpierpoint. Anything further we will still take a look at if the job suits us.",
  },
  {
    q: "How do you charge for small jobs?",
    a: "Half day and full day rates rather than a call out fee plus hourly. You get the price before we start, and if the job takes less time than quoted we bill the shorter slot.",
  },
];

export const testimonials = [
  {
    name: "Sample Customer",
    role: "Homeowner, Hanover",
    text: "They rewired our 1890s terrace over three weeks and we stayed in the whole time. Every morning we knew which rooms were off and every evening the dust sheets came up.",
  },
  {
    name: "Sample Customer",
    role: "Letting agent, Hove",
    text: "EICRs come back the next day with photographs of every code, so we can talk to landlords properly instead of guessing what the report means.",
  },
  {
    name: "Sample Customer",
    role: "Cafe owner, Kemptown",
    text: "Our board tripped on a Saturday morning mid service. Someone answered, talked us through isolating the fridge circuit, and had an engineer with us inside the hour.",
  },
  {
    name: "Sample Customer",
    role: "Homeowner, Ditchling",
    text: "The garden lighting scheme was drawn out on paper before anyone touched a spade. Cable runs were buried properly and the lawn looks untouched.",
  },
  {
    name: "Sample Customer",
    role: "Studio manager, Portslade",
    text: "Three phase board swap done overnight so we never lost a working day. Circuits are labelled better than they have been in twenty years.",
  },
  {
    name: "Sample Customer",
    role: "Homeowner, Preston Park",
    text: "They talked us out of a full rewire we did not need and fixed the two circuits that were actually a problem. That honesty is why we keep calling them.",
  },
];
