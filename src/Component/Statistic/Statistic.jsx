import React from 'react';
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Assignment A", value: 57 },
  { name: "Assignment B", value: 28 },
  { name: "Assignment C", value: 48 },
  { name: "Assignment D", value: 59 },
  { name: "Assignment A", value: 49 },
  { name: "Assignment B", value: 18 },
  { name: "Assignment C", value: 60 },
  { name: "Assignment D", value: 56 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const Statistic = () => {
    return (
        <div>
            <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
        </div>
    );
};

export default Statistic;