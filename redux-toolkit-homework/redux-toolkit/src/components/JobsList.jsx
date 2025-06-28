import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import { makeArray } from "./JobCard";
import { clearItems, removeFromItems } from "../store/itemsSlice";

export default function JobsList() {
  const dispatch = useDispatch();

  const backup = useSelector((store) => store.jobs);
  const [jobs, setJobs] = useState(useSelector((store) => store.jobs));

  const findItems = useSelector((store) => store.items);

  useEffect(() => {
    const filterdJobs = backup.filter((job) => {
      const items = makeArray(job.role, job.level, job.languages, job.tools);

      const filteredItems = items.filter(
        (item) => findItems.find((payItem) => payItem === item) === item
      );

      if (filteredItems.length === findItems.length) return true;
    });
    console.log(findItems);

    setJobs(filterdJobs);
  }, [findItems.length]);

  function handleClick() {
    dispatch(clearItems());
    setJobs(jobs);
  }

  return (
    <>
      <div
        className="px-3 box container d-flex"
        style={{ visibility: findItems.length > 0 ? "visible" : "hidden" }}
      >
        <ul>
          {findItems.map((item) => (
            <li key={findItems.indexOf(item)}>
              <span className="px-1">{item}</span>

              <button
                className="deletebtn"
                onClick={() => {
                  dispatch(removeFromItems(item));
                  setJobs(jobs);
                  console.log(findItems);
                }}
              >
                <img src="./images/removeIcon.svg" alt="" />
              </button>
            </li>
          ))}
        </ul>
        <button className="bg-body" onClick={handleClick}>
          clear
        </button>
      </div>
      <ul className="m-5">
        {jobs.map((item) => (
          <JobCard
            key={item.id}
            id={item.id}
            company={item.company}
            logo={item.logo}
            newOne={item.new}
            featured={item.featured}
            position={item.position}
            role={item.role}
            level={item.level}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
            languages={item.languages}
            tools={item.tools}
          />
        ))}
      </ul>
    </>
  );
}
