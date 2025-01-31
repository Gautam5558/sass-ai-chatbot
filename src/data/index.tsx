import {
  ChartLine,
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Real time currency comparision",
    logo: <CircleDollarSign className="h-4 w-4 text-white" />,
    content:
      "Instantly convert global currencies using accurate and up to date exchange rates, helping bussinesses adjust pricing etc.",
  },
  {
    id: 2,
    title: "Interactive data visualizations",
    logo: <ChartLine className="h-4 w-4 text-white" />,
    content:
      "Explore detailed charts and graphs with interactive features, allowing users to drill down on PPP data.",
  },
  {
    id: 3,
    title: "Customizable analysis and reports",
    logo: <ChartNoAxesColumnIncreasing className="h-4 w-4 text-white" />,
    content:
      "Generate tailored reports with actionable insights on urrency trends,market trend to do data driven decision making.",
  },
];

export const pricingPlansData = [
  {
    title: "Free",
    description: "For personal use",
    price: 0,
    features: [
      { name: "Access PPP data for 5 countries", isAvailable: true },
      { name: "Basic currency converter", isAvailable: true },
      { name: "Monthly updates", isAvailable: true },
      { name: "Email support", isAvailable: false },
      { name: "Historical data updates", isAvailable: false },
    ],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    description: "For professionals and frequent users",
    price: 15,
    features: [
      { name: "Access PPP data for 50+ countries", isAvailable: true },
      { name: "Advanced currency insights", isAvailable: true },
      { name: "Weekly updates", isAvailable: true },
      { name: "Priority email support", isAvailable: true },
      { name: "Historical data access", isAvailable: true },
    ],
    buttonText: "Upgrade to Pro",
  },
  {
    title: "Enterprise",
    description: "For businesses and large-scale analysis",
    price: 50,
    features: [
      { name: "Global PPP data access", isAvailable: true },
      { name: "Custom analytics dashboard", isAvailable: true },
      { name: "Daily updates", isAvailable: true },
      { name: "Dedicated account manager", isAvailable: true },
      { name: "API access for integration", isAvailable: true },
    ],
    buttonText: "Upgrade to Enterprise",
  },
];
