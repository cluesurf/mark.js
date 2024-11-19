import {
  buildFoldLister,
  buildSiteLister,
  buildSizeLister,
} from '~/index.js'

export const ILM_AL_HURUF_MAP = {
  ا: 1,
  ب: 2,
  ج: 3,
  د: 4,
  ه: 5,
  و: 6,
  ز: 7,
  ح: 8,
  ط: 9,
  ي: 10,
  ك: 11,
  ل: 12,
  م: 13,
  ن: 14,
  س: 15,
  ع: 16,
  ف: 17,
  ص: 18,
  ق: 19,
  ر: 20,
  ش: 21,
  ت: 22,
  ث: 23,
  خ: 24,
  ذ: 25,
  ض: 26,
  ظ: 27,
  غ: 28,
}

export const SIMPLIFICATION = {
  آ: 'ا',
  أ: 'ا',
  إ: 'ا',
  ٱ: 'ا',
  ء: 'ا',
  پ: 'ب',
  چ: 'ج',
  ة: 'ه',
  ۀ: 'ه',
  ؤ: 'و',
  ژ: 'ز',
  ی: 'ي',
  ى: 'ي',
  ئ: 'ي',
  گ: 'ك',
  ک: 'ك',
}

export const listIlmAlHurufSite = buildSiteLister(
  ILM_AL_HURUF_MAP,
  SIMPLIFICATION,
)
export const listIlmAlHurufFold = buildFoldLister(listIlmAlHurufSite)
export const listIlmAlHurufSize = buildSizeLister(listIlmAlHurufSite)
