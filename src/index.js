import Store from "./store.js";


window.onload = ()=>{

    var fishCount = 0;
    let fps = 0;
    //cookies per click
    let fpc = 1;

    const fishCountSite = document.getElementById("fishCount");
    const cpsSite = document.getElementById("fpsCounter");
    const goFishing = document.getElementById("fishBtn");

    let store = new Store();

    function onClick() {
      fishCount += fpc;
      return fishCount;
    }

    function updateFishCount(){
      setInterval( () => {
        fishCount += fps
        fishCount = Math.round(fishCount * 10) / 10;
      }, 100);
    }

    function updateHtmlFishCount(){
      setInterval( () => {
        fishCountSite.innerHTML = fishCount;
      }, 100);
    }

    function updateFps(){
      addEventListener('bought', () => {
        fps = (store.fishPole.cps * 0.1 * store.fishPole.ammount)
        + (store.net.cps * 0.1 * store.net.ammount) +
        (store.boat.cps * 0.1 * store.boat.ammount) +
        (store.crew.cps * 0.1 * store.crew.ammount) +
        (store.yacht.cps * 0.1 * store.yacht.ammount) +
        (store.factory.cps * 0.1 * store.factory.ammount) +
        (store.portal.cps * 0.1 * store.portal.ammount);

        fishCount -= store.owedFish;
      });
    }

    //function onBuy() {
  //  }

    function main() {
      goFishing.addEventListener("click", function() {
        onClick();
      });

      updateFps();
      updateFishCount(fishCount, store);
      updateHtmlFishCount(fishCount);


      store.store(fishCount);


    }

    main();


}
