import React from 'react';
import { Alert, Button, Input, Space, Typography } from 'antd';
import { SearchOutlined, PrinterOutlined, CopyOutlined, ExportOutlined, FileTextOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Patient } from '../types/medication';

const { Title, Text } = Typography;
const { Search } = Input;

interface PatientHeaderProps {
  patient: Patient;
  onSearch?: (value: string) => void;
  onPrint?: () => void;
  onCopyChart?: () => void;
  onExportChart?: () => void;
  onGenerateScript?: () => void;
}

export const PatientHeader: React.FC<PatientHeaderProps> = ({
  patient,
  onSearch,
  onPrint,
  onCopyChart,
  onExportChart,
  onGenerateScript
}) => {
  return (
    <div className="main-patient-header bg-card p-6 border-b border-table-border shadow-sm">
      {/* Patient Info Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Text className="text-primary font-medium">A</Text>
            </span>
            <div>
              <Title level={4} className="!mb-0 !text-foreground">{patient.name}</Title>
              <Text className="text-muted-foreground text-sm">00132 | PW | {patient.gender}</Text>
            </div>
          </div>
          <div className="text-sm">
            <Text className="text-muted-foreground">DOB: </Text>
            <Text>{patient.dateOfBirth}</Text>
            <span className="mx-4">
              <Text className="text-muted-foreground">Age: </Text>
              <Text>{patient.age}</Text>
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            type="default" 
            icon={<ExclamationCircleOutlined />}
            className="bg-medical-danger/10 border-medical-danger/20 text-medical-danger hover:bg-medical-danger/20"
          >
            Adverse Drug Reaction
          </Button>
          <Text className="text-sm bg-medical-success/10 text-medical-success px-2 py-1 rounded">
            Chart Rx
          </Text>
        </div>
      </div>

      {/* Alert */}
      <Alert
        message="Allergies and Adverse Drug Reactions are not displayed and cannot be recorded here - Please ask the patient and refer to your district hospital's usual allergy / ADR repository"
        type="warning"
        showIcon
        className="mb-4 bg-medical-warning/10 border-medical-warning/20"
      />

      {/* Search and Actions Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Search
            placeholder="Search medicine name..."
            allowClear
            onSearch={onSearch}
            style={{ width: 300 }}
            className="[&_.ant-input]:bg-background [&_.ant-input]:border-border"
          />
          <div className="flex space-x-2">
            <Button size="small" className="bg-secondary text-secondary-foreground">Reset</Button>
            <Button size="small" type="primary" icon={<SearchOutlined />}>Search</Button>
          </div>
        </div>

        <Space>
          <Button icon={<PrinterOutlined />} onClick={onPrint}>
            Print
          </Button>
          <Button icon={<CopyOutlined />} onClick={onCopyChart}>
            Copy Chart
          </Button>
          <Button icon={<ExportOutlined />} onClick={onExportChart}>
            Export Chart
          </Button>
          <Button 
            type="primary" 
            icon={<FileTextOutlined />} 
            onClick={onGenerateScript}
            className="bg-medical-success hover:bg-medical-success/90 border-medical-success"
          >
            Generate Script
          </Button>
        </Space>
      </div>

      {/* Medicine Info Tags */}
      <div className="flex items-center space-x-2 mt-4 text-sm">
        <Text className="text-muted-foreground">This list shows the patient's medicines within OctaneMeds. It may not include all the medicines they are taking — see the </Text>
        <Button type="link" size="small" className="!p-0 !h-auto text-primary">ePS Med History page</Button>
      </div>

      <div className="flex space-x-2 mt-2">
        <span className="bg-medical-administered text-white px-2 py-1 rounded text-xs">Regular (10)</span>
        <span className="bg-medical-info text-white px-2 py-1 rounded text-xs">PRN (10)</span>
        <span className="bg-medical-warning text-white px-2 py-1 rounded text-xs">STAT (10)</span>
        <span className="bg-medical-danger text-white px-2 py-1 rounded text-xs">Discontinued (1)</span>
      </div>
    </div>
  );
};