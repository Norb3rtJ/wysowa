const header = document.querySelector(".site-header");
const revealElements = document.querySelectorAll(".reveal");
const galleryPhotos = document.querySelectorAll(".gallery-photo");
const galleryDialog = document.querySelector("[data-gallery-dialog]");
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryPrevButton = document.querySelector("[data-gallery-prev]");
const galleryNextButton = document.querySelector("[data-gallery-next]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeGalleryIndex = -1;

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if ("IntersectionObserver" in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const setModalState = (open) => {
  document.body.classList.toggle("modal-open", open);
};

const renderGalleryImage = (index) => {
  if (!galleryImage || !galleryTitle) return;
  if (index < 0 || index >= galleryPhotos.length) return;

  const figure = galleryPhotos[index];
  const image = figure.querySelector("img");
  const caption = figure.querySelector("figcaption");
  if (!image) return;

  activeGalleryIndex = index;
  galleryImage.src = image.src;
  galleryImage.alt = image.alt;
  galleryTitle.textContent = caption?.textContent ?? "Podgląd zdjęcia";
};

const openGallery = (figure) => {
  if (!galleryDialog || !galleryImage || !galleryTitle) return;
  const index = Array.from(galleryPhotos).indexOf(figure);
  if (index === -1) return;

  renderGalleryImage(index);
  galleryDialog.showModal();
  setModalState(true);
};

const closeGallery = () => {
  if (!galleryDialog) return;
  galleryDialog.close();
  setModalState(false);
  activeGalleryIndex = -1;
};

const showRelativeGalleryImage = (direction) => {
  if (activeGalleryIndex === -1 || galleryPhotos.length === 0) return;

  const nextIndex =
    (activeGalleryIndex + direction + galleryPhotos.length) % galleryPhotos.length;
  renderGalleryImage(nextIndex);
};

galleryPhotos.forEach((figure) => {
  figure.addEventListener("click", () => openGallery(figure));
  figure.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openGallery(figure);
  });
});

document
  .querySelector("[data-gallery-close]")
  ?.addEventListener("click", closeGallery);

galleryPrevButton?.addEventListener("click", () => showRelativeGalleryImage(-1));
galleryNextButton?.addEventListener("click", () => showRelativeGalleryImage(1));

galleryDialog?.addEventListener("click", (event) => {
  if (event.target === galleryDialog) closeGallery();
});

galleryDialog?.addEventListener("close", () => {
  setModalState(false);
});

document.addEventListener("keydown", (event) => {
  if (!galleryDialog?.open) return;
  if (event.key === "Escape") closeGallery();
  if (event.key === "ArrowLeft") showRelativeGalleryImage(-1);
  if (event.key === "ArrowRight") showRelativeGalleryImage(1);
});
