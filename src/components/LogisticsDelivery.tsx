/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Truck, Clock, ShieldCheck, RefreshCw, MapPin, PackageCheck } from 'lucide-react';

export const LogisticsDelivery: React.FC = () => {
  return (
    <section id="ustunlukler" className="py-16 bg-neutral-900 text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual proof */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl aspect-16/9 lg:aspect-4/3">
              <img
                src="/src/assets/images/mfk_delivery_logistics_1792746549422.jpg"
                alt="MFK Food Supply Operativ Təchizat və Çatdırılma Xidməti"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay card */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-neutral-200">Gündəlik Səhər Çatdırılma Reysi:</span>
              </div>
              <span className="font-mono text-emerald-400 font-bold bg-neutral-900 px-2 py-0.5 rounded">
                06:00 – 10:00 Hazır
              </span>
            </div>
          </div>

          {/* Right Column: Key Logistics Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              <span>MFK Çatdırılma Standartı</span>
              <span aria-hidden="true">·</span>
              <span>Bakı & Abşeron Üzrə</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white text-balance">
              Mətbəxiniz Açılmamışdan Əvvəl Məhsul Qapınızda
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Restoran və korporativ qida sektorunda vaxt və keyfiyyət ən kritik amildir. 
              MFK Food Supply olaraq biz bütün sifarişləri səhər erkən saatlarda, 
              səliqəli qablaşdırmada və gigiyenik təhlükəsizlik qaydalarına tam riayət edərək birbaşa müəssisənizə çatdırırıq.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <Truck className="w-4 h-4" />
                  <span>Səhər 06:00 Reysi</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Aşpazlar işə başlamazdan əvvəl tərəvəz və ətlər çeşidlənib mətbəxinizə təhvil verilir.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <PackageCheck className="w-4 h-4" />
                  <span>Səliqəli & Təmiz Qablaşdırma</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Hər bir məhsul qrupu zədələnmədən və təravətini qoruyan təmiz taralarda gətirilir.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <RefreshCw className="w-4 h-4" />
                  <span>100% Dəyişdirmə Zəmanəti</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Şef-aşpazın standartına uyğun gəlməyən hər hansı məhsul dərhal yenisi ilə əvəzlənir.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>Geniş Coğrafi Əhatə</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Bakı mərkəzi, bütün rayonlar, Mərdəkan, Şüvəlan, Bilgəh, Novxanı və Sumqayıt.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
