import React from 'react';
import './NewProduct.scss';

const NewProduct = () => {
	return (
		<div className="newProduct">
			<h1 className="newProduct--title">New Product</h1>
			<form className="newProduct--form">
				<div className="newProduct--form__item">
					<label>Image</label>
					<input type="file" id="file" />
				</div>
				<div className="newProduct--form__item">
					<label>Name</label>
					<input type="text" placeholder="Apple Airpods" />
				</div>
				<div className="newProduct--form__item">
					<label>Stock</label>
					<input type="text" placeholder="123" />
				</div>
				<div className="newProduct--form__item">
					<label>Active</label>
					<select name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className="newProduct--form__button">Create</button>
			</form>
		</div>
	);
};

export default NewProduct;
