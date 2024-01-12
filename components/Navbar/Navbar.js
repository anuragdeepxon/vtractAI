import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="bg-gray-900 opacity-100 no-print">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8 lg:px-24">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="relative text-white  w-full max-w-xs mr-3">
                        Hacker
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex space-x-4">

                </div>
            </nav>
        </div>
    );
}
