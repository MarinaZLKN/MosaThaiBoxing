import React, { useEffect, useState } from 'react';
import Trainer from './Trainer';
import '../../../styles/Trainer.scss';
import Title from "../../Title";

interface TrainerProps {
  id: number;
  name: string;
  photo: string;
  description: string;
  is_available: boolean;
}

const TrainerList: React.FC = () => {
  const [trainers, setTrainers] = useState<TrainerProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/v1/trainers/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setTrainers(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container trainer-list_container">
      <div className="trainer-list_title">
        <Title text="coaches" size="large" color="var(--White)" lineHeight="168px"/>
      </div>
      <div className="trainers">
        {trainers.map((trainer) => (
        <Trainer key={trainer.id} {...trainer} />
      ))}
      </div>

    </div>
  );
};

export default TrainerList;
