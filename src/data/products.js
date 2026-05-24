// src/data/products.js

const products = [

  /* ===================================== */
  /* ===== BEAUTY ===== */
  /* ===================================== */

  {
    id:2,
    name:"Lipstick",
    category:"beauty",
    price:399,
    mrp:699,
    rating:4.2,
    reviews:190,
    offer:"30% OFF",
    image:"https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg"
  },

  {
    id:3,
    name:"Perfume",
    category:"beauty",
    price:899,
    mrp:1499,
    rating:4.7,
    reviews:420,
    offer:"40% OFF",
    image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=900"
  },

  {
    id:53,
    name:"Aloe Vera Gel",
    category:"beauty",
    price:299,
    mrp:499,
    rating:4.4,
    reviews:190,
    offer:"25% OFF",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVYy_dD5oR6wxUgCYAa0r2j-jJbfqBFdQIld3nd9l9PvpAHo81XZBPhrUVucpp5gcS_oUD8ZGiREPyJdFPHsKfDOQXJwjGQqb-YfmprW7NrqLMh2NSKSX9BsqzPHsHPF0HG9-5j1lKry0v/s1600/AVGSplash.jpg"
  },

  /* ===================================== */
  /* ===== FASHION ===== */
  /* ===================================== */

  {
    id:8,
    name:"Men Shirt",
    category:"fashion",
    price:999,
    mrp:1599,
    rating:4.2,
    reviews:260,
    offer:"25% OFF",
    image:"https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
  },

  {
    id:71,
    name:"Floral Maxi Dress",
    category:"fashion",
    price:2299,
    mrp:3599,
    rating:4.7,
    reviews:420,
    offer:"36% OFF",
    image:"https://www.labelbyanuja.in/cdn/shop/files/20230511_231433000_iOS.jpg?v=1686983407"
  },

  {
    id:94,
    name:"Denim Jeans",
    category:"fashion",
    price:1999,
    mrp:2999,
    rating:4.6,
    reviews:320,
    offer:"30% OFF",
    image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=900"
  },

  /* ===================================== */
  /* ===== TOYS ===== */
  /* ===================================== */

  {
    id:48,
    name:"Remote Control Car",
    category:"toys",
    price:1499,
    mrp:2499,
    rating:4.5,
    reviews:260,
    offer:"35% OFF",
    image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900"
  },

  {
    id:49,
    name:"Barbie Doll",
    category:"toys",
    price:999,
    mrp:1599,
    rating:4.4,
    reviews:210,
    offer:"25% OFF",
    image:"https://rukminim2.flixcart.com/image/480/480/xif0q/action-figure/j/8/6/3-cute-realistic-barbie-doll-adjustable-princess-doll-dressable-original-imahffx7qvzh5xze.jpeg?q=90"
  },

  {
    id:65,
    name:"Lego Building Set",
    category:"toys",
    price:2499,
    mrp:3999,
    rating:4.8,
    reviews:520,
    offer:"38% OFF",
    image:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=900"
  },

  /* ===================================== */
  /* ===== ACCESSORIES ===== */
  /* ===================================== */

  {
    id:35,
    name:"Women Watch",
    category:"accessories",
    price:2499,
    mrp:3999,
    rating:4.5,
    reviews:310,
    offer:"35% OFF",
    image:"https://cdn.luxe.digital/media/2020/09/17134727/best-women-watches-vincero-luxe-digital.jpg"
  },

  {
    id:61,
    name:"Silver Ring",
    category:"accessories",
    price:799,
    mrp:1499,
    rating:4.4,
    reviews:260,
    offer:"35% OFF",
    image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900"
  },

  {
    id:99,
    name:"Pearl Necklace",
    category:"accessories",
    price:1499,
    mrp:2499,
    rating:4.6,
    reviews:280,
    offer:"35% OFF",
    image:"https://aferando.com/cdn/shop/files/BeautifulElegantLayeredWhitePearlNecklace_960x540.jpg?v=1693149605"
  },

  /* ===================================== */
  /* ===== FOOTWEAR ===== */
  /* ===================================== */

  {
    id:18,
    name:"Running Shoes",
    category:"footwear",
    price:2499,
    mrp:3999,
    rating:4.7,
    reviews:520,
    offer:"35% OFF",
    image:"https://www.campusshoes.com/cdn/shop/products/ROYCE-2_CG-248_BLU-SKY_0ed62da7-c7b2-4e4e-8434-5c093f933f98.jpg?v=1757743935"
  },

  {
    id:33,
    name:"Women Slipper",
    category:"footwear",
    price:799,
    mrp:1299,
    rating:4.4,
    reviews:260,
    offer:"25% OFF",
    image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900"
  },

  

  {
    id:76,
    name:"Formal Shoes",
    category:"footwear",
    price:2499,
    mrp:3999,
    rating:4.7,
    reviews:330,
    offer:"38% OFF",
    image:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=900"
  },

  /* ===================================== */
  /* ===== ELECTRONICS ===== */
  /* ===================================== */

  {
    id:22,
    name:"Laptop",
    category:"electronics",
    price:55999,
    mrp:65999,
    rating:4.8,
    reviews:740,
    offer:"10% OFF",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=900"
  },

  {
    id:51,
    name:"iPhone 14",
    category:"electronics",
    price:69999,
    mrp:79999,
    rating:4.8,
    reviews:740,
    offer:"12% OFF",
    image:"https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg"
  },

  {
    id:60,
    name:"DSLR Camera",
    category:"electronics",
    price:54999,
    mrp:64999,
    rating:4.9,
    reviews:350,
    offer:"15% OFF",
    image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900"
  },

  

  /* ===================================== */
  /* ===== APPLIANCES ===== */
  /* ===================================== */

  {
    id:25,
    name:"Air Fryer",
    category:"appliances",
    price:5999,
    mrp:8999,
    rating:4.6,
    reviews:390,
    offer:"35% OFF",
    image:"https://i5.walmartimages.com/seo/Philips-Premium-Airfryer-XXL-with-Fat-Removal-and-Rapid-Air-Technology-Black_4189e6bd-7005-4711-a64d-66bb9715c1e2.e0c96795e4ae69d681aaa6681747e143.jpeg"
  },

  {
    id:29,
    name:"Air Cooler",
    category:"appliances",
    price:8999,
    mrp:12999,
    rating:4.4,
    reviews:310,
    offer:"30% OFF",
    image:"https://th.bing.com/th/id/OIP.nJyVeaV7-eKMSUOEzVkk5wHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },

  {
    id:31,
    name:"Refrigerator",
    category:"appliances",
    price:28999,
    mrp:36999,
    rating:4.5,
    reviews:480,
    offer:"18% OFF",
    image:"https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=900"
  },

  {
    id:63,
    name:"Rice Cooker",
    category:"appliances",
    price:3499,
    mrp:4999,
    rating:4.5,
    reviews:320,
    offer:"30% OFF",
    image:"https://m.media-amazon.com/images/I/71PjDGkFP+L.jpg"
  },

  /* ===================================== */
  /* ===== KIDS ===== */
  /* ===================================== */

  {
    id:80,
    name:"Kids School Bag",
    category:"kids",
    price:999,
    mrp:1599,
    rating:4.5,
    reviews:220,
    offer:"30% OFF",
    image:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=900"
  },

  {
    id:81,
    name:"Kids Water Bottle",
    category:"kids",
    price:499,
    mrp:899,
    rating:4.4,
    reviews:180,
    offer:"25% OFF",
    image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=900"
  },

  {
    id:83,
    name:"Kids Cap",
    category:"kids",
    price:699,
    mrp:1199,
    rating:4.3,
    reviews:150,
    offer:"20% OFF",
    image:"https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=900"
  },

  /* ===================================== */
  /* ===== BOOKS ===== */
  /* ===================================== */

  {
    id:84,
    name:"The Psychology Of Money",
    category:"books",
    price:599,
    mrp:899,
    rating:4.9,
    reviews:840,
    offer:"33% OFF",
    image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=900"
  },

  {
    id:85,
    name:"Think And Grow Rich",
    category:"books",
    price:499,
    mrp:799,
    rating:4.8,
    reviews:620,
    offer:"30% OFF",
    image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=900"
  },

  {
    id:86,
    name:"Ikigai",
    category:"books",
    price:399,
    mrp:699,
    rating:4.7,
    reviews:510,
    offer:"28% OFF",
    image:"https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=900"
  }

];

export default products;