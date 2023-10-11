import routes from '../routes';

const API_KEY = process.env.REACT_APP_API_KEY;
const START_INDEX = 0;

const bookApi = (params, startIndex = START_INDEX) => {
  const { category, input, sortBy } = params;
  const subject = category === 'all' ? '' : `+subject:${category}`;

  return `${routes.baseUrl}/volumes?q=${input}${subject}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=24&key=${API_KEY}`;
};

export default bookApi;
