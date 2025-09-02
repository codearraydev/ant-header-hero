import React, { useEffect } from 'react';
import { Table, Typography, Space, Button } from 'antd';
import { MoreOutlined, InfoCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Medication, MedicationSection } from '../types/medication';
import { MedicationBadge } from './MedicationBadge';

const { Text, Paragraph } = Typography;

interface MedicationTableProps {
  sections: MedicationSection[];
  headerOffset?: number; // pixels from top for sticky headers
}

export const MedicationTable: React.FC<MedicationTableProps> = ({ sections, headerOffset = 140 }) => {
  useEffect(() => {
    console.log('MedicationTable mounted - sections:', sections.length);
    console.log('Header offset:', headerOffset);
  }, [sections.length, headerOffset]);

  const columns: ColumnsType<Medication> = [
    {
      title: 'Medicine',
      dataIndex: 'medicineDisplayName',
      key: 'medicineDisplayName',
      width: 360,
      fixed: 'left',
      render: (_, record) => (
        <div className="py-2">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Text strong className="text-primary text-sm block mb-1">
                {record.medicineDisplayName}
              </Text>
              <div className="space-y-1">
                <Text className="text-xs text-muted-foreground block italic">
                  {record.precriptionInstruction}
                </Text>
                <Text className="text-xs text-muted-foreground block">
                  Start: {new Date(record.startDate).toLocaleDateString()}
                </Text>
              </div>
              {record.badges && record.badges.length > 0 && (
                <div className="flex space-x-1 mt-2">
                  {record.badges.map((badge, index) => (
                    <MedicationBadge key={index} type={badge} />
                  ))}
                </div>
              )}
            </div>
            <Button 
              type="text" 
              icon={<MoreOutlined />} 
              size="small"
              className="text-muted-foreground hover:text-foreground"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Strength',
      dataIndex: 'strength',
      key: 'strength',
      width: 120,
      render: (strength) => <Text className="text-sm">{strength}</Text>,
    },
    {
      title: 'Route',
      dataIndex: 'routeDisplayName',
      key: 'routeDisplayName',
      width: 120,
      render: (route) => <Text className="text-sm">{route}</Text>,
    },
    {
      title: 'Dose',
      dataIndex: 'dose',
      key: 'dose',
      width: 120,
      render: (dose) => <Text className="text-sm">{dose}</Text>,
    },
    {
      title: 'Frequency',
      dataIndex: 'frequencyDescription',
      key: 'frequencyDescription',
      width: 100,
      render: (frequency) => <Text className="text-sm">{frequency}</Text>,
    },
    {
      title: 'Date Last Rx',
      dataIndex: 'insertedAt',
      key: 'insertedAt',
      width: 120,
      render: (date) => <Text className="text-sm">{new Date(date).toLocaleDateString()}</Text>,
    },
    {
      title: 'Date Last Dispense',
      dataIndex: 'dispenseStartDate',
      key: 'dispenseStartDate',
      width: 140,
      render: (_, record) => (
        <div className="flex items-center space-x-2">
          <InfoCircleOutlined className="text-muted-foreground" />
          <div>
            <Text className="text-sm block">Date: {record.dispenseStartDate || '-'}</Text>
            <Text className="text-xs text-muted-foreground">Time: {new Date(record.updatedAt).toLocaleString()}</Text>
          </div>
        </div>
      ),
    },
    {
      title: 'Last Update',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 120,
      render: (_, record) => (
        <div>
          <Text className="text-sm block">Status: {record.isInUse ? 'Active' : 'Inactive'}</Text>
          <Text className="text-xs text-muted-foreground">Date: {new Date(record.updatedAt).toLocaleString()}</Text>
        </div>
      ),
    },
    {
      title: 'eScript',
      dataIndex: 'userName',
      key: 'userName',
      width: 100,
      render: (userName) => <Text className="text-sm">By: {userName}</Text>,
    },
  ];

  return (
    <div className="medication-content">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-0">
          <div 
            id={`section-${section.title.toLowerCase()}`}
            className="sticky-section-header" 
            style={{ 
              position: 'sticky', 
              top: headerOffset + 12,
              zIndex: 50,
              background: 'hsl(var(--table-header))',
              padding: '12px 16px',
              borderBottom: '1px solid hsl(var(--table-border))',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Text strong className="text-lg text-foreground">
              {section.title}
            </Text>
          </div>
          <Table
            columns={columns}
            dataSource={section.medications}
            rowKey="activeMedID"
            pagination={false}
            scroll={{ x: 1400, scrollToFirstRowOnChange: true }}
            sticky={{ 
              offsetHeader: headerOffset + 44 + 12, // main header + section header height + margin
              getContainer: () => document.querySelector('.scrollable-container') as any 
            }}
            size="small"
            className="[&_.ant-table-thead>tr>th]:bg-table-header [&_.ant-table-thead>tr>th]:border-table-border [&_.ant-table-thead>tr>th]:text-foreground [&_.ant-table-thead>tr>th]:font-medium [&_.ant-table-tbody>tr>td]:border-table-border [&_.ant-table-tbody>tr:hover>td]:bg-table-hover [&_.ant-table-ping-left]:shadow-[inset_10px_0_8px_-8px_rgba(0,0,0,0.15)] [&_.ant-table-ping-right]:shadow-[inset_-10px_0_8px_-8px_rgba(0,0,0,0.15)]"
            rowClassName="hover:bg-table-hover"
          />
        </div>
      ))}
    </div>
  );
};