function createtoaster(config) {
  return function (str) {
    let parent = document.querySelector("#parent");
    let div = document.createElement("div");
    div.textContent += str;
    div.className = `bg-gray-500 inline-block text-white px-4 py-2 rounded shadow-lg z-50`;

    parent.appendChild(div);

    if (config.positionX !== "left" || config.positionY !== "top") {
      parent.className += `${
        config.positionX == "right" ? " right-5 " : " left-5 "
      } ${config.positionY == "bottom" ? " bottom-5 " : " top-5 "}`;
    }

    setTimeout(() => {
      parent.removeChild(div);
    }, config.duration * 1000);
  };
}

let toast = createtoaster({
  positionX: "right",
  positionY: "bottom",
  theme: "dark",
  duration: 2,
});

toast("message");

setTimeout(() => {
  toast("seen");
}, 500);
setTimeout(() => {
  toast("replied");
}, 3000);
