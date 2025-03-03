"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";
import { useHeader } from "@/hooks/useHeader";

const Header = ({ currentPage }: { currentPage: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { announcement, info, fetchInformations } = useHeader();
  const pages = ["home", "education", "travel", "edufair"];
  const navLinks = [
    { href: "/", label: "Home", key: "home" },
    { href: "/about", label: "About Us", key: "about" },
    {
      // if pages that have own contact form component, it scrools to component, if it doesn't it navigates to home -> contact form
      href: pages.includes(currentPage) ? "#contact" : "/#contact",
      label: "Contact",
      key: "contact",
    },
  ];

  useEffect(() => {
    fetchInformations();
  }, []);

  return (
    <div className="header">
      <header className="py-4 px-4 md:px-8 lg:px-16 mamnun-container">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <Link href="/" className="flex items-center col brand-logo">
            <img src="/images/logo.png" alt="" width="257" height="127" />
          </Link>

          {/* Announcement */}
          {announcement && (
            <div className="col">
              <div className="fflex items-center justify-center announcement">
                <a href={announcement.link} className="announcement-name">
                  {announcement.name}
                </a>
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div className="col">
            <div className="items-center space-x-4 text-sm informations">
              <a
                href={`tel:${info.phoneNumber}`}
                className="text-gray-700 hover:text-blue-500"
              >
                {info.phoneNumber}
              </a>
              <a
                href={`mailto:${info.mail}`}
                className="text-gray-700 hover:text-blue-500"
              >
                {info.mail}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-2">
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label, key }) => (
              <Link
                key={key}
                href={href}
                className={`page-link ${
                  currentPage === key ? "underline font-bold" : "text-gray-700"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-end w-full mt-2 text-gray-700 hover:text-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 bg-white text-gray transform transition-transform duration-300 p-6 shadow-lg ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-black text-xl focus:outline-none"
          >
            &times;
          </button>
          <nav className="flex flex-col space-y-4 text-sm font-medium responsive-bar">
            {navLinks.map(({ href, label, key }) => (
              <Link
                key={key}
                href={href}
                className={`text-gray hover:text-grey-500 ${
                  currentPage === key ? "underline text-blue-500" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="mt-6 border-t border-gray-500 pt-4 text-sm">
              <p>
                Phone:{" "}
                <a
                  href={`tel:${info.phoneNumber}`}
                  className="text-gray hover:text-blue-500"
                >
                  {info.phoneNumber}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${info.mail}`}
                  className="text-gray hover:text-blue-500"
                >
                  {info.mail}
                </a>
              </p>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
