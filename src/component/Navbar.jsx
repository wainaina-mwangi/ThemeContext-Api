import React from 'react';
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-gray-700 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            MyBrand
          </span>
        </div>

        {/* Navigation Links (Hidden on mobile, usually) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">Home</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">Projects</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">About</a>
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-4">
          <ThemeButton />
          <button className="hidden sm:block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;