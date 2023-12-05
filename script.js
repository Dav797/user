let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");


item2.addEventListener("click",function(){

    let flex1 = document.querySelector(".flex1");

    if(flex1.style.display === '' || flex1.style.display === 'none')
    {
        flex1.style.display = 'block';
    }else{
        flex1.style.display = 'none';
    }
});


item3.addEventListener("click",function(){

    let flex2 = document.querySelector(".flex2");

    if(flex2.style.display === '' || flex2.style.display === 'none')
    {
        flex2.style.display = 'block';
    }else{
        flex2.style.display = 'none';
    }
});

item4.addEventListener("click",function(){

    let flex3 = document.querySelector(".flex3");

    if(flex3.style.display === '' || flex3.style.display === 'none')
    {
        flex3.style.display = 'block';
    }else{
        flex3.style.display = 'none';
    }
});

/////////////////////////////////////////////////////////////////////////

window.addEventListener("DOMContentLoaded", () => {
    const c = new Clockll(".clock");
});

class Clockll {
    constructor(el) {
        this.el = document.querySelector(el);

        this.init();
    }
    init() {
        this.timeUpdate();
    }
    get timeAsObject() {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        return { h, m, s };
    }
    get timeAsString() {
        const [h,m,s,ap] = this.timeDigitsGrouped;

        return `${h}:${m}:${s} ${ap}`;
    }
    get timeDigitsGrouped() {
        let {h, m, s } = this.timeAsObject;
        const ap = h > 11 ? "PM" : "AM";
        if (h === 0) h += 12;
        else if ( h > 12) h -= 12;
        if (m < 10) m = `0${m}`;
        if (s < 10) s = `0${s}`;

        return [h,m,s,ap];
    }
    animateHand(hand) {
        const time = this.timeAsObject;
        const minFraction = time.s / 60;
        const angleB = Utils.decPlaces(360 * minFraction,3);
        const angleA = angleB - 6;

        this.el?.querySelector(`[data-hand="${hand}"]`)?.animate(
            [
                { transform: `rotate(${angleA}deg) translateY(-0.5em)` },
                { transform: `rotate(${angleB}deg) translateY(-0.5em)` },

            ],
            { duration: 300, easing: "cubic-bezier(0.77,0,0.18,1)" }
        );
    }
    timeUpdate() {
        this.el?.setAttribute("aria-label", this.timeAsString);
        const time = this.timeAsObject;
        const minFraction = time.s / 60;
        const hrFraction = (time.m + minFraction) / 60;
        const twelveHrFraction = (time.h + hrFraction) / 12;

        this.el?.style.setProperty("--secAngle",`${Utils.decPlaces(360 * minFraction,3)}deg`);
        this.el?.style.setProperty("--minAngle",`${Utils.decPlaces(360 * hrFraction,3)}deg`);
        this.el?.style.setProperty("--hrAngle",`${Utils.decPlaces(360 * twelveHrFraction,3)}deg`);

        this.animateHand("s");
        clearTimeout(this.timeUpdateLoop);
        this.timeUpdateLoop = setTimeout(this.timeUpdate.bind(this),1e3);      
    }
}
class Utils {
    static decPlaces(n,d) {
        return Math.round(n * 10 ** d) / 10 ** d;
    }
}

///////////////// text-div////////////////////

let button = document.querySelector(".button");

button.addEventListener("click",function(){

    let containerfont = document.querySelector(".containerfont");

    if(containerfont.style.display === '' || containerfont.style.display === 'none')
    {
        containerfont.style.display = 'block';
    }else{
        containerfont.style.display = 'none';
    }
});


let buttonn = document.querySelector(".buttonn");

buttonn.addEventListener("click",function(){

    let contfont = document.querySelector(".contfont");

    if(contfont.style.display === '' || contfont.style.display === 'none')
    {
        contfont.style.display = 'block';
    }else{
        contfont.style.display = 'none';
    }
});

let buttontext = document.querySelector(".buttontext");

buttontext.addEventListener("click",function(){

    let confont = document.querySelector(".confont");

    if(confont.style.display === '' || confont.style.display === 'none')
    {
        confont.style.display = 'block';
    }else{
        confont.style.display = 'none';
    }
});
