/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactFormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  notes?: string;
  targetPhone?: string; // e.g. "994505698737" or "994516000141"
}

/**
 * Normalizes Azerbaijani text removing diacritics
 */
export function normalizeAzeriText(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/ə/g, 'e')
    .replace(/ı/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ğ/g, 'g');
}

/**
 * Validates B2B contact / partnership inquiry form
 */
export function validateContactForm(data: {
  companyName: string;
  contactPerson: string;
  phone: string;
}): { isValid: boolean; errors: { companyName?: string; contactPerson?: string; phone?: string } } {
  const errors: { companyName?: string; contactPerson?: string; phone?: string } = {};

  if (!data.companyName.trim()) {
    errors.companyName = 'Şirkət və ya restoran adını qeyd edin';
  }

  if (!data.contactPerson.trim()) {
    errors.contactPerson = 'Məsul şəxsin adını qeyd edin';
  }

  const cleanPhone = data.phone.replace(/[\s\-\(\)\+]/g, '');
  if (!cleanPhone || cleanPhone.length < 9) {
    errors.phone = 'Düzgün əlaqə nömrəsi qeyd edin (məs: 050 569 87 37)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates direct WhatsApp inquiry URL to MFK management
 */
export function generateWhatsAppInquiryUrl(params: ContactFormData): string {
  const phone = params.targetPhone || '994505698737';

  let message = `*MFK Food Supply — B2B Əməkdaşlıq & Məlumat Sorğusu*\n\n`;
  message += `🏢 *Müəssisə / Restoran:* ${params.companyName || 'Məlumat verilməyib'}\n`;
  message += `👤 *Məsul şəxs:* ${params.contactPerson || 'Məlumat verilməyib'}\n`;
  message += `📞 *Əlaqə nömrəsi:* ${params.phone || 'Məlumat verilməyib'}\n`;

  if (params.notes) {
    message += `💬 *Maraqlandığı sahə / Qeyd:* ${params.notes}\n`;
  }

  message += `\n_Restoranımız / müəssisəmiz üçün topdan qida təchizatı şərtləri ilə bağlı danışmaq və məlumat almaq istəyirik._\n`;
  message += `_Bu müraciət mfk.az saytından göndərilib._`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
