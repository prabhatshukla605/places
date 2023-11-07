import React, { useEffect, useState } from "react";

export const Search = (props) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(input);
  };

  return (
    <div className="form_container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter pin code...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
