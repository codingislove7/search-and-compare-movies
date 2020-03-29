const fetchData = async () => {
  const respnse = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "683df0d6",
      s: "avengers"
    }
  });
};
