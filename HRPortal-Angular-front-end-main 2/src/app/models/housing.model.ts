export interface Landlord {
    fullName: string;
    phoneNumber: string;
    email: string;
  }
  
  export interface FacilityReport {
    title: string;
    description: string;
    createdBy: string;
    timestamp: Date;
    status: 'Open' | 'In Progress' | 'Closed';
    comments: {
      description: string;
      createdBy: string;
      timestamp: Date;
    }[];
  }
  
  export interface Employee {
    fullName: string;
    phoneNumber: string;
    email: string;
    carInfo: string;
  }
  
  export interface Housing {
    id: string;
    address: string;
    landlord: Landlord;
    employeeResidents: Employee[];
    facilityInfo: {
      beds: number;
      mattresses: number;
      tables: number;
      chairs: number;
    };
    facilityReports: FacilityReport[];
  }

  