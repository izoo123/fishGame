export default class Store {
    constructor() {
      this.owedFish = 0;

      this.boughtEvent = new Event('bought');

      this.fishPole = {
        price: 50,
        cps: 0.5,
        ammount: 0,
        ammountsHtml: document.getElementById("fishingPoleAmmounts")
      };

      this.net = {
        price: 300,
        cps: 2,
        ammount: 0
        //ammountsHtml: document.getElementById("fishingPoleAmmounts")
      };

      this.boat = {
        price: 2500,
        cps: 15,
        ammount: 0
        //ammountsHtml: document.getElementById("fishingPoleAmmounts")
      };

      this.crew = {
        price: 21000,
        cps: 120,
        ammount: 0
        //ammountsHtml: document.getElementById("fishingPoleAmmounts")
      };

      this.yacht = {
        price: 180000,
        cps: 900,
        ammount: 0
        //ammountsHtml: document.getElementById("fishingPoleAmmounts")
      };

      this.factory = {
        price: 1000000,
        cps: 8000,
        ammount: 0
        //ammountsHtml: document.getElementById("fishingPoleAmmounts")
      };

      this.portal = {
        price: 10000000,
        cps: 70000,
        ammount: 0
        //ammountsHtml: document.getElementById("fishingPoleAmmounts")
      };

      //this creates a list of objects
      this.storeBtns = document.getElementsByClassName("buyBtn");
      //fish count on website
      this.fishCountSite = document.getElementById("fishCount");
    }

    //codes, bht, notBht

    showStructureName(){
    }

    buyFunct(fishCount, structure){
      if (fishCount >= structure.price) {
        this.owedFish += structure.price;
        structure.ammount += 1;
        structure.price *= 1.2;
        structure.ammountsHtml.innerHTML = `Price: ${Math.round(structure.price * 10) / 10}, Owned: ${structure.ammount}`;
        window.dispatchEvent(this.boughtEvent);
        this.owedFish = 0;
      }
    }

    storeFunct(btnId, fishCount){
      switch (btnId) {
        case "fishingPoleBtn":
          this.buyFunct(fishCount, this.fishPole);
          break;
        case "netBtn":
          this.buyFunct(fishCount, this.net);
          break;
        case "boatBtn":
          this.buyFunct(fishCount, this.boat);
          break;
        case "crewBtn":
          this.buyFunct(fishCount, this.crew);
          break;
        case "yachtBtn":
          this.buyFunct(fishCount, this.yacht);
          break;
        case "fishFactoryBtn":
          this.buyFunct(fishCount, this.factory);
          break;
        case "fishPortalBtn":
          this.buyFunct(fishCount, this.portal);
          break;
        default:
          break;
     }
   }

    /*
    store(fishCount) {
      for i
      this.storeBtns[i].addEventListener("click", () => {
        this.test(fishCount);
      });
    }
    */

    store() {

      for (let i = 0; i < this.storeBtns.length; i++) {
        this.storeBtns[i].addEventListener("click", () => {
          let btnId = this.storeBtns[i].id;
          let fishCount = this.fishCountSite.innerHTML

          this.storeFunct(btnId, fishCount);
          });
      }
    }
  }
