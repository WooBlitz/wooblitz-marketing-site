"use client";

import Logo from "@/components/shadcn-space/assets/logo/logo";

import { cn } from "@/lib/utils";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import { useState, useEffect, useCallback } from "react";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";

import { Menu, X, Phone } from "lucide-react";



export type NavigationSection = {

    name: string;

    href: string;

    isActive?: boolean;

};



interface NavbarProps {

    navigationData: NavigationSection[];

}



const Navbar = ({ navigationData }: NavbarProps) => {

    const [sticky, setSticky] = useState(false);

    const [isOpen, setIsOpen] = useState(false);



    const handleScroll = useCallback(() => {

        setSticky(window.scrollY >= 40);

    }, []);



    const handleResize = useCallback(() => {

        if (window.innerWidth >= 768) setIsOpen(false);

    }, []);



    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        window.addEventListener("resize", handleResize);



        return () => {

            window.removeEventListener("scroll", handleScroll);

            window.removeEventListener("resize", handleResize);

        };

    }, [handleScroll, handleResize]);

    return (

        <header className="sticky top-0 z-40 bg-background backdrop-blur-2xl border-b border-border">

            <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 py-4 w-full">

                <nav className="flex items-center justify-between">

                    <a href="#">

                        <Logo />

                    </a>

                    <NavigationMenu className="max-lg:hidden">

                        <NavigationMenuList className="gap-8">

                            {navigationData.map((navItem) => (

                                <NavigationMenuItem key={navItem.name}>

                                    <NavigationMenuLink

                                        href={navItem.href}

                                        className={cn(

                                            "p-0 text-base text-foreground hover:text-foreground/80 font-normal hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",

                                            navItem.isActive && "font-medium",

                                        )}

                                    >

                                        {navItem.name}

                                    </NavigationMenuLink>

                                </NavigationMenuItem>

                            ))}

                        </NavigationMenuList>

                    </NavigationMenu>

                    <Button className="max-lg:hidden h-auto px-5 py-2.5 cursor-pointer hover:bg-primary/80 hover:translate-y-0.5 transition-transform duration-300">Get Started</Button>



                    <div className="lg:hidden">

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>

                            <SheetTrigger>

                                <div className="w-9 h-9 flex items-center justify-center border rounded-lg">

                                    <Menu size={16} className="text-foreground cursor-pointer" />

                                    <span className="sr-only">Menu</span>

                                </div>

                            </SheetTrigger>



                            <SheetContent

                                showCloseButton={false}

                                side="right"

                                className="w-full sm:w-96 p-0 border-l-0"

                            >

                                <div className="flex items-center justify-between px-4 pt-5 pb-2">

                                    <a href="#">

                                        <Logo className="gap-2" />

                                    </a>

                                    <SheetClose>

                                        <div className="w-9 h-9 flex items-center justify-center border rounded-lg cursor-pointer">

                                            <X size={16} className="shrink-0 text-foreground cursor-pointer" />

                                        </div>

                                    </SheetClose>

                                </div>



                                <div className="flex flex-col gap-5 px-6 pb-6 overflow-y-auto">

                                    <div className="flex flex-col gap-8">

                                        <SheetTitle className="sr-only">Menu</SheetTitle>

                                        <NavigationMenu

                                            orientation="vertical"

                                            className="items-start flex-none"

                                        >

                                            <NavigationMenuList className="flex flex-col items-start gap-3">

                                                {navigationData.map((item) => (

                                                    <NavigationMenuItem key={item.name}>

                                                        <NavigationMenuLink

                                                            href={item.href}

                                                            className={cn(

                                                                "p-0 text-xl font-medium text-foreground hover:text-blue-500 hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",

                                                                item.isActive && "text-blue-500",

                                                            )}

                                                        >

                                                            {item.name}

                                                        </NavigationMenuLink>

                                                    </NavigationMenuItem>

                                                ))}

                                            </NavigationMenuList>

                                        </NavigationMenu>

                                    </div>



                                    <Button

                                        size={"lg"}

                                        className="gap-2 px-5 rounded-lg w-full sm:w-fit cursor-pointer hover:bg-primary/80"

                                    >

                                        <Phone size={16} className="shrink-0" /> Get Started

                                    </Button>

                                </div>

                            </SheetContent>

                        </Sheet>

                    </div>

                </nav>

            </div>

        </header>

    )

}



export default Navbar