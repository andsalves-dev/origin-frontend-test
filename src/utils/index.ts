export function formatMoney(
  value: number | string,
  handleDecimals = true
): string {
  const intValStr = String(value).split('.')[0];
  let newStr = '';

  for (let i = 0; i < intValStr.length; i++) {
    const index = intValStr.length - i - 1;

    if (i && i % 3 === 0) {
      newStr = ',' + newStr;
    }

    newStr = intValStr[index] + newStr;
  }

  const decimals = handleDecimals
    ? Number(value).toFixed(2).split('.')[1]
    : String(value).split('.')[1];

  if (decimals !== undefined) {
    newStr += `.${decimals}`;
  }

  return newStr;
}
