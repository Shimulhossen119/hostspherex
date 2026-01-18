import { MenuIcon, XIcon } from "lucide-react";
import { PrimaryButton } from "./Buttons";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3">
        <a href="/#">
          <img src="/Hostspherex.png" alt="logo" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://auth.hostinger.com/login?_gl=1*1va89om*_ga*MTQ4NTQxMzgwMS4xNzY4NjE3MjQz*_ga_73N1QWLEMH*czE3Njg2Mjg4NDQkbzIkZzEkdDE3Njg2MzI2MzUkajQ2JGwwJGgxMjAxMjg1MTcyJGRXNVEyTkJVS05tUUFTaTJOZGFXazlhcF9Ga3JESTYyYmpR*_fplc*ekRnTnJkY1NtSlBLNHlKREJMUWY2ekRtUVhYaThOc1hpNXRhazRidCUyRnVvbnNNYXRJd3J4YXVteTVHNnlPZXVHb3ozTmNwRTh0UGE5cEowSHZrNDEzSkNFbyUyRm5zU0tSNk8lMkZjbEhOTjJoUm1OdU1KQlBnUkdlc0lvdkc0VCUyRnclM0QlM0Q.*_gcl_aw*R0NMLjE3Njg2Mjg4ODcuQ2p3S0NBaUE0S2ZMQmhCMEVpd0FVWTdHQVp4eWtwRHVDQWxkT1Nqd3NMLS1kU1ExVjUtS0tlcGFrdjA4bmFPc19qbS1wZVNjVEd3czJob0NwbFVRQXZEX0J3RQ..*_gcl_au*NjQ5ODY2NjYxLjE3Njg2MTcyNDY.">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition max-sm:hidden">
              Sign in
            </button>
          </a>
          <PrimaryButton className="max-sm:text-xs hidden sm:inline-block">
            <a href="https://www.hostinger.com/pricing">Get started</a>
          </PrimaryButton>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <MenuIcon className="size-6" />
        </button>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </a>
        ))}

        <button
          onClick={() => setIsOpen(false)}
          className="font-medium text-gray-300 hover:text-white transition"
        >
          Sign in
        </button>
        <PrimaryButton onClick={() => setIsOpen(false)}>
          Get Started
        </PrimaryButton>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
        >
          <XIcon />
        </button>
      </div>
    </motion.nav>
  );
}
