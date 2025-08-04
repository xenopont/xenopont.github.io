document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("blog-section");
  if (el) {
    el.scrollTop = el.scrollHeight;
  }
});
