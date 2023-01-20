const url = "https://api.github.com/usedrs?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchPromesa = fetch(url);

// fetchPromesa
//   .then((res) => res.json())
//   .then(console.log)
//   .catch(err => console.warn('error de usuraio', err));

fetchPromesa
  .then(manejaErrores)
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => console.warn("error de usuraio", err));
