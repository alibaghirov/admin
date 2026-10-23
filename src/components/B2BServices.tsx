/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Utensils, Hotel, Building2, Pizza, ShoppingBag, Coffee, Phone } from 'lucide-react';

interface B2BServicesProps {
  onOpenCallModal: () => void;
}

export const B2BServices: React.FC<B2BServicesProps> = ({ onOpenCallModal }) => {
  const sectors = [
    {
      icon: Utensils,
      title: 'Restoranlar və Kafelər',
      description: 'Gündəlik təzə ət kəsimi, seçmə Zirə tərəvəzləri, aşpazlıq qaymaqları və souslar. Şef-aşpazın tələb etdiyi standart kalibrləmə.',
      highlight: 'Səhər 06:00 - 08:00 çatdırılma',
    },
    {
      icon: Hotel,
      title: 'Otellər və Qonaqlama',
      description: 'Açıq bufet səhər yeməkləri, premium pendir çeşidləri, təbii meyvə səbətləri və banket zalları üçün fasiləsiz böyük həcmli tədarük.',
      highlight: 'Sertifikatlı & Rəsmi e-qaimə',
    },
    {
      icon: Pizza,
      title: 'Pitseriya və Fast-Food',
      description: 'Yüksək elastiklikli mozzarella blokları, halal toyuq filesi, xüsusi un çeşidləri və 5-10 kq vedrə souslar.',
      highlight: 'Standartlaşdırılmış keyfiyyət',
    },
    {
      icon: Building2,
      title: 'Şirkətlər və Korporativ Ofislər',
      description: 'Ofis işçiləri üçün gündəlik təzə mövsüm meyvələri, qəhvə/çay güşələri üçün süd, qənd və sağlam qəlyanaltı təminatı.',
      highlight: 'Aylıq müqavilə & Köçürmə',
    },
    {
      icon: Coffee,
      title: 'Katering və Ziyafət Xidmətləri',
      description: 'Böyük tədbirlər və sənaye kateringləri üçün tonnajlı quru ərzaq, un, duru yağlar, düyü və dondurulmuş/soyudulmuş xammal.',
      highlight: 'Topdansatış həcm endirimi',
    },
    {
      icon: ShoppingBag,
      title: 'Market və Qida Satış Nöqtələri',
      description: 'Fermer qiymətinə birbaşa optovoy tədarük. Bakı və Abşeron qəsəbələrinə fasiləsiz qrafik üzrə daşınma.',
      highlight: 'Operativ loqistika',
    },
  ];

  return (
    <section id="xidmetler" className="py-16 bg-white border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            <span>B2B Tərəfdaşlıq Modelləri</span>
            <span aria-hidden="true">·</span>
            <span>HoReCa & Korporativ Sektor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-display tracking-tight text-balance">
            Kimlərlə İş Birliyi Qura Bilərik?
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Biz hər bir biznes sahəsinin iş ritmini, mətbəx tələblərini və qrafikini anlayırıq. 
            MFK ilə siz tədarükçü axtarışına vaxt itirmir, stabil və keyfiyyətli məhsulu birbaşa alırsınız.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-emerald-700 mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-mono font-semibold text-neutral-400">
                    0{idx + 1}. BÖLMƏ
                  </span>

                  <h3 className="text-lg font-bold text-neutral-900 font-display mt-1 mb-2">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-800">
                    {sec.highlight}
                  </span>
                  <button
                    type="button"
                    onClick={onOpenCallModal}
                    className="text-neutral-700 hover:text-emerald-700 font-semibold flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Məlumat al</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
