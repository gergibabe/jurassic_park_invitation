const scene = document.getElementById("scene");
const openButton = document.getElementById("openButton");
const replayButton = document.getElementById("replayButton");

function openInvitation() {
  scene.classList.add("open");
  openButton.setAttribute("aria-expanded", "true");
}

function resetInvitation() {
  scene.classList.remove("open");
  openButton.setAttribute("aria-expanded", "false");
}

openButton.addEventListener("click", openInvitation);
replayButton.addEventListener("click", () => {
  resetInvitation();
  // Give the browser one frame to apply the closed state before replaying.
  requestAnimationFrame(() => {
    requestAnimationFrame(openInvitation);
  });
});

// Keyboard-friendly: Escape closes the invitation.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") resetInvitation();
});
