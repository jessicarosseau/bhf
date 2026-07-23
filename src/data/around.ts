/**
 * AROUND US — a curated local guide to the southern Berkshires.
 *
 * All listings are real, verifiable places gathered from public sources.
 * Outside businesses set their own hours and can change or close, so we link
 * out and remind visitors to confirm before they go. To edit: change the text,
 * add or remove entries, or set `note` to flag anything to double-check.
 */
export interface Place {
  name: string;
  town: string;
  description: string;
  url?: string;
  note?: string; // e.g. "Confirm current hours"
}

export interface AroundSection {
  id: string;
  title: string;
  icon: "basket" | "map-pin" | "leaf" | "sun" | "camera" | "info";
  intro: string;
  places: Place[];
}

export const aroundSections: AroundSection[] = [
  {
    id: "food",
    title: "Food & Coffee",
    icon: "basket",
    intro: "Farm-to-table dinners, Main Street coffee, and a bite after picking.",
    places: [
      { name: "Café Adam", town: "Great Barrington", description: "Farm-to-table American restaurant sourcing from local Berkshire growers.", url: "https://www.cafeadam.org" },
      { name: "The Old Mill", town: "South Egremont", description: "Seasonal contemporary New England cooking in a historic mill building.", url: "https://www.oldmillberkshires.com" },
      { name: "Number Ten", town: "Great Barrington", description: "Classic steakhouse-style dining right beside the Mahaiwe theater." },
      { name: "Rubi's", town: "Great Barrington", description: "Cozy Main Street coffee shop and deli with fresh-ground espresso.", note: "Confirm current hours" },
      { name: "Prairie Whale", town: "Great Barrington", description: "Farm-driven restaurant emphasizing local meat and produce.", note: "Confirm current hours" },
    ],
  },
  {
    id: "shops",
    title: "Shops & Local Businesses",
    icon: "basket",
    intro: "Groceries for the cooler, a good book, and small-town browsing.",
    places: [
      { name: "Guido's Fresh Marketplace", town: "Great Barrington", description: "Family-owned since 1979 — full grocery with deli, cheese, café, and juice bar.", url: "https://guidosfreshmarketplace.com" },
      { name: "Berkshire Food Co-op", town: "Great Barrington", description: "Community-owned natural-foods grocery and local food hub.", url: "https://www.berkshire.coop" },
      { name: "Yellow House Books", town: "Great Barrington", description: "Well-loved used bookstore on Main Street." },
      { name: "Hammertown", town: "Great Barrington", description: "Lifestyle shop with furniture, rugs, kitchenware, and home goods.", url: "https://www.hammertown.com" },
      { name: "Sheffield & South Egremont antiques", town: "Sheffield / S. Egremont", description: "The Berkshires' densest cluster of antiques shops — a browse in itself." },
    ],
  },
  {
    id: "outdoors",
    title: "Hiking & Outdoors",
    icon: "leaf",
    intro: "Waterfalls, summits, and river walks — much of it right around Mt. Washington.",
    places: [
      { name: "Bash Bish Falls State Park", town: "Mt. Washington", description: "Massachusetts' highest single-drop waterfall (~60 ft); a short, popular trail.", url: "https://www.mass.gov/locations/bash-bish-falls-state-park" },
      { name: "Mount Washington State Forest", town: "Mt. Washington", description: "4,000+ acres, ~30 miles of trails, and the South Taconic Trail.", url: "https://www.mass.gov/locations/mount-washington-state-forest" },
      { name: "Mount Everett State Reservation", town: "Mt. Washington", description: "Summit hike with three-state views and Guilder Pond nearby.", url: "https://www.mass.gov/locations/mount-everett-state-reservation" },
      { name: "Monument Mountain", town: "Great Barrington", description: "Family-friendly hike with dramatic rock formations and sweeping views.", url: "https://thetrustees.org/place/monument-mountain/" },
      { name: "Bartholomew's Cobble", town: "Sheffield", description: "Riverside natural reserve with the Hurlburt's Hill overlook.", url: "https://thetrustees.org/place/bartholomews-cobble/" },
    ],
  },
  {
    id: "family",
    title: "Family-Friendly",
    icon: "sun",
    intro: "Easy outings for a day with kids in tow.",
    places: [
      { name: "Taft Farms", town: "Great Barrington", description: "Family farm with seasonal hayrides, a corn maze, and pick-your-own pumpkins.", url: "https://www.taftfarms.com" },
      { name: "Great Barrington Farmers Market", town: "Great Barrington", description: "Seasonal market with produce, prepared food, and live music.", url: "https://www.berkshirefarmersmarkets.org" },
      { name: "Mason Library", town: "Great Barrington", description: "Free year-round family programming — storytimes and performances." },
      { name: "Umpachene Falls", town: "New Marlborough", description: "Town park with a waterfall and shallow wading areas.", note: "Verify seasonal access" },
    ],
  },
  {
    id: "culture",
    title: "Culture & Scenic Stops",
    icon: "camera",
    intro: "Historic theaters, art, and a few drives worth taking slowly.",
    places: [
      { name: "Mahaiwe Performing Arts Center", town: "Great Barrington", description: "Historic 1905 theater with music, dance, film, and family shows.", url: "https://mahaiwe.org" },
      { name: "Norman Rockwell Museum", town: "Stockbridge", description: "Museum dedicated to the beloved illustrator's work.", url: "https://www.nrm.org" },
      { name: "Guilder Pond", town: "Mt. Washington", description: "A quiet high-elevation pond near Mt. Everett — a lovely scenic stop." },
      { name: "Route 23 to Monterey", town: "Great Barrington → Monterey", description: "A rolling countryside drive, especially good in fall foliage." },
      { name: "Tanglewood", town: "Lenox", description: "Summer home of the Boston Symphony — a longer drive north.", url: "https://www.bso.org/tanglewood", note: "About 45 min north" },
    ],
  },
  {
    id: "stay",
    title: "Places to Stay",
    icon: "map-pin",
    intro: "Inns and lodges for turning a visit into a weekend.",
    places: [
      { name: "Race Brook Lodge", town: "Sheffield", description: "Rustic converted-barn lodge at the base of the Taconic Range, with trail access.", url: "https://rblodge.com" },
      { name: "Windflower Inn", town: "Great Barrington", description: "Long-established family-run country inn.", note: "Confirm current operation" },
      { name: "The Barrington (Briarcliff)", town: "Great Barrington", description: "Boutique motel-style lodging near town.", url: "https://thebriarcliffmotel.com" },
    ],
  },
];

/** A simple suggested itinerary that centers a farm visit. */
export const itineraries = [
  {
    title: "Half-day: Berries & a waterfall",
    steps: [
      "Morning — pick blueberries at the farm (check social media for hours first).",
      "Midday — drive to nearby Bash Bish Falls for a short walk to the falls.",
      "Afternoon — coffee and a bite on Main Street in Great Barrington.",
    ],
  },
  {
    title: "Full day: Mountain to Main Street",
    steps: [
      "Morning — pick your berries early, before the heat.",
      "Late morning — hike Mt. Everett or Monument Mountain for the big views.",
      "Lunch — pack a picnic from Guido's or the Co-op.",
      "Afternoon — browse the shops and antiques in Great Barrington and Sheffield.",
      "Evening — dinner in town, or a show at the Mahaiwe.",
    ],
  },
];
