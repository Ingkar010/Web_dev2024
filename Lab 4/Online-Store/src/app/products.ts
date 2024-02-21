export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  url: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 15 128Gb',
    price: 799,
    description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-large",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
    rating: 5
  },
  {
    id: 2,
    name: 'Electric kettle Smeg KLF03PKEU pink',
    price: 699,
    description: 'Fast, safe and reliable, Smeg kettles offer stainless steel body, a large 1.7 litres capacity and a cordless base. ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h86/h41/63760794746910.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h90/hbd/63760795205662.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/elektrochainik-smeg-klf03pkeu-rozovyi-6301569/?c=750000000",
    rating: 5
  },
  {
    id: 3,
    name: 'Polaris PVC 0826 Vacuum Cleaner Robot White, Pink',
    price: 299,
    description: ' The Best Robot Vacuums to Keep Your Home Clean ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h47/h1e/63886666596382.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h59/hc2/63886669938718.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/polaris-pvcr-0826-belyi-rozovyi-100174227/?c=750000000",
    rating: 5
  },
  {
    id: 4,
    name: 'Apple Earpods Max Headphones Pink',
    price: 299,
    description: 'The Apple Earpods Max Bluetooth headset will be able to completely change your idea of full-size headphones.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h5b/h11/64019769753630.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h32/h72/64019772047390.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-max-rozovyi-101161561/?c=750000000",
    rating: 5,
  },
  {
    id: 5,
    name: 'Dior Miss Dior perfume water EDP 30 ml',
    price: 299,
    description: 'This is a fragrance for women, it belongs to the chypre floral group.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h5a/h70/64392124465182.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h09/h06/64392127217694.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/dior-miss-dior-parfjumernaja-voda-edp-30-ml-103903564/?c=750000000",
    rating: 5
  },
  {
    id: 6,
    name: 'Dyson HS05 Longfuk Styler 1300 W',
    price: 299,
    description: 'It is quite possible to do professional styling yourself if you use a Dyson hair styler.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h54/h77/64655085240350.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1b/67104330809374/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-1.jpg",
    url: "https://kaspi.kz/shop/p/dyson-hs05-longfuk-stailer-1300-w-106615919/?c=750000000",
    rating: 5
  },
  {
    id: 7,
    name: 'Logitech Pebble M350 Mouse Pink',
    price: 299,
    description: 'Minimalism, modern design and silent operation — these three concepts now characterize your workspace.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hf3/h6c/63858612731934.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hb9/h7c/63858615484446.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/logitech-pebble-m350-rozovyi-100370949/?c=750000000",
    rating: 5
  },
  {
    id: 8,
    name: 'Smart speaker Yandex Station Light pink',
    price: 299,
    description: 'Yandex.Light Station is a bright and compact smart speaker that is controlled by voice and touch buttons.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h7e/h5d/63998724243486.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/he1/h00/63998727225374.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/jandeks-stantsija-lait-rozovyi-102144561/?c=750000000",
    rating: 5
  },
  {
    id: 9,
    name: 'Fujifilm instax mini Instant Printing Camera 12 pink',
    price: 299,
    description: 'Vivid images with automatic exposure',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc3/hb9/70339826188318.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h02/hf6/70339826450462.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?c=750000000",
    rating: 5
  },
  {
    id: 10,
    name: 'Smeg TSF01PKEU pink toaster',
    price: 299,
    description: 'Smeg toasters combine ergonomics, functionality and aesthetic balance.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h11/hb3/63780429430814.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/he4/h1e/63780430151710.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/smeg-tsf01pkeu-rozovyi-11000157/?c=750000000",
    rating: 5
  },
  {
    id: 11,
    name: 'Smart Watch Apple Watch Series 9 GPS/M 41mm Pink',
    price: 399,
    description: 'The Apple Watch can help you track the steps taken and the calories burnt when you set your daily target.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h59/h79/83874219687966.png?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h12/83874219753502.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-41-mm-rozovyi-113398187/?c=750000000",
    rating: 5
  },
  {
    id: 12,
    name: 'Apple iPad mini 2021 Wi-Fi Tablet 8.3 inch 4GB/64GB Pink',
    price: 300,
    description: 'The Liquid Retina display is 8.3 inches across the entire front panel.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h20/ha0/64320468844574.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hcd/h17/64320477560862.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-ipad-mini-2021-wi-fi-8-3-djuim-4-gb-64-gb-rozovyi-102301468/?c=750000000",
    rating: 5
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
