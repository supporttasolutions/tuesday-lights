"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Gallery from "@/components/Gallery";

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";

  return <Gallery showHeading initialFilter={initialFilter} />;
}

export default function GalleryPage() {
  return (
    <div className="pt-20 md:pt-24">
      <Suspense fallback={<div className="py-24 text-center text-charcoal/40">Loading gallery...</div>}>
        <GalleryContent />
      </Suspense>
    </div>
  );
}
