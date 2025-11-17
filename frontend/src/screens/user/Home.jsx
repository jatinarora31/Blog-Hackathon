import { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("this is home page");
  }, []);
  return <div>All blogs</div>;
}

export default Home;
