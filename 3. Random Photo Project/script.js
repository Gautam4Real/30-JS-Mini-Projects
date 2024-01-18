const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
});

// Making a function to add images.

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    // (now putting the created element into image container)
    imageContainerEl.appendChild(newImgEl);
  }
}
