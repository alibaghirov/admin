/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { FoodSupplyCategories } from './components/FoodSupplyCategories.tsx';
import { B2BServices } from './components/B2BServices.tsx';
import { LogisticsDelivery } from './components/LogisticsDelivery.tsx';
import { PartnershipSteps } from './components/PartnershipSteps.tsx';
import { CallContactModal } from './components/CallContactModal.tsx';
import { Footer } from './components/Footer.tsx';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [callModalOpen, setCallModalOpen] = useState(false);

  const handleExploreCategories = () => {
    const el = document.getElementById('istiqametler');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCallModal={() => setCallModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero with Slogan & Direct Phone Lines */}
        <Hero
          onExploreCategories={handleExploreCategories}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* 2. Main B2B Food Supply Categories (Replaces granular product catalog) */}
        <FoodSupplyCategories onOpenCallModal={() => setCallModalOpen(true)} />

        {/* 3. Sectors & HoReCa Services */}
        <B2BServices onOpenCallModal={() => setCallModalOpen(true)} />

        {/* 4. Morning Delivery & Safe Logistics */}
        <LogisticsDelivery />

        {/* 5. 4-step Partnership Onboarding */}
        <PartnershipSteps onOpenCallModal={() => setCallModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Call & Direct Contact Modal */}
      <CallContactModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />

      {/* Floating Sticky Mobile Quick Call Bar */}
      <div className="fixed bottom-4 right-4 z-30 sm:hidden flex items-center gap-2">
        <a
          href="https://wa.me/994505698737?text=Salam%20MFK%20Food%20Supply.%20Restoranımız%20üçün%20məlumat%20almaq%20istəyirik."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-700 text-white rounded-full shadow-2xl border border-emerald-600 active:scale-95 transition-transform"
          aria-label="WhatsApp ilə əlaqə saxlayın"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="tel:+994505698737"
          className="flex items-center gap-2 px-4 py-3 bg-neutral-900 text-white font-bold text-xs rounded-full shadow-2xl border border-neutral-700 font-mono active:scale-95 transition-transform"
          aria-label="Birbaşa zəng et"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>050 569 87 37</span>
        </a>
      </div>
    </div>
  );
}
