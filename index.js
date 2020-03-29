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
input.addEventListener("input", event => {
  fetchData(event.target.value);
});
