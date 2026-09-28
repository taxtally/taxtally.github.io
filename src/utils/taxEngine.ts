import type {
  CountryPresetId,
  FilingStatus,
  PayFrequency,
  RegionalTaxPreset,
  TaxCalculationResult,
} from '../types/tax';

export const TAX_PRESETS: Record<CountryPresetId, RegionalTaxPreset> = {
  us: {
    id: 'us',
    name: 'United States (Federal)',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    standardDeductions: {
      single: 14600,
      married: 29200,
      head_of_household: 21900,
    },
    brackets: {
      single: [
        { rate: 0.10, threshold: 0, upTo: 11600 },
        { rate: 0.12, threshold: 11600, upTo: 47150 },
        { rate: 0.22, threshold: 47150, upTo: 100525 },
        { rate: 0.24, threshold: 100525, upTo: 191950 },
        { rate: 0.32, threshold: 191950, upTo: 243725 },
        { rate: 0.35, threshold: 243725, upTo: 609350 },
        { rate: 0.37, threshold: 609350 },
      ],
      married: [
        { rate: 0.10, threshold: 0, upTo: 23200 },
        { rate: 0.12, threshold: 23200, upTo: 94300 },
        { rate: 0.22, threshold: 94300, upTo: 201050 },
        { rate: 0.24, threshold: 201050, upTo: 383900 },
        { rate: 0.32, threshold: 383900, upTo: 487450 },
        { rate: 0.35, threshold: 487450, upTo: 731200 },
        { rate: 0.37, threshold: 731200 },
      ],
      head_of_household: [
        { rate: 0.10, threshold: 0, upTo: 16550 },
        { rate: 0.12, threshold: 16550, upTo: 63100 },
        { rate: 0.22, threshold: 63100, upTo: 100500 },
        { rate: 0.24, threshold: 100500, upTo: 191950 },
        { rate: 0.32, threshold: 191950, upTo: 243700 },
        { rate: 0.35, threshold: 243700, upTo: 609350 },
        { rate: 0.37, threshold: 609350 },
      ],
    },
    additionalTaxes: [
      { name: 'Social Security (FICA 6.2%)', rate: 0.062, cap: 168600 },
      { name: 'Medicare (1.45%)', rate: 0.0145 },
    ],
  },
  uk: {
    id: 'uk',
    name: 'United Kingdom (PAYE)',
    flag: '🇬🇧',
    currency: 'GBP',
    currencySymbol: '£',
    standardDeductions: {
      single: 12570,
      married: 12570,
      head_of_household: 12570,
    },
    brackets: {
      single: [
        { rate: 0.20, threshold: 0, upTo: 37700 }, // £12,571 to £50,270 taxable
        { rate: 0.40, threshold: 37700, upTo: 112570 }, // £50,271 to £125,140 taxable
        { rate: 0.45, threshold: 112570 }, // Over £125,140
      ],
      married: [
        { rate: 0.20, threshold: 0, upTo: 37700 },
        { rate: 0.40, threshold: 37700, upTo: 112570 },
        { rate: 0.45, threshold: 112570 },
      ],
      head_of_household: [
        { rate: 0.20, threshold: 0, upTo: 37700 },
        { rate: 0.40, threshold: 37700, upTo: 112570 },
        { rate: 0.45, threshold: 112570 },
      ],
    },
    additionalTaxes: [
      { name: 'National Insurance Class 1 (8%)', rate: 0.08, cap: 50270 },
    ],
  },
  ca: {
    id: 'ca',
    name: 'Canada (Federal)',
    flag: '🇨🇦',
    currency: 'CAD',
    currencySymbol: '$',
    standardDeductions: {
      single: 15705,
      married: 15705,
      head_of_household: 15705,
    },
    brackets: {
      single: [
        { rate: 0.15, threshold: 0, upTo: 55867 },
        { rate: 0.205, threshold: 55867, upTo: 111733 },
        { rate: 0.26, threshold: 111733, upTo: 173205 },
        { rate: 0.29, threshold: 173205, upTo: 246752 },
        { rate: 0.33, threshold: 246752 },
      ],
      married: [
        { rate: 0.15, threshold: 0, upTo: 55867 },
        { rate: 0.205, threshold: 55867, upTo: 111733 },
        { rate: 0.26, threshold: 111733, upTo: 173205 },
        { rate: 0.29, threshold: 173205, upTo: 246752 },
        { rate: 0.33, threshold: 246752 },
      ],
      head_of_household: [
        { rate: 0.15, threshold: 0, upTo: 55867 },
        { rate: 0.205, threshold: 55867, upTo: 111733 },
        { rate: 0.26, threshold: 111733, upTo: 173205 },
        { rate: 0.29, threshold: 173205, upTo: 246752 },
        { rate: 0.33, threshold: 246752 },
      ],
    },
    additionalTaxes: [
      { name: 'CPP (Canada Pension Plan 5.95%)', rate: 0.0595, cap: 68500 },
    ],
  },
  au: {
    id: 'au',
    name: 'Australia (ATO Resident)',
    flag: '🇦🇺',
    currency: 'AUD',
    currencySymbol: '$',
    standardDeductions: {
      single: 18200,
      married: 18200,
      head_of_household: 18200,
    },
    brackets: {
      single: [
        { rate: 0.16, threshold: 0, upTo: 26800 }, // $18,201 to $45,000 taxable
        { rate: 0.30, threshold: 26800, upTo: 116800 }, // $45,001 to $135,000 taxable
        { rate: 0.37, threshold: 116800, upTo: 171800 }, // $135,001 to $190,000 taxable
        { rate: 0.45, threshold: 171800 }, // over $190,000
      ],
      married: [
        { rate: 0.16, threshold: 0, upTo: 26800 },
        { rate: 0.30, threshold: 26800, upTo: 116800 },
        { rate: 0.37, threshold: 116800, upTo: 171800 },
        { rate: 0.45, threshold: 171800 },
      ],
      head_of_household: [
        { rate: 0.16, threshold: 0, upTo: 26800 },
        { rate: 0.30, threshold: 26800, upTo: 116800 },
        { rate: 0.37, threshold: 116800, upTo: 171800 },
        { rate: 0.45, threshold: 171800 },
      ],
    },
    additionalTaxes: [
      { name: 'Medicare Levy (2.0%)', rate: 0.02 },
    ],
  },
  de: {
    id: 'de',
    name: 'Germany (Einkommensteuer)',
    flag: '🇩🇪',
    currency: 'EUR',
    currencySymbol: '€',
    standardDeductions: {
      single: 11784,
      married: 23568,
      head_of_household: 11784,
    },
    brackets: {
      single: [
        { rate: 0.14, threshold: 0, upTo: 5221 }, // Zone 1 entrance
        { rate: 0.24, threshold: 5221, upTo: 54976 }, // Zone 2
        { rate: 0.42, threshold: 54976, upTo: 266041 }, // Zone 3
        { rate: 0.45, threshold: 266041 }, // Reichensteuer
      ],
      married: [
        { rate: 0.14, threshold: 0, upTo: 10442 },
        { rate: 0.24, threshold: 10442, upTo: 109952 },
        { rate: 0.42, threshold: 109952, upTo: 532082 },
        { rate: 0.45, threshold: 532082 },
      ],
      head_of_household: [
        { rate: 0.14, threshold: 0, upTo: 5221 },
        { rate: 0.24, threshold: 5221, upTo: 54976 },
        { rate: 0.42, threshold: 54976, upTo: 266041 },
        { rate: 0.45, threshold: 266041 },
      ],
    },
    additionalTaxes: [
      { name: 'Solidarity Surcharge (Approx 5.5% on high incomes)', rate: 0.015 },
    ],
  },
  custom: {
    id: 'custom',
    name: 'Custom / Flat Rate Mode',
    flag: '🌐',
    currency: 'USD',
    currencySymbol: '$',
    standardDeductions: {
      single: 0,
      married: 0,
      head_of_household: 0,
    },
    brackets: {
      single: [
        { rate: 0.20, threshold: 0 },
      ],
      married: [
        { rate: 0.20, threshold: 0 },
      ],
      head_of_household: [
        { rate: 0.20, threshold: 0 },
      ],
    },
  },
};

export interface CalculateTaxParams {
  income: number;
  frequency: PayFrequency;
  hoursPerWeek?: number;
  presetId: CountryPresetId;
  filingStatus: FilingStatus;
  useStandardDeduction: boolean;
  customDeduction?: number;
  customTaxRate?: number; // for custom mode
  includeAdditionalTaxes?: boolean;
}

export function calculateAnnualGross(
  income: number,
  frequency: PayFrequency,
  hoursPerWeek = 40
): number {
  if (income <= 0 || isNaN(income)) return 0;
  switch (frequency) {
    case 'annual':
      return income;
    case 'monthly':
      return income * 12;
    case 'biweekly':
      return income * 26;
    case 'hourly':
      return income * Math.max(1, hoursPerWeek) * 52;
  }
}

export function calculateTax(params: CalculateTaxParams): TaxCalculationResult {
  const {
    income,
    frequency,
    hoursPerWeek = 40,
    presetId,
    filingStatus,
    useStandardDeduction,
    customDeduction = 0,
    customTaxRate = 20,
    includeAdditionalTaxes = true,
  } = params;

  const grossAnnual = calculateAnnualGross(income, frequency, hoursPerWeek);

  const preset = TAX_PRESETS[presetId] || TAX_PRESETS.us;

  // Calculate deduction
  let deductionApplied = 0;
  if (presetId === 'custom') {
    deductionApplied = Math.max(0, customDeduction || 0);
  } else if (useStandardDeduction) {
    deductionApplied = preset.standardDeductions[filingStatus] || 0;
  } else {
    deductionApplied = Math.max(0, customDeduction || 0);
  }

  // Deductions cannot exceed gross income
  deductionApplied = Math.min(deductionApplied, grossAnnual);
  const taxableIncome = Math.max(0, grossAnnual - deductionApplied);

  let totalTax = 0;
  let marginalTaxRate = 0;
  const bracketBreakdown: TaxCalculationResult['bracketBreakdown'] = [];

  if (presetId === 'custom') {
    const rate = Math.min(100, Math.max(0, customTaxRate)) / 100;
    totalTax = taxableIncome * rate;
    marginalTaxRate = rate * 100;
    bracketBreakdown.push({
      rate: rate * 100,
      range: `$0+`,
      taxableInBracket: taxableIncome,
      taxOwed: totalTax,
    });
  } else {
    const brackets = preset.brackets[filingStatus] || preset.brackets.single;

    for (let i = 0; i < brackets.length; i++) {
      const b = brackets[i];
      if (taxableIncome > b.threshold) {
        const taxableMax = b.upTo ? Math.min(taxableIncome, b.upTo) : taxableIncome;
        const taxableInBracket = Math.max(0, taxableMax - b.threshold);
        const taxOwed = taxableInBracket * b.rate;
        totalTax += taxOwed;

        if (taxableInBracket > 0) {
          marginalTaxRate = b.rate * 100;
        }

        const rangeStr = b.upTo
          ? `${formatCurrency(b.threshold, preset.currencySymbol)} - ${formatCurrency(b.upTo, preset.currencySymbol)}`
          : `>${formatCurrency(b.threshold, preset.currencySymbol)}`;

        bracketBreakdown.push({
          rate: b.rate * 100,
          range: rangeStr,
          taxableInBracket,
          taxOwed,
        });
      }
    }
  }

  // Calculate additional taxes (e.g., FICA, NI, Medicare)
  let additionalTaxesTotal = 0;
  if (includeAdditionalTaxes && preset.additionalTaxes && presetId !== 'custom') {
    for (const addTax of preset.additionalTaxes) {
      const subjectIncome = addTax.cap ? Math.min(grossAnnual, addTax.cap) : grossAnnual;
      additionalTaxesTotal += subjectIncome * addTax.rate;
    }
  }

  const combinedTax = totalTax + additionalTaxesTotal;
  const netAnnual = Math.max(0, grossAnnual - combinedTax);
  const effectiveTaxRate = grossAnnual > 0 ? (combinedTax / grossAnnual) * 100 : 0;

  // Granular periods breakdown
  const periods = [
    { period: 'Annual', divisor: 1 },
    { period: 'Monthly', divisor: 12 },
    { period: 'Semi-Monthly', divisor: 24 },
    { period: 'Bi-Weekly', divisor: 26 },
    { period: 'Weekly', divisor: 52 },
    { period: 'Daily (5d/wk)', divisor: 260 },
    { period: 'Hourly (40h/wk)', divisor: 2080 },
  ];

  const breakdownByPeriod = periods.map((p) => ({
    period: p.period,
    gross: grossAnnual / p.divisor,
    tax: combinedTax / p.divisor,
    net: netAnnual / p.divisor,
  }));

  return {
    grossAnnual,
    deductionApplied,
    taxableIncome,
    totalTax: combinedTax,
    additionalTaxesTotal,
    netAnnual,
    effectiveTaxRate,
    marginalTaxRate,
    bracketBreakdown,
    breakdownByPeriod,
  };
}

export function formatCurrency(
  val: number,
  symbol = '$',
  minimumFractionDigits = 0
): string {
  if (isNaN(val)) return `${symbol}0`;
  const formatted = val.toLocaleString(undefined, {
    minimumFractionDigits,
    maximumFractionDigits: minimumFractionDigits === 0 ? 0 : 2,
  });
  return `${symbol}${formatted}`;
}
