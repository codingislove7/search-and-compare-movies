const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "683df0d6",
      s: searchTerm
    }
  });
  console.log(response.data);
};
fetchData();

const input = document.querySelector("input");
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = event => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
