const insuranceMockData = [
  {
    id: '1',
    name: 'Simas Sehat Gold',
    company: 'sinarmas',
    price: 3000000,
    type: 'health',
    feature: [
      'Access consulting services with doctors 24/7',
      'Free purchase of medicine in the Grab or Halodoc application according to the chosen plan'
    ],
    description:
      'Simas Sehat Gold is a type of insurance that overcomes financial risks that may arise due to accidents, illness or surgery that require hospitalization at a cost that continues to increase from time to time.',
    benefit: [
      'CASHLESS at Sinar Mas Insurance Provider Hospital',
      'NO NEED for a health check',
      'SATISFACTION GUARANTEED. The Insured has 15 days to study the Policy, if the Insured is not completely satisfied, the Policy can be returned within that time and the Insured does not have to pay anything',
      'CAN IN Installment per month via credit card Visa/Mastercard',
      'FREE PERSONAL ACCIDENT INSURANCE worth IDR 10 million',
      'Worldwide EMERGENCY MEDICAL EVACUATION Guarantee',
      'Guarantees up to the age of 75 years',
      'Outpatient and Emergency Dentistry Insurance due to accidents',
      'Ensure Outpatient Before and After Hospitalization'
    ]
  },
  {
    id: '2',
    name: 'Simas Sehat Executive',
    company: 'sinarmas',
    price: 2500000,
    type: 'health',
    feature: [
      'Access consulting services with doctors 24/7',
      'Free purchase of medicine in the Grab or Halodoc application according to the chosen plan'
    ],
    description:
      'Simas Sehat Executive is a type of insurance that overcomes financial risks that may arise due to accidents, illness or surgery that require hospitalization at a cost that continues to increase from time to time.',
    benefit: [
      'CASHLESS at ASM Provider Hospital',
      'NO NEED for a health check',
      'EASY payment via Auto debit credit card of any bank (Visa/Mastercard) throughout Indonesia',
      'SATISFACTION GUARANTEED. The Insured has 15 days to study the Policy, if the Insured is not completely satisfied, the Policy can be returned within that time and the Insured does not have to pay anything',
      'EMERGENCY MEDICAL EVACUATION guarantee worldwide',
      'Guaranteeing BODY ORGANS TRANSPLANTATION with its own limit',
      'Guarantee up to the age of 75 YEARS',
      'Insurance for Outpatient and Emergency Dentistry due to an accident',
      'Ensure Outpatient Before and After Hospitalization'
    ]
  },
  {
    id: '3',
    name: 'Simas Sehat Income',
    company: 'sinarmas',
    price: 900000,
    type: 'health',
    feature: ['Access consulting services with doctors 24/7', 'Cash Bonus'],
    description:
      'Simas Sehat Income, which is one solution for you to help alleviate material losses caused by the large costs of inpatient treatment that you may experience. This product provides compensation if the participant undergoes inpatient treatment at the hospital',
    benefit: [
      'Daily Cash Compensation, which provides compensation up to Rp. 500,000,- per day for 365 days or Rp. 182,500,000, - per participant per year only with a premium STARTING from Rp. 1,200, - per day',
      'Surgical Compensation, which provides surgical compensation of up to IDR 10,000,000 per surgery',
      'Cash Bonus, which provides cash benefits of up to IDR 500,000 per participant, if there is no claim for 12 (twelve) consecutive months',
      'Death Benefit and Permanent Disability Due to Accident, which provides compensation if the participant dies or suffers permanent disability due to an accident, including accidents caused by risks while riding a motorcycle up to Rp.100,000,000'
    ]
  },
  {
    id: '4',
    name: 'SmartMed Premier',
    company: 'allianz',
    price: 2500000,
    type: 'health',
    feature: [
      'Covers regions around the world and provides comprehensive protection when you or your family are sick.',
      'Provides Basic Hospitalization Benefits and Other Additional Benefits'
    ],
    description:
      'SmartMed Premier is a health insurance that can be used by individuals and families.',
    benefit: [
      'VIP class medical facilities with Cashless convenience at Allianz network hospitals in Indonesia, Singapore, Malaysia, Thailand, and others.',
      'Total benefits in a year received by policyholders up to Rp 6 billion per person.',
      'Replacement of maintenance costs according to the bill (as charge) if the treatment is according to the Plan.',
      'If you choose more rooms than Plan or choose a hospital in the United States, the cost of treatment will be paid by the policyholder according to the Basic Limit.',
      'Provides Inpatient Benefits and Additional Benefits such as Childbirth, Outpatient, and Dental Care.',
      'Providing Special Benefits, namely Chemotherapy, Hemodialysis, Medical Evacuation and Emergency Discharge, HIV/AIDS, and Funeral Fees.',
      'No Claim Bonus or bonus discount of 20% given during policy renewal if there is no record of claims for one policy year. The bonus discount is calculated from last years policy premium and applies to premiums per the Insured.',
      'Allianz eAZy Claim and Reimbursement facility for reimbursement of medical treatment costs carried out in hospitals outside the Allianz-Admedika Network.',
      'Choice of 20%, 10%, and 0% co-share services according to the agreement between the Insured and Allianz.',
      'Access the 24-hour Allianz Medical Hotline for information needs and medical services, as well as International Medical Assistance Services.'
    ]
  },
  {
    id: '5',
    name: 'SmartHealth Maxi Violet',
    company: 'allianz',
    price: 1000000,
    type: 'health',
    feature: [
      'Provide reimbursement of maintenance costs',
      'Has Basic Inpatient Benefits and Additional Benefits, namely Outpatient, Dental Care, and Delivery.'
    ],
    description:
      'SmartHealth Maxi Violet is a health insurance that can be used by individuals and families.',
    benefit: [
      'SmartHealth Maxi Violet provides various medical facilities with the convenience of Cashless (non-cash payments) at Allianz-Admedika company network hospitals in Indonesia.',
      'SmartHealth Maxi Violet also provides a variety of plans that can be tailored to the needs of policyholders and their families.',
      'Policyholders get Inpatient Benefits along with Optional Benefits in the form of Outpatient, Childbirth, Dental Treatment and Optional Additional Benefits in the form of Daily Compensation for additional hospitalization costs',
      'Choice of payment system for claims Reimbursement and eAZy Claim if the treatment is carried out outside the Allianz network of insurance companies.',
      'No Claim Bonus if there is no record of claim for 1 year in the policy and the policyholder extends the policy, the renewal policy will get a bonus discount calculated from last years policy premium. This discount applies to premiums per Insured.',
      '5% premium discount if the policyholder also includes family members',
      'In SmartHealth Maxi Violet, there is no annual limit and no waiting period, except for the Maternity program.'
    ]
  },
  {
    id: '6',
    name: 'Smartmed Cancer',
    company: 'allianz',
    price: 1700000,
    type: 'health',
    feature: [
      'From 1 month 1 day to 60 years (nearest birthday).',
      'Worldwide, except the United States, and according to Plan options.'
    ],
    description:
      'SmartMed Cancer is the first rider health insurance in Indonesia specifically for protection against cancer risk.',
    benefit: [
      'Comprehensive protection against cancer risk',
      'Financial security because benefits can be used to cover medical expenses',
      'Guarantee traditional medicine, psychological counseling, consultation with a dietitian, follow-up outpatient consultations, and diagnostic tests after symptoms of cancer are found',
      'Wide range of treatment worldwide (except United States)',
      'Convenience of cashless facilities at Allianz-AdMedika Network Hospital'
    ]
  },
  {
    id: '7',
    name: 'Sekoci Amana',
    company: 'allianz',
    price: 2500000,
    type: 'life',
    feature: [
      'From 6 to 60 years (nearest birthday).',
      'One time payment (all at once).'
    ],
    description:
      'Sekoci Amana is a sharia term life insurance product that provides Insurance Benefits as an emergency fund for the bereaved family and the option of Emergency Outpatient Cash Compensation in hospitals due to accidents as medical funds so as not to suffer financial losses when a disaster strikes.',
    benefit: [
      'If the Participant dies, the above insurance benefits as disaster funds will be given to the beneficiarys family.',
      'You can also choose to prepare a treatment fund* a maximum of rp 300,000 if you take treatment to the hospital, and choose how long the medicine funds available between 6 or 12 months.'
    ]
  },
  {
    id: '8',
    name: 'Maestro Infinite Protection',
    company: 'axa',
    price: 900000,
    type: 'life',
    feature: [
      'Lifetime Life & Accident Protection Assurance',
      'Fixed Payment Period'
    ],
    description:
      'Maestro Infinite Protection (MIP) is a comprehensive life protection solution for family inheritance planning that can provide protection against the risk of inheritance depreciation due to economic conditions.',
    benefit: [
      '100% Sum Assured (UP) will be paid minus the Cash Benefit that has been paid (if any) if the Insured dies during the coverage period.',
      'An additional Sum Insured of 50% of the Sum Insured will be paid (max. IDR 1 billion/Insured) if the Insured dies due to an accident during the coverage period.',
      '20% of UP will be given to the Insured if the Insured is still alive on the policy anniversary and the Insured is 65 years old. This applies specifically to customers who meet the conditions.',
      '100% of the Sum Insured will be paid minus the Cash Benefit that has been paid (if any) if the Insured lives until the end of the insurance period (age 100 years), and the policy is still valid.'
    ]
  },
  {
    id: '9',
    name: 'AXA Care Protection',
    company: 'axa',
    price: 750000,
    type: 'life',
    feature: [
      'From 18 to 64 years (nearest birthday).',
      'Coverage period of 3 or 6 months.'
    ],
    description:
      'AXA Care Protection is a protection program from AXA Financial Indonesia. This program is a personal accident insurance that provides a sum insured if he dies due to an accident.',
    benefit: [
      'Provides benefits of 100% Sum Insured if the Insured dies due to an accident'
    ]
  }
];

export default insuranceMockData;
