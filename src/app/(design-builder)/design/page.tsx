"use client";

import dynamic from "next/dynamic";

const DesignBuilder = dynamic(() => import("../_components/design-builder"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center space-x-2 text-xs">
      <div>Loading Design Editor...</div>
    </div>
  ),
});

export default function Page() {
  return <DesignBuilder />;
}
