import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { SectionCounter } from "./components/section";

function App() {
    return (
        <>
            <div className="container">
                <Header></Header>
                <SectionCounter></SectionCounter>
            </div>
        </>
    );
}

export default App;
