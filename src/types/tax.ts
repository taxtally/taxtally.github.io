export type PayFrequency = 'annual' | 'monthly' | 'biweekly' | 'hourly';

export type FilingStatus = 'single' | 'married' | 'head_of_household';

export type CountryPresetId = 'us' | 'uk' | 'ca' | 'au' | 'de' | 'custom';

export interface TaxBracket {
  rate: number; // e.g. 0.10 for 10%
  threshold: number; // bracket start
  upTo?: number; // bracket end (undefined if top bracket)
}

export interface RegionalTaxPreset {
  id: CountryPresetId;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  standardDeductions: Record<FilingStatus, number>;
  brackets: Record<FilingStatus, TaxBracket[]>;
  additionalTaxes?: {
    name: string;
    rate: number;
    cap?: number;
  }[];
}

export interface TaxCalculationResult {
  grossAnnual: number;
  deductionApplied: number;
  taxableIncome: number;
  totalTax: number;
  additionalTaxesTotal: number;
  netAnnual: number;
  effectiveTaxRate: number;
  marginalTaxRate: number;
  bracketBreakdown: {
    rate: number;
    range: string;
    taxableInBracket: number;
    taxOwed: number;
  }[];
  breakdownByPeriod: {
    period: string;
    gross: number;
    tax: number;
    net: number;
  }[];
}

export type SupportedLocale = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja';
