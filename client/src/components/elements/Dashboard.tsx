import { useEffect, useState } from "react";
import Main from "./Main";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, _setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    if (!username) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [username]);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Main username={username} />
        </>
      ) : (
        <div>You are not logged in</div>
      )}
    </div>
  );
};

export default Dashboard;
