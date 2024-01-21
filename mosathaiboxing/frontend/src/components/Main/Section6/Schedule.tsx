import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../styles/Schedule.scss';
import Title from "../../Title";

interface ScheduleRow {
  id: number;
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}

const Schedule: React.FC = () => {
  const [scheduleData, setScheduleData] =  useState<ScheduleRow[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/v1/shedule/')
      .then((response) => {
        setScheduleData(response.data);
      })
      .catch((error) => {
        console.error('Mistake/error fetching data: ', error);
      });
  }, []);

  return (
    <div className="schedule-table-container">
      <div className="scedule-title">
        <Title text="Schedule" size="large" color="var(--White)" lineHeight="168px"/>
      </div>
      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row) => (
              <tr key={row.id}>
                <td>{row.time}</td>
                <td>{row.monday}</td>
                <td>{row.tuesday}</td>
                <td>{row.wednesday}</td>
                <td>{row.thursday}</td>
                <td>{row.friday}</td>
                <td>{row.saturday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
