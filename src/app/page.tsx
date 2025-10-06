"use client";

import Announcement from "./components/Announcement";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Subpage } from "./components/Subpage";

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
        <Subpage />
        <Products />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
