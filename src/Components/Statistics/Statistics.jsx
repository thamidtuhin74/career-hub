import React from 'react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
const Statistics = () => {

  const data = [
    {
      Assignment_id: 1,
      Assignment_name: "Assignment 1",
      Assignment_marks: 57

    },
    {
      Assignment_id: 2,
      Assignment_name: "Assignment 2",
      Assignment_marks: 28

    },
    {
      Assignment_id: 3,
      Assignment_name: "Assignment 3",
      Assignment_marks: 48

    },
    {
      Assignment_id: 4,
      Assignment_name: "Assignment 3",
      Assignment_marks: 59

    },
    {
      Assignment_id: 5,
      Assignment_name: "Assignment 5",
      Assignment_marks: 49

    },
    {
      Assignment_id: 6,
      Assignment_name: "Assignment 6",
      Assignment_marks: 18

    },
    {
      Assignment_id: 7,
      Assignment_name: "Assignment 7",
      Assignment_marks: 60

    },
  ];


  return (
    <div style={{ width: '100%', height: 300 }}>
      <p className='mb-20 text-center font-bold text-green-500 mt-4'>Assignment Marks </p>
  
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Assignment_name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Assignment_marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Statistics;



