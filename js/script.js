import "./byeie"; // loučíme se s IE
import { h, render } from "preact";
/** @jsx h */

let host = "https://data.irozhlas.cz/anketa-saroch-justice";
if (window.location.hostname === "localhost") {
  host = "http://localhost/anketa-saroch-justice";
}

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={host + "/foto/" + el.f} alt={el.p} />
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="vek">{el.fce}</div>
            <div className="vek">{el.s.length > 0 ? "(" + el.s + ")" : ""}</div>
          </div>
          <div className="odpoved"><strong>1.</strong> {el.o1.length > 0 | el.o2.length > 0 ? el.o1 : "bez odpovědi"}</div>
          <div className="odpoved"><strong>2.</strong> {el.o2.length > 0 ? el.o2 : "bez odpovědi"}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", host + "/data/data.json");
r.send();
