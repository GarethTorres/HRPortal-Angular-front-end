export enum OnboardingStatusEnum {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export interface OnboardingApplicationSummary {
  firstName: string;
  lastName: string;
  email: string;
  onboardingStatus: string;
  applicationId: string;
}

interface Address {
  buildingNumber: string;
  streetName: string;
  apartmentNumber: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CarInfo {
  make: string;
  model: string;
  color: string;
}

interface WorkAuthorization {
  isCitizenOrPermanentResident: boolean;
  citizenshipStatus: string;
  visaType?: string;
  visaTitle?: string;
  visaStartDate?: Date | null;
  visaEndDate?: Date | null;
}

interface DriverLicense {
  hasDriverLicense: boolean;
  licenseNumber?: string;
  expirationDate?: Date | null;
}

interface Contact {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: string;
  email: string;
  relationship: string;
}

interface Document {
  id: string;
  type: string;
  name: string;
  url: string;
  uploadDate: string;
}

export interface OnboardingApplicationDetails {
  // applicationId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName: string;
  profilePicture: string;
  currentAddress: Address;
  cellPhone: string;
  workPhone: string;
  carInfo: CarInfo;
  ssn: string;
  dateOfBirth: Date | null;
  gender: string;
  workAuthorization: WorkAuthorization;
  driverLicense: DriverLicense;
  reference?: Contact;
  emergencyContacts: Contact[];
  feedback: string;
  onboardingStatus: string;
  submittedDate: Date | null;
  uploadedDocuments: Document[];
  email: string;
}
