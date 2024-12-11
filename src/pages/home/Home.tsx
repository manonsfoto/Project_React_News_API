import { useState } from "react";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import "./Home.css";
import FetchedList from "../../components/fetchedList/FetchedList";

const Home = () => {
  const [URL, setURL] = useState<string>("");

  return (
    <>
      <Header />
      <Input setURL={setURL} />
      {URL.length > 0 && <FetchedList URL={URL} />}
    </>
  );
};

export default Home;
