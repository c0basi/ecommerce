import React from 'react';
import './Datatable.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataContent';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';

// const columns: GridColDef[] = [
// 	{ field: 'id', headerName: 'ID', width: 70 },
// 	{ field: 'firstName', headerName: 'First name', width: 130 },
// 	{ field: 'lastName', headerName: 'Last name', width: 130 },
// 	{
// 		field: 'age',
// 		headerName: 'Age',
// 		type: 'number',
// 		width: 90,
// 	},
// 	{
// 		field: 'fullName',
// 		headerName: 'Full name',
// 		description: 'This column has a value getter and is not sortable.',
// 		sortable: false,
// 		width: 160,
// 		valueGetter: (params: GridValueGetterParams) =>
// 			`${params.row.firstName || ''} ${params.row.lastName || ''}`,
// 		renderCell: (params) => (
// 			<>
// 				<span>{params.row.lastName}</span>
// 				<p>{params.row.age}</p>
// 			</>
// 		),
// 	},
// ];

// const rows = [
// 	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// 	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// 	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// 	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// 	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// 	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// 	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// 	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// 	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Datatable = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id: number) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn: GridColDef[] = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellActions">
						<Link to={'/user/' + params.row.id} className="editButton">
							Edit
						</Link>
						<div
							className="deleteButton"
							onClick={(e: React.MouseEvent) => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
		// {
		//     field: "action",
		//     headerName: "Action",
		//     width: 150,
		//     renderCell: (params) => {
		//       return (
		//         <>
		//           <Link to={"/user/" + params.row.id}>
		//             <button className="userListEdit">Edit</button>
		//           </Link>
		//           <DeleteOutlineIcon
		//             className="userListDelete"
		//             onClick={(e: React.MouseEvent) => handleDelete(params.row.id)}
		//           />
		//         </>
		//       );
		//     },
		//   },
	];

	return (
		<div className="datatable">
			<DataGrid
				sx={{ fontSize: '1.3rem' }}
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
