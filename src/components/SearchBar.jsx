import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [userData, setUserData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setFilteredData(data);
        console.log(data);
      })
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchItem(value);
    console.log(value);

    const machedData = userData.filter((user) => {
      for (let key in user) {
        if (
          typeof user[key] === "string" &&
          user[key].toLowerCase().includes(value)
        ) {
          return true;
        }
      }
      return false;
    });
    setFilteredData(machedData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-8">Search Users</h1>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchItem}
          placeholder="type text to search..."
          onChange={handleSearch}
          className="w-1/2 rounded-full flex p-4 shadow-md h-12 focus:outline-none focus:ring-1 focus:ring-gray-500 "
        />
      </div>
      <div>
        {filteredData.map((item) => {
          return (
            <div key={item.id} className="p-4 rounded-lg border shadow-lg m-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p>
                <strong>Username: </strong>
                {item.username}
              </p>
              <p>
                <strong>Email: </strong>
                {item.email}
              </p>
              <p>
                <strong>Phone: </strong>
                {item.phone}
              </p>
              <p>
                <strong>Website: </strong>
                {item.website}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
