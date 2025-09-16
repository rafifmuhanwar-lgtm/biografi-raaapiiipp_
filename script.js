// Glow mengikuti mouse
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth) * 100;
  let y = (e.clientY / window.innerHeight) * 100;

  document.body.style.setProperty("--x", `${x}%`);
  document.body.style.setProperty("--y", `${y}%`);
});
