import React, { useEffect, useState } from 'react';
import TrainingItem from './TrainingItem';
import '../../../styles/TrainingItem.scss'
import Title from '../../Title';
interface Training {
  id: number;
  name: string;
  amount: number;
}

const TrainingList: React.FC = () => {
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/prices/')
      .then((response) => response.json())
      .then((data) => {
        setTrainings(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container prices-container">
      <div className="prices-title">
        <Title text="Prices" size="large" color="var(--White)" lineHeight="168px"/>
      </div>
      <div className="prices-prices">
        {trainings.map((training) => (
        <TrainingItem
          key={training.id}
          name={training.name}
          amount={training.amount}
        />
      ))}
      </div>

    </div>
  );
};

export default TrainingList;
