import { useState } from "react";
import { Link } from "wouter";
import { Search, ShoppingCart, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import sleeksLogo from "@assets/sleeks-logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const SleeksLogo = () => (
    <img 
      src={sleeksLogo} 
      alt="Sleeks" 
      className="h-8 w-auto"
    />
  );

  const NavDropdown = ({ title, items }: { title: string; items: string[] }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sleeks-gray hover:text-sleeks-black font-medium text-sm tracking-wide h-auto p-0 gap-1">
          {title}
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {items.map((item) => (
          <DropdownMenuItem key={item} className="text-sleeks-gray hover:text-sleeks-black">
            {item === "Live Drops" ? (
              <Link href="/live-drops" className="w-full">
                {item}
              </Link>
            ) : item === "Club Fitters" ? (
              <Link href="/apparel" className="w-full">
                {item}
              </Link>
            ) : (
              item
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const shopItems = ["New Arrivals", "Club Fitters", "Accessories"];
  const clubsItems = ["VIP Membership", "Events", "Community", "Live Drops"];
  const lookbookItems = ["Spring 2024", "Behind the Scenes", "Editorial"];
  const contactItems = ["Customer Service", "Size Guide", "Shipping Info"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <SleeksLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="flex items-center space-x-8">
              <NavDropdown title="SHOP" items={shopItems} />
              <NavDropdown title="CLUBS" items={clubsItems} />
              <NavDropdown title="LOOKBOOK" items={lookbookItems} />
              <NavDropdown title="CONTACT" items={contactItems} />
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 ml-8">
              <Button variant="ghost" size="sm" className="text-sleeks-gray hover:text-sleeks-black p-2">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-sleeks-gray hover:text-sleeks-black p-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-sleeks-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sleeks-gray hover:text-sleeks-black">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-sleeks-gray hover:text-sleeks-black font-medium text-sm tracking-wide py-2 px-0 h-auto"
                        onClick={() => toggleSection('shop')}
                      >
                        SHOP
                        {expandedSections.includes('shop') ? 
                          <ChevronDown className="h-4 w-4" /> : 
                          <ChevronRight className="h-4 w-4" />
                        }
                      </Button>
                      {expandedSections.includes('shop') && (
                        <div className="pl-4 space-y-2">
                          {shopItems.map((item) => (
                            <div key={item} className="text-sleeks-gray hover:text-sleeks-black font-medium text-xs tracking-wide py-1">
                              {item === "Club Fitters" ? (
                                <Link href="/apparel" onClick={() => setIsOpen(false)}>
                                  {item}
                                </Link>
                              ) : (
                                item
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-sleeks-gray hover:text-sleeks-black font-medium text-sm tracking-wide py-2 px-0 h-auto"
                        onClick={() => toggleSection('clubs')}
                      >
                        CLUBS
                        {expandedSections.includes('clubs') ? 
                          <ChevronDown className="h-4 w-4" /> : 
                          <ChevronRight className="h-4 w-4" />
                        }
                      </Button>
                      {expandedSections.includes('clubs') && (
                        <div className="pl-4 space-y-2">
                          {clubsItems.map((item) => (
                            <div key={item} className="text-sleeks-gray hover:text-sleeks-black font-medium text-xs tracking-wide py-1">
                              {item === "Live Drops" ? (
                                <Link href="/live-drops" onClick={() => setIsOpen(false)}>
                                  {item}
                                </Link>
                              ) : (
                                item
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-sleeks-gray hover:text-sleeks-black font-medium text-sm tracking-wide py-2 px-0 h-auto"
                        onClick={() => toggleSection('lookbook')}
                      >
                        LOOKBOOK
                        {expandedSections.includes('lookbook') ? 
                          <ChevronDown className="h-4 w-4" /> : 
                          <ChevronRight className="h-4 w-4" />
                        }
                      </Button>
                      {expandedSections.includes('lookbook') && (
                        <div className="pl-4 space-y-2">
                          {lookbookItems.map((item) => (
                            <div key={item} className="text-sleeks-gray hover:text-sleeks-black font-medium text-xs tracking-wide py-1">
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-sleeks-gray hover:text-sleeks-black font-medium text-sm tracking-wide py-2 px-0 h-auto"
                        onClick={() => toggleSection('contact')}
                      >
                        CONTACT
                        {expandedSections.includes('contact') ? 
                          <ChevronDown className="h-4 w-4" /> : 
                          <ChevronRight className="h-4 w-4" />
                        }
                      </Button>
                      {expandedSections.includes('contact') && (
                        <div className="pl-4 space-y-2">
                          {contactItems.map((item) => (
                            <div key={item} className="text-sleeks-gray hover:text-sleeks-black font-medium text-xs tracking-wide py-1">
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <Button variant="ghost" size="sm" className="text-sleeks-gray hover:text-sleeks-black">
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-sleeks-gray hover:text-sleeks-black relative">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-sleeks-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        2
                      </span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
