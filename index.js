const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "683df0d6",
      s: searchTerm
    }
  });
  return response.data.Search;
};
fetchData();

const input = document.querySelector("input");

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

input.addEventListener("input", debounce(onInput, 500));
