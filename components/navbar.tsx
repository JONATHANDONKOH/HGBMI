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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Church, Calendar, Book, Phone, Info, Heart, Facebook, Youtube, Instagram, MapPin, LogOut, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"
import { useRouter, usePathname } from "next/navigation"

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Church,
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
    description: "Learn about our church community and mission",
  },
  {
    title: "Events",
    href: "/events",
    icon: Calendar,
    description: "Monday, Wednesday, and Sunday services",
  },
  {
    title: "Fellowship",
    href: "/fellowship",
    icon: Users,
  },
  {
    title: "Give",
    href: "/give",
    icon: Heart,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
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
  const { user, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className={pathname.startsWith('/fellowship') ? '' : 'bg-blue-600'} style={pathname.startsWith('/fellowship') ? { background: 'radial-gradient(circle, #2563eb, #1e40af)' } : {}}>
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-12 w-12 items-center justify-center text-white">
                <img src="/church loog.jpg" alt="Church Logo" className="h-10 w-30" />
              </div>
              <span 
                className="text-[18px] text-white"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontWeight: '400',
                  fontStyle: 'normal'
                }}
              >
                Hour of grace believers<br/> ministry international
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
                          <Link href={item.href}>
                            <NavigationMenuTrigger
                              className={cn(
                                "text-xl font-bold text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10",
                              )}
                              style={{
                                fontFamily: '"Bebas Neue", sans-serif',
                                fontWeight: '400',
                                fontStyle: 'normal'
                              }}
                            >
                              {item.title === "Contact" && (
                                <>
                                  {item.title}
                                  <img src="/ghana-flag.jpg" alt="Ghana Flag" className="h-6 w-10 ml-2 rounded-sm inline-block" />
                                </>
                              )}
                              {item.title !== "Contact" && <><item.icon className="mr-2 h-4 w-4" />{item.title}</>}
                            </NavigationMenuTrigger>
                          </Link>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.items?.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className={cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                      )}
                                    >
                                      <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-xl font-bold transition-colors hover:bg-white/10 focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10 text-white hover:text-white",
                            )}
                            style={{
                              fontFamily: '"Bebas Neue", sans-serif',
                              fontWeight: '400',
                              fontStyle: 'normal'
                            }}
                          >
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.title}
                            {item.title === "Contact" && (
                              <img src="/ghana-flag.jpg" alt="Ghana Flag" className="h-6 w-10 ml-2 rounded-sm inline-block" />
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="flex h-12 w-12 items-center justify-center text-primary">
                      <img src="/church_loog-removebg-preview.png" alt="Church Logo" className="h-7 w-7" />
                    </div>
                    <span 
                      className="text-xl font-bold"
                      style={{
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontWeight: '400',
                        fontStyle: 'normal'
                      }}
                    >
                      HGBMI
                    </span>
                  </div>

                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <div key={item.title}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-3 px-3 py-2 text-base font-bold hover:bg-accent hover:text-accent-foreground transition-colors",
                          )}
                          style={{
                            fontFamily: '"Bebas Neue", sans-serif',
                            fontWeight: '400',
                            fontStyle: 'normal'
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span 
                            style={{
                              fontFamily: '"Bebas Neue", sans-serif',
                              fontWeight: '400',
                              fontStyle: 'normal'
                            }}
                          >
                            {item.title}
                          </span>
                        </Link>

                        {item.hasDropdown && item.items && (
                          <div className="ml-7 mt-2 space-y-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className={cn(
                                  "block px-3 py-2 text-base text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-bold",
                                )}
                                style={{
                                  fontFamily: '"Bebas Neue", sans-serif',
                                  fontWeight: '400',
                                  fontStyle: 'normal'
                                }}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="border-t pt-4">
                    <h3 
                      className="text-base font-bold text-muted-foreground mb-3"
                      style={{
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontWeight: '400',
                        fontStyle: 'normal'
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

  <div className="bg-[#000080] h-[40px] w-full flex items-center justify-between px-4">
        <div className="container mx-auto flex justify-between items-center w-full">
          <div className="flex items-center space-x-2">
            {user && (
              <Button
                onClick={handleSignOut}
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-white/20 h-8 px-3"
                style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {socialMediaLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center text-white hover:text-white hover:bg-white/20 transition-colors"
                title={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
