export default {
  IS_MOBILE_DEVICE: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,
  IS_MOBILE_NUM: /^09[\d]{9}$/,
  PER_NUM: /[٠١٢٣٤٥٦٧٨٩]/g,
  AR_NUM: /[۰۱۲۳۴۵۶۷۸۹]/g,
  EN_NUM: /[0-9]/g,
  ONLY_NUM: /^[0-9]$/,
  STR_AND_CURLY_BRACES: /{([^}]+)}/g,
  STR_BETWEEN_CURLY_BRACES: /[^{]+(?=\})/g,
};
