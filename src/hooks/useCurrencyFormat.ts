import { useMemo } from 'react';

export default function useCurrencyFormat(value: number, currency: string) {
  return useMemo(() => {
    const intl = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    });

    return intl.format(value);
  }, [currency, value]);
}
