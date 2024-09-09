import React from "react";
import useFetch from "./useFetch";

function App() {

  const BASE_URL = "https://inshortsapi.vercel.app/news?category=all";

  const { data, loading, error } = useFetch(BASE_URL);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Headlines Of The Day</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
