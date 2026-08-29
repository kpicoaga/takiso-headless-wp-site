import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'icon' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", asChild, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50"
    
    const variants: Record<string, string> = {
      default: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
      outline: "border-2 border-gray-300 bg-white text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent",
    }

    const sizes: Record<string, string> = {
      default: "h-10 px-6 py-2 rounded-full text-sm",
      sm: "h-9 rounded-full px-4 text-sm",
      lg: "h-12 rounded-full px-8 text-lg",
      icon: "h-10 w-10",
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (asChild) {
      return <span className={classes} {...(props as React.HTMLAttributes<HTMLSpanElement>)} />
    }

    return <button className={classes} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button }