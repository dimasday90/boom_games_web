import { useState, useEffect } from "react";
import axios from "axios";

export default function useRAWGFetcher(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: url,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "067232f597mshc20b09566a2a287p176e17jsnc52fbc1e0652"
      }
    })
      .then(({ data }) => {        
        setData(data.results);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { error, loading, data };
}
