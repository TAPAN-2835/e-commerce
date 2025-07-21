import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { SearchBar } from "../../../../components/SearchBar";
import { ShoppingCart as ShoppingCartComponent } from "../../../../components/ShoppingCart";
import { AuthModal } from "../../../../components/AuthModal";
import { useCart } from "../../../../hooks/useCart";
import { useAuth } from "../../../../hooks/useAuth";

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const { user, logout } = useAuth();

  // Top banner navigation items
  const topBannerItems = [
    { text: "Get early access on launches and offers.", isUnderlined: false },
    { text: "Sign Up For Texts", isUnderlined: true },
  ];

  // Main navigation items
  const mainNavItems = [
    { text: "Women", isActive: false, href: "#featured" },
    { text: "Men", isActive: true, href: "#products" },
    { text: "About", isActive: false, href: "#about" },
    { text: "Stories", isActive: false, href: "#reviews" },
  ];

  // Secondary navigation items
  const secondaryNavItems = [
    { text: "Holiday Gifting", isHighlighted: false, href: "#hero" },
    { text: "New Arrivals", isHighlighted: false, href: "#new-arrivals" },
    { text: "Best-Sellers", isHighlighted: false, href: "#best-sellers" },
    { text: "Categories", isHighlighted: false, href: "#categories" },
    { text: "Featured", isHighlighted: false, href: "#featured" },
    { text: "Products", isHighlighted: false, href: "#products" },
    { text: "Gallery", isHighlighted: false, href: "#gallery" },
    { text: "Reviews", isHighlighted: false, href: "#reviews" },
    { text: "Sale", isHighlighted: true, href: "#sale" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  const handleUserAction = () => {
    if (user) {
      logout();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <motion.header 
        className="flex flex-col items-center w-full bg-white sticky top-0 z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
      {/* Top promotional banner */}
      <div className="hidden md:flex items-center justify-around gap-1 px-4 lg:px-[30px] py-[7px] w-full bg-x-600">
        <div className="flex items-center justify-center gap-1 flex-1 text-sm lg:text-base">
          {topBannerItems.map((item, index) => (
            <div
              key={index}
              className={`relative w-fit mt-[-1.00px] font-text-200${
                item.isUnderlined ? "-underline" : "-demi"
              } font-[number:var(--text-200${
                item.isUnderlined ? "-underline" : "-demi"
              }-font-weight)] text-white text-[length:var(--text-200${
                item.isUnderlined ? "-underline" : "-demi"
              }-font-size)] text-center tracking-[var(--text-200${
                item.isUnderlined ? "-underline" : "-demi"
              }-letter-spacing)] leading-[var(--text-200${
                item.isUnderlined ? "-underline" : "-demi"
              }-line-height)] ${
                item.isUnderlined ? "underline" : ""
              } whitespace-nowrap [font-style:var(--text-200${
                item.isUnderlined ? "-underline" : "-demi"
              }-font-style)]`}
            >
              {item.text}
            </div>
          ))}
          <svg className="relative w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-[21px] h-[15px] bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">US</span>
          </div>
          <div className="text-white relative w-fit mt-[-1.00px] font-text-200 font-[number:var(--text-200-font-weight)] text-[length:var(--text-200-font-size)] tracking-[var(--text-200-letter-spacing)] leading-[var(--text-200-line-height)] whitespace-nowrap [font-style:var(--text-200-font-style)]">
            USD
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex items-center justify-between px-4 lg:px-[68px] py-0 w-full border-b border-[#dddbdc] relative">
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex items-start">
            {mainNavItems.map((item, index) => (
              <NavigationMenuItem key={index} className="flex flex-col">
                <NavigationMenuLink
                  className={`gap-3 px-3 py-5 inline-flex flex-col items-start cursor-pointer hover:bg-gray-50 transition-colors`}
                  onClick={() => scrollToSection(item.href)}
                >
                  <div className="text-x-500 relative w-fit mt-[-1.00px] font-text-200 font-[number:var(--text-200-font-weight)] text-[length:var(--text-200-font-size)] text-center tracking-[var(--text-200-letter-spacing)] leading-[var(--text-200-line-height)] whitespace-nowrap [font-style:var(--text-200-font-style)]">
                    {item.text}
                  </div>
                  {item.isActive && (
                    <div className="h-0.5 bg-x-500 self-stretch w-full" />
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden p-3 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>

        {/* Desktop Search */}
        <div className="hidden lg:block flex-1 max-w-md mx-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex items-center justify-end">
          {/* Mobile Search Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden p-3 hover:bg-gray-100 transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <Search className="w-4 h-4" />
          </Button>
          
          {/* User Account */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="p-3 hover:bg-gray-100 transition-colors relative"
            onClick={handleUserAction}
            aria-label={user ? "Account menu" : "Sign in"}
          >
            {user ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <User className="w-4 h-4" />
            )}
          </Button>
          
          {/* Shopping Cart */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="p-3 hover:bg-gray-100 transition-colors relative"
            onClick={() => setCartOpen(true)}
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <ShoppingCart className="w-4 h-4" />
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-1 -right-1 bg-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {totalItems}
              </motion.span>
            )}
          </Button>
        </div>

        <div 
          className="absolute w-24 lg:w-32 h-3 lg:h-3.5 top-[21px] left-[50%] transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('#hero')}
        >
          <div className="w-full h-full bg-x-600 flex items-center justify-center rounded">
            <span className="text-white font-bold text-xs lg:text-sm">EVERLANE</span>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <motion.div 
          className="lg:hidden px-4 py-3 border-b border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>
      )}

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden w-full bg-white border-b border-gray-200 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col py-4">
            {mainNavItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  item.isActive ? 'bg-gray-100 border-l-4 border-x-500' : ''
                }`}
              >
                <span className="font-text-200 text-x-500 text-[length:var(--text-200-font-size)]">
                  {item.text}
                </span>
              </button>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2">
              {secondaryNavItems.slice(0, 5).map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-left hover:bg-gray-50 transition-colors w-full ${
                    item.isHighlighted ? 'text-red' : 'text-x-400'
                  }`}
                >
                  <span className="font-text-200 text-sm">
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Secondary navigation */}
      <NavigationMenu className="hidden lg:flex items-center justify-center w-full overflow-x-auto">
        <NavigationMenuList className="flex items-center justify-center">
          {secondaryNavItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink 
                className="gap-3 px-3 py-5 inline-flex flex-col items-start cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => scrollToSection(item.href)}
              >
                <div
                  className={`relative w-fit mt-[-1.00px] font-text-200 font-[number:var(--text-200-font-weight)] ${
                    item.isHighlighted ? "text-red" : "text-x-500"
                  } text-[length:var(--text-200-font-size)] text-center tracking-[var(--text-200-letter-spacing)] leading-[var(--text-200-line-height)] whitespace-nowrap [font-style:var(--text-200-font-style)]`}
                >
                  {item.text}
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      </motion.header>

      {/* Components */}
      <ShoppingCartComponent />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};
