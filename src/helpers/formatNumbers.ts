type FormatStyle = "currency" | "decimal" | "percent";

export const formatToColombianPesos = (
  amount: number,
  style: FormatStyle = "currency"
): string => {
  return new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style,
  }).format(amount);
};
