import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/user/userSlice';
import { AppDispatch } from '../../redux/store';

import { login } from '../../redux/user/userActions';
import './Login.scss';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch: AppDispatch = useDispatch();
	const { loading, error } = useSelector(userSelector);

	const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(login({ username, password }));
	};
	return (
		<div className="login">
			<input
				style={{ padding: 10, marginBottom: 20 }}
				type="text"
				placeholder="username"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setUsername(e.currentTarget.value)
				}
			/>
			<input
				style={{ padding: 10, marginBottom: 20 }}
				type="password"
				placeholder="password"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setPassword(e.currentTarget.value)
				}
			/>
			<button onClick={handleLoginClick}>Login</button>
		</div>
	);
};

export default Login;
