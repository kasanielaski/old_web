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
    return (
      componentMap.has(currentComponent)
        ? componentMap.get(currentComponent)
        : componentMap.get("default")
    ) as JSX.Element;
  }, [currentComponent]);

  return (
    <>
      <div className="marquee">
        <div className="marquee__inner">
          🌟🌟 WELCOME TO MY PERSONAL WEBSITE 🌟🌟
        </div>
      </div>

      <div className="container">
        <h1 className="title">
          Hi, I'm <span className="blink">KASANIELASKI</span>
        </h1>

        <img className="construction" src="construction.gif" />

        <table cellSpacing="0" cellPadding="12">
          <thead>
            <tr>
              <td colSpan={2} className="nav">
                <span onClick={() => setCurrentComponent("main")}>HOME</span>
                &nbsp;|&nbsp;
                <span
                  onClick={() => {
                    setCurrentComponent("info");
                  }}
                >
                  EXPIRIENCE
                </span>
              </td>
            </tr>
          </thead>
          <tbody>{selectedComponent}</tbody>
        </table>
      </div>
    </>
  );
};
