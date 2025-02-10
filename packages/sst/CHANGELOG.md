# @serverless-stack/cli2

## 2.47.1

### Patch Changes

- [#34](https://github.com/sst/v2/pull/34) [`56990e5ead8df6099f5f80a89ae9c77f00bc2306`](https://github.com/sst/v2/commit/56990e5ead8df6099f5f80a89ae9c77f00bc2306) Thanks [@leanderiversen](https://github.com/leanderiversen)! - Pin adm-zip at 0.5.14

## 2.47.0

### Minor Changes

- [`891c49bb0f2b1b5af3a5a6c7050d740b6a37dda1`](https://github.com/sst/v2/commit/891c49bb0f2b1b5af3a5a6c7050d740b6a37dda1) Thanks [@fwang](https://github.com/fwang)! - Update default runtime to Nodejs22.x

## 2.46.0

### Minor Changes

- [#26](https://github.com/sst/v2/pull/26) [`58943da796ba1237dc2779ccf1aaafcc5e651063`](https://github.com/sst/v2/commit/58943da796ba1237dc2779ccf1aaafcc5e651063) Thanks [@dignat](https://github.com/dignat)! - Update default Function runtime to Node.js 20

## 2.45.2

### Patch Changes

- [#23](https://github.com/sst/v2/pull/23) [`eb668c5485a368bc2e69cd5f7e13157df904c4c2`](https://github.com/sst/v2/commit/eb668c5485a368bc2e69cd5f7e13157df904c4c2) Thanks [@hoangnd25](https://github.com/hoangnd25)! - Service: allow default rules to be disabled

## 2.45.1

### Patch Changes

- [#2](https://github.com/sst/v2/pull/2) [`87636f9008b9cfef2f72f9d4bd92ea423b788120`](https://github.com/sst/v2/commit/87636f9008b9cfef2f72f9d4bd92ea423b788120) Thanks [@sommeeeer](https://github.com/sommeeeer)! - NextjsSite: update OpenNext version

- [#12](https://github.com/sst/v2/pull/12) [`f0a1ab947617dd3a270400d7b2a8ed05f6d65007`](https://github.com/sst/v2/commit/f0a1ab947617dd3a270400d7b2a8ed05f6d65007) Thanks [@wakeless](https://github.com/wakeless)! - cli: Implements a RegExp for the deploy matcher.

## 2.45.0

### Minor Changes

- [`e24e8847c43101870087d7362f35a5bb5c3bbe00`](https://github.com/sst/v2/commit/e24e8847c43101870087d7362f35a5bb5c3bbe00) Thanks [@fwang](https://github.com/fwang)! - Version bump for CDK update

### Patch Changes

- [#15](https://github.com/sst/v2/pull/15) [`03c73f610525072aa809c6ac22539c53ac4a8d65`](https://github.com/sst/v2/commit/03c73f610525072aa809c6ac22539c53ac4a8d65) Thanks [@jared-fraser](https://github.com/jared-fraser)! - Update CDK to 2.171.1

## 2.44.3

### Patch Changes

- [#14](https://github.com/sst/v2/pull/14) [`633805a`](https://github.com/sst/v2/commit/633805a33c4aae570c58d38d8e0448b04cc44934) Thanks [@neo](https://github.com/neo)! - Omit `ephemeralStorageSize` from `FunctionProps` in favor of `diskSize

## 2.44.2

### Patch Changes

- [#11](https://github.com/sst/v2/pull/11) [`ec59a15`](https://github.com/sst/v2/commit/ec59a15c05acc008e36c3be8ec3b76aada3be49c) Thanks [@ryanwalters](https://github.com/ryanwalters)! - feat(Job): increase max timeout to 36 hours

## 2.44.1

### Patch Changes

- [`90b69ca`](https://github.com/sst/v2/commit/90b69cae5a8a1e548516c60bb83feeb5e52cef30) Thanks [@fwang](https://github.com/fwang)! - Add xray tracer header to event bus publish

## 2.44.0

### Minor Changes

- [`674d20f52`](https://github.com/sst/sst/commit/674d20f52e371b83bcc41afcb02f6a20b0f75b40) Thanks [@fwang](https://github.com/fwang)! - Update CDK to 2.161.1

## 2.43.8

### Patch Changes

- [#3859](https://github.com/sst/sst/pull/3859) [`8aecc9307`](https://github.com/sst/sst/commit/8aecc930758a7e656e79083638fdc968b12ae4ef) Thanks [@kopertop](https://github.com/kopertop)! - Function: use --omit=optional to skip installing optional deps

- [#3864](https://github.com/sst/sst/pull/3864) [`2ef7ddec0`](https://github.com/sst/sst/commit/2ef7ddec0bcd8b4e0a8d51a68764c66462630b55) Thanks [@JQuezada0](https://github.com/JQuezada0)! - Fix warming + streaming enabled at the same time causing user handler to lose lambda context

- [#3866](https://github.com/sst/sst/pull/3866) [`882225940`](https://github.com/sst/sst/commit/8822259406bb48e2bbc02655b58b01b3040ab75d) Thanks [@chronotc](https://github.com/chronotc)! - SvelteKitSite: add basePath support

## 2.43.7

### Patch Changes

- [#3816](https://github.com/sst/sst/pull/3816) [`7de5b1bcc`](https://github.com/sst/sst/commit/7de5b1bcc454afe9a36343cfba291ad6b3e038b5) Thanks [@arkadiuszbartnik](https://github.com/arkadiuszbartnik)! - Bootstrap: cdk bootstrap s3 bucket objects with extra tags

## 2.43.6

### Patch Changes

- [`a68ca8416`](https://github.com/sst/sst/commit/a68ca84160bc87460e4fb09a4893640ad11daebf) Thanks [@thdxr](https://github.com/thdxr)! - switch to v2 tag

## 2.43.5

### Patch Changes

- [#3829](https://github.com/sst/sst/pull/3829) [`9c52c86c4`](https://github.com/sst/sst/commit/9c52c86c4daf4321360002327a6773b039c11e22) Thanks [@scarperharper](https://github.com/scarperharper)! - SsrSite: fix query params with no values should be strings

- [#3803](https://github.com/sst/sst/pull/3803) [`1c542ab86`](https://github.com/sst/sst/commit/1c542ab86ca67d5ce8402f4a884473c76f015b2f) Thanks [@JacksonBowe](https://github.com/JacksonBowe)! - fix: fix dockerfile build commands for python 3.12

- [#3815](https://github.com/sst/sst/pull/3815) [`b4119671b`](https://github.com/sst/sst/commit/b4119671bb1e99dc22917ef88f493d5855cb58e1) Thanks [@mattzcarey](https://github.com/mattzcarey)! - SSTBootstrap: Add description to bootstrap stack

- [#3799](https://github.com/sst/sst/pull/3799) [`baa633cd6`](https://github.com/sst/sst/commit/baa633cd687e0e87f3a5ba86070c785d70b8510e) Thanks [@blair55](https://github.com/blair55)! - enhancement: make magic link expiry configurable

- [#3779](https://github.com/sst/sst/pull/3779) [`04717fb1c`](https://github.com/sst/sst/commit/04717fb1ca51d272811bfc8a8a30f8271528f3d8) Thanks [@omikader](https://github.com/omikader)! - misc(rds): expose migration methods

- [#3794](https://github.com/sst/sst/pull/3794) [`436f2aa39`](https://github.com/sst/sst/commit/436f2aa393a056f4249e78829ac3ce45dd4330da) Thanks [@gronxb](https://github.com/gronxb)! - fix: support npm versions 10 and above

## 2.43.4

### Patch Changes

- [`d39eb43a4`](https://github.com/sst/sst/commit/d39eb43a4d3dc3791bc2439ce6d9bb0ce4efbd0d) Thanks [@fwang](https://github.com/fwang)! - Service: support reusing cache policy

## 2.43.3

### Patch Changes

- [#3782](https://github.com/sst/sst/pull/3782) [`be041741c`](https://github.com/sst/sst/commit/be041741cfffbd71145a14c35a5bb230f392596a) Thanks [@henrycrib](https://github.com/henrycrib)! - Function: update rust runtime to PROVIDED_AL2023

- [#3785](https://github.com/sst/sst/pull/3785) [`da3770f9b`](https://github.com/sst/sst/commit/da3770f9baffdf994766d5e0075f830626ff08f1) Thanks [@relsunkaev](https://github.com/relsunkaev)! - NextjsSite: respect runtime and memorySize configs

## 2.43.2

### Patch Changes

- [#3776](https://github.com/sst/sst/pull/3776) [`75fde55fa`](https://github.com/sst/sst/commit/75fde55fa81a4a2601f740a8812478d22fd0aca2) Thanks [@srodriki](https://github.com/srodriki)! - SST Node: Remove dependency between future/auth and old auth

- [`4d74e9717`](https://github.com/sst/sst/commit/4d74e9717ffce0391f6a6f08a777e9be93bc4e75) Thanks [@thdxr](https://github.com/thdxr)! - force install deps

- [#3788](https://github.com/sst/sst/pull/3788) [`e88de771d`](https://github.com/sst/sst/commit/e88de771d45ac4cf4cedde12a78b688c8de3a319) Thanks [@omikader](https://github.com/omikader)! - chore(auth): expose session.verify in non-future auth

## 2.43.1

### Patch Changes

- [#3780](https://github.com/sst/sst/pull/3780) [`64d42db1a`](https://github.com/sst/sst/commit/64d42db1a209c11befcdd40cc0abebb8db4161a2) Thanks [@vidalmatheus](https://github.com/vidalmatheus)! - fix: google and apple adapter

- [#3790](https://github.com/sst/sst/pull/3790) [`a53a8d18f`](https://github.com/sst/sst/commit/a53a8d18fe34ba04407e5d0b843e3352e0948c93) Thanks [@dan-turner](https://github.com/dan-turner)! - fix: wrap output in single quotes to allow for multi-line secrets

- [#3778](https://github.com/sst/sst/pull/3778) [`1ed9b3927`](https://github.com/sst/sst/commit/1ed9b3927d9741d26597ce9764ce653f7d30d7db) Thanks [@blair55](https://github.com/blair55)! - Add missing dotnet8 bootstrap support copy command

## 2.43.0

### Minor Changes

- [#3567](https://github.com/sst/sst/pull/3567) [`96b99e08f`](https://github.com/sst/sst/commit/96b99e08f3cfbbbdf9f25f920be73e368b0599d0) Thanks [@conico974](https://github.com/conico974)! - NextjsSite: update to OpenNext v3

## 2.42.0

### Minor Changes

- [#3764](https://github.com/sst/sst/pull/3764) [`3c62d50b7`](https://github.com/sst/sst/commit/3c62d50b79daa22d1fd1d4c4e160d506f18d3c0f) Thanks [@berenddeboer](https://github.com/berenddeboer)! - chore: update aws-cdk-lib to 2.142.1 from 2.132.1.

### Patch Changes

- [#3722](https://github.com/sst/sst/pull/3722) [`6f8fb48f2`](https://github.com/sst/sst/commit/6f8fb48f2b6dd195a732114abf33bd4e9f68439f) Thanks [@adrianisk](https://github.com/adrianisk)! - Fix cacheTo Function/container prop

- [#3729](https://github.com/sst/sst/pull/3729) [`7026c46db`](https://github.com/sst/sst/commit/7026c46dbbedcc3f2936db4002644a56704ef47c) Thanks [@jamesgibbons92](https://github.com/jamesgibbons92)! - [Function]: Update go runtime

- [#3759](https://github.com/sst/sst/pull/3759) [`b51f1fb75`](https://github.com/sst/sst/commit/b51f1fb75901353537d5e34cd8a3b3f99c08ba04) Thanks [@adminCitify](https://github.com/adminCitify)! - RDS: support postgresql13.12

- [#3762](https://github.com/sst/sst/pull/3762) [`17069475e`](https://github.com/sst/sst/commit/17069475e073eb117327a27a6712e164d5fe64c2) Thanks [@lostra01](https://github.com/lostra01)! - Proxy issuer calls to avoid timeouts on unused auth adapters

## 2.41.5

### Patch Changes

- [#3727](https://github.com/sst/sst/pull/3727) [`0acf9c68e`](https://github.com/sst/sst/commit/0acf9c68e9731755105899e20cad1fba1b118d3c) Thanks [@neilsaccardo](https://github.com/neilsaccardo)! - NextjsSite: update OpenNext version to 2.3.8

- [#3734](https://github.com/sst/sst/pull/3734) [`b2ecaeb23`](https://github.com/sst/sst/commit/b2ecaeb239f112c4493c3d03d15ca883c460f576) Thanks [@blair55](https://github.com/blair55)! - Function: add support for dotnet 8 runtime

- [#3745](https://github.com/sst/sst/pull/3745) [`3835298d2`](https://github.com/sst/sst/commit/3835298d24a0d5c00228ee6a3130e4b4c417e40d) Thanks [@gtdudu](https://github.com/gtdudu)! - RDS: support postgresql engines 14.10, 15.4 and 16.1

- [#3741](https://github.com/sst/sst/pull/3741) [`e3e15286c`](https://github.com/sst/sst/commit/e3e15286ca938f6812586d289bc534b62ec669bc) Thanks [@chrisdlangham](https://github.com/chrisdlangham)! - Function: logs errors to stdout for dotnet8

- [#3735](https://github.com/sst/sst/pull/3735) [`10c339b91`](https://github.com/sst/sst/commit/10c339b9113bf5561bc8bed540725230696f2387) Thanks [@ZacharySpilinek](https://github.com/ZacharySpilinek)! - NextjsSite: allow overriding error responses

## 2.41.4

### Patch Changes

- [#3720](https://github.com/sst/sst/pull/3720) [`e3c96d89d`](https://github.com/sst/sst/commit/e3c96d89d0fe689cbc6dfee4cb4e4319e7338e67) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Astro: fixes 404s caused by dead in route branches in CF routing

## 2.41.3

### Patch Changes

- [#3713](https://github.com/sst/sst/pull/3713) [`e950c6028`](https://github.com/sst/sst/commit/e950c60288e7cb9ae40d813f46e38227f777129d) Thanks [@sommeeeer](https://github.com/sommeeeer)! - NextjsSite: include x-prerender-revalidate in allowed headers

## 2.41.2

### Patch Changes

- [`0ddcd3210`](https://github.com/sst/sst/commit/0ddcd3210900dd96f531676069d0f72e874c0d80) Thanks [@fwang](https://github.com/fwang)! - Service: support customizing ALB listener

## 2.41.1

### Patch Changes

- [#3709](https://github.com/sst/sst/pull/3709) [`8e80d6179`](https://github.com/sst/sst/commit/8e80d61793b300a7c4a0ab1483d5d1b3afee2334) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Astro: fixes infinite loop during deployment caused by Astro plugins

## 2.41.0

### Minor Changes

- [`f2bf1285d`](https://github.com/sst/sst/commit/f2bf1285d2bc1b13ef909363a8dc18ca54ab4c43) Thanks [@fwang](https://github.com/fwang)! - Update CDK to v1.132.1

## 2.40.8

### Patch Changes

- [#3700](https://github.com/sst/sst/pull/3700) [`df8866bad`](https://github.com/sst/sst/commit/df8866bad57d9f243a066b929125abf99aabbc9d) Thanks [@sommeeeer](https://github.com/sommeeeer)! - NextjsSite: update to OpenNext 2.3.7

- [#3692](https://github.com/sst/sst/pull/3692) [`533caaeaa`](https://github.com/sst/sst/commit/533caaeaaa2b1def8e312efe0fa9a7734076d43a) Thanks [@zxan1285](https://github.com/zxan1285)! - Service: support using existing ECS Cluster

## 2.40.7

### Patch Changes

- [`0eb2d3f2e`](https://github.com/sst/sst/commit/0eb2d3f2e0127793cc1ccb64855c871e17bd7b46) Thanks [@fwang](https://github.com/fwang)! - secret prefetcher: accommodate for IAM policy delay

- [`12b4c0ff9`](https://github.com/sst/sst/commit/12b4c0ff9ab23132ac58d0942fb2def753c9df7d) Thanks [@fwang](https://github.com/fwang)! - Handle custom resource response 4kb limit

- [#3674](https://github.com/sst/sst/pull/3674) [`602ddbfb5`](https://github.com/sst/sst/commit/602ddbfb58cbb19ded03f9c2b252821a5baf2cc3) Thanks [@mikeyaa](https://github.com/mikeyaa)! - Function: don't overwrite description, but add Live Lambda label

## 2.40.6

### Patch Changes

- [`887e9a3da`](https://github.com/sst/sst/commit/887e9a3daf93afbf39cb816810381cb55697b919) Thanks [@fwang](https://github.com/fwang)! - cli: fix tags not set for CloudFormation stacks

## 2.40.5

### Patch Changes

- [#3543](https://github.com/sst/sst/pull/3543) [`8ac2bd8d7`](https://github.com/sst/sst/commit/8ac2bd8d70851b532d2b0633a44cb1e1b68bf007) Thanks [@JanStevens](https://github.com/JanStevens)! - NextjsSite: Next.js page router bypass the cloudfront cache for preview mode

- [#3650](https://github.com/sst/sst/pull/3650) [`ccd41f02c`](https://github.com/sst/sst/commit/ccd41f02c0bdd0db0fd56366bf4f256ae0e10faa) Thanks [@SpencerDuball](https://github.com/SpencerDuball)! - RemixSite: support vite project

- [#3613](https://github.com/sst/sst/pull/3613) [`ab7f8471a`](https://github.com/sst/sst/commit/ab7f8471a67b8270f2b9059a9084055e33d93643) Thanks [@jplwood](https://github.com/jplwood)! - NextjsSite: support basepath

- [`1fbda7870`](https://github.com/sst/sst/commit/1fbda78706ab98cf83f7ccfe8fc25b04b724b00e) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: update OpenNext to 2.3.5

## 2.40.4

### Patch Changes

- [#3659](https://github.com/sst/sst/pull/3659) [`e2a019d80`](https://github.com/sst/sst/commit/e2a019d8035bd47ed6ee34731700dbb1b52c9c5c) Thanks [@ZakkProjects](https://github.com/ZakkProjects)! - Runtime: Fix rust local-lambda build step on windows #

- [`f818a1a31`](https://github.com/sst/sst/commit/f818a1a31c2b9613869fa0cb292540eec6f1c126) Thanks [@fwang](https://github.com/fwang)! - Resource binding customize permissions

## 2.40.3

### Patch Changes

- [`e9847fb13`](https://github.com/sst/sst/commit/e9847fb1399ea7e1af0a2bd4130339deabf49a8a) Thanks [@fwang](https://github.com/fwang)! - Cli: fix deploy status event not shown

## 2.40.2

## 2.40.1

## 2.40.0

### Minor Changes

- [#3644](https://github.com/sst/sst/pull/3644) [`1ca805d26`](https://github.com/sst/sst/commit/1ca805d2673f25dd8790422ac1154fb3da26c91c) Thanks [@fwang](https://github.com/fwang)! - Update CDK to v2.124.0

### Patch Changes

- [#3586](https://github.com/sst/sst/pull/3586) [`729e5fe15`](https://github.com/sst/sst/commit/729e5fe158a01ce38da2ebbf92c214b05242367a) Thanks [@BLucky-gh](https://github.com/BLucky-gh)! - Function: Add cache options for python bundling

## 2.39.13

### Patch Changes

- [`b4a826ae3`](https://github.com/sst/sst/commit/b4a826ae312bed164365c561cfbfa221092373a2) Thanks [@fwang](https://github.com/fwang)! - SsrSite: handle s3 upload rate limit error

## 2.39.12

### Patch Changes

- [`ecba06be8`](https://github.com/sst/sst/commit/ecba06be80e99a8b064cf65718b6a188537e640e) Thanks [@fwang](https://github.com/fwang)! - Function: fix build hook run after CDK creates artifacts folder for container runtime

## 2.39.11

### Patch Changes

- [`4f2302921`](https://github.com/sst/sst/commit/4f23029218869fc25a7ec9c49cfe44349c07ced7) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: support per-route logging for Route Handlers

## 2.39.10

### Patch Changes

- [#3630](https://github.com/sst/sst/pull/3630) [`953a1ac70`](https://github.com/sst/sst/commit/953a1ac7026d242c04b7ef3220236a2119ae0599) Thanks [@mathisobadia](https://github.com/mathisobadia)! - Job: Allow setting nodejs version of container image

- [`c8ac970af`](https://github.com/sst/sst/commit/c8ac970af8634f0304af87066a622396dd04a3cb) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: bump version to trigger CDK custom resource runtime update

- [#3516](https://github.com/sst/sst/pull/3516) [`0d9cf1172`](https://github.com/sst/sst/commit/0d9cf1172638b3f92634982bac4155a04d5995de) Thanks [@morficus](https://github.com/morficus)! - NextjsSite: new option to specify custom build output path

## 2.39.9

### Patch Changes

- [`83d013b35`](https://github.com/sst/sst/commit/83d013b354ac9bf40031642b09c9ae0e18e007e2) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix warming when streaming is enabled

## 2.39.8

### Patch Changes

- [`b29ce15fa`](https://github.com/sst/sst/commit/b29ce15fa94305cc50e4a40b95476cf8bd316bca) Thanks [@fwang](https://github.com/fwang)! - SsrSite: support customization via "cdk.transform" prop

## 2.39.7

### Patch Changes

- [`cfb9f5814`](https://github.com/sst/sst/commit/cfb9f5814c828c26339ca0bb68f3f896e2375ff6) Thanks [@fwang](https://github.com/fwang)! - Revert adding @smithy/util-endpoints

## 2.39.6

### Patch Changes

- [`ff3abe365`](https://github.com/sst/sst/commit/ff3abe36516b0e110978390178fe9c17fbac294e) Thanks [@thdxr](https://github.com/thdxr)! - fix: removed broken ion code

## 2.39.5

### Patch Changes

- [`daec2ff64`](https://github.com/sst/sst/commit/daec2ff64b275475302e52c236f9073f27f10c94) Thanks [@fwang](https://github.com/fwang)! - Revert adding @smithy/util-endpoints

## 2.39.4

### Patch Changes

- [`d47ea4e18`](https://github.com/sst/sst/commit/d47ea4e188abcb6b91ec91c189d320376fd8c40b) Thanks [@thdxr](https://github.com/thdxr)! - ion: resource linking

## 2.39.3

### Patch Changes

- [`4bf0d9ceb`](https://github.com/sst/sst/commit/4bf0d9cebacc2561ff8cd5a25adda2795375b233) Thanks [@fwang](https://github.com/fwang)! - Function: experimental support for prefetching secrets

- [#3602](https://github.com/sst/sst/pull/3602) [`d45f36cd3`](https://github.com/sst/sst/commit/d45f36cd31898799f9ceb8797b8bcbb31e68af89) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Astro: fix greedy routes bug

- [#3584](https://github.com/sst/sst/pull/3584) [`5201a37f0`](https://github.com/sst/sst/commit/5201a37f0e1f512920e56dfe1043855dd1a763b9) Thanks [@auvred](https://github.com/auvred)! - Properly calculate content-length for cfn custom resource responses

- [`e099dcc7e`](https://github.com/sst/sst/commit/e099dcc7e1be22add7b49fd805c4ccbc92dd6d7c) Thanks [@thdxr](https://github.com/thdxr)! - workaround breaking change in aws-sdk v3

## 2.39.2

### Patch Changes

- [`9f709ed0c`](https://github.com/sst/sst/commit/9f709ed0c8f0e093f498bb5e2fa85f0f76596509) Thanks [@thdxr](https://github.com/thdxr)! - event: fix expect error

## 2.39.1

### Patch Changes

- [`49ef014f3`](https://github.com/sst/sst/commit/49ef014f325cc0969fad3b2c717e64da6cf885dc) Thanks [@thdxr](https://github.com/thdxr)! - event: type error fix

## 2.39.0

### Minor Changes

- [`af704d761`](https://github.com/sst/sst/commit/af704d761cef39e0327064d16e46ac60f9741c7b) Thanks [@thdxr](https://github.com/thdxr)! - There is a slight breaking change in this release if you are using SST Events with `createEventBuilder()` - you should receive type errors for all the issues. We now support specifying any validation library so will need to configure that.

  To continue using Zod you can specify the validator like so

  ```
  import { createEventBuilder, ZodValidator } from "sst/node/event-bus"
  const event = createEventBuilder({
    bus: "MyBus",
    validator: ZodValidator
  })
  ```

  Additionally we no longer assume you are passing in a zod object as the schema.
  You'll have to update code from:

  ```
  const MyEvent = event("my.event", {
    foo: z.string(),
  })
  ```

  to this:

  ```
  const MyEvent = event("my.event", z.object({
    foo: z.string(),
  }))
  ```

  This also allows you to specify non-objects as the event properties. Additionally, if you were using advanced inference the `shape` field has been replaced with `typeof MyEvent.$input`, `typeof MyEvent.$output`, and `typeof MyEvent.$metadata`

### Patch Changes

- [`ceed328d5`](https://github.com/sst/sst/commit/ceed328d57721bdb214c6293b592c4aaabb649a2) Thanks [@fwang](https://github.com/fwang)! - Job: expose codebuild project via cdk

- [#3590](https://github.com/sst/sst/pull/3590) [`7e859e629`](https://github.com/sst/sst/commit/7e859e629209857c74a9a1c2a3f7fa8ab6853dd8) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - EdgeFunction: fixes copyFile prop to actually copy files to deployed handler function.

- [#3545](https://github.com/sst/sst/pull/3545) [`366ffedaa`](https://github.com/sst/sst/commit/366ffedaaa06aab93a032274a34bc87a24ce94c9) Thanks [@coronapl](https://github.com/coronapl)! - IoT: Fix connection closed after 5 minutes

- [#3588](https://github.com/sst/sst/pull/3588) [`b82790482`](https://github.com/sst/sst/commit/b827904824948669ae49d6b1e159e48b6c43b8b8) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - SsrSite: fixes function bundler to match deployment target on bundled dependencies.

## 2.38.7

### Patch Changes

- [`69b41b9f7`](https://github.com/sst/sst/commit/69b41b9f7e1ffdda5fa31b4d762b8825b30f2a35) Thanks [@thdxr](https://github.com/thdxr)! - internal: add back old context implementation

## 2.38.6

### Patch Changes

- [#3554](https://github.com/sst/sst/pull/3554) [`7d2f92b0d`](https://github.com/sst/sst/commit/7d2f92b0d77f14041ddc0ecc85db81c4bdfb1e4e) Thanks [@justindra](https://github.com/justindra)! - Calling init project does not replace stage if it was called previously

- [#3566](https://github.com/sst/sst/pull/3566) [`491ffbfb6`](https://github.com/sst/sst/commit/491ffbfb64f0d55a1573ac535b636f8b176df1e1) Thanks [@oyed](https://github.com/oyed)! - fix: cjs being thrown in to provider

## 2.38.5

### Patch Changes

- [`36bf1b86d`](https://github.com/sst/sst/commit/36bf1b86d285fe742579a7c9bad3179e5b5df1e1) Thanks [@fwang](https://github.com/fwang)! - Function: use descriptive copy for description and handler name

- [#3574](https://github.com/sst/sst/pull/3574) [`bc30b03af`](https://github.com/sst/sst/commit/bc30b03aff7fdc40b615b1cc422cede28b5100f8) Thanks [@dylanirion](https://github.com/dylanirion)! - Container: fix docker host not resolved in wsl environment

- [`b8a22b459`](https://github.com/sst/sst/commit/b8a22b459117c9210a04ee5467a9d977305a302c) Thanks [@fwang](https://github.com/fwang)! - sst dev: detect regions without AWS IoT support

- [`fc4871967`](https://github.com/sst/sst/commit/fc4871967bb5ee608500e728077b55b3e141338e) Thanks [@fwang](https://github.com/fwang)! - Function: support dot in handler filename

## 2.38.4

### Patch Changes

- [#3575](https://github.com/sst/sst/pull/3575) [`5bbfb70c9`](https://github.com/sst/sst/commit/5bbfb70c9df6bd9f912bc05997d9cf7fc93cc1ec) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - SsrSite: pin bundled sharp version until deployment issues resolved

- [#3572](https://github.com/sst/sst/pull/3572) [`86df9a351`](https://github.com/sst/sst/commit/86df9a3516c612737225237b63c9fda40ba429aa) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: optimize CF function

- [#3572](https://github.com/sst/sst/pull/3572) [`86df9a351`](https://github.com/sst/sst/commit/86df9a3516c612737225237b63c9fda40ba429aa) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - SsrSite: minify CF functions

## 2.38.3

### Patch Changes

- [`50fff51f5`](https://github.com/sst/sst/commit/50fff51f5095ce78969c85059bebf091fe7860c7) Thanks [@thdxr](https://github.com/thdxr)! - AstroSite: fix duplicate cf function

## 2.38.2

### Patch Changes

- [`e2457c9b7`](https://github.com/sst/sst/commit/e2457c9b79d67d18d4faf504d0402a63dd95b016) Thanks [@thdxr](https://github.com/thdxr)! - AstroSite: create host only cf function for server routes

## 2.38.1

### Patch Changes

- [`12baa36d5`](https://github.com/sst/sst/commit/12baa36d5d233c62726fcc7a1b88d2e7b7585203) Thanks [@thdxr](https://github.com/thdxr)! - AstroSite: include cf function for server routes

## 2.38.0

### Minor Changes

- [`428810411`](https://github.com/sst/sst/commit/428810411332775d64a051d6a65ddae8fd54c258) Thanks [@fwang](https://github.com/fwang)! - Service: require port to be set

## 2.37.2

## 2.37.1

### Patch Changes

- [#3493](https://github.com/sst/sst/pull/3493) [`d5d31fdda`](https://github.com/sst/sst/commit/d5d31fddae14a2948a9b8da4b9894044eeaa6b78) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: add sharp image processing

- [#3542](https://github.com/sst/sst/pull/3542) [`bafb2a05c`](https://github.com/sst/sst/commit/bafb2a05cf1734437b32aa0713fc7edd4fc24f10) Thanks [@omikader](https://github.com/omikader)! - Service: support configuration of ephemeral storage

- [#3556](https://github.com/sst/sst/pull/3556) [`4b795b815`](https://github.com/sst/sst/commit/4b795b8156f722a57c7dc81e3522e13dd1d9de78) Thanks [@TheUncharted](https://github.com/TheUncharted)! - Add Apple adapter to index file

- [`ce2944150`](https://github.com/sst/sst/commit/ce2944150ee2c920646c8ca1f5edbe13ad449b21) Thanks [@fwang](https://github.com/fwang)! - Sites: check missing domainName in customDomain

## 2.37.0

### Minor Changes

- [#3539](https://github.com/sst/sst/pull/3539) [`4533f9f11`](https://github.com/sst/sst/commit/4533f9f11ad87aeee51580784017d3fddec6a36a) Thanks [@berenddeboer](https://github.com/berenddeboer)! - refactor: skip logging ResponseURL as this contains an IAM access id

### Patch Changes

- [#3461](https://github.com/sst/sst/pull/3461) [`8da51f1b4`](https://github.com/sst/sst/commit/8da51f1b444f2449565a90816d45f5911ab567bc) Thanks [@justindra](https://github.com/justindra)! - fix future/auth to allow session.use using binding on other apis

- [#3533](https://github.com/sst/sst/pull/3533) [`d4bc8e532`](https://github.com/sst/sst/commit/d4bc8e532810cdc8737b747e97ad08bf6de4c0b5) Thanks [@KONFeature](https://github.com/KONFeature)! - Remove unused import of `context/context.ts`
  Replace export of `context.ts` by `context2.ts` in sst/src/context
  Remove unused file `context/context.ts`
  This will fix caching issue encountered by anyone using / building custom hooks

- [#3547](https://github.com/sst/sst/pull/3547) [`b6e433325`](https://github.com/sst/sst/commit/b6e4333258293d54edbdb17df09cdc1e66f1f98e) Thanks [@TheUncharted](https://github.com/TheUncharted)! - Add AppleAdapter for future auth

- [`f78f408a6`](https://github.com/sst/sst/commit/f78f408a6f9bc6392bb85b6d0e6ae1c05eaee7ad) Thanks [@thdxr](https://github.com/thdxr)! - astrosite: inline regex

- [#3540](https://github.com/sst/sst/pull/3540) [`0f60b635c`](https://github.com/sst/sst/commit/0f60b635c0dbc8fe31c41b5bdee547916228f6c3) Thanks [@zvictor](https://github.com/zvictor)! - fix EISDIR error

## 2.36.8

### Patch Changes

- [`c17c1cf92`](https://github.com/sst/sst/commit/c17c1cf92bdf5ebd7d9ece32077cd1c55b12a4c0) Thanks [@thdxr](https://github.com/thdxr)! - astro: compress function

## 2.36.7

### Patch Changes

- [`cb7e85c69`](https://github.com/sst/sst/commit/cb7e85c6983c09f844bd868aa0b63b6e13a087ce) Thanks [@thdxr](https://github.com/thdxr)! - util: fix data loader issue

## 2.36.6

### Patch Changes

- [`67e91b64e`](https://github.com/sst/sst/commit/67e91b64e62dfd2d5bc273adbe62cd624c504530) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix aws-sdk not found in edge lambda

- [`391e8f83e`](https://github.com/sst/sst/commit/391e8f83ea5eda20fc6e8e555d4aa62ba1c0ab71) Thanks [@fwang](https://github.com/fwang)! - SsrSite: handle warmer requests

## 2.36.5

### Patch Changes

- [#3519](https://github.com/sst/sst/pull/3519) [`09dcf20e4`](https://github.com/sst/sst/commit/09dcf20e4b6ea69d77cacbe504949d99db48ec85) Thanks [@jaydeebee](https://github.com/jaydeebee)! - dns-validated-certificate: bundle aws-sdk

- [#3520](https://github.com/sst/sst/pull/3520) [`7c45504e3`](https://github.com/sst/sst/commit/7c45504e319a13b2c8f4f583453154ca92e5fb2a) Thanks [@jlanzarotti](https://github.com/jlanzarotti)! - Function: add Lambda URL streaming option

## 2.36.4

### Patch Changes

- [#3528](https://github.com/sst/sst/pull/3528) [`4732d21ec`](https://github.com/sst/sst/commit/4732d21eca6ef1911ba2ec970b916f3d2ebf46fd) Thanks [@fwang](https://github.com/fwang)! - Update CDK to 2.110.1

- [`eb0e725eb`](https://github.com/sst/sst/commit/eb0e725ebcc87671a24000bfe36aea887b8a93d8) Thanks [@fwang](https://github.com/fwang)! - Function: add support for Node.js 20 runtime

- [#3522](https://github.com/sst/sst/pull/3522) [`69e4ab7d5`](https://github.com/sst/sst/commit/69e4ab7d5d52daf305ebc8890c5ccd9626f4e092) Thanks [@san4d](https://github.com/san4d)! - Update AWS SDK dependencies to 3.454.0

- [`dff29e502`](https://github.com/sst/sst/commit/dff29e50248797661b661847b6259ccdd627eb60) Thanks [@fwang](https://github.com/fwang)! - Function: add support for Python 3.12 runtime

- [`6bcf40c13`](https://github.com/sst/sst/commit/6bcf40c1399bdc4093d324df52e5f2a939037ef7) Thanks [@fwang](https://github.com/fwang)! - Update constructs to 10.3.0

- [`dff29e502`](https://github.com/sst/sst/commit/dff29e50248797661b661847b6259ccdd627eb60) Thanks [@fwang](https://github.com/fwang)! - Function: add support for Java 21 runtime

## 2.36.3

### Patch Changes

- [`2a73ed809`](https://github.com/sst/sst/commit/2a73ed809f76faa876235782127e4f1305868f3b) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix warming requests error out

## 2.36.2

### Patch Changes

- [`5b88c84ea`](https://github.com/sst/sst/commit/5b88c84ea72bc43f71c700b9dd967b6147464ba8) Thanks [@fwang](https://github.com/fwang)! - Sites: fix S3Uploader resource id thrash with old Python uploader

- [`cbd4510b1`](https://github.com/sst/sst/commit/cbd4510b1f16a141a85597bfbd1ff958f5026edd) Thanks [@fwang](https://github.com/fwang)! - Update runtime to nodejs16.x for custom resources

- [`4cb0b191c`](https://github.com/sst/sst/commit/4cb0b191cc45d2bfe14cb5ba7ad4623d2ed55208) Thanks [@fwang](https://github.com/fwang)! - Function: sort sourcemap by CDK path

- [`baa1e904f`](https://github.com/sst/sst/commit/baa1e904fe38a1c9c1f1081169102a9bca729908) Thanks [@thdxr](https://github.com/thdxr)! - bus: export EventPayload type

- [#3504](https://github.com/sst/sst/pull/3504) [`c7284c8c3`](https://github.com/sst/sst/commit/c7284c8c3cae9d2b38009e27468f862c0bcaa97e) Thanks [@jaydeebee](https://github.com/jaydeebee)! - WebSocketApi: support route returnResponse

- [#3500](https://github.com/sst/sst/pull/3500) [`6a8b100dd`](https://github.com/sst/sst/commit/6a8b100ddbbda6a0177c5559561da013b1b7af9c) Thanks [@rubythulhu](https://github.com/rubythulhu)! - Make sourcemap ordering deterministic

## 2.36.1

### Patch Changes

- [`dd01a3075`](https://github.com/sst/sst/commit/dd01a30755b360be406f276ce5c16b1ee51cad53) Thanks [@fwang](https://github.com/fwang)! - Function: track sourcemap enabled in metadata

- [`eb0fb1498`](https://github.com/sst/sst/commit/eb0fb1498a2cefdc956b9684b6f2bd8765ef9fe5) Thanks [@thdxr](https://github.com/thdxr)! - cli: region

## 2.36.0

### Minor Changes

- [`131589451`](https://github.com/sst/sst/commit/131589451cd9915caf5f14048bcb25b9ca8e8f64) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: enable per-route logging by default

### Patch Changes

- [`36eaf03c3`](https://github.com/sst/sst/commit/36eaf03c3aad450a2d3473c05d7cccdf3de4f1ab) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: update to OpenNext 2.3.1

## 2.35.1

### Patch Changes

- [#3470](https://github.com/sst/sst/pull/3470) [`d8406f775`](https://github.com/sst/sst/commit/d8406f7753ebe09e19da2cac70285908cc360717) Thanks [@dkershner6](https://github.com/dkershner6)! - SsrSite: support customizing S3 origin props

- [`33d05c006`](https://github.com/sst/sst/commit/33d05c0060d40f3ee30f7afe6e6d5f438b3683e8) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix constructor props types

## 2.35.0

### Minor Changes

- [#3484](https://github.com/sst/sst/pull/3484) [`74564805c`](https://github.com/sst/sst/commit/74564805c47a0887fc1123937739538c32928fab) Thanks [@adityavm](https://github.com/adityavm)! - Function: update default runtime to Node.js 18

### Patch Changes

- [`ffa4b0fe9`](https://github.com/sst/sst/commit/ffa4b0fe95e3527ef590f9b8a23e095fdaa227a2) Thanks [@fwang](https://github.com/fwang)! - AstroSite: support server function sourcemap

- [`7e94c96b0`](https://github.com/sst/sst/commit/7e94c96b067df47cec439d5c44adbb5fc6e5e90a) Thanks [@fwang](https://github.com/fwang)! - Sites: invalidate cache after S3 uploader completes

## 2.34.7

### Patch Changes

- [#3475](https://github.com/sst/sst/pull/3475) [`acbe1615f`](https://github.com/sst/sst/commit/acbe1615f130f3271e83725c7d7970ffe9a15aeb) Thanks [@BradDobson2](https://github.com/BradDobson2)! - AppSyncApi: improve multiple schema functionality

- [#3482](https://github.com/sst/sst/pull/3482) [`07bd1b296`](https://github.com/sst/sst/commit/07bd1b296e9e6fbe946fc3154b9fb348955707c6) Thanks [@kelvinCJJ](https://github.com/kelvinCJJ)! - RDS: add support for MySQL 8.0

- [#3463](https://github.com/sst/sst/pull/3463) [`9238c1d37`](https://github.com/sst/sst/commit/9238c1d37d494d4b4152a49a40d29a3622932ac5) Thanks [@wpoynter](https://github.com/wpoynter)! - StaticSite: set correct content type for wasm files

## 2.34.6

### Patch Changes

- [`cf125d460`](https://github.com/sst/sst/commit/cf125d4600def99dd7653e87bbbc77dab41fb97e) Thanks [@fwang](https://github.com/fwang)! - StaticSite: fix nested files not uploaded on Windows

## 2.34.5

### Patch Changes

- [`a52f7247b`](https://github.com/sst/sst/commit/a52f7247b9c8564348bc9f91c3a2d290a95f32a2) Thanks [@thdxr](https://github.com/thdxr)! - function: splitting should always output .mjs

## 2.34.4

### Patch Changes

- [`9da56a1c5`](https://github.com/sst/sst/commit/9da56a1c5222886a52d84e60a1742db9644de6b9) Thanks [@thdxr](https://github.com/thdxr)! - function: expose splitting option

- [#3480](https://github.com/sst/sst/pull/3480) [`fc3dd92a6`](https://github.com/sst/sst/commit/fc3dd92a6f116b42f60196fd8a3ce8a2d04a9c85) Thanks [@jackschu](https://github.com/jackschu)! - Auth: Prevent throwing on CDK id

## 2.34.3

### Patch Changes

- [`1e861b0c7`](https://github.com/sst/sst/commit/1e861b0c797e751c4ec3b2c65780430de9f6f700) Thanks [@thdxr](https://github.com/thdxr)! - test changeset

## 2.34.2

### Patch Changes

- [`4599a0f62`](https://github.com/sst/sst/commit/4599a0f62d203cc1711b7b23ec4aa24bd46434d6) Thanks [@thdxr](https://github.com/thdxr)! - test changeset

## 2.34.1

### Patch Changes

- [`b2f8a6dca`](https://github.com/sst/sst/commit/b2f8a6dca70db23ea71ef867054bc870fd63c5bb) Thanks [@thdxr](https://github.com/thdxr)! - test changeset

## 2.34.0

### Minor Changes

- [#3458](https://github.com/sst/sst/pull/3458) [`3c12694c9`](https://github.com/sst/sst/commit/3c12694c990ff2ffd64f6736a6ac5546d708ba43) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: infer edge deployment from astro-sst adapter

### Patch Changes

- [#3436](https://github.com/sst/sst/pull/3436) [`5f09d4305`](https://github.com/sst/sst/commit/5f09d430528f8c1edbe6002a72015f432b3b69b4) Thanks [@dkershner6](https://github.com/dkershner6)! - NextjsSite: Dynamic RevalidationInsertFunction provisioning based on prerender-manifest size

- [`91af56670`](https://github.com/sst/sst/commit/91af56670cfb8d86085703f61757f178c4226448) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: update to OpenNext 2.3.0

- [#3458](https://github.com/sst/sst/pull/3458) [`3c12694c9`](https://github.com/sst/sst/commit/3c12694c990ff2ffd64f6736a6ac5546d708ba43) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - astro-sst: unify regional and edge adapters

## 2.33.4

### Patch Changes

- [`cebd982db`](https://github.com/sst/sst/commit/cebd982db95c3baaae638d79d8909744ae057fab) Thanks [@thdxr](https://github.com/thdxr)! - test release

## 2.33.3

### Patch Changes

- [`b02173721`](https://github.com/sst/sst/commit/b021737212d762862f29725f79c78145de66cd5f) Thanks [@thdxr](https://github.com/thdxr)! - cli: link console to exact app/stage

- [`c68a1a36e`](https://github.com/sst/sst/commit/c68a1a36e5390de723a4238f10f6c7c60f74b59f) Thanks [@fwang](https://github.com/fwang)! - Cli: remove sst connect command

- [#3454](https://github.com/sst/sst/pull/3454) [`0948f0131`](https://github.com/sst/sst/commit/0948f0131be7189863640baa12bd1ef58b5bd644) Thanks [@suil](https://github.com/suil)! - Service: expose application load balancer

- [#3456](https://github.com/sst/sst/pull/3456) [`fe4ac3a98`](https://github.com/sst/sst/commit/fe4ac3a98d9c905ce5cf787884d99c3ff3bce913) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: fix Edge Function handler path for windows

## 2.33.2

### Patch Changes

- [`8b802f118`](https://github.com/sst/sst/commit/8b802f118a78a296d43b229811e26ae60e13f616) Thanks [@fwang](https://github.com/fwang)! - Service: fix sst bind fails to bind resources

- [`1705badf0`](https://github.com/sst/sst/commit/1705badf09675f802347e31fbc6b763ab87defa0) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: allow overriding bucket name

- [`6511a17a6`](https://github.com/sst/sst/commit/6511a17a626beb2e2d21f84e480d8769100365e6) Thanks [@fwang](https://github.com/fwang)! - Service: support configuring ALB subnets

## 2.33.1

### Patch Changes

- [`b38634d9c`](https://github.com/sst/sst/commit/b38634d9c9e44d66c251c489725499afb019e4cc) Thanks [@thdxr](https://github.com/thdxr)! - internal: try to fix changeset publishing issue

## 2.33.0

### Minor Changes

- [#3434](https://github.com/sst/sst/pull/3434) [`3d72f1c79`](https://github.com/sst/sst/commit/3d72f1c796737c3ed7d0ad47e63c25f752d96f7e) Thanks [@rubythulhu](https://github.com/rubythulhu)! - Adds support for bypassing docker build for python (via an optional flag), and moves python file-copy processes to a place that can be async.

### Patch Changes

- [`fc0a18d1b`](https://github.com/sst/sst/commit/fc0a18d1b18321326be96fc1cbb17ed8a9d72f5f) Thanks [@thdxr](https://github.com/thdxr)! - deps: bump aws iot package

- [#3417](https://github.com/sst/sst/pull/3417) [`2e2d425dc`](https://github.com/sst/sst/commit/2e2d425dc29cb78ebab63cf31c00ec00af0ddec2) Thanks [@michaelgmcd](https://github.com/michaelgmcd)! - fix: add delete parameters permissions to AuthKeys role

## 2.32.3

### Patch Changes

- [#3444](https://github.com/sst/sst/pull/3444) [`ac26313e3`](https://github.com/sst/sst/commit/ac26313e3b86e7d1e3c4887d740679ad292d51aa) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: add static generation support

## 2.32.2

### Patch Changes

- [`390b7d5d5`](https://github.com/sst/sst/commit/390b7d5d5fa13a10ec9f45e50af78f95cf37cc75) Thanks [@thdxr](https://github.com/thdxr)! - cli: dispose context object for node builds

- [#3445](https://github.com/sst/sst/pull/3445) [`f3a378f66`](https://github.com/sst/sst/commit/f3a378f66076f996fdd6fbd274bd313caa98ea4f) Thanks [@fwang](https://github.com/fwang)! - Job: fix job type shows "never"

- [`db7d815f9`](https://github.com/sst/sst/commit/db7d815f9ead81a9ceec79ddb1d3003b21f56f71) Thanks [@fwang](https://github.com/fwang)! - create-sst: fix react dependency

## 2.32.1

### Patch Changes

- [`68ed1d280`](https://github.com/sst/sst/commit/68ed1d280144ff3e4d83f29444b62fb9c4fc305d) Thanks [@fwang](https://github.com/fwang)! - Service: do not exclude `.sst/types` for docker build

- [#3435](https://github.com/sst/sst/pull/3435) [`8a7e6beb3`](https://github.com/sst/sst/commit/8a7e6beb35af06616769038d297b7ee0e7432f8c) Thanks [@alexabidri](https://github.com/alexabidri)! - SsrSite: allow customize "cdk.viewerProtocolPolicy"

- [`988093b7a`](https://github.com/sst/sst/commit/988093b7aa35e7f1cf82c3b9ca9ee624cac966cf) Thanks [@fwang](https://github.com/fwang)! - AppSyncApi: respect scope for lazily added resolvers and data sources

## 2.32.0

### Minor Changes

- [#3428](https://github.com/sst/sst/pull/3428) [`2b6528ec3`](https://github.com/sst/sst/commit/2b6528ec307ad8f3708941bbaa12812d94ed5d2d) Thanks [@bitpavel](https://github.com/bitpavel)! - SsrSite: add `invalidation` prop to customize CloudFront invalidation

- [#3439](https://github.com/sst/sst/pull/3439) [`88ce024a8`](https://github.com/sst/sst/commit/88ce024a8276c54e68b0acdff5886bd84ee4453e) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: upload sourcemaps to bootstrap bucket

## 2.31.0

### Minor Changes

- [#3432](https://github.com/sst/sst/pull/3432) [`8e655cfb9`](https://github.com/sst/sst/commit/8e655cfb926e271275e45fdb3ea02c617db4e933) Thanks [@fwang](https://github.com/fwang)! - Sites: add `assets` option to allow customizing static file options

### Patch Changes

- [`5613c727a`](https://github.com/sst/sst/commit/5613c727a967f95daba0e23447d504552b8edc13) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: finalize per-route logging

## 2.30.4

### Patch Changes

- [#3431](https://github.com/sst/sst/pull/3431) [`b3abbfd19`](https://github.com/sst/sst/commit/b3abbfd19318e0e1ab94f590c2e5ed4619d5fe51) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: add beta option for per-route logging [wip]

## 2.30.3

### Patch Changes

- [`48c432320`](https://github.com/sst/sst/commit/48c4323201afd729ee9bbc662b3f4448a4fc190b) Thanks [@thdxr](https://github.com/thdxr)! - cli: rollback clearing dist folder on every synth

- [#3426](https://github.com/sst/sst/pull/3426) [`bd4986a8c`](https://github.com/sst/sst/commit/bd4986a8c22ea2ee1121191ad2fb940ba16ec341) Thanks [@fwang](https://github.com/fwang)! - Update CDK to v2.101.1

## 2.30.2

### Patch Changes

- [`7bb494883`](https://github.com/sst/sst/commit/7bb49488353a3035e109b0aa834ba4ccfeb08a57) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: add `openNextVersion` to specify the OpenNext version for building the Next.js site

## 2.30.1

### Patch Changes

- [`73943d36d`](https://github.com/sst/sst/commit/73943d36df2f2dfb0e37ff2a85fdaed92f76dad9) Thanks [@thdxr](https://github.com/thdxr)! - cli: prevent concurrent synth

## 2.30.0

### Minor Changes

- [#3392](https://github.com/sst/sst/pull/3392) [`c823382f8`](https://github.com/sst/sst/commit/c823382f886c4a4b5f8a3e8c96ced6b9db80e271) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - SsrSite: improve cache deployment behavior and invalidation strategy

### Patch Changes

- [`c76d0fa05`](https://github.com/sst/sst/commit/c76d0fa05ad78ef5d880b38d99905113e0c84ac4) Thanks [@fwang](https://github.com/fwang)! - sst types: do not require AWS credentials to generate types

- [#3422](https://github.com/sst/sst/pull/3422) [`8f9c4900b`](https://github.com/sst/sst/commit/8f9c4900be577fe2f2080fb7c9e6a44df41a649c) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix edge import order

- [#3411](https://github.com/sst/sst/pull/3411) [`9b719087b`](https://github.com/sst/sst/commit/9b719087b3d31e71e875ccae4452ed7b1b041dfa) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix wrapper function for streaming

- [#3407](https://github.com/sst/sst/pull/3407) [`220ef51d7`](https://github.com/sst/sst/commit/220ef51d7211fab2505236afe4ac2bae8a2289cb) Thanks [@dkershner6](https://github.com/dkershner6)! - NextjsSite: expose a static function to create server cache policy

## 2.29.2

### Patch Changes

- [`364f696a9`](https://github.com/sst/sst/commit/364f696a96b6d3b236eb2bc6a638082237c153bb) Thanks [@thdxr](https://github.com/thdxr)! - cli: limit sst dev to 4 concurrent function builds

- [`794d8bfa6`](https://github.com/sst/sst/commit/794d8bfa67fcade66a519bfd17e9b5bcf2a7f43b) Thanks [@fwang](https://github.com/fwang)! - Print out correct error message for deprecated node versions

## 2.29.1

### Patch Changes

- [`3becfd945`](https://github.com/sst/sst/commit/3becfd9458a7c2c2d86d0d77289307bbba5b8b6b) Thanks [@fwang](https://github.com/fwang)! - sst bind: fix "Project not initialized" error

- [#3404](https://github.com/sst/sst/pull/3404) [`e2b82e9e6`](https://github.com/sst/sst/commit/e2b82e9e664da7974a35966e1fe6a31ca3ecb472) Thanks [@thdxr](https://github.com/thdxr)! - Update aws cdk to 2.95.1

## 2.29.0

### Minor Changes

- [`c1e2fffc3`](https://github.com/sst/sst/commit/c1e2fffc32e596676604a9aeede1f6367af599a2) Thanks [@thdxr](https://github.com/thdxr)! - cli: require node 18

## 2.28.6

### Patch Changes

- [`f1bffc551`](https://github.com/sst/sst/commit/f1bffc5510d35f716b68380a347937dfe169ea32) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: sort routes in metadata

- [`f1bffc551`](https://github.com/sst/sst/commit/f1bffc5510d35f716b68380a347937dfe169ea32) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix cannot find routes file when running sst dev

## 2.28.5

### Patch Changes

- [#3397](https://github.com/sst/sst/pull/3397) [`ecd5b68a0`](https://github.com/sst/sst/commit/ecd5b68a0d45c237aa6709cde544385e1aaa0c9f) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: update to OpenNext v2.2.3

- [#3397](https://github.com/sst/sst/pull/3397) [`ecd5b68a0`](https://github.com/sst/sst/commit/ecd5b68a0d45c237aa6709cde544385e1aaa0c9f) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: store routes in metadata

## 2.28.4

### Patch Changes

- [`069274df1`](https://github.com/sst/sst/commit/069274df14b79091a1604d360fa65062d5ace0ac) Thanks [@thdxr](https://github.com/thdxr)! - cli: fix pothos builder

## 2.28.3

### Patch Changes

- [#3388](https://github.com/sst/sst/pull/3388) [`f760343c1`](https://github.com/sst/sst/commit/f760343c13b152c680c27c5a05d8bbd72c4b9dc6) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Fixes Astro Site error response pages

## 2.28.2

### Patch Changes

- [#3391](https://github.com/sst/sst/pull/3391) [`c8db185c1`](https://github.com/sst/sst/commit/c8db185c1b9e38db575fa6f19cfa1ee822d3eb10) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Fixes AstroSite cache headers

- [#3390](https://github.com/sst/sst/pull/3390) [`0d3e6ef78`](https://github.com/sst/sst/commit/0d3e6ef78b149d53c9e6b10f386ff3da1a7dce69) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Adds Lambda layer support to SSR Site

## 2.28.1

### Patch Changes

- [#3381](https://github.com/sst/sst/pull/3381) [`b9853e668`](https://github.com/sst/sst/commit/b9853e6680969a55a37174a0dbbfb5cab77b887e) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Fixes Astro streaming

- [#3382](https://github.com/sst/sst/pull/3382) [`6c5b72aee`](https://github.com/sst/sst/commit/6c5b72aeec8b0f5a8258ab8089e5fae7b0a0937f) Thanks [@michaelgmcd](https://github.com/michaelgmcd)! - Auth: batch delete keys on remove

- [#3357](https://github.com/sst/sst/pull/3357) [`f9f58dc48`](https://github.com/sst/sst/commit/f9f58dc4895d3fce8b94ab6c39ce5b35ae668b96) Thanks [@blytheaw](https://github.com/blytheaw)! - Function: support disabling CloudWatch logs

- [`cdcf410b2`](https://github.com/sst/sst/commit/cdcf410b24bfc83392390da027594b67317e4ad5) Thanks [@thdxr](https://github.com/thdxr)! - cli: fix error in go function creating error in cli during live dev

## 2.28.0

### Minor Changes

- [#3295](https://github.com/sst/sst/pull/3295) [`db36c2451`](https://github.com/sst/sst/commit/db36c2451def103773e54f67e5837723358cead2) Thanks [@conico974](https://github.com/conico974)! - NextjsSite: support OpenNext v2.2.1

- [#3295](https://github.com/sst/sst/pull/3295) [`db36c2451`](https://github.com/sst/sst/commit/db36c2451def103773e54f67e5837723358cead2) Thanks [@conico974](https://github.com/conico974)! - NextjsSite: support on-demand `revalidatePath` and `revalidateTag`

- [#3295](https://github.com/sst/sst/pull/3295) [`db36c2451`](https://github.com/sst/sst/commit/db36c2451def103773e54f67e5837723358cead2) Thanks [@conico974](https://github.com/conico974)! - NextjsSite: support streaming response

### Patch Changes

- [#3378](https://github.com/sst/sst/pull/3378) [`62c709d16`](https://github.com/sst/sst/commit/62c709d16a3c680f10eec22187c6dd1fedd64e89) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: fixes build bug introduced with astro-sst changes

- [`bb1e8c473`](https://github.com/sst/sst/commit/bb1e8c473c9730d957d119757e879f4d2c28a38c) Thanks [@fwang](https://github.com/fwang)! - Service: allow customizing CloudFront distribution

## 2.27.0

### Minor Changes

- [#3363](https://github.com/sst/sst/pull/3363) [`3299f350f`](https://github.com/sst/sst/commit/3299f350f5e08843ea158d8beadc449d9cbc8d3a) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: support "hybrid" mode

### Patch Changes

- [#3370](https://github.com/sst/sst/pull/3370) [`bd9605ca6`](https://github.com/sst/sst/commit/bd9605ca63d0ac9a1dc77e55ffeda36cf7b3be9c) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Fixes props passing to SSR function

- [#3363](https://github.com/sst/sst/pull/3363) [`3299f350f`](https://github.com/sst/sst/commit/3299f350f5e08843ea158d8beadc449d9cbc8d3a) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstriSite: improves SSR support

- [#3363](https://github.com/sst/sst/pull/3363) [`3299f350f`](https://github.com/sst/sst/commit/3299f350f5e08843ea158d8beadc449d9cbc8d3a) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - AstroSite: handle redirect in CloudFront functions

- [#3365](https://github.com/sst/sst/pull/3365) [`1ce715444`](https://github.com/sst/sst/commit/1ce7154448171cf9a36b4ec6b167cf5028270c5a) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Fixes warmer for SSR sites

## 2.26.11

### Patch Changes

- [`cd2cd55e4`](https://github.com/sst/sst/commit/cd2cd55e42ecf17f41e3ca93422acf700440f1c7) Thanks [@fwang](https://github.com/fwang)! - Service: expose fargateService and taskDefinition

## 2.26.10

### Patch Changes

- [`1e39f6490`](https://github.com/sst/sst/commit/1e39f6490e97a2303e9cddf4a81221b90c9a48d2) Thanks [@thdxr](https://github.com/thdxr)! - cli: clear build dir on synth

- [`4a433ce1b`](https://github.com/sst/sst/commit/4a433ce1b9b8176a7b9f495758397901e57a64f6) Thanks [@thdxr](https://github.com/thdxr)! - future/auth: fix index url

## 2.26.9

### Patch Changes

- [`47c5c0733`](https://github.com/sst/sst/commit/47c5c0733630727c18d40b61b04558a158cabbab) Thanks [@thdxr](https://github.com/thdxr)! - cli: remove unnecessary console.log

## 2.26.8

### Patch Changes

- [`be9a8ba80`](https://github.com/sst/sst/commit/be9a8ba80b9266cdd9a133f6d0780100cd286277) Thanks [@thdxr](https://github.com/thdxr)! - node: remove rogue console.log

## 2.26.7

### Patch Changes

- [`01d8dbf9c`](https://github.com/sst/sst/commit/01d8dbf9c14edf07c9254ffb6d0b6f55f75f53b4) Thanks [@thdxr](https://github.com/thdxr)! - future/auth: support connect flow, check deprecated functions

## 2.26.6

### Patch Changes

- [#3337](https://github.com/sst/sst/pull/3337) [`f294d8e68`](https://github.com/sst/sst/commit/f294d8e683d791276e6c81241991bf82a172dcef) Thanks [@dfoulger](https://github.com/dfoulger)! - Update "secrets load" command to support the --fallback option

- [`5e25178ac`](https://github.com/sst/sst/commit/5e25178ace06d58b21e743666d0a6ab3f0338cff) Thanks [@thdxr](https://github.com/thdxr)! - cli: dev startup performance

## 2.26.5

### Patch Changes

- [`3c98abc65`](https://github.com/sst/sst/commit/3c98abc6584ab8834eceb915b44a08cc72dac047) Thanks [@thdxr](https://github.com/thdxr)! - function: use less memory for local invocation cache

## 2.26.4

### Patch Changes

- [`c215530de`](https://github.com/sst/sst/commit/c215530de1786a2f4917d89849baa1c8eebc9e00) Thanks [@fwang](https://github.com/fwang)! - RemixSite: add support for Remix v2

## 2.26.3

### Patch Changes

- [#3340](https://github.com/sst/sst/pull/3340) [`c61396b0a`](https://github.com/sst/sst/commit/c61396b0a9197dcac59bc3ffd5bdbdc308b47f30) Thanks [@fwang](https://github.com/fwang)! - SsrSite: standardize interface

## 2.26.2

### Patch Changes

- [`6605fe06b`](https://github.com/sst/sst/commit/6605fe06bff53faff867b76b03064e904192ca90) Thanks [@thdxr](https://github.com/thdxr)! - function: rollback sourcemap uploader dependency

## 2.26.1

### Patch Changes

- [`32c21a867`](https://github.com/sst/sst/commit/32c21a867ae38b22e0819241cb3084bbc95d3fe6) Thanks [@thdxr](https://github.com/thdxr)! - upload sourcemaps before anything else

## 2.26.0

### Minor Changes

- [#3332](https://github.com/sst/sst/pull/3332) [`920baa5e0`](https://github.com/sst/sst/commit/920baa5e02350c66adc79e46add604473ddd7c99) Thanks [@thdxr](https://github.com/thdxr)! - context: support asynclocalstorage

### Patch Changes

- [#3332](https://github.com/sst/sst/pull/3332) [`920baa5e0`](https://github.com/sst/sst/commit/920baa5e02350c66adc79e46add604473ddd7c99) Thanks [@thdxr](https://github.com/thdxr)! - Use lazy loading instead of context

## 2.25.7

### Patch Changes

- [`9e3302c3a`](https://github.com/sst/sst/commit/9e3302c3a138a6c4e8eab4a07f1e5a8df789ae2a) Thanks [@thdxr](https://github.com/thdxr)! - local: improve invocation protocol

## 2.25.6

### Patch Changes

- [`f554d4bd7`](https://github.com/sst/sst/commit/f554d4bd76bc2eb1cc932a0ce1caddd21fa177dc) Thanks [@thdxr](https://github.com/thdxr)! - function: fix bridge throwing error when stack trace is missing

## 2.25.5

### Patch Changes

- [#3320](https://github.com/sst/sst/pull/3320) [`93ed65728`](https://github.com/sst/sst/commit/93ed65728d224ddafcc045f0ba802ebe5e0151ec) Thanks [@khuezy](https://github.com/khuezy)! - NextjsSite: update OpenNext to 2.1.5

## 2.25.4

### Patch Changes

- [`86b894dd6`](https://github.com/sst/sst/commit/86b894dd6e3ba765866fa0f7bea815e7ab77abd1) Thanks [@thdxr](https://github.com/thdxr)! - future/auth: support allowClient callback

## 2.25.3

### Patch Changes

- [#3299](https://github.com/sst/sst/pull/3299) [`d0bb94461`](https://github.com/sst/sst/commit/d0bb9446148f197709e070958602f72945dd3b46) Thanks [@rekotiira](https://github.com/rekotiira)! - node/event-bus: Fix incompatible type inference in exported function

- [#3313](https://github.com/sst/sst/pull/3313) [`74657375a`](https://github.com/sst/sst/commit/74657375a4a16821f8977be4f8dca5e71c8b587c) Thanks [@jamesgibbons92](https://github.com/jamesgibbons92)! - AppSyncApi: Update deprecated appsync schema prop

- [#3311](https://github.com/sst/sst/pull/3311) [`47cb76700`](https://github.com/sst/sst/commit/47cb767001faaeeb9d02d967202609e2acec8b21) Thanks [@berenddeboer](https://github.com/berenddeboer)! - SsrSite: enforce ssl on bucket to get security hub

- [#3314](https://github.com/sst/sst/pull/3314) [`ad6429b7e`](https://github.com/sst/sst/commit/ad6429b7e4e7a4353bb240f319f95c0776d920ce) Thanks [@fwang](https://github.com/fwang)! - Function: bring back using user provided runtime for Java

- [#3310](https://github.com/sst/sst/pull/3310) [`0321ac44a`](https://github.com/sst/sst/commit/0321ac44a92ebf55b20a65bfe493845334957210) Thanks [@Nirlah](https://github.com/Nirlah)! - RemixSite: do not enforce ESM

## 2.25.2

### Patch Changes

- [`c47a18930`](https://github.com/sst/sst/commit/c47a18930243654c96376ade4b224736a5c89587) Thanks [@thdxr](https://github.com/thdxr)! - future/auth: fix typing problem with response.session

## 2.25.1

### Patch Changes

- [#3303](https://github.com/sst/sst/pull/3303) [`89827c084`](https://github.com/sst/sst/commit/89827c08438cf944075833acd37ebf74d2f65f7a) Thanks [@fwang](https://github.com/fwang)! - RemixSite: add support for esm

- [#3301](https://github.com/sst/sst/pull/3301) [`841eb05c9`](https://github.com/sst/sst/commit/841eb05c9869a4d372f5bba0867c4ff982db6a3d) Thanks [@fwang](https://github.com/fwang)! - SsrSite: support warming for all SSR sites

## 2.25.0

### Minor Changes

- [#3297](https://github.com/sst/sst/pull/3297) [`62dede23c`](https://github.com/sst/sst/commit/62dede23c6ce71816c648d5f16c8f5913d6244b3) Thanks [@fwang](https://github.com/fwang)! - Update CDK to v2.95.1

### Patch Changes

- [#3294](https://github.com/sst/sst/pull/3294) [`2749ba60e`](https://github.com/sst/sst/commit/2749ba60eecf065bcd2931a977edf82c8e0f8f7c) Thanks [@DanielTatarkin](https://github.com/DanielTatarkin)! - StaticSite: Upgrade S3 uploader and handler Pyhon versions 3_7 -> 3_11

- [#3242](https://github.com/sst/sst/pull/3242) [`c2c886ca1`](https://github.com/sst/sst/commit/c2c886ca15ef7a99b2eaf08ad7159d6a114cb8a0) Thanks [@dani-mp](https://github.com/dani-mp)! - SsrSite: support `copyFiles` for server function

## 2.24.28

### Patch Changes

- [`90e93a206`](https://github.com/sst/sst/commit/90e93a206eb9c7d28c4323a2df584bdaa3680a7e) Thanks [@thdxr](https://github.com/thdxr)! - future/auth: expose privateKey if it needs to be bound

## 2.24.27

### Patch Changes

- [#3285](https://github.com/sst/sst/pull/3285) [`715dc3e5d`](https://github.com/sst/sst/commit/715dc3e5d61320378c02bf2ce5486836c9675b19) Thanks [@omikader](https://github.com/omikader)! - SsrSite: Upgrade s3 handler python versions

- [`8627a6a3d`](https://github.com/sst/sst/commit/8627a6a3d8cbf05d515db8238fb314aa310e7472) Thanks [@thdxr](https://github.com/thdxr)! - cli: bun related fixes

## 2.24.26

### Patch Changes

- [`1ec49e7f1`](https://github.com/sst/sst/commit/1ec49e7f166d0264304e583f2f68db1f34939458) Thanks [@fwang](https://github.com/fwang)! - Job: ensure unique handler function id

## 2.24.25

### Patch Changes

- [`8e51f5d51`](https://github.com/sst/sst/commit/8e51f5d51891089d055dbbbe7261152a214be8b5) Thanks [@thdxr](https://github.com/thdxr)! - cli: fix console command exiting

## 2.24.24

### Patch Changes

- [`a933265d6`](https://github.com/sst/sst/commit/a933265d657b9b29036d2e98d28fb4b6cc0cf203) Thanks [@fwang](https://github.com/fwang)! - Service: support build args for docker build

- [`83f205f2b`](https://github.com/sst/sst/commit/83f205f2b6dc794243fc9d8894f15cb9296a28fb) Thanks [@fwang](https://github.com/fwang)! - Service: support configuring Fargate Service (ie. circuit breaker)

- [`438ee2dda`](https://github.com/sst/sst/commit/438ee2dda57e4ee849dcd68e536a9504a57d2b63) Thanks [@fwang](https://github.com/fwang)! - Service: support using existing ECR image

- [`fcf4e60c7`](https://github.com/sst/sst/commit/fcf4e60c7e6056433bab0e24e94022757d18cb05) Thanks [@fwang](https://github.com/fwang)! - Service: support ARM64 cpu architecture

- [`a933265d6`](https://github.com/sst/sst/commit/a933265d657b9b29036d2e98d28fb4b6cc0cf203) Thanks [@fwang](https://github.com/fwang)! - Job: support build args for docker build

- [`a933265d6`](https://github.com/sst/sst/commit/a933265d657b9b29036d2e98d28fb4b6cc0cf203) Thanks [@fwang](https://github.com/fwang)! - Function: support build args for docker build

## 2.24.23

### Patch Changes

- [#3271](https://github.com/sst/sst/pull/3271) [`f493dfe0a`](https://github.com/sst/sst/commit/f493dfe0a2e1502d88a1c23a098e83cb9711ff33) Thanks [@barakcodes](https://github.com/barakcodes)! - RemixSite: url encode special characters in asset urls

- [`dfb640f7a`](https://github.com/sst/sst/commit/dfb640f7aecb07874c9b9328be611a68a4c79ce7) Thanks [@fwang](https://github.com/fwang)! - Function: fix java handlers from the same project builds empty zip

- [#3277](https://github.com/sst/sst/pull/3277) [`786ea2baa`](https://github.com/sst/sst/commit/786ea2baa3d7a4236a0268160e020e019dfc36e7) Thanks [@alistairstead](https://github.com/alistairstead)! - Container: support customizing ALB target group (ie. health check)

## 2.24.22

### Patch Changes

- [`bf431e102`](https://github.com/sst/sst/commit/bf431e102cc27c218b83fbde84f613bc5311c70b) Thanks [@thdxr](https://github.com/thdxr)! - context: fix bug causing infinite loop when context depends on itself

- [#3266](https://github.com/sst/sst/pull/3266) [`76f57c12f`](https://github.com/sst/sst/commit/76f57c12f287560d3c17fd765076bf5f2a5668eb) Thanks [@jamesgibbons92](https://github.com/jamesgibbons92)! - Update nodejs 14 -> 16 for DnsValidatedCertificate and Eventbridge retrier functions

## 2.24.21

### Patch Changes

- [`28b886397`](https://github.com/sst/sst/commit/28b8863976630e787b389eec0af3c71dff33227b) Thanks [@thdxr](https://github.com/thdxr)! - auth: support onError when cookies can't be found

## 2.24.20

### Patch Changes

- [`5b1b3e706`](https://github.com/sst/sst/commit/5b1b3e70634a104fd53871e738c30fd1eda46704) Thanks [@fwang](https://github.com/fwang)! - Service: detect invalid path and suggest fix

## 2.24.19

### Patch Changes

- [`4e02121df`](https://github.com/sst/sst/commit/4e02121df0b03c92d05719347bf59a7f9f9c12d8) Thanks [@fwang](https://github.com/fwang)! - Service: fix thrashing id in dev mode

## 2.24.18

### Patch Changes

- [`024439549`](https://github.com/sst/sst/commit/02443954945cd4593ac053fcce5dd870f9c891d4) Thanks [@fwang](https://github.com/fwang)! - Secret: support advanced parameter for secrets longer than 4KB in size

## 2.24.17

### Patch Changes

- [`f19d579cf`](https://github.com/sst/sst/commit/f19d579cf57b97d548093103ce0b069701c5bcef) Thanks [@thdxr](https://github.com/thdxr)! - ApiHandler: support throwing Response

- [`ca6f763fd`](https://github.com/sst/sst/commit/ca6f763fdfddd099ce2260202d0ce48c72e211ea) Thanks [@thdxr](https://github.com/thdxr)! - auth: remove extra log

## 2.24.16

### Patch Changes

- [`d21ed32cb`](https://github.com/sst/sst/commit/d21ed32cbbd3eef26e823aedb08c795e5c1fb1c1) Thanks [@thdxr](https://github.com/thdxr)! - function: make sure sourcemap ids don't conflict

- [`5c7f126ef`](https://github.com/sst/sst/commit/5c7f126ef80cea4849cdf87fb5bf2eee4742d335) Thanks [@fwang](https://github.com/fwang)! - Telemetry: report CLI status

- [`5c7f126ef`](https://github.com/sst/sst/commit/5c7f126ef80cea4849cdf87fb5bf2eee4742d335) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: hide JSII Node.js warning

## 2.24.15

### Patch Changes

- [`be7e0b13f`](https://github.com/sst/sst/commit/be7e0b13fe26bdba2eca20e146b67b4a6febe129) Thanks [@thdxr](https://github.com/thdxr)! - future-auth: better interface for creating sessions

- [#3207](https://github.com/sst/sst/pull/3207) [`27138d1e6`](https://github.com/sst/sst/commit/27138d1e6f86f1435d862ac40ae1ac7cea9d3e24) Thanks [@oleghind](https://github.com/oleghind)! - Upgrade fast-jwt

## 2.24.14

### Patch Changes

- [`053198804`](https://github.com/sst/sst/commit/053198804afd1a6822ea8ad2ce65a5c78dfa7b57) Thanks [@thdxr](https://github.com/thdxr)! - function: bulk sourcemap upload

## 2.24.13

### Patch Changes

- [#3248](https://github.com/sst/sst/pull/3248) [`ffa986a42`](https://github.com/sst/sst/commit/ffa986a4259d820a8200f88365e9c399352b57c1) Thanks [@niklaswallerstedt](https://github.com/niklaswallerstedt)! - future/Auth: Single tenant auth for Azure AD

- [#3210](https://github.com/sst/sst/pull/3210) [`3b005776c`](https://github.com/sst/sst/commit/3b005776c31a29946ee997f9c480e271d48383c5) Thanks [@ipatka](https://github.com/ipatka)! - Fix typings for custom authorizers in ApiGatewayV1 construct

- [`a34f72a3b`](https://github.com/sst/sst/commit/a34f72a3b6ea9f3f8d51735e7c4cb4e016b93e87) Thanks [@thdxr](https://github.com/thdxr)! - bus: remove recursion detection from lambda retries

- [#3250](https://github.com/sst/sst/pull/3250) [`b81d5d8d5`](https://github.com/sst/sst/commit/b81d5d8d50f868d6c8518d01c329d9985ea44d8b) Thanks [@tanquetav](https://github.com/tanquetav)! - python-runtime: pin poetry dependency to fix ssl error

- [`12e7295fa`](https://github.com/sst/sst/commit/12e7295fa7a24d9df3f3091a84ff63dedafd337d) Thanks [@thdxr](https://github.com/thdxr)! - function: allow completely disabling sourcemap

## 2.24.12

### Patch Changes

- [#3246](https://github.com/sst/sst/pull/3246) [`a09c72070`](https://github.com/sst/sst/commit/a09c720704573fa6d913ca12acd0867fc35149ac) Thanks [@omikader](https://github.com/omikader)! - Service: Add node client and docs

- [`eab6225a2`](https://github.com/sst/sst/commit/eab6225a214a32590e6874f7c160cd884e7050ac) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: support cdk bootstrapStackVersionSsmParameter and imageAssetsRepositoryName options

## 2.24.11

### Patch Changes

- [`ed586ba15`](https://github.com/sst/sst/commit/ed586ba15508ba0f3d6a856eedeafe5959f6fb5d) Thanks [@thdxr](https://github.com/thdxr)! - eventbus: dataloader pattern for batching events

## 2.24.10

### Patch Changes

- [`6681ab708`](https://github.com/sst/sst/commit/6681ab70826dd7eef07328c43bd7ae19e19e2417) Thanks [@thdxr](https://github.com/thdxr)! - eventbus: disable aws recursion prevention for eventbus loop

## 2.24.9

### Patch Changes

- [`5bbcc6d0a`](https://github.com/sst/sst/commit/5bbcc6d0ab2f89bdf1fff117d6e9a338f4898a5f) Thanks [@fwang](https://github.com/fwang)! - sst bind: fix .env not loaded

## 2.24.8

### Patch Changes

- [`04ecc8648`](https://github.com/sst/sst/commit/04ecc864887516999049eaa36804257b2a5d936c) Thanks [@thdxr](https://github.com/thdxr)! - function: delete sourcemap after reading

## 2.24.7

### Patch Changes

- [`18ac7b541`](https://github.com/sst/sst/commit/18ac7b5410f9e9dd208791f3e0ef6fe296838170) Thanks [@thdxr](https://github.com/thdxr)! - function: collect and upload sourcemaps

## 2.24.6

### Patch Changes

- [#3232](https://github.com/sst/sst/pull/3232) [`1c8972690`](https://github.com/sst/sst/commit/1c89726905f8ab50d872b517f6be45bcba4608fd) Thanks [@fwang](https://github.com/fwang)! - Respect project region for AWS credentials provider

## 2.24.5

### Patch Changes

- [#3227](https://github.com/sst/sst/pull/3227) [`820c8e55c`](https://github.com/sst/sst/commit/820c8e55cbd9349e5c1dc9195e99650fed750e77) Thanks [@jamesgibbons92](https://github.com/jamesgibbons92)! - sst types: add CLI command to generate resource types

## 2.24.4

### Patch Changes

- [#3222](https://github.com/sst/sst/pull/3222) [`a594b1964`](https://github.com/sst/sst/commit/a594b1964afb285308fb31fd0c5748f10b22693e) Thanks [@adolfogc](https://github.com/adolfogc)! - Function: support Python 3.11 runtie

- [#3224](https://github.com/sst/sst/pull/3224) [`3b89a6201`](https://github.com/sst/sst/commit/3b89a6201baf222f7640159f5002c9a111228f3a) Thanks [@jamesgibbons92](https://github.com/jamesgibbons92)! - Bucket: fix auto delete objects on destroy removal

- [`caf7f0712`](https://github.com/sst/sst/commit/caf7f07124e39212fd81b967a156230ce9aa7098) Thanks [@fwang](https://github.com/fwang)! - Bump @smithy/signature-v4 to 2.0.4

## 2.24.3

### Patch Changes

- [`11bb33900`](https://github.com/sst/sst/commit/11bb339009a743f23446a9a1a3fcf0741e54ca6b) Thanks [@thdxr](https://github.com/thdxr)! - cli: fix nodejs rebuilding issue

- [`5ecba62dd`](https://github.com/sst/sst/commit/5ecba62dddcbafc88f43d8a1d1fcc930207076b1) Thanks [@thdxr](https://github.com/thdxr)! - cli: ignore any babel config files

## 2.24.2

### Patch Changes

- [`62f78efd7`](https://github.com/sst/sst/commit/62f78efd7367c95d1b58737d18a52bcae293e3f2) Thanks [@fwang](https://github.com/fwang)! - Service: support private services

## 2.24.1

### Patch Changes

- [`77bec32bc`](https://github.com/sst/sst/commit/77bec32bcce20a6e045951dbd2a6f730184cfc33) Thanks [@fwang](https://github.com/fwang)! - sst bind: fix cli hanging before site is deployed

## 2.24.0

### Minor Changes

- [#3217](https://github.com/sst/sst/pull/3217) [`01d16a8d4`](https://github.com/sst/sst/commit/01d16a8d461d411c6beb31507ef9ab102f446ec9) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update CDK to 2.91.0

### Patch Changes

- [#3201](https://github.com/sst/sst/pull/3201) [`f5a7d5609`](https://github.com/sst/sst/commit/f5a7d560930434b48d1970c7eddf3c5044caae58) Thanks [@jayair](https://github.com/jayair)! - Update serverless-stack to sst

## 2.23.15

### Patch Changes

- [`cb4bc1a26`](https://github.com/sst/sst/commit/cb4bc1a2654b29378b1c555b987707adbba07230) Thanks [@thdxr](https://github.com/thdxr)! - console: update console URL

## 2.23.14

### Patch Changes

- [`18e3cf975`](https://github.com/sst/sst/commit/18e3cf975c81f8c077ba6c9a425c80e25fb67b40) Thanks [@fwang](https://github.com/fwang)! - config: add `disableAppModeCheck` to disable confirmation prompt when switching between `sst deploy` and `sst dev` deployment modes

## 2.23.13

## 2.23.12

### Patch Changes

- [`1873d697d`](https://github.com/sst/sst/commit/1873d697d1232618b6060134425d1c02cd843dc5) Thanks [@thdxr](https://github.com/thdxr)! - cli: remove log statements

- [#3091](https://github.com/sst/sst/pull/3091) [`d22ea127f`](https://github.com/sst/sst/commit/d22ea127fad1f2314e714338e5aada59e8f7c679) Thanks [@ealain](https://github.com/ealain)! - SsrSite: support protecting server URL with IAM auth

## 2.23.11

### Patch Changes

- [`32683248f`](https://github.com/sst/sst/commit/32683248fe933805e4c58306a3e4967d851d3b41) Thanks [@thdxr](https://github.com/thdxr)! - create-sst: fix missing replacement of project name

## 2.23.10

## 2.23.9

### Patch Changes

- [`92e13b161`](https://github.com/sst/sst/commit/92e13b1611e5c88f9489e782d67d494333d2c089) Thanks [@thdxr](https://github.com/thdxr)! - function: include runtime in ssrfunction metadata

## 2.23.8

### Patch Changes

- [`9326ee600`](https://github.com/sst/sst/commit/9326ee60092df938ad710fcd860aee618184f354) Thanks [@thdxr](https://github.com/thdxr)! - function: include runtime in ssrfunction metadata

## 2.23.7

### Patch Changes

- [`5f3c449bc`](https://github.com/sst/sst/commit/5f3c449bcf306195ad137d638d064eb1802106c1) Thanks [@thdxr](https://github.com/thdxr)! - function: include runtime in metadata

## 2.23.6

### Patch Changes

- [`8850d20a4`](https://github.com/serverless-stack/sst/commit/8850d20a44032d2eaa142f4a12b8b65a3233cb0c) Thanks [@thdxr](https://github.com/thdxr)! - Prevent `sst bind` from handling function invocations

## 2.23.5

### Patch Changes

- [`54cb27189`](https://github.com/serverless-stack/sst/commit/54cb27189adfede103692318dc4f13ff6c90213e) Thanks [@thdxr](https://github.com/thdxr)! - build: remove bundled cli

## 2.23.4

### Patch Changes

- [`137f5059b`](https://github.com/serverless-stack/sst/commit/137f5059b87ac3690ba47f2494ee11e2a50a1db3) Thanks [@fwang](https://github.com/fwang)! - Service: create 1 NAT Gateway as the default VPC setting

- [`75ca05dc1`](https://github.com/serverless-stack/sst/commit/75ca05dc18e011c4661f28a7909af307b4daa745) Thanks [@fwang](https://github.com/fwang)! - Service: docker ignore .sst folder when staging image

- [`435ab9ce2`](https://github.com/serverless-stack/sst/commit/435ab9ce2f32c79e9f8eb2e4099aafebc1246aad) Thanks [@fwang](https://github.com/fwang)! - sst update: detect CDK v1 dependencies

## 2.23.3

### Patch Changes

- [`19cc5c5cb`](https://github.com/serverless-stack/sst/commit/19cc5c5cb22f57876a78b1eea155a5ef03dee2d9) Thanks [@fwang](https://github.com/fwang)! - Service: configure log retention via "logRetention"

- [`fb6f4e208`](https://github.com/serverless-stack/sst/commit/fb6f4e208c0be8a3785d96438e1ca67ba56579f2) Thanks [@fwang](https://github.com/fwang)! - Service: configure container definition via "cdk.container"

## 2.23.2

### Patch Changes

- [`ac84ab5c3`](https://github.com/serverless-stack/sst/commit/ac84ab5c39a8edf4b72062bd583d098804dfb598) Thanks [@fwang](https://github.com/fwang)! - sst update: do not update packages prefixed "sst-"

- [#3103](https://github.com/serverless-stack/sst/pull/3103) [`d8cecd35e`](https://github.com/serverless-stack/sst/commit/d8cecd35e0aa422d9bbcb885c5bcb9057e6b398d) Thanks [@berenddeboer](https://github.com/berenddeboer)! - Function/java: run only one gradle build per directory

- [`c2fb7942f`](https://github.com/serverless-stack/sst/commit/c2fb7942fd3e48ecc9a9250226bf1bbb2b29d426) Thanks [@fwang](https://github.com/fwang)! - Service: add "file" prop to allow passing in path to Dockerfile

- [#3180](https://github.com/serverless-stack/sst/pull/3180) [`818e33dd7`](https://github.com/serverless-stack/sst/commit/818e33dd7846bd532417ae926a0c0a3570da2b68) Thanks [@oyed](https://github.com/oyed)! - sst update: respect trailing newline char in package.json

## 2.23.1

### Patch Changes

- [`cb9744e57`](https://github.com/serverless-stack/sst/commit/cb9744e57d605a2fda82d7e5f1583b212f24b365) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: allow using CDK bootstrap bucket instead of creating a new one

## 2.23.0

### Minor Changes

- [#3167](https://github.com/serverless-stack/sst/pull/3167) [`e428a9e0a`](https://github.com/serverless-stack/sst/commit/e428a9e0ab030f6852f704dd7f729929168c9d1c) Thanks [@fwang](https://github.com/fwang)! - Service: deploy Fargate services

### Patch Changes

- [#3167](https://github.com/serverless-stack/sst/pull/3167) [`e428a9e0a`](https://github.com/serverless-stack/sst/commit/e428a9e0ab030f6852f704dd7f729929168c9d1c) Thanks [@fwang](https://github.com/fwang)! - sst bind: support binding undeployed Parameter values

- [#3177](https://github.com/serverless-stack/sst/pull/3177) [`8a31945c4`](https://github.com/serverless-stack/sst/commit/8a31945c44048308b5f8cf4cc7e5fe490eb835c9) Thanks [@fwang](https://github.com/fwang)! - AstroSite: support streaming

- [`601da6101`](https://github.com/serverless-stack/sst/commit/601da6101f467111370dc38436e48531a4864815) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: allow using existing S3 buckets

- [#3182](https://github.com/serverless-stack/sst/pull/3182) [`01304e35b`](https://github.com/serverless-stack/sst/commit/01304e35b90e2337cb141a687e9b8c94fee38b64) Thanks [@pawelblaszczyk5](https://github.com/pawelblaszczyk5)! - EventBus: pass attempts count to EventHandler callback

## 2.22.11

### Patch Changes

- [#3173](https://github.com/serverless-stack/sst/pull/3173) [`567fc00cf`](https://github.com/serverless-stack/sst/commit/567fc00cff6cba5091de192a1f0ee6f22c8e0391) Thanks [@khuezy](https://github.com/khuezy)! - NextjsSite: add "next-url" to allowed headers

- [`fdfcfb221`](https://github.com/serverless-stack/sst/commit/fdfcfb22181a763f85b59830f10450752194a8af) Thanks [@thdxr](https://github.com/thdxr)! - dev: update bridge function to node18

- [#3179](https://github.com/serverless-stack/sst/pull/3179) [`04851db59`](https://github.com/serverless-stack/sst/commit/04851db59cb52f2cc2beafb3f52f0310c65d5b23) Thanks [@jamesgibbons92](https://github.com/jamesgibbons92)! - fix: dispose of esbuild context when in deploy mode

## 2.22.10

### Patch Changes

- [`f69855c2b`](https://github.com/serverless-stack/sst/commit/f69855c2b03aa92a6262f1a2b0886db1cf81e067) Thanks [@fwang](https://github.com/fwang)! - Allow setting app stage via SST_STAGE environment variable

## 2.22.9

### Patch Changes

- [`b5d0dd819`](https://github.com/serverless-stack/sst/commit/b5d0dd81986b03faf47e99987ecff9118a07ee5a) Thanks [@fwang](https://github.com/fwang)! - SsrSite: cdk.function return CDK Function instance

## 2.22.8

### Patch Changes

- [`71c9bab6c`](https://github.com/serverless-stack/sst/commit/71c9bab6c54e6f5e41688893797bdd8d13d8effa) Thanks [@fwang](https://github.com/fwang)! - Function/Job: support docker --file option

## 2.22.7

### Patch Changes

- [#2877](https://github.com/serverless-stack/sst/pull/2877) [`ec145f078`](https://github.com/serverless-stack/sst/commit/ec145f0781de07e7c51224f0163326440e198231) Thanks [@relsunkaev](https://github.com/relsunkaev)! - SsrFunction: respect architecture setting

- [#3164](https://github.com/serverless-stack/sst/pull/3164) [`14418e889`](https://github.com/serverless-stack/sst/commit/14418e889f73ed2f334724d18d5905f73f2b2c2c) Thanks [@psolidgold](https://github.com/psolidgold)! - Function: Add policy statement resource for Function to access bootstrap bucket objects during live debugging.

- [`6d076a004`](https://github.com/serverless-stack/sst/commit/6d076a00433ae4ae89073386fbc6996a1e42f76f) Thanks [@thdxr](https://github.com/thdxr)! - dev: fix issue with node_modules not symlinking on devmode rebuilds

- [#3163](https://github.com/serverless-stack/sst/pull/3163) [`e77d397bb`](https://github.com/serverless-stack/sst/commit/e77d397bbb1b775967fbd72c5a6788075bc93b11) Thanks [@khuezy](https://github.com/khuezy)! - NextjsSite: add `next-url` to cache policy

- [#3135](https://github.com/serverless-stack/sst/pull/3135) [`a8fc8208d`](https://github.com/serverless-stack/sst/commit/a8fc8208d5d90f38855dc7f70d01194fc291e181) Thanks [@jonnedeprez](https://github.com/jonnedeprez)! - Table: prevent overwriting FilterCriteria in consumers

## 2.22.6

### Patch Changes

- [`ba2156ff7`](https://github.com/serverless-stack/sst/commit/ba2156ff74b8a8e3d48ea243f17a743c2b134502) Thanks [@fwang](https://github.com/fwang)! - Function: do not cache esbuild context for sst build

## 2.22.5

### Patch Changes

- [`95297c4f9`](https://github.com/serverless-stack/sst/commit/95297c4f92d56c420ef37b7c2dbc6dabaa43bfdb) Thanks [@thdxr](https://github.com/thdxr)! - function: revert limited iot permissions

## 2.22.4

### Patch Changes

- [`3503231e8`](https://github.com/serverless-stack/sst/commit/3503231e834823b646288c574a7377a406da6d10) Thanks [@thdxr](https://github.com/thdxr)! - function: limit iot permissions

## 2.22.3

### Patch Changes

- [`f77e1c869`](https://github.com/serverless-stack/sst/commit/f77e1c86948b87cff5fb8eed86852a3f2c54d860) Thanks [@fwang](https://github.com/fwang)! - Job: support ARM architecture

## 2.22.2

### Patch Changes

- [`01aab434c`](https://github.com/serverless-stack/sst/commit/01aab434c0ee86135a3e1dcad9eaa93f37872038) Thanks [@thdxr](https://github.com/thdxr)! - cli: properly dispose of esbuild context on exit

- [`cf9723d87`](https://github.com/serverless-stack/sst/commit/cf9723d8776f367e8a2861bc9ab5b8bbc0021a37) Thanks [@thdxr](https://github.com/thdxr)! - cli: support setting outputs path in config

- [`8612a54f9`](https://github.com/serverless-stack/sst/commit/8612a54f97c3fb9983c13c8f8d05a55b8f176a12) Thanks [@fwang](https://github.com/fwang)! - Cognito: support gov cloud identity name

- [#3133](https://github.com/serverless-stack/sst/pull/3133) [`f708fa980`](https://github.com/serverless-stack/sst/commit/f708fa980c5622149cb8f66d9c29faaeef89c2bd) Thanks [@pzeinlinger](https://github.com/pzeinlinger)! - Function/go: fix incorrect go -tags flag

- [#3131](https://github.com/serverless-stack/sst/pull/3131) [`66546dfee`](https://github.com/serverless-stack/sst/commit/66546dfee511810ed8fba7357247b4f9afb500eb) Thanks [@nick](https://github.com/nick)! - Bump esbuild version

## 2.22.1

### Patch Changes

- [`acf2cca2e`](https://github.com/serverless-stack/sst/commit/acf2cca2ed1bd910c74ace96ec9d41e303b88321) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: update to OpenNext 2.0.5

## 2.22.0

### Minor Changes

- [#3072](https://github.com/serverless-stack/sst/pull/3072) [`cf5d492da`](https://github.com/serverless-stack/sst/commit/cf5d492da821adb3fdf22ff99f3345249621b27e) Thanks [@berenddeboer](https://github.com/berenddeboer)! - Function: drop deprecated runtimes

### Patch Changes

- [#3101](https://github.com/serverless-stack/sst/pull/3101) [`a4b2e7bbc`](https://github.com/serverless-stack/sst/commit/a4b2e7bbc1ed153b2462b29d3487f6c684ae270f) Thanks [@gvidon](https://github.com/gvidon)! - Function/rust: display build errors

- [#3096](https://github.com/serverless-stack/sst/pull/3096) [`c3ca57db0`](https://github.com/serverless-stack/sst/commit/c3ca57db0d1868fddde16fa7ed8df467acba243a) Thanks [@ffxsam](https://github.com/ffxsam)! - SsrSite: support `fileOptions` props

- [#3116](https://github.com/serverless-stack/sst/pull/3116) [`2b9e55979`](https://github.com/serverless-stack/sst/commit/2b9e559790ca98f01f631c97941963c18c3ed21c) Thanks [@pzeinlinger](https://github.com/pzeinlinger)! - Function/go: support Golang build options

- [#3099](https://github.com/serverless-stack/sst/pull/3099) [`f8fb5b284`](https://github.com/serverless-stack/sst/commit/f8fb5b284d4e72f61ed1638b35fd364625a5e5a0) Thanks [@Nirlah](https://github.com/Nirlah)! - Function/rust: support arm64 Rust runtime

- [`efadc8373`](https://github.com/serverless-stack/sst/commit/efadc8373ee9e5e8e589e8af68fbf747dc854906) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: update message when updating the stack

## 2.21.8

### Patch Changes

- [#3106](https://github.com/serverless-stack/sst/pull/3106) [`ded5370c1`](https://github.com/serverless-stack/sst/commit/ded5370c1f26a16616545f3588a11a3d466277df) Thanks [@MattJenko](https://github.com/MattJenko)! - Bootstrap: support custom permissions boundary

- [#3102](https://github.com/serverless-stack/sst/pull/3102) [`2739d664e`](https://github.com/serverless-stack/sst/commit/2739d664e19fc7252ee4ef1a9575cb67a09e5f13) Thanks [@berenddeboer](https://github.com/berenddeboer)! - RDS: grant migration function permission to decrypt custom secret encryption key

- [#3095](https://github.com/serverless-stack/sst/pull/3095) [`b68d57a62`](https://github.com/serverless-stack/sst/commit/b68d57a624a3876af94bbd6c4ae88f8c5c21d858) Thanks [@michaelgmcd](https://github.com/michaelgmcd)! - RemixSite: ensure build directory exists

- [`6649b3cc3`](https://github.com/serverless-stack/sst/commit/6649b3cc3600c4a6c51b84eba40fd4bb747d34d9) Thanks [@thdxr](https://github.com/thdxr)! - console: restores function invocations on console refresh, supports clearing

## 2.21.7

### Patch Changes

- [`64723ffca`](https://github.com/serverless-stack/sst/commit/64723ffcaeb755b6a361a3c412236770a219814d) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix thrashing id when multiple sites are defined

## 2.21.6

### Patch Changes

- [`3ab8384f8`](https://github.com/serverless-stack/sst/commit/3ab8384f87b81bd956371e0d6805e7493b539731) Thanks [@thdxr](https://github.com/thdxr)! - console: simplified event publishing

## 2.21.5

### Patch Changes

- [`616be5f1b`](https://github.com/serverless-stack/sst/commit/616be5f1be7436f756f69592553b6f43f83185b6) Thanks [@fwang](https://github.com/fwang)! - Fix hosted zone not found

## 2.21.4

### Patch Changes

- [`7edbb7876`](https://github.com/serverless-stack/sst/commit/7edbb7876687f7704bffe4bec744d3dc30f76a4b) Thanks [@thdxr](https://github.com/thdxr)! - forward all events

## 2.21.3

### Patch Changes

- [`7528d6841`](https://github.com/serverless-stack/sst/commit/7528d6841cc01df7420a4bf45085a6f8af2d63fe) Thanks [@thdxr](https://github.com/thdxr)! - forward realtime events to new console

## 2.21.2

### Patch Changes

- [`bf06ac82b`](https://github.com/serverless-stack/sst/commit/bf06ac82bee9765ab85fba61593d44d83fd15722) Thanks [@thdxr](https://github.com/thdxr)! - function: make the live debug bridge less chatty

## 2.21.1

### Patch Changes

- [`acbdf9fd3`](https://github.com/serverless-stack/sst/commit/acbdf9fd3c5f8874b266331b6ee9fe6af9536d42) Thanks [@fwang](https://github.com/fwang)! - Function: support overriding docker CMD

## 2.21.0

### Minor Changes

- [#3111](https://github.com/serverless-stack/sst/pull/3111) [`db399a94d`](https://github.com/serverless-stack/sst/commit/db399a94ddf89fe54cbd5c1aae42482433001952) Thanks [@fwang](https://github.com/fwang)! - Job: support container runtime

### Patch Changes

- [#3111](https://github.com/serverless-stack/sst/pull/3111) [`db399a94d`](https://github.com/serverless-stack/sst/commit/db399a94ddf89fe54cbd5c1aae42482433001952) Thanks [@fwang](https://github.com/fwang)! - Job: support canceling job

## 2.20.1

### Patch Changes

- [`640f7c871`](https://github.com/serverless-stack/sst/commit/640f7c8710a136e4bae32ceaeaeff1f35fea292f) Thanks [@thdxr](https://github.com/thdxr)! - fix: esbuild has issues with keepName

## 2.20.0

### Minor Changes

- [`cf1dbb553`](https://github.com/serverless-stack/sst/commit/cf1dbb553ea9a228c50ea30fd7baf4daafc4241c) Thanks [@thdxr](https://github.com/thdxr)! - functions: update esbuild

## 2.19.2

### Patch Changes

- [`86a50659d`](https://github.com/serverless-stack/sst/commit/86a50659d4985d5c6fa359a242762fe80d54b1fa) Thanks [@thdxr](https://github.com/thdxr)! - metadata: add ssrfunction to metadata

## 2.19.1

### Patch Changes

- [`9176d8ad1`](https://github.com/serverless-stack/sst/commit/9176d8ad12a24982abf0d7c0495025faba145727) Thanks [@fwang](https://github.com/fwang)! - Disable pathMetadata by default

- [`05dab5b8b`](https://github.com/serverless-stack/sst/commit/05dab5b8b2c814d164be259df2b79858ffccb34c) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix CloudFront not invalidated when s3 assets unchanged

- [`426713243`](https://github.com/serverless-stack/sst/commit/42671324332dfa114bfefd4a6f7daba374b0ef23) Thanks [@fwang](https://github.com/fwang)! - Support CloudFormation resources tree view

## 2.19.0

### Minor Changes

- [#3085](https://github.com/serverless-stack/sst/pull/3085) [`134b4f7e1`](https://github.com/serverless-stack/sst/commit/134b4f7e16e3802eedf59c4fd6bbf454589c5543) Thanks [@fwang](https://github.com/fwang)! - Function: container support

## 2.18.4

### Patch Changes

- [#3083](https://github.com/serverless-stack/sst/pull/3083) [`6effd7d35`](https://github.com/serverless-stack/sst/commit/6effd7d351f2a101394845b9acfbb9cbbc2c522e) Thanks [@khuezy](https://github.com/khuezy)! - NextjsSite: update OpenNext 2.0.4

- [#3083](https://github.com/serverless-stack/sst/pull/3083) [`6effd7d35`](https://github.com/serverless-stack/sst/commit/6effd7d351f2a101394845b9acfbb9cbbc2c522e) Thanks [@khuezy](https://github.com/khuezy)! - SsrSite: fix multiple s3 origins created for static assets

- [#3076](https://github.com/serverless-stack/sst/pull/3076) [`f1249013d`](https://github.com/serverless-stack/sst/commit/f1249013d8476856558d2e6baaf25e55b76523b9) Thanks [@alex-klyuchnikov](https://github.com/alex-klyuchnikov)! - Function: await fs.writeFile for nodejs runtime

## 2.18.3

### Patch Changes

- [`dd8ec0191`](https://github.com/serverless-stack/sst/commit/dd8ec0191947314b5b4a07cb8514cbba594a5022) Thanks [@fwang](https://github.com/fwang)! - Fix type file is incomplete

## 2.18.2

### Patch Changes

- [#3055](https://github.com/serverless-stack/sst/pull/3055) [`c1d4fe461`](https://github.com/serverless-stack/sst/commit/c1d4fe461a3534365f22e07b48c97e5c4067ba77) Thanks [@juliankrispel](https://github.com/juliankrispel)! - Remove deprecated rds engine

- [`eebe301c3`](https://github.com/serverless-stack/sst/commit/eebe301c3e0879b87fa58be5c04b8de6922afaf6) Thanks [@thdxr](https://github.com/thdxr)! - cli: fix issue where function invocation when cli starts crashes the whole thing

- [`e2015c456`](https://github.com/serverless-stack/sst/commit/e2015c4569d53e68e52a65abb7b031fdb4b53abb) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix static assets CloudFront distribution path

## 2.18.1

### Patch Changes

- [`150680d80`](https://github.com/serverless-stack/sst/commit/150680d80733dd85eed26407b647b2440188b8a0) Thanks [@fwang](https://github.com/fwang)! - SsrSite: add static file cache behaviors lazily

- [#3056](https://github.com/serverless-stack/sst/pull/3056) [`06ccb9a9c`](https://github.com/serverless-stack/sst/commit/06ccb9a9c52c408d08ddb50ab64902eed8153d3d) Thanks [@khuezy](https://github.com/khuezy)! - SsrSite: fix s3 assets not setting cache-control

- [`5fff7262d`](https://github.com/serverless-stack/sst/commit/5fff7262d982cd2b791e523930444ae22a7983d0) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix "sst dev" access denied error

## 2.18.0

### Minor Changes

- [`7c71978fa`](https://github.com/serverless-stack/sst/commit/7c71978fa1cd461c6a192a7385c3ca26afbbfdf1) Thanks [@fwang](https://github.com/fwang)! - SsrSite: set cookie behavior to NONE in server cache policy

### Patch Changes

- [`e5fc4de81`](https://github.com/serverless-stack/sst/commit/e5fc4de81b640be37d76862f52aa54d9259fee0b) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: update to OpenNext 2.0.3

- [#3051](https://github.com/serverless-stack/sst/pull/3051) [`2b824b13e`](https://github.com/serverless-stack/sst/commit/2b824b13e4a7a7ffc5864b2e43511ab26e3fd0cb) Thanks [@khuezy](https://github.com/khuezy)! - SsrSite: fix s3 assets cache-control header not set

- [#3054](https://github.com/serverless-stack/sst/pull/3054) [`966d3b0d3`](https://github.com/serverless-stack/sst/commit/966d3b0d3adf367c5416277b8e5c63183f1f1954) Thanks [@berenddeboer](https://github.com/berenddeboer)! - Function: support java17 runtime

- [`a734123f7`](https://github.com/serverless-stack/sst/commit/a734123f718ef12b95834928c14d29e564933bcc) Thanks [@fwang](https://github.com/fwang)! - StaticSite & SsrSite: lazy build

## 2.17.8

### Patch Changes

- [`26afb063c`](https://github.com/serverless-stack/sst/commit/26afb063c0ddd8cbb1fdfe73b955e21ae831da9a) Thanks [@thdxr](https://github.com/thdxr)! - eventbux: fix issue adding two subscribers to the same event

- [`b07a079be`](https://github.com/serverless-stack/sst/commit/b07a079be18c7585a968f5f3789bc3c3909fefeb) Thanks [@thdxr](https://github.com/thdxr)! - kysely: upgrade kysely

## 2.17.7

### Patch Changes

- [#3035](https://github.com/serverless-stack/sst/pull/3035) [`21669e1c7`](https://github.com/serverless-stack/sst/commit/21669e1c72b4910de47c983503cbfe92c100c415) Thanks [@berenddeboer](https://github.com/berenddeboer)! - RDS: grant KMS permission if secret is encrypted with custom KMS key

## 2.17.6

### Patch Changes

- [`f3ab3b8bc`](https://github.com/serverless-stack/sst/commit/f3ab3b8bc1c1bff87210cc3ce77ce5c4cec8fcd7) Thanks [@thdxr](https://github.com/thdxr)! - future/auth: keep claims and code in same state to avoid hijacking

## 2.17.5

### Patch Changes

- [`6a4910dae`](https://github.com/serverless-stack/sst/commit/6a4910dae23cfdbc473a29d80edea6fe885bf200) Thanks [@thdxr](https://github.com/thdxr)! - eventbus: fix bug not respecting max retry setting

## 2.17.4

### Patch Changes

- [`258497590`](https://github.com/serverless-stack/sst/commit/258497590c76a8a91b0673f3e7a0439d2099d774) Thanks [@thdxr](https://github.com/thdxr)! - eventbus: simplify retry algorithm

## 2.17.3

### Patch Changes

- [#3032](https://github.com/serverless-stack/sst/pull/3032) [`ef61e7db6`](https://github.com/serverless-stack/sst/commit/ef61e7db67760c9bcc9fa92fa23ea936f9517ddc) Thanks [@berenddeboer](https://github.com/berenddeboer)! - Bucket: enforce S3 https connections

- [#3036](https://github.com/serverless-stack/sst/pull/3036) [`48f27bcbb`](https://github.com/serverless-stack/sst/commit/48f27bcbbb89ef0fcb69d26ddbbe7542fadfa29b) Thanks [@berenddeboer](https://github.com/berenddeboer)! - bootstrap: add lifecyle rule to stop triggering rule S3.13 in Security Hub

## 2.17.2

### Patch Changes

- [#3030](https://github.com/serverless-stack/sst/pull/3030) [`b5a6953cf`](https://github.com/serverless-stack/sst/commit/b5a6953cfc61d71d297a98981307b39ad79c1298) Thanks [@jmnavarr](https://github.com/jmnavarr)! - Use correct custom CDK toolkit stack name

## 2.17.1

## 2.17.0

### Minor Changes

- [#3015](https://github.com/serverless-stack/sst/pull/3015) [`5128f2dd7`](https://github.com/serverless-stack/sst/commit/5128f2dd7533a24b2e6e5ac209552ae519506c25) Thanks [@berenddeboer](https://github.com/berenddeboer)! - Bootstrap: remove use of SQS queue

- [#3015](https://github.com/serverless-stack/sst/pull/3015) [`5128f2dd7`](https://github.com/serverless-stack/sst/commit/5128f2dd7533a24b2e6e5ac209552ae519506c25) Thanks [@berenddeboer](https://github.com/berenddeboer)! - Bootstrap: enforce ssl connections to S3 to stop triggering S3.5 of the AWS Foundational Security Best Practices

### Patch Changes

- [#3024](https://github.com/serverless-stack/sst/pull/3024) [`43e4a0d73`](https://github.com/serverless-stack/sst/commit/43e4a0d73d510e6b59828ca684b9cbb4d1254f7d) Thanks [@ipatka](https://github.com/ipatka)! - Function: fail build when node runtime installation fails

## 2.16.4

### Patch Changes

- [#3025](https://github.com/serverless-stack/sst/pull/3025) [`2ba152041`](https://github.com/serverless-stack/sst/commit/2ba15204194b51a1cf6a12a6594f69eac97d38d7) Thanks [@ealain](https://github.com/ealain)! - NextjsSite: support vpc settings for revalidation function

## 2.16.3

### Patch Changes

- [#3014](https://github.com/serverless-stack/sst/pull/3014) [`af4aa0056`](https://github.com/serverless-stack/sst/commit/af4aa0056290a4323499ae3bf84dc7df12424c33) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: remove failover origin

- [#3010](https://github.com/serverless-stack/sst/pull/3010) [`3e43bc679`](https://github.com/serverless-stack/sst/commit/3e43bc67982bb64a62f7e9614a9df071a49a599a) Thanks [@berenddeboer](https://github.com/berenddeboer)! - fix: use stackName in migrator metadata instead of stack id

## 2.16.2

### Patch Changes

- [#3003](https://github.com/serverless-stack/sst/pull/3003) [`d970a4bbe`](https://github.com/serverless-stack/sst/commit/d970a4bbe6731321d36df96e9e26d1edcf7d7443) Thanks [@clawsl](https://github.com/clawsl)! - arm64 docker build support for Python functions

- [`56b237da1`](https://github.com/serverless-stack/sst/commit/56b237da140ae49d54da97f27fd42978a7110944) Thanks [@fwang](https://github.com/fwang)! - StaticSite: allow setting content type

- [#2998](https://github.com/serverless-stack/sst/pull/2998) [`62ff43063`](https://github.com/serverless-stack/sst/commit/62ff43063c91fdae0a736dc56db06250451bee75) Thanks [@berenddeboer](https://github.com/berenddeboer)! - add --to option to diff to prevent it building to .sst/dist

- [`75a77c6e5`](https://github.com/serverless-stack/sst/commit/75a77c6e53a8c81e9cc4ca960ef6ca92a425985e) Thanks [@fwang](https://github.com/fwang)! - StaticSite: preserver .well-known uri path

## 2.16.1

### Patch Changes

- [`a96dd29b2`](https://github.com/serverless-stack/sst/commit/a96dd29b27a3667027400db061c3144619179675) Thanks [@fwang](https://github.com/fwang)! - Script: run once on "sst dev" boot up

## 2.16.0

### Minor Changes

- [#3001](https://github.com/serverless-stack/sst/pull/3001) [`53fd3cb75`](https://github.com/serverless-stack/sst/commit/53fd3cb757baefc4af9129e8cd4183492d23fae4) Thanks [@fwang](https://github.com/fwang)! - Update CDK to v2.84.0

### Patch Changes

- [#3000](https://github.com/serverless-stack/sst/pull/3000) [`aa36e945e`](https://github.com/serverless-stack/sst/commit/aa36e945eed53bd11eb908100d62b42c305f53e3) Thanks [@iloewensen](https://github.com/iloewensen)! - RDS: grant cloudformation DescribeStacks permission

## 2.15.0

### Minor Changes

- [`1fe0692cd`](https://github.com/serverless-stack/sst/commit/1fe0692cde01e0fda1bca1574f3e37d99512b6bf) Thanks [@thdxr](https://github.com/thdxr)! - future auth: code adapter callback api changed to onCodeRequest and onCodeInvalid

## 2.14.0

### Minor Changes

- [#2764](https://github.com/serverless-stack/sst/pull/2764) [`0c73f55ea`](https://github.com/serverless-stack/sst/commit/0c73f55eab16d5ec1694c6bc0a34b1e9873f6fcb) Thanks [@conico974](https://github.com/conico974)! - NextjsSite: Improved ISR support

## 2.13.9

### Patch Changes

- [`bd83933d6`](https://github.com/serverless-stack/sst/commit/bd83933d697dc21209ed2fbfa86e08484c61d2c5) Thanks [@thdxr](https://github.com/thdxr)! - metadata: include script, job and auth metadata

## 2.13.8

### Patch Changes

- [`4b2a95621`](https://github.com/serverless-stack/sst/commit/4b2a95621b86b06e49668ad79b9912c5640b4f97) Thanks [@thdxr](https://github.com/thdxr)! - context: reset should reset itself as well

## 2.13.7

### Patch Changes

- [`7b1956784`](https://github.com/serverless-stack/sst/commit/7b1956784cf89ab72e4f13c0b4effce31c70166f) Thanks [@thdxr](https://github.com/thdxr)! - allow context to be reset

## 2.13.6

### Patch Changes

- [`468f35520`](https://github.com/serverless-stack/sst/commit/468f355204b17f740bc0c92abb926a9be33e2aea) Thanks [@thdxr](https://github.com/thdxr)! - auth: code adapter handles invalid

## 2.13.5

### Patch Changes

- [`a05a1359d`](https://github.com/serverless-stack/sst/commit/a05a1359db965e555d639bda18a607f2a7924c41) Thanks [@thdxr](https://github.com/thdxr)! - StaticSite: include url in metadata

## 2.13.4

### Patch Changes

- [`4f196437a`](https://github.com/serverless-stack/sst/commit/4f196437a2b123174b812f48c8f2e5ea46fbaae9) Thanks [@thdxr](https://github.com/thdxr)! - site: include url in site metadata

## 2.13.3

### Patch Changes

- [`d8970b0fa`](https://github.com/serverless-stack/sst/commit/d8970b0fa36d6ab461b22af0ecd8d3bddcf3cdf4) Thanks [@fwang](https://github.com/fwang)! - Fix stack synthesizer not respect "cdk" props in sst.config

- [`79f678179`](https://github.com/serverless-stack/sst/commit/79f678179761a455ac463e36f630beaabd13e19e) Thanks [@thdxr](https://github.com/thdxr)! - auth: encryption utilities + code adapter

- [`4d9c70f3b`](https://github.com/serverless-stack/sst/commit/4d9c70f3b874fcf55de5ff9b0eade44e2f48fddf) Thanks [@thdxr](https://github.com/thdxr)! - constructs: metadata updates and fixes

- [`1c8a7a39c`](https://github.com/serverless-stack/sst/commit/1c8a7a39c97206e5c90cbac93858c5bf7b2bf6a6) Thanks [@fwang](https://github.com/fwang)! - Script: do not run script on rollback

## 2.13.2

### Patch Changes

- [`80bb4f089`](https://github.com/serverless-stack/sst/commit/80bb4f089d0c071ae072be595e531229eaaa04f2) Thanks [@fwang](https://github.com/fwang)! - SsrSite: CloudFront origin timeout respect server lambda timeout

- [`67ee41566`](https://github.com/serverless-stack/sst/commit/67ee4156662325121f4afeaf42dce07ba6ba28c3) Thanks [@fwang](https://github.com/fwang)! - SsrSite: expose cdk.function for edge mode

- [`6dd69d9c7`](https://github.com/serverless-stack/sst/commit/6dd69d9c74a6941dc64fd1c21fd2064f0869eeb9) Thanks [@thdxr](https://github.com/thdxr)! - auth: allow customizing index page

## 2.13.1

### Patch Changes

- [`e77262351`](https://github.com/serverless-stack/sst/commit/e77262351f15fb31073d6b729345f4263bf678b8) Thanks [@thdxr](https://github.com/thdxr)! - eventbus: handle subscriber name too long

## 2.13.0

### Minor Changes

- [#2965](https://github.com/serverless-stack/sst/pull/2965) [`83909ce36`](https://github.com/serverless-stack/sst/commit/83909ce367e6e247a9b25063624ecbbd13bc1260) Thanks [@michaelgmcd](https://github.com/michaelgmcd)! - Support Postgres 13.9

### Patch Changes

- [`4a5eb23e1`](https://github.com/serverless-stack/sst/commit/4a5eb23e117366672a10c4cb88458b914e713d12) Thanks [@thdxr](https://github.com/thdxr)! - remove sigterm trapping

- [`bec587f0b`](https://github.com/serverless-stack/sst/commit/bec587f0bddb766248095414ee116f79e4d14ba2) Thanks [@thdxr](https://github.com/thdxr)! - eventbus: support subscribing to multiple events

## 2.12.2

### Patch Changes

- [`b5d360c68`](https://github.com/serverless-stack/sst/commit/b5d360c68bbc14357d67387672477465970ac3a3) Thanks [@thdxr](https://github.com/thdxr)! - eventbus: support multiple events in subscription

## 2.12.1

## 2.12.0

### Minor Changes

- [`5fa74500d`](https://github.com/serverless-stack/sst/commit/5fa74500d0ae32587372f95510bd7eb1ed31a3e2) Thanks [@thdxr](https://github.com/thdxr)! - Breaking change in future/auth:

  Instead of returning the session directly from `onSuccess` there is now a second paramter passed in called `response`. You can use this to create sessions `return response.session` but can also instead chain other providers or return a normal HTTP response. This comes in handy when creating multi-step auth processes or when connecting external services to an existing account.

## 2.11.18

### Patch Changes

- [#2956](https://github.com/serverless-stack/sst/pull/2956) [`e23457d25`](https://github.com/serverless-stack/sst/commit/e23457d25d867329da93a50bd35d0a6cd1ff805e) Thanks [@fwang](https://github.com/fwang)! - Allow overriding CDK roles in sst.config.ts

## 2.11.17

### Patch Changes

- [`e74f8a350`](https://github.com/serverless-stack/sst/commit/e74f8a350b6439e50be715d53a6e223489f474e1) Thanks [@fwang](https://github.com/fwang)! - Job: exit process in the wrapper function

## 2.11.16

### Patch Changes

- [`14c6bad3b`](https://github.com/serverless-stack/sst/commit/14c6bad3baa60d0a5c79745ce64514d8477d53bd) Thanks [@fwang](https://github.com/fwang)! - RemixSite: host header shows CloudFront domain

## 2.11.15

### Patch Changes

- [`6645002d0`](https://github.com/serverless-stack/sst/commit/6645002d00be8085a4090ccbd86d3b1b1849c3d8) Thanks [@thdxr](https://github.com/thdxr)! - rds: add support for 11.16 postgres

## 2.11.14

### Patch Changes

- [`9fc713a3b`](https://github.com/serverless-stack/sst/commit/9fc713a3b857e33d0d45a861d1cbac1134d5e837) Thanks [@thdxr](https://github.com/thdxr)! - function: add handler path in metadata

## 2.11.13

### Patch Changes

- [`557ab1a19`](https://github.com/serverless-stack/sst/commit/557ab1a191aaefcc016f3a87bbb405a71602c92e) Thanks [@fwang](https://github.com/fwang)! - SsrSite: add support for setting log retention

## 2.11.12

### Patch Changes

- [`0daef8c23`](https://github.com/serverless-stack/sst/commit/0daef8c236d45785cae5f27062500b59044a1cd3) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: pin to OpenNext v1.4.0

## 2.11.11

### Patch Changes

- [`b700ee400`](https://github.com/serverless-stack/sst/commit/b700ee400ba0c4065907949ea78d1446ec4dfe28) Thanks [@thdxr](https://github.com/thdxr)! - fix issue with deploy, diff, and remove

## 2.11.10

### Patch Changes

- [`5fb455ebf`](https://github.com/serverless-stack/sst/commit/5fb455ebfb81ee7e07871662d3c55243cff07d83) Thanks [@thdxr](https://github.com/thdxr)! - fix sst build

## 2.11.9

### Patch Changes

- [`bb1749953`](https://github.com/serverless-stack/sst/commit/bb174995332e4415ec9f527bb198e4d4213ee671) Thanks [@thdxr](https://github.com/thdxr)! - fix retrier not being activated

## 2.11.8

### Patch Changes

- [`d4de7e4b6`](https://github.com/serverless-stack/sst/commit/d4de7e4b668f8e545556f48024cf8fe7432d5f37) Thanks [@thdxr](https://github.com/thdxr)! - regex approach didn't work, had to use ast

## 2.11.7

### Patch Changes

- [`318b9c88f`](https://github.com/serverless-stack/sst/commit/318b9c88f7ecf7e86a0777885225900b5eaf51f0) Thanks [@thdxr](https://github.com/thdxr)! - improve performance of CLI start

## 2.11.6

### Patch Changes

- [`ea7995119`](https://github.com/serverless-stack/sst/commit/ea799511940131893c7e02d6dbc2303a70a3e016) Thanks [@thdxr](https://github.com/thdxr)! - update sst connect command to switch between prod and dev

## 2.11.5

### Patch Changes

- [`99704f9c4`](https://github.com/serverless-stack/sst/commit/99704f9c4dd60d4ebd14bbccaeb945a2a543c805) Thanks [@thdxr](https://github.com/thdxr)! - Fixed eventbusname

## 2.11.4

### Patch Changes

- [#2883](https://github.com/serverless-stack/sst/pull/2883) [`393cdfcb2`](https://github.com/serverless-stack/sst/commit/393cdfcb2d754482c7ea78fc6274c4d87b04aa23) Thanks [@justindra](https://github.com/justindra)! - Added SpotifyAdapter for future auth

## 2.11.3

### Patch Changes

- [`1017fe643`](https://github.com/serverless-stack/sst/commit/1017fe64396cfb3eb5a52124898c01cb0a15b5fb) Thanks [@thdxr](https://github.com/thdxr)! - Typesafe event framework

## 2.11.2

### Patch Changes

- [`09cdb39e9`](https://github.com/serverless-stack/sst/commit/09cdb39e94fa3e52f6ae3d47f81bdc54389cac2b) Thanks [@thdxr](https://github.com/thdxr)! - Add retrier capability to eventbus

## 2.11.1

### Patch Changes

- [`20e275619`](https://github.com/serverless-stack/sst/commit/20e2756196e09414e38d58dc058b80e739f65657) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: allow using sst bind at build time

- [`b2b07471b`](https://github.com/serverless-stack/sst/commit/b2b07471b5568e93353cb68c1ed05f225513bf3b) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix pinning to the latest minor version

- [`08a9d15ef`](https://github.com/serverless-stack/sst/commit/08a9d15efe723cf34bb61bedb9b5ce786305a8a3) Thanks [@fwang](https://github.com/fwang)! - sst bind: support --site and --script options to override mode

## 2.11.0

### Minor Changes

- [#2909](https://github.com/serverless-stack/sst/pull/2909) [`2f8b14b02`](https://github.com/serverless-stack/sst/commit/2f8b14b02104b3e1503253b1ee4f84ba2c60db2b) Thanks [@archieedwards](https://github.com/archieedwards)! - future/auth: add prompt support for oidc

- [#2917](https://github.com/serverless-stack/sst/pull/2917) [`6e4099d5e`](https://github.com/serverless-stack/sst/commit/6e4099d5e59dcec03515d3e197573be887f8c735) Thanks [@archieedwards](https://github.com/archieedwards)! - future/auth - forward query params to authorization endpoint

### Patch Changes

- [#2915](https://github.com/serverless-stack/sst/pull/2915) [`4ce2a9d12`](https://github.com/serverless-stack/sst/commit/4ce2a9d12890e1751daa6f3eecce4d165f1d1877) Thanks [@digitaltoad](https://github.com/digitaltoad)! - Allow filtering secrets by fallback values

- [`b603961f0`](https://github.com/serverless-stack/sst/commit/b603961f052fb5da18d1112c4f86469aaae19d66) Thanks [@thdxr](https://github.com/thdxr)! - fix migrations breaking when js is in the path name

- [#2916](https://github.com/serverless-stack/sst/pull/2916) [`fdcb548a1`](https://github.com/serverless-stack/sst/commit/fdcb548a1cac3ba02fb4b5021515e83afb713b02) Thanks [@justindra](https://github.com/justindra)! - Fix the missing padding due to color in secrets list

## 2.10.4

### Patch Changes

- [`b4366a240`](https://github.com/serverless-stack/sst/commit/b4366a240b831a0685e485c521a6b43d8cec7ffd) Thanks [@fwang](https://github.com/fwang)! - sst/node: improve error message when SST_APP is not found

## 2.10.3

### Patch Changes

- [`6203bdfe7`](https://github.com/serverless-stack/sst/commit/6203bdfe73feac4df0a6079de70c97d98a3293b2) Thanks [@thdxr](https://github.com/thdxr)! - Fix unhandled promise rejections from crashing the app

## 2.10.2

### Patch Changes

- [`0c4894a3f`](https://github.com/serverless-stack/sst/commit/0c4894a3f88e9d83430b7aed125efa240cd82a5a) Thanks [@fwang](https://github.com/fwang)! - SsrSite: allow overriding response header policy

## 2.10.1

### Patch Changes

- [`b87a96ffe`](https://github.com/serverless-stack/sst/commit/b87a96ffe2fb9d62754d025b0c950beec701d068) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: use 1.3.x instead of ~1.3.0 to pin minor OpenNext versions

## 2.10.0

### Minor Changes

- [`2b0c6760f`](https://github.com/serverless-stack/sst/commit/2b0c6760f4fcd2cbf8a3b62181b20e0615f6b31c) Thanks [@fwang](https://github.com/fwang)! - Update CDK to v2.79.1

## 2.9.0

### Minor Changes

- [#2902](https://github.com/serverless-stack/sst/pull/2902) [`e120a6c00`](https://github.com/serverless-stack/sst/commit/e120a6c0072c4be843a4686c68e2a429a5fb72cb) Thanks [@zvictor](https://github.com/zvictor)! - Add support for JSON format in secrets list

## 2.8.29

## 2.8.28

### Patch Changes

- [`f7f4a6ffc`](https://github.com/serverless-stack/sst/commit/f7f4a6ffc3c150a8f2e09e9d2136b5669b675fcd) Thanks [@thdxr](https://github.com/thdxr)! - fix job construct path problems when deployed from windows

## 2.8.27

### Patch Changes

- [`7fb657e0e`](https://github.com/serverless-stack/sst/commit/7fb657e0ea08cfdabe4fec2577bf8cd71d7f4e9a) Thanks [@thdxr](https://github.com/thdxr)! - fix connect command by including iam client

## 2.8.26

### Patch Changes

- [`7935511eb`](https://github.com/serverless-stack/sst/commit/7935511eba607294c7953c2afb9fa03270ac252b) Thanks [@thdxr](https://github.com/thdxr)! - sst update fix for svelte-kit-sst

## 2.8.25

### Patch Changes

- [`e0522a7b4`](https://github.com/serverless-stack/sst/commit/e0522a7b47c8af340b504da927348c443ee75d58) Thanks [@thdxr](https://github.com/thdxr)! - automatically set graphql endpoint if not manually set

## 2.8.24

### Patch Changes

- [#2817](https://github.com/serverless-stack/sst/pull/2817) [`2aec504bf`](https://github.com/serverless-stack/sst/commit/2aec504bfd5145d36c510171af207dbeca682e5f) Thanks [@justindra](https://github.com/justindra)! - Updated the function binding to include httpsUrl as that is required to send messages using the ApiGateway client

- [#2817](https://github.com/serverless-stack/sst/pull/2817) [`2aec504bf`](https://github.com/serverless-stack/sst/commit/2aec504bfd5145d36c510171af207dbeca682e5f) Thanks [@justindra](https://github.com/justindra)! - Added WebSocketApiHandler so that we can use the auth sessions inside of a WebSocket's connect and disconnect requests

- [#2817](https://github.com/serverless-stack/sst/pull/2817) [`2aec504bf`](https://github.com/serverless-stack/sst/commit/2aec504bfd5145d36c510171af207dbeca682e5f) Thanks [@justindra](https://github.com/justindra)! - Added a new WebSocketApiHandler to allow for websockets to use session hooks

- [`a8444e766`](https://github.com/serverless-stack/sst/commit/a8444e76607256fc8428b376647d2d15887ee370) Thanks [@thdxr](https://github.com/thdxr)! - fix: job construct erroring when timeout set to greater than 15min

- [#2879](https://github.com/serverless-stack/sst/pull/2879) [`5a8e115ff`](https://github.com/serverless-stack/sst/commit/5a8e115ffdb48bbc0177ef9261f48bdc3b376cb7) Thanks [@estyrke](https://github.com/estyrke)! - Replace zip-local package with adm-zip

- [#2889](https://github.com/serverless-stack/sst/pull/2889) [`78cbdd721`](https://github.com/serverless-stack/sst/commit/78cbdd721429b505daf0360d2698cdac74166c10) Thanks [@mvanleest](https://github.com/mvanleest)! - future/auth: Added Microsoft adapter

- [`522449fbd`](https://github.com/serverless-stack/sst/commit/522449fbde65cca9aa02ddd6ae503e85f68a5b8a) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: support warmer

## 2.8.23

### Patch Changes

- [`c590bf380`](https://github.com/serverless-stack/sst/commit/c590bf380bffd51f1625de1f0bc408d573438c8c) Thanks [@fwang](https://github.com/fwang)! - SvelteKitSite: construct function handler in posix format

- [#2880](https://github.com/serverless-stack/sst/pull/2880) [`1f6af6a20`](https://github.com/serverless-stack/sst/commit/1f6af6a20c5f34d649e4d685f817f652dca9492b) Thanks [@tyrauber](https://github.com/tyrauber)! - SsrSite: merge user defined CloudFront function definitions

## 2.8.22

## 2.8.21

### Patch Changes

- [`ee5339521`](https://github.com/serverless-stack/sst/commit/ee53395212a045584fa97bac7f77ea8cb5674458) Thanks [@thdxr](https://github.com/thdxr)! - Temporary fix for DNS issue when fetching metadata

- [#2878](https://github.com/serverless-stack/sst/pull/2878) [`848ae7fdd`](https://github.com/serverless-stack/sst/commit/848ae7fdd42b3f80fe5854ec2f28b794bc6ea45a) Thanks [@jamesgibbons92](https://github.com/jamesgibbons92)! - Cli: do not remove config files created by concurrent SST processes

- [`73cff4132`](https://github.com/serverless-stack/sst/commit/73cff4132ec2787ecc27b3eeb8607f5d716d6521) Thanks [@fwang](https://github.com/fwang)! - Job: use posix import path on Windows

## 2.8.20

### Patch Changes

- [`78e25f4ad`](https://github.com/serverless-stack/sst/commit/78e25f4addf5d0ce1eebeb452ce791a0773add9f) Thanks [@fwang](https://github.com/fwang)! - Job: apply nodejs options to local invoker

## 2.8.19

### Patch Changes

- [`0517859dd`](https://github.com/serverless-stack/sst/commit/0517859dd87794bbdc374ef4d0abd6f7558be323) Thanks [@thdxr](https://github.com/thdxr)! - Add copyFile support to sst.Job

## 2.8.18

## 2.8.17

### Patch Changes

- [#2835](https://github.com/serverless-stack/sst/pull/2835) [`ed60bd35a`](https://github.com/serverless-stack/sst/commit/ed60bd35add0cc7e88f769ef6a4e4179cb73c62b) Thanks [@danestves](https://github.com/danestves)! - RemixSite: update RemixConfig to prep for Remix v2

## 2.8.16

### Patch Changes

- [`a14a16acb`](https://github.com/serverless-stack/sst/commit/a14a16acb5fa4cd74b515b653d3670af20a2fc62) Thanks [@thdxr](https://github.com/thdxr)! - Upgrade kysely-data-api

## 2.8.15

## 2.8.14

## 2.8.13

### Patch Changes

- [`c15bf9aac`](https://github.com/serverless-stack/sst/commit/c15bf9aac359cd5e66b4e940df0c3d15cd644d43) Thanks [@fwang](https://github.com/fwang)! - Script: add "version" prop to control when the script runs

- [`b42de5112`](https://github.com/serverless-stack/sst/commit/b42de51122483bbf7069b370982f242794965776) Thanks [@fwang](https://github.com/fwang)! - Add option to disable parameterized stack name check

- [#2775](https://github.com/serverless-stack/sst/pull/2775) [`b6d2300d4`](https://github.com/serverless-stack/sst/commit/b6d2300d46c813a6500d131d887f849de39f2403) Thanks [@aphex](https://github.com/aphex)! - Sites: add ability to set site url in "sst dev" mode

## 2.8.12

### Patch Changes

- [`c3e5acdc3`](https://github.com/serverless-stack/sst/commit/c3e5acdc3758a1f8b008206323b8dbb45ea704d0) Thanks [@fwang](https://github.com/fwang)! - SvelteKitSite: update adapter output destination

## 2.8.11

### Patch Changes

- [`ae4af45db`](https://github.com/serverless-stack/sst/commit/ae4af45db4dbeb8a850161c32ba446577e11370e) Thanks [@fwang](https://github.com/fwang)! - SvelteKitSite: set "SST" build time environment variable

- [`21d49d5a4`](https://github.com/serverless-stack/sst/commit/21d49d5a4fd711e6322415da7b9bb8ed5f4a0de8) Thanks [@fwang](https://github.com/fwang)! - Job: show build errors on build failure

## 2.8.10

### Patch Changes

- [`b85fe2ed1`](https://github.com/serverless-stack/sst/commit/b85fe2ed1d96b45420f935281e0eac025648b3f3) Thanks [@fwang](https://github.com/fwang)! - Bucket: set default options to allow public ACLs and enable CORS

## 2.8.9

### Patch Changes

- [`f29249879`](https://github.com/serverless-stack/sst/commit/f29249879ccf9fd30c79f66d07419eec74ace3be) Thanks [@fwang](https://github.com/fwang)! - Bucket: set default options to allow public access and enable CORS

## 2.8.8

### Patch Changes

- [#2348](https://github.com/serverless-stack/sst/pull/2348) [`9a2142bba`](https://github.com/serverless-stack/sst/commit/9a2142bba0322be32e8d7cb0045c23b256672eb3) Thanks [@hoangnd25](https://github.com/hoangnd25)! - StaticSite: support importing existing CloudFront distribution

- [#2812](https://github.com/serverless-stack/sst/pull/2812) [`9dae0be56`](https://github.com/serverless-stack/sst/commit/9dae0be565729d3be3122f1b4ebdc0199e1b44cc) Thanks [@jlanzarotti](https://github.com/jlanzarotti)! - Cognito: expose cfnIdentityPoolRoleAttachment prop

- [#2849](https://github.com/serverless-stack/sst/pull/2849) [`2e71c9726`](https://github.com/serverless-stack/sst/commit/2e71c97269b8ccac612cf9b93a20186be3e357e5) Thanks [@danecwalker](https://github.com/danecwalker)! - SsrSite: Fix dev server role cannot be assumed by Lambda

## 2.8.7

### Patch Changes

- [`69662a713`](https://github.com/serverless-stack/sst/commit/69662a7132fcb4316547333b260714ee6880af4e) Thanks [@fwang](https://github.com/fwang)! - SsrSite: allow principles from the same AWS account to assume the dev role

## 2.8.6

### Patch Changes

- [#2831](https://github.com/serverless-stack/sst/pull/2831) [`ce5ce44c8`](https://github.com/serverless-stack/sst/commit/ce5ce44c8491eb7021288356f90e47681e0f5cb9) Thanks [@estyrke](https://github.com/estyrke)! - Allow packages to be marked as "internal" for Pothos extractor

- [#2837](https://github.com/serverless-stack/sst/pull/2837) [`8a684c5a9`](https://github.com/serverless-stack/sst/commit/8a684c5a96e2e17e8a2b42a5666db10946f6fdf6) Thanks [@deb-oliveira](https://github.com/deb-oliveira)! - [Fix/Dotnet]: enable the selection of dotnet6 bootstrap and secure input.out with quotes

- [#2831](https://github.com/serverless-stack/sst/pull/2831) [`ce5ce44c8`](https://github.com/serverless-stack/sst/commit/ce5ce44c8491eb7021288356f90e47681e0f5cb9) Thanks [@estyrke](https://github.com/estyrke)! - Allow for Pothos extractor to consider some packages as "internal"

- [`d54d31884`](https://github.com/serverless-stack/sst/commit/d54d31884b5a10c7a7e133e29ea49e4f8863954b) Thanks [@thdxr](https://github.com/thdxr)! - upgrade kysely-codegen

## 2.8.5

### Patch Changes

- [`f0dbf9c84`](https://github.com/serverless-stack/sst/commit/f0dbf9c84785049c529c2215093a8a84f51bb6db) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: use OpenNext v1.2.x

- [`5debc11a7`](https://github.com/serverless-stack/sst/commit/5debc11a7f0b4af68c50c716adf3e1ab968605bf) Thanks [@fwang](https://github.com/fwang)! - Sites: fix files not uploaded to s3

## 2.8.4

### Patch Changes

- [`c3c712bb1`](https://github.com/serverless-stack/sst/commit/c3c712bb1e19633fc6040fabd499a5d881f9d165) Thanks [@thdxr](https://github.com/thdxr)! - fixed issue with job data not loading correctly

## 2.8.3

### Patch Changes

- [`ac7622928`](https://github.com/serverless-stack/sst/commit/ac7622928998c438f4645f38bef6a038b309b061) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: add "accpet", "rsc", and state tree headers to cache policy

## 2.8.2

### Patch Changes

- [`f239e3292`](https://github.com/serverless-stack/sst/commit/f239e3292b6a379c20472717574120c470ba0b55) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix dev mode placeholder function path

## 2.8.1

### Patch Changes

- [`6cd6c2d1e`](https://github.com/serverless-stack/sst/commit/6cd6c2d1eae10979fabdfad6912e61a3c7211e3f) Thanks [@fwang](https://github.com/fwang)! - Add support for SvelteKit

## 2.8.0

### Minor Changes

- [#2824](https://github.com/serverless-stack/sst/pull/2824) [`eebce13c1`](https://github.com/serverless-stack/sst/commit/eebce13c18cb51f2fd6ead53492ed5d8fc375040) Thanks [@fwang](https://github.com/fwang)! - Add support for SvelteKit

### Patch Changes

- [`986f01505`](https://github.com/serverless-stack/sst/commit/986f015058f9e314f166b3277d9961356fa9e05a) Thanks [@fwang](https://github.com/fwang)! - SsrSite: server function do not inherit default function props

- [`42ab9acbe`](https://github.com/serverless-stack/sst/commit/42ab9acbee06ade79774c2d1b3f58a78e2f62a7f) Thanks [@fwang](https://github.com/fwang)! - Function: handle Rate Exceeded error setting log retention

## 2.7.2

### Patch Changes

- [`17314466a`](https://github.com/serverless-stack/sst/commit/17314466aaf4f72c23ba28d50a35cfbdc3a3ee45) Thanks [@thdxr](https://github.com/thdxr)! - Gracefully handle dangling invocations

- [`d7e469c93`](https://github.com/serverless-stack/sst/commit/d7e469c934971926edbbebcc27411c11e0a13202) Thanks [@fwang](https://github.com/fwang)! - sst deploy: do not prompt mode change in CI environment

- [`179483f6c`](https://github.com/serverless-stack/sst/commit/179483f6c1dc5a7e0885d0f793429badfa188d5b) Thanks [@fwang](https://github.com/fwang)! - Function: remove hardcoding ARN partition to "aws"

- [#2805](https://github.com/serverless-stack/sst/pull/2805) [`4713910a3`](https://github.com/serverless-stack/sst/commit/4713910a3afd1958ee8e47259959704d644a23c7) Thanks [@theodiablo](https://github.com/theodiablo)! - deprecated/NextjsSite: fix custom resource import path

- [`8cd24268f`](https://github.com/serverless-stack/sst/commit/8cd24268f415a0d862e9ab6db5c711970e1f9172) Thanks [@fwang](https://github.com/fwang)! - sst diff: handle new stacks added

- [`514cd63f9`](https://github.com/serverless-stack/sst/commit/514cd63f9ff102b275b2833f0581741ead9547ce) Thanks [@fwang](https://github.com/fwang)! - AppSyncApi: support using A/AAAA record for custom domain

## 2.7.1

### Patch Changes

- [`74395668f`](https://github.com/serverless-stack/sst/commit/74395668f1533b3f06777b5394990932f497cf91) Thanks [@thdxr](https://github.com/thdxr)! - Fix issue with root Auth route

## 2.7.0

### Minor Changes

- [#2792](https://github.com/serverless-stack/sst/pull/2792) [`4983573a3`](https://github.com/serverless-stack/sst/commit/4983573a35f47503d83ed1d7aa108d65ce6ccd9e) Thanks [@estyrke](https://github.com/estyrke)! - Small fixes to future/auth

## 2.6.0

### Minor Changes

- [`19fa6919c`](https://github.com/serverless-stack/sst/commit/19fa6919cdca5148c70d8aa3562675f1ae0e7830) Thanks [@thdxr](https://github.com/thdxr)! - Remove side-effects from node package for more granular bundling

### Patch Changes

- [#2784](https://github.com/serverless-stack/sst/pull/2784) [`b08bd7ba9`](https://github.com/serverless-stack/sst/commit/b08bd7ba9acf2be25d248eb951dad46adeb86df0) Thanks [@michaelgmcd](https://github.com/michaelgmcd)! - GraphQLHandler: replace graphql-helix with graphql-yoga

## 2.5.8

### Patch Changes

- [`d4671b05c`](https://github.com/serverless-stack/sst/commit/d4671b05caf089a8a48fc13bdf9e096c763a798a) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: support OpenNext 1.1.0

- [#2544](https://github.com/serverless-stack/sst/pull/2544) [`3b5263753`](https://github.com/serverless-stack/sst/commit/3b52637532ed610d41cc80a83cbe8e250b07614c) Thanks [@andynaguyen](https://github.com/andynaguyen)! - sst secrets: load secrets from .env files

- [`d4671b05c`](https://github.com/serverless-stack/sst/commit/d4671b05caf089a8a48fc13bdf9e096c763a798a) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: set "x-forwarded-host" header in CF function

## 2.5.7

### Patch Changes

- [`e8bf6d127`](https://github.com/serverless-stack/sst/commit/e8bf6d127f8e84953e5ec21a1c4e1f26d391bfd0) Thanks [@fwang](https://github.com/fwang)! - sst bind: kill entire process tree on restart

- [`5203cccd1`](https://github.com/serverless-stack/sst/commit/5203cccd1d2c138c00af8d6d277075497a1d01f9) Thanks [@fwang](https://github.com/fwang)! - Retry AWS SDK calls on interrupted internet connection

## 2.5.6

### Patch Changes

- [`0636496a2`](https://github.com/serverless-stack/sst/commit/0636496a287b61bde5f4af5874a7fb547c3a9364) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix sst dev error when enableLiveDev is set to false

- [`1e7c32887`](https://github.com/serverless-stack/sst/commit/1e7c328877e8d4fc0cd3561c6e2b172266ab2820) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix permissions not attached to placeholder server function

- [`2f16a73da`](https://github.com/serverless-stack/sst/commit/2f16a73daf77c800dc2b65bb2ebfe4d29a0e76fb) Thanks [@fwang](https://github.com/fwang)! - sst secrets: fix ssmPrefix is not respected

- [`5cd2d4fde`](https://github.com/serverless-stack/sst/commit/5cd2d4fded67969e6dd6befd125d3c6f402dd0d8) Thanks [@fwang](https://github.com/fwang)! - Sanitize stage names with invalid characters

## 2.5.5

### Patch Changes

- [`b22686bba`](https://github.com/serverless-stack/sst/commit/b22686bba1fba9abb00d536e2d8ed48fe6d7170a) Thanks [@fwang](https://github.com/fwang)! - sst bind: handle old stack metadata

- [`42c6b5f14`](https://github.com/serverless-stack/sst/commit/42c6b5f14d3f6734948e51c6a1d3420cf1650111) Thanks [@fwang](https://github.com/fwang)! - sst version: print constructs version

- [`fe6103a40`](https://github.com/serverless-stack/sst/commit/fe6103a406d17384c422469c9298f7b60a4c6c83) Thanks [@fwang](https://github.com/fwang)! - Job: support vps security groups and subnet selection

## 2.5.4

### Patch Changes

- [#2780](https://github.com/serverless-stack/sst/pull/2780) [`ea7e565fe`](https://github.com/serverless-stack/sst/commit/ea7e565fee7c7b8d08eb08339f1a0d15636132cd) Thanks [@Bhavikpatel576](https://github.com/Bhavikpatel576)! - Disable Introspection in GraphQL Helix

- [`7bb418200`](https://github.com/serverless-stack/sst/commit/7bb4182009dfabe6b0cfa93b332bd7c4f54d5dbc) Thanks [@fwang](https://github.com/fwang)! - ApiGatewayV1Api: support binding imported API

- [`01d40bf3a`](https://github.com/serverless-stack/sst/commit/01d40bf3a89fb9ad1c318f96fed0ee409c599224) Thanks [@thdxr](https://github.com/thdxr)! - Handle symlink errors

- [`9b4593bf1`](https://github.com/serverless-stack/sst/commit/9b4593bf1def9be46da941881b232ef39ae2fc21) Thanks [@thdxr](https://github.com/thdxr)! - Fix error with top level URL in banner

## 2.5.3

### Patch Changes

- [`4fc2a79d3`](https://github.com/serverless-stack/sst/commit/4fc2a79d3da9aa905ab77ee0ee44da0e93e8eb08) Thanks [@thdxr](https://github.com/thdxr)! - More restrictive s3 permissions for dev functions

- [`b78571ccd`](https://github.com/serverless-stack/sst/commit/b78571ccda247986aeb3f04715dac3f508b842aa) Thanks [@thdxr](https://github.com/thdxr)! - Make sure function build events are printed

- [#2758](https://github.com/serverless-stack/sst/pull/2758) [`1e9dd488d`](https://github.com/serverless-stack/sst/commit/1e9dd488d872762e27f5832f1728454f9bb38568) Thanks [@jensonb](https://github.com/jensonb)! - Reduced IOT message chunk size to fix Live Lambda bug (#2723)

- [`9d97ab8d7`](https://github.com/serverless-stack/sst/commit/9d97ab8d7e2bbcc306ef24935ad6dea22a5e9448) Thanks [@thdxr](https://github.com/thdxr)! - Cleanup hanging .sst.config files

- [`9d97ab8d7`](https://github.com/serverless-stack/sst/commit/9d97ab8d7e2bbcc306ef24935ad6dea22a5e9448) Thanks [@thdxr](https://github.com/thdxr)! - Properly ignore telemetry errors

## 2.5.2

### Patch Changes

- [`d7729bbbb`](https://github.com/serverless-stack/sst/commit/d7729bbbbe5ba50d6585d28a37ff0392c558b9d8) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: support 404 pages

- [#2759](https://github.com/serverless-stack/sst/pull/2759) [`372ff2deb`](https://github.com/serverless-stack/sst/commit/372ff2deb7a8368f427318a67bd2e12d17cd59d5) Thanks [@kevinggrimm](https://github.com/kevinggrimm)! - Add support for relative python imports

## 2.5.1

## 2.5.0

### Minor Changes

- [#2755](https://github.com/serverless-stack/sst/pull/2755) [`5d206930e`](https://github.com/serverless-stack/sst/commit/5d206930ef832a0a1b2fb7956239d74e03f8ff30) Thanks [@fwang](https://github.com/fwang)! - Update CDK to 2.72.1

## 2.4.3

### Patch Changes

- [`399c99f62`](https://github.com/serverless-stack/sst/commit/399c99f621532c9f8cb241f0cbe34f9bf202985e) Thanks [@thdxr](https://github.com/thdxr)! - Fix empty output on sst diff

## 2.4.2

### Patch Changes

- [#2721](https://github.com/serverless-stack/sst/pull/2721) [`6ef0bb4be`](https://github.com/serverless-stack/sst/commit/6ef0bb4be6dfdbf2ada7aa7c702010af2e2fa777) Thanks [@tmianhill](https://github.com/tmianhill)! - fix go build for Win32 #2719

- [`def4665db`](https://github.com/serverless-stack/sst/commit/def4665db960a67e5cfd32115922c2bf36fdbb51) Thanks [@thdxr](https://github.com/thdxr)! - More kysely codegen logs

## 2.4.1

### Patch Changes

- [`5dfe3f7f5`](https://github.com/serverless-stack/sst/commit/5dfe3f7f54b191860f1de366df1a6bd23c33891d) Thanks [@fwang](https://github.com/fwang)! - sst/node: distinguish between secrets not set vs not found

- [#2731](https://github.com/serverless-stack/sst/pull/2731) [`563ca24c3`](https://github.com/serverless-stack/sst/commit/563ca24c3dfa0d531c895bd03f5db948678d9911) Thanks [@khuezy](https://github.com/khuezy)! - sst/node: top level await without assignment build error

- [`bdbcce1e1`](https://github.com/serverless-stack/sst/commit/bdbcce1e1bcb699c318cddb7f6808ce61fcbcd66) Thanks [@fwang](https://github.com/fwang)! - sst bind: add strict checking for solid-start in vite.config

- [#2740](https://github.com/serverless-stack/sst/pull/2740) [`79b84a1cf`](https://github.com/serverless-stack/sst/commit/79b84a1cf54d7e36dc4bf7708bba0ad6e04498b3) Thanks [@Brian-Azizi](https://github.com/Brian-Azizi)! - NextjsSite: pin minor OpenNext version

## 2.4.0

### Minor Changes

- [#2736](https://github.com/serverless-stack/sst/pull/2736) [`8ff508f44`](https://github.com/serverless-stack/sst/commit/8ff508f448ae1e54e39c22c90424b85bb42c253d) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: support OpenNext v0.8.0

- [#2736](https://github.com/serverless-stack/sst/pull/2736) [`8ff508f44`](https://github.com/serverless-stack/sst/commit/8ff508f448ae1e54e39c22c90424b85bb42c253d) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: support edge mode

## 2.3.7

### Patch Changes

- [#2730](https://github.com/serverless-stack/sst/pull/2730) [`80312d49c`](https://github.com/serverless-stack/sst/commit/80312d49c6cc62a4f03dcab5f4e57259eb1ba5ef) Thanks [@justindra](https://github.com/justindra)! - Added Facebook Adapter into future auth

- [`25ea7eff8`](https://github.com/serverless-stack/sst/commit/25ea7eff864e89fb14fbe0f3763bad959eae6ad5) Thanks [@thdxr](https://github.com/thdxr)! - Export issue from auth

## 2.3.6

### Patch Changes

- [`d928120d2`](https://github.com/serverless-stack/sst/commit/d928120d272fdce39376a9362d5a2b00085e7f6e) Thanks [@fwang](https://github.com/fwang)! - sst bind: set correct exit code

## 2.3.5

## 2.3.4

### Patch Changes

- [`4318b5c72`](https://github.com/serverless-stack/sst/commit/4318b5c727c4341073edab8da5009de031aaf324) Thanks [@fwang](https://github.com/fwang)! - sst bind: handle chained roles has max session duration of 1hr

## 2.3.3

### Patch Changes

- [`36fcf1cb8`](https://github.com/serverless-stack/sst/commit/36fcf1cb8c64a0311bc0751b842c62cd3595634c) Thanks [@thdxr](https://github.com/thdxr)! - File watcher should ignore git folder

## 2.3.2

### Patch Changes

- [`2a5eb1893`](https://github.com/serverless-stack/sst/commit/2a5eb1893377821d2bd25a83ee374df784266b05) Thanks [@fwang](https://github.com/fwang)! - CLI: update primary color to distinguish from error red

- [`73fc2fa6f`](https://github.com/serverless-stack/sst/commit/73fc2fa6f953ac3575a6755058b11622f8cdae06) Thanks [@fwang](https://github.com/fwang)! - bootstrap: support setting custom permissions boundary

- [#2710](https://github.com/serverless-stack/sst/pull/2710) [`6f59768f6`](https://github.com/serverless-stack/sst/commit/6f59768f6dee24d6d82ae67c993ba9a3ebbb3058) Thanks [@fwang](https://github.com/fwang)! - sst bind: fix command not exiting

- [`a2bb76f1c`](https://github.com/serverless-stack/sst/commit/a2bb76f1c6db138f6823837232fa4029ea2a9a55) Thanks [@fwang](https://github.com/fwang)! - AppSyncApi: support OpenSource data source

- [`6e3ae2054`](https://github.com/serverless-stack/sst/commit/6e3ae2054d945897da05e34d9663dc08340f7d42) Thanks [@fwang](https://github.com/fwang)! - Stack: ignore instead of throw on undefined stack output value

- [`c40be2c74`](https://github.com/serverless-stack/sst/commit/c40be2c748f08c00562f9eff4aa683f1f7dd5ca8) Thanks [@fwang](https://github.com/fwang)! - sst dev: print start frontend commands

## 2.3.1

### Patch Changes

- [`2872eb4ac`](https://github.com/serverless-stack/sst/commit/2872eb4ac10a7fc68d20aa8470340ddea43f379f) Thanks [@fwang](https://github.com/fwang)! - deprecated/NextjsSite: fix invalid file path

- [`f4cd2559f`](https://github.com/serverless-stack/sst/commit/f4cd2559f1d373b1dcf0fd22dc9eb8c9253c4c55) Thanks [@thdxr](https://github.com/thdxr)! - Properly throw errors when monitoring stacks fails

## 2.3.0

### Minor Changes

- [#2703](https://github.com/serverless-stack/sst/pull/2703) [`9aa0b7a9f`](https://github.com/serverless-stack/sst/commit/9aa0b7a9f6364a7dfc5f85c713c66687f71110e7) Thanks [@fwang](https://github.com/fwang)! - sst bind: support binding SSR sites

## 2.2.8

### Patch Changes

- [`dd755650f`](https://github.com/serverless-stack/sst/commit/dd755650ff863825af7c241b6516f2c28bda2acd) Thanks [@fwang](https://github.com/fwang)! - sst bootstrap: bootstrap CDK if required

## 2.2.7

### Patch Changes

- [`3977db3f1`](https://github.com/serverless-stack/sst/commit/3977db3f1dd61d71da2fda74edbc25c4ae05d579) Thanks [@fwang](https://github.com/fwang)! - Handle AWS SDK retry failure due to depleted retry tokens

- [`561a1eff3`](https://github.com/serverless-stack/sst/commit/561a1eff35730cb3637448a7a8cfc517c9601c9d) Thanks [@thdxr](https://github.com/thdxr)! - Include stage name in warnings

## 2.2.6

## 2.2.5

### Patch Changes

- [`a6cb8e633`](https://github.com/serverless-stack/sst/commit/a6cb8e633a045aaf723f3ccd64cf348faa2d8bf0) Thanks [@thdxr](https://github.com/thdxr)! - Ignore errors during kysely codegen

## 2.2.4

### Patch Changes

- [`d3b50eed3`](https://github.com/serverless-stack/sst/commit/d3b50eed30790d30c4940f048099b6ae19cf8922) Thanks [@fwang](https://github.com/fwang)! - AppSyncApi: do not bind imported API

- [`c06523416`](https://github.com/serverless-stack/sst/commit/c0652341667959c53eab7f0022a9c6b6501bf791) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: support customizing defaultBehavior

## 2.2.3

### Patch Changes

- [`e836f2d41`](https://github.com/serverless-stack/sst/commit/e836f2d41f97a1ad5f88da7907dff658e72645c4) Thanks [@thdxr](https://github.com/thdxr)! - Allow spaces in folder names go runtime

- [`263c1eff3`](https://github.com/serverless-stack/sst/commit/263c1eff39d19130c56061298387ba4b76c4b81d) Thanks [@thdxr](https://github.com/thdxr)! - Update to ink4 and React 18

- [`6eb618478`](https://github.com/serverless-stack/sst/commit/6eb618478c759305d908ce6213123c505bc2eb0b) Thanks [@thdxr](https://github.com/thdxr)! - Make sure update command exits

## 2.2.2

### Patch Changes

- [`e7107261c`](https://github.com/serverless-stack/sst/commit/e7107261c1110423e27bae0d494fd36942d9d9a2) Thanks [@thdxr](https://github.com/thdxr)! - Support calling useSession in auth function itself

## 2.2.1

### Patch Changes

- [#2604](https://github.com/serverless-stack/sst/pull/2604) [`72cfe68d3`](https://github.com/serverless-stack/sst/commit/72cfe68d3f4eba13edb01ceec3b3418c58f01bda) Thanks [@DCzajkowski](https://github.com/DCzajkowski)! - Fix `sst dev` Node runtime not having all lambda `context` values

- [#2646](https://github.com/serverless-stack/sst/pull/2646) [`4062b3769`](https://github.com/serverless-stack/sst/commit/4062b3769edda28bf94ab5d65f0fb56153c89cbd) Thanks [@DCzajkowski](https://github.com/DCzajkowski)! - Fixed local lambda runtime having access to local env variables

- [`19137504e`](https://github.com/serverless-stack/sst/commit/19137504eec4ae361359fd05eaf19679028ca522) Thanks [@thdxr](https://github.com/thdxr)! - Fixed missing archiver dependency

- [#2677](https://github.com/serverless-stack/sst/pull/2677) [`16a936e38`](https://github.com/serverless-stack/sst/commit/16a936e38e56f5f88c5de7a9c07527949d36f7be) Thanks [@justindra](https://github.com/justindra)! - Exported the Adapter type for future auth, so others can create their own custom adapters

## 2.2.0

### Minor Changes

- [`6e256f344`](https://github.com/serverless-stack/sst/commit/6e256f34402cbd3ef9f64afda036cdb2a64d03d1) Thanks [@thdxr](https://github.com/thdxr)! - Switch to using sst-aws-cdk to patch aws-cdk specifying dependencies incorrectly in their package.json

### Patch Changes

- [`f994e0576`](https://github.com/serverless-stack/sst/commit/f994e057619e51a3b460a6c42abfc8328d9d350d) Thanks [@fwang](https://github.com/fwang)! - sst deploy: skip building Functions and Sites in non-matched stacks

- [`484daf51c`](https://github.com/serverless-stack/sst/commit/484daf51c592a6a7bb46120ef0d0a2cfb3afe7ad) Thanks [@fwang](https://github.com/fwang)! - Function: update runtime property after deferred task

- [#2673](https://github.com/serverless-stack/sst/pull/2673) [`a32692ae3`](https://github.com/serverless-stack/sst/commit/a32692ae352fdc8d23bb013fd17d215413e73464) Thanks [@elonniu](https://github.com/elonniu)! - Bootstrap: use Nodejs16.x runtime in China regions

- [`1ba0f4716`](https://github.com/serverless-stack/sst/commit/1ba0f471682196d53ca86aaf6140dca62da7d6ad) Thanks [@fwang](https://github.com/fwang)! - EventBus: support LogGroup targets

- [`88c7c2e81`](https://github.com/serverless-stack/sst/commit/88c7c2e81376830d61f43fadcd4b800955760e86) Thanks [@fwang](https://github.com/fwang)! - sst remove: update removing loading sign copy

## 2.1.35

### Patch Changes

- [`fd30b0341`](https://github.com/serverless-stack/sst/commit/fd30b034121fd0708d2a96d16aab6242ccd798c0) Thanks [@fwang](https://github.com/fwang)! - CLI: handle AWS SDK throttled requests

## 2.1.34

### Patch Changes

- [`2f8879950`](https://github.com/serverless-stack/sst/commit/2f8879950d9c8652b7d7d80c9f85ab96c68d3b63) Thanks [@fwang](https://github.com/fwang)! - Job: support logRetention setting

## 2.1.33

### Patch Changes

- [`0d2c33ec5`](https://github.com/serverless-stack/sst/commit/0d2c33ec50b1e695f1fc8e22929b4930f6d31cbf) Thanks [@thdxr](https://github.com/thdxr)! - Route live dev payloads over 3mb through S3

## 2.1.32

### Patch Changes

- [#2661](https://github.com/serverless-stack/sst/pull/2661) [`f51d90684`](https://github.com/serverless-stack/sst/commit/f51d90684827da353048bb48c19f331c8b5253fb) Thanks [@justindra](https://github.com/justindra)! - Updated the return page to have a table with all of the clients and input providers

- [#2661](https://github.com/serverless-stack/sst/pull/2661) [`f51d90684`](https://github.com/serverless-stack/sst/commit/f51d90684827da353048bb48c19f331c8b5253fb) Thanks [@justindra](https://github.com/justindra)! - Fixed future Auth redirection to go to port 3000 instead of 300

- [`0fee5241b`](https://github.com/serverless-stack/sst/commit/0fee5241b87441e558c68f5c9ec1a4928a0e11f5) Thanks [@fwang](https://github.com/fwang)! - CLI: retry on throttling errors

## 2.1.31

### Patch Changes

- [`77b09c3d9`](https://github.com/serverless-stack/sst/commit/77b09c3d9429f87db38d2e7b6f9f8b446d010cf2) Thanks [@thdxr](https://github.com/thdxr)! - Support dynamic bootstrap stack name in console

## 2.1.30

### Patch Changes

- [`02c3e454c`](https://github.com/serverless-stack/sst/commit/02c3e454cbadb0e5fa35164c77206b4042ec8108) Thanks [@fwang](https://github.com/fwang)! - Support customizing SST and CDK bootstrap stack

## 2.1.29

## 2.1.28

### Patch Changes

- [#2656](https://github.com/serverless-stack/sst/pull/2656) [`7d8c6e149`](https://github.com/serverless-stack/sst/commit/7d8c6e149de29bcc071975a255944a338ac94062) Thanks [@fwang](https://github.com/fwang)! - Api: support AWS proxy route type

## 2.1.27

### Patch Changes

- [`fd1deffec`](https://github.com/serverless-stack/sst/commit/fd1deffecced1a84c4c7d088bbcc597ec55d1af8) Thanks [@thdxr](https://github.com/thdxr)! - Fixed issue with trying to codegen before RDS is fully up

## 2.1.26

### Patch Changes

- [`164ec076f`](https://github.com/serverless-stack/sst/commit/164ec076febaf7a51e8272c598e83f083a36daf5) Thanks [@thdxr](https://github.com/thdxr)! - Prevent app.finish from being called multiple times

- [`31f7d6cd7`](https://github.com/serverless-stack/sst/commit/31f7d6cd757285799c4825049328198f3548c0e7) Thanks [@thdxr](https://github.com/thdxr)! - Better message when iot errors happen

## 2.1.25

### Patch Changes

- [`1500d4311`](https://github.com/serverless-stack/sst/commit/1500d4311317bad611e2d922bd4d13fe5e6151e2) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: support --qualifier

## 2.1.24

### Patch Changes

- [`b0baaf0ee`](https://github.com/serverless-stack/sst/commit/b0baaf0eefd071190c73fbed3ea3fa724e80575d) Thanks [@thdxr](https://github.com/thdxr)! - IoT usage optimization by narrowing subscriptions

## 2.1.23

### Patch Changes

- [`1dcf6402b`](https://github.com/serverless-stack/sst/commit/1dcf6402bd7cddc87b9c4e592a1116482f6acc98) Thanks [@fwang](https://github.com/fwang)! - sst deploy/dev: retry on CDK DescribeStacks rate exceeded error

## 2.1.22

### Patch Changes

- [`ffbd20ca9`](https://github.com/serverless-stack/sst/commit/ffbd20ca91891075f9add628bff4bf51d0a51d59) Thanks [@thdxr](https://github.com/thdxr)! - Disconnect when multiple sst dev sessions are started for the same stage

- [`36c688ad7`](https://github.com/serverless-stack/sst/commit/36c688ad7ab35e945eefa1b3f437438ed35aea5c) Thanks [@fwang](https://github.com/fwang)! - WebSocketApi: fix API Gateway CloudWatch role permissions issue

## 2.1.21

### Patch Changes

- [`3ef9c7a18`](https://github.com/serverless-stack/sst/commit/3ef9c7a189f21afc93f04fc947c658f55111b3a8) Thanks [@fwang](https://github.com/fwang)! - Nodejs: auto detect and install sharp and pg-native as external

- [`761b6dfc7`](https://github.com/serverless-stack/sst/commit/761b6dfc70f30791f699b69badd1e00aaa9a92c0) Thanks [@fwang](https://github.com/fwang)! - SsrSite: support overriding esbuild config for SSR function

## 2.1.20

### Patch Changes

- [`7d7f20ae3`](https://github.com/serverless-stack/sst/commit/7d7f20ae3afb1093831769484452f5d41d411049) Thanks [@thdxr](https://github.com/thdxr)! - Fix issue where stdout messages were appearing under wrong request

## 2.1.19

### Patch Changes

- [`e5e2042f5`](https://github.com/serverless-stack/sst/commit/e5e2042f5bd648698b11078a56e54156c289852a) Thanks [@thdxr](https://github.com/thdxr)! - Fix for copyFiles breaking under sst dev when in nested folders

## 2.1.18

### Patch Changes

- [`3162e210c`](https://github.com/serverless-stack/sst/commit/3162e210c2d6a48837a6e77d39a04a9f4c9a143c) Thanks [@fwang](https://github.com/fwang)! - Stack: remove non-alphanumeric characters in stack output name

- [`f75000236`](https://github.com/serverless-stack/sst/commit/f75000236d83a7034e1b849e5cdc269415fa8d2a) Thanks [@fwang](https://github.com/fwang)! - [WIP] SsrSite: support resource binding in SSR functions

- [`ab3fdcef9`](https://github.com/serverless-stack/sst/commit/ab3fdcef9816a23d99c90791668a7b03dbacdb3b) Thanks [@thdxr](https://github.com/thdxr)! - Implement nodejs runtime using native http instead of undici

- [#2622](https://github.com/serverless-stack/sst/pull/2622) [`fdf922366`](https://github.com/serverless-stack/sst/commit/fdf92236620be4ba33fd7db990b2edc7a601e11b) Thanks [@z0d14c](https://github.com/z0d14c)! - bug: remove shell parameter when spawning sub-processes

## 2.1.17

### Patch Changes

- [#2590](https://github.com/serverless-stack/sst/pull/2590) [`1df37b1dc`](https://github.com/serverless-stack/sst/commit/1df37b1dc7707dbecf7e92d5b1fc7463eb725eae) Thanks [@thdxr](https://github.com/thdxr)! - Release next version of auth under `future` namespace for people who want to try it out early

## 2.1.16

### Patch Changes

- [`a9bd02b15`](https://github.com/serverless-stack/sst/commit/a9bd02b1513b7b8a42579fcff606a40e8a582151) Thanks [@thdxr](https://github.com/thdxr)! - Fix go builds failing without printing error

## 2.1.15

### Patch Changes

- [`8c6f70b3d`](https://github.com/serverless-stack/sst/commit/8c6f70b3dfe1b7b1351533f052397ea6b7f1c22c) Thanks [@fwang](https://github.com/fwang)! - Stack: allow stack outputs with same ids as construct

- [`a061a0d1f`](https://github.com/serverless-stack/sst/commit/a061a0d1f8df6cb9594d3bd37bd5ad314e044149) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: add --public-access-block-configuration option

- [`b44f579d4`](https://github.com/serverless-stack/sst/commit/b44f579d4f03ed08bf24e2de58310e74a357a1ae) Thanks [@fwang](https://github.com/fwang)! - WebSocketApi: grant execute-api:ManageConnections permissions on bind

## 2.1.14

### Patch Changes

- [#2616](https://github.com/serverless-stack/sst/pull/2616) [`ac124bc7e`](https://github.com/serverless-stack/sst/commit/ac124bc7ead276c1e7b351ebd70b3c57ff84e751) Thanks [@iloewensen](https://github.com/iloewensen)! - RDS: use AWS SDK v3 in migration script

## 2.1.13

### Patch Changes

- [`549b1628a`](https://github.com/serverless-stack/sst/commit/549b1628ae9eafc20a9d653bc58afc2330e9955a) Thanks [@thdxr](https://github.com/thdxr)! - Please upgrade to this version if possible, this contains an that prevents potentially run-away SQS retries under certain configurations when sst dev is not running.

- [#2609](https://github.com/serverless-stack/sst/pull/2609) [`7cfcc2160`](https://github.com/serverless-stack/sst/commit/7cfcc21602bfbffe02e8597d570e7dcb0015fce0) Thanks [@justindra](https://github.com/justindra)! - `sst update` now also updates the version of `astro-sst`

## 2.1.12

### Patch Changes

- [`37c0f4fed`](https://github.com/serverless-stack/sst/commit/37c0f4fed4c1468d78f70d9e26adab833aca1b02) Thanks [@fwang](https://github.com/fwang)! - sst dev/deploy: do not display "The following resource(s) failed" message

- [`225e2706b`](https://github.com/serverless-stack/sst/commit/225e2706b48fb1a73b55976e0a50bfadde22b7f6) Thanks [@fwang](https://github.com/fwang)! - Script: fail deployment if script fails to run

## 2.1.11

### Patch Changes

- [`7fcf20b42`](https://github.com/serverless-stack/sst/commit/7fcf20b42c787472e9c7fa2f6a192d0df165c633) Thanks [@fwang](https://github.com/fwang)! - Secrets: ignore function not found when metadata is out of sync

- [`b5b75aa2a`](https://github.com/serverless-stack/sst/commit/b5b75aa2a705fa6fbce4c9ef1cc05f199135f305) Thanks [@thdxr](https://github.com/thdxr)! - Handle exceptional esbuild error

## 2.1.10

### Patch Changes

- [`d2e7d097d`](https://github.com/serverless-stack/sst/commit/d2e7d097d186c68c5ebde1bdd1c56a9de4f31787) Thanks [@fwang](https://github.com/fwang)! - SsrSite: set "x-forwarded-host" using CloudFront function

- [#2584](https://github.com/serverless-stack/sst/pull/2584) [`f08ddd819`](https://github.com/serverless-stack/sst/commit/f08ddd819b36749f2e584639b9ab52b0c348e2ba) Thanks [@mattlootlabs](https://github.com/mattlootlabs)! - Use posix seperator when deploying python lambda

- [`4aefd10f6`](https://github.com/serverless-stack/sst/commit/4aefd10f6ddf8528b66a11ea48ce4d5972845623) Thanks [@fwang](https://github.com/fwang)! - Job: add esbuild options

## 2.1.9

### Patch Changes

- [#2602](https://github.com/serverless-stack/sst/pull/2602) [`e84d5c846`](https://github.com/serverless-stack/sst/commit/e84d5c84621e515d177819f6fb7144f2c24a661e) Thanks [@fwang](https://github.com/fwang)! - Api: fix access log field "cognitoIdentityId" not supported in us-west-2

## 2.1.8

### Patch Changes

- [#2599](https://github.com/serverless-stack/sst/pull/2599) [`4e7449b1f`](https://github.com/serverless-stack/sst/commit/4e7449b1f7efe9b22e6d63fbed5682a518e86c47) Thanks [@zackheil](https://github.com/zackheil)! - Removes `aws-crt` dependency to fix macOS crashes

## 2.1.7

### Patch Changes

- [`56c73fe8c`](https://github.com/serverless-stack/sst/commit/56c73fe8cd45ef3b85a0aa743b1fa78f613057b7) Thanks [@thdxr](https://github.com/thdxr)! - IOT performance upgrades

## 2.1.6

### Patch Changes

- [#2571](https://github.com/serverless-stack/sst/pull/2571) [`5d04dbcf8`](https://github.com/serverless-stack/sst/commit/5d04dbcf8b72cbeb841dfc858e38a1782916d67b) Thanks [@GinIsTheAnswer](https://github.com/GinIsTheAnswer)! - Ensure that output of path.relative uses posix separator

## 2.1.5

### Patch Changes

- [`746701795`](https://github.com/serverless-stack/sst/commit/746701795a62ee156944cc75528f1764d25487ad) Thanks [@thdxr](https://github.com/thdxr)! - Fix aws-sdk warning message

## 2.1.4

### Patch Changes

- [`3198bd91e`](https://github.com/serverless-stack/sst/commit/3198bd91ee8d7dc9e354a05b6bf63fc8b9dd481f) Thanks [@thdxr](https://github.com/thdxr)! - Upgrade to kysely data api v3

## 2.1.3

### Patch Changes

- [`42b49dd35`](https://github.com/serverless-stack/sst/commit/42b49dd351601152bd046b7d35f1586304d51ff7) Thanks [@fwang](https://github.com/fwang)! - RemixSite: fix nodejs18.x runtime error

## 2.1.2

### Patch Changes

- [#2566](https://github.com/serverless-stack/sst/pull/2566) [`2413cced5`](https://github.com/serverless-stack/sst/commit/2413cced523f35c330173aae1ecd2b5c8b79ce2d) Thanks [@afrackspace](https://github.com/afrackspace)! - Improve Python bundling speed

## 2.1.1

### Patch Changes

- [#2562](https://github.com/serverless-stack/sst/pull/2562) [`59f524e19`](https://github.com/serverless-stack/sst/commit/59f524e1904c3316c6883a331e8868a6032835af) Thanks [@georgeevans1995](https://github.com/georgeevans1995)! - Update KyselyTypeGenerator to use the correct dialect based on db engine

## 2.1.0

### Minor Changes

- [`3e3a4e440`](https://github.com/serverless-stack/sst/commit/3e3a4e440a8510eeb57cd83debcf8c759ccc533a) Thanks [@fwang](https://github.com/fwang)! - Drop support for Node.js 14

### Patch Changes

- [`79f744c79`](https://github.com/serverless-stack/sst/commit/79f744c79058c35f7b44f63fad7bdd088208b9c8) Thanks [@fwang](https://github.com/fwang)! - StaticSite/SsrSite: return undefined instead of throw when accessing site.cdk

- [#2564](https://github.com/serverless-stack/sst/pull/2564) [`608883ad5`](https://github.com/serverless-stack/sst/commit/608883ad5ff0931f4af68f8c941eaa9f3e463b35) Thanks [@fwang](https://github.com/fwang)! - StaticSite: append index.html to urls with trailing slash

## 2.0.39

### Patch Changes

- [`0f104cf36`](https://github.com/serverless-stack/sst/commit/0f104cf36ddb625ea3043480460f12400928a636) Thanks [@thdxr](https://github.com/thdxr)! - Fix CLI crash when kysely codegen fails

## 2.0.38

### Patch Changes

- [`8882f47ba`](https://github.com/serverless-stack/sst/commit/8882f47bab552a2cbae0a858acd4051636a5d536) Thanks [@thdxr](https://github.com/thdxr)! - Update aws dependencies

- [`13eb42c04`](https://github.com/serverless-stack/sst/commit/13eb42c041aceca3b221ae3fa60be21eea86e11a) Thanks [@thdxr](https://github.com/thdxr)! - Use docker to bundle python function

## 2.0.37

### Patch Changes

- [`2c332911f`](https://github.com/serverless-stack/sst/commit/2c332911ffa2ee6d6d459ab2464dc21cd04c9405) Thanks [@thdxr](https://github.com/thdxr)! - Send empty cognito identity when it's not available

- [#2548](https://github.com/serverless-stack/sst/pull/2548) [`4f9aa499d`](https://github.com/serverless-stack/sst/commit/4f9aa499dfc27541340781bd10d874db2700c7ab) Thanks [@afrackspace](https://github.com/afrackspace)! - Fix dev mode in GovCloud (SSTv2)

## 2.0.36

### Patch Changes

- [`429aa6fee`](https://github.com/serverless-stack/sst/commit/429aa6fee3b306aa3c79e4b44424e02f35fc291a) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: do not create edge function when middleware is not used

- [`7491ca5b9`](https://github.com/serverless-stack/sst/commit/7491ca5b989babad3a37775ae9644aa208d1c1a4) Thanks [@thdxr](https://github.com/thdxr)! - Add \_\_dirname shim to default banner

## 2.0.35

### Patch Changes

- [`6e36d8e6a`](https://github.com/serverless-stack/sst/commit/6e36d8e6ad6ae1afe7dc149be42cc110b9d4603b) Thanks [@thdxr](https://github.com/thdxr)! - Do not recreate function path if absolute path

## 2.0.34

### Patch Changes

- [`d8e6ab9ed`](https://github.com/serverless-stack/sst/commit/d8e6ab9eda2394e0f9e1bc782a74371edf2531f4) Thanks [@thdxr](https://github.com/thdxr)! - Fix type errors with graphql preset

## 2.0.33

### Patch Changes

- [`cf23cea67`](https://github.com/serverless-stack/sst/commit/cf23cea678da7b9ee623ce76c8ab26a9259d5ac1) Thanks [@fwang](https://github.com/fwang)! - Function: do not allow setting securityGroups when vpc is not configured.

- [`531310c1c`](https://github.com/serverless-stack/sst/commit/531310c1cc2e9fd26d33b20eac07a953f7e70396) Thanks [@fwang](https://github.com/fwang)! - sst dev: fix IoT region not parsed correctly for GovCloud

## 2.0.32

### Patch Changes

- [`d3bab944b`](https://github.com/serverless-stack/sst/commit/d3bab944b4ec4b8c48f90d48754d9e9b03fa38fd) Thanks [@fwang](https://github.com/fwang)! - EventBus: support adding targets to existing rules.

## 2.0.31

### Patch Changes

- [`776fb8f26`](https://github.com/serverless-stack/sst/commit/776fb8f269ab20c574fb7e365bffbb88d30d4a60) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: use Node.js 16 runtime for gov cloud regions

## 2.0.30

### Patch Changes

- [`e6020cede`](https://github.com/serverless-stack/sst/commit/e6020cedeaec8007f9c205d3cd582dc60d7572a2) Thanks [@thdxr](https://github.com/thdxr)! - Install python dependencies from target directory

- [#2516](https://github.com/serverless-stack/sst/pull/2516) [`cedcd1dca`](https://github.com/serverless-stack/sst/commit/cedcd1dcaf83a951c37f906c0e64e4927c08a451) Thanks [@m4tty-d](https://github.com/m4tty-d)! - RDS: Fix migrator function handler path

## 2.0.29

### Patch Changes

- [#2519](https://github.com/serverless-stack/sst/pull/2519) [`91882698a`](https://github.com/serverless-stack/sst/commit/91882698ab20da8824106a16c72f8d7e7a0b3700) Thanks [@khuezy](https://github.com/khuezy)! - NextjsSite: fix image optimization lambda does not have s3 permission

## 2.0.28

### Patch Changes

- [`31c626c25`](https://github.com/serverless-stack/sst/commit/31c626c252c3f002e2875a7918cb295dc29febad) Thanks [@fwang](https://github.com/fwang)! - Sites: block public access on Bucket

## 2.0.27

### Patch Changes

- [#2495](https://github.com/serverless-stack/sst/pull/2495) [`61d65a5be`](https://github.com/serverless-stack/sst/commit/61d65a5be5e2ee1e14a43bddb3694b509f87846b) Thanks [@khuezy](https://github.com/khuezy)! - NextjsSite: allow rsc headers for in-place routing

## 2.0.26

### Patch Changes

- [`d40c4ccf5`](https://github.com/serverless-stack/sst/commit/d40c4ccf5f5ebc6b20651dc220759c060aaf1626) Thanks [@thdxr](https://github.com/thdxr)! - Send correct deadline to local lambda

- [#2508](https://github.com/serverless-stack/sst/pull/2508) [`d4e8c6f01`](https://github.com/serverless-stack/sst/commit/d4e8c6f01eee6413917e5d98c24667c6bc1a0c04) Thanks [@moochannel](https://github.com/moochannel)! - Project: Fix .env.<stage>.local is not loaded

## 2.0.25

### Patch Changes

- [#2501](https://github.com/serverless-stack/sst/pull/2501) [`8fd694a12`](https://github.com/serverless-stack/sst/commit/8fd694a12f92b8f80119c6fe4e4abaa50e98d0ad) Thanks [@uwilken](https://github.com/uwilken)! - fix: CLI hrows error, when committing MFA on Node18

- [`d0272abca`](https://github.com/serverless-stack/sst/commit/d0272abcabd7b0a0b364222538e4b602f67c12b4) Thanks [@thdxr](https://github.com/thdxr)! - Fixed nodejs loader options not respect

## 2.0.24

### Patch Changes

- [`85da2991a`](https://github.com/serverless-stack/sst/commit/85da2991a2ad7034ffd00bd0e668916370989d18) Thanks [@thdxr](https://github.com/thdxr)! - Drop deprecated go runtime and support arm64 builds

- [`b6d28622b`](https://github.com/serverless-stack/sst/commit/b6d28622b8a9ce0440fee62bc0e0b3e35c054806) Thanks [@thdxr](https://github.com/thdxr)! - Support pipfile and poetry.lock

- [`6db19f16c`](https://github.com/serverless-stack/sst/commit/6db19f16cdff0f6787408f334db73a542ce33ac1) Thanks [@thdxr](https://github.com/thdxr)! - Ignore telemetry errors

## 2.0.23

### Patch Changes

- [`b25e6719a`](https://github.com/serverless-stack/sst/commit/b25e6719a0f6a005f0109c96a9792ccd438f9919) Thanks [@thdxr](https://github.com/thdxr)! - Fix stack file changes not detected on windows

## 2.0.22

### Patch Changes

- [`1302913cf`](https://github.com/serverless-stack/sst/commit/1302913cfc82e7a23dae1712149345883b8305b9) Thanks [@fwang](https://github.com/fwang)! - sst env: handle sites without environment

## 2.0.21

### Patch Changes

- [`761284c9e`](https://github.com/serverless-stack/sst/commit/761284c9ef388ac987f155bd62e3712e190629ea) Thanks [@thdxr](https://github.com/thdxr)! - Remove rogue log

- [`53f9625fa`](https://github.com/serverless-stack/sst/commit/53f9625faade446f42ec67f5010d1ce648bbb88d) Thanks [@thdxr](https://github.com/thdxr)! - Retry failed fetch calls

## 2.0.20

### Patch Changes

- [`7e2fd9e40`](https://github.com/serverless-stack/sst/commit/7e2fd9e406b4c21e55afea1089ff3b4a51d92f3b) Thanks [@thdxr](https://github.com/thdxr)! - Throw error when trying to deploy 0 stacks

## 2.0.19

### Patch Changes

- [#2481](https://github.com/serverless-stack/sst/pull/2481) [`f117acce5`](https://github.com/serverless-stack/sst/commit/f117acce5f547a8aa8662edb590a4483a2cd0911) Thanks [@fwang](https://github.com/fwang)! - WebSocketApi: create CloudWatch role automatically

## 2.0.18

### Patch Changes

- [#2478](https://github.com/serverless-stack/sst/pull/2478) [`301ca13ce`](https://github.com/serverless-stack/sst/commit/301ca13ce6d60dfda27f82b06cee049d65fbdec6) Thanks [@fwang](https://github.com/fwang)! - Fix `stream/consumer` not available in Node.js 14

## 2.0.17

### Patch Changes

- [#2470](https://github.com/serverless-stack/sst/pull/2470) [`2b78ba0bd`](https://github.com/serverless-stack/sst/commit/2b78ba0bd862de21b001e5a50a23fba2e1273dd4) Thanks [@ecumene](https://github.com/ecumene)! - Python Runtime: Don't copy SST directory

- [`36e22c436`](https://github.com/serverless-stack/sst/commit/36e22c43649105bd355e551433d65c8b510fecad) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: retry uploading metadata for up to 2 minutes

## 2.0.16

### Patch Changes

- [`cc41c0447`](https://github.com/serverless-stack/sst/commit/cc41c04477033fa572dae07798077b276bc0dd4d) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix circular dependency on deploy

## 2.0.15

### Patch Changes

- [#2463](https://github.com/serverless-stack/sst/pull/2463) [`d22ced926`](https://github.com/serverless-stack/sst/commit/d22ced926179433421e0103b7e2bbe158d176c88) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix circular dependency on deploy

## 2.0.14

### Patch Changes

- [#2459](https://github.com/serverless-stack/sst/pull/2459) [`5bd397611`](https://github.com/serverless-stack/sst/commit/5bd3976117cd2311193202bb57d767a9afa10d92) Thanks [@fwang](https://github.com/fwang)! - StaticSite/SsrSite: fix CF invalidation failed

## 2.0.13

### Patch Changes

- [`69f491f0a`](https://github.com/serverless-stack/sst/commit/69f491f0a8276e6ae6708f667d37beb4293a2d67) Thanks [@fwang](https://github.com/fwang)! - Job: fix createRequire banner added twice

- [#2457](https://github.com/serverless-stack/sst/pull/2457) [`bb1e79e42`](https://github.com/serverless-stack/sst/commit/bb1e79e42d621ac6b61d3b6f3fd5557aaf255be4) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - fix: send tags with deployment call

## 2.0.12

### Patch Changes

- [`119667da1`](https://github.com/serverless-stack/sst/commit/119667da1204720bbb8a59163bfea693d911ebf3) Thanks [@thdxr](https://github.com/thdxr)! - Fix sst deploy and remove filter

## 2.0.11

### Patch Changes

- [`f224eb94d`](https://github.com/serverless-stack/sst/commit/f224eb94d044541c5457a6a2a42f43e2fb93ecc3) Thanks [@fwang](https://github.com/fwang)! - Job: fix invoker not respecting live flag

## 2.0.10

### Patch Changes

- [`7b2debf10`](https://github.com/serverless-stack/sst/commit/7b2debf108cde084ed155d8576d226a911789aeb) Thanks [@thdxr](https://github.com/thdxr)! - Allow setting tags on bootstrap stack

## 2.0.9

### Patch Changes

- [`e987ab02c`](https://github.com/serverless-stack/sst/commit/e987ab02c33de45cf20d3e1beb92f38c9472b841) Thanks [@thdxr](https://github.com/thdxr)! - fix logical id mapping when metadata isn't available

## 2.0.8

### Patch Changes

- [#2452](https://github.com/serverless-stack/sst/pull/2452) [`778bb1b56`](https://github.com/serverless-stack/sst/commit/778bb1b56a915dff962f8040107e137a19917e2d) Thanks [@daniel-gato](https://github.com/daniel-gato)! - Fix kysely camelCase not being respected

- [`8ea1f9501`](https://github.com/serverless-stack/sst/commit/8ea1f950165f26239d4df7e0702505499e24076c) Thanks [@thdxr](https://github.com/thdxr)! - Support python install commands

## 2.0.7

### Patch Changes

- [`d83ab3c7c`](https://github.com/serverless-stack/sst/commit/d83ab3c7cd00a42008602ecac10e5f798d73e544) Thanks [@thdxr](https://github.com/thdxr)! - Nicer error messages when function handler is not found

## 2.0.6

### Patch Changes

- [`9b2683c99`](https://github.com/serverless-stack/sst/commit/9b2683c997b521c2ec2d5e9bfae4134fc7de2a90) Thanks [@fwang](https://github.com/fwang)! - RDS: fix permission error when secrets imported by partial arn

## 2.0.5

### Patch Changes

- [#2445](https://github.com/serverless-stack/sst/pull/2445) [`d7d18fa31`](https://github.com/serverless-stack/sst/commit/d7d18fa318d696b7e1873079d88afa30e9f9fecb) Thanks [@fwang](https://github.com/fwang)! - Api: support NLB route type

## 2.0.4

### Patch Changes

- [#2443](https://github.com/serverless-stack/sst/pull/2443) [`a9255af7c`](https://github.com/serverless-stack/sst/commit/a9255af7cbbf995698590b212fd51dad9aaff7ef) Thanks [@ecumene](https://github.com/ecumene)! - Fixed hardcoded python `services` directory

- [#2434](https://github.com/serverless-stack/sst/pull/2434) [`8b156ce53`](https://github.com/serverless-stack/sst/commit/8b156ce535d1d162fe3163bbfaab3536f1d701d4) Thanks [@mathisobadia](https://github.com/mathisobadia)! - Handle alternate domain names for SsrSite construct

## 2.0.3

### Patch Changes

- [`332c5e06d`](https://github.com/serverless-stack/sst/commit/332c5e06d9f187725b6ab5235ae479bde22e3b6c) Thanks [@thdxr](https://github.com/thdxr)! - Remove quote requirement for bind and env commands. Be sure to update your `sst env` and `sst bind` commands to remove the `'`

## 2.0.2

### Patch Changes

- [`ab5eacd82`](https://github.com/serverless-stack/sst/commit/ab5eacd8285fe158b7d30548425811b40d0c1e19) Thanks [@fwang](https://github.com/fwang)! - Bootstrap: handle outdated CDK bootstrap version

- [#2436](https://github.com/serverless-stack/sst/pull/2436) [`8ece14072`](https://github.com/serverless-stack/sst/commit/8ece140729f1788b41ebea5095fb2ee8782dcd2e) Thanks [@fwang](https://github.com/fwang)! - Cognito: handle multiple userPoolIds for authorizer

- [`5f97e0bb1`](https://github.com/serverless-stack/sst/commit/5f97e0bb143272f7c1b9f0a166a09339aebb9091) Thanks [@fwang](https://github.com/fwang)! - SsrSite: handle alternate domains

- [`63de6a941`](https://github.com/serverless-stack/sst/commit/63de6a941d4f6262c18dcd892ab2ec4ce921e36c) Thanks [@fwang](https://github.com/fwang)! - sst env: pass AWS credentials to the script

- [#2437](https://github.com/serverless-stack/sst/pull/2437) [`5b4b61c23`](https://github.com/serverless-stack/sst/commit/5b4b61c23d7df9df553ac7e39cf0d6ae2cc08e2b) Thanks [@fwang](https://github.com/fwang)! - SsrSite: support runtime

## 2.0.1

### Patch Changes

- [`4268dbeaa`](https://github.com/serverless-stack/sst/commit/4268dbeaa998a7ef65d6e5bfaed5bab587a3ddb7) Thanks [@thdxr](https://github.com/thdxr)! - Remove references to rc in create-sst templates

## 2.0.0

### Major Changes

- [#2428](https://github.com/serverless-stack/sst/pull/2428) [`ce13bea66`](https://github.com/serverless-stack/sst/commit/ce13bea665ce80cfc5fb4a5b87e076e2f00ffece) Thanks [@thdxr](https://github.com/thdxr)! - SST 2.0

  This is a major overhaul of the SST codebase primarily for ergonomics and performance. There should be no infrastructure changes however there are some project structure and package changes. Please view the upgrade guide here: https://docs.sst.dev/upgrade-guide

## 2.0.0-rc.71

## 2.0.0-rc.70

### Patch Changes

- [#2424](https://github.com/serverless-stack/sst/pull/2424) [`21b3a9f81`](https://github.com/serverless-stack/sst/commit/21b3a9f8103c25fe691d450c5c9ef97ef481a716) Thanks [@github-actions](https://github.com/apps/github-actions)! - Lazy load bootstrap

## 2.0.0-rc.69

## 2.0.0-rc.68

### Patch Changes

- [`36ba7ab1b`](https://github.com/serverless-stack/sst/commit/36ba7ab1b290090c2ea4b926e0fc047de34076f6) Thanks [@thdxr](https://github.com/thdxr)! - Fix UI for stack errors

- [#2420](https://github.com/serverless-stack/sst/pull/2420) [`22712ce5b`](https://github.com/serverless-stack/sst/commit/22712ce5b5c5a1edc4a3def0eb3575f58f0b1c3d) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fix printing false

## 2.0.0-rc.67

### Patch Changes

- [#2419](https://github.com/serverless-stack/sst/pull/2419) [`45cef3d65`](https://github.com/serverless-stack/sst/commit/45cef3d651138a602147841ee41f095e76a59481) Thanks [@github-actions](https://github.com/apps/github-actions)! - Rework examples for sst2

## 2.0.0-rc.66

### Major Changes

- [#2413](https://github.com/serverless-stack/sst/pull/2413) [`0997f02fe`](https://github.com/serverless-stack/sst/commit/0997f02fef9aa2dc5fde03c1872a967b1758fc40) Thanks [@mvanleest](https://github.com/mvanleest)! - Fix: Auth routes unauthorized with default authorizer

## 2.0.0-rc.65

### Patch Changes

- [`54a811a32`](https://github.com/serverless-stack/sst/commit/54a811a3242e1a327b031c1cbe286e0bf328c434) Thanks [@thdxr](https://github.com/thdxr)! - Fix incorrect eventbus metadata

## 2.0.0-rc.64

### Patch Changes

- [`9994ddcb8`](https://github.com/serverless-stack/sst/commit/9994ddcb83fd21f6ae25c8aff331072921ad7726) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix middleware function timeout

## 2.0.0-rc.63

### Patch Changes

- [#2405](https://github.com/serverless-stack/sst/pull/2405) [`b69121bef`](https://github.com/serverless-stack/sst/commit/b69121befa514e85f1ccf88aa4b50a837ab11062) Thanks [@github-actions](https://github.com/apps/github-actions)! - SsrSite: allow overriding architecture

- [`efe53b587`](https://github.com/serverless-stack/sst/commit/efe53b5878f98fdca9292605353e039712eb8c84) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix middleware Lambda memory issue

## 2.0.0-rc.62

### Patch Changes

- [`7ef60acf8`](https://github.com/serverless-stack/sst/commit/7ef60acf866584b1a0426c4b03499133921b872c) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: set server function architecture to arm64

## 2.0.0-rc.61

### Patch Changes

- [`84231a25a`](https://github.com/serverless-stack/sst/commit/84231a25aabec326fc88b90b9e249ac043aa3d22) Thanks [@fwang](https://github.com/fwang)! - Fix rc release

## 2.0.0-rc.60

### Patch Changes

- [`c25d0982a`](https://github.com/serverless-stack/sst/commit/c25d0982a32decf8a09fc838b221bc4609e71ad0) Thanks [@fwang](https://github.com/fwang)! - SsrSite: allow overriding all vpc related props

## 2.0.0-rc.59

### Patch Changes

- [`293df5ff3`](https://github.com/serverless-stack/sst/commit/293df5ff373b2c22aaf72f0d0bc4d8bce823df2b) Thanks [@fwang](https://github.com/fwang)! - SsrSite: support vpc

## 2.0.0-rc.58

### Patch Changes

- [#2400](https://github.com/serverless-stack/sst/pull/2400) [`14fb6eaba`](https://github.com/serverless-stack/sst/commit/14fb6eabada703760be115e5f3566a0b5a8d7528) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fix binding sites to function causes import sst/node to fail

## 2.0.0-rc.57

### Patch Changes

- [`204f42b10`](https://github.com/serverless-stack/sst/commit/204f42b100d157aafc1466ddcbf3640c6c358316) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix environment not replaced

- [#2396](https://github.com/serverless-stack/sst/pull/2396) [`da3d0740f`](https://github.com/serverless-stack/sst/commit/da3d0740f56c53872ba2321f8c8b312ca8b68bf4) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update CDK to 2.62.2

## 2.0.0-rc.56

### Patch Changes

- [#2388](https://github.com/serverless-stack/sst/pull/2388) [`64317dda5`](https://github.com/serverless-stack/sst/commit/64317dda561dfb1f327897da8805d84f19df499c) Thanks [@andykenward](https://github.com/andykenward)! - bug: sst plugin pothos throwing error when no commands array

- [`e823810bc`](https://github.com/serverless-stack/sst/commit/e823810bc79fb48f05d5d3b943e40f7817d773d2) Thanks [@thdxr](https://github.com/thdxr)! - Restore static site changes

## 2.0.0-rc.55

### Patch Changes

- [`8e5fe68f8`](https://github.com/serverless-stack/sst/commit/8e5fe68f879cf1b4598c0bf23791439b6a9b0432) Thanks [@thdxr](https://github.com/thdxr)! - Fix for create-sst touching .git folder

## 2.0.0-rc.54

### Patch Changes

- [#2383](https://github.com/serverless-stack/sst/pull/2383) [`b74740f38`](https://github.com/serverless-stack/sst/commit/b74740f38409a7375855da589471f2884ed2a379) Thanks [@github-actions](https://github.com/apps/github-actions)! - Show warning when switching between dev/deploy

## 2.0.0-rc.53

### Patch Changes

- [`d2a695fe7`](https://github.com/serverless-stack/sst/commit/d2a695fe7edc4103aa662021837522863418c1e7) Thanks [@thdxr](https://github.com/thdxr)! - Fix site env

## 2.0.0-rc.52

### Patch Changes

- [#2378](https://github.com/serverless-stack/sst/pull/2378) [`ba1efbe39`](https://github.com/serverless-stack/sst/commit/ba1efbe39c0325222a02853e705ae9d12c29ea43) Thanks [@github-actions](https://github.com/apps/github-actions)! - Support MFA

- [`9bb8a2ffb`](https://github.com/serverless-stack/sst/commit/9bb8a2ffbea97ba5f372ac71086be6e88e0822b1) Thanks [@fwang](https://github.com/fwang)! - sst dev: do not deploy placeholder sites

## 2.0.0-rc.51

### Patch Changes

- [`523e5f9fa`](https://github.com/serverless-stack/sst/commit/523e5f9faa10cc4b8509409d08b4991a5cac8b8b) Thanks [@fwang](https://github.com/fwang)! - Respect env var credentials over profile

## 2.0.0-rc.50

### Patch Changes

- [#2375](https://github.com/serverless-stack/sst/pull/2375) [`99a227f45`](https://github.com/serverless-stack/sst/commit/99a227f454a33d4b852eef5be6d99a3fcfda6096) Thanks [@github-actions](https://github.com/apps/github-actions)! - Print helper message when no connection

- [`7692adacf`](https://github.com/serverless-stack/sst/commit/7692adacf4fd0e472fe512915954a5e596eb0890) Thanks [@fwang](https://github.com/fwang)! - Cli flags override config options

- [#2375](https://github.com/serverless-stack/sst/pull/2375) [`796e6ab1d`](https://github.com/serverless-stack/sst/commit/796e6ab1dd113ac1adda344602683dcacef591d8) Thanks [@github-actions](https://github.com/apps/github-actions)! - Clear screen without wiping out previous output

## 2.0.0-rc.49

### Patch Changes

- [`e6b9fd7fa`](https://github.com/serverless-stack/sst/commit/e6b9fd7fad80973e7604b9dbd581818b3a657e61) Thanks [@thdxr](https://github.com/thdxr)! - Astro dropin

## 2.0.0-rc.48

### Patch Changes

- [#2370](https://github.com/serverless-stack/sst/pull/2370) [`bd089d94c`](https://github.com/serverless-stack/sst/commit/bd089d94c9e83e9797b63d4c9b21668d176a908c) Thanks [@github-actions](https://github.com/apps/github-actions)! - Remove deprecated v1 constructs & methods

- [#2370](https://github.com/serverless-stack/sst/pull/2370) [`b6b943fd9`](https://github.com/serverless-stack/sst/commit/b6b943fd9ea149b4689b308aef2329ac25d89a5e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add deploy error helper

## 2.0.0-rc.47

### Patch Changes

- [`077fb7763`](https://github.com/serverless-stack/sst/commit/077fb7763e93c8f9a7148681ad309dfa0f1dced1) Thanks [@thdxr](https://github.com/thdxr)! - Fix

## 2.0.0-rc.46

### Patch Changes

- [#2368](https://github.com/serverless-stack/sst/pull/2368) [`b24783e19`](https://github.com/serverless-stack/sst/commit/b24783e19a43e2daea8f3f608bb8afd98d7536c8) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update sst deploy UI

- [`47743f47d`](https://github.com/serverless-stack/sst/commit/47743f47d62154335d7e3643417e34bcb0d6ff59) Thanks [@thdxr](https://github.com/thdxr)! - Fixed cli crash on out of order messages

## 2.0.0-rc.45

### Patch Changes

- [`d45f56f45`](https://github.com/serverless-stack/sst/commit/d45f56f45860ca6fe3e0b97914835edeed54bee3) Thanks [@fwang](https://github.com/fwang)! - Show construct path instead of logical id in logs

## 2.0.0-rc.44

### Patch Changes

- [#2366](https://github.com/serverless-stack/sst/pull/2366) [`ac1a3a7eb`](https://github.com/serverless-stack/sst/commit/ac1a3a7ebc531d8954bdc0aa1f228100ff6cf0c2) Thanks [@github-actions](https://github.com/apps/github-actions)! - Wire up increase timeout

- [`a5e24bac6`](https://github.com/serverless-stack/sst/commit/a5e24bac60f9ce03a6ebad38527157f85d8d7fe8) Thanks [@thdxr](https://github.com/thdxr)! - Override from .env files

## 2.0.0-rc.43

### Patch Changes

- [`21afe80ec`](https://github.com/serverless-stack/sst/commit/21afe80ec4afbb82974347582a33f8ca1a56085a) Thanks [@thdxr](https://github.com/thdxr)! - Force stacktrace

## 2.0.0-rc.42

### Patch Changes

- [`58967f452`](https://github.com/serverless-stack/sst/commit/58967f452b73e80c2fce6aae4c763eaadb97fc82) Thanks [@thdxr](https://github.com/thdxr)! - Updated

## 2.0.0-rc.41

### Patch Changes

- [#2357](https://github.com/serverless-stack/sst/pull/2357) [`439aaa3cb`](https://github.com/serverless-stack/sst/commit/439aaa3cb64eee4bfad590f419d4c812e8f9f57c) Thanks [@github-actions](https://github.com/apps/github-actions)! - UI

- [#2357](https://github.com/serverless-stack/sst/pull/2357) [`6eef49a90`](https://github.com/serverless-stack/sst/commit/6eef49a90501fc00bdf637afd70c1005dcf2b83d) Thanks [@github-actions](https://github.com/apps/github-actions)! - Improve sst diff command

## 2.0.0-rc.40

### Patch Changes

- [`b30390e1a`](https://github.com/serverless-stack/sst/commit/b30390e1a30c51dd513c06eb6e8f2aeddd85345c) Thanks [@fwang](https://github.com/fwang)! - Improve CDK bootstrap experience

- [#2353](https://github.com/serverless-stack/sst/pull/2353) [`fac18bacf`](https://github.com/serverless-stack/sst/commit/fac18bacf42307f58676ea1f9498120d27bf5045) Thanks [@github-actions](https://github.com/apps/github-actions)! - Rename stack output key name for metadata

## 2.0.0-rc.39

### Patch Changes

- [`06b78ad7f`](https://github.com/serverless-stack/sst/commit/06b78ad7fb2e2cb8d72161682758df4448ba093a) Thanks [@fwang](https://github.com/fwang)! - Optimize asset publishing

## 2.0.0-rc.38

### Patch Changes

- [`cd2576384`](https://github.com/serverless-stack/sst/commit/cd25763845e96d55fc2aa86c35c15a4ca942a924) Thanks [@thdxr](https://github.com/thdxr)! - Enable secrets commands

## 2.0.0-rc.37

### Patch Changes

- [`a0d3fca48`](https://github.com/serverless-stack/sst/commit/a0d3fca4860364bafc7183aa4e34d4be34aeb9c2) Thanks [@thdxr](https://github.com/thdxr)! - Support specifying role to assume

## 2.0.0-rc.36

### Patch Changes

- [#2347](https://github.com/serverless-stack/sst/pull/2347) [`b9c18eb50`](https://github.com/serverless-stack/sst/commit/b9c18eb507ab93dbec7c8ec5556deeeb2fee04b2) Thanks [@github-actions](https://github.com/apps/github-actions)! - Resource binding: fix Lambda environment key name

- [`8ca68e477`](https://github.com/serverless-stack/sst/commit/8ca68e47764a5f09c068bbd99afdd7cda9217cd7) Thanks [@fwang](https://github.com/fwang)! - Emit stack metadata updated event

- [#2347](https://github.com/serverless-stack/sst/pull/2347) [`0d46c1e3e`](https://github.com/serverless-stack/sst/commit/0d46c1e3e9d420da92bc5d4e86ae8495ac97ab22) Thanks [@github-actions](https://github.com/apps/github-actions)! - Optimize publish assets

## 2.0.0-rc.35

### Patch Changes

- [`ff77d673c`](https://github.com/serverless-stack/sst/commit/ff77d673cfc4c9a5b401c850a4d172aaf275f34b) Thanks [@thdxr](https://github.com/thdxr)! - Fix ack messages not being forwarded to IoT

## 2.0.0-rc.34

### Patch Changes

- [`3b8ef8fab`](https://github.com/serverless-stack/sst/commit/3b8ef8fab8ee061dd49a3a237c8ae5dcc967e4c0) Thanks [@thdxr](https://github.com/thdxr)! - Fix function acknowledgement

## 2.0.0-rc.33

### Patch Changes

- [`d03790277`](https://github.com/serverless-stack/sst/commit/d03790277268bbf0aae6e4211a0ff3d44e17fff3) Thanks [@thdxr](https://github.com/thdxr)! - New UI

## 2.0.0-rc.32

### Patch Changes

- [`3d0313264`](https://github.com/serverless-stack/sst/commit/3d03132646ca3ece1d4d1df8c875b34c8052d52e) Thanks [@fwang](https://github.com/fwang)! - Fix partition typo

## 2.0.0-rc.31

### Patch Changes

- [#2329](https://github.com/serverless-stack/sst/pull/2329) [`c98a55b8b`](https://github.com/serverless-stack/sst/commit/c98a55b8bbe57ea9304dd4199f5e40893c1968db) Thanks [@alistairstead](https://github.com/alistairstead)! - Update bind to inherit the full env of the parent process

## 2.0.0-rc.30

### Major Changes

- [`64c881e19`](https://github.com/serverless-stack/sst/commit/64c881e192f999178c3d8a2d10a14ac8f7bc9693) Thanks [@fwang](https://github.com/fwang)! - Support AWS China region

## 2.0.0-rc.29

### Patch Changes

- [`3463f929f`](https://github.com/serverless-stack/sst/commit/3463f929fda97c23748de5663111bb95e0664979) Thanks [@thdxr](https://github.com/thdxr)! - Performance and UI improvements

## 2.0.0-rc.28

### Patch Changes

- [#2324](https://github.com/serverless-stack/sst/pull/2324) [`5d06e81aa`](https://github.com/serverless-stack/sst/commit/5d06e81aa30994dfe1109a488f09ab2a3c9fe467) Thanks [@github-actions](https://github.com/apps/github-actions)! - Test

- [`9db435cd2`](https://github.com/serverless-stack/sst/commit/9db435cd24a0c286d74a21d68e84bc8dae05a4b3) Thanks [@fwang](https://github.com/fwang)! - Fix SST bootstrap issue

## 2.0.0-rc.27

### Patch Changes

- [`0944cd2fe`](https://github.com/serverless-stack/sst/commit/0944cd2fe1b7818d6c58b6a240120417e78d2ef4) Thanks [@thdxr](https://github.com/thdxr)! - Minor bug fixes

## 2.0.0-rc.26

### Patch Changes

- [`16ea533bd`](https://github.com/serverless-stack/sst/commit/16ea533bd322bb55bad8a3ec088a4a680b69316b) Thanks [@fwang](https://github.com/fwang)! - Subscribe to CloudFormation events and store metadata asyncly

## 2.0.0-rc.25

### Patch Changes

- [`e55348b10`](https://github.com/serverless-stack/sst/commit/e55348b1021dfcbf706fcf29cd3325d47d716d91) Thanks [@thdxr](https://github.com/thdxr)! - Fix resolve

## 2.0.0-rc.24

### Patch Changes

- [`e248df358`](https://github.com/serverless-stack/sst/commit/e248df3586a47e9d9774a5cdbe1b88e3c8d1b736) Thanks [@thdxr](https://github.com/thdxr)! - Support diff command

## 2.0.0-rc.23

### Patch Changes

- [`a10b167fd`](https://github.com/serverless-stack/sst/commit/a10b167fd98f8c0057631996e3c9f0615bb9fc41) Thanks [@thdxr](https://github.com/thdxr)! - Fix kysely type generator

## 2.0.0-rc.22

### Patch Changes

- [`54b0fce33`](https://github.com/serverless-stack/sst/commit/54b0fce33c61d42c4a14e686790b61b1cdc82733) Thanks [@thdxr](https://github.com/thdxr)! - Fix create-sst

## 2.0.0-rc.21

### Patch Changes

- [#2313](https://github.com/serverless-stack/sst/pull/2313) [`90e56aab9`](https://github.com/serverless-stack/sst/commit/90e56aab93479bcb35866693e7cd3437c666d195) Thanks [@github-actions](https://github.com/apps/github-actions)! - Bug fixes

- [#2313](https://github.com/serverless-stack/sst/pull/2313) [`e6a64785c`](https://github.com/serverless-stack/sst/commit/e6a64785ca4d922acebb05eb2835b2b0e27a013d) Thanks [@github-actions](https://github.com/apps/github-actions)! - Properly set node16 as default runtime

## 2.0.0-rc.20

### Patch Changes

- [`4945e8e87`](https://github.com/serverless-stack/sst/commit/4945e8e87537bfe4789bf22b0ded9f7afb9f1458) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix Edge Function upgrade issue

- [`4945e8e87`](https://github.com/serverless-stack/sst/commit/4945e8e87537bfe4789bf22b0ded9f7afb9f1458) Thanks [@fwang](https://github.com/fwang)! - SsrSite: fix dev mode

## 2.0.0-rc.19

### Patch Changes

- [`c5eb4d431`](https://github.com/serverless-stack/sst/commit/c5eb4d43196925ea14e5f01f529e64d44e50dbbc) Thanks [@thdxr](https://github.com/thdxr)! - Ignore symlink failures for node_modules

- [`c5eb4d431`](https://github.com/serverless-stack/sst/commit/c5eb4d43196925ea14e5f01f529e64d44e50dbbc) Thanks [@thdxr](https://github.com/thdxr)! - Fix windows issue when running function locally

## 2.0.0-rc.18

### Patch Changes

- [`413381061`](https://github.com/serverless-stack/sst/commit/413381061bea3c6622240a2eff264c3733cd02cf) Thanks [@thdxr](https://github.com/thdxr)! - Simple template for create-sst

## 2.0.0-rc.17

### Patch Changes

- [`acce2b49f`](https://github.com/serverless-stack/sst/commit/acce2b49fc68656a4d2d9bb707d3575f8725c1a1) Thanks [@thdxr](https://github.com/thdxr)! - Fix missing ping endpoint

- [#2307](https://github.com/serverless-stack/sst/pull/2307) [`1eb6e7729`](https://github.com/serverless-stack/sst/commit/1eb6e7729916fcaa5089799a0a4649a4b97ae1fa) Thanks [@github-actions](https://github.com/apps/github-actions)! - Sites: default path to current directory "."

## 2.0.0-rc.16

### Patch Changes

- [`8371c7bb9`](https://github.com/serverless-stack/sst/commit/8371c7bb935f9ae9c02e2790bb4735a94a022146) Thanks [@fwang](https://github.com/fwang)! - StaticSite: fix script path

## 2.0.0-rc.15

### Patch Changes

- [`591b21b83`](https://github.com/serverless-stack/sst/commit/591b21b83c94ba87b4079f33d783fd4b672db603) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix script path

## 2.0.0-rc.14

### Patch Changes

- [`11ab78085`](https://github.com/serverless-stack/sst/commit/11ab780857426958aefbbe5b75667c3be360f047) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: fix function archiver path

## 2.0.0-rc.13

### Patch Changes

- [`600236feb`](https://github.com/serverless-stack/sst/commit/600236feb1d2e706f62c1fb29d4a2744a8ecc713) Thanks [@thdxr](https://github.com/thdxr)! - Require js/ts based config file. Checkout the migration guide for an example: https://github.com/serverless-stack/sst/tree/sst2/packages/sst

## 2.0.0-rc.12

### Patch Changes

- [#2297](https://github.com/serverless-stack/sst/pull/2297) [`f37521f7f`](https://github.com/serverless-stack/sst/commit/f37521f7fbfbdfb63f0fc60b55bd9e0a26e3ddca) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fail faster when no sst dev session is running

- [`b4143189f`](https://github.com/serverless-stack/sst/commit/b4143189fd98c66daf8d79f25898692912e618a2) Thanks [@thdxr](https://github.com/thdxr)! - `sst update` should keep `constructs` dependency update

## 2.0.0-rc.11

### Patch Changes

- [`b6c7e83f8`](https://github.com/serverless-stack/sst/commit/b6c7e83f8d2798e6ad068cce2114c3f6995d426c) Thanks [@thdxr](https://github.com/thdxr)! - Fix issue with sst update command not updating alpha dependencies correctly

- [#2296](https://github.com/serverless-stack/sst/pull/2296) [`403ba4fb3`](https://github.com/serverless-stack/sst/commit/403ba4fb301b68bdec25070ab979c1844c7a5621) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fix flaky error about symbol context

## 2.0.0-rc.10

### Patch Changes

- [`293aee1cb`](https://github.com/serverless-stack/sst/commit/293aee1cb7861404d39ece9dd97611060d0b14e5) Thanks [@fwang](https://github.com/fwang)! - NextjsSite: zip OpenNext server function

- [#2293](https://github.com/serverless-stack/sst/pull/2293) [`b5eddfdd4`](https://github.com/serverless-stack/sst/commit/b5eddfdd4326116774e78a1318a0503a1ee899d4) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fix RDS migrator and Script bundling issue

## 2.0.0-rc.9

### Patch Changes

- [#2292](https://github.com/serverless-stack/sst/pull/2292) [`76898899a`](https://github.com/serverless-stack/sst/commit/76898899a0bc8bf54d9703c5aaf5ebda782693f4) Thanks [@github-actions](https://github.com/apps/github-actions)! - Exit with correct code if deploy fails

## 2.0.0-rc.8

### Patch Changes

- [`b36b0fca1`](https://github.com/serverless-stack/sst/commit/b36b0fca19df7e0c65707d0e4fa110ecf24dc142) Thanks [@thdxr](https://github.com/thdxr)! - Update esbuild

- [`68f7cd155`](https://github.com/serverless-stack/sst/commit/68f7cd155b0f98592bb15ea7b78a915ac538f008) Thanks [@thdxr](https://github.com/thdxr)! - Remove unnecessary deps

## 2.0.0-rc.7

### Patch Changes

- [`8803dbf5c`](https://github.com/serverless-stack/sst/commit/8803dbf5c3ed67cc8e6fdf52818b914e65afd129) Thanks [@thdxr](https://github.com/thdxr)! - Use isESM check

## 2.0.0-rc.6

### Patch Changes

- [`0c7d4050e`](https://github.com/serverless-stack/sst/commit/0c7d4050e7c24892ee132d3902bc2cc94414e1b5) Thanks [@thdxr](https://github.com/thdxr)! - Workaround for wrap-ansi being referenced incorrectly by aws-cdk

## 2.0.0-rc.5

### Patch Changes

- [`5c942c87c`](https://github.com/serverless-stack/sst/commit/5c942c87c30e7ebe2b68c4348ce7141c77dac765) Thanks [@thdxr](https://github.com/thdxr)! - Always ignore sst when building stacks

## 2.0.0-rc.4

### Patch Changes

- [`1f8632cf4`](https://github.com/serverless-stack/sst/commit/1f8632cf43f36267f42bd299952568ce08d2fafc) Thanks [@thdxr](https://github.com/thdxr)! - Use latest tag for sst package

## 2.0.0-rc.3

### Patch Changes

- [`c01a9b390`](https://github.com/serverless-stack/sst/commit/c01a9b390ef6692c4a60599fca26f0f3fcae9b3b) Thanks [@thdxr](https://github.com/thdxr)! - Add archiver as dependency

## 2.0.0-rc.2

### Patch Changes

- [`cb10b5a0f`](https://github.com/serverless-stack/sst/commit/cb10b5a0ffecfe0ada18f9287b8c6edc99fd7642) Thanks [@thdxr](https://github.com/thdxr)! - create-sst should use RC

## 2.0.0-rc.1

### Patch Changes

- [`558c3da3e`](https://github.com/serverless-stack/sst/commit/558c3da3e1352127a2fdddc3a54416b1904c85ac) Thanks [@thdxr](https://github.com/thdxr)! - Update command sticks to rc

## 2.0.0-rc.0

### Major Changes

- [`db5aadfbc`](https://github.com/serverless-stack/sst/commit/db5aadfbca8628eb23eee486c07e5819bb6cf750) Thanks [@thdxr](https://github.com/thdxr)! - 2.0

## 1.17.1

### Patch Changes

- Updated dependencies [[`f3689cad0`](https://github.com/serverless-stack/sst/commit/f3689cad04d4c98bd78fd935d6bf641070c2deb7)]:
  - @serverless-stack/node@1.17.1

## 1.17.0

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.17.0

## 1.16.3

### Patch Changes

- Updated dependencies [[`37aa18ca8`](https://github.com/serverless-stack/sst/commit/37aa18ca8d938574cd4ae70ba299ec37259fcb45)]:
  - @serverless-stack/node@1.16.3

## 1.16.2

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.16.2

## 1.16.1

### Patch Changes

- Updated dependencies [[`aa1122646`](https://github.com/serverless-stack/sst/commit/aa1122646fa0e808a91d585513cb5cd6759ed2c1), [`aa1122646`](https://github.com/serverless-stack/sst/commit/aa1122646fa0e808a91d585513cb5cd6759ed2c1), [`aa1122646`](https://github.com/serverless-stack/sst/commit/aa1122646fa0e808a91d585513cb5cd6759ed2c1)]:
  - @serverless-stack/node@1.16.1

## 1.16.0

### Patch Changes

- Updated dependencies [[`f2ce4f7b2`](https://github.com/serverless-stack/sst/commit/f2ce4f7b2f4d92686ef7d24ece0ae6fd44223898)]:
  - @serverless-stack/node@1.16.0

## 1.15.16

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.16

## 1.15.15

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.15

## 1.15.14

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.14

## 1.15.13

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.13

## 1.15.12

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.12

## 1.15.11

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.11

## 1.15.10

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.10

## 1.15.9

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.9

## 1.15.8

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.8

## 1.15.7

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.7

## 1.15.6

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.6

## 1.15.5

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.5

## 1.15.4

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.4

## 1.15.3

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.3

## 1.15.2

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.2

## 1.15.1

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.15.1

## 1.15.0

### Patch Changes

- Updated dependencies [[`86137b645`](https://github.com/serverless-stack/sst/commit/86137b645311473b8d51ec8ee3bdfb70656f3c58)]:
  - @serverless-stack/node@1.15.0

## 1.14.4

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.14.4

## 1.14.3

### Patch Changes

- [#2070](https://github.com/serverless-stack/sst/pull/2070) [`8ceb4ab7c`](https://github.com/serverless-stack/sst/commit/8ceb4ab7c92f92fac4d4177d498e4e365630d5b8) Thanks [@estebanprimost](https://github.com/estebanprimost)! - Fix "Could not unzip uploaded file" deployment error

- Updated dependencies []:
  - @serverless-stack/node@1.14.3

## 1.14.2

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.14.2

## 1.14.1

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.14.1

## 1.14.0

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.14.0

## 1.13.0

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.13.0

## 1.12.4

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.12.4

## 1.12.3

### Patch Changes

- Updated dependencies [[`cacb73493`](https://github.com/serverless-stack/sst/commit/cacb73493295619538375ff9feb6ee559be1dfa3)]:
  - @serverless-stack/node@1.12.3

## 1.12.2

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.12.2

## 1.12.1

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.12.1

## 1.12.0

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.12.0

## 1.11.2

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.11.2

## 1.11.1

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.11.1

## 1.11.0

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.11.0

## 1.10.6

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.10.6

## 1.10.5

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.10.5

## 1.10.4

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.10.4

## 1.10.3

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.10.3

## 1.10.2

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.10.2

## 1.10.1

### Patch Changes

- Updated dependencies []:
  - @serverless-stack/node@1.10.1

## 1.10.0

### Patch Changes

- Updated dependencies [[`c628edfe1`](https://github.com/serverless-stack/sst/commit/c628edfe1034f0a6ee788ec41b052353a73c5438)]:
  - @serverless-stack/node@1.10.0

## 0.0.0-20220811185430

### Patch Changes

- Updated dependencies [b4eb4db26]
  - @serverless-stack/lambda@0.0.0-20220811185430

## 0.0.0-20220811125337

### Patch Changes

- Updated dependencies [b4eb4db26]
  - @serverless-stack/lambda@0.0.0-20220811125337

## 0.0.0-20220811124227

### Patch Changes

- Updated dependencies [b4eb4db26]
  - @serverless-stack/lambda@0.0.0-20220811124227
