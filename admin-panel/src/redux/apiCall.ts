import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

// const token =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2U4NzY1NjcxMmZiMjVjNmU5MTdjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjcwMzk5OSwiZXhwIjoxNjUyOTYzMTk5fQ.GFcnqn1jTIYXbmuWoMAGDE11uFGSAZRDLajNye28NPY';

const token: string | null = JSON.parse(
	JSON.parse(localStorage.getItem('persist:root') || '').user
).currentUser.accessToken;

console.log(token);

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `bearer ${token}` },
});
