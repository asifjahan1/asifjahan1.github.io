'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "437df3592a05798262ce27cd2a3b7964",
".git/config": "41d5c0efb41e732b349a4c8090816ce4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7bc78029e4c3a7c7ab9016bfa1cd7a03",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "48339ab02b4322d78a179a5b6ecd1bfe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "393624f4cd81639de5916841a53a2a41",
".git/logs/refs/heads/main": "6fa27961f3d3e5ee6c794b2f5d42045c",
".git/logs/refs/heads/master": "84aaeb7d4fb18e6d465abf91ccc88621",
".git/logs/refs/remotes/origin/main": "2af66fab7c03e0cf495a1d2edad837e0",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/06/621bfbdadbd5f9772c68d1c1eb34f0310ad921": "21a5c8554a835515d7cd6f35960aaab6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/6ae96d468d22469c7635d1e4af9583f9545972": "859fa1ac2cb46d711aedc1ca1c8622d1",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/14/43805d9174c4428333bc5c9e144707f4654ddc": "fd6d0657b7c91d89af87b5c50f83e62d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/27/e6a097ae1f6ffafabe341d59c9bd5f87d8cee7": "e6ecb6d037f8f30058224da3f8acea9b",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2f/216aa895608544ba39af7792c915903ac67d16": "8c588fb64da39cfa53aebb7f76a50e0c",
".git/objects/3b/41479fc93ba4cb3c3fcdc23c786293be802b79": "d0aef7455bed4dafa646c3872d136f3c",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/962c48c7c3b07bd9610d19e9881645b578b673": "2e092e8796bcc2d80c0602e47dd3f800",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/67/25eeeb58e3835bc42750a85cbc79c773632392": "1cff9dbd5ddf853b7bec8da4582d4bee",
".git/objects/68/871a2add9ab7856dcfa090d96e1f1dbc18f429": "095e4459d13067ac19ac2ec3d1219e46",
".git/objects/6b/cbebf002f6d307b658f805909b07abc25f34e4": "490841720d6583bc40dfa49e37be19ef",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/77/bbe7f23fba178d1c865939cc417fd3e81fe742": "3354c714c20f45c24708648adbda8e7c",
".git/objects/7a/0e1898dfac0f77d84d143e81b29c5102b67ad1": "f74bd5ed5077863e6fbe01e9712cc0e4",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/84/6f750cdff08b7e78580c7eb9465c58f7c5421a": "73ab9de8af6b48a240e4928004f98b7c",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/87/44e8ea48718cf7f3cfdae144cbfde4e17d2298": "c1c404dc61257733d2b065a3dece303a",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b0736dd03f34175cb03b7ebcd19205fcbe1b58": "78adcee3303f77666f67b6ad563fd399",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/93/d0703796296c122e78f0f4caf30a09d733730f": "0aeb6b1c99a950d30f9c6c97b4a3ee75",
".git/objects/94/aef4c21c3957927836d1a39f7694b3bcd1b133": "01003a42e74d4d0b1aad63d886a94213",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/08632506d0ee8598ca4a65042623beb2ddf5a1": "d33faaa0ff58d78b88e2549eda7f0a50",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cc/fb997ddfedde2cce7aa9e5615d22a22d6a2e07": "3c1748162a66ac30e3808b1a5bd627f7",
".git/objects/cd/1a6f5b2bce8a61f320be76a2c59a2f3d50454e": "8adb1a432f79fbddf767c679a8cc829d",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/d0/3eef916178f7c98968605145f1c8b3ac6d4447": "707204038cb0c9ef1c023325b6b39742",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/de/f3e6a46aa2c44df4f867ad14805ffd8429b867": "4bc646148a14c67a0ff0c73170beade2",
".git/objects/df/2c094716889bb529e976542bfd7c10053f4e75": "0b8a30ffe8b9e2c8ea6dcffb31a3be3c",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/2a7babe868570f2f76bc9fdf73daeec9d1e562": "4009a5919c867e9954fcbd52ff6f9ece",
".git/objects/e3/a06568c4b48d881d06a698bea4b6277e079e36": "2eeb50a51e457416e37ed6ba8120a45e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/406430273256f9e1fdaf841eb72bdb2c887fa3": "f6b9ecc6e73bb9110ec9cbd1e8555218",
".git/objects/f7/db25511cc50550d7e70d1ec1b0207285b8105c": "d50db1f9fb3bc8e762b80b5ec51bbe4c",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/pack/pack-c60587e4a0259b99f7a2ff4e502d567b52596623.idx": "c002305489f94c78b12868e0c582278a",
".git/objects/pack/pack-c60587e4a0259b99f7a2ff4e502d567b52596623.pack": "1c22e763cb143c7169291c7558ce3b04",
".git/objects/pack/pack-c60587e4a0259b99f7a2ff4e502d567b52596623.rev": "345c162fc06f65b5b904564eee498ce9",
".git/ORIG_HEAD": "a772232259bfa1233b2d264f122ad145",
".git/refs/heads/main": "e30c8afeab34f98e5e038240b38a0b20",
".git/refs/heads/master": "a772232259bfa1233b2d264f122ad145",
".git/refs/remotes/origin/main": "e30c8afeab34f98e5e038240b38a0b20",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"android/app/build.gradle": "9a897c918c7ce59d144ed93676f12f28",
"android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/app/src/main/AndroidManifest.xml": "8eee728fb1a12972bee65bbbbbdd2dcf",
"android/app/src/main/kotlin/com/example/portfolio_website/MainActivity.kt": "33d317f1844f2d09ae7e24f90269ac31",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/build.gradle": "ac55d554f6e295399b94a35dcf3ae81c",
"android/gradle/wrapper/gradle-wrapper.properties": "faaad5d933fa8add22bd78f711c25218",
"android/gradle.properties": "25ea75fb6eca6e1362de4085a52623c0",
"android/settings.gradle": "682a4c750046ddfc37d6aa69e226a88b",
"assets/AssetManifest.bin": "73496b061d3cdcbcf495a645faf3ecc1",
"assets/AssetManifest.bin.json": "da3f423a17ec428a113c79b4a4a0dd92",
"assets/AssetManifest.json": "9f182c5dda730e89220c51d02d1d625e",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"assets/assets/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"assets/assets/icons/graphic.svg": "630269cfd18d3d8cf578673a89b377d7",
"assets/assets/icons/website.svg": "eb7f68d101ed55ef94b1a819515a4781",
"assets/assets/imgs/02.png": "d5ddf1eeff465df1b30217e39aab58f2",
"assets/assets/imgs/03.png": "8b04847afccdcfd07704e091e8afe683",
"assets/assets/imgs/04.png": "aed28d72aacb9988dc9332737c428d64",
"assets/assets/imgs/1.png": "ef3327197b8d2bbfbc9691a4daa119be",
"assets/assets/imgs/5424482.jpg": "b65eab647c8ea35da32d7e7d72452ee5",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/IMG_0107.png": "0a0008c8eda36503944abce53c099155",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/fonts/MaterialIcons-Regular.otf": "e608273ecc1ee06b27797671b8b2ef95",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"assets/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"assets/icons/graphic.svg": "630269cfd18d3d8cf578673a89b377d7",
"assets/icons/website.svg": "eb7f68d101ed55ef94b1a819515a4781",
"assets/imgs/02.png": "d5ddf1eeff465df1b30217e39aab58f2",
"assets/imgs/03.png": "8b04847afccdcfd07704e091e8afe683",
"assets/imgs/04.png": "aed28d72aacb9988dc9332737c428d64",
"assets/imgs/1.png": "ef3327197b8d2bbfbc9691a4daa119be",
"assets/imgs/5424482.jpg": "b65eab647c8ea35da32d7e7d72452ee5",
"assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/imgs/IMG_0107.png": "0a0008c8eda36503944abce53c099155",
"assets/NOTICES": "a743eb859becf6237e6ca2e89f019061",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"devtools_options.yaml": "6685982673558e00b93c1e2ab627ba83",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "78c624747c822efdc197d9354be251dd",
"/": "78c624747c822efdc197d9354be251dd",
"ios/Flutter/AppFrameworkInfo.plist": "09ece6f06f706864eb9c343ad93b57c8",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/Info.plist": "1f42048e2629e6d77adf4388c4581b19",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "fe80ab844f76a7ecc7c4a48b658fcedd",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "1eb71d2100e7a36f63a33aa15dbfe6f1",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"lib/app/sections/contact/contact.dart": "e2ac5462d5909c59ba201046a1cf1793",
"lib/app/sections/contact/contact_desktop.dart": "f53122022499e9a8182e9b2897557d53",
"lib/app/sections/contact/contact_mobile.dart": "03816393d3536157d57e248f61c7d151",
"lib/app/sections/home/home.dart": "f0a2d7e166130f350d99eeb7ddb69e14",
"lib/app/sections/home/home_desktop.dart": "de8bbdbf1320ef8e3b94608d9b6e3766",
"lib/app/sections/home/home_mobile.dart": "3b9de9f554b09cc45fee63ede701bdb7",
"lib/app/sections/home/home_tab.dart": "35323f16948b3b81f4b410553224f769",
"lib/app/sections/home/widgets/animation_text.dart": "13ad592ec9c03afc5dfd2e2a500414c1",
"lib/app/sections/main/main_section.dart": "b16a2283950687485c63dc084d964994",
"lib/app/sections/main/widgets/_body.dart": "2b8b0358a7e05ba9ac0fe9a02598b1f8",
"lib/app/sections/main/widgets/_mobile_drawer.dart": "7727174de38afc77291af6a6c7ec7baa",
"lib/app/sections/main/widgets/_navbar_desktop.dart": "0d31f05daa4c8ebf92758a04e60755b4",
"lib/app/sections/portfolio/portfolio.dart": "6c610c6d5cf96becc7e7e9c40c4382c0",
"lib/app/sections/portfolio/portfolio_desktop.dart": "b17c5f034ad95a24c59722cb8d3613b0",
"lib/app/sections/portfolio/portfolio_mobile.dart": "9386f1d04a28d00350fa061a771762b3",
"lib/app/sections/portfolio/widgets/project_card.dart": "4f3fc290d89b64a5ca9d6bfe04b60bbf",
"lib/app/sections/services/services.dart": "e21768a834048e5a8d85dee4b745b856",
"lib/app/sections/services/services_desktop.dart": "45de01b13476f65e51e811c7165edb2b",
"lib/app/sections/services/services_mobile.dart": "9b53e150db774fac633d4f9b595f8d23",
"lib/app/sections/services/widgets/_services_card.dart": "246788142a622c0d65442fa74b23e943",
"lib/app/utils/contact_utils.dart": "9c6ac0ca334a3e1018cd86a0233b98f0",
"lib/app/utils/img.dart": "2f6a64bb01af4770a9222165658a8fcb",
"lib/app/utils/navbar_utils.dart": "f076d8d1273a53743b42c87bf2d5abd7",
"lib/app/utils/project_utils.dart": "14596c3910d367cdd5682eb27067d20c",
"lib/app/utils/services_utils.dart": "510ad9b3164680aa95fa9190a9706a91",
"lib/app/utils/utils.dart": "700a3013dece5cbc7e99915a75095161",
"lib/app/widgets/arrow_on_top.dart": "bf9b304bfc1845b1ca01c6fbcecc0aa5",
"lib/app/widgets/color_chage_btn.dart": "94bdb9161db207bdf709b4d4e8964bbb",
"lib/app/widgets/custom_outline.dart": "89ef4b9c6badb85e3844a6efa26dd7d5",
"lib/app/widgets/custom_text_heading.dart": "78d27e0d52c280c114070556d5c89c6e",
"lib/app/widgets/footer.dart": "01bcfb652c6451aa10a880e56625d6b2",
"lib/app/widgets/navbar_actions_button.dart": "6fd42d9286af32016d43a9e5a8011f08",
"lib/app/widgets/navbar_logo.dart": "dc195948f93f0e815be46237a8e5d68b",
"lib/changes/img.dart": "e89c0cfa37a701dd4a86b8dbde1f080b",
"lib/changes/links.dart": "dc3af78e80722314b3c35c772da6c828",
"lib/changes/strings.dart": "d3da8abce9455cf1c346e30e5ff99dcf",
"lib/core/animations/entrance_fader.dart": "8c7dbe15ee5e5d7214bda43699457757",
"lib/core/animations/zoom_animation.dart": "1e40834ee1db317b217a1c0a1d52555e",
"lib/core/apis/links.dart": "96e6e8803af7ec804bed6c063d3d004f",
"lib/core/color/colors.dart": "71651f22ff4881ce997242ff63701d37",
"lib/core/configs/app.dart": "80ee8f728205c18016474eccae7a6875",
"lib/core/configs/app_dimensions.dart": "48d1f34ecd4d776e5dd16915b27bebda",
"lib/core/configs/configs.dart": "bc305231d930f5a49c1f04f50858eb64",
"lib/core/configs/connection/bloc/connected_bloc.dart": "75bdcfc3778ef00bdd618d735d6ba82c",
"lib/core/configs/connection/bloc/connected_event.dart": "e4c2969f056c42a06b40d6bca69b9d88",
"lib/core/configs/connection/bloc/connected_state.dart": "bb5faa9bf3e7b42aa5e14aa341cb6684",
"lib/core/configs/connection/network_check.dart": "1032f2969d762de0f72c210d39771153",
"lib/core/configs/others/app_typography.dart": "f0e910fdd03ddb46ae85c72428055333",
"lib/core/configs/others/app_typography_ext.dart": "d0784a7206a06622c07433b2c062a952",
"lib/core/configs/others/date_ext.dart": "1d5702880d9b1d4a886da2cf0a7344e4",
"lib/core/configs/others/space.dart": "b00b4d98ce679f9b7c0e6c2507a96daf",
"lib/core/configs/others/space_ext.dart": "847ed05f0b26f8216aa519731117de12",
"lib/core/configs/others/ui_props.dart": "b57d3117ee6c48edcd04f8574ae880d7",
"lib/core/configs/ui.dart": "faceebe2206151616d8ef5066a04e8dc",
"lib/core/providers/drawer_provider.dart": "a80f05a4356b88531b3d8ef6afdfaa9b",
"lib/core/providers/scroll_provider.dart": "5daeb6aec38bfc22017c60e86bc993e8",
"lib/core/res/responsive.dart": "0658eae4e8d6e75600a5fc9c05b34fc2",
"lib/core/res/responsive_size.dart": "de5b27a5bf41c7f9d63d7a9001b88ac4",
"lib/core/theme/app_theme.dart": "e8f2ca2035ef7323d9c3b8262378a6f5",
"lib/core/theme/cubit/theme_cubit.dart": "c9138b39359f60337f1cd75ca0f985c5",
"lib/core/theme/cubit/theme_state.dart": "6f3b8f436f02ba6a2465119227a140ce",
"lib/core/util/constants.dart": "f1834a408e025fd9039a84df5155222c",
"lib/main.dart": "8d71d1440a1c7fba10e1d0d4152c5053",
"lib/my_site.dart": "2a01dfd876288e5a927e41c23b06f3ab",
"LICENSE": "02d4ea62d9fb26520eee03e3923515ce",
"linux/CMakeLists.txt": "526d2eaf54aff4a79878b39bb9bba991",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "33d9640f2839ba193a4c2bb512c034ae",
"linux/flutter/generated_plugin_registrant.cc": "d4615e983185e91a48de32da2c94740c",
"linux/flutter/generated_plugin_registrant.h": "0208db974972d7b29a0ac368be83644b",
"linux/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/my_application.cc": "c823b8cfc073dddb2d3e436788221cd9",
"linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "6043c94403ed189d9e827b6660c1d339",
"macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "6237c17afc1d1fa58fb696f19532a34e",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "6ad71293eef5126d2fc70aee3f14c2cc",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "e17b15a9e633bb32d1b28d1d7f26d5c5",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/RunnerTests/RunnerTests.swift": "491b4028786d09d80b109a6d3d775ef6",
"main.dart.js": "fed12c35214a519d1d9b57b014677e6b",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"portfolio_website/analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"portfolio_website/android/app/build.gradle": "9a897c918c7ce59d144ed93676f12f28",
"portfolio_website/android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"portfolio_website/android/app/src/main/AndroidManifest.xml": "8eee728fb1a12972bee65bbbbbdd2dcf",
"portfolio_website/android/app/src/main/kotlin/com/example/portfolio_website/MainActivity.kt": "33d317f1844f2d09ae7e24f90269ac31",
"portfolio_website/android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"portfolio_website/android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"portfolio_website/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"portfolio_website/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"portfolio_website/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"portfolio_website/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"portfolio_website/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"portfolio_website/android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"portfolio_website/android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"portfolio_website/android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"portfolio_website/android/build.gradle": "ac55d554f6e295399b94a35dcf3ae81c",
"portfolio_website/android/gradle/wrapper/gradle-wrapper.properties": "faaad5d933fa8add22bd78f711c25218",
"portfolio_website/android/gradle.properties": "25ea75fb6eca6e1362de4085a52623c0",
"portfolio_website/android/settings.gradle": "682a4c750046ddfc37d6aa69e226a88b",
"portfolio_website/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"portfolio_website/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"portfolio_website/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"portfolio_website/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"portfolio_website/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"portfolio_website/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"portfolio_website/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"portfolio_website/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"portfolio_website/assets/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"portfolio_website/assets/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"portfolio_website/assets/icons/graphic.svg": "630269cfd18d3d8cf578673a89b377d7",
"portfolio_website/assets/icons/website.svg": "eb7f68d101ed55ef94b1a819515a4781",
"portfolio_website/assets/imgs/02.png": "d5ddf1eeff465df1b30217e39aab58f2",
"portfolio_website/assets/imgs/03.png": "8b04847afccdcfd07704e091e8afe683",
"portfolio_website/assets/imgs/04.png": "aed28d72aacb9988dc9332737c428d64",
"portfolio_website/assets/imgs/1.png": "ef3327197b8d2bbfbc9691a4daa119be",
"portfolio_website/assets/imgs/5424482.jpg": "b65eab647c8ea35da32d7e7d72452ee5",
"portfolio_website/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"portfolio_website/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"portfolio_website/assets/imgs/IMG_0107.png": "0a0008c8eda36503944abce53c099155",
"portfolio_website/devtools_options.yaml": "6685982673558e00b93c1e2ab627ba83",
"portfolio_website/ios/Flutter/AppFrameworkInfo.plist": "09ece6f06f706864eb9c343ad93b57c8",
"portfolio_website/ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"portfolio_website/ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"portfolio_website/ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"portfolio_website/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"portfolio_website/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"portfolio_website/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"portfolio_website/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"portfolio_website/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"portfolio_website/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"portfolio_website/ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"portfolio_website/ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"portfolio_website/ios/Runner/Info.plist": "1f42048e2629e6d77adf4388c4581b19",
"portfolio_website/ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"portfolio_website/ios/Runner.xcodeproj/project.pbxproj": "fe80ab844f76a7ecc7c4a48b658fcedd",
"portfolio_website/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"portfolio_website/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"portfolio_website/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"portfolio_website/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "1eb71d2100e7a36f63a33aa15dbfe6f1",
"portfolio_website/ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"portfolio_website/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"portfolio_website/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"portfolio_website/ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"portfolio_website/lib/app/sections/contact/contact.dart": "e2ac5462d5909c59ba201046a1cf1793",
"portfolio_website/lib/app/sections/contact/contact_desktop.dart": "f53122022499e9a8182e9b2897557d53",
"portfolio_website/lib/app/sections/contact/contact_mobile.dart": "03816393d3536157d57e248f61c7d151",
"portfolio_website/lib/app/sections/home/home.dart": "f0a2d7e166130f350d99eeb7ddb69e14",
"portfolio_website/lib/app/sections/home/home_desktop.dart": "de8bbdbf1320ef8e3b94608d9b6e3766",
"portfolio_website/lib/app/sections/home/home_mobile.dart": "3b9de9f554b09cc45fee63ede701bdb7",
"portfolio_website/lib/app/sections/home/home_tab.dart": "35323f16948b3b81f4b410553224f769",
"portfolio_website/lib/app/sections/home/widgets/animation_text.dart": "13ad592ec9c03afc5dfd2e2a500414c1",
"portfolio_website/lib/app/sections/main/main_section.dart": "b16a2283950687485c63dc084d964994",
"portfolio_website/lib/app/sections/main/widgets/_body.dart": "2b8b0358a7e05ba9ac0fe9a02598b1f8",
"portfolio_website/lib/app/sections/main/widgets/_mobile_drawer.dart": "7727174de38afc77291af6a6c7ec7baa",
"portfolio_website/lib/app/sections/main/widgets/_navbar_desktop.dart": "0d31f05daa4c8ebf92758a04e60755b4",
"portfolio_website/lib/app/sections/portfolio/portfolio.dart": "6c610c6d5cf96becc7e7e9c40c4382c0",
"portfolio_website/lib/app/sections/portfolio/portfolio_desktop.dart": "b17c5f034ad95a24c59722cb8d3613b0",
"portfolio_website/lib/app/sections/portfolio/portfolio_mobile.dart": "9386f1d04a28d00350fa061a771762b3",
"portfolio_website/lib/app/sections/portfolio/widgets/project_card.dart": "4f3fc290d89b64a5ca9d6bfe04b60bbf",
"portfolio_website/lib/app/sections/services/services.dart": "e21768a834048e5a8d85dee4b745b856",
"portfolio_website/lib/app/sections/services/services_desktop.dart": "45de01b13476f65e51e811c7165edb2b",
"portfolio_website/lib/app/sections/services/services_mobile.dart": "9b53e150db774fac633d4f9b595f8d23",
"portfolio_website/lib/app/sections/services/widgets/_services_card.dart": "246788142a622c0d65442fa74b23e943",
"portfolio_website/lib/app/utils/contact_utils.dart": "9c6ac0ca334a3e1018cd86a0233b98f0",
"portfolio_website/lib/app/utils/img.dart": "2f6a64bb01af4770a9222165658a8fcb",
"portfolio_website/lib/app/utils/navbar_utils.dart": "f076d8d1273a53743b42c87bf2d5abd7",
"portfolio_website/lib/app/utils/project_utils.dart": "14596c3910d367cdd5682eb27067d20c",
"portfolio_website/lib/app/utils/services_utils.dart": "510ad9b3164680aa95fa9190a9706a91",
"portfolio_website/lib/app/utils/utils.dart": "700a3013dece5cbc7e99915a75095161",
"portfolio_website/lib/app/widgets/arrow_on_top.dart": "bf9b304bfc1845b1ca01c6fbcecc0aa5",
"portfolio_website/lib/app/widgets/color_chage_btn.dart": "94bdb9161db207bdf709b4d4e8964bbb",
"portfolio_website/lib/app/widgets/custom_outline.dart": "89ef4b9c6badb85e3844a6efa26dd7d5",
"portfolio_website/lib/app/widgets/custom_text_heading.dart": "78d27e0d52c280c114070556d5c89c6e",
"portfolio_website/lib/app/widgets/footer.dart": "01bcfb652c6451aa10a880e56625d6b2",
"portfolio_website/lib/app/widgets/navbar_actions_button.dart": "6fd42d9286af32016d43a9e5a8011f08",
"portfolio_website/lib/app/widgets/navbar_logo.dart": "dc195948f93f0e815be46237a8e5d68b",
"portfolio_website/lib/changes/img.dart": "e89c0cfa37a701dd4a86b8dbde1f080b",
"portfolio_website/lib/changes/links.dart": "dc3af78e80722314b3c35c772da6c828",
"portfolio_website/lib/changes/strings.dart": "d3da8abce9455cf1c346e30e5ff99dcf",
"portfolio_website/lib/core/animations/entrance_fader.dart": "8c7dbe15ee5e5d7214bda43699457757",
"portfolio_website/lib/core/animations/zoom_animation.dart": "1e40834ee1db317b217a1c0a1d52555e",
"portfolio_website/lib/core/apis/links.dart": "96e6e8803af7ec804bed6c063d3d004f",
"portfolio_website/lib/core/color/colors.dart": "71651f22ff4881ce997242ff63701d37",
"portfolio_website/lib/core/configs/app.dart": "80ee8f728205c18016474eccae7a6875",
"portfolio_website/lib/core/configs/app_dimensions.dart": "48d1f34ecd4d776e5dd16915b27bebda",
"portfolio_website/lib/core/configs/configs.dart": "bc305231d930f5a49c1f04f50858eb64",
"portfolio_website/lib/core/configs/connection/bloc/connected_bloc.dart": "75bdcfc3778ef00bdd618d735d6ba82c",
"portfolio_website/lib/core/configs/connection/bloc/connected_event.dart": "e4c2969f056c42a06b40d6bca69b9d88",
"portfolio_website/lib/core/configs/connection/bloc/connected_state.dart": "bb5faa9bf3e7b42aa5e14aa341cb6684",
"portfolio_website/lib/core/configs/connection/network_check.dart": "1032f2969d762de0f72c210d39771153",
"portfolio_website/lib/core/configs/others/app_typography.dart": "f0e910fdd03ddb46ae85c72428055333",
"portfolio_website/lib/core/configs/others/app_typography_ext.dart": "d0784a7206a06622c07433b2c062a952",
"portfolio_website/lib/core/configs/others/date_ext.dart": "1d5702880d9b1d4a886da2cf0a7344e4",
"portfolio_website/lib/core/configs/others/space.dart": "b00b4d98ce679f9b7c0e6c2507a96daf",
"portfolio_website/lib/core/configs/others/space_ext.dart": "847ed05f0b26f8216aa519731117de12",
"portfolio_website/lib/core/configs/others/ui_props.dart": "b57d3117ee6c48edcd04f8574ae880d7",
"portfolio_website/lib/core/configs/ui.dart": "faceebe2206151616d8ef5066a04e8dc",
"portfolio_website/lib/core/providers/drawer_provider.dart": "a80f05a4356b88531b3d8ef6afdfaa9b",
"portfolio_website/lib/core/providers/scroll_provider.dart": "5daeb6aec38bfc22017c60e86bc993e8",
"portfolio_website/lib/core/res/responsive.dart": "0658eae4e8d6e75600a5fc9c05b34fc2",
"portfolio_website/lib/core/res/responsive_size.dart": "de5b27a5bf41c7f9d63d7a9001b88ac4",
"portfolio_website/lib/core/theme/app_theme.dart": "e8f2ca2035ef7323d9c3b8262378a6f5",
"portfolio_website/lib/core/theme/cubit/theme_cubit.dart": "c9138b39359f60337f1cd75ca0f985c5",
"portfolio_website/lib/core/theme/cubit/theme_state.dart": "6f3b8f436f02ba6a2465119227a140ce",
"portfolio_website/lib/core/util/constants.dart": "f1834a408e025fd9039a84df5155222c",
"portfolio_website/lib/main.dart": "8d71d1440a1c7fba10e1d0d4152c5053",
"portfolio_website/lib/my_site.dart": "2a01dfd876288e5a927e41c23b06f3ab",
"portfolio_website/linux/CMakeLists.txt": "526d2eaf54aff4a79878b39bb9bba991",
"portfolio_website/linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"portfolio_website/linux/flutter/generated_plugins.cmake": "33d9640f2839ba193a4c2bb512c034ae",
"portfolio_website/linux/flutter/generated_plugin_registrant.cc": "d4615e983185e91a48de32da2c94740c",
"portfolio_website/linux/flutter/generated_plugin_registrant.h": "0208db974972d7b29a0ac368be83644b",
"portfolio_website/linux/main.cc": "539395bcd63dba20afed0838d136189f",
"portfolio_website/linux/my_application.cc": "c823b8cfc073dddb2d3e436788221cd9",
"portfolio_website/linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"portfolio_website/macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"portfolio_website/macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"portfolio_website/macos/Flutter/GeneratedPluginRegistrant.swift": "6043c94403ed189d9e827b6660c1d339",
"portfolio_website/macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"portfolio_website/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"portfolio_website/macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"portfolio_website/macos/Runner/Configs/AppInfo.xcconfig": "6237c17afc1d1fa58fb696f19532a34e",
"portfolio_website/macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"portfolio_website/macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"portfolio_website/macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"portfolio_website/macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"portfolio_website/macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"portfolio_website/macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"portfolio_website/macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"portfolio_website/macos/Runner.xcodeproj/project.pbxproj": "6ad71293eef5126d2fc70aee3f14c2cc",
"portfolio_website/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"portfolio_website/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "e17b15a9e633bb32d1b28d1d7f26d5c5",
"portfolio_website/macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"portfolio_website/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"portfolio_website/macos/RunnerTests/RunnerTests.swift": "491b4028786d09d80b109a6d3d775ef6",
"portfolio_website/pubspec.lock": "e2fbb7d2b6576f33be4f9466507fcd21",
"portfolio_website/pubspec.yaml": "7e4602c361eaea13df3a67682d9fbc27",
"portfolio_website/README.md": "3fd8c02274d611470e3dd93b449f6361",
"portfolio_website/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"portfolio_website/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"portfolio_website/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"portfolio_website/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"portfolio_website/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"portfolio_website/web/index.html": "f666f0c89e837936fca46c253d74ebad",
"portfolio_website/web/manifest.json": "9583ebe54188295a4768ae1aa040030b",
"portfolio_website/windows/CMakeLists.txt": "51f0b5d81ddb29ac643455286e9aa643",
"portfolio_website/windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"portfolio_website/windows/flutter/generated_plugins.cmake": "3ebe382a71e670e7e8725f6eb1188ddb",
"portfolio_website/windows/flutter/generated_plugin_registrant.cc": "8484221527ef100c6be2b17ef0e4efcb",
"portfolio_website/windows/flutter/generated_plugin_registrant.h": "0c3df6700414e7f332dfa2582a1ae29e",
"portfolio_website/windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"portfolio_website/windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"portfolio_website/windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"portfolio_website/windows/runner/main.cpp": "0dc91117baa1e89810102d40054dec1d",
"portfolio_website/windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"portfolio_website/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"portfolio_website/windows/runner/runner.exe.manifest": "cd3aafe81b2f278dffaf305373ee30b4",
"portfolio_website/windows/runner/Runner.rc": "3201169ceeedfbdffe59bd9b8945a654",
"portfolio_website/windows/runner/utils.cpp": "3d7ba99ef466af433ffd4ef72b7c5c35",
"portfolio_website/windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"portfolio_website/windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"portfolio_website/windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda",
"pubspec.lock": "e2fbb7d2b6576f33be4f9466507fcd21",
"pubspec.yaml": "7e4602c361eaea13df3a67682d9fbc27",
"README.md": "2052c6f74f55fbe078737312a4d6353a",
"version.json": "cc1fa9cce5af273c0909d105387fee89",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "f666f0c89e837936fca46c253d74ebad",
"web/manifest.json": "9583ebe54188295a4768ae1aa040030b",
"windows/CMakeLists.txt": "51f0b5d81ddb29ac643455286e9aa643",
"windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"windows/flutter/generated_plugins.cmake": "3ebe382a71e670e7e8725f6eb1188ddb",
"windows/flutter/generated_plugin_registrant.cc": "8484221527ef100c6be2b17ef0e4efcb",
"windows/flutter/generated_plugin_registrant.h": "0c3df6700414e7f332dfa2582a1ae29e",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "0dc91117baa1e89810102d40054dec1d",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "cd3aafe81b2f278dffaf305373ee30b4",
"windows/runner/Runner.rc": "3201169ceeedfbdffe59bd9b8945a654",
"windows/runner/utils.cpp": "3d7ba99ef466af433ffd4ef72b7c5c35",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
