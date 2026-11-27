for (const video of document.querySelectorAll("video[data-playback-rate]")) {
  const rate = Number(video.dataset.playbackRate);
  video.defaultPlaybackRate = rate;
  video.playbackRate = rate;
}

const copyButton = document.querySelector("#copy-citation");
const bibtex = document.querySelector("#bibtex");
const copyStatus = document.querySelector("#copy-status");

const originalLabel = copyButton.textContent;
let feedbackTimeout;
copyButton.hidden = false;

copyButton.addEventListener("click", async () => {
  clearTimeout(feedbackTimeout);
  copyButton.textContent = originalLabel;
  try {
    await navigator.clipboard.writeText(bibtex.textContent.trim());
    copyButton.textContent = "Copied";
    copyStatus.textContent = "BibTeX copied to the clipboard.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "BibTeX selected. Use your keyboard shortcut to copy it.";
  }
  feedbackTimeout = setTimeout(() => {
    copyButton.textContent = originalLabel;
    copyStatus.textContent = "";
  }, 6000);
});
