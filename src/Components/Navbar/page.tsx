'use client';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

import { useState, useRef } from 'react';

const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    // Close dropdown when clicking outside
  
    // Handle mouse enter with slight delay
    const handleMouseEnter = () => {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
    setShowDropdown(true);
};

const handleMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
      setShowDropdown(false);
   
  };

    // Category items with their respective subcategories
    const categoryItems = [
        {
            name: 'Tech',
            href: '/categories/tech',
            subcategories: [
                { name: 'Web Development', href: '/categories/tech/web-development' },
               
                { name: 'AI & Machine Learning', href: '/categories/tech/ai-ml' },
              
            ]
        },
        {
            name: 'Sustainability',
            href: '/categories/sustainability',
            subcategories: [
                { name: 'Green Energy', href: '/categories/sustainability/green-energy' },
                { name: 'Eco-Friendly Products', href: '/categories/sustainability/eco-products' },
                { name: 'Climate Change', href: '/categories/sustainability/climate-change' },
                { name: 'Sustainable Living', href: '/categories/sustainability/sustainable-living' }
            ]
        },
        
    ];

    return(
        <nav className="md:flex md:justify-between px-4 py-3 shadow-md md:items-center bg-white fixed top-0 w-full z-50 mb-10">
            <div className='flex justify-between items-center'>
                <div className="text-blue-600 p-5 font-bold text-5xl">
                    Tech<span className='text-amber-300'>Lab</span>
                </div>

                <div className='md:hidden'>
                    <button
                        className='md:hidden text-3xl text-gray-800 mx-2 cursor-pointer block' 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <XMarkIcon className='h-6 w-6 text-red-800' />  
                        ) : (
                            <Bars3Icon className='h-6 w-6 text-cyan-400' />
                        )}
                    </button>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex justify-between p-5 text-blue-900 font-bold text-3xl">
                <nav className='hidden md:flex gap-6'>
                    <ul className="md:flex md:items-center gap-6 list-none cursor-pointer">
                        <li className="inline-block relative group hover:text-green-300">
                            <Link href='/' className='transition duration-300'>
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                        
                        <li className="inline-block relative group hover:text-green-300">
                            <Link href='/about' className='transition duration-300'>
                                About
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                        
                        <li className="inline-block relative group hover:text-green-300">
                            <Link href='/featured' className='transition duration-300'>
                                Featured
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>

                        {/* Desktop Categories Dropdown */}
                        <li 
                            ref={dropdownRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="inline-block relative group hover:text-green-300"
                        >
                            <Link href='/categories' className='transition duration-300 flex items-center gap-1'>
                                Categories
                                <ChevronDownIcon 
                                    className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                                />
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            
                            <div className={`absolute top-full -left-20 mt-2 bg-white border border-gray-200 shadow-lg rounded-md min-w-[250px] z-50 transition-all duration-300 ease-in-out transform ${
                                showDropdown 
                                    ? 'opacity-100 visible translate-y-0 scale-100' 
                                    : 'opacity-0 invisible -translate-y-2 scale-95'
                            }`}>
                                <div className="py-2">
                                    {categoryItems.map((category, index) => (
                                        <div key={index} className="relative group/item">
                                            <Link 
                                                href={category.href}
                                                className='flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:scale-105 hover:translate-x-1'
                                            >
                                                <span className="transition-all duration-200">{category.name}</span>
                                                <ChevronRightIcon className="w-4 h-4 transition-transform duration-200 group-hover/item:translate-x-1" />
                                            </Link>
                                            
                                            {/* Subcategory dropdown */}
                                            <div className="absolute left-full top-0 -ml-4 bg-white border border-gray-200 shadow-lg rounded-md min-w-[220px] transition-all duration-300 ease-in-out transform opacity-0 invisible -translate-x-2 scale-95 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 group-hover/item:scale-100">
                                                <div className="py-2">
                                                    {category.subcategories.map((sub, subIndex) => (
                                                        <Link 
                                                            key={subIndex}
                                                            href={sub.href}
                                                            className='block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-1 hover:scale-105'
                                                        >
                                                            <span className="transition-all duration-200">{sub.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        
                        <li className="inline-block relative group hover:text-green-300">
                            <Link href='/contact' className='transition duration-300'>
                                Contact
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transform transition-all duration-700 ease-in-out ${menuOpen ? 'max-h-[600px] opacity-100 translate-x-0' : 'max-h-0 opacity-0 translate-x-full pointer-events-none'} px-4 text-cyan-400 overflow-y-auto  origin-top`}>
                <ul className='list-none cursor-pointer'>
                    <li className='font-bold py-2'>
                        <Link href="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className='font-bold py-2'>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li className='font-bold py-2'>
                        <Link href="/featured" onClick={() => setMenuOpen(false)}>
                            Featured
                        </Link>
                    </li>
                    
                    {/* Mobile Categories with Dropdown */}
                    <li className='font-bold py-2'>
                        <div className="flex items-center justify-between">
                            <Link href="/categories" onClick={() => setMenuOpen(false)}>
                                Categories
                            </Link>
                            <button
                                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                className="ml-2 p-1"
                            >
                                <ChevronDownIcon 
                                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                        </div>
                        
                        {/* Mobile Subcategories */}
                        <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="pl-4 pt-2">
                                {categoryItems.map((category, index) => (
                                    <div key={index} className="mb-3">
                                        <Link 
                                            href={category.href}
                                            className="block text-green-400 font-semibold mb-1"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {category.name}
                                        </Link>
                                        <div className="pl-3">
                                            {category.subcategories.map((sub, subIndex) => (
                                                <Link 
                                                    key={subIndex}
                                                    href={sub.href}
                                                    className="block text-sm text-gray-500 py-1 hover:text-green-300 transition-colors"
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    • {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    
                    <li className='font-bold py-2'>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;