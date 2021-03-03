const load = () => {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  // const now = 10;

  const msg = document.querySelector("#msg");
  const pic = document.querySelector("#pic");

  msg.innerHTML = `Current Local Time: ${hour}h${min}min.`;

  if (hour < 6) {
    msg.innerHTML += `<p>Good Night...</p>`;
    pic.src = "./img/night.png";
  } else if (hour < 12) {
    msg.innerHTML += `<p>Good Morning!</p>`;
    pic.src = "./img/morning.png";
  } else if (hour < 18) {
    msg.innerHTML += `<p>Good Afternoon!</p>`;
    pic.src = "./img/afternoon.png";
  } else {
    msg.innerHTML += `<p>Good Evening!</p>`;
    pic.src = "./img/night.png";
  }
};
