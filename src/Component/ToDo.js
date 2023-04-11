import React, { useState } from "react";

function ToDo() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData, activity]);
    // console.log(listData);
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      // console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedListdata = listData.filter((element, id) => {
      return i !== id;
    });
    setlistData(updatedListdata);
  }
  function removeAll() {
    setlistData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">ToDO list</div>
        <input
          type="text"
          placeholder=" Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Here is your list :{")"}</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>Remove(-)</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default ToDo;
