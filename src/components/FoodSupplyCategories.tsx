// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React from 'react';

// import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

// interface FoodSupplyCategoriesProps {
//   onOpenCallModal: () => void;
// }

// export const FoodSupplyCategories: React.FC<FoodSupplyCategoriesProps> = ({
//   onOpenCallModal,
// }) => {
//   const categories = [
//     {
//       id: 'veg',
//       title: 'Təzə Tərəvəz və Göyərtilər',
//       subtitle: 'Yerli istixana və təsərrüfatlardan hər gün səhər təzə',
//       items: 'Zirə pomidoru, Şəmkir xiyarı, rəngli bibərlər, Aysberq kahı, rukkola, kök, kartof, təzə göyərti dəstələri',
//       image: '/src/assets/images/mfk_fresh_vegetables_1792746547860.jpg',
//       target: 'Restoranlar, Salatlar, Milli Mətbəx',
//     },
//     {
//       id: 'meat',
//       title: 'Halal Ət və Quş Əti Çeşidləri',
//       subtitle: 'Restoran tələbinə uyğun xüsusi kəsim və gigiyenik tədarük',
//       items: 'Yerli dana can əti (tenderloin), antrikot, ribeye kəsim, quzu əti, halal təzə toyuq filesi',
//       image: '/src/assets/images/mfk_meat_poultry_1792746548225.jpg',
//       target: 'Steak House, Kababxanalar, Restoranlar',
//     },
//     {
//       id: 'dairy',
//       title: 'Süd, Pendir və Kərə Yağları',
//       subtitle: 'Peşəkar kulinariya və qənnadı xammalı',
//       items: 'Pitseriya üçün mozzarella blokları, 33% aşpazlıq qaymağı, 82.5% kərə yağı, Qouda, yerli pendirlər',
//       image: '/src/assets/images/mfk_dairy_wholesale_1792746548799.jpg',
//       target: 'Pitseriya, İtalyan Mətbəxi, Şirniyyat',
//     },
//     {
//       id: 'fruits',
//       title: 'Təbii Mövsümi və Ekzotik Meyvələr',
//       subtitle: 'Banketlər, barlar və tədbirlər üçün seçmə meyvə çeşidləri',
//       items: 'Quba alması, portağal, limon, naringi, mövsümi çiyələk, üzüm, banan, süfrə meyvə boşqabları',
//       image: '/src/assets/images/mfk_fresh_vegetables_1792746547860.jpg',
//       target: 'Hotellər, Banketlər, Fresh Barlar',
//     },
//     {
//       id: 'grocery',
//       title: 'Quru Ərzaq, Düyü və Bitki Yağları',
//       subtitle: 'Böyük həcmli tonnajlı və kisə qablaşdırma',
//       items: 'Basmati düyü çeşidləri, ekstra virgin zeytun yağı (5L), günəbaxan yağı, un, şəkər, dənli bitkilər',
//       image: '/src/assets/images/mfk_delivery_logistics_1792746549422.jpg',
//       target: 'Katering, İaşə Obyektləri, Restoranlar',
//     },
//     {
//       id: 'horeca',
//       title: 'HoReCa Souslar və Peşəkar Ləvazimatlar',
//       subtitle: 'Standartlaşdırılmış souslar və mətbəx köməkçiləri',
//       items: 'Ketçup və mayonez (5-10 kq vedrə), soya sousu, bar sousları, peşəkar streç və qida qabları',
//       image: '/src/assets/images/mfk_hero_food_supply_1792746545891.jpg',
//       target: 'Fast-Food Şəbəkələri, Burger Evləri',
//     },
//   ];

//   return (
//     <section id="istiqametler" className="py-16 bg-neutral-50 border-b border-neutral-200 scroll-mt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
//         {/* Section Header */}
//         <div className="max-w-3xl mb-12">
//           <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
//             <span>MFK Topdansatış Tədarük Sahələri</span>
//             <span aria-hidden="true">·</span>
//             <span>B2B Food Supply</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-display tracking-tight text-balance">
//             Təchiz Etdiyimiz Əsas Qida İstiqamətləri
//           </h2>
//           <p className="mt-3 text-neutral-600 text-base leading-relaxed">
//             Restoran və şirkətlər üçün tələbata uyğun istənilən çeşiddə fresh məhsulların operativ tədarükü. 
//             Müəssisənizin menyu tələblərini bildirmək və ətraflı məlumat almaq üçün birbaşa menecerlərimizlə əlaqə saxlayın.
//           </p>
//         </div>

//         {/* Categories Grid: 3-column desktop */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {categories.map((cat) => (
//             <div
//               key={cat.id}
//               className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
//             >
//               <div>
//                 {/* Image */}
//                 <div className="relative aspect-16/10 bg-neutral-100 overflow-hidden">
//                   <img
//                     src={cat.image}
//                     alt={cat.title}
//                     className="w-full h-full object-cover object-center"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-4">
//                     <span className="text-[11px] font-medium text-emerald-300 bg-neutral-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
//                       {cat.target}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 space-y-2">
//                   <h3 className="text-lg font-bold text-neutral-900 font-display">
//                     {cat.title}
//                   </h3>
//                   <p className="text-xs font-medium text-emerald-700">
//                     {cat.subtitle}
//                   </p>
//                   <p className="text-xs text-neutral-600 leading-relaxed pt-1">
//                     <strong className="text-neutral-800 font-medium">Əsas məhsullar: </strong>
//                     {cat.items}
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Action */}
//               <div className="p-5 pt-0">
//                 <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
//                   <a
//                     href="tel:+994505698737"
//                     className="text-xs font-semibold text-neutral-900 hover:text-emerald-700 flex items-center gap-1.5 transition-colors font-mono"
//                   >
//                     <Phone className="w-3.5 h-3.5 text-emerald-600" />
//                     <span>050 569 87 37</span>
//                   </a>

//                   <button
//                     type="button"
//                     onClick={onOpenCallModal}
//                     className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
//                   >
//                     <span>Məlumat Alın</span>
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Big Call-in Banner */}
//         <div className="mt-12 p-8 rounded-2xl bg-neutral-900 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
//           <div className="space-y-1">
//             <h3 className="text-xl sm:text-2xl font-bold font-display">
//               Xüsusi Menyu Tələbatınız və ya Suallarınız Var?
//             </h3>
//             <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
//               Biz hər bir restoran və şirkətin ehtiyacına fərdi yanaşırıq. 
//               Məhsul çeşidləri, həcmlər və çatdırılma qrafikini müzakirə etmək üçün zəng edin, dərhal ətraflı məlumat verək.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-3 shrink-0">
//             <a
//               href="tel:+994505698737"
//               className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors font-mono shadow-sm"
//             >
//               <Phone className="w-4 h-4" />
//               <span>+994 50 569 87 37</span>
//             </a>
//             <a
//               href="tel:+994516000141"
//               className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors font-mono border border-neutral-700"
//             >
//               <Phone className="w-4 h-4" />
//               <span>+994 51 600 01 41</span>
//             </a>
//             <a
//               href="https://wa.me/994505698737?text=Salam%20MFK%20Food%20Supply.%20Restoranımız%20üçün%20topdan%20qida%20təchizatı%20ilə%20bağlı%20məlumat%20almaq%20istəyirik."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-3 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors"
//             >
//               <MessageCircle className="w-4 h-4" />
//               <span>WhatsApp ilə Əlaqə</span>
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface FoodSupplyCategoriesProps {
  onOpenCallModal: () => void;
}

export const FoodSupplyCategories: React.FC<FoodSupplyCategoriesProps> = ({
  onOpenCallModal,
}) => {
  const categories = [
    {
      id: 'veg',
      title: 'Təzə Tərəvəz və Göyərtilər',
      subtitle: 'Yerli istixana və təsərrüfatlardan hər gün səhər təzə',
      items: 'Zirə pomidoru, Şəmkir xiyarı, rəngli bibərlər, Aysberq kahı, rukkola, kök, kartof, təzə göyərti dəstələri',
      image: '/images/mfk_fresh_vegetables_1792746547860.jpg',
      target: 'Restoranlar, Salatlar, Milli Mətbəx',
    },
    {
      id: 'meat',
      title: 'Halal Ət və Quş Əti Çeşidləri',
      subtitle: 'Restoran tələbinə uyğun xüsusi kəsim və gigiyenik tədarük',
      items: 'Yerli dana can əti (tenderloin), antrikot, ribeye kəsim, quzu əti, halal təzə toyuq filesi',
      image: '/images/mfk_meat_poultry_1792746548225.jpg',
      target: 'Steak House, Kababxanalar, Restoranlar',
    },
    {
      id: 'dairy',
      title: 'Süd, Pendir və Kərə Yağları',
      subtitle: 'Peşəkar kulinariya və qənnadı xammalı',
      items: 'Pitseriya üçün mozzarella blokları, 33% aşpazlıq qaymağı, 82.5% kərə yağı, Qouda, yerli pendirlər',
      image: '/images/mfk_dairy_wholesale_1792746548799.jpg',
      target: 'Pitseriya, İtalyan Mətbəxi, Şirniyyat',
    },
    {
      id: 'fruits',
      title: 'Təbii Mövsümi və Ekzotik Meyvələr',
      subtitle: 'Banketlər, barlar və tədbirlər üçün seçmə meyvə çeşidləri',
      items: 'Quba alması, portağal, limon, naringi, mövsümi çiyələk, üzüm, banan, süfrə meyvə boşqabları',
      image: '/images/mfk_fresh_fruits_1792746547860.jpg',
      target: 'Hotellər, Banketlər, Fresh Barlar',
    },
    {
      id: 'grocery',
      title: 'Quru Ərzaq, Düyü və Bitki Yağları',
      subtitle: 'Böyük həcmli tonnajlı və kisə qablaşdırma',
      items: 'Basmati düyü çeşidləri, ekstra virgin zeytun yağı (5L), günəbaxan yağı, un, şəkər, dənli bitkilər',
      image: '/images/mfk_delivery_logistics_1792746549422.jpg',
      target: 'Katering, İaşə Obyektləri, Restoranlar',
    },
    {
      id: 'horeca',
      title: 'HoReCa Souslar və Peşəkar Ləvazimatlar',
      subtitle: 'Standartlaşdırılmış souslar və mətbəx köməkçiləri',
      items: 'Ketçup və mayonez (5-10 kq vedrə), soya sousu, bar sousları, peşəkar streç və qida qabları',
      image: '/images/mfk_hero_food_supply_1792746545891.jpg',
      target: 'Fast-Food Şəbəkələri, Burger Evləri',
    },
  ];

  return (
    <section id="istiqametler" className="py-16 bg-neutral-50 border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            <span>MFK Topdansatış Tədarük Sahələri</span>
            <span aria-hidden="true">·</span>
            <span>B2B Food Supply</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-display tracking-tight text-balance">
            Təchiz Etdiyimiz Əsas Qida İstiqamətləri
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Restoran və şirkətlər üçün tələbata uyğun istənilən çeşiddə fresh məhsulların operativ tədarükü. 
            Müəssisənizin menyu tələblərini bildirmək və ətraflı məlumat almaq üçün birbaşa menecerlərimizlə əlaqə saxlayın.
          </p>
        </div>

        {/* Categories Grid: 3-column desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 bg-neutral-100 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[11px] font-medium text-emerald-300 bg-neutral-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {cat.target}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-neutral-900 font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-700">
                    {cat.subtitle}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                    <strong className="text-neutral-800 font-medium">Əsas məhsullar: </strong>
                    {cat.items}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0">
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <a
                    href="tel:+994505698737"
                    className="text-xs font-semibold text-neutral-900 hover:text-emerald-700 flex items-center gap-1.5 transition-colors font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>050 569 87 37</span>
                  </a>

                  <button
                    type="button"
                    onClick={onOpenCallModal}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Məlumat Alın</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Call-in Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-neutral-900 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Xüsusi Menyu Tələbatınız və ya Suallarınız Var?
            </h3>
            <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Biz hər bir restoran və şirkətin ehtiyacına fərdi yanaşırıq. 
              Məhsul çeşidləri, həcmlər və çatdırılma qrafikini müzakirə etmək üçün zəng edin, dərhal ətraflı məlumat verək.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+994505698737"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors font-mono shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+994 50 569 87 37</span>
            </a>
            <a
              href="tel:+994516000141"
              className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors font-mono border border-neutral-700"
            >
              <Phone className="w-4 h-4" />
              <span>+994 51 600 01 41</span>
            </a>
            <a
              href="https://wa.me/994505698737?text=Salam%20MFK%20Food%20Supply.%20Restoranımız%20üçün%20topdan%20qida%20təchizatı%20ilə%20bağlı%20məlumat%20almaq%20istəyirik."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ilə Əlaqə</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};