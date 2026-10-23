import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeAzeriText,
  validateContactForm,
  generateWhatsAppInquiryUrl,
} from './b2b-calc.ts';

test('normalizeAzeriText correctly strips Azerbaijani diacritics', () => {
  assert.equal(normalizeAzeriText('Zirə Pomidoru'), 'zire pomidoru');
  assert.equal(normalizeAzeriText('Ağ Pendir və Şor'), 'ag pendir ve sor');
  assert.equal(normalizeAzeriText('Çiyələk & Göbələk'), 'ciyelek & gobelek');
});

test('validateContactForm catches empty fields and invalid phone numbers', () => {
  const invalid = validateContactForm({
    companyName: '',
    contactPerson: '',
    phone: '123',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.companyName);
  assert.ok(invalid.errors.contactPerson);
  assert.ok(invalid.errors.phone);

  const valid = validateContactForm({
    companyName: 'Paul Restoran',
    contactPerson: 'Cavid Əliyev',
    phone: '+994 50 123 45 67',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateWhatsAppInquiryUrl builds a valid URL targeting designated manager', () => {
  const url = generateWhatsAppInquiryUrl({
    companyName: 'Mangal Steak House',
    contactPerson: 'Rauf bəy',
    phone: '050 569 87 37',
    notes: 'Ət və tərəvəz təchizatı',
    targetPhone: '994505698737',
  });

  assert.ok(url.startsWith('https://wa.me/994505698737?text='));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Mangal Steak House'));
  assert.ok(decoded.includes('Ət və tərəvəz təchizatı'));
});
