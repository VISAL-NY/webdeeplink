'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "da62196a8635fb7321cfe5c51597b7eb",
"index.html": "261e3775e966d6a4dbe438b2c6a13352",
"/": "261e3775e966d6a4dbe438b2c6a13352",
"main.dart.js": "19fc18099c05e4741c9f7cc7f0d82d9a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "293bc4ae9ac6bb4d8513c81e2833e98e",
".git/config": "bd23763a18a36756097a729c54649dce",
".git/objects/95/1041d799200359d131c33c3281087ceeedb745": "dcd550ab0ee9549cc66e060db1562c02",
".git/objects/3b/544ef61389706d0cf9cd9ce26e77a8a81a3a1c": "d8d6bb7fb7b351298308044e1d8ee247",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/f56647b5b966173bd2b2d956bcdbf86b1df4c0": "3785959b4ac7eb44302731320cc91807",
".git/objects/0b/fee8641621c62074f956eed83a8c802df08c1b": "64323d0dc48b684eb758dff25ee2a3dd",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/e809509f9df745b0f4552e99aed5763aa1015b": "2e747dc46b3a19ecc73fac861c218904",
".git/objects/0e/ea1726a5d21b5c22dfd3ba91a423c88db2f0ab": "fced84ed1a78ed48225b8fc24a0d34d6",
".git/objects/a4/f46833796f4eacdeadbb05dd397d209034fac9": "cbef5dbdb8b24ee9ce793dd4f4a99c9f",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d0/87d863a94c583051c95bb7f910c0d69d7318b1": "4edb88d5eb194bb24293e7787961c6e1",
".git/objects/a5/4564ed97bbca53c4127217246908c986de7d09": "3694b58ea844e855c1128298535ab71f",
".git/objects/bd/a5cc8c86b6066dd7c6993d6175b9d36f4c18a0": "b46f9f127188dabf73b12e3b9dc1e5fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/05a8b20aa3c4f7598cf484dfc847ed6cbf8a8a": "8437bcdfbb239033d576b5503fb03155",
".git/objects/ae/a30102a93f55a2e0963837196a2db198e11b02": "042476639f511ee255a7b5a5405906c7",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/bc906d81ad9dd6c952fee0ddca9ba3af7d32e1": "37fd2bd7e3ec4aeb7da527b52d2cc300",
".git/objects/e2/6c24ac0f9e5a178c525b295c63294dbfc107c4": "6aa39ef984637fd064ae7a9ae413ad20",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e4/31006d7ce7c97ea580c3387683f71f755c2286": "3a0fc9feb2afd42c8c1aefcd0972c9de",
".git/objects/fe/c844b230d241bbe12714420f9d7eb9d9a625fe": "abbe31f89397146e8f6677d8f035ad85",
".git/objects/ed/6223ccdf04e383fd7e3c3cff8a82c0077abf73": "426b56267619e5d24d6e7cb1adbff7a9",
".git/objects/c6/838c5006e8764f2fbd938bc95d035a699c4d23": "ce3c38f095c2e5e14e43feac8d90358c",
".git/objects/18/2ca27d066a3cfc764f678682a0acc54f92e1aa": "b71adde4f23632c6a22e366129ba2274",
".git/objects/7c/aa664283934bd85432301010eb000a6e73ef1b": "91e0cd3cf3f0f22075e21802b090dde8",
".git/objects/7c/02bc6c397d2f178219dc9d808bad6a37a6e5ea": "9dcc5ab4c314df09e388037eef95427d",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1a/51320a1169d8923537cffeec5bac2ad7d0e418": "a43ce6eda0e4291b7795f8de7a263405",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/92f07626493ea4cbdfa046831528662bb6dbdc": "5719143aa66eb29d744daba5f3753daa",
".git/objects/4d/b6530c66888ceb4e9e6e89a45841b6719b13cb": "892614d2e8db5d97e004f53d2d20fc26",
".git/objects/86/b7760e62e595a374c033ca83a97856148fb9a5": "e63936e1a961033fb2712101d5d835df",
".git/objects/86/cc6ac64179c0df0eea0fdd66b063ce8d8717f8": "f8f9a8545d504e72ec4b9ccc3b85bde3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b1880f81653d857a4637bca76309d48a2432ff": "848bcb8b831740f22a39ec605fc19b19",
".git/objects/07/e1513e62512506ce49517c4a1119a378cabcc3": "642fa5cdb90ba852d8cca7325b2028aa",
".git/objects/38/f2363174b9973d473747dea2829f5684fdd26c": "2e5de88a9b68c06ab70d22053172c736",
".git/objects/38/a6129b40306e43508242f3704a5ad2bb04faf8": "8d26a753399d6d8e7f0cd8bcc3835161",
".git/objects/9a/05d6f89b28d348a5d4e8526a76dd424b99afe7": "41447bc0c7a5de82030d6f2d872103ae",
".git/objects/9a/492596114c7aafce4d8e6202eb2cbdf19da3c1": "e3082b39d3212330fb7c31010d3ab8bb",
".git/objects/36/dbeab9adfe79563c24d612388276823e912a8c": "d5f77859816ab3ea65adf49d2eaf6afb",
".git/objects/65/052c70105e60d63a822abbf1e2850157ac2511": "c9b9e368f737389d3b159c19d8fad6a8",
".git/objects/62/a17097fdcc789a65116422b578546342563cc4": "ef7fd24cf66576b18169a483d29a445b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/c1d70cd58ed39b5a1f1b24f29540f0cbb94cf9": "42fe2c43b4026aed39e220e5a378f40d",
".git/objects/53/a10584adb5074c589db8e88091bbbbfd33a912": "977aaeec63cbe1ab3b5d56d62a14d645",
".git/objects/5b/d9f3467362d67e51a913fd842669cb1bbbe433": "9c8f30614bb05302fa26bf9be6d62a79",
".git/objects/37/103ab5e7bf54e15effa4f989bd4a9df21a548e": "a9fc7a52ac725d09731d1b609dbbbe61",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/13be1b0e011a02f3a681601c98e481f031accf": "3d8c8a41b186f40239fa54e824002dd2",
".git/objects/6d/22c1c9f3054e605e7263d22f5fe69d5c9a6834": "2f7e9c1ccc35536ee1bd3adc39b8ef27",
".git/objects/52/432f2ebb15609ca49f793b812e658fcc5ca4d0": "d8922b6861971c5fc9b047a1d76be328",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/d2/bdabe794e0c2bc65ad63c75f42baa5b403a0a5": "71977b62bdd700a2518533ca4a8496a6",
".git/objects/d2/408c0bb37df2253d515d9515bd64229866a151": "fb630199b0c1211e427d540ddd0296a5",
".git/objects/aa/9235b454fa3b399bcdb519a3ac01741831b666": "7e924903d719cda9a8d8e71e243c2ee2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/90afc565a33ec4fc3df0f6f2c97bda0bc3d575": "0746c13ef19312b138cdb18f1472c814",
".git/objects/e9/f1de1c361e52ffb8e6233780f89f62d4059f50": "9e0a92175273461c6f2dc6651cd7fba7",
".git/objects/e9/44f516119edb78b1b213ee1557c6c5292bf6af": "2ed5bc4d631e3441c8be4313cb1395a4",
".git/objects/f1/af99c98e0e9fcc587d4cbb1f3d4455029f27a0": "414cfe4d95bdf3e09f98165bf0e29ee5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/987a59a7b84d910006b880e933d372e3a97569": "87a5b61ea41767c93a1e035baa048ae7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/5df36b3647c65fbf2acfb1b3d1844a74e444f0": "1d7b9fdac8a4de499109d942fdb61f7f",
".git/objects/77/268140e66dbcb5dd1780d18e54525257aa0e98": "e02f236b8229ec7a983b30234639b448",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/48dc91f6a10c6caac593c06e7db9eba4bf42fd": "12c489bee01852e26d8dcb1fce6fc5c9",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/adce0cac8c1bce8843775e45cddde357fb7d22": "32e65d0190a2447b251252d1fa918d97",
".git/objects/49/830d93ebb79f147a633001db85eae298761807": "af5339baa685a9ffcd5f54a42e5abaa0",
".git/objects/78/dea5192f413c8a7058aaa42cd0ed6f22ab378d": "6c2548f615fe86289b28697609dbcd60",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/eff8e8826e20721265a824371d8a28cf29456b": "9cb55c402212d1ccbd726387a7c274ea",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "619bc8c64c48e854178f138b961cd352",
".git/logs/refs/heads/master": "619bc8c64c48e854178f138b961cd352",
".git/logs/refs/remotes/origin/master": "d7c077f93f02707af4eb8100a1cddb7a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "013897b3e1d983241a99ac299030a458",
".git/refs/remotes/origin/master": "013897b3e1d983241a99ac299030a458",
".git/index": "e20913fc97f559f56e144cf9ae636f25",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "33cdb1d74f25a93c2fba79ec89fcf8da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "52fc34a70b225832e47b13c384bc9b3e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
