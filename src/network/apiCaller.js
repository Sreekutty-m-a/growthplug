const apiCaller = (method = "GET", URL = "", data = null) =>
  fetch(URL, { method: method, body: data ? JSON.stringify(data) : null })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });

export default apiCaller;