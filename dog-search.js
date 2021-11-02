const dogImgContainer = document.getElementById("dog-image-container");
const showBtn = document.querySelector(".show-dogs");
const numberOfDogs = document.getElementById("number-of-dogs");

async function findDog() {
  let res = await fetch("https://dog.ceo/api/breeds/image/random");
  let image = await res.json();
  let imageSrc = await image.message;
  return imageSrc;
}

async function showDogs(num) {
  let dogImages = [];
  for (let i = 1; i <= num; i++) {
    let imageSrc = await findDog();
    dogImages.push(imageSrc);
  }
  return dogImages;
}

async function displayDogs(num) {
  let dogArray = await showDogs(num);
  dogArray.forEach((image) => {
    let imageEl = document.createElement("img");
    imageEl.setAttribute("src", image);
    imageEl.classList.add("dog-picture");
    dogImgContainer.appendChild(imageEl);
  });
}

showBtn.addEventListener("click", function () {
  dogImgContainer.innerHTML = "";
  let searchAmount = numberOfDogs.value;
  displayDogs(searchAmount);
});
