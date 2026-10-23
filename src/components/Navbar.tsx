/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCallModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      {/* Top quick contact strip */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-400">MFK Food Supply</span>
            <span aria-hidden="true">·</span>
            <span>Restoran və Şirkətlər üçün Topdansatış</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+994505698737"
              className="hover:text-white transition-colors flex items-center gap-1 font-mono"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+994 50 569 87 37</span>
            </a>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <a
              href="tel:+994516000141"
              className="hidden sm:flex hover:text-white transition-colors items-center gap-1 font-mono"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+994 51 600 01 41</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-neutral-900 whitespace-nowrap shrink-0"
        >
          <span className="px-2 py-0.5 bg-emerald-600 text-white rounded font-display tracking-wider">MFK</span>
          <span className="font-display font-semibold text-neutral-900">Food Supply</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
          <a
            href="#istiqametler"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
          >
            Təchizat İstiqamətləri
          </a>
          <a
            href="#xidmetler"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
          >
            B2B Xidmətlər
          </a>
          <a
            href="#ustunlukler"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
          >
            Loqistika Standartı
          </a>
          <a
            href="#terefdasliq"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
          >
            İş Birliyi
          </a>
          <a
            href="#elaqe"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
          >
            Əlaqə
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCallModal}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-neutral-900 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Məlumat Alın / Zəng Edin</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+994505698737"
            className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg font-mono"
          >
            <Phone className="w-3 h-3" />
            <span>Zəng et</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
            aria-label="Menyunu aç/bağla"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-3">
          <a
            href="#istiqametler"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 py-1.5"
          >
            Təchizat İstiqamətləri
          </a>
          <a
            href="#xidmetler"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 py-1.5"
          >
            B2B Xidmətlər
          </a>
          <a
            href="#ustunlukler"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 py-1.5"
          >
            Loqistika Standartı
          </a>
          <a
            href="#terefdasliq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 py-1.5"
          >
            İş Birliyi
          </a>
          <a
            href="#elaqe"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 py-1.5"
          >
            Əlaqə
          </a>
          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href="tel:+994505698737"
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-700 rounded-lg flex items-center justify-center gap-2 font-mono"
            >
              <Phone className="w-4 h-4" />
              <span>Zəng: +994 50 569 87 37</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
