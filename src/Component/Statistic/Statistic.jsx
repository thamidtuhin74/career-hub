import React from 'react';
import { PieChart, Pie, Sector, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Assignment 1", value: 57 },
  { name: "Assignment 2", value: 28 },
  { name: "Assignment 3", value: 48 },
  { name: "Assignment 4", value: 59 },
  { name: "Assignment 5", value: 49 },
  { name: "Assignment 6", value: 18 },
  { name: "Assignment 7", value: 60 },
  { name: "Assignment 8", value: 56 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Statistic = () => {
    return (
        <div className='container-wrapper text-center grid md:grid-cols-2 gap-6 '>
            
            <div className="stat-left p-10">
                <h2 className='text-black font-extrabold text-3xl'>Pie Chart of my Assignment marks</h2>
                {
                    data.map(d => <p><span>{d.name}</span> : {d.value}</p>)
                }
            </div>
            <div className="stat-right">
                <PieChart width={400} height={400} className='w-full'>
                    <Pie
                        dataKey="value"
                        startAngle={360}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    // <Pie dataKey="value" data={data02}  innerRadius={40} outerRadius={80} fill="#82ca9d" />

          
                    ))}
                    </Pie>
                </PieChart>
            </div>
            
        </div>
    );
};


export default Statistic;