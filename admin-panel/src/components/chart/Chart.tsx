import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import { chartData } from '../../types/DataTypes';

interface chartProps {
	title: string;
	dataKey: string;
	data: chartData[];
	grid: boolean;
}
const chart = ({ title, dataKey, grid, data }: chartProps) => {
	return (
		<div className="chart">
			<h3 className="chart--title">{title}</h3>
			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
					<Tooltip />
					{grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default chart;