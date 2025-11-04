"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../studio/sanity.config";

export default function AdminStudioPage() {
  return (
    <div className="min-h-screen bg-white">
      <NextStudio config={config} />
    </div>
  );
}