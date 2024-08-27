export interface VisaStatus {
    visaType: string;
    currentStep: 'OPT_RECEIPT' | 'OPT_EAD' | 'I_983' | 'I_20';
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    feedback?: string;
  }


  