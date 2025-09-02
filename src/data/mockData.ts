import { Patient, MedicationSection, Medication } from '../types/medication';

export const mockPatient: Patient = {
  id: '1',
  name: 'Adeel Patient',
  dateOfBirth: '03/07/1992',
  age: '33 Y',
  gender: 'M',
};

export const mockMedicationData = {
  "status": "SUCCESS",
  "errorMessage": "",
  "dataMessage": [
    {
      "frequency": "Regular",
      "medicineCount": 1,
      "medicines": [
        {
          "rxDate": null,
          "activeMedID": "nsqy815j8lLMJzUR1YTxEybMi7lJMvK6J9r2lkqfesM=",
          "medicineID": "nsqy815j8lLMJzUR1YTxE_oJcBQwiNYTAMmkeg6Yz_s=",
          "patientID": "nsqy815j8lLMJzUR1YTxE6uxBMwinBz-ZGep_3o2B5s=",
          "medicineDisplayName": "amino acid formula (without lysine): protein 40 g/100 g + carbohydrate 42 g/100 g + fat 1.5 g/100 g oral liquid: powder for, 12.5 g sachet",
          "frequency": "Regular",
          "strength": null,
          "routeDisplayName": "Intramuscular",
          "frequencyDescription": "once daily",
          "startDate": "2025-08-28T04:31:22",
          "endDate": null,
          "medicineStartDate": null,
          "medicineEndDate": null,
          "dispenseStatus": null,
          "isObsolete": false,
          "isAddedFromVTLRxSystem": null,
          "precriptionInstruction": "Take One mL once daily",
          "indicationType": null,
          "formName": "oral liquid: powder for",
          "reconMedID": "",
          "date": null,
          "isInUse": true,
          "isCanceled": null,
          "dispenseStartDate": null,
          "cancelReason": null,
          "isCanceledBy": null,
          "titrationID": "",
          "scid": null,
          "sctid": "48265321000116102",
          "changedUOMDose": null,
          "insertedBy": null,
          "insertedAt": "2025-08-28T11:31:33.54",
          "userName": "Rida Arooj",
          "dose": "1 mL",
          "medId": "nsqy815j8lLMJzUR1YTxE4Uz1AyN8PdHxCxY6E59zlA=",
          "medicineCode": null,
          "status": null,
          "surName": "RYAN",
          "nhi": "ZCD7709",
          "firstName": null,
          "dateOfBirth": "1995-01-01T00:00:00",
          "age": null,
          "weight": null,
          "height": null,
          "allergies": null,
          "dateStatus": [
            {
              "date": "2025-08-29",
              "status": "[]"
            },
            {
              "date": "2025-08-30",
              "status": "[]"
            },
            {
              "date": "2025-08-31",
              "status": "[]"
            },
            {
              "date": "2025-09-01",
              "status": "[]"
            },
            {
              "date": "2025-09-02",
              "status": "[]"
            }
          ],
          "time": null,
          "comments": null,
          "statusSetBy": null,
          "statusSetAt": null,
          "latestDateTime": null,
          "changedFrequency": null,
          "changedFrequencyID": null,
          "isGeneratePrescription": false,
          "isMedOnHold": false,
          "printBy": null,
          "prescriptionDate": null,
          "isMedStopped": false,
          "isShortTerm": false,
          "medStoppedAt": null,
          "medicineHoldUntil": null,
          "medStopedBy": " ",
          "maxDosePerDay": null,
          "additionalDirection": "",
          "deliveryDirection": null,
          "isMedAdmin": false,
          "updatedAt": "2025-08-28T11:31:33.54",
          "parentActiveMedID": "nsqy815j8lLMJzUR1YTxEybMi7lJMvK6J9r2lkqfesM=",
          "isSAMedicine": true,
          "quantity": "0",
          "quantityunit": "ml(s)",
          "duration": "0",
          "durationtype": 1,
          "isCommonSubstance": false,
          "splitDoses": "[{\"SplitDoseID\":88,\"Dose\":\"1\",\"IsDoseRange\":false,\"FrequencyID\":1}]",
          "isSplitDose": false,
          "badges": ["SA"]
        }
      ]
    },
    {
      "frequency": "PRN",
      "medicineCount": 1,
      "medicines": [
        {
          "rxDate": null,
          "activeMedID": "nsqy815j8lLMJzUR1YTxE-O655SjPrHbGfIkaJFE_2c=",
          "medicineID": "nsqy815j8lLMJzUR1YTxEy6toIirm3lKGZ5KOJsvMc0=",
          "patientID": "nsqy815j8lLMJzUR1YTxE6uxBMwinBz-ZGep_3o2B5s=",
          "medicineDisplayName": "ACAM2000 - vaccina virus live vaccine 25 million plaque forming units percutaneous inoculation: powder for [1 vial] (&) inert substance diluent [1 vial], 1 pack",
          "frequency": "PRN",
          "strength": "(100 million plaque forming units / 1 mL) 250 000 plaque forming units /2.5 microlitre administered dose",
          "routeDisplayName": "Intravenous",
          "frequencyDescription": "TDS",
          "startDate": "2025-08-28T04:32:24",
          "endDate": null,
          "medicineStartDate": null,
          "medicineEndDate": null,
          "dispenseStatus": null,
          "isObsolete": false,
          "isAddedFromVTLRxSystem": null,
          "precriptionInstruction": "Take Three million plaque formi three times a day when required",
          "indicationType": null,
          "formName": "diluent",
          "reconMedID": "",
          "date": null,
          "isInUse": true,
          "isCanceled": null,
          "dispenseStartDate": null,
          "cancelReason": null,
          "isCanceledBy": null,
          "titrationID": "123",
          "scid": null,
          "sctid": "47774721000116106",
          "changedUOMDose": null,
          "insertedBy": null,
          "insertedAt": "2025-09-02T21:07:15.84",
          "userName": "Kanwal Testing",
          "dose": "3 million plaque formi",
          "medId": "nsqy815j8lLMJzUR1YTxE4Uz1AyN8PdHxCxY6E59zlA=",
          "medicineCode": null,
          "status": null,
          "surName": "RYAN",
          "nhi": "ZCD7709",
          "firstName": null,
          "dateOfBirth": "1995-01-01T00:00:00",
          "age": null,
          "weight": null,
          "height": null,
          "allergies": null,
          "dateStatus": [
            {
              "date": "2025-08-29",
              "status": "[]"
            },
            {
              "date": "2025-08-30",
              "status": "[]"
            },
            {
              "date": "2025-08-31",
              "status": "[]"
            },
            {
              "date": "2025-09-01",
              "status": "[]"
            },
            {
              "date": "2025-09-02",
              "status": "[]"
            }
          ],
          "time": null,
          "comments": null,
          "statusSetBy": null,
          "statusSetAt": null,
          "latestDateTime": null,
          "changedFrequency": null,
          "changedFrequencyID": null,
          "isGeneratePrescription": false,
          "isMedOnHold": false,
          "printBy": null,
          "prescriptionDate": null,
          "isMedStopped": false,
          "isShortTerm": false,
          "medStoppedAt": null,
          "medicineHoldUntil": null,
          "medStopedBy": "Kanwal Testing",
          "maxDosePerDay": null,
          "additionalDirection": "",
          "deliveryDirection": null,
          "isMedAdmin": false,
          "updatedAt": "2025-09-02T21:07:15.84",
          "parentActiveMedID": "nsqy815j8lLMJzUR1YTxE-O655SjPrHbGfIkaJFE_2c=",
          "isSAMedicine": false,
          "quantity": "0",
          "quantityunit": "",
          "duration": "0",
          "durationtype": 1,
          "isCommonSubstance": false,
          "splitDoses": "[{\"SplitDoseID\":240,\"Dose\":\"3\",\"IsDoseRange\":false,\"FrequencyID\":3}]",
          "isSplitDose": false,
          "badges": ["Titrated Med"]
        }
      ]
    },
    {
      "frequency": "STAT",
      "medicineCount": 1,
      "medicines": [
        {
          "rxDate": null,
          "activeMedID": "nsqy815j8lLMJzURwYLoKqNVFw4QbvDrsrbPtE=",
          "medicineID": "nsqy815j8lLMJzUR1YTxE2IrFrULkz_NsRy64Er0soU=",
          "patientID": "nsqy815j8lLMJzUR1YTxE6uxBMwinBz-ZGep_3o2B5s=",
          "medicineDisplayName": "Panadol - paracetamol 500 mg tablet",
          "frequency": "Stat",
          "strength": "500 mg",
          "routeDisplayName": "Oral",
          "frequencyDescription": "STAT",
          "startDate": "2025-09-02T14:07:48",
          "endDate": null,
          "medicineStartDate": null,
          "medicineEndDate": null,
          "dispenseStatus": null,
          "isObsolete": false,
          "isAddedFromVTLRxSystem": null,
          "precriptionInstruction": "Take Two tablet immediately",
          "indicationType": null,
          "formName": "tablet: film-coated",
          "reconMedID": "",
          "date": null,
          "isInUse": true,
          "isCanceled": null,
          "dispenseStartDate": null,
          "cancelReason": null,
          "isCanceledBy": null,
          "titrationID": "",
          "scid": null,
          "sctid": "10510501000116104",
          "changedUOMDose": null,
          "insertedBy": null,
          "insertedAt": "2025-09-02T21:07:50.223",
          "userName": "Kanwal Testing",
          "dose": "2 tablet",
          "medId": "nsqy815j8lLMJzUR1YTxE4Uz1AyN8PdHxCxY6E59zlA=",
          "medicineCode": null,
          "status": null,
          "surName": "RYAN",
          "nhi": "ZCD7709",
          "firstName": null,
          "dateOfBirth": "1995-01-01T00:00:00",
          "age": null,
          "weight": null,
          "height": null,
          "allergies": null,
          "dateStatus": [
            {
              "date": "2025-08-29",
              "status": "[]"
            },
            {
              "date": "2025-08-30",
              "status": "[]"
            },
            {
              "date": "2025-08-31",
              "status": "[]"
            },
            {
              "date": "2025-09-01",
              "status": "[]"
            },
            {
              "date": "2025-09-02",
              "status": "[]"
            }
          ],
          "time": null,
          "comments": null,
          "statusSetBy": null,
          "statusSetAt": null,
          "latestDateTime": null,
          "changedFrequency": null,
          "changedFrequencyID": null,
          "isGeneratePrescription": false,
          "isMedOnHold": false,
          "printBy": null,
          "prescriptionDate": null,
          "isMedStopped": false,
          "isShortTerm": false,
          "medStoppedAt": null,
          "medicineHoldUntil": null,
          "medStopedBy": " ",
          "maxDosePerDay": null,
          "additionalDirection": "",
          "deliveryDirection": null,
          "isMedAdmin": true,
          "updatedAt": "2025-09-02T21:07:50.223",
          "parentActiveMedID": "nsqy815j8lLMJzURwYLoKqNVFw4QbvDrsrbPtE=",
          "isSAMedicine": false,
          "quantity": "0",
          "quantityunit": "tab(s)",
          "duration": "0",
          "durationtype": 1,
          "isCommonSubstance": false,
          "splitDoses": "[{\"SplitDoseID\":241,\"Dose\":\"2\",\"IsDoseRange\":false,\"FrequencyID\":8}]",
          "isSplitDose": false,
          "badges": ["Administered"]
        }
      ]
    }
  ]
};

// Transform the API data into the expected format
export const mockMedicationSections: MedicationSection[] = mockMedicationData.dataMessage.map(section => ({
  title: section.frequency as 'Regular' | 'PRN' | 'Stat',
  medications: section.medicines.map(med => ({
    ...med,
    badges: (med.badges || []).filter((badge): badge is 'Administered' | 'SA' | 'Titrated Med' => 
      ['Administered', 'SA', 'Titrated Med'].includes(badge)
    )
  }))
}));