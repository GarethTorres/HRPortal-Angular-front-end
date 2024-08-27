export interface EmployeeVisaStatus {
  id: string;
  name: string;
  workAuthorization: {
    title: string;
    startDate: Date;
    endDate: Date;
  };
  nextStep: string;
  documents: {
    type: string;
    status: 'pending' | 'approved' | 'rejected';
    feedback?: string;
    file?: File;
  }[];
}

