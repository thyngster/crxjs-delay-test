console.log("TEST EXT BG LOADED");

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.scripting.registerContentScripts([
  {
    id: "test",
    js: ["/test.js"],
    matches: ["*://*/*"],
    persistAcrossSessions: true,
    runAt: "document_start",
    world: "MAIN",
  },
]);
chrome.scripting.getRegisteredContentScripts((l) => {
  console.log("getRegisteredContentScripts", l);
});
