const photos = [
  "photos/_6028645-lightroom.jpg",
  "photos/_6028646-lightroom.jpg",
  "photos/_6038663-lightroom.jpg",
  "photos/_6038695-lightroom.jpg",
  "photos/_6038697-lightroom.jpg",
  "photos/_6038699-lightroom.jpg",
  "photos/_6058712-lightroom.jpg",
  "photos/_6058716-lightroom.jpg",
  "photos/_6058718-lightroom.jpg",
  "photos/_6058726-lightroom.jpg",
  "photos/_6058737-lightroom.jpg",
  "photos/_6058747-lightroom.jpg",
  "photos/_6058751-lightroom.jpg",
  "photos/_6058753-lightroom.jpg"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeButton = document.getElementById("closeButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let activeIndex = 0;

function createPhotoCard(src, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "photo-card";
  card.setAttribute("aria-label", `Open photo ${index + 1} in lightbox`);

  const img = document.createElement("img");
  img.src = src;
  img.alt = `Photo ${index + 1}`;
  img.loading = "lazy";

  const label = document.createElement("div");
  label.className = "photo-label";
  label.textContent = `Photo ${index + 1}`;

  card.appendChild(img);
  card.appendChild(label);
  card.addEventListener("click", () => openLightbox(index));

  return card;
}

function renderGallery() {
  photos.forEach((src, index) => {
    gallery.appendChild(createPhotoCard(src, index));
  });
}

function openLightbox(index) {
  activeIndex = index;
  updateLightbox();
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const src = photos[activeIndex];
  lightboxImage.src = src;
  lightboxImage.alt = `Gallery photo ${activeIndex + 1}`;
  lightboxCaption.textContent = `Photo ${activeIndex + 1} of ${photos.length}`;
}

function showPrevious() {
  activeIndex = (activeIndex - 1 + photos.length) % photos.length;
  updateLightbox();
}

function showNext() {
  activeIndex = (activeIndex + 1) % photos.length;
  updateLightbox();
}

closeButton.addEventListener("click", closeLightbox);
prevButton.addEventListener("click", showPrevious);
nextButton.addEventListener("click", showNext);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("active")) return;

  switch (event.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowLeft":
      showPrevious();
      break;
    case "ArrowRight":
      showNext();
      break;
    default:
      break;
  }
});

renderGallery();
