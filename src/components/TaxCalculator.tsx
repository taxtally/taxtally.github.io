import React, { useState, useMemo } from 'react';
import type { CountryPresetId, FilingStatus, PayFrequency, SupportedLocale } from '../types/tax';
import { calculateTax, formatCurrency, TAX_PRESETS } from '../utils/taxEngine';
import { TRANSLATIONS } from '../i18n/translations';
import {
  DollarSign,
  Copy,
  Printer,
  RotateCcw,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Percent,
  Calendar,
  Layers,
  Info,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

interface TaxCalculatorProps {
  currentLocale?: SupportedLocale;
}

export const TaxCalculator: React.FC<TaxCalculatorProps> = ({ currentLocale = 'en' }) => {
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.en;

  // Form State
  const [grossIncomeInput, setGrossIncomeInput] = useState<string>('75000');
  const [frequency, setFrequency] = useState<PayFrequency>('annual');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [presetId, setPresetId] = useState<CountryPresetId>('us');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [useStandardDeduction, setUseStandardDeduction] = useState<boolean>(true);
  const [customDeductionInput, setCustomDeductionInput] = useState<string>('0');
  const [customTaxRateInput, setCustomTaxRateInput] = useState<string>('20');
  const [includeAdditionalTaxes, setIncludeAdditionalTaxes] = useState<boolean>(true);

  // UI State
  const [activeTab, setActiveTab] = useState<'schedule' | 'brackets'>('schedule');
  const [copied, setCopied] = useState<boolean>(false);

  const numericIncome = parseFloat(grossIncomeInput.replace(/[^0-9.]/g, '')) || 0;
  const numericCustomDeduction = parseFloat(customDeductionInput.replace(/[^0-9.]/g, '')) || 0;
  const numericCustomTaxRate = parseFloat(customTaxRateInput.replace(/[^0-9.]/g, '')) || 0;

  const currentPreset = TAX_PRESETS[presetId] || TAX_PRESETS.us;

  // Real-time calculation
  const result = useMemo(() => {
    return calculateTax({
      income: numericIncome,
      frequency,
      hoursPerWeek,
      presetId,
      filingStatus,
      useStandardDeduction,
      customDeduction: numericCustomDeduction,
      customTaxRate: numericCustomTaxRate,
      includeAdditionalTaxes,
    });
  }, [
    numericIncome,
    frequency,
    hoursPerWeek,
    presetId,
    filingStatus,
    useStandardDeduction,
    numericCustomDeduction,
    numericCustomTaxRate,
    includeAdditionalTaxes,
  ]);

  // Income Input Formatter
  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9.]/g, '');
    setGrossIncomeInput(rawVal);
  };

  // Copy Summary to Clipboard
  const handleCopySummary = async () => {
    const summaryText = `TaxTally Calculation Summary (${currentPreset.name})
-----------------------------------------
Gross Annual Income:   ${formatCurrency(result.grossAnnual, currentPreset.currencySymbol)}
Standard / Deductions: ${formatCurrency(result.deductionApplied, currentPreset.currencySymbol)}
Taxable Income:        ${formatCurrency(result.taxableIncome, currentPreset.currencySymbol)}
Total Income Tax:      ${formatCurrency(result.totalTax, currentPreset.currencySymbol)}
Effective Tax Rate:    ${result.effectiveTaxRate.toFixed(2)}%
Marginal Tax Rate:     ${result.marginalTaxRate.toFixed(1)}%
Net Take-Home (Annual): ${formatCurrency(result.netAnnual, currentPreset.currencySymbol)}
Net Take-Home (Monthly): ${formatCurrency(result.netAnnual / 12, currentPreset.currencySymbol)}
-----------------------------------------
Calculated privately with TaxTally: https://taxtally.github.io`;

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setGrossIncomeInput('75000');
    setFrequency('annual');
    setHoursPerWeek(40);
    setPresetId('us');
    setFilingStatus('single');
    setUseStandardDeduction(true);
    setCustomDeductionInput('0');
    setCustomTaxRateInput('20');
    setIncludeAdditionalTaxes(true);
  };

  // Percent distribution calculations for visual stacked bar
  const netPercent = result.grossAnnual > 0 ? (result.netAnnual / result.grossAnnual) * 100 : 100;
  const taxPercent = result.grossAnnual > 0 ? (result.totalTax / result.grossAnnual) * 100 : 0;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Privacy Guarantee Pill */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#8BBB92]/15 text-[#12544F] dark:bg-[#12544F]/40 dark:text-[#8BBB92] border border-[#8BBB92]/40 dark:border-[#2A835F]/50 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#2A835F] dark:text-[#8BBB92] shrink-0" />
          <span>{t.privacyBadge}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Steps 1 & 2 Inputs */}
        <div className="lg:col-span-5 space-y-6">
          {/* STEP 1: Gross Income */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8BBB92]/20 text-[#12544F] dark:bg-[#12544F] dark:text-[#8BBB92] text-xs font-bold">
                    1
                  </span>
                  {t.step1Title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t.step1Desc}</p>
              </div>
            </div>

            {/* Income Input */}
            <div className="space-y-4">
              <div>
                <label htmlFor="gross-income-input" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  {t.grossIncome} ({currentPreset.currencySymbol})
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <span className="text-slate-400 dark:text-slate-500 font-semibold text-lg">
                      {currentPreset.currencySymbol}
                    </span>
                  </div>
                  <input
                    id="gross-income-input"
                    type="text"
                    inputMode="decimal"
                    value={grossIncomeInput}
                    onChange={handleIncomeChange}
                    placeholder="e.g. 75,000"
                    className="block w-full rounded-xl border border-slate-300 dark:border-[#12544F] bg-slate-50/50 dark:bg-[#092328]/50 pl-9 pr-4 py-3 text-lg font-semibold text-slate-900 dark:text-slate-50 focus:border-[#2A835F] focus:ring-2 focus:ring-[#2A835F]/20 focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Pay Frequency Switcher */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  {t.payFrequency}
                </label>
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 dark:bg-[#092328] rounded-xl border border-slate-200/80 dark:border-[#12544F]">
                  {(['annual', 'monthly', 'biweekly', 'hourly'] as PayFrequency[]).map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg capitalize transition-all ${
                        frequency === freq
                          ? 'bg-white dark:bg-[#12544F] text-[#2A835F] dark:text-[#8BBB92] shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {freq === 'biweekly' ? 'Bi-Wk' : freq}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours per week (shown if hourly) */}
              {frequency === 'hourly' && (
                <div className="pt-1">
                  <label htmlFor="hours-per-week" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    {t.hoursPerWeek}
                  </label>
                  <input
                    id="hours-per-week"
                    type="number"
                    min="1"
                    max="100"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Math.max(1, parseInt(e.target.value) || 40))}
                    className="block w-full rounded-xl border border-slate-300 dark:border-[#12544F] bg-slate-50/50 dark:bg-[#092328]/50 px-3.5 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-50 focus:border-[#2A835F] focus:ring-2 focus:ring-[#2A835F]/20 focus:outline-hidden"
                  />
                </div>
              )}
            </div>
          </div>

          {/* STEP 2: Tax Regime & Deductions */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] shadow-xs space-y-5">
            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8BBB92]/20 text-[#12544F] dark:bg-[#12544F] dark:text-[#8BBB92] text-xs font-bold">
                  2
                </span>
                {t.step2Title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t.step2Desc}</p>
            </div>

            {/* Tax Jurisdiction Selection */}
            <div>
              <label htmlFor="tax-region-select" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t.taxRegion}
              </label>
              <div className="relative">
                <select
                  id="tax-region-select"
                  value={presetId}
                  onChange={(e) => setPresetId(e.target.value as CountryPresetId)}
                  className="w-full appearance-none rounded-xl border border-slate-300 dark:border-[#12544F] bg-slate-50/50 dark:bg-[#092328]/50 pl-3.5 pr-10 py-2.5 text-sm font-medium text-slate-900 dark:text-slate-50 focus:border-[#2A835F] focus:ring-2 focus:ring-[#2A835F]/20 focus:outline-hidden cursor-pointer"
                >
                  <option value="us">🇺🇸 United States (Federal 2025/2026)</option>
                  <option value="uk">🇬🇧 United Kingdom (HMRC PAYE)</option>
                  <option value="ca">🇨🇦 Canada (Federal CRA)</option>
                  <option value="au">🇦🇺 Australia (ATO Resident)</option>
                  <option value="de">🇩🇪 Germany (Einkommensteuer)</option>
                  <option value="custom">🌐 Custom / Flat Rate Mode</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Custom Mode Inputs */}
            {presetId === 'custom' ? (
              <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-[#12544F]">
                <div>
                  <label htmlFor="custom-tax-rate" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    {t.customTaxRateLabel}
                  </label>
                  <div className="relative rounded-xl shadow-xs">
                    <input
                      id="custom-tax-rate"
                      type="text"
                      inputMode="decimal"
                      value={customTaxRateInput}
                      onChange={(e) => setCustomTaxRateInput(e.target.value.replace(/[^0-9.]/g, ''))}
                      className="block w-full rounded-xl border border-slate-300 dark:border-[#12544F] bg-slate-50/50 dark:bg-[#092328]/50 px-3.5 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-50 focus:border-[#2A835F] focus:ring-2 focus:ring-[#2A835F]/20 focus:outline-hidden"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
                      <Percent className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="custom-deduction-amount" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    {t.customDeduction} ($)
                  </label>
                  <input
                    id="custom-deduction-amount"
                    type="text"
                    inputMode="decimal"
                    value={customDeductionInput}
                    onChange={(e) => setCustomDeductionInput(e.target.value.replace(/[^0-9.]/g, ''))}
                    className="block w-full rounded-xl border border-slate-300 dark:border-[#12544F] bg-slate-50/50 dark:bg-[#092328]/50 px-3.5 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-50 focus:border-[#2A835F] focus:ring-2 focus:ring-[#2A835F]/20 focus:outline-hidden"
                  />
                </div>
              </div>
            ) : (
              <>
                {/* Filing Status */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.filingStatus}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-[#092328] rounded-xl border border-slate-200/80 dark:border-[#12544F]">
                    <button
                      type="button"
                      onClick={() => setFilingStatus('single')}
                      className={`py-2 px-1.5 text-xs font-semibold rounded-lg truncate transition-all ${
                        filingStatus === 'single'
                          ? 'bg-white dark:bg-[#12544F] text-[#2A835F] dark:text-[#8BBB92] shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {t.single}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilingStatus('married')}
                      className={`py-2 px-1.5 text-xs font-semibold rounded-lg truncate transition-all ${
                        filingStatus === 'married'
                          ? 'bg-white dark:bg-[#12544F] text-[#2A835F] dark:text-[#8BBB92] shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {t.married}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilingStatus('head_of_household')}
                      className={`py-2 px-1.5 text-xs font-semibold rounded-lg truncate transition-all ${
                        filingStatus === 'head_of_household'
                          ? 'bg-white dark:bg-[#12544F] text-[#2A835F] dark:text-[#8BBB92] shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {t.headOfHousehold}
                    </button>
                  </div>
                </div>

                {/* Deductions Options */}
                <div className="pt-2 border-t border-slate-100 dark:border-[#12544F] space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="standard-deduction-toggle" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.useStandardDeduction}
                    </label>
                    <button
                      id="standard-deduction-toggle"
                      type="button"
                      role="switch"
                      aria-checked={useStandardDeduction}
                      onClick={() => setUseStandardDeduction(!useStandardDeduction)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                        useStandardDeduction ? 'bg-[#2A835F]' : 'bg-slate-300 dark:bg-[#12544F]'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          useStandardDeduction ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {useStandardDeduction ? (
                    <div className="p-3 bg-[#8BBB92]/10 dark:bg-[#12544F]/30 border border-[#8BBB92]/30 dark:border-[#2A835F]/40 rounded-xl text-xs text-[#12544F] dark:text-[#8BBB92] flex items-center justify-between">
                      <span>Standard Allowance Applied:</span>
                      <span className="font-bold">
                        {formatCurrency(currentPreset.standardDeductions[filingStatus], currentPreset.currencySymbol)}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="custom-deduction-field" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        {t.customDeduction} ({currentPreset.currencySymbol})
                      </label>
                      <input
                        id="custom-deduction-field"
                        type="text"
                        inputMode="decimal"
                        value={customDeductionInput}
                        onChange={(e) => setCustomDeductionInput(e.target.value.replace(/[^0-9.]/g, ''))}
                        className="block w-full rounded-xl border border-slate-300 dark:border-[#12544F] bg-slate-50/50 dark:bg-[#092328]/50 px-3.5 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-50 focus:border-[#2A835F] focus:ring-2 focus:ring-[#2A835F]/20 focus:outline-hidden"
                      />
                    </div>
                  )}

                  {/* Additional Regional Taxes Toggle */}
                  {currentPreset.additionalTaxes && (
                    <div className="flex items-center justify-between pt-2">
                      <label htmlFor="additional-taxes-toggle" className="text-xs text-slate-600 dark:text-slate-400">
                        {t.includeAddTaxes}
                      </label>
                      <button
                        id="additional-taxes-toggle"
                        type="button"
                        role="switch"
                        aria-checked={includeAdditionalTaxes}
                        onClick={() => setIncludeAdditionalTaxes(!includeAdditionalTaxes)}
                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                          includeAdditionalTaxes ? 'bg-[#2A835F]' : 'bg-slate-300 dark:bg-[#12544F]'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                            includeAdditionalTaxes ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Reset Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-1 px-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {t.resetBtn}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Step 3 Instant Breakdown Tally */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header & Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A835F] text-white text-xs font-bold">
                  3
                </span>
                {t.step3Title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t.step3Desc}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#092328] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#12544F] hover:bg-slate-50 dark:hover:bg-[#12544F]/30 transition-colors shadow-2xs cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2A835F]" />
                    <span className="text-[#2A835F] dark:text-[#8BBB92] font-semibold">{t.copiedSuccess}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.copySummary}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#092328] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#12544F] hover:bg-slate-50 dark:hover:bg-[#12544F]/30 transition-colors shadow-2xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.printPdf}</span>
              </button>
            </div>
          </div>

          {/* PRIMARY KPI CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Net Take-Home Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2A835F]/15 via-[#8BBB92]/10 to-transparent dark:from-[#12544F]/50 dark:via-[#092328] dark:to-[#092328] border border-[#8BBB92]/50 dark:border-[#12544F] shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-semibold text-[#12544F] dark:text-[#8BBB92] uppercase tracking-wider mb-2">
                <span>{t.takeHomePay}</span>
                <span className="p-1.5 rounded-lg bg-[#8BBB92]/20 dark:bg-[#12544F]">
                  <TrendingUp className="w-4 h-4 text-[#2A835F] dark:text-[#8BBB92]" />
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {formatCurrency(result.netAnnual, currentPreset.currencySymbol)}
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-[#2A835F] dark:text-[#8BBB92]">
                  {formatCurrency(result.netAnnual / 12, currentPreset.currencySymbol)} / month
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span>
                  {formatCurrency(result.netAnnual / 26, currentPreset.currencySymbol)} / bi-wk
                </span>
              </div>
            </div>

            {/* Total Tax Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] shadow-xs">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                <span>{t.totalTax}</span>
                <span className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-500">
                  <TrendingDown className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {formatCurrency(result.totalTax, currentPreset.currencySymbol)}
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-rose-600 dark:text-rose-400">
                  {formatCurrency(result.totalTax / 12, currentPreset.currencySymbol)} / month
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span>
                  {formatCurrency(result.totalTax / 26, currentPreset.currencySymbol)} / bi-wk
                </span>
              </div>
            </div>
          </div>

          {/* SECONDARY METRICS: Effective Rate, Marginal Rate, Deductions */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] text-center">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">{t.effectiveRate}</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {result.effectiveTaxRate.toFixed(1)}%
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Blended average</div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] text-center">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">{t.marginalRate}</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {result.marginalTaxRate.toFixed(1)}%
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Top bracket tier</div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] text-center">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">{t.deductionsApplied}</div>
              <div className="text-xl sm:text-2xl font-bold text-[#2A835F] dark:text-[#8BBB92]">
                {formatCurrency(result.deductionApplied, currentPreset.currencySymbol)}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Tax-exempt</div>
            </div>
          </div>

          {/* VISUAL STACKED DISTRIBUTION BAR */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>{t.visualBreakdown}</span>
              <span className="text-slate-400 font-normal">
                Gross: {formatCurrency(result.grossAnnual, currentPreset.currencySymbol)}
              </span>
            </div>

            {/* Stacked Progress Bar */}
            <div className="h-4 w-full bg-slate-100 dark:bg-[#12544F]/40 rounded-full overflow-hidden flex shadow-inner">
              <div
                style={{ width: `${Math.min(100, Math.max(0, netPercent))}%` }}
                className="bg-[#2A835F] transition-all duration-300 relative group"
                title={`Net Take-Home: ${netPercent.toFixed(1)}%`}
              />
              <div
                style={{ width: `${Math.min(100, Math.max(0, taxPercent))}%` }}
                className="bg-rose-500 transition-all duration-300 relative group"
                title={`Income Tax: ${taxPercent.toFixed(1)}%`}
              />
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-between text-xs pt-1 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[#2A835F] shrink-0" />
                <span>{t.netPaySegment}: <strong>{netPercent.toFixed(1)}%</strong> ({formatCurrency(result.netAnnual, currentPreset.currencySymbol)})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-rose-500 shrink-0" />
                <span>{t.taxSegment}: <strong>{taxPercent.toFixed(1)}%</strong> ({formatCurrency(result.totalTax, currentPreset.currencySymbol)})</span>
              </div>
            </div>
          </div>

          {/* TABBED DETAILS: Granular Paycheck Schedule vs. Tax Bracket Breakdown */}
          <div className="rounded-2xl bg-white dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] shadow-xs overflow-hidden">
            <div className="flex border-b border-slate-200 dark:border-[#12544F]">
              <button
                type="button"
                onClick={() => setActiveTab('schedule')}
                className={`flex-1 py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  activeTab === 'schedule'
                    ? 'border-b-2 border-[#2A835F] text-[#2A835F] dark:text-[#8BBB92] bg-[#8BBB92]/10 dark:bg-[#12544F]/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                {t.periodSchedule}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('brackets')}
                className={`flex-1 py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  activeTab === 'brackets'
                    ? 'border-b-2 border-[#2A835F] text-[#2A835F] dark:text-[#8BBB92] bg-[#8BBB92]/10 dark:bg-[#12544F]/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                {t.bracketBreakdownTitle}
              </button>
            </div>

            <div className="p-4 sm:p-5">
              {activeTab === 'schedule' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-[#12544F] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                        <th className="pb-2.5">{t.periodCol}</th>
                        <th className="pb-2.5">{t.grossCol}</th>
                        <th className="pb-2.5 text-rose-500">{t.taxCol}</th>
                        <th className="pb-2.5 text-[#2A835F] dark:text-[#8BBB92] font-bold">{t.netCol}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-[#12544F]/60">
                      {result.breakdownByPeriod.map((row) => (
                        <tr key={row.period} className="hover:bg-slate-50 dark:hover:bg-[#12544F]/20 transition-colors">
                          <td className="py-2.5 font-medium text-slate-800 dark:text-slate-200">{row.period}</td>
                          <td className="py-2.5 text-slate-600 dark:text-slate-400">
                            {formatCurrency(row.gross, currentPreset.currencySymbol, 2)}
                          </td>
                          <td className="py-2.5 text-rose-600 dark:text-rose-400">
                            {formatCurrency(row.tax, currentPreset.currencySymbol, 2)}
                          </td>
                          <td className="py-2.5 font-bold text-[#2A835F] dark:text-[#8BBB92]">
                            {formatCurrency(row.net, currentPreset.currencySymbol, 2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="space-y-3">
                  {result.bracketBreakdown.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-500">
                      All earnings fall within your tax-free allowance ({formatCurrency(result.deductionApplied, currentPreset.currencySymbol)}). No income tax owed!
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 dark:border-[#12544F] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                            <th className="pb-2.5">{t.bracketCol}</th>
                            <th className="pb-2.5">{t.rateCol}</th>
                            <th className="pb-2.5">{t.taxableCol}</th>
                            <th className="pb-2.5 text-right">{t.taxOwedCol}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-[#12544F]/60">
                          {result.bracketBreakdown.map((b, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-[#12544F]/20 transition-colors">
                              <td className="py-2.5 font-mono text-slate-700 dark:text-slate-300">{b.range}</td>
                              <td className="py-2.5 font-bold text-slate-900 dark:text-slate-100">{b.rate.toFixed(0)}%</td>
                              <td className="py-2.5 text-slate-600 dark:text-slate-400">
                                {formatCurrency(b.taxableInBracket, currentPreset.currencySymbol)}
                              </td>
                              <td className="py-2.5 font-semibold text-rose-600 dark:text-rose-400 text-right">
                                {formatCurrency(b.taxOwed, currentPreset.currencySymbol)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {result.additionalTaxesTotal > 0 && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-[#092328] border border-slate-200 dark:border-[#12544F] text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-slate-400" />
                        Regional Contributions / Payroll Taxes:
                      </span>
                      <span className="font-semibold text-rose-600 dark:text-rose-400">
                        {formatCurrency(result.additionalTaxesTotal, currentPreset.currencySymbol)}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

