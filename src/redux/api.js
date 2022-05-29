import axios from 'axios';
const path = process.env.PUBLIC_URL;

export const fetchProject = async () => {
	return await axios.get(`${path}/DB/project.json`);
};
