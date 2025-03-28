import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../Configurl";

export const useContent = () => {
  const [contentData, setcontentData] = useState([]);

  async function fetchdata() {
    try {
      const response = await axios({
        method: "get",
        url: BACKEND_URL + "/api/v1/content",
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setcontentData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {

    const Inteval = setInterval(() => {
      fetchdata();
    }, 5 * 1000);

    return () => {
      clearInterval(Inteval);
    };
  }, []);

  return { contentData: contentData, fetchdata: fetchdata };
};
