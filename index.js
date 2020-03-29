const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "683df0d6",
      s: "avengers"
    }
  });
  console.log(response.data);
};
fetchData();
