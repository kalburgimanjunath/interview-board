import { useEffect, useState } from "react";

// 3. Create a Pagination Component: Design a pagination component that handles navigation between pages of data.
export default function Pagination() {
  const [users, setUsers] = useState([]);
  const [totalpages, setTotal] = useState(0);
  const [currentPage, setCurrent] = useState(0);
  const [nextPage, setNext] = useState(0);
  const loadUsers = async () => {
    await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result["users"]);
      })
      .catch((error) => console.log(error));
  };

  const [currentRecords, setCurrentRecords] = useState([]);

  useEffect(() => {
    loadUsers();
    if (users.length > 0) {
      const totallength = users.length;
      const totalSize = totallength / 10;
      setTotal(totalSize);
      setCurrentRecords(users.slice(currentPage, nextPage));

      setNext(10);
    }
  }, [users]);
  const pageNumbers = [...Array(totalpages + 1).keys()].slice(1);
  return (
    <div>
      <div>
        <button onClick={() => setCurrent(currentPage - 1)}>Prev</button>Page:
        {currentPage}
        <button onClick={() => setCurrent(currentPage + 1)}>Next</button>
      </div>

      {currentRecords &&
        currentRecords.map((item, index) => {
          return <div key={index}>{item.firstName}</div>;
        })}
      <div>
        {pageNumbers.map((item, index) => (
          <button key={index} onClick={() => setCurrent(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
