/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLoginMenu = () => setLoginMenuOpen(!loginMenuOpen);
  const closeLoginMenu = () => setLoginMenuOpen(false);

  return (
    <nav className="w-full bg-zinc-950 text-white border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-[#f0281e] font-bold text-xl">
              
                OROSHIURI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-[#FFE14D] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/affiliate" 
              className="text-white hover:text-[#FFE14D] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Become an Affiliate
            </Link>
            <Link 
              href="/benefits" 
              className="text-white hover:text-[#FFE14D] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Benefits for Members
            </Link>
            <Link 
              href="/futures" 
              className="text-white hover:text-[#FFE14D] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home Futures
            </Link>
            
            {/* Login Dropdown */}
            <div className="relative">
              <Button 
                variant="outline" 
                className="flex items-center space-x-1 bg-transparent border-zinc-700 hover:bg-zinc-800 hover:text-[#FFE14D]"
                onClick={toggleLoginMenu}
              >
                <span>Login</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${loginMenuOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              <AnimatePresence>
                {loginMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg py-1 border border-zinc-800"
                  >
                    <Link 
                      href="/login/affiliate" 
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#FFE14D]"
                      onClick={closeLoginMenu}
                    >
                      Affiliate Login
                    </Link>
                    <Link 
                      href="/login/member" 
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#FFE14D]"
                      onClick={closeLoginMenu}
                    >
                      Member Login
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-zinc-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-[#FFE14D] text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/affiliate" 
                className="block px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-[#FFE14D] text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Become an Affiliate
              </Link>
              <Link 
                href="/benefits" 
                className="block px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-[#FFE14D] text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Benefits for Members
              </Link>
              <Link 
                href="/futures" 
                className="block px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-[#FFE14D] text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Home Futures
              </Link>
              
              {/* Login Options for Mobile */}
              <div className="pt-2 pb-1">
                <div className="px-3 text-xs uppercase tracking-wider text-zinc-500 font-medium">
                  Login Options
                </div>
              </div>
              <Link 
                href="/login/affiliate" 
                className="block px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-[#FFE14D] text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Affiliate Login
              </Link>
              <Link 
                href="/login/member" 
                className="block px-3 py-2 rounded-md text-white hover:bg-zinc-800 hover:text-[#FFE14D] text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Member Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;