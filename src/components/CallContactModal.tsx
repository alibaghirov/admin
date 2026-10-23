/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Phone, MessageCircle, Building, User, CheckCircle2 } from 'lucide-react';
import { validateContactForm, generateWhatsAppInquiryUrl } from '../utils/b2b-calc.ts';

interface CallContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallContactModal: React.FC<CallContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [targetPhone, setTargetPhone] = useState<'994505698737' | '994516000141'>('994505698737');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ companyName?: string; contactPerson?: string; phone?: string }>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = validateContactForm({ companyName, contactPerson, phone });
    if (!val.isValid) {
      setErrors(val.errors);
      return;
    }
    setErrors({});

    const url = generateWhatsAppInquiryUrl({
      companyName,
      contactPerson,
      phone,
      notes,
      targetPhone,
    });

    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 z-10">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              MFK B2B Əlaqə & Məlumat Xətti
            </h3>
            <p className="text-xs text-neutral-500">
              Restoran və şirkətiniz üçün zəng edin və ya WhatsApp vasitəsilə yazın
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Direct Phone Numbers Callout */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono block">
              Birbaşa Əlaqə Nömrələrimiz:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+994505698737"
                className="p-3.5 bg-neutral-50 hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 rounded-xl flex items-center gap-3 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-500 block">Satış & Təchizat</span>
                  <span className="text-xs font-bold text-neutral-900 font-mono group-hover:text-emerald-700">
                    +994 50 569 87 37
                  </span>
                </div>
              </a>

              <a
                href="tel:+994516000141"
                className="p-3.5 bg-neutral-50 hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 rounded-xl flex items-center gap-3 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-500 block">Korporativ Əməkdaşlıq</span>
                  <span className="text-xs font-bold text-neutral-900 font-mono group-hover:text-emerald-700">
                    +994 51 600 01 41
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-neutral-200" />
            <span className="flex-shrink mx-4 text-xs text-neutral-400 font-medium">və ya menecerimizə sorğu yazın</span>
            <div className="flex-grow border-t border-neutral-200" />
          </div>

          {submitted ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 font-display">
                Sorğunuz WhatsApp-a Yönləndirildi!
              </h4>
              <p className="text-xs text-neutral-600">
                Menecerimiz sizinlə ən qısa zamanda əlaqə saxlayacaq.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200"
              >
                Pəncərəni Bağla
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-700 font-semibold mb-1 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Restoran / Şirkət Adı *</span>
                </label>
                <input
                  type="text"
                  placeholder="Məs: Şəki Restoranı və ya Xəzər MMC"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
                {errors.companyName && (
                  <p className="text-red-600 text-[11px] mt-0.5">{errors.companyName}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Məsul Şəxs *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ad, Soyad"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                  {errors.contactPerson && (
                    <p className="text-red-600 text-[11px] mt-0.5">{errors.contactPerson}</p>
                  )}
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Əlaqə Nömrəsi *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="050 569 87 37"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 font-mono"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-[11px] mt-0.5">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-1">
                  Maraqlandığınız Məhsul Qrupu və ya Şərh:
                </label>
                <textarea
                  rows={2}
                  placeholder="Məs: Tərəvəz və halal ət təchizatı haqqında danışmaq istəyirik..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ilə Əlaqə Saxlayın</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
