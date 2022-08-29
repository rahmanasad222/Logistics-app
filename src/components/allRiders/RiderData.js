import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RiderDisplay from "./RiderTable/RiderDisplay";

const RiderData = () => {
  const [rider, setRider] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  // console.log("this is token in dashboard component",rider)
  useEffect(() => {
    const pageNo = page.toString();
    const url = `${process.env.REACT_APP_BASE_URL}/alerts_rider?page=` + pageNo;
    fetch(url, {
      method: "GET",
      headers: window.h,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data,'this is data from get api')

        setRider(data);

        // console.log(rider,'this is rider data')
      });
  }, [page]);
  //  generinc functions. URL search param.

  const handlePage = (e) => {
    if (e.target.value === "next") {
      setPage(page + 1);
    } else if (e.target.value === "prev") {
      if (page === 1) {
        alert("You are already on page 1");
        return page;
      } else {
        setPage(page - 1);
      }
    }
  };

  const handleclick = (id, phone, name1) => {
    const pageNo = page.toString();
    // console.log("this is phone", phone);
    // const Id = id;
    const state = { pageNo, name1, id, phone };
    console.log("this is my state:", state);
    if (id && page && name1 && phone) {
      navigate("/riderChat", { state: { pageNo, name1, Id: id, phone } });
    }
  };

  return (
    <div>
      <>
        <h1>dashboard</h1>
        {rider.results ? <RiderDisplay rider={rider} /> : null}
      </>
    </div>
  );
};

export default RiderData;
