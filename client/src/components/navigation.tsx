import { useState } from "react";
import { Link } from "wouter";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sleeksLogo from "@assets/sleeks-logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const SleeksLogo = () => (
    <img 
      src={sleeksLogo} 
      alt="Sleeks" 
      className="h-8 w-auto"
    />
  );

  const MenuLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link href={href} onClick={onClick}>
      <div className="text-2xl font-light tracking-wider text-black hover:text-gray-600 transition-colors duration-200 py-2">
        {children}
      </div>
    </Link>
  );

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white text-center py-2 text-xs tracking-widest">
        COMPLIMENTARY STANDARD SHIPPING
        <button className="absolute right-4 top-2 text-white hover:text-gray-300">
          <X className="h-3 w-3" />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Menu Button */}
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(true)}
              className="text-black hover:text-gray-600 p-0 h-auto font-light tracking-widest text-sm"
            >
              <Menu className="h-5 w-5 mr-2" />
              MENU
            </Button>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <SleeksLogo />
              </Link>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-black hover:text-gray-600 p-2">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-black hover:text-gray-600 p-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center">
                <SleeksLogo />
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setIsMenuOpen(false)}
                className="text-black hover:text-gray-600 p-2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex">
              {/* Left Section - Main Navigation */}
              <div className="flex-1 p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-medium tracking-widest text-gray-500 mb-4 uppercase">COLLECTIONS</h3>
                  <div className="space-y-1">
                    <MenuLink href="/club-kits" onClick={() => setIsMenuOpen(false)}>
                      CLUB KITS
                    </MenuLink>
                    <MenuLink href="/apparel" onClick={() => setIsMenuOpen(false)}>
                      APPAREL
                    </MenuLink>
                    <MenuLink href="/accessories" onClick={() => setIsMenuOpen(false)}>
                      ACCESSORIES
                    </MenuLink>
                    <MenuLink href="/live-drops" onClick={() => setIsMenuOpen(false)}>
                      LIVE DROPS
                    </MenuLink>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium tracking-widest text-gray-500 mb-4 uppercase">BRAND</h3>
                  <div className="space-y-1">
                    <div className="text-2xl font-light tracking-wider text-black hover:text-gray-600 transition-colors duration-200 py-2 cursor-pointer">
                      ABOUT
                    </div>
                    <div className="text-2xl font-light tracking-wider text-black hover:text-gray-600 transition-colors duration-200 py-2 cursor-pointer">
                      LOOKBOOK
                    </div>
                    <a 
                      href="https://sleeks-studio.replit.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl font-light tracking-wider text-black hover:text-gray-600 transition-colors duration-200 py-2 cursor-pointer block"
                    >
                      STUDIO
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section - Account & Support */}
              <div className="w-80 p-6 bg-gray-50 space-y-6">
                <div>
                  <h3 className="text-xs font-medium tracking-widest text-gray-500 mb-4 uppercase">ACCOUNT</h3>
                  <div className="space-y-2">
                    <div className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 py-1 cursor-pointer">
                      Log In
                    </div>
                    <div className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 py-1 cursor-pointer">
                      Create Account
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium tracking-widest text-gray-500 mb-4 uppercase">CUSTOMER SUPPORT</h3>
                  <div className="space-y-2">
                    <div className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 py-1 cursor-pointer">
                      Contact Us
                    </div>
                    <div className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 py-1 cursor-pointer">
                      Size Guide
                    </div>
                    <div className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 py-1 cursor-pointer">
                      Shipping Info
                    </div>
                    <div className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors duration-200 py-1 cursor-pointer">
                      Returns
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-xs tracking-widest text-gray-500 mb-2 uppercase">SHOP IN: UNITED STATES</div>
                  <div className="text-xs text-gray-400">
                    Change region
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}