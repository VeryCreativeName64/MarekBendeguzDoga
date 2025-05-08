import { szenvedoMondatok } from "./angol.js";
import TesztKerdesek from "./TesztKerdesek.js";

export default class TesztKerdes {
    #obj={}
    #szElem
    #index
    #gombElem
    constructor(obj,szElem,index){
        this.#obj=obj;
        this.#szElem=szElem;
        this.#index=index;
        this.megjelenit()
    }

    megjelenit(){
        let html=`<div class="row">
            <div class="col-sm-8">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title">${this.#obj.mondat}</h6>
                  <div class="kerdes">
                  <p class="btn btn-light">${this.#obj.valasztas[0]}</p>
                  <p class="btn btn-light">${this.#obj.valasztas[1]}</p>
                  <p class="btn btn-light">${this.#obj.valasztas[2]}</p>
                  <p class="btn btn-light">${this.#obj.valasztas[3]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`
          this.#szElem.insertAdjacentHTML("beforeend",html) 
    }


}