import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayJob from "./DisplayJob";
import hookActions from "../actions/hookActions";

function ReadAndDelete() {
  const [vacancy, setVacancy] = useState([]);
  const [remove, setRemove] = useState([]);

  useEffect(() => {
    hookActions.getDatabaseItems(setVacancy);
    const fetchItems = async () => {
      axios
        .get("/api/items")
        .then((res) => {
          setVacancy(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchItems();
  }, [remove, setVacancy]);

  const removeItem = (e, id) => {
    e.preventDefault();
    axios
      .delete(`/api/items/${id}`)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.error(error);
      });
    setRemove(vacancy.filter((item) => item.id !== id));
  };

  const jobInfo =
    vacancy.length === 0 ? (
      <h2 className="displayJob displayJob__message">
        {" "}
        There are currently no jobs listed
      </h2>
    ) : (
      vacancy.map((jobPost, id, index) => {
        return (
          <DisplayJob
            key={id}
            jobPost={jobPost}
            index={id}
            removeItem={removeItem}
          />
        );
      })
    );

  return (
    <section
      data-test="component-ReadAndDelete"
      className="content__container displayJob__container"
    >
      <p className="displayJob__header">Vacancies</p>
      {jobInfo}
    </section>
  );
}

export default ReadAndDelete;
