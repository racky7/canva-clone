import { cn } from "@/lib/utils";
import { cloneElement, forwardRef } from 'react'
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Spinner from '../spinner';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        'icon-sm': 'h-8 w-8 justify-center rounded-sm',
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const iconVariants = cva('flex-shrink-0', {
  variants: {
    type: {
      withChildren: '!h-4 !w-4',
      withoutChildren: 'block !h-4 !w-4',
    },
  },
  defaultVariants: {
    type: 'withChildren',
  },
})

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    )
  },
)
BaseButton.displayName = 'BaseButton'

type ButtonProps = Omit<BaseButtonProps, 'asChild'> & {
  loading?: boolean
  icon?: React.ReactElement<{ className?: string }>
  iconPosition?: 'left' | 'right'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, icon, iconPosition = 'left', children, ...props }, ref) => {
    const iconElement = icon
      ? cloneElement(icon, {
          className: cn(
            iconVariants({
              type: children ? 'withChildren' : 'withoutChildren',
            }),
            icon.props.className,
            'text-current',
          ),
        })
      : null

    return (
      <BaseButton {...props} asChild={false} data-loading={loading} ref={ref}>
        {loading ? (
          <Spinner 
            className={cn(
              iconVariants({
                type: children ? 'withChildren' : 'withoutChildren',
              }),
              'text-current',
            )}
          />
        ) : (
          iconPosition === 'left' && iconElement
        )}
        {children ? <span>{children}</span> : null}
        {iconPosition === 'right' && iconElement}
      </BaseButton>
    )
  },
)

Button.displayName = 'Button'

export { BaseButton, Button }
