import { useMemo, useState, type JSX } from "react";

import "./App.css";

import { MainComponent, InfoComponent } from "./components";

const componentMap = new Map<string, JSX.Element>([
  ["main", <MainComponent />],
  ["info", <InfoComponent />],
  ["default", <MainComponent />],
]);

export const App = () => {
  const [currentComponent, setCurrentComponent] = useState("main");
  const selectedComponent = useMemo(() => {
    return (componentMap.has(currentComponent)
      ? componentMap.get(currentComponent)
      : componentMap.get("default")) as JSX.Element;
  }, [currentComponent]);

  return (
    <>
      <marquee scrollamount="5" behavior="alternate">
        🌟🌟 WELCOME TO MY PERSONAL WEBSITE 🌟🌟
      </marquee>

      <div className="container">
        <h1 className="title">
          Hi, I'm <blink>KASANIE_LASKI</blink>
        </h1>

        <img className="construction" src="construction.gif" />

        <table cellSpacing="0" cellPadding="12">
          <tr>
            <td className="nav">
              <span onClick={() => setCurrentComponent("main")}>HOME</span>&nbsp;|&nbsp;
              <span
                onClick={() => {
                  setCurrentComponent("info");
                }}
              >
                ABOUT ME
              </span>
            </td>
          </tr>
          {selectedComponent}
        </table>
      </div>
    </>
  );
};
