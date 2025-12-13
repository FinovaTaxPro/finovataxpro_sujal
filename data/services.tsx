// lib/data/services.ts
// data/services.ts

export interface Service {
  slug: string;
  title: string;
  icon: string;
  short: string;
  price: number;
  price_display: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  requirements: string[];
  deliverables: string[];
  timeline: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  icon: string;
  description: string;
  services: Service[];
}

export const servicesData: Record<string, ServiceCategory> = {
  'registration': {
    title: 'Registration',
    slug: 'registration',
    icon: '📝',
    description: 'Essential business and tax registrations',
    services: [
      {
        slug: 'apply-pan',
        title: 'Apply PAN',
        icon: '💳',
        short: 'Permanent Account Number registration for individuals and businesses',
        price: 499,
        price_display: '₹499',
        category: 'Registration',
        description: 'Get your Permanent Account Number (PAN) hassle-free',
        fullDescription: 'Permanent Account Number (PAN) is a ten-character alphanumeric identifier, issued in the form of a laminated "PAN card", by the Indian Income Tax Department, to any "person" who applies for it or to whom the department allot the number without an application.',
        features: [
          'Online application processing',
          'Document verification',
          'Assistance with corrections',
          'Track status updates',
          'Physical card delivery'
        ],
        requirements: [
          'Proof of Identity',
          'Proof of Address',
          'Proof of Date of Birth',
          'Photographs'
        ],
        deliverables: [
          'PAN Card (Physical)',
          'e-PAN (Digital)'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'apply-tan',
        title: 'Apply TAN',
        icon: '🔢',
        short: 'Tax Deduction and Collection Account Number registration',
        price: 999,
        price_display: '₹999',
        category: 'Registration',
        description: 'Obtain your Tax Deduction Account Number (TAN) quickly',
        fullDescription: 'TAN or Tax Deduction and Collection Account Number is a 10-digit alpha-numeric number required to be obtained by all persons who are responsible for deducting or collecting tax. It is mandatory to quote TAN in all TDS/TCS returns, payment challans, and certificates.',
        features: [
          'Application filing (Form 49B)',
          'Error-free processing',
          'Quick allotment',
          'Advisory on TDS compliance'
        ],
        requirements: [
          'Organization details',
          'PAN of the entity',
          'Address proof',
          'Authorized signatory details'
        ],
        deliverables: [
          'TAN Allotment Letter'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'udyam-registration',
        title: 'UDYAM Registration',
        icon: '🏭',
        short: 'Get MSME benefits, loans and subsidies',
        price: 999,
        price_display: '₹999',
        category: 'Registration',
        description: 'Udyam registration for MSME benefits',
        fullDescription: 'MSME (Udyam) Registration provides recognition and numerous benefits to micro, small, and medium enterprises including priority sector lending, collateral-free loans, subsidies on electricity bills, patent registration, and eligibility for government tenders.',
        features: [
          'Online Udyam registration',
          'Permanent registration number',
          'No renewal required - lifetime validity',
          'Government benefits access',
          'Subsidy eligibility certificate',
          'Tender participation rights'
        ],
        requirements: [
          'Aadhaar number',
          'PAN card',
          'Business name and type',
          'Investment and turnover details',
          'Bank account details',
          'Business address'
        ],
        deliverables: [
          'Udyam Registration Number (URN)',
          'Udyam Registration Certificate',
          'Digital certificate download',
          'Benefits guide document'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'digital-signature',
        title: 'Digital Signature',
        icon: '🔐',
        short: 'Class 3 Digital Signature Certificate (DSC) for e-filing',
        price: 1499,
        price_display: '₹1,499',
        category: 'Registration',
        description: 'Secure Class 3 Digital Signature Certificate for individuals and organizations',
        fullDescription: 'A Digital Signature Certificate (DSC) allows you to sign documents digitally. It is mandatory for various government filings including MCA, GST, Income Tax, and e-tenders. faster, safer, and cleaner way of signing documents.',
        features: [
          'Class 3 DSC (Highest security)',
          'Signature + Encryption',
          'USB Token included',
          'Paperless approval process',
          'Valid for 2 years'
        ],
        requirements: [
          'Aadhaar Card',
          'PAN Card',
          'Mobile number linked with Aadhaar',
          'Email ID',
          'Video verification'
        ],
        deliverables: [
          'Digital Signature Certificate',
          'USB Token'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: '12a-80g-registration',
        title: '12A and 80G Registration',
        icon: '🎗️',
        short: 'Tax exemption certificates for NGOs and Trusts',
        price: 14999,
        price_display: '₹14,999',
        category: 'Registration',
        description: 'Obtain 12A and 80G registration for tax benefits',
        fullDescription: '12A registration allows an NGO to get income tax exemption on its surplus income. 80G registration allows donors to claim tax deduction on donations made to the NGO. These are critical for the financial sustainability of any non-profit organization.',
        features: [
          'Form 10A filing',
          'Documentation drafting',
          'Department follow-up',
          'Query resolution',
          'Provisional and final registration'
        ],
        requirements: [
          'Trust Deed / Bylaws / MOA & AOA',
          'PAN of NGO',
          'Trustee details',
          'Financial statements',
          'Activity report'
        ],
        deliverables: [
          '12A Registration Certificate',
          '80G Registration Certificate'
        ],
        timeline: '30-45 working days'
      },
      {
        slug: 'import-export-code',
        title: 'Import Export Code (IEC)',
        icon: '🌍',
        short: 'Mandatory code for import/export business',
        price: 2499,
        price_display: '₹2,499',
        category: 'Registration',
        description: 'IEC registration for international trade',
        fullDescription: 'Import Export Code (IEC) is a 10-digit code mandatory for any business engaged in importing or exporting goods and services. It is issued by the Directorate General of Foreign Trade (DGFT) and has lifetime validity with no renewal required.',
        features: [
          'IEC number within 7 days',
          'Complete documentation support',
          'DGFT filing and follow-up',
          'Digital certificate',
          'No renewal required - lifetime validity',
          'Bank and customs registration'
        ],
        requirements: [
          'Business PAN card',
          'Bank certificate with IFSC and SWIFT code',
          'Cancelled cheque',
          'Business address proof',
          'ID proof of proprietor/directors',
          'Business registration documents'
        ],
        deliverables: [
          '10-digit IEC number',
          'IEC certificate from DGFT',
          'Digital certificate download',
          'Bank registration confirmation'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'esi-registration',
        title: 'ESI Registration',
        icon: '🏥',
        short: 'Employee State Insurance registration for employee welfare',
        price: 2999,
        price_display: '₹2,999',
        category: 'Registration',
        description: 'Register for ESI to provide social security to employees',
        fullDescription: 'ESI Registration is mandatory for entities employing 10 or more persons (20 in some states) with wages up to ₹21,000. It provides medical, cash, maternity, disability, and dependent benefits to employees.',
        features: [
          'Employer registration',
          'Employee data upload',
          'ESI code generation',
          'Compliance guidance',
          'Document management'
        ],
        requirements: [
          'Business Registration Certificate',
          'PAN Card',
          'GST Certificate',
          'Employee details',
          'Bank details',
          'Address proof'
        ],
        deliverables: [
          'ESI Code Number (17 digits)',
          'Registration Letter',
          'Employee Insurance Numbers'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'pf-registration',
        title: 'PF Registration',
        icon: '💰',
        short: 'Provident Fund registration for employee future security',
        price: 2999,
        price_display: '₹2,999',
        category: 'Registration',
        description: 'EPF registration for organizations',
        fullDescription: 'Employees Provident Fund (EPF) registration is mandatory for organizations with 20 or more employees. It is a retirement benefit scheme helping employees save a fraction of their salary every month, which can be used upon retirement.',
        features: [
          'Establishment registration',
          'DSC registration',
          'Document verification',
          'Code number allotment',
          'Compliance advisory'
        ],
        requirements: [
          'Business PAN',
          'Certificate of Incorporation/Registration',
          'Director/Partner details',
          'Employee details',
          'Bank proof',
          'Digital Signature'
        ],
        deliverables: [
          'PF Code Number',
          'Registration Certificate',
          'Access to Employer Portal'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'fssai-license',
        title: 'FSSAI Registration and License',
        icon: '🍽️',
        short: 'Food business license registration',
        price: 2999,
        price_display: '₹2,999',
        category: 'Registration',
        description: 'FSSAI license for food businesses',
        fullDescription: 'FSSAI (Food Safety and Standards Authority of India) license is mandatory for all food businesses including manufacturing, storage, distribution, and retail. We help you obtain the appropriate license (Basic/State/Central) based on your business size and type.',
        features: [
          'License type consultation',
          'Complete application filing',
          'Documentation support',
          'Inspection assistance',
          'License certificate',
          'Renewal reminders'
        ],
        requirements: [
          'Business registration proof',
          'Food category details',
          'Premises layout plan',
          'ID and address proof',
          'List of food products',
          'NOC from municipality (if required)'
        ],
        deliverables: [
          'FSSAI registration/license number',
          'License certificate',
          'Food safety plan',
          'Compliance guidelines'
        ],
        timeline: '15-30 working days'
      },
      {
        slug: 'trade-registration',
        title: 'Trade Registration',
        icon: '🏪',
        short: 'Trade license for operating business',
        price: 3999,
        price_display: '₹3,999',
        category: 'Registration',
        description: 'Municipal trade license registration',
        fullDescription: 'A Trade License is a document/certificate that gives the permission to the applicant (person seeking to open a business) to commence a particular trade or business in a particular area/location.',
        features: [
          'Application filing with municipal corporation',
          'Document processing',
          'Fee payment assistance',
          'Follow-up with authorities',
          'License issuance'
        ],
        requirements: [
          'Premises proof (Rent agreement/Ownership)',
          'ID Proof of applicant',
          'PAN Card',
          'Business details',
          'NOC from neighbors (if applicable)'
        ],
        deliverables: [
          'Trade License Certificate'
        ],
        timeline: '15-20 working days'
      },
      {
        slug: 'startup-registration',
        title: 'Startup',
        icon: '🚀',
        short: 'Startup India recognition certificate',
        price: 4999,
        price_display: '₹4,999',
        category: 'Registration',
        description: 'Registration under Startup India scheme',
        fullDescription: 'Get recognized as a Startup by DPIIT to avail various benefits such as tax exemptions, self-certification compliance, and easier public procurement norms. We assist in the complete registration process.',
        features: [
          'Eligibility check',
          'Profile creation',
          'Application drafting',
          'Document upload',
          'Recognition certificate',
          'Tax exemption application support'
        ],
        requirements: [
          'Certificate of Incorporation',
          'Write-up on nature of business',
          'Pitch deck / Website link',
          'Director details',
          'Patent/Trademark details (if any)'
        ],
        deliverables: [
          'DPIIT Recognition Certificate',
          'Startup India Profile'
        ],
        timeline: '10-15 working days'
      }
    ]
  },
  'loan': {
    title: 'Loan',
    slug: 'loan',
    icon: '💰',
    description: 'Financial assistance and loan services',
    services: [
      {
        slug: 'msme-loan',
        title: 'MSME Loan',
        icon: '🏭',
        short: 'Collateral-free loans for small businesses',
        price: 3999,
        price_display: '₹3,999',
        category: 'Loan',
        description: 'Assistance for MSME loans',
        fullDescription: 'We assist MSMEs in obtaining loans under various government schemes like MUDRA and CGTMSE. These loans are often collateral-free and come with attractive interest rates to boost small businesses.',
        features: [
          'Collateral-free options',
          'Government scheme benefits',
          'Low interest rates',
          'Documentation support',
          'Fast processing'
        ],
        requirements: [
          'Udyam Registration',
          'Business Plan',
          'KYC Documents',
          'Bank Statements',
          'ITR (if available)'
        ],
        deliverables: [
          'Loan Application Submission',
          'Project Report',
          'Sanction Letter assistance'
        ],
        timeline: '15-20 working days'
      },
      {
        slug: 'car-loan',
        title: 'Car Loan',
        icon: '🚗',
        short: 'Get the best deal on your car loan',
        price: 999,
        price_display: '₹999',
        category: 'Loan',
        description: 'Auto loan assistance',
        fullDescription: 'We help you find and apply for the best car loan offers from top banks. Compare interest rates, processing fees, and tenure to choose the right loan for your new or used car.',
        features: [
          'Compare multiple banks',
          'Low interest rates',
          'Quick approval',
          'Minimal documentation',
          'Doorstep service'
        ],
        requirements: [
          'Income Proof',
          'Identity Proof',
          'Address Proof',
          'Vehicle Quotation',
          'Bank Statements'
        ],
        deliverables: [
          'Loan Sanction',
          'Disbursement Support'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'home-loan',
        title: 'Home Loan',
        icon: '🏠',
        short: 'Financing for your dream home',
        price: 1999,
        price_display: '₹1,999',
        category: 'Loan',
        description: 'Home loan consultation and application',
        fullDescription: 'Expert assistance for home loans. Whether you are buying a flat, constructing a house, or renovating, we guide you through the process, helping you get the lowest interest rates and maximum eligibility.',
        features: [
          'Lowest interest rates',
          'Maximum loan eligibility',
          'Balance transfer options',
          'Legal check support',
          'Pradhan Mantri Awas Yojana benefits'
        ],
        requirements: [
          'Property Documents',
          'Income Documents',
          'KYC Documents',
          'Bank Statements',
          'Employment Proof'
        ],
        deliverables: [
          'Loan Sanction Letter',
          'Legal clearance support'
        ],
        timeline: '10-15 working days'
      },
      {
        slug: 'business-loan',
        title: 'Business Loan',
        icon: '💼',
        short: 'Funds to grow your business',
        price: 4999,
        price_display: '₹4,999',
        category: 'Loan',
        description: 'Unsecured business loans for expansion',
        fullDescription: 'Get unsecured business loans to expand your operations, purchase inventory, or manage cash flow. We work with multiple banks and NBFCs to get you the capital you need without collateral.',
        features: [
          'Unsecured loans',
          'Flexible repayment',
          'Quick disbursal',
          'Minimal paperwork',
          'High loan amount'
        ],
        requirements: [
          'Business Registration',
          'ITR for 2-3 years',
          'Bank Statements',
          'Business Proof',
          'KYC of owners'
        ],
        deliverables: [
          'Loan Approval',
          'Disbursement'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'personal-loan',
        title: 'Personal Loan',
        icon: '👤',
        short: 'Instant personal loans for your needs',
        price: 999,
        price_display: '₹999',
        category: 'Loan',
        description: 'Personal loan assistance',
        fullDescription: 'Quick and easy personal loans for medical emergencies, travel, wedding, or any other personal requirement. We help you choose the lender with the best terms and fastest processing.',
        features: [
          'Instant approval options',
          'No collateral',
          'Flexible tenure',
          'Minimum documentation',
          'Competitive rates'
        ],
        requirements: [
          'Salary Slips / Income Proof',
          'Bank Statements',
          'KYC Documents',
          'Employment Proof'
        ],
        deliverables: [
          'Loan Sanction',
          'Cash in account'
        ],
        timeline: '2-4 working days'
      }
    ]
  },
  'compliance': {
    title: 'Compliance',
    slug: 'compliance',
    icon: '✅',
    description: 'Regular compliance and filing services',
    services: [
      {
        slug: 'bookkeeping',
        title: 'Bookkeeping',
        icon: '📚',
        short: 'Maintain your accounts professionally',
        price: 2999,
        price_display: '₹2,999/month',
        category: 'Compliance',
        description: 'Professional bookkeeping services',
        fullDescription: 'Outsource your bookkeeping to experts. We maintain your ledgers, accounts payable/receivable, and bank reconciliation ensuring your books are always up-to-date and ready for tax filing.',
        features: [
          'Daily/Weekly transaction recording',
          'Bank reconciliation',
          'Financial reporting',
          'Cloud accounting software',
          'Vendor management'
        ],
        requirements: [
          'Bank and Credit Card statements',
          'Invoices and Bills',
          'Expense receipts',
          'Payroll data'
        ],
        deliverables: [
          'Updated Books of Accounts',
          'Monthly Financial Statements',
          'Profit & Loss Report'
        ],
        timeline: 'Monthly'
      },
      {
        slug: 'proprietorship-compliance',
        title: 'Proprietorship Compliance',
        icon: '👤',
        short: 'Annual compliance for sole proprietors',
        price: 4999,
        price_display: '₹4,999',
        category: 'Compliance',
        description: 'Complete compliance handling for proprietorships',
        fullDescription: 'Proprietorships need to manage income tax and GST filings. We provide a comprehensive package to handle all statutory compliances for your sole proprietorship business.',
        features: [
          'ITR Filing',
          'GST Return Filing',
          'TDS Compliance (if applicable)',
          'Financial Statement preparation',
          'Tax planning'
        ],
        requirements: [
          'Bank statements',
          'Sales/Purchase details',
          'Expense proofs',
          'GST login'
        ],
        deliverables: [
          'Filed Returns',
          'Computation of Income',
          'Compliance Certificate'
        ],
        timeline: 'Annually'
      },
      {
        slug: 'partnership-compliance',
        title: 'Partnership Compliance',
        icon: '🤝',
        short: 'Annual compliance for partnership firms',
        price: 6999,
        price_display: '₹6,999',
        category: 'Compliance',
        description: 'Compliance services for partnership firms',
        fullDescription: 'Partnership firms are required to file income tax returns (ITR-5) and maintain proper books of accounts. We handle all annual compliances including tax audit assistance if turnover exceeds limits.',
        features: [
          'ITR-5 Filing',
          'Financial Statements',
          'Tax Audit Support',
          'GST Compliance',
          'Partner Salary calculations'
        ],
        requirements: [
          'Partnership Deed',
          'Financial data',
          'Bank statements',
          'Partner details'
        ],
        deliverables: [
          'Filed ITR',
          'Balance Sheet & P&L',
          'Tax Audit Report (if applicable)'
        ],
        timeline: 'Annually'
      },
      {
        slug: 'esi-return-filing',
        title: 'ESI Return Filing',
        icon: '🏥',
        short: 'Monthly ESI contribution filing',
        price: 999,
        price_display: '₹999/month',
        category: 'Compliance',
        description: 'Timely filing of ESI returns',
        fullDescription: 'Employers registered under ESI must file monthly contributions and half-yearly returns. We ensure timely filing to avoid penalties and interest, ensuring your employees get their benefits.',
        features: [
          'Monthly contribution generation',
          'Challan creation',
          'Return filing',
          'Employee data management',
          'Compliance alerts'
        ],
        requirements: [
          'Wages data',
          'Attendance records',
          'ESI login credentials',
          'Employee details'
        ],
        deliverables: [
          'Filed ESI Return',
          'Payment Challan',
          'Contribution History'
        ],
        timeline: 'Monthly'
      },
      {
        slug: 'pf-return-filing',
        title: 'PF Return Filing',
        icon: '💰',
        short: 'Monthly EPF return filing service',
        price: 999,
        price_display: '₹999/month',
        category: 'Compliance',
        description: 'Monthly PF Electronic Challan Return (ECR) filing',
        fullDescription: 'Timely filing of PF returns is crucial for employers. We handle the preparation and filing of the monthly Electronic Challan cum Return (ECR) and generation of payment challans.',
        features: [
          'ECR preparation',
          'UAN generation for new employees',
          'Challan generation',
          'KYC update assistance',
          'Withdrawal support'
        ],
        requirements: [
          'Salary sheet',
          'PF login credentials',
          'New joiner details',
          'Exit details'
        ],
        deliverables: [
          'Filed PF Return (ECR)',
          'Payment Receipt',
          'Monthly Report'
        ],
        timeline: 'Monthly'
      },
      {
        slug: 'hr-payroll-services',
        title: 'HR & Payroll Services',
        icon: '👥',
        short: 'End-to-end payroll management',
        price: 100,
        price_display: '₹100/emp',
        category: 'Compliance',
        description: 'Complete payroll outsourcing',
        fullDescription: 'We manage your entire payroll process including salary calculation, tax deduction (TDS), PF/ESI computations, payslip generation, and transfer advice. Focus on your business while we handle your workforce payments.',
        features: [
          'Salary processing',
          'Payslip generation',
          'Tax calculation',
          'Statutory compliance (PF/ESI/PT)',
          'Leave management'
        ],
        requirements: [
          'Employee Master Data',
          'Attendance inputs',
          'Salary structure',
          'Investment declarations'
        ],
        deliverables: [
          'Monthly Payslips',
          'Salary Sheet',
          'Tax Reports',
          'Bank Transfer File'
        ],
        timeline: 'Monthly'
      },
      {
        slug: 'fssai-renewal',
        title: 'FSSAI Renewal',
        icon: '🍽️',
        short: 'Renew your food license',
        price: 1999,
        price_display: '₹1,999',
        category: 'Compliance',
        description: 'Renewal of FSSAI Registration or License',
        fullDescription: 'FSSAI License is valid for 1 to 5 years. It must be renewed before expiry to continue food business operations. We assist in filing the renewal application with necessary declarations.',
        features: [
          'Renewal application filing',
          'Document verification',
          'Avoidance of late fees',
          'Extended validity',
          'Compliance check'
        ],
        requirements: [
          'Existing License',
          'Address Proof',
          'ID Proof',
          'Declaration of valid details'
        ],
        deliverables: [
          'Renewed FSSAI Certificate'
        ],
        timeline: '10-15 working days'
      },
      {
        slug: 'roc-annual-filing',
        title: 'Annual ROC Filing',
        icon: '📅',
        short: 'MCA annual compliance for companies',
        price: 4999,
        price_display: '₹4,999',
        category: 'Compliance',
        description: 'Complete annual ROC compliance with MCA',
        fullDescription: 'Every registered company must file annual returns (MGT-7) and financial statements (AOC-4) with the Registrar of Companies (ROC). Our service ensures timely filing to avoid heavy penalties up to ₹5 lakhs.',
        features: [
          'AOC-4 and MGT-7 filing',
          'Financial statement preparation',
          'Board meeting minutes',
          'Penalty avoidance',
          'Director KYC'
        ],
        requirements: [
          'Financial statements',
          'Director details',
          'Board minutes',
          'DSC of directors'
        ],
        deliverables: [
          'Filed AOC-4 and MGT-7',
          'Compliance Certificate',
          'Acknowledgement Receipts'
        ],
        timeline: '5-7 working days'
      }
    ]
  },
  'mca': {
    title: 'MCA',
    slug: 'mca',
    icon: '🏛️',
    description: 'Ministry of Corporate Affairs filings and services',
    services: [
        {
        slug: 'inc-20a',
        title: 'Commencement of Business (INC-20A)',
        icon: '🚀',
        short: 'File declaration of commencement of business',
        price: 1999,
        price_display: '₹1,999',
        category: 'MCA',
        description: 'Mandatory filing for new companies',
        fullDescription: 'Every company incorporated after November 2018 must file form INC-20A within 180 days of incorporation. It declares that the shareholders have paid the share capital value.',
        features: [
          'Form INC-20A filing',
          'Professional certification',
          'Challan generation',
          'Compliance status update'
        ],
        requirements: [
          'Bank statement showing capital infusion',
          'Photograph of registered office',
          'Certificate of Incorporation'
        ],
        deliverables: [
          'Approved INC-20A',
          'Challan receipt'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'winding-up-company',
        title: 'Winding Up-Company',
        icon: '🔒',
        short: 'Close your private limited company legally',
        price: 14999,
        price_display: '₹14,999',
        category: 'MCA',
        description: 'Process to close a company (Strike Off)',
        fullDescription: 'If your company is not carrying on any business, it is better to close it legally to avoid annual compliance costs and penalties. We assist in filing Form STK-2 for striking off the company name.',
        features: [
          'STK-2 preparation and filing',
          'Affidavits and Indemnity Bonds',
          'Statement of Accounts preparation',
          'Professional certification'
        ],
        requirements: [
          'Statement of Accounts',
          'Indemnity Bond by Directors',
          'Affidavit by Directors',
          'Bank closure certificate'
        ],
        deliverables: [
          'Filed STK-2',
          'Strike off notice'
        ],
        timeline: '30-60 working days'
      },
       {
        slug: 'winding-up-llp',
        title: 'Winding Up-LLP',
        icon: '🔒',
        short: 'Legally close your LLP',
        price: 9999,
        price_display: '₹9,999',
        category: 'MCA',
        description: 'Closure of Limited Liability Partnership',
        fullDescription: 'Process to close a defunct LLP by filing Form 24. We handle the complete documentation and filing process to legally shut down your LLP.',
        features: [
          'Form 24 preparation',
          'Statement of Accounts',
          'Affidavits from Partners',
          'Professional certification'
        ],
        requirements: [
          'Financial Statement (Nil assets/liabilities)',
          'Consent of all partners',
          'Affidavits and Indemnity',
          'ITR acknowledgement'
        ],
        deliverables: [
          'Filed Form 24',
          'Closure confirmation'
        ],
        timeline: '30-45 working days'
      },
      {
        slug: 'share-transfer',
        title: 'Share Transfer',
        icon: '🔄',
        short: 'Transfer shares between shareholders',
        price: 2999,
        price_display: '₹2,999',
        category: 'MCA',
        description: 'Formalize transfer of company shares',
        fullDescription: 'Transfer of shares in a private limited company requires execution of Share Transfer Deed (SH-4) and payment of stamp duty. We help you with the documentation and board resolutions.',
        features: [
          'SH-4 Deed drafting',
          'Stamp duty calculation',
          'Board Resolution drafting',
          'Share Certificate endorsement'
        ],
        requirements: [
          'Share Certificates',
          'Transferor and Transferee details',
          'Consideration amount',
          'Board approval'
        ],
        deliverables: [
          'Executed Transfer Deed',
          'Board Resolution',
          'Updated Share Certificates'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'authorized-capital-increase',
        title: 'Authorized Capital Increase',
        icon: '📈',
        short: 'Increase your company\'s capital capacity',
        price: 3999,
        price_display: '₹3,999',
        category: 'MCA',
        description: 'File Form SH-7 to increase authorized capital',
        fullDescription: 'To issue more shares (investment), you may need to increase the authorized capital of the company. This involves conducting a meeting, passing a resolution, and filing Form SH-7 with the ROC.',
        features: [
          'EGM Notice and Resolution',
          'Form SH-7 filing',
          'MOA alteration',
          'Compliance advisory'
        ],
        requirements: [
          'Existing MOA/AOA',
          'Proposed capital amount',
          'Shareholder breakdown'
        ],
        deliverables: [
          'Approved SH-7',
          'Updated Company Master Data',
          'Altered MOA'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'aoa-amendment',
        title: 'AOA Amendment',
        icon: '📝',
        short: 'Alter Articles of Association',
        price: 2999,
        price_display: '₹2,999',
        category: 'MCA',
        description: 'Change company rules and regulations',
        fullDescription: 'Alteration of Articles of Association might be needed for changing internal rules, adopting new regulations, or conversion of company type. We handle resolution drafting and MGT-14 filing.',
        features: [
          'Special Resolution drafting',
          'Form MGT-14 filing',
          'Altered AOA drafting',
          'ROC approval support'
        ],
        requirements: [
          'Existing AOA',
          'Proposed changes',
          'Board meeting details'
        ],
        deliverables: [
          'Filed MGT-14',
          'Updated AOA'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'moa-amendment',
        title: 'MOA Amendment',
        icon: '📝',
        short: 'Alter Memorandum of Association',
        price: 2999,
        price_display: '₹2,999',
        category: 'MCA',
        description: 'Change company objectives or capital clause',
        fullDescription: 'MOA alteration is required for changing the main objects of the company, name change, or capital clause change. We assist in the complete legal process.',
        features: [
          'Special Resolution drafting',
          'Form MGT-14 filing',
          'Altered MOA drafting',
          'Process guidance'
        ],
        requirements: [
          'Existing MOA',
          'Proposed changes',
          'Shareholder consent'
        ],
        deliverables: [
          'Filed MGT-14',
          'Updated MOA'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'dormant-status-filing',
        title: 'Dormant Status Filing',
        icon: '💤',
        short: 'Apply for dormant status (MSC-1)',
        price: 4999,
        price_display: '₹4,999',
        category: 'MCA',
        description: 'Obtain dormant status for inactive companies',
        fullDescription: 'If your company has no significant accounting transactions, you can apply for "Dormant Status" to reduce compliance burden. It saves you from being struck off and allows maintaining the company with minimal filing.',
        features: [
          'MSC-1 Form filing',
          'Statement of Affairs',
          'Board Resolution',
          'Compliance reduction'
        ],
        requirements: [
          'Financial Statement showing no transactions',
          'Director details',
          'Board approval'
        ],
        deliverables: [
          'Dormant Status Certificate'
        ],
        timeline: '15-20 working days'
      },
      {
        slug: 'llp-form-11',
        title: 'LLP Form 11 Filing',
        icon: '📄',
        short: 'Annual return filing for LLPs',
        price: 1999,
        price_display: '₹1,999',
        category: 'MCA',
        description: 'Mandatory annual return for LLP',
        fullDescription: 'LLP Form 11 is the Annual Return of Limited Liability Partnership. It contains details of partners and contributions. It must be filed within 60 days of closure of financial year (by 30th May).',
        features: [
          'Form 11 preparation',
          'Partner details verification',
          'Turnover declaration',
          'Penalty avoidance'
        ],
        requirements: [
          'LLP Agreement',
          'Contribution details',
          'Partner details',
          'DSC of Designated Partner'
        ],
        deliverables: [
          'Filed Form 11',
          'Challan Receipt'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'dpt-3-filing',
        title: 'DPT-3 Filing',
        icon: '💰',
        short: 'Return of deposits filing',
        price: 1999,
        price_display: '₹1,999',
        category: 'MCA',
        description: 'Disclosure of deposits and outstanding loans',
        fullDescription: 'Form DPT-3 is a return of deposits that companies must file to furnish information about deposits and/or outstanding receipt of loan or money other than deposits. Due date is generally 30th June.',
        features: [
          'Loan/Deposit classification',
          'DPT-3 Form preparation',
          'Auditor certificate coordination',
          'Filing with ROC'
        ],
        requirements: [
          'List of loans and deposits',
          'Ageing of loans',
          'Trust deed (if any)',
          'Statutory Auditor inputs'
        ],
        deliverables: [
          'Filed DPT-3',
          'Challan Receipt'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'adt-1-filing',
        title: 'ADT-1 Filing',
        icon: '👨‍⚖️',
        short: 'Appointment of Auditor',
        price: 1499,
        price_display: '₹1,499',
        category: 'MCA',
        description: 'Notify ROC about auditor appointment',
        fullDescription: 'Form ADT-1 is filed by a company to intimate the Registrar of Companies about the appointment of an auditor after the AGM. It must be filed within 15 days of the meeting.',
        features: [
          'Form ADT-1 preparation',
          'AGM Resolution details',
          'Auditor consent letter',
          'Filing support'
        ],
        requirements: [
          'Auditor details (Name, PAN, Membership No.)',
          'Consent letter from Auditor',
          'Board/AGM Resolution'
        ],
        deliverables: [
          'Filed ADT-1',
          'Challan Receipt'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'remove-director',
        title: 'Remove Director',
        icon: '👤',
        short: 'Process for removal/resignation of director',
        price: 2499,
        price_display: '₹2,499',
        category: 'MCA',
        description: 'Filing DIR-12 for director resignation',
        fullDescription: 'When a director resigns from a company, Form DIR-12 must be filed with the ROC within 30 days. We handle the resignation letter, board resolution, and filing process.',
        features: [
          'Resignation letter drafting',
          'Board Resolution',
          'DIR-12 filing',
          'Master Data update'
        ],
        requirements: [
          'Resignation Letter',
          'Board Meeting confirmation',
          'Director DSC'
        ],
        deliverables: [
          'Filed DIR-12',
          'Updated Company Master Data'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'director-change',
        title: 'Director Change',
        icon: '🔄',
        short: 'Add or change directors',
        price: 2999,
        price_display: '₹2,999',
        category: 'MCA',
        description: 'Appointment of new director (DIR-12)',
        fullDescription: 'Process to appoint a new director to the Board. Involves obtaining DIN, obtaining consent (DIR-2), passing resolution, and filing Form DIR-12.',
        features: [
          'DIN Application (if required)',
          'Consent Form DIR-2',
          'Appointment Letter',
          'DIR-12 filing'
        ],
        requirements: [
          'Director KYC (PAN, Aadhaar)',
          'Photo',
          'DSC',
          'Board Resolution'
        ],
        deliverables: [
          'Filed DIR-12',
          'Appointment validation',
          'Updated Master Data'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'din-reactivation',
        title: 'DIN Reactivation',
        icon: '🔓',
        short: 'Reactivate disqualified DIN',
        price: 4999,
        price_display: '₹4,999',
        category: 'MCA',
        description: 'Process to reactivate deactivated DIN',
        fullDescription: 'If a Director Identification Number (DIN) is deactivated due to non-filing of KYC, we assist in reactivating it by filing DIR-3 KYC with necessary penalties.',
        features: [
          'DIR-3 KYC preparation',
          'Penalty payment assistance',
          'DIN status check',
          'Reactivation support'
        ],
        requirements: [
          'PAN and Aadhaar',
          'Mobile and Email OTP',
          'Passport (if foreign tax resident)'
        ],
        deliverables: [
          'Reactivated DIN',
          'KYC acknowledgement'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'din-ekyc-filing',
        title: 'DIN eKYC Filing',
        icon: '🆔',
        short: 'Annual KYC for Directors',
        price: 999,
        price_display: '₹999',
        category: 'MCA',
        description: 'Mandatory annual DIR-3 KYC',
        fullDescription: 'Every person holding a DIN must complete DIR-3 KYC annually before 30th September. Failure leads to DIN deactivation and penalty of ₹5,000.',
        features: [
          'Web-KYC or Form KYC filing',
          'OTP verification',
          'Status monitoring',
          'Compliance certificate'
        ],
        requirements: [
          'DIN',
          'PAN',
          'Aadhaar',
          'Personal Mobile & Email'
        ],
        deliverables: [
          'Filed DIR-3 KYC',
          'Active status confirmation'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'registered-office-change',
        title: 'Registered Office Change',
        icon: '🏢',
        short: 'Shift company address within/outside state',
        price: 3999,
        price_display: '₹3,999',
        category: 'MCA',
        description: 'Change of registered office address',
        fullDescription: 'Process to shift registered office. Complexity varies based on whether the shift is within the same city, same state, or to another state (requires regional director approval).',
        features: [
          'INC-22 filing',
          'Board/Special Resolution',
          'Liaison with ROC/RD (for state shift)',
          'Documentation support'
        ],
        requirements: [
          'New address proof (Utility bill)',
          'NOC from owner',
          'Rent agreement'
        ],
        deliverables: [
          'Filed INC-22',
          'Updated Master Data'
        ],
        timeline: '5-10 working days'
      },
      {
        slug: 'name-change-company',
        title: 'Name Change- Company',
        icon: '🏷️',
        short: 'Change your company name',
        price: 4999,
        price_display: '₹4,999',
        category: 'MCA',
        description: 'Process to change company name',
        fullDescription: 'Changing a company name involves checking name availability (RUN), passing a special resolution, and obtaining a fresh Certificate of Incorporation.',
        features: [
          'Name availability search',
          'RUN application',
          'MGT-14 filing',
          'Information INC-24',
          'Fresh COI'
        ],
        requirements: [
          'Proposed names',
          'Board and Shareholder approval',
          'Justification for change'
        ],
        deliverables: [
          'Fresh Certificate of Incorporation',
          'Updated MOA/AOA'
        ],
        timeline: '15-20 working days'
      },
      {
        slug: 'llp-compliance',
        title: 'LLP Compliance',
        icon: '👥',
        short: 'Annual compliance package for LLPs',
        price: 4999,
        price_display: '₹4,999',
        category: 'MCA',
        description: 'End-to-end annual filling for LLP',
        fullDescription: 'Comprehensive package covering Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) filing for Limited Liability Partnerships.',
        features: [
          'Form 11 Filing',
          'Form 8 Filing',
          'Partner KYC',
          'Drafting of documents',
          'Advisory'
        ],
        requirements: [
          'LLP Financials',
          'Partner details',
          'DSC'
        ],
        deliverables: [
          'Filed Form 11 & Form 8',
          'Compliance status report'
        ],
        timeline: 'Annually'
      },
      {
        slug: 'company-compliance',
        title: 'Company Compliance',
        icon: '🏢',
        short: 'Annual compliance package for companies',
        price: 9999,
        price_display: '₹9,999',
        category: 'MCA',
        description: 'All-inclusive annual compliance for Pvt Ltd',
        fullDescription: 'Complete peace of mind package for Private Limited Companies including AOC-4, MGT-7, Director KYC, and secretarial support.',
        features: [
          'ROC Returns (AOC-4, MGT-7)',
          'Director KYC',
          'Statutory Register maintenance',
          'Minutes Book maintenance',
          'Secretarial support'
        ],
        requirements: [
          'Audited Financials',
          'Director DSC',
          'Board meeting details'
        ],
        deliverables: [
          'Filed Annual Returns',
          'Minutes and Registers',
          'Confirmation of Compliance'
        ],
        timeline: 'Annually'
      }
    ]
  },
  'income-tax': {
    title: 'Income Tax',
    slug: 'income-tax',
    icon: '📝',
    description: 'Income tax return filing and planning',
    services: [
      {
        slug: 'income-tax-filing',
        title: 'Income tax E-Filing',
        icon: '📑',
        short: 'Expert assisted ITR filing',
        price: 499,
        price_display: '₹499',
        category: 'Income Tax',
        description: 'File your income tax return with expert assistance',
        fullDescription: 'Get your Income Tax Return filed by tax experts. We help maximum tax refund and ensure complete compliance with Income Tax laws. Suitable for all types of income.',
        features: [
          'Expert consultation',
          'Tax planning advice',
          'Refund assistance',
          'Notice management',
          'Compliance check'
        ],
        requirements: [
          'Form 16/16A',
          'Bank statements',
          'Investment proofs',
          'Aadhaar & PAN'
        ],
        deliverables: [
          'Filed ITR Acknowledgement',
          'Computation of Income',
          'Tax payment challan (if any)'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'tds-return-filing',
        title: 'TDS Return Filing',
        icon: '💰',
        short: 'Quarterly TDS return filing and compliance',
        price: 1499,
        price_display: '₹1,499/quarter',
        category: 'Income Tax',
        description: 'Quarterly TDS return filing with complete reconciliation',
        fullDescription: 'TDS Return Filing service for businesses deducting tax at source. We handle quarterly filing of Forms 24Q, 26Q, 27Q, and 27EQ with complete reconciliation.',
        features: [
          'Form 24Q/26Q/27Q filing',
          'PAN verification',
          'Challan verification',
          'Form 16/16A generation',
          'Late fee advice'
        ],
        requirements: [
          'TAN number',
          'TDS Challans',
          'Deductee details',
          'Deduction details'
        ],
        deliverables: [
          'Filed TDS Return',
          'Form 16/16A',
          'Acknowledgement'
        ],
        timeline: 'Quarterly'
      },
      {
        slug: 'itr-7-filing',
        title: '(ITR-7) Return Filing',
        icon: '🏛️',
        short: 'ITR for Trusts, NGOs and Political Parties',
        price: 4999,
        price_display: '₹4,999',
        category: 'Income Tax',
        description: 'Filing ITR-7 for entities claiming exemption',
        fullDescription: 'ITR-7 is applicable for persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D). Ideal for Trusts, Political parties, Institutions, Colleges, etc.',
        features: [
          'Review of Audit Report',
          'Exemption claim (11/12)',
          'Form 10B/10BB analysis',
          'Return filing',
          'Compliance check'
        ],
        requirements: [
          'Audited Financials',
          'Audit Report (Form 10B/10BB)',
          'Registration Certificate (12A/80G)',
          'Trust Deed'
        ],
        deliverables: [
          'Filed ITR-7',
          'Computation of Income',
          'Acknowledgement'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'itr-6-filing',
        title: '(ITR-6) Return Filing',
        icon: '🏢',
        short: 'ITR filing for Companies',
        price: 2999,
        price_display: '₹2,999',
        category: 'Income Tax',
        description: 'Corporate tax return filing for companies',
        fullDescription: 'ITR-6 is mandatory for all companies (except those claiming exemption under section 11). It must be filed electronically. We handle complex corporate tax computations and MAT calculations.',
        features: [
          'Corporate tax computation',
          'MAT calculation',
          'Depreciation schedule',
          'Foreign asset reporting',
          'Audit report integration'
        ],
        requirements: [
          'Audited Financial Statements',
          'Tax Audit Report',
          'Bank Statements',
          'DSC of Director'
        ],
        deliverables: [
          'Filed ITR-6',
          'Computation of Income',
          'Acknowledgement'
        ],
        timeline: '5-7 working days'
      },
       {
        slug: 'itr-5-filing',
        title: '(ITR-5) Return Filing',
        icon: '👥',
        short: 'ITR for Firms, LLPs and AOPs',
        price: 2499,
        price_display: '₹2,499',
        category: 'Income Tax',
        description: 'Tax filing for Partnerships and LLPs',
        fullDescription: 'ITR-5 is for firms, LLPs, AOPs, BOIs, etc. We ensure correct reporting of partner\'s remuneration, interest on capital, and other specific deductions available to firms.',
        features: [
          'Partnership tax computation',
          'Partner salary/interest schedule',
          'Presumptive scheme (if applicable)',
          'Tax audit assistance',
          'Filing support'
        ],
        requirements: [
          'Financial Statements',
          'Partnership Deed',
          'Partner details',
          'Bank statements'
        ],
        deliverables: [
          'Filed ITR-5',
          'Computation of Income',
          'Acknowledgement'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'itr-4-filing',
        title: '(ITR-4) Return Filing',
        icon: '📊',
        short: 'Presumptive taxation for small businesses',
        price: 1499,
        price_display: '₹1,499',
        category: 'Income Tax',
        description: 'Sugam ITR filing under presumptive scheme',
        fullDescription: 'ITR-4 (Sugam) is for individuals, HUFs and Firms (other than LLP) being a resident having total income up to ₹50 lakh and having income from business and profession computed under sections 44AD, 44ADA or 44AE.',
        features: [
          'Presumptive income calculation',
          'No books of accounts required',
          'Tax planning',
          'Quick filing',
          'Refund processing'
        ],
        requirements: [
          'Bank statements',
          'Turnover/Receipts details',
          'Form 26AS',
          'Personal details'
        ],
        deliverables: [
          'Filed ITR-4',
          'Computation of Income',
          'Acknowledgement'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'itr-3-filing',
        title: '(ITR-3) Return Filing',
        icon: '💼',
        short: 'ITR for business and professional income',
        price: 1999,
        price_display: '₹1,999',
        category: 'Income Tax',
        description: 'ITR-3 filing for business income with financial statements',
        fullDescription: 'ITR-3 is for individuals and HUFs having income from business or profession. Includes preparation of profit and loss account and balance sheet.',
        features: [
          'P&L and Balance Sheet preparation',
          'Business income calculation',
          'Audit report filing (if applicable)',
          'Loss carry forward',
          'Expert review'
        ],
        requirements: [
          'Books of Accounts',
          'Bank statements',
          'Form 26AS',
          'Investment proofs'
        ],
        deliverables: [
          'Filed ITR-3',
          'Financial Statements',
          'Computation Sheet'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'itr-2-filing',
        title: '(ITR-2) Return Filing',
        icon: '📋',
        short: 'ITR filing for individuals with capital gains',
        price: 1499,
        price_display: '₹1,499',
        category: 'Income Tax',
        description: 'ITR-2 filing for capital gains and multiple properties',
        fullDescription: 'ITR-2 is for individuals and HUFs not having income from business or profession. Applicable when you have capital gains from property, shares, or multiple house properties.',
        features: [
          'Capital gains calculation',
          'Foreign Asset reporting',
          'Multiple house property',
          'Agricultural income',
          'Clubbing of income'
        ],
        requirements: [
          'Capital Gain Statement',
          'Broker reports',
          'Property deed',
          'Form 26AS'
        ],
        deliverables: [
          'Filed ITR-2',
          'Capital Gain Report',
          'Computation of Income'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'itr-1-filing',
        title: '(ITR-1) Return Filing',
        icon: '👤',
        short: 'Sahaj ITR for salaried individuals',
        price: 499,
        price_display: '₹499',
        category: 'Income Tax',
        description: 'Simple ITR filing for salary/pension income',
        fullDescription: 'ITR-1 (Sahaj) is for individuals being a resident (other than not ordinarily resident) having total income upto ₹50 lakh, having Income from Salaries, one house property, other sources (Interest etc.), and agricultural income upto ₹5 thousand.',
        features: [
          'Salary income reporting',
          'House property loss claim',
          'Deductions (80C, 80D etc.)',
          'Tax refund assistance',
          'Notice check'
        ],
        requirements: [
          'Form 16',
          'Interest certificates',
          'Form 26AS',
          'Aadhaar & PAN'
        ],
        deliverables: [
          'Filed ITR-1',
          'Computation',
          'Acknowledgement'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'business-tax-filing',
        title: 'Business Tax Filing',
        icon: '🏭',
        short: 'Comprehensive tax filing for businesses',
        price: 4999,
        price_display: '₹4,999',
        category: 'Income Tax',
        description: 'End-to-end tax solutions for businesses',
        fullDescription: 'Tailored tax filing service for businesses covering Income Tax, Advance Tax, and TDS planning. We help you stay compliant while optimizing your tax liability.',
        features: [
          'Advance Tax estimation',
          'Tax planning',
          'Return filing',
          'Compliance calendar',
          'Expert advisory'
        ],
        requirements: [
          'Financial data',
          'Previous returns',
          'Business details'
        ],
        deliverables: [
          'Filed Returns',
          'Tax Plan Report',
          'Challans'
        ],
        timeline: 'Ongoing'
      }
    ]
  },
  'gst': {
    title: 'GST',
    slug: 'gst',
    icon: '🧾',
    description: 'Goods and Services Tax compliance',
    services: [
      {
        slug: 'gst-refund',
        title: 'GST Refund Filing',
        icon: '💸',
        short: 'Claim your GST refunds',
        price: 1999,
        price_display: '₹1,999',
        category: 'GST',
        description: 'Assistance in claiming GST refunds',
        fullDescription: 'We help you file GST refund applications for exports (with/without payment of tax), inverted duty structure, and excess balance in cash ledger.',
        features: [
          'Eligibility check',
          'RFD-01 filing',
          'Document preparation',
          'Department follow-up',
          'Refund tracking'
        ],
        requirements: [
          'Export documents',
          'ITC ledger',
          'GSTR-2A/2B',
          'Bank details'
        ],
        deliverables: [
          'Filed Refund Application',
          'ARN generation',
          'Refund Order'
        ],
        timeline: '15-30 working days'
      },
      {
        slug: 'gst-lut-filing',
        title: 'GST LUT Filing',
        icon: '📝',
        short: 'Export without paying IGST',
        price: 499,
        price_display: '₹499',
        category: 'GST',
        description: 'File Letter of Undertaking for exports',
        fullDescription: 'Letter of Undertaking (LUT) allows exporters to export goods or services without payment of IGST. It is valid for one financial year and must be renewed annually.',
        features: [
          'Form GST RFD-11 filing',
          'ARN generation',
          'Export compliance advisory',
          'Annual renewal'
        ],
        requirements: [
          'GSTIN',
          'Authorized signatory DSC',
          'Witness details'
        ],
        deliverables: [
          'LUT Acknowledgement',
          'LUT ARN'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'gst-audit',
        title: 'GST Audit (GSTR-9C)',
        icon: '🔍',
        short: 'Reconciliation statement filing',
        price: 4999,
        price_display: '₹4,999',
        category: 'GST',
        description: 'GSTR-9C filing and certification',
        fullDescription: 'Filing of Reconciliation Statement (GSTR-9C) for taxpayers with turnover exceeding prescribed limit. reconciling returns with audited financial statements.',
        features: [
          'Reconciliation of GSTR-9 with Audited Financials',
          'Clause-by-clause reporting',
          'Certification',
          'Liability assessment'
        ],
        requirements: [
          'Audited Financials',
          'GSTR-9',
          'Annual returns data',
          'ITC register'
        ],
        deliverables: [
          'Filed GSTR-9C',
          'Reconciliation Report'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'gst-annual-return',
        title: 'GST Annual Return (GSTR-9)',
        icon: '📅',
        short: 'Consolidated annual return filing',
        price: 2999,
        price_display: '₹2,999',
        category: 'GST',
        description: 'Annual GSTR-9 filing',
        fullDescription: 'GSTR-9 is an annual return to be filed by all registered taxpayers. It consists of details regarding outward and inward supplies made/received during the financial year.',
        features: [
          'Consolidated data preparation',
          'ITC reconciliation',
          'Tax liability matching',
          'Filing support'
        ],
        requirements: [
          'Monthly/Quarterly returns data',
          'Financial statements',
          'GSTR-2A/2B reports'
        ],
        deliverables: [
          'Filed GSTR-9',
          'Acknowledgement'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'gst-return-filing-quarterly',
        title: 'GST Return Filing (Quarterly)',
        icon: '🗓️',
        short: 'Composition/QRMP scheme filing',
        price: 999,
        price_display: '₹999/quarter',
        category: 'GST',
        description: 'Quarterly return filing service',
        fullDescription: 'For composition dealers (CMP-08) and regular taxpayers under QRMP scheme. We ensure timely filing of statements and returns every quarter.',
        features: [
          'CMP-08 / GSTR-1 & 3B (QRMP)',
          'Challan generation',
          'Invoice uploading',
          'Compliance check'
        ],
        requirements: [
          'Sales data',
          'Purchase data',
          'Bank statement'
        ],
        deliverables: [
          'Filed Return',
          'Payment Challan'
        ],
        timeline: 'Quarterly'
      },
      {
        slug: 'gst-return-filing-monthly',
        title: 'GST Return Filing (Monthly)',
        icon: '🗓️',
        short: 'Regular monthly GST compliance',
        price: 499,
        price_display: '₹499/month',
        category: 'GST',
        description: 'Monthly GSTR-1 and GSTR-3B filing',
        fullDescription: 'Comprehensive monthly compliance for regular taxpayers. Handing GSTR-1 (Outward supplies) and GSTR-3B (Summary return) ensuring ITC claim and liability discharge.',
        features: [
          'GSTR-1 Filing',
          'GSTR-3B Filing',
          'ITC Reconciliation (2A/2B)',
          'Tax payment support',
          'Monthly report'
        ],
        requirements: [
          'Sales Invoices',
          'Purchase Invoices',
          'Expense bills',
          'Bank statement'
        ],
        deliverables: [
          'Filed Returns',
          'Tax Challans',
          'Compliance Report'
        ],
        timeline: 'Monthly'
      },
      {
        slug: 'gst-registration',
        title: 'GST Registration',
        icon: '📝',
        short: 'Get your GSTIN quickly',
        price: 999,
        price_display: '₹999',
        category: 'GST',
        description: 'New GST Registration service',
        fullDescription: 'Get your business registered under GST. Mandatory for turnover above threshold or for interstate trade/e-commerce. We handle the complete online application process.',
        features: [
          'Application filing',
          'Document verification',
          'Clarification response',
          'HSN/SAC code selection',
          'Certificate issuance'
        ],
        requirements: [
          'PAN & Aadhaar',
          'Business Address Proof',
          'Bank Account Proof',
          'Photo'
        ],
        deliverables: [
          'GST Certificate (REG-06)',
          'Login Credentials'
        ],
        timeline: '3-5 working days'
      }
    ]
  },
  'trademark': {
    title: 'Trademark',
    slug: 'trademark',
    icon: '®️',
    description: 'Protect your brand and intellectual property',
    services: [
      {
        slug: 'trademark-registration',
        title: 'Trademark Registration',
        icon: '®️',
        short: 'Protect your brand name and logo',
        price: 4999,
        price_display: '₹4,999',
        category: 'Trademark',
        description: 'Secure legal protection for your brand',
        fullDescription: 'Trademark Registration provides legal protection to your brand name, logo, and tagline. It gives you exclusive rights to use the mark and prevents others from using similar marks.',
        features: [
          'Trademark Search',
          'Application Filing',
          'Government Fees guidance',
          'Use of TM symbol',
          'Application tracking'
        ],
        requirements: [
          'Logo / Brand Name',
          'Applicant Details',
          'MSME Certificate (for fee discount)',
          'User Affidavit'
        ],
        deliverables: [
          'Trademark Application No.',
          'Vienna Code',
          'Examination Report reply assistance'
        ],
        timeline: '1-2 working days (filing)'
      },
      {
        slug: 'trademark-objection',
        title: 'Trademark Objection',
        icon: '📝',
        short: 'Reply to examination report',
        price: 2999,
        price_display: '₹2,999',
        category: 'Trademark',
        description: 'Professional reply to trademark objections',
        fullDescription: 'If the Trademark Registry raises an objection, a legal reply must be filed within 30 days. We draft strong legal responses citing precedents to overcome objections.',
        features: [
          'Examination Report analysis',
          'Legal reply drafting',
          'Filing with Registry',
          'Status monitoring'
        ],
        requirements: [
          'Examination Report',
          'Application Number',
          'POA (Power of Attorney)'
        ],
        deliverables: [
          'Filed Examination Reply',
          'Arguments copy'
        ],
        timeline: '2-4 working days'
      },
      {
        slug: 'trademark-opposition',
        title: 'Trademark Opposition',
        icon: '⚖️',
        short: 'File or defend opposition',
        price: 9999,
        price_display: '₹9,999',
        category: 'Trademark',
        description: 'Legal support for trademark opposition',
        fullDescription: 'Opposition proceedings happen when a third party opposes a trademark application. We handle filing Notice of Opposition or Counter Statement and evidence stages.',
        features: [
          'Notice of Opposition drafting',
          'Counter Statement drafting',
          'Evidence filing',
          'Hearing representation'
        ],
        requirements: [
          'Case history',
          'Evidence of use',
          'POA'
        ],
        deliverables: [
          'Filed Notice/Counter Statement',
          'Legal Strategy'
        ],
        timeline: 'Month-on-month'
      },
      {
        slug: 'trademark-renewal',
        title: 'Trademark Renewal',
        icon: '🔄',
        short: 'Renew your trademark every 10 years',
        price: 7999,
        price_display: '₹7,999',
        category: 'Trademark',
        description: 'Keep your trademark valid',
        fullDescription: 'Trademarks are valid for 10 years. They must be renewed to maintain protection. We assist in filing Form TM-R for renewal.',
        features: [
          'Renewal filing',
          'Application tracking',
          'Validity extension',
          'Status update'
        ],
        requirements: [
          'Registration Certificate',
          'POA'
        ],
        deliverables: [
          'Renewal Request Filed',
          'Next 10 years validity'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'copyright-registration',
        title: 'Copyright Registration',
        icon: '©️',
        short: 'Protect your creative work',
        price: 4999,
        price_display: '₹4,999',
        category: 'Trademark',
        description: 'Copyright for artistic, literary, and musical works',
        fullDescription: 'Copyright gives exclusive rights to creators of literary, artistic, musical works, and software. We handle the application filing with the Copyright Office.',
        features: [
          'Application filing',
          'Work classification',
          'Diary Number generation',
          'Discrepancy clearing'
        ],
        requirements: [
          'Copies of work',
          'NOC from author (if applicant is different)',
          'ID Proof'
        ],
        deliverables: [
          'Diary Number',
          'Registration Certificate (after approval)'
        ],
        timeline: '3-4 months'
      },
      {
        slug: 'patent-registration',
        title: 'Patent Registration',
        icon: '💡',
        short: 'Protect your invention',
        price: 29999,
        price_display: '₹29,999',
        category: 'Trademark',
        description: 'Patent filing and prosecution',
        fullDescription: 'Patents protect inventions. We assist in prior art search, patent drafting (provisional/complete), and filing with the Patent Office.',
        features: [
          'Patent Search',
          'Drafting of specification',
          'Filing Application',
          'Request for Examination'
        ],
        requirements: [
          'Invention details',
          'Drawings',
          'Applicant details'
        ],
        deliverables: [
          'Patent Application Number',
          'Published Patent'
        ],
        timeline: '12-24 months'
      },
      {
        slug: 'design-registration',
        title: 'Designing Registration',
        icon: '🎨',
        short: 'Protect industrial designs',
        price: 6999,
        price_display: '₹6,999',
        category: 'Trademark',
        description: 'Protection for shape and aesthetics',
        fullDescription: 'Design registration protects the visual features of shape, configuration, pattern or ornament applied to an article. It does not cover the functionality.',
        features: [
          'Design classification',
          'Representation sheets preparation',
          'Filing',
          'Objection handling'
        ],
        requirements: [
          'Photos/Drawings of article',
          'Description of novelty',
          'Applicant details'
        ],
        deliverables: [
          'Design Application Number',
          'Registration Certificate'
        ],
        timeline: '6-8 months'
      },
      {
        slug: 'logo-designing',
        title: 'Logo Designing',
        icon: '🖌️',
        short: 'Professional logo for your brand',
        price: 999,
        price_display: '₹999',
        category: 'Trademark',
        description: 'Custom logo design services',
        fullDescription: 'Get a unique and professional logo designed for your business. A good logo builds brand identity and is essential for trademark registration.',
        features: [
          'Multiple concepts',
          'Revisions included',
          'High resolution files',
          'Copyright transfer'
        ],
        requirements: [
          'Business Name',
          'Industry/Niche',
          'Color preferences'
        ],
        deliverables: [
          'Logo files (PNG, JPG, Vector)',
          'Brand guidelines'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'trademark-hearing',
        title: 'Trademark Hearing',
        icon: '👂',
        short: 'Representation in hearings',
        price: 4999,
        price_display: '₹4,999',
        category: 'Trademark',
        description: 'Legal representation for show cause hearings',
        fullDescription: 'If your trademark application is set for a hearing, our attorneys will represent your case before the Registrar to argue for acceptance.',
        features: [
          'Hearing Preparation',
          'Attorney Appearance',
          'Submissions on record',
          'Order verification'
        ],
        requirements: [
          'Hearing Notice',
          'POA',
          'Case papers'
        ],
        deliverables: [
          'Hearing Report',
          'Acceptance Order (if successful)'
        ],
        timeline: 'As per hearing date'
      },
      {
        slug: 'trademark-rectification',
        title: 'Trademark Rectification',
        icon: '🛠️',
        short: 'Correct register entries',
        price: 5999,
        price_display: '₹5,999',
        category: 'Trademark',
        description: 'Rectification or cancellation of trademark',
        fullDescription: 'Application to rectify an error in the trademark register or to cancel a competitor\'s trademark on grounds of non-use or bad faith.',
        features: [
          'Rectification petition',
          'Grounds of research',
          'Filing with updated rules'
        ],
        requirements: [
          'Target trademark details',
          'Applicant\'s locus standi'
        ],
        deliverables: [
          'Filed Petition',
          'Registry Order'
        ],
        timeline: 'Based on proceedings'
      },
      {
        slug: 'trademark-transfer',
        title: 'Trademark Transfer',
        icon: '🤝',
        short: 'Assignment of trademark rights',
        price: 3999,
        price_display: '₹3,999',
        category: 'Trademark',
        description: 'Transfer ownership of trademark',
        fullDescription: 'Trademark assignment is the process of transferring ownership of a trademark from one person/entity to another (with or without goodwill).',
        features: [
          'Assignment Deed drafting',
          'Form TM-P filing',
          'Recordal of assignment'
        ],
        requirements: [
          'Deed of Assignment',
          'POA from Assignee'
        ],
        deliverables: [
          'Filed TM-P',
          'Updated proprietor details'
        ],
        timeline: '1-2 months'
      },
      {
        slug: 'trademark-protection',
        title: 'Trademark Protection',
        icon: '🛡️',
        short: 'Monitoring and watch services',
        price: 999,
        price_display: '₹999/month',
        category: 'Trademark',
        description: 'Watch service against infringement',
        fullDescription: 'We monitor the trademark journal and market for similar marks being filed or used, alerting you to potential infringements so you can take timely action.',
        features: [
          'Trademark Journal watch',
          'Market surveillance',
          'Infringement alert',
          'Legal opinion'
        ],
        requirements: [
          'Details of registered mark'
        ],
        deliverables: [
          'Monthly Watch Report'
        ],
        timeline: 'Monthly'
      },
      {
        slug: 'copyright-objection',
        title: 'Copyright Objection',
        icon: '🚫',
        short: 'Response to copyright discrepancies',
        price: 2999,
        price_display: '₹2,999',
        category: 'Trademark',
        description: 'Clear copyright objections',
        fullDescription: 'If the Copyright Office raises discrepancies in your application, we help file a formal response to resolve them and proceed towards registration.',
        features: [
          'Discrepancy analysis',
          'Response drafting',
          'Filing',
          'Follow-up'
        ],
        requirements: [
          'Discrepancy Letter',
          'Application details'
        ],
        deliverables: [
          'Filed Response',
          'Status Update'
        ],
        timeline: '5-7 working days'
      }
    ]
  },
  'startup': {
    title: 'Startup',
    slug: 'startup',
    icon: '🚀',
    description: 'Launch your business',
    services: [
      {
        slug: 'section-8-company',
        title: 'Section 8 Company',
        icon: '🏛️',
        short: 'Non-profit organization registration',
        price: 9999,
        price_display: '₹9,999',
        category: 'Startup',
        description: 'Register a Section 8 company for NGOs',
        fullDescription: 'Section 8 Company is a special type of company formed for promoting charitable objectives. It enjoys various tax benefits and exemptions.',
        features: [
          'DSC & DIN',
          'Name Reservation',
          'License under Section 8',
          'Incorporation Certificate',
          'PAN & TAN'
        ],
        requirements: [
          'Director IDs',
          'Photos',
          'Address Proof',
          'Objectives of NGO'
        ],
        deliverables: [
          'Incorporation Certificate',
          'License',
          'Section 8 License'
        ],
        timeline: '15-20 working days'
      },
      {
        slug: 'private-limited-company',
        title: 'Private Limited Company',
        icon: '💼',
        short: 'Most popular startup structure',
        price: 6999,
        price_display: '₹6,999',
        category: 'Startup',
        description: 'Private Limited Company incorporation',
        fullDescription: 'The most preferred structure for startups. It offers limited liability, separate legal entity status, and easy fund raising capability.',
        features: [
          'DSC for 2 Directors',
          'DIN for 2 Directors',
          'Name Approval',
          'MOA & AOA',
          'Incorporation Certificate'
        ],
        requirements: [
          'PAN & Aadhaar',
          'Bank statement/Utility bill',
          'Photo',
          'Rent Agreement (Office)'
        ],
        deliverables: [
          'Certificate of Incorporation',
          'PAN & TAN',
          'MOA & AOA'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'partnership-firm-registration',
        title: 'Partnership Firm Registration',
        icon: '🤝',
        short: 'Register your partnership firm',
        price: 3999,
        price_display: '₹3,999',
        category: 'Startup',
        description: 'Registration of Partnership Firm',
        fullDescription: 'A partnership is an arrangement where parties, known as business partners, agree to cooperate to advance their mutual interests. Registration makes it a legal entity capable of suing.',
        features: [
          'Partnership Deed Drafting',
          'Notarization',
          'Registration application',
          'Firm Card/Certificate'
        ],
        requirements: [
          'Partners Details',
          'Office Address Proof',
          'Capital Contribution details'
        ],
        deliverables: [
          'Registered Partnership Deed',
          'Registration Certificate (RoF)'
        ],
        timeline: '10-15 working days'
      },
      {
        slug: 'limited-liability-partnership',
        title: 'Limited Liability Partnership',
        icon: '👥',
        short: 'LLP Registration',
        price: 5999,
        price_display: '₹5,999',
        category: 'Startup',
        description: 'Incorporation of LLP',
        fullDescription: 'LLP combines the flexibility of a partnership with the limited liability of a company. Ideal for professionals and small businesses.',
        features: [
          'DSC & DIN',
          'Name Reservation',
          'LLP Agreement drafting',
          'Incorporation filing'
        ],
        requirements: [
          'Partner KYC',
          'Address Proof',
          'Contribution details'
        ],
        deliverables: [
          'Certificate of Incorporation',
          'LLP Agreement',
          'PAN & TAN'
        ],
        timeline: '10-12 working days'
      },
      {
        slug: 'sole-proprietorship',
        title: 'Sole-proprietorship',
        icon: '👤',
        short: 'Simplest business form',
        price: 2999,
        price_display: '₹2,999',
        category: 'Startup',
        description: 'Start a proprietorship business',
        fullDescription: 'Sole Proprietorship is the simplest form of business organization owned and managed by a single individual. Registration is usually done via UDYAM or GST.',
        features: [
          'UDYAM Registration',
          'GST Registration (if opted)',
          'Current Account opening support',
          'Business proof'
        ],
        requirements: [
          'PAN & Aadhaar',
          'Address Proof',
          'Photo'
        ],
        deliverables: [
          'Registration Certificate',
          'Entity Proof'
        ],
        timeline: '3-5 working days'
      }
    ]
  },
  'legal-services': {
    title: 'Legal Services',
    slug: 'legal-services',
    icon: '⚖️',
    description: 'Legal documentation and agreement drafting services',
    services: [
      {
        slug: 'partnership-deed',
        title: 'Partnership Deed',
        icon: '📜',
        short: 'Legal partnership agreement drafting and registration',
        price: 2999,
        price_display: '₹2,999',
        category: 'Legal Services',
        description: 'Professional partnership deed drafting and registration',
        fullDescription: 'Partnership Deed is a legal document that outlines the terms and conditions of partnership including profit sharing ratio, capital contribution, roles and responsibilities, decision-making process, and dispute resolution mechanisms. It provides legal protection to all partners.',
        features: [
          'Customized deed drafting by advocates',
          'All essential clauses included',
          'Legal review by experienced advocates',
          'Notarization assistance',
          'Registration support with sub-registrar',
          'Digital and physical copies'
        ],
        requirements: [
          'Partner details with ID proofs',
          'Business nature and activities',
          'Profit sharing ratio',
          'Capital contribution details',
          'Roles and responsibilities of partners',
          'Duration of partnership'
        ],
        deliverables: [
          'Partnership deed document',
          'Notarized copies (multiple)',
          'Registration certificate',
          'Digital soft copy (PDF)'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'nda-agreement',
        title: 'NDA Agreement',
        icon: '🔒',
        short: 'Non-disclosure agreement for confidentiality',
        price: 1499,
        price_display: '₹1,499',
        category: 'Legal Services',
        description: 'Professional NDA drafting to protect confidential information',
        fullDescription: 'Non-Disclosure Agreement (NDA) protects confidential business information shared with employees, partners, contractors, or third parties. Essential for protecting trade secrets, proprietary information, business plans, and customer data.',
        features: [
          'Unilateral or mutual NDA options',
          'Customized clauses for your needs',
          'Legal validity ensured',
          'Industry-specific terms',
          'Digital signing support',
          'Notarization available'
        ],
        requirements: [
          'Parties details (disclosing & receiving)',
          'Type of information to protect',
          'Duration of confidentiality',
          'Jurisdiction and governing law',
          'ID proofs of parties',
          'Specific exclusions (if any)'
        ],
        deliverables: [
          'Customized NDA document',
          'Legal review certificate',
          'Digital and print copies',
          'Signing guidelines and instructions'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'employment-agreement',
        title: 'Employment Agreement',
        icon: '👔',
        short: 'Employee contract and appointment letter drafting',
        price: 1999,
        price_display: '₹1,999',
        category: 'Legal Services',
        description: 'Professional employment contract drafting',
        fullDescription: 'Employment Agreement clearly defines the terms of employment including salary and benefits, roles and responsibilities, leave policy, working hours, confidentiality obligations, intellectual property rights, and termination clauses. Protects both employer and employee.',
        features: [
          'Comprehensive contract drafting',
          'Salary and benefits clauses',
          'Confidentiality and IP assignment clauses',
          'Notice period and termination terms',
          'Legal compliance with labor laws',
          'Industry-specific customization'
        ],
        requirements: [
          'Company and employee details',
          'Job designation and description',
          'Salary and benefits structure',
          'Leave and working hours policy',
          'Notice period requirements',
          'Non-compete terms (if required)'
        ],
        deliverables: [
          'Employment agreement document',
          'Legal review certificate',
          'Digital copies for both parties',
          'Signing instructions'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'legal-notice',
        title: 'Legal Notice',
        icon: '⚠️',
        short: 'Send legal notice through advocate',
        price: 2499,
        price_display: '₹2,499',
        category: 'Legal Services',
        description: 'Professional legal notice drafting and sending',
        fullDescription: 'Legal Notice is a formal communication sent by an advocate to inform about legal rights violation and demand resolution. Often the first step before filing a lawsuit. Used for recovery of money, breach of contract, defamation, property disputes, and consumer complaints.',
        features: [
          'Advocate consultation',
          'Professional notice drafting',
          'Registered post or speed post delivery',
          'Acknowledgment tracking',
          'Legal advice included',
          'Response handling support'
        ],
        requirements: [
          'Sender and recipient details',
          'Issue description and chronology of facts',
          'Supporting documents',
          'Desired relief or action demanded',
          'Timeline for response',
          'ID proofs and addresses'
        ],
        deliverables: [
          'Legal notice document on letterhead',
          'Advocate signature and seal',
          'Postal delivery receipt',
          'Acknowledgment proof',
          'Follow-up consultation (1 free)'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'mou-drafting',
        title: 'MOU Drafting',
        icon: '📋',
        short: 'Memorandum of Understanding for business agreements',
        price: 2999,
        price_display: '₹2,999',
        category: 'Legal Services',
        description: 'Professional MOU drafting for business relationships',
        fullDescription: 'Memorandum of Understanding (MOU) is a formal agreement between parties outlining terms and conditions of a business relationship. Though not always legally binding, it establishes clear expectations, roles, responsibilities, and framework for future agreements.',
        features: [
          'Customized MOU drafting',
          'Terms and conditions clearly defined',
          'Rights and obligations of parties',
          'Legal review by advocates',
          'Notarization support',
          'Multiple party MOU support'
        ],
        requirements: [
          'All parties details',
          'Purpose and objectives of MOU',
          'Terms and conditions',
          'Duration and validity period',
          'Obligations of each party',
          'Dispute resolution mechanism'
        ],
        deliverables: [
          'Complete MOU document',
          'Legal review certificate',
          'Notarized copies',
          'Digital and print versions for all parties'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'lease-agreement',
        title: 'Lease/Rent Agreement',
        icon: '🏠',
        short: 'Property rental agreement drafting and registration',
        price: 1999,
        price_display: '₹1,999',
        category: 'Legal Services',
        description: 'Rental agreement drafting for residential/commercial property',
        fullDescription: 'Lease Agreement is a legal contract between landlord and tenant defining terms of property rental including monthly rent, security deposit, lock-in period, maintenance responsibilities, and termination clauses. Registration is mandatory for leases exceeding 11 months.',
        features: [
          'Residential or commercial agreement',
          'Lock-in period and escalation clauses',
          'Maintenance and utility terms',
          'Registration assistance',
          'Stamp duty guidance',
          'Legal validity ensured'
        ],
        requirements: [
          'Landlord and tenant details',
          'Property details and documents',
          'Rent amount and security deposit',
          'Duration of lease',
          'Terms and conditions',
          'ID and address proofs'
        ],
        deliverables: [
          'Lease agreement document (11/36/60 months)',
          'Registration assistance',
          'Notarized copies',
          'Stamp duty payment guidance',
          'Registered agreement copy'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'service-agreement',
        title: 'Service Agreement',
        icon: '🤝',
        short: 'Freelancer and consultant service agreement',
        price: 2499,
        price_display: '₹2,499',
        category: 'Legal Services',
        description: 'Professional service agreement for freelancers and consultants',
        fullDescription: 'Service Agreement defines the terms of professional services provided by freelancers, consultants, or contractors. Includes scope of work, deliverables, payment terms, timelines, intellectual property rights, and termination clauses.',
        features: [
          'Scope of work definition',
          'Payment terms and schedule',
          'Deliverables and timelines',
          'IP rights assignment',
          'Confidentiality clauses',
          'Termination conditions'
        ],
        requirements: [
          'Service provider and client details',
          'Nature and scope of services',
          'Payment terms and rates',
          'Project duration and milestones',
          'Deliverables expected',
          'Special terms (if any)'
        ],
        deliverables: [
          'Service agreement document',
          'Legal review certificate',
          'Digital copies',
          'Amendment guidelines'
        ],
        timeline: '2-3 working days'
      }
    ]
  },
};

// Helper Functions
export const getAllServices = (): Service[] => {
  const allServices: Service[] = [];
  Object.values(servicesData).forEach(category => {
    allServices.push(...category.services);
  });
  return allServices;
};

export const findServiceBySlug = (slug: string): Service | undefined => {
  const allServices = getAllServices();
  return allServices.find(service => service.slug === slug);
};

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined => {
  return servicesData[slug];
};

export const getServicesByCategory = (categorySlug: string): Service[] => {
  const category = servicesData[categorySlug];
  return category ? category.services : [];
};

export const getAllCategories = (): ServiceCategory[] => {
  return Object.values(servicesData);
};

export const searchServices = (query: string): Service[] => {
  const allServices = getAllServices();
  const lowerQuery = query.toLowerCase();
  return allServices.filter(service => 
    service.title.toLowerCase().includes(lowerQuery) ||
    service.short.toLowerCase().includes(lowerQuery) ||
    service.category.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery)
  );
};

export default servicesData;