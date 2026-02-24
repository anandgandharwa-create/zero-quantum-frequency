const CACHE_NAME = "zqf-v1";

self.addEventListener("install", event => {
  console.log("ZQF installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("ZQF activated");
});

self.addEventListener("fetch", event => {});
