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
      console.log(process.env.REACT_APP_BACKEND_URL);
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
