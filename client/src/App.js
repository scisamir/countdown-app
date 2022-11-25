import { useEffect } from "react";
import "./App.css";
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // use API call to get user inputted time and date.
  useEffect(() => {
    const hash = Math.random().toString(36).substring(7);
    const hasher = localStorage.getItem("hash");
    if (!hasher) {
      localStorage.setItem("hash", hash);
    }
    return;
  }, []);

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: ""
  })

  const [resp, setResp] = useState({});

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage form={form} setForm={setForm} resp={resp} setResp={setResp} />} />
          <Route
            path="/countdown"
            element={<CounterPage resp={resp} form={form} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
