import React from 'react';
import '../../../styles/TrainingItem.scss'

interface TrainingItemProps {
  name: string;
  amount: number;
}

const TrainingItem: React.FC<TrainingItemProps> = ({ name, amount }) => {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        border: '1px solid var(--yellow-)',
        width: '320px',
        height: '300px',
        padding: '55px 60px',
      }}
    >
      <h3 className="prices-name">{name}</h3>
      <p className="prices-int">{amount} € </p>
    </div>
  );
};

export default TrainingItem;
