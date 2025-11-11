"use client";

import * as React from "react";
import { cn } from "./utils.js";

// Simplified drawer implementation without vaul dependency
interface DrawerContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DrawerContext = React.createContext<DrawerContextValue>({
  open: false,
  onOpenChange: () => {},
});

interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Drawer({
  open = false,
  onOpenChange,
  children,
}: DrawerProps) {
  return (
    <DrawerContext.Provider
      value={{ open, onOpenChange: onOpenChange || (() => {}) }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

function DrawerTrigger({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = React.useContext(DrawerContext);
  return (
    <button
      className={className}
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  );
}

function DrawerPortal({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

function DrawerClose({
  className,
  children,
  asChild,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
}) {
  const { onOpenChange } = React.useContext(DrawerContext);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;

    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        onOpenChange(false);
        if (child.props.onClick) {
          child.props.onClick(e);
        }
      },
    });
  }

  return (
    <button
      className={className}
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </button>
  );
}

function DrawerOverlay({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = React.useContext(DrawerContext);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/50 transition-opacity",
        className,
      )}
      {...props}
    />
  );
}

interface DrawerContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function DrawerContent({
  className,
  children,
  ...props
}: DrawerContentProps) {
  const { open, onOpenChange } =
    React.useContext(DrawerContext);

  if (!open) return null;

  return (
    <DrawerPortal>
      <DrawerOverlay onClick={() => onOpenChange(false)} />
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-background",
          "max-h-[80vh] rounded-t-2xl border-t",
          "flex flex-col overflow-hidden",
          "animate-in slide-in-from-bottom duration-300",
          className,
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-1.5 w-12 shrink-0 rounded-full bg-gray-300" />
        {children}
      </div>
    </DrawerPortal>
  );
}

function DrawerHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function DrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-auto flex flex-col gap-2 p-4",
        className,
      )}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-foreground", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};