import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { PatientHeader } from '../components/PatientHeader';
import { MedicationTable } from '../components/MedicationTable';
import { mockPatient, mockMedicationSections } from '../data/mockData';

const MedicalRecords: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    console.log('MedicalRecords component mounted');
    
    // Debugging: Check if sticky elements are working
    const checkSticky = () => {
      const stickyElements = document.querySelectorAll('.sticky-header, .sticky-section-header');
      console.log('Found sticky elements:', stickyElements.length);
      stickyElements.forEach((el, index) => {
        const computedStyle = window.getComputedStyle(el);
        console.log(`Sticky element ${index}:`, {
          position: computedStyle.position,
          top: computedStyle.top,
          zIndex: computedStyle.zIndex
        });
      });
    };
    
    setTimeout(checkSticky, 1000); // Check after component renders
  }, []);

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
      <div className="scrollable-container" style={{ height: '100vh', overflowY: 'auto' }}>
        <PatientHeader
          patient={mockPatient}
          onSearch={handleSearch}
          onPrint={handlePrint}
          onCopyChart={handleCopyChart}
          onExportChart={handleExportChart}
          onGenerateScript={handleGenerateScript}
        />
        <MedicationTable sections={mockMedicationSections} headerOffset={140} />
      </div>
    </ConfigProvider>
  );
};

export default MedicalRecords;