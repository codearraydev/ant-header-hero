export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  age: string;
  gender: 'M' | 'F' | 'N/A';
}

export interface Medication {
  activeMedID: string;
  medicineDisplayName: string;
  precriptionInstruction: string;
  startDate: string;
  strength: string | null;
  routeDisplayName: string;
  dose: string;
  frequencyDescription: string;
  insertedAt: string;
  updatedAt: string;
  userName: string;
  isSAMedicine: boolean;
  isMedAdmin: boolean;
  titrationID: string;
  isInUse: boolean;
  isMedOnHold: boolean;
  isMedStopped: boolean;
  dispenseStartDate: string | null;
  badges?: ('Administered' | 'SA' | 'Titrated Med')[];
}

export interface MedicationSection {
  title: 'Regular' | 'PRN' | 'Stat';
  medications: Medication[];
}