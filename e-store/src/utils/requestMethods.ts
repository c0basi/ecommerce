import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2U4NzY1NjcxMmZiMjVjNmU5MTdjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODY5MTUwMiwiZXhwIjoxNjQ4OTUwNzAyfQ.NMfYIYZ7XcD5fMFc8B7Xpk2iAoTx0l6ckQ18nw6l6co';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `bearer ${token}` },
});
