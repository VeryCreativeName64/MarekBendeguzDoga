import { szenvedoMondatok } from "./angol.js";
import TesztKerdes from "./TesztKerdes.js";

export default class TesztKerdesek {
    #lista=[]
    #szElem
    constructor(szElem,lista){
        this.#lista=lista;
        this.#szElem=szElem;
    }

    peldanyosit(){
        for (let index = 0; index < szenvedoMondatok.length; index++) {
            new TesztKerdes(this.#lista,".tarolo");
        }
    }
}