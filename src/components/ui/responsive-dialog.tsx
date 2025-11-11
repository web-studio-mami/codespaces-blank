"use client";

import * as React from "react";
import { useIsMobile } from "./use-mobile.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog.js";

interface ResponsiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

interface ResponsiveDialogContentProps {
  className?: string;
  children: React.ReactNode;
}

interface ResponsiveDialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveDialogContext = React.createContext<{
  isMobile: boolean;
}>({ isMobile: false });

export function ResponsiveDialog({
  open,
  onOpenChange,
  children,
}: ResponsiveDialogProps) {
  const isMobile = useIsMobile();

  return (
    <ResponsiveDialogContext.Provider value={{ isMobile }}>
      <Dialog open={open} onOpenChange={onOpenChange}>
        {children}
      </Dialog>
    </ResponsiveDialogContext.Provider>
  );
}

export function ResponsiveDialogContent({
  className = "",
  children,
}: ResponsiveDialogContentProps) {
  const { isMobile } = React.useContext(
    ResponsiveDialogContext,
  );

  // На мобильных устройствах диалог прикрепляется к низу экрана
  const mobileClasses = isMobile
    ? "fixed bottom-0 top-auto left-0 right-0 translate-x-0 translate-y-0 rounded-t-2xl rounded-b-none border-t border-x-0 border-b-0 max-h-[85vh] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
    : "";

  return (
    <DialogContent className={`${mobileClasses} ${className}`}>
      {isMobile && (
        <div className="mx-auto mt-2 mb-4 h-1.5 w-12 rounded-full bg-gray-300" />
      )}
      {children}
    </DialogContent>
  );
}

export function ResponsiveDialogHeader({
  children,
  className = "",
}: ResponsiveDialogHeaderProps) {
  const { isMobile } = React.useContext(
    ResponsiveDialogContext,
  );

  return (
    <DialogHeader
      className={`${isMobile ? "px-4" : ""} ${className}`}
    >
      {children}
    </DialogHeader>
  );
}

export function ResponsiveDialogTitle({
  children,
  className = "",
}: ResponsiveDialogTitleProps) {
  return (
    <DialogTitle className={className}>{children}</DialogTitle>
  );
}

export function ResponsiveDialogDescription({
  children,
  className = "",
}: ResponsiveDialogDescriptionProps) {
  return (
    <DialogDescription className={className}>
      {children}
    </DialogDescription>
  );
}

export function ResponsiveDialogClose({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}