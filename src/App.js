import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((expectedAnswer) => {
        setUserData(expectedAnswer);
        setCounter(counter + 1);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const interValid = setInterval(() => {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((expectedAnswer) => {
          setUserData(expectedAnswer);
          setCounter(counter + 1);
          setError(null);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 5000);

    return () => clearInterval(interValid);
  }, [userData]);

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredList = () => {
    return userData.filter((val) => {
      if (query === "") {
        return val;
      } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
        return val;
      }
    });
  };

  console.log(filteredList());
  return (
    <div className="bg-green-500 h-screen flex flex-col justify-items-center">
      <div className="container mx-auto flex justify-center">
        <SearchBar onQueryChange={onQueryChange} />
        <p>{counter}</p>
      </div>
      {loading && <div>The item is currently loading.....</div>}
      <UserCard user={filteredList()} />
    </div>
  );
}

export default App;
