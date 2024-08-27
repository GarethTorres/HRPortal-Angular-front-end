export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    preferredName: string;
    profilePicture: string;
    ssn: string;
    workAuthorizationTitle: string;
    cellPhone: string;
    workPhone: string;
    phoneNumber: string;
    email: string;
    dob: Date;
    gender: string;
    currentAddress: {
      buildingNumber: string;
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    emergencyContact: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
    }
    documents: [{
      name: string;
      updated: Date;
    }]
  }

