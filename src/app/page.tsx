"use client";

import Announcement from "./components/Announcement";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <div className="relative">
      {/* Top Banner */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <Banner />
        <Services />
        <Products />
      </main>
    </div>
  );
}
