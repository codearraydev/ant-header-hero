export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  age: string;
  gender: 'M' | 'F' | 'N/A';
}

export interface Medication {
  id: string;
  name: string;
  details: string;
  startDate: string;
  strength: string;
  route: 'Intramuscular' | 'Oral' | 'Intravenous' | 'Topical' | 'Subcutaneous';
  dose: string;
  frequency: string;
  dateLastRx: string;
  dateLastDispense: string;
  lastUpdate: string;
  eScript: string;
  status: 'Active' | 'Inactive' | 'Discontinued';
  badges?: ('Administered' | 'SA' | 'Titrated Med')[];
}

export interface MedicationSection {
  title: 'Regular' | 'PRN' | 'Stat';
  medications: Medication[];
}