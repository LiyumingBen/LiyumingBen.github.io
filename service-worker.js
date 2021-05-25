/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8981fd53deefcd991160875b78583310"
  },
  {
    "url": "archives/index.html",
    "revision": "3b29871763da31d158f7df855c4d05a5"
  },
  {
    "url": "assets/css/0.styles.dec5cefc.css",
    "revision": "3f67c38caa9414183294c9494d72da88"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.2109c9e6.js",
    "revision": "10fc2815ac8149394efead32b51f5e19"
  },
  {
    "url": "assets/js/11.bd3b3957.js",
    "revision": "c36368355c83c3071d98d0d27ceba614"
  },
  {
    "url": "assets/js/12.01e00bb8.js",
    "revision": "023a972061a1fe1da6b64b1708a25386"
  },
  {
    "url": "assets/js/13.d8b83f3d.js",
    "revision": "89a625ce2af369927fa0cb66ebd327d9"
  },
  {
    "url": "assets/js/14.85164a28.js",
    "revision": "90b219e5b1f74d6f6cb67508287d5027"
  },
  {
    "url": "assets/js/15.bd6f8730.js",
    "revision": "dd0d7b01874d6d7beef303d0250bf71b"
  },
  {
    "url": "assets/js/16.753dda2a.js",
    "revision": "f375ad425125adf421b51cba19bcd516"
  },
  {
    "url": "assets/js/17.30448120.js",
    "revision": "2005b14ac22bc6ee4b4a8bcbf803af23"
  },
  {
    "url": "assets/js/18.25c28f62.js",
    "revision": "fa48b2cb5c6abdcefd94ed3fbd32ea4a"
  },
  {
    "url": "assets/js/19.cc544f3a.js",
    "revision": "7879dc0b4c4d1639ecf59a56be07a928"
  },
  {
    "url": "assets/js/2.7f001437.js",
    "revision": "e5cda4bc12aef0cd9808e66c5d607f81"
  },
  {
    "url": "assets/js/20.dcfc359b.js",
    "revision": "8627788441420fce6fdf67e591e37673"
  },
  {
    "url": "assets/js/21.8fb703e5.js",
    "revision": "33329a9cbdc7fcd00bb7a6977143ab86"
  },
  {
    "url": "assets/js/22.cbfcdd99.js",
    "revision": "0d2b7907fbce027c98d2f1f790ceb1c0"
  },
  {
    "url": "assets/js/23.44251cb0.js",
    "revision": "58cc02d45e06cb302115e302abb575d2"
  },
  {
    "url": "assets/js/3.f48145b9.js",
    "revision": "f6ad81dd0ed96352db75ba059e6f752e"
  },
  {
    "url": "assets/js/4.4969daac.js",
    "revision": "3297d6da598e6d2c94249bf395a18e49"
  },
  {
    "url": "assets/js/5.d5a5e292.js",
    "revision": "88d746fccdcb42f3d6327f7fdd7938d9"
  },
  {
    "url": "assets/js/6.1292ff7f.js",
    "revision": "f3339bd3ab85299e547275dd2a13f384"
  },
  {
    "url": "assets/js/7.faf32fdc.js",
    "revision": "1d2856a4a0d7600c5a1e845730382a4e"
  },
  {
    "url": "assets/js/8.9de46d7f.js",
    "revision": "0016c883375d2370194c2738964af36e"
  },
  {
    "url": "assets/js/9.05b52522.js",
    "revision": "3267025fb0e758b16eeb954fdc1c76a1"
  },
  {
    "url": "assets/js/app.a721c267.js",
    "revision": "c3fbf059db36983a737e25a2692221ff"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "8ad4b5fe48ee5de92a37c2f253211e1a"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "b2010baa4493be4c4653e41e3c1884b6"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "caef16e077985d0fa3bce587f9e0a349"
  },
  {
    "url": "categories/index.html",
    "revision": "77d7bab4c70b1847f85c4d6ccd7d11f2"
  },
  {
    "url": "img/avatar-2.jpg",
    "revision": "55b9603cdb0caff91ecd803d047730b1"
  },
  {
    "url": "img/avatar-2.png",
    "revision": "d3a1ca94d8290aa71371dda0664aaf14"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "037dec754a042491ae29f2bc02eb1814"
  },
  {
    "url": "img/avatar.png",
    "revision": "a19cc6aacf9b570b8a4047da4796146f"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "img/logo.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "img/pikapika.jpg",
    "revision": "0b6e65b4475bc068ac04c9c24204f1d4"
  },
  {
    "url": "img/wechat.png",
    "revision": "62c9dd61783e38f36b454af905cecae7"
  },
  {
    "url": "img/wx-global.png",
    "revision": "345b8e76ab0868483dca7a7b33103c47"
  },
  {
    "url": "index.html",
    "revision": "b6a407ea6c7a1c27926cc7a74b9fa675"
  },
  {
    "url": "study/css/reset.css",
    "revision": "37666e04d93aded7e21dc0f1d0879423"
  },
  {
    "url": "study/index.html",
    "revision": "530fc8d92e431a4692d6575b04573cdb"
  },
  {
    "url": "study/precache-manifest.05b24b6636bd972f0f436263abc9dea0.js",
    "revision": "50ff6a5c5a0cbd62f45aa9c94661a085"
  },
  {
    "url": "study/static/css/2.8f6577cd.chunk.css",
    "revision": "48aa71cf651d0e4dc42b2f8de042accd"
  },
  {
    "url": "study/static/css/main.61320533.chunk.css",
    "revision": "229915a2d623779c94c760f07969efc0"
  },
  {
    "url": "study/static/js/main.f022aa25.chunk.js",
    "revision": "66df1b8666956012845b27d378f72020"
  },
  {
    "url": "study/static/js/runtime-main.3725ae0b.js",
    "revision": "9c741acde7651f47844059f09c69d48f"
  },
  {
    "url": "study/static/media/404.9161e238.png",
    "revision": "9161e238b798c444b732dbbb7420a09e"
  },
  {
    "url": "study/static/media/logo.421642f8.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "tags/index.html",
    "revision": "11f450302b775ce9c6311ab78f0efe99"
  },
  {
    "url": "vue-iframe-print/css/app.80764a13.css",
    "revision": "41670c952da5bab26acafc6186da19b0"
  },
  {
    "url": "vue-iframe-print/index.html",
    "revision": "96237c9fbc239de1496d1c1e8c36d7b9"
  },
  {
    "url": "vue-iframe-print/js/app.47469697.js",
    "revision": "cd1c40af0cc48bf045b6964d0d1b19de"
  },
  {
    "url": "vue-iframe-print/js/chunk-vendors.4f44ce85.js",
    "revision": "9fe43e915db4d7e06f89817632ddc968"
  },
  {
    "url": "web/docs/babel/index.html",
    "revision": "63dae2ca3a944233b34a6e1e397d73ef"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "08d06a01ed817d0adc8038d5af80feb1"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "3f628d7c669e319569934e454eec30cb"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "e68df7a73e5daf80d3a5a8ec1626cd17"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "8cd4864d4ccadb2ab557bee6bb2750fb"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "16f8632b9ee97cba10f56e923b47238e"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "927bdbd1119ce1118efefaee2581609d"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "aa3233efe95e5a0afe042d65defa660a"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "d02a074c673bee6ca3d42112eb978ceb"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "35d01ffab82ce38b2619183ab4724a4f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
