function format(mask, number) {
  const s = `${number.padStart(15, "0")}`;
  let r = "";
  for (let im = 0, is = 0; im < mask.length && is < s.length; im += 1) {
    r += mask.charAt(im) === "X" ? s.charAt((is += 1)) : mask.charAt(im);
  }
  return r;
}

export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatCnpj(number) {
  return format("XX.XXX.XXX.XXXX-XX", number);
}

export function numbersOnly(str) {
  if (!str) {
    return "";
  }
  return str.replace(/[^\d]/g, "");
}
