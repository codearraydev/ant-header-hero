import React from 'react';
import { Tag } from 'antd';

interface MedicationBadgeProps {
  type: 'Administered' | 'SA' | 'Titrated Med';
}

export const MedicationBadge: React.FC<MedicationBadgeProps> = ({ type }) => {
  const getTagProps = () => {
    switch (type) {
      case 'Administered':
        return {
          color: '#52c41a',
          className: 'bg-medical-administered border-medical-administered text-white'
        };
      case 'SA':
        return {
          color: '#ff4d4f',
          className: 'bg-medical-sa border-medical-sa text-white'
        };
      case 'Titrated Med':
        return {
          color: '#1890ff',
          className: 'bg-medical-titrated border-medical-titrated text-white'
        };
      default:
        return {
          color: 'default'
        };
    }
  };

  const props = getTagProps();

  return (
    <Tag {...props} className={`text-xs font-medium ${props.className || ''}`}>
      {type}
    </Tag>
  );
};