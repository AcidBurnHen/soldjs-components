import type { Component } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Gallery } from "../dist/gallery/gallery.jsx";

const App: Component = () => {
  return (
    <div>
      <Gallery></Gallery>
    </div>
  );
};

export default App;
