import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2U4NzY1NjcxMmZiMjVjNmU5MTdjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5MzM3OCwiZXhwIjoxNjQ5MDUyNTc4fQ.GVhwp7i2bXLhjfnpEHvDcaB-rhXiGwGE9i0vS1I9BKI';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `bearer ${token}` },
});
