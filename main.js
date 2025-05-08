import TesztKerdesek from "./TesztKerdesek.js";
import { szenvedoMondatok } from "./angol.js";

let tesztKerdesek = new TesztKerdesek(document.querySelector(".tarolo"), szenvedoMondatok);
tesztKerdesek.peldanyosit();


