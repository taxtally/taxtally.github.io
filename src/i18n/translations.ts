import type { SupportedLocale } from '../types/tax';

export interface TranslationDictionary {
  siteTitle: string;
  siteTagline: string;
  metaDescription: string;
  supportDeveloper: string;
  themeToggle: string;
  languageSelect: string;
  privacyBadge: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  grossIncome: string;
  payFrequency: string;
  hoursPerWeek: string;
  taxRegion: string;
  filingStatus: string;
  single: string;
  married: string;
  headOfHousehold: string;
  deductionOptions: string;
  useStandardDeduction: string;
  customDeduction: string;
  customTaxRateLabel: string;
  includeAddTaxes: string;
  takeHomePay: string;
  totalTax: string;
  effectiveRate: string;
  marginalRate: string;
  deductionsApplied: string;
  visualBreakdown: string;
  netPaySegment: string;
  taxSegment: string;
  deductionSegment: string;
  periodSchedule: string;
  bracketBreakdownTitle: string;
  periodCol: string;
  grossCol: string;
  taxCol: string;
  netCol: string;
  bracketCol: string;
  rateCol: string;
  taxableCol: string;
  taxOwedCol: string;
  copySummary: string;
  copiedSuccess: string;
  printPdf: string;
  resetBtn: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: {
    q: string;
    a: string;
  }[];
  footerDisclaimer: string;
  builtForPrivacy: string;
  breadcrumbHome: string;
  breadcrumbCalculator: string;
}

export const LOCALES: Record<SupportedLocale, { code: SupportedLocale; name: string; flag: string; ogLocale: string }> = {
  en: { code: 'en', name: 'English', flag: '🇺🇸', ogLocale: 'en_US' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸', ogLocale: 'es_ES' },
  pt: { code: 'pt', name: 'Português', flag: '🇧🇷', ogLocale: 'pt_BR' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪', ogLocale: 'de_DE' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷', ogLocale: 'fr_FR' },
  ja: { code: 'ja', name: '日本語', flag: '🇯🇵', ogLocale: 'ja_JP' },
};

export const TRANSLATIONS: Record<SupportedLocale, TranslationDictionary> = {
  en: {
    siteTitle: 'TaxTally | Free Private Income Tax & Salary Calculator',
    siteTagline: 'Free, instant, 100% private income tax and salary take-home calculator.',
    metaDescription: 'Calculate your take-home salary and income tax instantly. 100% private in-browser calculator with progressive tax brackets, deductions, and zero server storage.',
    supportDeveloper: 'Support the Developer',
    themeToggle: 'Toggle Theme',
    languageSelect: 'Language',
    privacyBadge: '🔒 100% Client-Side & Private — Zero Data Leaves Your Device',
    breadcrumbHome: 'Home',
    breadcrumbCalculator: 'Tax & Salary Calculator',
    step1Title: 'Step 1: Your Earnings',
    step1Desc: 'Enter your gross earnings and payment interval.',
    step2Title: 'Step 2: Tax Regime & Deductions',
    step2Desc: 'Choose your tax region, filing status, and eligible allowances.',
    step3Title: 'Step 3: Instant Breakdown Tally',
    step3Desc: 'Real-time analysis of your net paycheck, effective rate, and tax brackets.',
    grossIncome: 'Gross Income',
    payFrequency: 'Pay Frequency',
    hoursPerWeek: 'Hours Worked per Week',
    taxRegion: 'Tax Jurisdiction / Preset',
    filingStatus: 'Filing Status',
    single: 'Single',
    married: 'Married / Joint',
    headOfHousehold: 'Head of Household',
    deductionOptions: 'Deductions & Allowances',
    useStandardDeduction: 'Use Official Standard Deduction / Allowance',
    customDeduction: 'Custom Deduction Amount',
    customTaxRateLabel: 'Custom Flat Tax Rate (%)',
    includeAddTaxes: 'Include regional contributions (FICA / NI / Medicare / CPP)',
    takeHomePay: 'Net Take-Home Pay',
    totalTax: 'Total Income Tax Payable',
    effectiveRate: 'Effective Tax Rate',
    marginalRate: 'Marginal Tax Rate',
    deductionsApplied: 'Total Deductions Applied',
    visualBreakdown: 'Income Distribution Breakdown',
    netPaySegment: 'Net Take-Home',
    taxSegment: 'Income Tax',
    deductionSegment: 'Tax-Free Deductions',
    periodSchedule: 'Granular Paycheck Schedule',
    bracketBreakdownTitle: 'Progressive Tax Bracket Breakdown',
    periodCol: 'Pay Period',
    grossCol: 'Gross Earnings',
    taxCol: 'Estimated Tax',
    netCol: 'Net Take-Home',
    bracketCol: 'Tax Bracket Range',
    rateCol: 'Bracket Rate',
    taxableCol: 'Taxable in Tier',
    taxOwedCol: 'Tax Owed',
    copySummary: 'Copy Summary',
    copiedSuccess: 'Summary copied to clipboard!',
    printPdf: 'Print / Save PDF',
    resetBtn: 'Reset',
    faqTitle: 'Frequently Asked Questions & Tax Guides',
    faqSubtitle: 'Everything you need to understand progressive taxes, take-home pay, and deductions.',
    faqs: [
      {
        q: 'How does a progressive tax bracket system work?',
        a: 'In a progressive tax system, your income is partitioned into tiered slices called brackets. You only pay the higher tax rate on the portion of income that falls within that specific bracket—not on your entire earnings. This is why earning a raise that pushes you into a higher bracket will never decrease your overall take-home pay.',
      },
      {
        q: 'What is the difference between Effective and Marginal tax rates?',
        a: 'Your Marginal Tax Rate is the percentage of tax owed on the very last dollar you earn. Your Effective Tax Rate is the actual blended percentage of your total income paid in taxes (Total Tax ÷ Gross Income). Because of progressive brackets and standard deductions, your effective rate is almost always significantly lower than your marginal rate.',
      },
      {
        q: 'Is my salary or financial data stored or transmitted?',
        a: 'No. TaxTally operates 100% within your web browser using client-side JavaScript. No numbers, deductions, or personal details are transmitted over any network or stored in external databases. Your financial privacy is mathematically guaranteed.',
      },
      {
        q: 'How do standard deductions reduce my tax bill?',
        a: 'A standard deduction is a set amount of income that the government does not tax. It is subtracted directly from your gross income before tax brackets are calculated. For example, if you earn $60,000 and qualify for a $14,600 standard deduction, you are only taxed on the remaining $45,400.',
      },
      {
        q: 'Can I use this calculator for freelance or contractor earnings?',
        a: 'Yes! Select "Custom / Flat Rate Mode" or use your country preset and adjust deductions to model self-employment income, business expenses, and custom tax reserves.',
      },
    ],
    footerDisclaimer: 'Disclaimer: TaxTally is an informational estimation tool designed for planning purposes. Tax legislation varies across regional municipalities. Consult a certified financial advisor or accountant for official tax filings.',
    builtForPrivacy: 'Built with strict privacy, zero server dependencies, and open-source standards.',
  },
  es: {
    siteTitle: 'TaxTally | Calculadora de Impuestos y Salario Neto Gratis',
    siteTagline: 'Calculadora de salario neto e impuestos 100% privada e instantánea.',
    metaDescription: 'Calcula tu salario neto real y obligaciones fiscales al instante. Calculadora 100% privada en el navegador con tramos progresivos y deducciones.',
    supportDeveloper: 'Apoyar al Desarrollador',
    themeToggle: 'Cambiar Tema',
    languageSelect: 'Idioma',
    privacyBadge: '🔒 100% En el Navegador y Privado — Ningún dato sale de tu dispositivo',
    breadcrumbHome: 'Inicio',
    breadcrumbCalculator: 'Calculadora de Impuestos',
    step1Title: 'Paso 1: Tus Ingresos',
    step1Desc: 'Introduce tus ingresos brutos y la frecuencia de cobro.',
    step2Title: 'Paso 2: Régimen Fiscal y Deducciones',
    step2Desc: 'Selecciona tu jurisdicción, estado civil y deducciones aplicables.',
    step3Title: 'Paso 3: Desglose Instantáneo',
    step3Desc: 'Análisis en tiempo real de tu sueldo neto, tasa efectiva y tramos impositivos.',
    grossIncome: 'Ingreso Bruto',
    payFrequency: 'Frecuencia de Pago',
    hoursPerWeek: 'Horas Trabajadas por Semana',
    taxRegion: 'Régimen Fiscal / País',
    filingStatus: 'Estado Civil',
    single: 'Soltero / Individual',
    married: 'Casado / Conjunto',
    headOfHousehold: 'Cabeza de Familia',
    deductionOptions: 'Deducciones y Exenciones',
    useStandardDeduction: 'Usar Deducción Estándar Oficial',
    customDeduction: 'Monto de Deducción Personalizada',
    customTaxRateLabel: 'Tasa Impositiva Plana Personalizada (%)',
    includeAddTaxes: 'Incluir contribuciones de seguridad social regionales',
    takeHomePay: 'Salario Neto a Percibir',
    totalTax: 'Impuesto Total a Pagar',
    effectiveRate: 'Tasa Impositiva Efectiva',
    marginalRate: 'Tasa Impositiva Marginal',
    deductionsApplied: 'Total de Deducciones Aplicadas',
    visualBreakdown: 'Distribución de Ingresos',
    netPaySegment: 'Salario Neto',
    taxSegment: 'Impuestos',
    deductionSegment: 'Deducciones Exentas',
    periodSchedule: 'Calendario Detallado de Pagos',
    bracketBreakdownTitle: 'Desglose por Tramos Impositivos',
    periodCol: 'Período',
    grossCol: 'Ingreso Bruto',
    taxCol: 'Impuesto Estimado',
    netCol: 'Sueldo Neto',
    bracketCol: 'Tramo Impositivo',
    rateCol: 'Tipo Impositivo',
    taxableCol: 'Base Imponible en Tramo',
    taxOwedCol: 'Impuesto del Tramo',
    copySummary: 'Copiar Resumen',
    copiedSuccess: '¡Copiado al portapapeles!',
    printPdf: 'Imprimir / Guardar PDF',
    resetBtn: 'Restablecer',
    faqTitle: 'Preguntas Frecuentes y Guías Fiscales',
    faqSubtitle: 'Todo lo que necesitas saber sobre impuestos progresivos y salario neto.',
    faqs: [
      {
        q: '¿Cómo funciona el sistema de tramos progresivos?',
        a: 'En un sistema progresivo, tus ingresos se dividen en tramos. Solo pagas la tasa más alta en la porción de ingresos que entra en dicho tramo, no sobre la totalidad de tu salario.',
      },
      {
        q: '¿Cuál es la diferencia entre tasa efectiva y marginal?',
        a: 'La tasa marginal es el porcentaje pagado sobre el último euro ganado. La tasa efectiva es el porcentaje total real que representa el impuesto frente a tu salario bruto total.',
      },
      {
        q: '¿Se guardan o envían mis datos?',
        a: 'No. TaxTally se ejecuta enteramente en tu navegador sin servidores intermedios. Tus datos nunca salen de tu dispositivo.',
      },
      {
        q: '¿Qué es una deducción estándar?',
        a: 'Es una cantidad fijada por la ley que no está sujeta a tributación y se resta de tus ingresos brutos antes de aplicar los tipos impositivos.',
      },
      {
        q: '¿Puedo usar esto para ingresos de autónomo?',
        a: 'Sí, utilizando el modo personalizado puedes modelar tus tipos impositivos y gastos deducibles con total precisión.',
      },
    ],
    footerDisclaimer: 'Aviso legal: TaxTally es una herramienta de estimación con fines educativos e informativos. Consulta con un asesor fiscal certificado para presentaciones oficiales.',
    builtForPrivacy: 'Creado con máxima privacidad, sin servidores externos y código transparente.',
  },
  pt: {
    siteTitle: 'TaxTally | Calculadora Gratuita de Salário Líquido e Imposto de Renda',
    siteTagline: 'Calculadora de salário líquido e impostos 100% privada e instantânea.',
    metaDescription: 'Calcule seu salário líquido real e deduções de impostos instantaneamente. Cálculo 100% seguro e local no navegador.',
    supportDeveloper: 'Apoiar o Desenvolvedor',
    themeToggle: 'Alternar Tema',
    languageSelect: 'Idioma',
    privacyBadge: '🔒 100% no Navegador e Privado — Seus dados nunca saem do aparelho',
    breadcrumbHome: 'Início',
    breadcrumbCalculator: 'Calculadora de Impostos',
    step1Title: 'Passo 1: Seus Ganhos',
    step1Desc: 'Informe sua renda bruta e a frequência de recebimento.',
    step2Title: 'Passo 2: Regime Tributário e Deduções',
    step2Desc: 'Escolha a jurisdição, estado civil e deduções aplicáveis.',
    step3Title: 'Passo 3: Tally e Detalhamento',
    step3Desc: 'Visualização instantânea do salário líquido, alíquota efetiva e faixas.',
    grossIncome: 'Renda Bruta',
    payFrequency: 'Frequência de Pagamento',
    hoursPerWeek: 'Horas Semanais Trabalhadas',
    taxRegion: 'Regime Fiscal / Região',
    filingStatus: 'Estado Civil',
    single: 'Individual / Solteiro',
    married: 'Casado / Conjunto',
    headOfHousehold: 'Chefe de Família',
    deductionOptions: 'Deduções e Isenções',
    useStandardDeduction: 'Usar Dedução Padrão Oficial',
    customDeduction: 'Dedução Personalizada',
    customTaxRateLabel: 'Alíquota Fixa Personalizada (%)',
    includeAddTaxes: 'Incluir contribuições sociais (Previdência / INSS / FICA)',
    takeHomePay: 'Salário Líquido a Receber',
    totalTax: 'Total de Imposto Devido',
    effectiveRate: 'Alíquota Efetiva',
    marginalRate: 'Alíquota Marginal',
    deductionsApplied: 'Total de Deduções Aplicadas',
    visualBreakdown: 'Distribuição dos Rendimentos',
    netPaySegment: 'Salário Líquido',
    taxSegment: 'Impostos',
    deductionSegment: 'Deduções Isentas',
    periodSchedule: 'Tabela por Período de Pagamento',
    bracketBreakdownTitle: 'Detalhamento por Faixa de Renda',
    periodCol: 'Período',
    grossCol: 'Renda Bruta',
    taxCol: 'Imposto Estimado',
    netCol: 'Salário Líquido',
    bracketCol: 'Faixa de Renda',
    rateCol: 'Alíquota',
    taxableCol: 'Tributável na Faixa',
    taxOwedCol: 'Imposto da Faixa',
    copySummary: 'Copiar Resumo',
    copiedSuccess: 'Resumo copiado com sucesso!',
    printPdf: 'Imprimir / Salvar PDF',
    resetBtn: 'Redefinir',
    faqTitle: 'Perguntas Frequentes sobre Impostos',
    faqSubtitle: 'Tire suas dúvidas sobre cálculo de salário líquido e faixas progressivas.',
    faqs: [
      {
        q: 'Como funcionam as faixas de imposto progressivo?',
        a: 'Em um sistema progressivo, sua renda é dividida em fatias. Você só paga a alíquota mais alta sobre o valor que ultrapassa o limite da faixa anterior.',
      },
      {
        q: 'Qual a diferença entre alíquota marginal e efetiva?',
        a: 'A alíquota marginal incide sobre o último real ganho. A alíquota efetiva é a média real que você paga sobre todo o seu salário.',
      },
      {
        q: 'Meus dados são salvos na nuvem?',
        a: 'Não. O TaxTally funciona 100% dentro do seu navegador sem transmissão a servidores.',
      },
      {
        q: 'O que é dedução padrão?',
        a: 'É um valor isento determinado pela legislação que diminui sua base de cálculo antes da incidência dos impostos.',
      },
      {
        q: 'Posso usar para cálculos de pessoa jurídica / MEI?',
        a: 'Sim, utilizando o modo personalizado com alíquota única de acordo com seu regime tributário.',
      },
    ],
    footerDisclaimer: 'Aviso Legal: O TaxTally é uma ferramenta de simulação educacional. Consulte um contador habilitado para declarações formais.',
    builtForPrivacy: 'Privacidade total com computação estritamente local no dispositivo.',
  },
  de: {
    siteTitle: 'TaxTally | Kostenloser Privater Netto-Gehaltsrechner & Steuern',
    siteTagline: 'Kostenloser, sofortiger und 100% privater Netto-Gehalts- & Einkommensteuerrechner.',
    metaDescription: 'Berechnen Sie Ihr echtes Nettoeinkommen und Steuerabzüge sofort. 100% browserbasierte Privatsphäre ohne Serverübertragung.',
    supportDeveloper: 'Entwickler unterstützen',
    themeToggle: 'Design umschalten',
    languageSelect: 'Sprache',
    privacyBadge: '🔒 100% Im Browser & Privat — Keine Daten verlassen Ihr Gerät',
    breadcrumbHome: 'Startseite',
    breadcrumbCalculator: 'Gehaltsrechner',
    step1Title: 'Schritt 1: Ihr Einkommen',
    step1Desc: 'Geben Sie Ihr Bruttoeinkommen und den Zahlungsrhythmus ein.',
    step2Title: 'Schritt 2: Steuertarif & Freibeträge',
    step2Desc: 'Wählen Sie Land, Steuerstatus und Freibeträge.',
    step3Title: 'Schritt 3: Sofortige Steuer-Übersicht',
    step3Desc: 'Echtzeit-Berechnung Ihres Nettogehalts, Steuersatzes und der Progressionszonen.',
    grossIncome: 'Bruttoeinkommen',
    payFrequency: 'Auszahlungsintervall',
    hoursPerWeek: 'Wöchentliche Arbeitsstunden',
    taxRegion: 'Steuerregime / Land',
    filingStatus: 'Steuerstatus / Steuerklasse',
    single: 'Alleinstehend (Klasse 1)',
    married: 'Verheiratet / Zusammen veranlagt',
    headOfHousehold: 'Alleinerziehend',
    deductionOptions: 'Freibeträge & Abzüge',
    useStandardDeduction: 'Grundfreibetrag / Pauschale anwenden',
    customDeduction: 'Individueller Freibetrag',
    customTaxRateLabel: 'Individueller Pauschalsteuersatz (%)',
    includeAddTaxes: 'Sozialabgaben / Solidaritätszuschlag einbeziehen',
    takeHomePay: 'Nettogehalt (Auszahlung)',
    totalTax: 'Gesamte Steuerabzüge',
    effectiveRate: 'Effektiver Steuersatz',
    marginalRate: 'Grenzsteuersatz',
    deductionsApplied: 'Angewendete Freibeträge',
    visualBreakdown: 'Einkommensverteilung',
    netPaySegment: 'Nettoeinkommen',
    taxSegment: 'Steuern & Abgaben',
    deductionSegment: 'Steuerfreibetrag',
    periodSchedule: 'Auszahlungsplan nach Zeitraum',
    bracketBreakdownTitle: 'Aufschlüsselung nach Progressionszonen',
    periodCol: 'Zeitraum',
    grossCol: 'Bruttobetrag',
    taxCol: 'Steuern',
    netCol: 'Nettobetrag',
    bracketCol: 'Progressionsstufe',
    rateCol: 'Steuersatz',
    taxableCol: 'Steuerpflichtig in Stufe',
    taxOwedCol: 'Steuerbetrag',
    copySummary: 'Zusammenfassung kopieren',
    copiedSuccess: 'In die Zwischenablage kopiert!',
    printPdf: 'Drucken / Als PDF speichern',
    resetBtn: 'Zurücksetzen',
    faqTitle: 'Häufig gestellte Fragen (FAQ)',
    faqSubtitle: 'Wichtige Informationen zu Progression, Grenzsteuersatz und Nettoeinkommen.',
    faqs: [
      {
        q: 'Wie funktioniert die Steuerprogression?',
        a: 'Bei der Progression wird das Einkommen stufenweise versteuert. Der höhere Steuersatz gilt immer nur für den Betrag, der die jeweilige Stufe überschreitet.',
      },
      {
        q: 'Was ist der Unterschied zwischen Grenzsteuersatz und effektivem Steuersatz?',
        a: 'Der Grenzsteuersatz ist die Steuer auf den letzten verdienten Euro. Der effektive Steuersatz ist der tatsächliche Durchschnittssatz auf Ihr gesamtes Einkommen.',
      },
      {
        q: 'Werden meine Gehaltsdaten gespeichert?',
        a: 'Nein. TaxTally arbeitet zu 100% lokal in Ihrem Browser. Es findet keinerlei Datenübertragung an Server statt.',
      },
      {
        q: 'Was ist der Grundfreibetrag?',
        a: 'Der Grundfreibetrag sichert das steuerfreie Existenzminimum und wird vor der Steuerberechnung vom Brutto abgezogen.',
      },
      {
        q: 'Kann ich den Rechner für Selbstständige nutzen?',
        a: 'Ja, über den benutzerdefinierten Modus können Sie individuelle Pauschalsteuern exakt berechnen.',
      },
    ],
    footerDisclaimer: 'Hinweis: TaxTally ist ein unverbindliches Informationswerkzeug. Für offizielle Steuererklärungen wenden Sie sich an einen Steuerberater.',
    builtForPrivacy: 'Streng vertraulich mit lokaler In-Browser-Berechnung ohne externe Server.',
  },
  fr: {
    siteTitle: 'TaxTally | Calculateur Gratuit de Salaire Net et Impôts',
    siteTagline: 'Calculateur de salaire net et impôts instantané, gratuit et 100% privé.',
    metaDescription: 'Calculez votre salaire net réel et votre impôt sur le revenu instantanément. 100% privé dans votre navigateur sans serveur.',
    supportDeveloper: 'Soutenir le Développeur',
    themeToggle: 'Changer de Thème',
    languageSelect: 'Langue',
    privacyBadge: '🔒 100% Dans le Navigateur & Privé — Aucune donnée ne quitte votre appareil',
    breadcrumbHome: 'Accueil',
    breadcrumbCalculator: 'Calculateur de Salaire & Impôts',
    step1Title: 'Étape 1 : Vos Revenus',
    step1Desc: 'Saisissez vos revenus bruts et la fréquence de versement.',
    step2Title: 'Étape 2 : Régime Fiscal & Déductions',
    step2Desc: 'Sélectionnez votre pays, statut fiscal et abattements.',
    step3Title: 'Étape 3 : Tally & Décomposition',
    step3Desc: 'Analyse en direct de votre salaire net, taux effectif et tranches d\'imposition.',
    grossIncome: 'Revenu Brut',
    payFrequency: 'Fréquence de Paiement',
    hoursPerWeek: 'Heures Travaillées par Semaine',
    taxRegion: 'Régime Fiscal / Pays',
    filingStatus: 'Situation Familiale',
    single: 'Célibataire',
    married: 'Marié / Pacsé',
    headOfHousehold: 'Chef de Famille',
    deductionOptions: 'Déductions & Abattements',
    useStandardDeduction: 'Appliquer l\'Abattement Forfaitaire Standard',
    customDeduction: 'Abattement Personnalisé',
    customTaxRateLabel: 'Taux d\'Imposition Forfaitaire (%)',
    includeAddTaxes: 'Inclure les cotisations sociales régionales',
    takeHomePay: 'Salaire Net à Payer',
    totalTax: 'Impôt Total Estimé',
    effectiveRate: 'Taux Effectif d\'Imposition',
    marginalRate: 'Taux Marginal d\'Imposition',
    deductionsApplied: 'Total des Déductions Appliquées',
    visualBreakdown: 'Répartition des Revenus',
    netPaySegment: 'Salaire Net',
    taxSegment: 'Impôts et Cotisations',
    deductionSegment: 'Revenus Non Imposables',
    periodSchedule: 'Échéancier Détaillé des Revenus',
    bracketBreakdownTitle: 'Décomposition par Tranches d\'Imposition',
    periodCol: 'Période',
    grossCol: 'Revenu Brut',
    taxCol: 'Impôt Estimé',
    netCol: 'Salaire Net',
    bracketCol: 'Tranche d\'Imposition',
    rateCol: 'Taux de la Tranche',
    taxableCol: 'Imposable dans la Tranche',
    taxOwedCol: 'Impôt Dû',
    copySummary: 'Copier le Résumé',
    copiedSuccess: 'Résumé copié dans le presse-papiers !',
    printPdf: 'Imprimer / Enregistrer en PDF',
    resetBtn: 'Réinitialiser',
    faqTitle: 'Foire Aux Questions & Fiscalité',
    faqSubtitle: 'Comprendre les tranches progressives et votre salaire net.',
    faqs: [
      {
        q: 'Comment fonctionne le barème progressif de l\'impôt ?',
        a: 'Vos revenus sont répartis en tranches. Seule la partie du revenu située dans chaque tranche est taxée au pourcentage correspondant.',
      },
      {
        q: 'Quelle est la différence entre taux marginal et taux effectif ?',
        a: 'Le taux marginal correspond au taux appliqué au dernier euro perçu. Le taux effectif est le pourcentage moyen réel de votre revenu total versé en impôt.',
      },
      {
        q: 'Mes données personnelles sont-elles conservées ?',
        a: 'Non. TaxTally s\'exécute entièrement dans votre navigateur. Aucune donnée n\'est envoyée à des serveurs tiers.',
      },
      {
        q: 'Qu\'est-ce que l\'abattement forfaitaire ?',
        a: 'C\'est une déduction légale soustraite de vos revenus bruts avant le calcul de l\'impôt.',
      },
      {
        q: 'Puis-je l\'utiliser pour des revenus d\'indépendant ?',
        a: 'Oui, le mode personnalisé permet de simuler un taux forfaitaire adapté aux micro-entrepreneurs.',
      },
    ],
    footerDisclaimer: 'Avertissement : TaxTally est un simulateur indicatif. Rapprochez-vous d\'un expert-comptable pour vos démarches officielles.',
    builtForPrivacy: 'Conçu sans serveur, avec respect strict de la confidentialité.',
  },
  ja: {
    siteTitle: 'TaxTally | 完全無料・手取り給与＆所得税計算ツール',
    siteTagline: '完全無料・即時・プライベートな所得税・手取り給与計算機。',
    metaDescription: '額面給与から手取り額と所得税額を瞬時に計算。サーバー送信なし、ブラウザ内完結のプライベート税額計算ツール。',
    supportDeveloper: '開発者をサポート',
    themeToggle: 'テーマ切り替え',
    languageSelect: '言語',
    privacyBadge: '🔒 100% ブラウザ完結・完全プライベート — データは端末外に送信されません',
    breadcrumbHome: 'ホーム',
    breadcrumbCalculator: '所得税・給与計算機',
    step1Title: 'ステップ 1: 収入の入力',
    step1Desc: '額面収入と支払いサイクルを入力します。',
    step2Title: 'ステップ 2: 税制区分と控除',
    step2Desc: '対象国・税制区分、配偶者控除、各種控除額を設定します。',
    step3Title: 'ステップ 3: 手取り・税額の内訳',
    step3Desc: '手取り給与、実効税率、累進課税ブラケットごとの詳細をリアルタイム表示。',
    grossIncome: '額面収入',
    payFrequency: '給与サイクル',
    hoursPerWeek: '週労働時間',
    taxRegion: '税制・地域プリセット',
    filingStatus: '申告区分',
    single: '単身 / 単独申告',
    married: '既婚 / 共同申告',
    headOfHousehold: '世帯主',
    deductionOptions: '基礎控除・各種所得控除',
    useStandardDeduction: '公式の基礎控除・標準控除を適用',
    customDeduction: 'カスタム控除額',
    customTaxRateLabel: 'カスタム一律税率 (%)',
    includeAddTaxes: '社会保険料・地域付加税を算入する',
    takeHomePay: '手取り金額 (Net)',
    totalTax: '推定税金・控除総額',
    effectiveRate: '実効税率 (実質負担率)',
    marginalRate: '限界税率 (最高適用税率)',
    deductionsApplied: '適用された控除合計',
    visualBreakdown: '収入配分の視覚的内訳',
    netPaySegment: '手取り受取額',
    taxSegment: '税金・公的控除',
    deductionSegment: '非課税控除枠',
    periodSchedule: '期間別給与スケジュール',
    bracketBreakdownTitle: '累進税率ブラケット別の税額内訳',
    periodCol: '期間',
    grossCol: '額面支給額',
    taxCol: '控除税額',
    netCol: '手取り支給額',
    bracketCol: '税率ブラケット範囲',
    rateCol: '適用税率',
    taxableCol: '課税対象額',
    taxOwedCol: '発生税額',
    copySummary: '計算結果をコピー',
    copiedSuccess: 'クリップボードにコピーしました！',
    printPdf: '印刷 / PDFとして保存',
    resetBtn: 'リセット',
    faqTitle: 'よくある質問と税務ガイド',
    faqSubtitle: '累進課税、手取り計算、控除の仕組みについての解説。',
    faqs: [
      {
        q: '累進課税制度とはどのような仕組みですか？',
        a: '収入全体に高い税率がかかるのではなく、設定された枠（ブラケット）を超えた分に対してのみ高い税率が適用される仕組みです。そのため、昇給によって手取りが減ることはありません。',
      },
      {
        q: '実効税率と限界税率の違いは何ですか？',
        a: '限界税率は最後に稼いだ1単位に対してかかる最高税率です。実効税率は、額面全体に対して実際に支払う税金の平均割合（総税額 ÷ 額面収入）を指します。',
      },
      {
        q: '入力した給与や個人データはサーバーに保存されますか？',
        a: '一切保存されません。TaxTallyはすべて閲覧中の端末（ブラウザ）内で計算を実行しており、外部サーバーへの通信は行われません。',
      },
      {
        q: '基礎控除や所得控除はどのように機能しますか？',
        a: '額面収入から控除額を差し引いた後の金額が「課税所得」となり、その金額を基に税率が適用されます。控除が大きいほど課税所得が減り、税金が安くなります。',
      },
      {
        q: 'フリーランスや個人事業主の試算にも使えますか？',
        a: 'はい。「カスタムモード」を選択することで、任意の税率や経費控除額を設定した正確なシミュレーションが可能です。',
      },
    ],
    footerDisclaimer: '免責事項: TaxTallyは情報提供と概算シミュレーションを目的としています。正式な確定申告や税務手続きは税理士や所轄税務署にご相談ください。',
    builtForPrivacy: 'サーバーレス・完全端末内計算による厳格なプライバシー設計。',
  },
};
