const getTodos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_BASE_URL.dev}/todo`)
      .then(({ data: response }) => {
        resolve(response?.data);
      })
      .catch(reject);
  });
};

const add = (body) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_BASE_URL.dev}/todo`, body).then(resolve).catch(reject);
  });
};

const removeById = (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${API_BASE_URL.dev}/todo/${id}`).then(resolve).catch(reject);
  });
};

const updateById = (id, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${API_BASE_URL.dev}/todo/${id}`, body)
      .then(resolve)
      .catch(reject);
  });
};
