/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Truck, FileText, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExploreCategories: () => void;
  onOpenCallModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCategories,
  onOpenCallModal,
}) => {
  return (
    <section className="relative bg-white border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              <span>B2B & HoReCa Food Supply</span>
              <span aria-hidden="true">·</span>
              <span>Topdansatış Qida Tərəfdaşı</span>
            </div>

            {/* Slogan as Main Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] font-display text-balance">
              Hər çeşiddə istəyə uyğun <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2 underline-offset-6">fresh məhsullar</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              <strong className="text-neutral-900 font-semibold">MFK</strong> — restoranlar, kafelər, hotellər və korporativ müəssisələr üçün 
              birbaşa fermerlərdən və istehsalçılardan yüksək keyfiyyətli topdansatış qida tədarükü həyata keçirir.
              Məlumat almaq, menyunuza uyğun məhsul çeşidlərini və əməkdaşlıq şərtlərini müzakirə etmək üçün bizimlə birbaşa əlaqə saxlayın.
            </p>

            {/* Direct Phone / Contact Cards */}
            <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200 space-y-3">
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Məlumat və Sifariş Üçün Zəng Edin:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+994505698737"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 hover:border-emerald-600 hover:text-emerald-700 text-neutral-900 text-sm font-semibold transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="font-mono">+994 50 569 87 37</span>
                </a>
                <a
                  href="tel:+994516000141"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 hover:border-emerald-600 hover:text-emerald-700 text-neutral-900 text-sm font-semibold transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="font-mono">+994 51 600 01 41</span>
                </a>
                <a
                  href="https://wa.me/994505698737?text=Salam%20MFK%20Food%20Supply.%20Restoranımız%20üçün%20topdan%20qida%20təchizatı%20ilə%20bağlı%20məlumat%20almaq%20istəyirik."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ilə Əlaqə</span>
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCategories}
                type="button"
                className="px-6 py-3.5 text-base font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Təchizat Sahələrinə Baxın</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenCallModal}
                type="button"
                className="px-6 py-3.5 text-base font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Birbaşa Əlaqə Saxlayın</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dominant Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100 aspect-4/3 lg:aspect-square">
              <img
                src="/src/assets/images/mfk_hero_food_supply_1792746545891.jpg"
                alt="MFK Food Supply Müasir Topdansatış Mərkəzi və Fresh Məhsul Çeşidləri"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
                  Optovoy Qida Tədarükü
                </span>
                <p className="text-base font-semibold font-display">
                  Tərəvəz, Meyvə, Ət, Süd və HoReCa Ləvazimatları
                </p>
                <p className="text-xs text-neutral-300 mt-1">
                  Bakı, Abşeron və Sumqayıt üzrə hər gün səhər tezdən qapınıza çatdırılma
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column B2B Trust Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">06:00 - 10:00 Çatdırılma</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Restoran və mətbəx açılışına hazır təhvil</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">Operativ Nəqliyyat</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Səliqəli qablaşdırma və sürətli təhvil</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">100% Halal və Sertifikatlı</h4>
              <p className="text-xs text-neutral-500 mt-0.5">AQTA və gigiyenik tələblərə tam uyğun</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">Rəsmi Müqavilə və ƏDV</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Bank köçürməsi, e-qaimə faktura ilə</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
