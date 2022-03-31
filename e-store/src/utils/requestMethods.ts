import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2U4NzY1NjcxMmZiMjVjNmU5MTdjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc0NzkxOSwiZXhwIjoxNjQ5MDA3MTE5fQ.24QHV8q2SjMgz8RijgTlLGtdG95J7HI6H41AItJPA9I';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `bearer ${token}` },
});
