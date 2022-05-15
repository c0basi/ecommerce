import React from 'react';
import './Table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Data } from '../../types/DataTypes';
const rows = [
	{
		id: 1143155,
		img: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		customer: 'John Smith',
		date: '2 Jun 2021',
		amount: 785,
		status: 'Approved',
	},
	{
		id: 2235235,
		img: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		customer: 'John Smith',
		date: '1 March',
		amount: 785,
		status: 'Approved',
	},
	{
		id: 2342353,
		img: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		customer: 'John Smith',
		date: '2 Jun 2021',
		amount: 785,
		status: 'Pending',
	},
	{
		id: 2357741,
		img: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		customer: 'John Smith',
		date: '1 March',
		amount: 785,
		status: 'Approved',
	},
	{
		id: 2342355,
		img: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		customer: 'John Smith',
		date: '2 Jun 2021',
		amount: 785,
		status: 'Pending',
	},
];
const TableContent = () => {
	return (
		<div className="table">
			<TableContainer component={Paper} className="table">
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className="tableCell">Customer</TableCell>
							<TableCell className="tableCell">Date</TableCell>
							<TableCell className="tableCell">Amount</TableCell>
							<TableCell className="tableCell">Status</TableCell>
							{/* <TableCell className="tableCell">Amount</TableCell>
							<TableCell className="tableCell">Payment Method</TableCell>
							<TableCell className="tableCell">Status</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									<div className="customerWrapper">
										<img src={row.img} alt={row.customer} />
										{row.customer}
									</div>
								</TableCell>
								<TableCell className="tableCell">{row.date}</TableCell>
								<TableCell className="tableCell">{row.amount}</TableCell>
								<TableCell className="tableCell">
									<span className={`status ${row.status}`}>{row.status}</span>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableContent;
