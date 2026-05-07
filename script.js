const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const motionFrame = document.querySelector(".motion-frame");

if (motionFrame) {
  motionFrame.addEventListener("pointermove", (event) => {
    const bounds = motionFrame.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    motionFrame.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
  });

  motionFrame.addEventListener("pointerleave", () => {
    motionFrame.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
}
