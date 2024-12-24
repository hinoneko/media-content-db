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
    "revision": "88ad1615dfdb9938f0dfaa7f0115c1c5"
  },
  {
    "url": "assets/css/0.styles.52c323a2.css",
    "revision": "986bb80d964f2fad5549dfe2c5ee71d9"
  },
  {
    "url": "assets/img/DataMissingException.11d2ee09.png",
    "revision": "11d2ee09c27a49a43710328ade0d4a9f"
  },
  {
    "url": "assets/img/delete-analysis(1).9544a6da.png",
    "revision": "9544a6daaf1516c0ba137709f0166fb7"
  },
  {
    "url": "assets/img/delete-analysis(2).4e553cd4.png",
    "revision": "4e553cd4c9592e28d09cfb6995d8e47b"
  },
  {
    "url": "assets/img/delete-user(1).9ce82682.png",
    "revision": "9ce82682f0b18a95b6230680ac53c779"
  },
  {
    "url": "assets/img/delete-user(2).1a1a14c5.png",
    "revision": "1a1a14c533491e4720b90bbed7882d4e"
  },
  {
    "url": "assets/img/EmailAlreadyExistsException.12ff7db4.png",
    "revision": "12ff7db4b40f12655c76ff2ba441b8b8"
  },
  {
    "url": "assets/img/get-analysis-id.a342339a.png",
    "revision": "a342339a1969a261bc998f9677871b2d"
  },
  {
    "url": "assets/img/get-analysis.dbdd7118.png",
    "revision": "dbdd711812ff996b39a921c1775e4fea"
  },
  {
    "url": "assets/img/get-user-id.e5113633.png",
    "revision": "e5113633f8158c6fce366cfd7783f3c5"
  },
  {
    "url": "assets/img/get-user.77127605.png",
    "revision": "771276056f2b2a4fdc997c32e297c2d7"
  },
  {
    "url": "assets/img/patch-analysis(1).6b475c91.png",
    "revision": "6b475c91d3ce45fb6e2b89cc03cb853b"
  },
  {
    "url": "assets/img/patch-analysis(2).50a888a6.png",
    "revision": "50a888a6a9fb7a0a975cf9945d42335c"
  },
  {
    "url": "assets/img/patch-user.425522d3.png",
    "revision": "425522d3df1c52b877fec2c8130d9c2d"
  },
  {
    "url": "assets/img/post-analysis.4ff7bcbe.png",
    "revision": "4ff7bcbec390f166b12d609e19e256f0"
  },
  {
    "url": "assets/img/post-user.ff0f49d5.png",
    "revision": "ff0f49d50f9567272226e9c74904933a"
  },
  {
    "url": "assets/img/relational_schema.ce95178e.png",
    "revision": "ce95178e03036cd4d2d2ffe1a92aaba3"
  },
  {
    "url": "assets/img/ReportIdExistsException.d27571f3.png",
    "revision": "d27571f37fd899bfd539dd7cb32e1181"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/UserNotFoundException-analysis.c5937e5b.png",
    "revision": "c5937e5ba76460ba26c111292e7fe014"
  },
  {
    "url": "assets/img/UserNotFoundException.3ff77936.png",
    "revision": "3ff77936d18c5f804ded96e9fc088772"
  },
  {
    "url": "assets/js/1.1f3c71fa.js",
    "revision": "fd98ffef09eff1b525f4ff49bfb95dfe"
  },
  {
    "url": "assets/js/10.7169b3e4.js",
    "revision": "1fecfed7514049bc742e4c4ed2c2b6af"
  },
  {
    "url": "assets/js/13.54a007b4.js",
    "revision": "bd0b5d0d16e7e5cafdcd5b3a2c069d2b"
  },
  {
    "url": "assets/js/14.079a64f2.js",
    "revision": "06151860ee26ae2c3ad80dd01b1d93f1"
  },
  {
    "url": "assets/js/15.2b15601a.js",
    "revision": "d4f6cb94d558dd3bb409c4e476ffb5fa"
  },
  {
    "url": "assets/js/16.97ddd6b4.js",
    "revision": "e5d956c31a4616594e1797e58b8d10d2"
  },
  {
    "url": "assets/js/17.93daa0a4.js",
    "revision": "df469838023f4976ee8d4c8bff88acff"
  },
  {
    "url": "assets/js/18.b1ee37ab.js",
    "revision": "b27ca72610366f6ae5361266e269b625"
  },
  {
    "url": "assets/js/19.da6e89ab.js",
    "revision": "8c66ceb39e765ea06c5b32f88e172245"
  },
  {
    "url": "assets/js/2.0ec1ef2e.js",
    "revision": "c9825a0f26b0c22183ff8dc72d0c45e2"
  },
  {
    "url": "assets/js/20.f448c84e.js",
    "revision": "46ee77b5474275acdca51b7aba023081"
  },
  {
    "url": "assets/js/21.8e07b6e2.js",
    "revision": "cb41cd937d318dbc37d13516dfcb9801"
  },
  {
    "url": "assets/js/22.fe5cc5fe.js",
    "revision": "d72967ae276ea6ffc1795071192219f7"
  },
  {
    "url": "assets/js/23.f442853b.js",
    "revision": "d33b8ced611e13454f516b5ad47862f9"
  },
  {
    "url": "assets/js/24.7ccdb5e5.js",
    "revision": "7a6b2a727361c0afd9daf6ee757e15f9"
  },
  {
    "url": "assets/js/25.ec76d149.js",
    "revision": "311af35267b01bb887ca9b9d1e17fdaf"
  },
  {
    "url": "assets/js/26.53e82c3e.js",
    "revision": "55368c11756f8fc89f1c4e785e377512"
  },
  {
    "url": "assets/js/27.55164796.js",
    "revision": "91e92aa0cdb093af4e5575d24f08f281"
  },
  {
    "url": "assets/js/28.d26842ea.js",
    "revision": "404a32872bdb69c80c5d2b892df29e78"
  },
  {
    "url": "assets/js/29.b5e4c636.js",
    "revision": "8923fa61a95365c0df4f3105ee48be60"
  },
  {
    "url": "assets/js/3.1b0ecbec.js",
    "revision": "50aec8abe01b14d767874f9fb59abfde"
  },
  {
    "url": "assets/js/30.8ed4534d.js",
    "revision": "2fd7162eca70ddde857779662e0e98a9"
  },
  {
    "url": "assets/js/31.3fc351d6.js",
    "revision": "d9f42d151396a1851e5cd9aaacbea344"
  },
  {
    "url": "assets/js/32.4db301fd.js",
    "revision": "c1de70508342e36bc4d348626452aa5c"
  },
  {
    "url": "assets/js/33.b369e90f.js",
    "revision": "b9909e47f5a5b04a967b3ac9d00b09a1"
  },
  {
    "url": "assets/js/34.3f4d3eb3.js",
    "revision": "7634ebee508ed1cfdf668b9d0a4c5b9a"
  },
  {
    "url": "assets/js/35.13ace217.js",
    "revision": "7fc718bb8a2649f2bb5e59540df636fb"
  },
  {
    "url": "assets/js/36.9c663395.js",
    "revision": "948d4c050d80545d787775b31664ec2f"
  },
  {
    "url": "assets/js/37.93b1591e.js",
    "revision": "30c377f9469f0282ccfa34894e5c2b90"
  },
  {
    "url": "assets/js/38.b478f98e.js",
    "revision": "726dade03a3d22898c5e8a4507b736fd"
  },
  {
    "url": "assets/js/39.d24390da.js",
    "revision": "04ce3613ff3bc9c965e5e0e0fb781e83"
  },
  {
    "url": "assets/js/4.b7b35ae8.js",
    "revision": "cc51fef1d6f18ee91e81ac0038f3d4f6"
  },
  {
    "url": "assets/js/41.dcf7a0b5.js",
    "revision": "8b8390b0e9933278a27cd1bca52e611f"
  },
  {
    "url": "assets/js/5.8cc508ea.js",
    "revision": "5bc4657842489eca0d65d970b763cd2e"
  },
  {
    "url": "assets/js/6.74c5ed9a.js",
    "revision": "1b636f7fbc842a4ba554db22f5b70caa"
  },
  {
    "url": "assets/js/7.7f4d0569.js",
    "revision": "cb26363a3b924013bd06e71a1dc36845"
  },
  {
    "url": "assets/js/8.e189d652.js",
    "revision": "b60182f2baf6a2fb8b38391a08a90c69"
  },
  {
    "url": "assets/js/9.a292f159.js",
    "revision": "2488eea6b8bd7ee2b4a36456fa77c33b"
  },
  {
    "url": "assets/js/app.bfe12179.js",
    "revision": "0e5b0ba94e307572e9616a3abf88399b"
  },
  {
    "url": "assets/js/vendors~docsearch.34612498.js",
    "revision": "4dc6a70b80e31d51e584f814a06704a9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "de6e777c4ec896224862b7059d92ad7d"
  },
  {
    "url": "design/index.html",
    "revision": "4116756a7357748449163c8f3eb71033"
  },
  {
    "url": "index.html",
    "revision": "808bc27c884ed3ca729ce746d0595c92"
  },
  {
    "url": "intro/index.html",
    "revision": "9ee0e10e3168406f4aa41a691567e856"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d4728f4a959c723191517a8f788ea0c7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0d8d3892c66427020df78592a85b2e6b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "457bc2f353eb16cd380e6bdfc8706007"
  },
  {
    "url": "software/index.html",
    "revision": "3443412aee2f989cb3db5e0dadbddcbb"
  },
  {
    "url": "test/index.html",
    "revision": "ddea791454961e19d667b59d9bfc64f5"
  },
  {
    "url": "use cases/index.html",
    "revision": "3c518d6e9211deec05a476da10ef10eb"
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
