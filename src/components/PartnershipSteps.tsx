/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface PartnershipStepsProps {
  onOpenCallModal: () => void;
}

export const PartnershipSteps: React.FC<PartnershipStepsProps> = ({ onOpenCallModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Bizimlə Əlaqə Saxlayın',
      text: '+994 50 569 87 37 və ya +994 51 600 01 41 nömrələrinə zəng edərək və ya WhatsApp-da yazaraq müəssisənizin ehtiyaclarını bildirin.',
    },
    {
      num: '02',
      title: 'Menyu və Tələbatın Təhlili',
      text: 'Müəssisənizin həftəlik/aylıq qida tələbatı və iş qrafiki nəzərə alınaraq xüsusi B2B kommersiya şərtləri tərtib olunur.',
    },
    {
      num: '03',
      title: 'Sınaq Partiyası & Keyfiyyət Yoxlanışı',
      text: 'Baş aşpazınız və ya meneceriniz məhsulların təravətini, kalibrini və səliqəli təmiz qablaşdırmasını əyani yoxlayır.',
    },
    {
      num: '04',
      title: 'Daimi Tərəfdaşlıq & Çatdırılma',
      text: 'Rəsmi müqavilə imzalanır və hər gün razılaşdırılmış səhər saatında sifarişiniz birbaşa anbarınıza və ya mətbəxinizə təhvil verilir.',
    },
  ];

  return (
    <section id="terefdasliq" className="py-16 bg-neutral-50 border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            <span>Addım-Addım Tərəfdaşlıq</span>
            <span aria-hidden="true">·</span>
            <span>Sadə & Şəffaf Proses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-display tracking-tight text-balance">
            Bizimlə Əməkdaşlığa Necə Başlamaq Olar?
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Biz bürokratik gecikmələri aradan qaldırırıq. Bir telefon zəngi və ya WhatsApp söhbəti ilə 
            bütün detalları danışıb 24 saat ərzində təchizata başlaya bilərik.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-emerald-600 font-mono">
                  {st.num}.
                </span>
                <h3 className="text-base font-bold text-neutral-900 font-display mt-3 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {st.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1 text-[11px] text-neutral-400 font-medium">
                <span>MFK Zəmanəti</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action card */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-emerald-950 font-display">
              Məlumat Almaq və Danışmaq Üçün Bizə Zəng Edin
            </h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              Menecerlərimiz restoranınıza gələrək nümunələrlə tanış edə və detalları danışa bilər.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+994505698737"
              className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>050 569 87 37</span>
            </a>
            <a
              href="tel:+994516000141"
              className="px-4 py-2.5 bg-white text-emerald-900 border border-emerald-300 hover:bg-emerald-100 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>051 600 01 41</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
