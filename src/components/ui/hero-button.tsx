import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const heroButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-primary text-primary-foreground shadow-ai",
          "hover:shadow-lg hover:shadow-primary/30 hover:scale-105",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-glow/20 before:to-transparent before:opacity-0 before:transition-opacity",
          "hover:before:opacity-100"
        ],
        secondary: [
          "bg-gradient-secondary text-secondary-foreground shadow-health", 
          "hover:shadow-lg hover:shadow-secondary/30 hover:scale-105",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-secondary-glow/20 before:to-transparent before:opacity-0 before:transition-opacity",
          "hover:before:opacity-100"
        ],
        accent: [
          "bg-gradient-accent text-accent-foreground shadow-accent",
          "hover:shadow-lg hover:shadow-accent/30 hover:scale-105", 
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent-glow/20 before:to-transparent before:opacity-0 before:transition-opacity",
          "hover:before:opacity-100"
        ],
        glass: [
          "glass text-foreground shadow-glass",
          "hover:shadow-xl hover:scale-105",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity",
          "hover:before:opacity-100"
        ]
      },
      size: {
        sm: "h-12 px-6",
        md: "h-14 px-8", 
        lg: "h-16 px-12",
        xl: "h-20 px-16 text-lg",
        hero: "h-24 px-20 text-xl"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
)

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-3">
          {icon}
          {children}
        </span>
      </Comp>
    )
  }
)
HeroButton.displayName = "HeroButton"

export { HeroButton, heroButtonVariants }