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
    "revision": "dc6948faa15658fc92cfc184b41ead78"
  },
  {
    "url": "archives/index.html",
    "revision": "8ffe0ed13567b64bd8d5b3e97ed4be66"
  },
  {
    "url": "assets/css/0.styles.1c487a6a.css",
    "revision": "c5a8ac750d144262b5502e725f1781b7"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.d906277b.js",
    "revision": "eaa6151bf696d7ea8937b5f6938a2546"
  },
  {
    "url": "assets/js/11.5dae8151.js",
    "revision": "5d6e0953fc24a1c39feab876b44e9943"
  },
  {
    "url": "assets/js/12.319133fa.js",
    "revision": "27968eca573068270d5986c8923a5444"
  },
  {
    "url": "assets/js/13.51afc771.js",
    "revision": "407540730f6cacc7d9e61cc106467300"
  },
  {
    "url": "assets/js/14.5a0c144b.js",
    "revision": "72fe97f1827781d813d2d8c9de6dfa0c"
  },
  {
    "url": "assets/js/15.9317535d.js",
    "revision": "9ec7c4d74edf51e9da0847412bd9d5e7"
  },
  {
    "url": "assets/js/16.f2d72803.js",
    "revision": "3b8a3ac8a5e3802017a84402f8ca571e"
  },
  {
    "url": "assets/js/17.b43aeffa.js",
    "revision": "c590c0dd73be76e277bf208ade8ec299"
  },
  {
    "url": "assets/js/18.ec6c8aa3.js",
    "revision": "62a890abc3ce0a70bbb0f3883e00fccb"
  },
  {
    "url": "assets/js/19.62d1da9f.js",
    "revision": "3c32eb4fb4ba67e8fcff664831fb1201"
  },
  {
    "url": "assets/js/2.c3fe4d6a.js",
    "revision": "cf55f0f7a021b7f2d26fdeb7245249e7"
  },
  {
    "url": "assets/js/20.4c3ee2d7.js",
    "revision": "7f039be5051b998fd9dfa3f511c2ae32"
  },
  {
    "url": "assets/js/21.e8d8a639.js",
    "revision": "420cbfc8faf59918e01abd978176b032"
  },
  {
    "url": "assets/js/22.bbe5b14d.js",
    "revision": "460f66814ee24c0151a98f2667642917"
  },
  {
    "url": "assets/js/23.d471e689.js",
    "revision": "f4ba25d70bb7911793653b7ff78f82d1"
  },
  {
    "url": "assets/js/24.cfc17311.js",
    "revision": "198fd021879c59c597262a3a3c541c2d"
  },
  {
    "url": "assets/js/25.0af02fb0.js",
    "revision": "c9e4db1b20fd287a6082d9fd0fee399d"
  },
  {
    "url": "assets/js/26.051764e6.js",
    "revision": "f483c0bb951a27d8cc14682d08bed856"
  },
  {
    "url": "assets/js/27.bccc3771.js",
    "revision": "8af4f9776cec6ca1e66fbad4a796ae2f"
  },
  {
    "url": "assets/js/28.ed4c27e8.js",
    "revision": "d81dfe9c140d8b4e8a5f90d0853c9c4f"
  },
  {
    "url": "assets/js/29.066cfabf.js",
    "revision": "9b2ecb81a602f1af1f661466043a4969"
  },
  {
    "url": "assets/js/3.d6f08142.js",
    "revision": "499d149e246b2baf3442578420340e85"
  },
  {
    "url": "assets/js/30.16a6a1dd.js",
    "revision": "2410c151101daa5259d23443449f563d"
  },
  {
    "url": "assets/js/31.eade2b23.js",
    "revision": "0c5057e945995e97ca0e96027081ca30"
  },
  {
    "url": "assets/js/32.37fdcf75.js",
    "revision": "48490ff056b6bb9b747b552170f1ce43"
  },
  {
    "url": "assets/js/33.87d2cf6c.js",
    "revision": "8243c5de51b5598982c2e142554c5595"
  },
  {
    "url": "assets/js/34.ddd384d3.js",
    "revision": "af6eb28437e4fc7178fc1e5db36ca223"
  },
  {
    "url": "assets/js/35.4d748cf9.js",
    "revision": "20325407222c4fb991dd277e63c369d1"
  },
  {
    "url": "assets/js/36.45857faf.js",
    "revision": "04d1e12e866c53f9f514d49accb407a3"
  },
  {
    "url": "assets/js/37.9ab504f6.js",
    "revision": "41185d480b1b9686c8cd26f610227a7d"
  },
  {
    "url": "assets/js/38.f56b35af.js",
    "revision": "72c1539209717241b7ada70fa6520ff5"
  },
  {
    "url": "assets/js/39.10040d8a.js",
    "revision": "9d4d4df21719bc825807f9a90525c4b1"
  },
  {
    "url": "assets/js/4.35d88f9b.js",
    "revision": "0b19ddf2ee4d06953e96a447b0c01392"
  },
  {
    "url": "assets/js/40.14f52156.js",
    "revision": "f4e4d72095c89616e26c8e57c1b963e0"
  },
  {
    "url": "assets/js/41.bfc7b650.js",
    "revision": "354b954071a890742f5b71dec3d38512"
  },
  {
    "url": "assets/js/42.2ff43d97.js",
    "revision": "921554c0dee296fc9d13466d10fd1717"
  },
  {
    "url": "assets/js/43.b43c8d05.js",
    "revision": "fceec984683073e7df4008eb42c4127b"
  },
  {
    "url": "assets/js/44.6195ffb5.js",
    "revision": "cbacb71262f14a9d58c6f368d4f8c211"
  },
  {
    "url": "assets/js/45.c8c42619.js",
    "revision": "dcc05c75cbf67becb7d08e25b55e7bd1"
  },
  {
    "url": "assets/js/46.a0f745ee.js",
    "revision": "c9bbff81e8552b027ca893d5ce563cbd"
  },
  {
    "url": "assets/js/47.78f7d613.js",
    "revision": "644f8a8b5d794e9750c356f4e9df77f8"
  },
  {
    "url": "assets/js/48.10e26f2d.js",
    "revision": "15ba10e306defa64e6901859834d4bdf"
  },
  {
    "url": "assets/js/49.8a0e048a.js",
    "revision": "ee5226de93d845a179c3f10f3aaf10a3"
  },
  {
    "url": "assets/js/5.a04c4b05.js",
    "revision": "05109364df98fa2efab076f9a602f243"
  },
  {
    "url": "assets/js/50.26a14811.js",
    "revision": "da88735e6bdb3a7014a1f78cc1ea3b95"
  },
  {
    "url": "assets/js/51.fdb6b500.js",
    "revision": "1c0c25b85f146fb915f3d06a1e863dc9"
  },
  {
    "url": "assets/js/52.3cf1c1cc.js",
    "revision": "677141bf17b98eceda151a5adca5524e"
  },
  {
    "url": "assets/js/53.4ad60424.js",
    "revision": "73ad91a927c44da531958b2b7c69ee1b"
  },
  {
    "url": "assets/js/54.fe673b7c.js",
    "revision": "e5321f88e8c6bceab9a95e0ae8100e5d"
  },
  {
    "url": "assets/js/55.4180f4c7.js",
    "revision": "1b4e0be84fc68a262b504bacb3038b37"
  },
  {
    "url": "assets/js/56.7a93c8ad.js",
    "revision": "e8fb4a50bb56d91482b8c64d31e0a7dc"
  },
  {
    "url": "assets/js/57.fcddde7d.js",
    "revision": "40d589323c4d759c793ee7969b313d29"
  },
  {
    "url": "assets/js/58.ab4a5926.js",
    "revision": "5315866ec19cf459f0f3ffa139260382"
  },
  {
    "url": "assets/js/59.56c8dc09.js",
    "revision": "eab415a4901974343969a7662780fbe6"
  },
  {
    "url": "assets/js/6.d3630d9b.js",
    "revision": "e6c77e5ecfb1e733383a910199534125"
  },
  {
    "url": "assets/js/60.bfb1e83b.js",
    "revision": "0209e1cfff1b860378d684672d042965"
  },
  {
    "url": "assets/js/61.a37cbf71.js",
    "revision": "7dcda6012624f14086178aab88f25fca"
  },
  {
    "url": "assets/js/62.df84c3f3.js",
    "revision": "83002d6cc56e70271e57c94be8c6175e"
  },
  {
    "url": "assets/js/63.c426db67.js",
    "revision": "a2e5f97df87dc128bcfa35c9c15c8a18"
  },
  {
    "url": "assets/js/64.1f2a498d.js",
    "revision": "35f5e5e71a5c28d4549f0280fe5d5ed5"
  },
  {
    "url": "assets/js/65.95afd93a.js",
    "revision": "dbd9b1d6c2a7cb3bdd7c30ce74715e91"
  },
  {
    "url": "assets/js/66.a4aec801.js",
    "revision": "acedf5416687ad6a53aa5580deea0d1a"
  },
  {
    "url": "assets/js/67.afa83146.js",
    "revision": "e09ed44c5ab8b69cf3e89e7c1b3f6816"
  },
  {
    "url": "assets/js/68.8946d160.js",
    "revision": "96469d43e1ae08f717e54c375c9f69f7"
  },
  {
    "url": "assets/js/69.4400e001.js",
    "revision": "3f260d11b2fe3cd3e88b53d689818a0a"
  },
  {
    "url": "assets/js/7.6e9d197a.js",
    "revision": "b6b14447a62d0d3ed0fe876bb574b4e5"
  },
  {
    "url": "assets/js/70.192090ef.js",
    "revision": "e03a7cc95eebaf1d36c4d29b1d24d9dc"
  },
  {
    "url": "assets/js/71.01c7c951.js",
    "revision": "029f3f9aec01496652fd29f1047eb976"
  },
  {
    "url": "assets/js/72.f318b4a6.js",
    "revision": "26ef1762f81770b2e800a71b8f54c291"
  },
  {
    "url": "assets/js/73.5798cdc4.js",
    "revision": "c5425bc9fde0bdbfa8e9f0d6f6e4174a"
  },
  {
    "url": "assets/js/74.2d8c0403.js",
    "revision": "d4787ba25a44a2e405f81bce6f6b7b03"
  },
  {
    "url": "assets/js/75.2d3d8963.js",
    "revision": "b7346016daaade26015aa632ae051799"
  },
  {
    "url": "assets/js/76.6a08bb6e.js",
    "revision": "0620b26d5bf478265ec82a6f4dea4da5"
  },
  {
    "url": "assets/js/8.b679f372.js",
    "revision": "1fce4a889698eaccdac0d0adae6addcb"
  },
  {
    "url": "assets/js/9.69665598.js",
    "revision": "9b20402e02d686b7cdf99736cf0e67cb"
  },
  {
    "url": "assets/js/app.d79cf97e.js",
    "revision": "632a161bc3c8092e1c1150f549179b5a"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "e4996b2f092f5b626e02c7e70c2d6899"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "321aa6224eed13f6cc5cdaf5f93a626e"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "9d7837c56e6688b249d1486bd1b33a6d"
  },
  {
    "url": "categories/index.html",
    "revision": "2c3cf37b7853ac60b466b10b073741bf"
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
    "revision": "745b8729af808ae14e62208667f0e17e"
  },
  {
    "url": "pages/049002f6abcca/index.html",
    "revision": "f97d645d9098baef3099a7cb28cc32ac"
  },
  {
    "url": "pages/0927b96ce4043/index.html",
    "revision": "3d3f9caca54228265aa1a6fe66caa866"
  },
  {
    "url": "pages/09cd63abcc13/index.html",
    "revision": "fe43d25ba7276b5a1276585f2a456a41"
  },
  {
    "url": "pages/199befdb4bb6e/index.html",
    "revision": "6b23d8c86d13039c2110f5a0f2b07458"
  },
  {
    "url": "pages/1a2ccb4e62e3b/index.html",
    "revision": "9e135c4130358e8feeb0edb7fa3a1aeb"
  },
  {
    "url": "pages/1d97a6c0b82b6/index.html",
    "revision": "9e9d4c81d76a6b442dd075967ecb1950"
  },
  {
    "url": "pages/1fa12ea39c5c/index.html",
    "revision": "233eb87d67e382da3ae36f7c1808cb6f"
  },
  {
    "url": "pages/1fde307ac87de/index.html",
    "revision": "56070312d82c18847d9d2339dcb77e37"
  },
  {
    "url": "pages/258499dcf2899/index.html",
    "revision": "f0b54f7c6b06a9b685035f58fbbe79a5"
  },
  {
    "url": "pages/33a101024f837/index.html",
    "revision": "446c57ab7d6038833dddc66f587b2243"
  },
  {
    "url": "pages/35867f11d889c/index.html",
    "revision": "4dbd2825c73ac4c1b1b979a6ca0a78f4"
  },
  {
    "url": "pages/3a15753bf17f8/index.html",
    "revision": "718d4613914cada0bc512d924612165b"
  },
  {
    "url": "pages/407ec6318cee9/index.html",
    "revision": "d396341bc30b5ffa26e10677c65d4d7c"
  },
  {
    "url": "pages/437c07dfac139/index.html",
    "revision": "94edb1ba45195acfe721dd2b1ca12e0f"
  },
  {
    "url": "pages/5225a092a70de/index.html",
    "revision": "27b1e7a8747239d8c4b7031bcfcc704e"
  },
  {
    "url": "pages/55480a16086be/index.html",
    "revision": "6788f031e517a596db26b391a9704810"
  },
  {
    "url": "pages/57276344f0c58/index.html",
    "revision": "db4142761a43fbc069d9e57229e673ce"
  },
  {
    "url": "pages/5760bac51e3bb/index.html",
    "revision": "bf87ac17cc667e11b9c1d4f2f141be93"
  },
  {
    "url": "pages/588006f26cd71/index.html",
    "revision": "73d98c6c1aaa33596c5befdab6aa1b83"
  },
  {
    "url": "pages/5af3b72940f49/index.html",
    "revision": "68f2a4ac18958bfc69bc0e5202fd6334"
  },
  {
    "url": "pages/638f87bac6add/index.html",
    "revision": "0b9c9beeb9aca68ab6d1471875bbaf0f"
  },
  {
    "url": "pages/6613f47a3fd0b/index.html",
    "revision": "b3afe405341eb527ada10f28c67767d5"
  },
  {
    "url": "pages/6e64e1b8ebb63/index.html",
    "revision": "bc26baccda204af2a2d50551d2ee7ebe"
  },
  {
    "url": "pages/6f9e868c91e76/index.html",
    "revision": "0c2afcfdba64485711f36ec772824287"
  },
  {
    "url": "pages/7432ab8ae7f/index.html",
    "revision": "31c64ea5950d143b7a7c13498402889e"
  },
  {
    "url": "pages/76d27350732f6/index.html",
    "revision": "9b22157d3b63f1d66fec482a45ad770f"
  },
  {
    "url": "pages/7850995a708fe/index.html",
    "revision": "c8b76e7b5e3ebf4bfc6256bac75b5552"
  },
  {
    "url": "pages/808dbfc2ce498/index.html",
    "revision": "5485ac9f6676decfc21e2519715bd653"
  },
  {
    "url": "pages/8586014dcf128/index.html",
    "revision": "7e09c3eb3f12dcef685c971d22d24eaf"
  },
  {
    "url": "pages/8fa334fa9fbad/index.html",
    "revision": "7e2910e3454c48887319f957ae692018"
  },
  {
    "url": "pages/9cbeeeb482705/index.html",
    "revision": "37f6f53537fc3575fab1fe9124656eb5"
  },
  {
    "url": "pages/9fba4aa49e491/index.html",
    "revision": "5038fc4cab97214bce252157f5d292c9"
  },
  {
    "url": "pages/a57972579c81f/index.html",
    "revision": "bedb93433552029a515da406416f40dd"
  },
  {
    "url": "pages/a9b8ceeacb63e/index.html",
    "revision": "376ebf2a26c415448f045f08690fa0f2"
  },
  {
    "url": "pages/ad4716bfb2152/index.html",
    "revision": "1bcc425e1f48ea1e8ab8402b2a41e321"
  },
  {
    "url": "pages/ae08ce5b79db9/index.html",
    "revision": "7f38469558c2f4a89184671217942209"
  },
  {
    "url": "pages/ae340ba1d04eb/index.html",
    "revision": "197d288ee1bee8cfafd20ed63b3ea230"
  },
  {
    "url": "pages/aecb1cd1a627d/index.html",
    "revision": "47ec35f57ed97c193a54995c3722ed4a"
  },
  {
    "url": "pages/b1d113a772b73/index.html",
    "revision": "be174f8b047b836484153d2ad715c738"
  },
  {
    "url": "pages/b2f81d2a99a6f/index.html",
    "revision": "b7694d63f597ecd89381e04f50fffeec"
  },
  {
    "url": "pages/bc60127c0a455/index.html",
    "revision": "8ea335935688c5a77e87f682e22287c8"
  },
  {
    "url": "pages/bed729e9bbcc1/index.html",
    "revision": "f4570f5768c43e821208e5d65e4c0c49"
  },
  {
    "url": "pages/c439a37a78ce1/index.html",
    "revision": "bb1980e008b5f09876a29bc32d14b908"
  },
  {
    "url": "pages/c9e20955e45d/index.html",
    "revision": "a2c32224955cb8f516b9b830f3ca3067"
  },
  {
    "url": "pages/d2d2e0206e661/index.html",
    "revision": "48841a41feef4ead44c416b11f912b1b"
  },
  {
    "url": "pages/d58d3aaaeafeb/index.html",
    "revision": "ca79690bb2b09dd535c93be6520d1dee"
  },
  {
    "url": "pages/d69421d0d12f3/index.html",
    "revision": "7110ba2d711718a948a193cd8b1861e7"
  },
  {
    "url": "pages/dbd9e9a8fdbdf/index.html",
    "revision": "cb8869063fe62f8feb497058600cfa87"
  },
  {
    "url": "pages/e029eef908a98/index.html",
    "revision": "d51943c54430d84c8ca6d60e680898ad"
  },
  {
    "url": "pages/e37b334153c56/index.html",
    "revision": "01853b09feab0144c0a4422906ed0213"
  },
  {
    "url": "pages/e3ccf1208ffaf/index.html",
    "revision": "d4d1023b176abb00a44e7e3cf56bb018"
  },
  {
    "url": "pages/e85168e4e1a54/index.html",
    "revision": "b4f7c85abb2dcdc96acfc86adabed0cc"
  },
  {
    "url": "pages/f90198fc323c7/index.html",
    "revision": "b35a66cc1544859db20f6e532bd1dd83"
  },
  {
    "url": "study/css/reset.css",
    "revision": "c8df9e9e48e86c4fcd3972a0111e46fc"
  },
  {
    "url": "study/index.html",
    "revision": "530fc8d92e431a4692d6575b04573cdb"
  },
  {
    "url": "study/precache-manifest.05b24b6636bd972f0f436263abc9dea0.js",
    "revision": "05b24b6636bd972f0f436263abc9dea0"
  },
  {
    "url": "study/static/css/2.8f6577cd.chunk.css",
    "revision": "8aacd14455dd3a1064dca30097202e31"
  },
  {
    "url": "study/static/css/main.61320533.chunk.css",
    "revision": "0ff1be3b98657889bb1d1ba0da308239"
  },
  {
    "url": "study/static/js/main.f022aa25.chunk.js",
    "revision": "b08cd1d21871988e888f3ea9f6a76fee"
  },
  {
    "url": "study/static/js/runtime-main.3725ae0b.js",
    "revision": "371fc4c0b43299ae7ad805c2e21ff81d"
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
    "revision": "98c3d011353256102aa6398e8725ea0e"
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
    "revision": "1e472a8fb25771accb2f89487ccc440f"
  },
  {
    "url": "vue-iframe-print/js/chunk-vendors.4f44ce85.js",
    "revision": "5d2e1c01d27e71fb2895708d03590996"
  },
  {
    "url": "web/docs/babel/index.html",
    "revision": "22c8ee6d794dddd39c0bfa96d228cb58"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "acbb4b885488dce3551a432dd25603ac"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "45af8cfe70384f1f7287b88e83ce42b3"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "2c6a313acf7649fd5372ead9dbd74dd7"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "44228ffee6994d241295c38f1a1601b1"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "0007cd9b3c660fe805f81336530c5edc"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "82c2640a1b89995364bc735ced409ecd"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "4fe4d2e77ae1ec2ef26870a59d748fb0"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "5939de4afab20d958267f60261d8f88f"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "2fee63494eaedf725466c82715a9e341"
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
