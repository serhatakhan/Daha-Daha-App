# Daha Daha App

Daha Daha Uygulaması, promosyonların içeriğini modern, kullanıcı dostu bir arayüzle görüntülemek için tasarlanmış bir React Native uygulamasıdır. Promosyon ögelerinden oluşan bir slidera, markaların bir listesine ve bireysel promosyonların ayrıntılı görünümlerine sahiptir. 

## Kullanılan Teknolojiler

- React Native
- Redux Toolkit
- React Navigation (Bottom Tabs & Native Stack)
- React Native Snap Carousel
- TypeScript
- React Native Linear Gradient
- Axios
- HTML Entities
- Reselect

## Kurulum

1. Önce projeyi klonlayın. Bunun için:

`git clone https://github.com/serhatakhan/DahaDaha-App.git`

2. Projeyi lokalinize çektikten sonra, node_modules klasörünün doğru bir şekilde kurulduğundan emin olmanız gerekiyor. Bunu yapmak için:

`npm install`
veya
`yarn install`
komutlarını kullanarak paketleri ve bağımlılıkları yeniden yükleyin.

3. Patch-Package Kullanımı

patch-package kullanarak, snap-carousel paketi için yapılan özel değişikliklerin projeye uygulanmasını sağlamak için, patch-package komutunu kullanın. 
Bu, özel değişikliklerin projenin bağımlılıklarına uygulanmasını sağlar. Komutu şu şekilde çalıştırmalısınız:

`npm run postinstall`
veya
`yarn postinstall`

Bu, postinstall script'inin çalışmasını ve gerekli patch'lerin uygulanmasını sağlayacaktır.
