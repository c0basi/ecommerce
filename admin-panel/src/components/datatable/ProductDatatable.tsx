import React, { useState } from 'react';
import { productData, productRows } from '../../data';
import { productColumns } from '../../dataContent';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import './ProductDatatable.scss';

const ProductDatatable = () => {
	const [data, setData] = useState(productRows);

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
					<>
						<Link to={'/products/' + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutlineIcon
							className="productListDelete"
							onClick={(e: React.MouseEvent) => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<DataGrid
				sx={{ fontSize: '1.3rem' }}
				rows={data}
				columns={productColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default ProductDatatable;
