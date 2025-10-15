import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const RatingsGraph = ({ ratings }) => {
    const COLORS = ["#FF8811"];

    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                <BarChart
                    data={ratings}
                    layout="vertical"
                >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" reversed />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" barSize={20}>
                        {ratings.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingsGraph;
