const shareButton = document.querySelector("[data-js='share-button']");
const shareOnNetworks = document.querySelector("[data-js='share-on-networks']");
const cardContent = document.querySelector("[data-js='card-content']");
const noShare = document.querySelector("[data-js='no-share']");

function share(e) {
  e.stopPropagation();
  if (shareOnNetworks.classList.contains("active")) {
    return shareOnNetworks.classList.remove("active");
  }
  return shareOnNetworks.classList.add("active");
}

shareButton.addEventListener("click", share);

noShare.addEventListener("click", share);

cardContent.addEventListener("click", function (e) {
  e.preventDefault();
  changeState();
});

function changeState() {
  if (shareOnNetworks.classList.contains("active")) {
    return shareOnNetworks.classList.remove("active");
  }
}
