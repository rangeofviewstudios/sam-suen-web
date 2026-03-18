"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  activeTab: string
  onTabChange: (name: string) => void
  className?: string
}

export function NavBar({ items, activeTab, onTabChange, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-[100] pt-6", className)}>
      <div className="flex items-center gap-1 bg-[rgba(10,10,10,0.55)] border border-[rgba(255,255,255,0.07)] backdrop-blur-2xl py-1 px-1 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => onTabChange(item.name)}
              className={cn(
                "relative cursor-pointer text-[0.73rem] font-semibold px-5 py-2 rounded-full transition-colors duration-300 whitespace-nowrap select-none",
                "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
                isActive && "text-[var(--color-text)]",
              )}
            >
              {/* Desktop: text label */}
              <span className="hidden md:inline">{item.name}</span>

              {/* Mobile: icon only */}
              <span className="md:hidden">
                <Icon size={17} strokeWidth={2.5} />
              </span>

              {/* Sliding pill + tubelight */}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 340, damping: 32 }}
                >
                  {/* Tubelight glow bar */}
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-t-full"
                    style={{ background: "var(--color-accent)" }}
                  >
                    <div
                      className="absolute w-14 h-6 rounded-full blur-lg -top-2 -left-3"
                      style={{ background: "var(--color-accent-glow)" }}
                    />
                    <div
                      className="absolute w-8 h-5 rounded-full blur-md -top-1 left-0"
                      style={{ background: "var(--color-accent-glow)" }}
                    />
                    <div
                      className="absolute w-4 h-3 rounded-full blur-sm top-0 left-2"
                      style={{ background: "rgba(201,52,46,0.4)" }}
                    />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
