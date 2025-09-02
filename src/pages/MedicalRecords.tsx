import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { PatientHeader } from '../components/PatientHeader';
import { MedicationTable } from '../components/MedicationTable';
import { mockPatient, mockMedicationSections } from '../data/mockData';

const MedicalRecords: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    console.log('Searching for:', value);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyChart = () => {
    console.log('Copying chart...');
  };

  const handleExportChart = () => {
    console.log('Exporting chart...');
  };

  const handleGenerateScript = () => {
    console.log('Generating script...');
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'hsl(212, 92%, 45%)',
          colorBgBase: 'hsl(0, 0%, 98%)',
          colorText: 'hsl(213, 27%, 18%)',
          colorBorder: 'hsl(214, 32%, 91%)',
          colorBgContainer: 'hsl(0, 0%, 100%)',
        },
      }}
    >
      <div className="min-h-screen bg-background">
        <PatientHeader
          patient={mockPatient}
          onSearch={handleSearch}
          onPrint={handlePrint}
          onCopyChart={handleCopyChart}
          onExportChart={handleExportChart}
          onGenerateScript={handleGenerateScript}
        />
        <div className="relative">
          <MedicationTable sections={mockMedicationSections} headerOffset={140} />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default MedicalRecords;