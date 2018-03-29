

export function getStripeDisplayValue(val: number): string {
  return "$" + (val / 100).toFixed(2).toString();
}
