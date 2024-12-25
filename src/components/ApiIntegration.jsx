import React, { useEffect, useState } from "react";

const ApiIntegration = () => {
  const [data, setData] = useState([]); // to handle api data
  const [newData, setNewData] = useState({
    postId: "",
    id: "",
    name: "",
    email: "",
    body: "",
  }); // to create new data in exiting data

  // Fetch data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error, "Some error has occured.");
      });
  }, []);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(prevData);
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddPost = (e) => {
    console.log("data");
    e.preventDefault();
    // Add new data to the array
    setData((prevData) => [...prevData, newData]);
    setNewData({ postId: "", id: "", name: "", email: "", body: "" });
  };

  const handleDeletePost = (id) => {
    console.log(id, "helloo");
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleUpdatePost = (id) => {
    const updatedData = "Hello";
  };

  return (
    <div>
      <h1> Fetching data from JSON-Holder API </h1>
      <ul>
        {data?.map((item, index) => {
          return (
            <>
              <li key={index}>
                <p>PostId: {item.postId}</p>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Body: {item.body}</p>
              </li>

              <button
                onClick={() => {
                  handleDeletePost(item.id);
                  console.log(item.id);
                }}
              >
                Delete
              </button>

              <button
                onClick={() => {
                  handleUpdatePost(item.id);
                }}
              >
                Update
              </button>
            </>
          );
        })}
      </ul>

      <h1> Create new data</h1>
      <form style={{padding:20, margin:20}} onSubmit={handleAddPost}>
        <label htmlFor="">PostId</label>
        <input
          type="text"
          name="postId"
          placeholder="Post Id"
          value={newData.postId}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="">Id</label>
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={newData.id}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="">Body</label>
        <textarea
          id=""
          name="body"
          placeholder="Body"
          value={newData.body}
          onChange={handleInputChange}
          required
        ></textarea>


        {/* <fieldset>
          <legend>Persoanl Info</legend>
          <label htmlFor="name">Name </label>
          <input type="text" id="name" />
        </fieldset> */}

        <button>Add Data</button>
      </form>
    </div>
  );
};

export default ApiIntegration;
