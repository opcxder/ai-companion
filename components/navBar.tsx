"use client";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSideBar } from "@/components/mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-modal";
const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});


interface navBarProps  {
    isPro : boolean,
}

export const Navbar = ({isPro} : navBarProps) => {
    const proModel = useProModal();
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSideBar isPro = {isPro} />
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary",
                        font.className
                    )}>
                        companion.ai
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                {!isPro && (
                <Button onClick={proModel.onOpen} variant="premium" size="sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
                </Button>
                )}
                <ModeToggle />
                <UserButton  afterSignOutUrl="/"/>

            </div>
        </div>
    )
}