import routes from '../routes';

const API_KEY = 'AIzaSyC1FuH5YL5uipNBGgSTHGsGMNUnqhc62Js'; // надо скрыть
// &maxResults=30

const bookApi = (params) => {
  const subject = params.category === 'all' ? '' : `+subject:${params.category}`;
  return `${routes.baseUrl}/volumes?q=${params.input}${subject}&orderBy=${params.sortBy}&key=${API_KEY}`;
};

export default bookApi;
