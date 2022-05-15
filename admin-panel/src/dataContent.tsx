import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const userColumns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{
		field: 'user',
		headerName: 'User',
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 230,
	},
	{
		field: 'transaction',
		headerName: 'Transaction Volume',
		width: 160,
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 140,
		renderCell: (params) => {
			return (
				<div className={`cellWithStatus ${params.row.status}`}>
					{params.row.status}
				</div>
			);
		},
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		username: 'Snow',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		status: 'active',
		email: '1snow@gmail.com',
		transaction: '$120.00',
	},
	{
		id: 2,
		username: 'Jamie Lannister',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '2snow@gmail.com',
		status: 'passive',
		transaction: '$120.00',
	},
	{
		id: 3,
		username: 'Lannister',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '3snow@gmail.com',
		status: 'pending',
		transaction: '$120.00',
	},
	{
		id: 4,
		username: 'Stark',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '4snow@gmail.com',
		status: 'active',
		transaction: '$120.00',
	},
	{
		id: 5,
		username: 'Targaryen',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '5snow@gmail.com',
		status: 'passive',
		transaction: '$120.00',
	},
	{
		id: 6,
		username: 'Melisandre',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '6snow@gmail.com',
		status: 'active',
		transaction: '$120.00',
	},
	{
		id: 7,
		username: 'Clifford',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '7snow@gmail.com',
		status: 'passive',
		transaction: '$120.00',
	},
	{
		id: 8,
		username: 'Frances',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '8snow@gmail.com',
		status: 'active',
		transaction: '$120.00',
	},
	{
		id: 9,
		username: 'Roxie',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: 'snow@gmail.com',
		status: 'pending',
		transaction: '$120.00',
	},
	{
		id: 10,
		username: 'Roxie',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: 'snow@gmail.com',
		status: 'active',
		transaction: '$120.00',
	},
];
