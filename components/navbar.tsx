```tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Menu,
  Church,
  Calendar,
  Phone,
  Info,
  Heart,
  Facebook,
  Youtube,
  Instagram,
  MapPin,
  Users,
} from "lucide-react"
import { usePathname } from "next/navigation"

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Church,
    hasDropdown: false,
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
    description: "Learn about our church community and mission",
    hasDropdown: false,
  },
  {
    title: "Events",
    href: "/events",
    icon: Calendar,
    description: "Monday, Wednesday, and Sunday services",
    hasDropdown: false,
  },
  {
    title: "Fellowship",
    href: "/fellowship",
    icon: Users,
    hasDropdown: false,
  },
  {
    title: "Give",
    href: "/give",
    icon: Heart,
    hasDropdown: false,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
    hasDropdown: false,
  },
]

const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/hgbmi2",
    icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@hgbmi",
    icon: Youtube,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/stories/hgbmi_gh",
    icon: Instagram,
  },
  {
    name: "Location",
    href: "/contact/location",
    icon: MapPin,
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* Main Navigation */}
      <div
        className="bg-[#000080]"
        style={
          pathname.startsWith("/fellowship")
            ? { background: "#000080" }
            : {}
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2"
            >
              <div className="flex h-12 w-12 items-center justify-center text-white">
                <img
                  src="/church loog.jpg"
                  alt="Church Logo"
                  className="h-10 w-30 object-contain"
                />
              </div>

              <span
                className="text-[18px] text-white"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                Hour of grace believers
                <br />
                ministry international
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">

                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>

                      {item.hasDropdown ? (
                        <>
                          <NavigationMenuTrigger
                            className="text-xl font-bold text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10"
                            style={{
                              fontFamily: '"Bebas Neue", sans-serif',
                              fontWeight: "400",
                              fontStyle: "normal",
                            }}
                          >
                            {item.title}
                          </NavigationMenuTrigger>

                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {/* Add dropdown items here */}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="nav-link group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-xl font-bold transition-colors focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10 text-white hover:text-white relative"
                            style={{
                              fontFamily: '"Bebas Neue", sans-serif',
                              fontWeight: "400",
                              fontStyle: "normal",
                            }}
                          >
                            <item.icon className="mr-2 h-4 w-4" />

                            {item.title}

                            {item.title === "Contact" && (
                              <img
                                src="/ghana-flag.jpg"
                                alt="Ghana Flag"
                                className="h-6 w-10 ml-2 rounded-sm inline-block"
                              />
                            )}
                          </Link>
                        </NavigationMenuLink>
                      )}

                    </NavigationMenuItem>
                  ))}

                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Navigation */}
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger
                asChild
                className="lg:hidden"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">
                    Toggle menu
                  </span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px]"
              >
                <div className="flex flex-col space-y-4 mt-4">

                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="flex h-12 w-12 items-center justify-center text-primary">
                      <img
                        src="/church_loog-removebg-preview.png"
                        alt="Church Logo"
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <span
                      className="text-xl font-bold"
                      style={{
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontWeight: "400",
                        fontStyle: "normal",
                      }}
                    >
                      HGBMI
                    </span>
                  </div>

                  {/* Mobile Links */}
                  <nav className="flex flex-col space-y-2">

                    {navigationItems.map((item) => (
                      <div key={item.title}>

                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 px-3 py-2 text-base font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
                          style={{
                            fontFamily: '"Bebas Neue", sans-serif',
                            fontWeight: "400",
                            fontStyle: "normal",
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />

                          <span
                            style={{
                              fontFamily: '"Bebas Neue", sans-serif',
                              fontWeight: "400",
                              fontStyle: "normal",
                            }}
                          >
                            {item.title}
                          </span>
                        </Link>

                        {item.hasDropdown && (
                          <div className="ml-7 mt-2 space-y-1">
                            {/* Add mobile dropdown items here */}
                          </div>
                        )}

                      </div>
                    ))}

                  </nav>

                  {/* Social Media */}
                  <div className="border-t pt-4">

                    <h3
                      className="text-base font-bold text-muted-foreground mb-3"
                      style={{
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontWeight: "400",
                        fontStyle: "normal",
                      }}
                    >
                      Follow Us
                    </h3>

                    <div className="flex space-x-3">

                      {socialMediaLinks.map((social) => (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          title={social.name}
                          onClick={() => setIsOpen(false)}
                        >
                          <social.icon className="h-5 w-5" />
                        </Link>
                      ))}

                    </div>
                  </div>

                </div>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </div>

      {/* Bottom Social Bar */}
      <div className="bg-[#000080] h-[40px] w-full flex items-center justify-between px-4">

        <div className="container mx-auto flex justify-between items-center w-full">

          {/* Left side intentionally empty */}
          <div className="flex items-center space-x-2">
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">

            {socialMediaLinks.map((social) => {

              let iconColor =
                "text-white hover:text-gray-300"

              if (social.name === "Facebook") {
                iconColor =
                  "text-blue-400 hover:text-blue-300"
              }

              if (social.name === "YouTube") {
                iconColor =
                  "text-red-500 hover:text-red-400"
              }

              if (social.name === "Instagram") {
                iconColor =
                  "text-pink-500 hover:text-pink-400"
              }

              if (social.name === "Location") {
                iconColor =
                  "text-green-500 hover:text-green-400"
              }

              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-8 w-8 items-center justify-center ${iconColor} transition-colors`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              )
            })}

          </div>

        </div>
      </div>

    </header>
  )
}
```
