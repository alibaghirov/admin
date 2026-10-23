/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="elaqe" className="bg-neutral-950 text-white border-t border-neutral-800 scroll-mt-20">
      {/* Contact highlight block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-black font-display tracking-tight">
              <span className="px-2.5 py-1 bg-emerald-600 text-white rounded">MFK</span>
              <span>Food Supply</span>
            </div>

            <p className="text-emerald-400 font-semibold text-base font-display">
              &ldquo;Hər çeşiddə istəyə uyğun fresh məhsullar&rdquo;
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              Restoranlar, otellər, kafelər və korporativ şirkətlər üçün peşəkar topdansatış qida tədarükü. 
              Səhər 06:00-dan etibarən operativ çatdırılma xidmətimizlə birbaşa mətbəxinizə səliqəli və təhlükəsiz təhvil.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Rəsmi müqavilə, e-qaimə faktura və ƏDV ilə köçürmə</span>
            </div>
          </div>

          {/* Direct Phone Lines */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
              B2B Əlaqə və Sifariş Nömrələri
            </h4>

            <div className="space-y-2.5">
              <a
                href="tel:+994505698737"
                className="p-3 bg-neutral-900 border border-neutral-800 hover:border-emerald-500 rounded-xl flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Satış və Təchizat Xətti</span>
                    <span className="text-sm font-bold text-white font-mono group-hover:text-emerald-400 transition-colors">
                      +994 50 569 87 37
                    </span>
                  </div>
                </div>
                <span className="text-xs text-neutral-400 font-medium">Zəng et</span>
              </a>

              <a
                href="tel:+994516000141"
                className="p-3 bg-neutral-900 border border-neutral-800 hover:border-emerald-500 rounded-xl flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Korporativ Əməkdaşlıq Xətti</span>
                    <span className="text-sm font-bold text-white font-mono group-hover:text-emerald-400 transition-colors">
                      +994 51 600 01 41
                    </span>
                  </div>
                </div>
                <span className="text-xs text-neutral-400 font-medium">Zəng et</span>
              </a>

              <a
                href="https://wa.me/994505698737?text=Salam%20MFK%20Food%20Supply.%20Sifariş%20və%20qiymət%20cədvəli%20ilə%20bağlı%20yazıram."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/60 rounded-xl flex items-center justify-center gap-2 text-emerald-300 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Birbaşa WhatsApp-da Yazın</span>
              </a>
            </div>
          </div>

          {/* Schedule & Working Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
              Qrafik & Loqistika
            </h4>

            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Çatdırılma Reysi:</span>
                  <span>06:00 – 20:00 (Hər gün)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Xidmət Ərazisi:</span>
                  <span>Bakı, Abşeron yarımadası və Sumqayıt şəhəri</span>
                </div>
              </div>

              <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 text-[11px] text-neutral-400">
                Sifarişlər hər gün axşam saat 22:00-dək qəbul edilir və növbəti səhər 06:00-da təhvil verilir.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom hairline & copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} MFK Food Supply MMC. Bütün hüquqlar qorunur.</p>
          <div className="flex items-center gap-4">
            <a href="#kataloq" className="hover:text-neutral-300 transition-colors">Məhsul Çeşidləri</a>
            <span aria-hidden="true">·</span>
            <a href="#xidmetler" className="hover:text-neutral-300 transition-colors">B2B Xidmətlər</a>
            <span aria-hidden="true">·</span>
            <a href="#terefdasliq" className="hover:text-neutral-300 transition-colors">Tərəfdaşlıq</a>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-500 font-mono">B2B Platform v1.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
