import VanillaTilt from "vanilla-tilt";

export function initTiltAnimation() {
    const elements: any = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
}