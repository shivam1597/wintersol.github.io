'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4667eb014c563c529be30d2799c9f7fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3bf13fedccef35c62d8802cc53206b42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a378b128306c1a112ae3debb5cf79f45",
".git/logs/refs/heads/master": "c4d0f168d4c00dc1d06335a38b283d1e",
".git/logs/refs/remotes/origin/main": "cd9016e25ee6908a1fa599263f575f73",
".git/objects/0f/188e4d9543747dc02631174d42a390a46d737a": "a3652cf08b4f6b096e618f7d998a3d98",
".git/objects/12/3459a5fa75c50769c204e9b902c008adaecf2c": "64ad4584a2b0f19d6bd8062fdedfd56a",
".git/objects/19/13d70f646757df225d75e53f232d7ff30acd1f": "825faaae9d71ef9c73045d91dbccf47e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2c/34686dbc3dbd5afe40cacb8e29d48f43fffd34": "1965cbf5fbdbe138aa1b47f8c87a9481",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/2e1b4c3f38a07657a7d090c2b6f8c1c5ab640e": "0410f3fa44aa421bbec38cd2dde8269b",
".git/objects/3a/ba7088b4ec804113bdd38f21154a0da23aba3a": "caed7be7c8093c59ef653cffd574aa35",
".git/objects/46/ce0b83d6e889856ebf57ddab1b0e0704ed3ed4": "27650691c8074ce1887db5f8d2ba6581",
".git/objects/4b/535cac51e1eaf53924519d9de65769ed34621d": "37a0f429ac2d4d5237cfea206763da04",
".git/objects/4d/634545ea59a9918eea46da3ed0e4b4c1727ef3": "a3badd91e89d4a903369b2d28ecde8f2",
".git/objects/60/507957a5d98049f0ab8d3abfa6fefc80ab58b3": "623c93d722c75acda61ef7bb80686456",
".git/objects/6b/bf1c275243c8aa109bc39d2f4add7ade8adb4d": "afb1694c2d4035cfdea5a68a40088042",
".git/objects/72/9a8e1f65698649bfd87808176715f5823b0e42": "98dd539afd971a4ac4487e2d6bcbf322",
".git/objects/76/ee7c448ebff65a63dead88082c9b939ff0ba69": "25305c2c2c3bdcb409dbfdde356d9510",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/86/dea2779354d7b8751f0eff322ce808a5624a28": "b36be52711db67d150beba5de31d38db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/45b350406eccd42371d4dfdc706f36eb3585e5": "7908ebbc5b6b755d2cab7f50e7be1491",
".git/objects/92/d8196d8ef1aadb2550953d8f755096bba2453c": "57ae52fdfe821e3f4edd0adb68f6f332",
".git/objects/93/5ea4797fb6b8033060cdaea60e28783bf086e4": "a4919046d43a4c6cb91f271d9f1cd704",
".git/objects/96/89a76a1b2560029da59825c6f68373df787d33": "0cd407ad169c809c949048a5f05a6859",
".git/objects/97/2d85404d1f30f35109afb71be6db405fc35436": "73866be5e056507aa24a21ad7b7bd86f",
".git/objects/98/8a5351330d69156c1c7003f2505d044428db36": "e84796505f658b218ac55bcb9aec45ec",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/e58fae01c2d5564ca51dc5175aa6ba659eb4f7": "c9f7f5b8aa816cdca0185f24793b3cc0",
".git/objects/b2/ab10bddda56635d979a95897b6007f9b21002c": "827749bccc312d8fda713eeb0eba338f",
".git/objects/b3/4f21b59837348811d99518aba3084ab8a9d062": "f900bcbd003715b6dad996cca5819639",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/1295709134536b0518980b7a5bfaeaee9df894": "69cc0fa91380b076f75e642974ad722b",
".git/objects/e1/d7cb5cd49c6dc16c5104d41e5cc92f9d6ddffd": "c6e26dad9137d7a0f31104c11386dcc0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fa/243f61b9682187850bd78f74204c6be8620736": "374bc3efc0a86ad76ff6e580f7e52c0a",
".git/refs/heads/master": "2d58ca32c043e9a04400220ed9457f64",
".git/refs/remotes/origin/main": "0ddd433aa6ce18a26305f0786271e88b",
"assets/AssetManifest.json": "e742e18f9777ef65c6e216c1628251b6",
"assets/assets/fonts/BalooDa.ttf": "2e570d75cbfb76cd4edbba3d751d1f65",
"assets/assets/images/background.jpg": "37057e8ae08f6dc65d3dfc7b93c144ad",
"assets/assets/images/logo.png": "00e6b2566655f35f2354c46ee20c62fa",
"assets/FontManifest.json": "95040b8ef0ac9fb1ba6ca1c9f7c81514",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9066ab178f70f38607a77cb53ad9263b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2d551138c75256977c21a9dc2cc98535",
"/": "2d551138c75256977c21a9dc2cc98535",
"main.dart.js": "07a05dc9d2aade3d601ae74f9c61598d",
"manifest.json": "75721181c830e84b9d2b33e7c2b97e0a",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
