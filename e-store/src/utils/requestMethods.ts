import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2U4NzY1NjcxMmZiMjVjNmU5MTdjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU5OTMyMywiZXhwIjoxNjQ4ODU4NTIzfQ.MAq6rGOCxISoNemX2oLW1Q5BERKe3z1UVRMd2l9WHQc';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `bearer ${token}` },
});
