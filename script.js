document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  const flap = document.querySelector(".flap");
  const sincereCard = document.querySelector(".card-sincere");
  const podcastCard = document.querySelector(".card-podcast");
  const reviewCard = document.querySelector(".card-review");
  const turnBackText = document.querySelector(".turn-back");

  // Show recipient name (flap opens at 5s)
  setTimeout(() => {
    flap.classList.add("flap-open");
  }, 5000);

  // 2 seconds later → pop the sincere card
  setTimeout(() => {
    envelope.classList.add("small");
    sincereCard.style.opacity = "1";
  }, 7000);

  // 7 seconds after showing sincere → hide it
  setTimeout(() => {
    sincereCard.style.opacity = "0";
  }, 14000);

  // Show podcast card
  setTimeout(() => {
    podcastCard.style.opacity = "1";
    podcastCard.style.pointerEvents = "auto";
    podcastCard.style.zIndex = "11";
  }, 14000);

  // Function to show review card
  const showReviewCard = () => {
    podcastCard.style.opacity = "0";
    podcastCard.style.pointerEvents = "none";
    reviewCard.style.opacity = "1";
    reviewCard.style.pointerEvents = "auto";
    reviewCard.style.zIndex = "12";

    // After 5 seconds, hide review and show envelope again with animation
    setTimeout(() => {
      reviewCard.style.opacity = "0";
      reviewCard.style.display = "none";
      podcastCard.style.display = "none";
      sincereCard.style.display = "none";

      envelope.classList.remove("small");
      envelope.style.transition = "top 1.5s ease-in-out";
      envelope.style.top = "30%";
      envelope.style.left = "50%";
      envelope.style.transform = "translateX(-50%)";
    }, 5000);
  };

  // Event listeners
  podcastCard.addEventListener("click", showReviewCard);

  if (turnBackText) {
    turnBackText.addEventListener("click", showReviewCard);
  }
});
