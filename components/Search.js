import { useState, useEffect } from "react";
import TableContent from "./TableContent";
import { getAxios } from "../utils/requests";

// import styles from "./QueryImage.module.css";

export function useQuery(passed) {
  const [query, setQuery] = useState("hybrid");
  const [data, setData] = useState({});

  // let [planet, setPlanet] = useState(passed);

  useEffect(() => {
    // let current = true;
    fetch(` http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((res) => res.json())
      .then((res) => {
        // if (current) {
        setData(res);
        // }
      })
      .catch((error) => {
        console.log("error", error);
      });
    // return () => {
    // current = false;
    // };
  }, [query]);

  return { query, setQuery, data };
}

export default function QueryImage() {
  const { query, setQuery, data } = useQuery();
  let dataList = data.hits || null;

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-12">
        <h2 className="font-bold text-3xl text-center text-sky-100">
          Search any Query
        </h2>
        <div className="p-4 flex justify-center">
          <label className="sr-only">Search</label>

          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="p-12">
        {dataList && <TableContent dataList={dataList} />}
      </div>
    </>
  );
}
