import { SiWoocommerce } from "react-icons/si";
import { FaWordpress, FaNodeJs } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";
import { CiCloudOn } from "react-icons/ci";
import { TfiAgenda } from "react-icons/tfi";

export const featuresData = [
 {
    icon: <FaWordpress className="w-6 h-6" />,
    title: "WordPress Hosting:",
    desc: "Optimized environment with automatic updates, LiteSpeed cache, and one‑click installs.",
  },
  {
    icon: <SiWoocommerce className="w-6 h-6" />,
    title: "Managed hosting for WooCommerce",
    desc: "Build and grow an ecommerce website with performance‑tuned WooCommerce hosting.",
  },
  {
    icon: <MdWebAsset className="w-6 h-6" />,
    title: "Web hosting",
    desc: "Secure, speedy,reliable services for all your website hosting needs.",
  },
  {
    icon: <CiCloudOn className="w-6 h-6" />,
    title: "Cloud hosting",
    desc: "The tools to level-up your business with scalable cloud hosting solutions.",
  },
  {
    icon: <TfiAgenda className="w-6 h-6" />,
    title: "Agency hosting",
    desc: "Designed for professionals and agencies",
  },
  {
    icon: <FaNodeJs className="w-6 h-6" />,
    title: "Node.js web apps hosting",
    desc: "Depoloy modern web apps instantly",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$2.99",
    desc: "Best for early-stage startups.",
    credits: "One-time",
    features: [
      "Project discovery & planning",
      "UI/UX design",
      "Basic website development",
      "1 revision round",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Growth",
    price: "$1.99",
    desc: "Growing teams and businesses.",
    credits: "Monthly",
    features: [
      "Everything in Starter",
      "Advanced UI/UX design",
      "Custom development",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Scale",
    price: "$6.99",
    desc: "For brands ready to scale fast.",
    credits: "Custom",
    features: [
      "Everything in Growth",
      "Dedicated project manager",
      "Ongoing optimization",
      "Marketing & growth support",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
 {
    question: "What makes HostSphereX different from other hosting providers?",
    answer:
      "We combine premium branding with cutting‑edge infrastructure, ensuring your site looks and performs flawlessly.",
  },
  {
    question: "Do I need technical skills to use your hosting?  ",
    answer:
      "Not at all — our dashboard is beginner‑friendly, but developers get advanced tools too.",
  },
  {
    question: "Can I migrate my existing website easily? ",
    answer:
      "Yes, we offer free migration support to move your site without downtime.",
  },
  {
    question: "Is my data secure?  ",
    answer:
      "Absolutely — we use enterprise‑grade encryption, firewalls, and proactive monitoring.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "#" },
      { name: "Services", url: "#" },
      { name: "Work", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
