"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "rgb(23 23 23)",   // tailwind neutral-900
          "--normal-text": "rgb(229 229 229)", // tailwind neutral-200
          "--normal-border": "rgb(64 64 64)",  // tailwind neutral-700
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
