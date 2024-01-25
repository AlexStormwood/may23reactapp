import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [backendUrl, setBackendUrl] = useState("");
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    setBackendUrl(process.env.REACT_APP_BACKEND_URL);
  }, []);


  useEffect(() => {
    if (backendUrl === ""){
      // do nothing
    } else {
      console.log(backendUrl, process.env.REACT_APP_BACKEND_URL);
      fetch(backendUrl + "users/")
      .then(response => response.json())
      .then(data => {
        console.log("Data from /users/ is: " + JSON.stringify(data));
        setUserList(data.result);
      })
    }

  }, [backendUrl])

  return (
    <div className="App">
      <h1>Cool user list</h1>
      <h2>Backend URL is: {backendUrl}</h2>
      {userList && <div>
          {userList.map(user => {
            return <h1>User exists</h1>
          })}
        </div>}
    </div>
  );
}

export default App;
