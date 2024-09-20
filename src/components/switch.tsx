import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '../utils/cn';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer rcl-inline-flex rcl-h-5 rcl-w-9 rcl-shrink-0 rcl-cursor-pointer rcl-items-center rcl-rounded-full rcl-border-2 rcl-border-transparent rcl-shadow-sm rcl-transition-colors focus-visible:rcl-outline-none focus-visible:rcl-ring-2 focus-visible:ring-ring focus-visible:rcl-ring-offset-2 focus-visible:rcl-ring-offset-blue-500 disabled:rcl-cursor-not-allowed disabled:rcl-opacity-50 data-[state=checked]:rcl-bg-neutral-200 data-[state=unchecked]:rcl-bg-neutral-500',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'rcl-pointer-events-none rcl-block rcl-h-4 rcl-w-4 rcl-rounded-full rcl-bg-blue-500 rcl-shadow-lg rcl-ring-0 rcl-transition-transform data-[state=checked]:rcl-translate-x-4 data-[state=unchecked]:rcl-translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
