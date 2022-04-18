/*  ********** Online / Offline Detection **********  */

// Request a small image at an interval to determine status
// ** Get a 1x1 pixel image here: http://www.1x1px.me/
// ** Use this code with an HTML element with id="status"

// ---------------- Forma 1 ----------------------

const checkOnlineStatus = () => {
  return new Promise(async (resolve) => {
    let resolved = false;
    // requests longer than 5s are considered "offline"
    const timer = setTimeout(() => {
      resolved = true;
      resolve(false);
    }, 5000);

    try {
      const online = await fetch("/1pixel.png");
      clearTimeout(timer);
      if (!resolved) {
        resolve(online.status >= 200 && online.status < 300); // either true or false
      }
    } catch (err) {
      if (!resolved) {
        resolve(false); // definitely offline
      }
    }
  });
};

(function pollOnlineStatus() {
  setTimeout(async () => {
    const result = await checkOnlineStatus();
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = result ? "Online" : "Offline";
    pollOnlineStatus(); // self-calling timeout is better than setInterval for this
  }, 3000);
})()


// ---------------- Forma 2 ----------------------

// const checkOnlineStatus = async () => {
//   try {
//     const online = await fetch("/1pixel.png");
//     return online.status >= 200 && online.status < 300; //online ou offline
//   } catch (error) {
//     console.log(error)
//     return false; //definitivamente offline
//   }
// }

// setInterval(async () => {
//   const result = await checkOnlineStatus()
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = result ? "Online" : "Offline";
// }, 3000); // 3 Segs, provavelmente muito rapido, use 30000 pra cada 30 seg






// ------------ CODIGO POPULAR ANTIGO (Não é garatindo e pode ter falsos positivos) ------------------

// window.addEventListener("load", (event) => {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
// });
 
// window.addEventListener("offline", (event) => {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = "Offline";
// });

// window.addEventListener("online", (event) => {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = "Online";
// });