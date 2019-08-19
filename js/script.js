import "./byeie"; // loučíme se s IE
import { h, render } from "preact";
/** @jsx h */

let host = "https://data.irozhlas.cz/anketa-cssd-smarda";
if (window.location.hostname == "localhost") {
  host = "http://localhost/anketa-cssd-smarda";
}

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={"https://samizdat.blob.core.windows.net/storage/anketa-cssd/" + el.f} alt={el.p} />
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="vek">{el.k} {el.s}</div>
          </div>
          <div className={el.o1.length > 0 | el.o2.length > 0  ? "odpoved" : "odpoved cervene"}>{el.o1.length > 0 | el.o2.length > 0 ? el.o1 : "bez odpovědi"}</div>
          <div className="odpoved">{el.o2.length > 0 ? el.o2 : ""}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", host + "/data/data.json");
r.send();
