import { Patient, MedicationSection, Medication } from '../types/medication';

export const mockPatient: Patient = {
  id: '1',
  name: 'Adeel Patient',
  dateOfBirth: '03/07/1992',
  age: '33 Y',
  gender: 'M',
};

function genMed(id: string, name: string, overrides: Partial<Medication> = {}): Medication {
  return {
    id,
    name,
    details: overrides.details ?? 'Use as directed',
    startDate: overrides.startDate ?? '19/08/2025',
    strength: overrides.strength ?? '1 mg',
    route: overrides.route ?? 'Oral',
    dose: overrides.dose ?? '1 tablet',
    frequency: overrides.frequency ?? 'mane',
    dateLastRx: overrides.dateLastRx ?? '21/08/2025',
    dateLastDispense: overrides.dateLastDispense ?? '-',
    lastUpdate: overrides.lastUpdate ?? '21/08/2025 18:37',
    eScript: overrides.eScript ?? 'Status: Active',
    status: overrides.status ?? 'Active',
    badges: overrides.badges,
  };
}

const regularMeds: Medication[] = Array.from({ length: 10 }, (_, i) =>
  genMed(
    `reg-${i + 1}`,
    `Regular medicine ${i + 1}`,
    i === 2
      ? {
          name: 'Rituximab (ECP) 1 mg injection',
          details: 'Inject 120 to 130 mg at midday',
          route: 'Intravenous',
          dose: '120 to 130 mg',
          frequency: 'midi',
          badges: ['Administered', 'SA'],
        }
      : i === 0
      ? {
          name: 'Cocaine 4% (40 mg/mL) solution',
          details: 'Take Twelve mL once daily',
          route: 'Intramuscular',
          dose: '12 mL',
          strength: '4% (40 mg / 1 mL)',
          frequency: 'once daily',
        }
      : {}
  )
);

const prnMeds: Medication[] = Array.from({ length: 10 }, (_, i) =>
  genMed(
    `prn-${i + 1}`,
    `PRN medicine ${i + 1}`,
    i === 0
      ? {
          name: 'Cyclogyl eye drops 1% (10 mg/mL)',
          details: 'Use One Hundred Fifty drop(s) at night when required',
          route: 'Intravenous',
          dose: '150 drop(s)',
          frequency: 'nocte',
          strength: '1% (10 mg / 1 mL)',
          badges: ['Titrated Med'],
        }
      : {}
  )
);

const statMeds: Medication[] = Array.from({ length: 10 }, (_, i) =>
  genMed(
    `stat-${i + 1}`,
    `STAT medicine ${i + 1}`,
    i === 0
      ? {
          name: 'Cyclogyl eye drops 1% (10 mg/mL)',
          details: 'Use 147 to 198 drop(s) immediately',
          route: 'Intravenous',
          dose: '147 to 198 drop(s)',
          frequency: 'STAT',
          strength: '1% (10 mg / 1 mL)',
          badges: ['Titrated Med', 'Administered'],
        }
      : { frequency: 'STAT' }
  )
);

export const mockMedicationSections: MedicationSection[] = [
  {
    title: 'Regular',
    medications: regularMeds,
  },
  {
    title: 'PRN',
    medications: prnMeds,
  },
  {
    title: 'Stat',
    medications: statMeds,
  },
];