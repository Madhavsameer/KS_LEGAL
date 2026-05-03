"use client";

import { useEffect, useState } from "react";
import LogoLoader from "@/components/LogoLoader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust timing

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LogoLoader />;

  return <>{children}</>;
}