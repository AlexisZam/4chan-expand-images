chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    documentUrlPatterns: [
      "*://boards.4chan.org/*",
      "*://boards.4channel.org/*",
    ],
    id: "expand-images",
    title: "Expand images",
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "expand-images")
    chrome.tabs.executeScript({
      code:
        'document.querySelectorAll(".fileThumb img").forEach((element) => element.click());',
    });
});
