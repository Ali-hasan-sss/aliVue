(function(){"use strict";var a={2489:function(a,t,e){var s=e(9746),o=e(5976);const r={id:"app"};function i(a,t,e,s,i,n){const l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(l)])}var n={name:"App"},l=e(1169);const c=(0,l.A)(n,[["render",i]]);var d=c,u=e(9053);function v(a,t,e,s,r,i){const n=(0,o.g2)("NavBar"),l=(0,o.g2)("CartBtn"),c=(0,o.g2)("HeroSiction"),d=(0,o.g2)("LatestSiction"),u=(0,o.g2)("adsPage"),v=(0,o.g2)("CategoryHome"),m=(0,o.g2)("FooTer");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(n,{class:"costom-font"}),(0,o.bF)(l),(0,o.bF)(c,{class:"costom-font"}),(0,o.bF)(d,{class:"costom-font"}),(0,o.bF)(u,{class:"costom-font"}),(0,o.bF)(v,{class:"costom-font"}),(0,o.bF)(m,{class:"costom-font"})])}var m=e.p+"img/logo.54302acb.png",p=e.p+"img/Youtube - Gold.762a0ed1.png",g=e.p+"img/instagram_Gold.95c2ba5b.png",f=e.p+"img/Twitter - Gold.eafd0530.png",h=e.p+"img/facebook_Gold.7fb5a7f4.png";const b={class:"container-fluid row nav-app"},k={class:"d-none d-lg-block col-lg-2"},y=(0,o.Lk)("img",{class:"logo",src:m,alt:"logo"},null,-1),w={class:"col-xl-10 col-lg-10"},L=(0,o.Fv)('<div class="social d-none d-lg-flex justify-content-end"><i class="fa-solid fa-search me-4 mt-2 search" data-bs-toggle="modal" data-bs-target="#3"></i><div class="modal fade" id="3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog bg-warning"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><form class="d-flex"><input type="text" class="form-control me-2" placeholder="search"><button class="btn btn-outline-warning">search</button></form></div></div></div></div><a href="https://www.youtube.com"><img class="social-icons me-2" src="'+p+'" alt="Youtube"></a><a href="https://www.instagram.com"><img src="'+g+'" alt="instagram" class="social-icons me-2"></a><a href="https://www.twitter.com"><img src="'+f+'" alt="Twitter" class="social-icons me-2"></a><a href="https://www.facebook.com"><img src="'+h+'" alt="facebook" class="social-icons me-2"></a></div>',1),C={class:"navbar navbar-expand-lg bg-black"},x={class:"container-fluid"},E=(0,o.Lk)("a",{class:"navbar-brand",href:"/"},[(0,o.Lk)("img",{class:"logo-nav d-xl-none d-xxl-none d-lg-none d-md-block d-sm-block",src:m,alt:"logo"})],-1),_=(0,o.Lk)("button",{class:"navbar-toggler btn-outline-warning ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon ms-auto"})],-1),F={class:"collapse navbar-collapse ms-auto",id:"navbarSupportedContent"},I={class:"navbar-nav me-auto mb-2 mb-lg-0 ms-auto text-end"},T=(0,o.Fv)('<li class="nav-item"><a class="nav-list active" aria-current="page" href="/">Home</a></li><li class="nav-item"><a class="nav-list" href="/category/electronics">Electronics</a></li><li class="nav-item"><a class="nav-list" href="/category/jewelery">jewely</a></li><li class="nav-item"><a class="nav-list" href="/category/men&#39;s%20clothing">Men Clothing</a></li><li class="nav-item"><a class="nav-list" href="/category/women&#39;s%20clothing">Wmen Clothing</a></li><li class="nav-item"><a class="nav-list" href="/category/Media_Center">Media Center</a></li><li class="nav-item"><a class="nav-list" href="/category/ContactUs">Contact Us</a></li>',7),A={key:0,class:"nav-item"},j={key:1,class:"nav-item"},O=(0,o.Fv)('<ul class="navbar-nav register-nav"><li class="nav-item"><a class="nav-list" href="/login">Login</a></li><li class="nav-item"><a class="nav-list" href="/signup">Register</a></li></ul>',1),X=[O],P=(0,o.Fv)('<li class="nav-item"><a class="nav-list" href="/category/Media_Center">Media Center</a></li><li class="nav-item"><form class="d-flex d-lg-none d-xl-none dxxl-none"><input type="text" class="form-control me-2" placeholder="search"><button class="btn btn-warning">search</button></form></li>',2);function M(a,t,e,s,r,i){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",b,[(0,o.Lk)("div",k,[(0,o.bF)(n,{to:"/"},{default:(0,o.k6)((()=>[y])),_:1})]),(0,o.Lk)("div",w,[L,(0,o.Lk)("div",null,[(0,o.Lk)("nav",C,[(0,o.Lk)("div",x,[E,_,(0,o.Lk)("div",F,[(0,o.Lk)("ul",I,[T,i.isLoggedIn?((0,o.uX)(),(0,o.CE)("li",A,[(0,o.Lk)("a",{class:"nav-list text-danger",to:"/logout",onClick:t[0]||(t[0]=(...a)=>i.logout&&i.logout(...a))},"LogOut")])):((0,o.uX)(),(0,o.CE)("li",j,X)),P])])])])])])])])}e(4114);var S={name:"NavBar",computed:{isLoggedIn(){return!!localStorage.getItem("email")}},methods:{logout(){localStorage.removeItem("email"),this.$router.push("/"),location.reload()}}};const R=(0,l.A)(S,[["render",M]]);var U=R,$=e(160),B=e.p+"img/Header 1.c9ec0aca.jpg",N=e.p+"img/Header 2.5ec15308.jpg",q=e.p+"img/Header 3.431b568d.jpg";const D={class:"container"},H=(0,o.Fv)('<div id="carouselExampleIndicators" class="carousel slide" data-v-4b754114><div class="carousel-inner" data-v-4b754114><div class="carousel-item active" data-v-4b754114><img src="'+B+'" class="d-block w-100" alt="..." data-v-4b754114></div><div class="carousel-item" data-v-4b754114><img src="'+N+'" class="d-block w-100" alt="..." data-v-4b754114></div><div class="carousel-item" data-v-4b754114><img src="'+q+'" class="d-block w-100" alt="..." data-v-4b754114></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" data-v-4b754114><span class="carousel-control-prev-icon" aria-hidden="true" data-v-4b754114></span><span class="visually-hidden" data-v-4b754114>Next</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" data-v-4b754114><span class="carousel-control-next-icon" aria-hidden="true" data-v-4b754114></span><span class="visually-hidden" data-v-4b754114>Prev</span></button></div>',1),Y={class:"radio"},G=["data-bs-slide-to","aria-current","aria-label","onClick"];function Q(a,t,e,s,r,i){return(0,o.uX)(),(0,o.CE)("div",D,[H,(0,o.Lk)("div",Y,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(3,((a,t)=>(0,o.Lk)("div",{key:t,class:(0,$.C4)(["ratio",{ratio1:r.activeIndex===t}]),type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":t,"aria-current":0===t?"true":"","aria-label":"الشريحة "+(t+1),onClick:a=>i.activ(t)},null,10,G))),64))])])}var V={name:"HeroSection",data(){return{activeIndex:0}},methods:{activ(a){this.activeIndex=a}}};const W=(0,l.A)(V,[["render",Q],["__scopeId","data-v-4b754114"]]);var J=W,K=e.p+"img/ALMOTTHEDON COMPANY Logo (3)1.a80ec683.png",z=e.p+"img/home-appliances-group-white-refrigerator-washing-machine-stove-microwave-oven-vacuum-cleaner-isolated-white-background-3d.d3ca8d26.jpg",Z=e.p+"img/heart_10826871.d030535b.png",aa=e.p+"img/beautiful-luxury-necklace-jewelry-stand-neck.44e920af.jpg",ta=e.p+"img/levitating-music-headphones-display.e4c5562a.jpg";const ea=(0,o.Fv)('<div class="container latest-section" data-v-05c68481><div class="title" data-v-05c68481><div class="container content" data-v-05c68481><div class="row justify-content-center" data-v-05c68481><div class="father col-12 col-md-8 d-flex align-item-center justify-content-center" data-v-05c68481><img src="'+K+'" alt="1" width="200px" class="d-none d-xl-block" data-v-05c68481><h2 class="text-center" data-v-05c68481>LATEST PRODUCTS</h2></div></div></div></div><div class="card-container row justify-content-center" data-v-05c68481><div class="product-card col-12 col-md-6 col-xl-4 d-flex justify-content-center" data-v-05c68481><div class="image-container" data-v-05c68481><img class="pro-img" src="'+z+'" alt="Product Image" data-v-05c68481><img class="icon" src="'+Z+'" alt="" data-v-05c68481></div><h2 class="text-center" data-v-05c68481>Home Appliances</h2><p class="price text-center text-warning" data-v-05c68481>AED 5000</p><button type="button" class="see-more" data-bs-toggle="modal" data-bs-target="#5" data-v-05c68481> SEE MORE </button><div class="modal fade" id="5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-05c68481><div class="modal-dialog" data-v-05c68481><div class="modal-content" data-v-05c68481><div class="modal-header" data-v-05c68481><h5 class="modal-title" id="exampleModalLabel" data-v-05c68481> product descrabtion </h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-05c68481></button></div><div class="modal-body" data-v-05c68481> The Olympic Games The Olympic Games, an international sports festival which takes place every four years, are particularly famous for athletics. But they also include individual sports, likeng were added, but in 349,all the games were . </div><div class="modal-footer" data-v-05c68481><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-05c68481> Close </button></div></div></div></div></div><div class="product-card col-12 col-md-6 col-xl-4 d-flex justify-content-center" data-v-05c68481><div class="image-container" data-v-05c68481><img class="pro-img" src="'+aa+'" data-v-05c68481><img class="icon" src="'+Z+'" alt="11" data-v-05c68481></div><h2 class="text-center" data-v-05c68481>Necklace</h2><p class="price text-center text-warning" data-v-05c68481>AED 1500</p><button type="button" class="see-more" data-bs-toggle="modal" data-bs-target="#1" data-v-05c68481> SEE MORE </button><div class="modal fade" id="1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-05c68481><div class="modal-dialog" data-v-05c68481><div class="modal-content" data-v-05c68481><div class="modal-header" data-v-05c68481><h5 class="modal-title" id="exampleModalLabel" data-v-05c68481> product descrabtion </h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-05c68481></button></div><div class="modal-body" data-v-05c68481> The Olympic Games The Olympic Games, an international sports festival which takes place every four years, are particularly famous for athletics. But they also include individual sports, like swimming, and team sports, like football and hockey. For sportsmen and sportswomen everywhere, taking part in the Games is usually the highlight of their careers. At first, the Olympic Games were part of a Greece festival. It started by running. Later, longer races and boxing were added, but in 349,all the games were stopped. </div><div class="modal-footer" data-v-05c68481><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-05c68481> Close </button></div></div></div></div></div><div class="product-card col-12 col-md-6 col-xl-4 d-flex justify-content-center" data-v-05c68481><div class="image-container" data-v-05c68481><img class="pro-img" src="'+ta+'" data-v-05c68481><img class="icon" src="'+Z+'" alt="" data-v-05c68481></div><h2 class="text-center" data-v-05c68481>Head Phones</h2><p class="price text-center text-warning" data-v-05c68481>AED 250</p><button type="button" class="btn-outline-warning see-more" data-bs-toggle="modal" data-bs-target="#2" data-v-05c68481> SEE MORE </button><div class="modal fade" id="2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-05c68481><div class="modal-dialog" data-v-05c68481><div class="modal-content" data-v-05c68481><div class="modal-header" data-v-05c68481><h5 class="modal-title" id="exampleModalLabel" data-v-05c68481> product descrabtion </h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-05c68481></button></div><div class="modal-body" data-v-05c68481> The Olympic Games The Olympic Games, an international sports festival which takes place every four years, are particularly famous fo added, but in 349,all the games were stopped. </div><div class="modal-footer" data-v-05c68481><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-05c68481> Close </button></div></div></div></div></div></div><div class="radio" data-v-05c68481><div class="ratio ratio1" data-v-05c68481></div><div class="ratio" data-v-05c68481></div><div class="ratio" data-v-05c68481></div><div class="ratio" data-v-05c68481></div></div></div>',1),sa=[ea];function oa(a,t,e,s,r,i){return(0,o.uX)(),(0,o.CE)("div",null,sa)}var ra={name:"LatestSiction"};const ia=(0,l.A)(ra,[["render",oa],["__scopeId","data-v-05c68481"]]);var na=ia,la=e.p+"img/portrait-young-woman-with-earrings-with-gems-isolated.d8ea47c9.jpg";const ca=a=>((0,o.Qi)("data-v-d1e25e2e"),a=a(),(0,o.jt)(),a),da={class:"container"},ua={class:"ads container-fluid"},va=ca((()=>(0,o.Lk)("div",{class:"line d-none d-lg-block"},null,-1))),ma=ca((()=>(0,o.Lk)("div",{class:"image-container d-none d-lg-block"},[(0,o.Lk)("img",{src:la})],-1))),pa={class:"text-container"},ga=ca((()=>(0,o.Lk)("h1",{class:"ads-title text-center"},"LUXURY JEWELRY COLLICTION",-1))),fa={class:"ads-discraption"},ha=ca((()=>(0,o.Lk)("p",{class:""}," ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking ",-1)));function ba(a,t,e,s,r,i){const n=(0,o.g2)("MoreBtn");return(0,o.uX)(),(0,o.CE)("div",da,[(0,o.Lk)("div",ua,[va,ma,(0,o.Lk)("div",pa,[ga,(0,o.Lk)("div",null,[(0,o.Lk)("div",fa,[ha,(0,o.bF)(n,{class:"btn"})])])])])])}const ka=a=>((0,o.Qi)("data-v-df7f5158"),a=a(),(0,o.jt)(),a),ya=ka((()=>(0,o.Lk)("button",{class:"see-more"},"See More",-1))),wa=[ya];function La(a,t,e,s,r,i){return(0,o.uX)(),(0,o.CE)("div",null,wa)}var Ca={name:"MoreBtn"};const xa=(0,l.A)(Ca,[["render",La],["__scopeId","data-v-df7f5158"]]);var Ea=xa,_a={name:"adsPage",components:{MoreBtn:Ea}};const Fa=(0,l.A)(_a,[["render",ba],["__scopeId","data-v-d1e25e2e"]]);var Ia=Fa;const Ta=a=>((0,o.Qi)("data-v-75ae3804"),a=a(),(0,o.jt)(),a),Aa={class:"container"},ja={key:0,class:"alert alert-danger",role:"alert"},Oa={key:1,class:"col-12 mb-4 category"},Xa=Ta((()=>(0,o.Lk)("h2",{class:"text-center text-warning p-4"},"Categories",-1))),Pa={class:"row"};function Ma(a,t,e,s,r,i){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",Aa,[r.hasError?((0,o.uX)(),(0,o.CE)("div",ja," cant fitch product check your conect ")):((0,o.uX)(),(0,o.CE)("div",Oa,[Xa,(0,o.Lk)("div",Pa,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.categories,(a=>((0,o.uX)(),(0,o.CE)("div",{key:a,class:"my-5 col-12 col-md-6 col-xl-3 d-flex justify-content-center"},[(0,o.bF)(n,{to:`/category/${a}`,class:"btn btn-outline-warning category-btn"},{default:(0,o.k6)((()=>[(0,o.eW)((0,$.v_)(a),1)])),_:2},1032,["to"])])))),128))])]))])}const Sa="https://fakestoreapi.com",Ra=async a=>{const t=await fetch(`${Sa}/products/${a}`);return await t.json()},Ua=async()=>{const a=await fetch(`${Sa}/products/categories`);return await a.json()},$a=async a=>{const t=await fetch(`${Sa}/products/category/${a}`);return await t.json()};var Ba={name:"CategoryHome",data(){return{category:this.$route.params.category,categories:[],products:[],hasError:!1}},async created(){await this.loadProducts(),await this.loadCategories()},watch:{"$route.params.category":"loadProducts"},methods:{async loadProducts(){try{this.products=await $a(this.$route.params.category)}catch(a){console.error("Error fetching products:",a),this.hasError=!0}},async loadCategories(){try{this.categories=await Ua()}catch(a){console.error("Error fetching categories:",a),this.hasError=!0}}}};const Na=(0,l.A)(Ba,[["render",Ma],["__scopeId","data-v-75ae3804"]]);var qa=Na,Da=e.p+"img/Youtube - White .ce1afb22.png",Ha=e.p+"img/instagram_White.c5723584.png",Ya=e.p+"img/Twitter - White .76c672b2.png",Ga=e.p+"img/facebook_White.5c9145f3.png";const Qa={class:"container"},Va=(0,o.Fv)('<div class="hr-gold" data-v-5f83545f></div><div class="row footer" data-v-5f83545f><div class="col-4 justify-content-start logo-social d-none d-lg-block" data-v-5f83545f><img class="logo" src="'+m+'" alt="logo" data-v-5f83545f><div class="social w-100 w-100 ms-auto" data-v-5f83545f><a href="https://www.youtube.com" data-v-5f83545f><img class="social-icons" src="'+Da+'" alt="Youtube" data-v-5f83545f></a><a href="https://www.instagram.com" data-v-5f83545f><img src="'+Ha+'" alt="instagram" class="social-icons" data-v-5f83545f></a><a href="https://www.twitter.com" data-v-5f83545f><img src="'+Ya+'" alt="Twitter" class="social-icons" data-v-5f83545f></a><a href="https://www.facebook.com" data-v-5f83545f><img src="'+Ga+'" alt="facebook" class="social-icons" data-v-5f83545f></a></div></div><div class="col-4 list" data-v-5f83545f><ul data-v-5f83545f><li class="nav-item" data-v-5f83545f><a class="nav-link active" aria-current="page" href="/" data-v-5f83545f>Home</a></li><li class="nav-item" data-v-5f83545f><a class="nav-link" href="/About_Us" data-v-5f83545f>About Us</a></li><li class="nav-item" data-v-5f83545f><a class="nav-link" href="/Contact_Us" data-v-5f83545f>Contact Us</a></li><li class="nav-item" data-v-5f83545f><a class="nav-link" href="/category/electronics" data-v-5f83545f>Electronics</a></li></ul><ul data-v-5f83545f><li class="nav-item" data-v-5f83545f><a class="nav-link" href="/category/jewelery" data-v-5f83545f>jewely</a></li><li class="nav-item" data-v-5f83545f><a class="nav-link" href="/category/men&#39;s%20clothing" data-v-5f83545f>Men Clothing</a></li><li class="nav-item" data-v-5f83545f><a class="nav-link" href="/category/women&#39;s%20clothing" data-v-5f83545f>Wmen Clothing</a></li><li class="nav-item" data-v-5f83545f><a class="nav-link" href="/Media_Center" data-v-5f83545f>Media Center</a></li></ul></div><div class="col-4 contact" data-v-5f83545f><ul data-v-5f83545f><li data-v-5f83545f><h3 class="active" data-v-5f83545f>Contact Us</h3></li><li class="text-warning" data-v-5f83545f>+971 56 715 5150</li><li class="text-warning" data-v-5f83545f>+971 56 715 5150</li><li data-v-5f83545f><a href="info@almotthedon.com" data-v-5f83545f>info@almotthedon</a></li></ul></div></div><div class="hr my-2" data-v-5f83545f></div><div class="coby-right" data-v-5f83545f><h5 class="text-center" data-v-5f83545f>© Almotthedon 2024.All Rights Reserved</h5></div>',4),Wa=[Va];function Ja(a,t,e,s,r,i){return(0,o.uX)(),(0,o.CE)("div",Qa,Wa)}var Ka={name:"FooTer"};const za=(0,l.A)(Ka,[["render",Ja],["__scopeId","data-v-5f83545f"]]);var Za=za;function at(a,t,e,s,r,i){const n=(0,o.g2)("router-view"),l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(n),(0,o.bF)(l,{to:"/cart",class:"floating-button"},{default:(0,o.k6)((()=>[(0,o.eW)("🛒")])),_:1})])}var tt={name:"CartBtn"};const et=(0,l.A)(tt,[["render",at]]);var st=et,ot={name:"HoMe",components:{NavBar:U,HeroSiction:J,LatestSiction:na,adsPage:Ia,CategoryHome:qa,FooTer:Za,CartBtn:st}};const rt=(0,l.A)(ot,[["render",v]]);var it=rt;const nt={class:"category container"},lt={class:"text-center text-warning m-5"},ct={key:0,class:"alert alert-danger"},dt={key:1,class:"row"},ut={class:"product-card m-2"},vt=["src"],mt={class:"content"},pt={class:"title"},gt=["onClick"],ft={class:"price m-3"};function ht(a,t,e,s,r,i){const n=(0,o.g2)("NavBar"),l=(0,o.g2)("CartBtn"),c=(0,o.g2)("router-link"),d=(0,o.g2)("FooTer");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(n),(0,o.bF)(l),(0,o.Lk)("div",nt,[(0,o.Lk)("h1",lt,(0,$.v_)(r.category),1),r.error?((0,o.uX)(),(0,o.CE)("div",ct,(0,$.v_)(r.error),1)):((0,o.uX)(),(0,o.CE)("div",dt,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.products,(a=>((0,o.uX)(),(0,o.CE)("div",{class:"col-12 col-md-6 col-xl-4 d-flex justify-content-center",key:a.id},[(0,o.Lk)("div",ut,[(0,o.bF)(c,{class:"link",to:`/product/${a.id}`},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:a.image,alt:"Product Image"},null,8,vt)])),_:2},1032,["to"]),(0,o.Lk)("div",mt,[(0,o.Lk)("div",pt,(0,$.v_)(a.title),1),(0,o.Lk)("div",{class:(0,$.C4)(["description",{expanded:a.isExpanded}])},(0,$.v_)(a.description),3)]),(0,o.Lk)("div",{class:"read-more",onClick:t=>i.toggleDescription(a.id)},(0,$.v_)(a.isExpanded?"Read Less":"Read More"),9,gt),(0,o.Lk)("div",ft,"$"+(0,$.v_)(a.price),1)])])))),128))]))]),(0,o.bF)(d)])}var bt={name:"CateGory",components:{NavBar:U,CartBtn:st,FooTer:Za},data(){return{category:this.$route.params.category,products:[],error:null}},methods:{async fetchProducts(){try{const a=await $a(this.category);this.products=a.map((a=>({...a,isExpanded:!1})))}catch(a){this.error="Failed to fetch products.",console.error("Error fetching products:",a)}},toggleDescription(a){const t=this.products.find((t=>t.id===a));t&&(t.isExpanded=!t.isExpanded)}},created(){this.fetchProducts()},watch:{"$route.params.category":function(a){this.category=a,this.fetchProducts()}}};const kt=(0,l.A)(bt,[["render",ht],["__scopeId","data-v-070cd25b"]]);var yt=kt;const wt={class:"container product"},Lt={class:"text-center m-4"},Ct=["src"],xt={class:"dis w-5"},Et={class:"price"};function _t(a,t,e,s,r,i){const n=(0,o.g2)("NavBar"),l=(0,o.g2)("CartBtn"),c=(0,o.g2)("FooTer");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(n),(0,o.bF)(l),(0,o.Lk)("div",wt,[(0,o.Lk)("h1",Lt,(0,$.v_)(r.product.title),1),(0,o.Lk)("img",{src:r.product.image,alt:"Product Image"},null,8,Ct),(0,o.Lk)("p",xt,(0,$.v_)(r.product.description),1),(0,o.Lk)("p",Et,"$"+(0,$.v_)(r.product.price),1),(0,o.Lk)("button",{class:"btn btn-outline-warning w-5",onClick:t[0]||(t[0]=t=>a.addToCart(r.product))}," Add to Cart ")]),(0,o.bF)(c)])}var Ft=e(1449),It={name:"proDuct",components:{NavBar:U,CartBtn:st,FooTer:Za},data(){return{product:{}}},async created(){this.product=await Ra(this.$route.params.id)},methods:{...(0,Ft.i0)(["addToCart"])}};const Tt=(0,l.A)(It,[["render",_t],["__scopeId","data-v-0e6673b2"]]);var At=Tt;const jt=a=>((0,o.Qi)("data-v-68a4997e"),a=a(),(0,o.jt)(),a),Ot={class:"container cart"},Xt=jt((()=>(0,o.Lk)("h1",{class:"text-center text-warning"},"Shopping Cart",-1))),Pt={key:0,class:"text-danger text-center"},Mt={key:1,class:"row"},St=["src"],Rt={class:"text-light"},Ut={class:"h4 text-warning"},$t=["onUpdate:modelValue","onChange"],Bt=["onClick"],Nt={class:"text-danger"};function qt(a,t,e,r,i,n){const l=(0,o.g2)("NavBar"),c=(0,o.g2)("FooTer");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(l),(0,o.Lk)("div",Ot,[Xt,0===a.cartItems.length?((0,o.uX)(),(0,o.CE)("div",Pt," Your cart is empty ")):((0,o.uX)(),(0,o.CE)("div",Mt,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.cartItems,(t=>((0,o.uX)(),(0,o.CE)("div",{class:"col-6 col-lg-4 item",key:t.id},[(0,o.Lk)("img",{src:t.image,alt:"Product Image",class:"product-image"},null,8,St),(0,o.Lk)("h5",Rt,(0,$.v_)(t.title),1),(0,o.Lk)("p",Ut,(0,$.v_)(t.price)+" $",1),(0,o.bo)((0,o.Lk)("input",{class:"input textlight",type:"number","onUpdate:modelValue":a=>t.quantity=a,onChange:e=>a.updateQuantity({productId:t.id,quantity:t.quantity}),min:"1"},null,40,$t),[[s.Jo,t.quantity,void 0,{number:!0}]]),(0,o.Lk)("button",{class:"btn btn-danger",onClick:e=>a.removeFromCart(t.id)}," Remove ",8,Bt)])))),128)),(0,o.Lk)("p",Nt,"Total: "+(0,$.v_)(a.cartTotal)+" $",1)]))]),(0,o.bF)(c)])}var Dt={name:"CartView",components:{NavBar:U,FooTer:Za},computed:{...(0,Ft.aH)(["cartItems"]),...(0,Ft.L8)(["cartTotal"])},methods:{...(0,Ft.i0)(["removeFromCart","updateQuantity"])}};const Ht=(0,l.A)(Dt,[["render",qt],["__scopeId","data-v-68a4997e"]]);var Yt=Ht;const Gt=a=>((0,o.Qi)("data-v-67dd643d"),a=a(),(0,o.jt)(),a),Qt={class:"container my-5 login"},Vt={class:"form-container"},Wt=Gt((()=>(0,o.Lk)("h2",null,"LogeIn",-1))),Jt={class:"input-group"},Kt=Gt((()=>(0,o.Lk)("label",{for:"email"},"Your Email",-1))),zt={class:"input-group"},Zt=Gt((()=>(0,o.Lk)("label",{for:"password"},"Your Password",-1))),ae=Gt((()=>(0,o.Lk)("button",{type:"submit"},"LogIn",-1))),te={key:0,class:"error"};function ee(a,t,e,r,i,n){const l=(0,o.g2)("NavBar"),c=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(l),(0,o.Lk)("div",Qt,[(0,o.Lk)("div",Vt,[Wt,(0,o.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...a)=>n.login&&n.login(...a)),["prevent"]))},[(0,o.Lk)("div",Jt,[Kt,(0,o.bo)((0,o.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=a=>i.email=a),required:""},null,512),[[s.Jo,i.email]])]),(0,o.Lk)("div",zt,[Zt,(0,o.bo)((0,o.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=a=>i.password=a),required:""},null,512),[[s.Jo,i.password]])]),ae,i.error?((0,o.uX)(),(0,o.CE)("div",te,(0,$.v_)(i.error),1)):(0,o.Q3)("",!0)],32)])]),(0,o.bF)(c)])}var se=e(8194),oe={name:"LogIn",components:{NavBar:U,Footer:Za},data(){return{email:"",password:"",error:""}},methods:{async login(){if(this.error="",this.email&&this.password)try{const a=await se.A.post("http://127.0.0.1:8000/api/login",{email:this.email,password:this.password});console.log("logein is done",a.data),localStorage.setItem("email",this.email),this.$router.push("/")}catch(a){a.response&&422===a.response.status?this.error="Email or Password is wrong":a.response&&401===a.response.status?this.error="you are not registered":this.error="error please try again later",console.error("error",a)}else this.error="all inputs is required"}}};const re=(0,l.A)(oe,[["render",ee],["__scopeId","data-v-67dd643d"]]);var ie=re;const ne=a=>((0,o.Qi)("data-v-0d2c018e"),a=a(),(0,o.jt)(),a),le={class:"container my-5 regester"},ce={class:"form-container"},de=ne((()=>(0,o.Lk)("h2",null,"Register",-1))),ue={class:"input-group"},ve=ne((()=>(0,o.Lk)("label",{for:"name"},"Your Full Name:",-1))),me={class:"input-group"},pe=ne((()=>(0,o.Lk)("label",{for:"email"}," Your Email:",-1))),ge={class:"input-group"},fe=ne((()=>(0,o.Lk)("label",{for:"password"},"Password:",-1))),he={class:"input-group"},be=ne((()=>(0,o.Lk)("label",{for:"confirmPassword"},"Rebeat Your Password:",-1))),ke=ne((()=>(0,o.Lk)("button",{type:"submit"},"Register",-1))),ye={key:0,class:"error"};function we(a,t,e,r,i,n){const l=(0,o.g2)("Navbar"),c=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(l),(0,o.Lk)("div",le,[(0,o.Lk)("div",ce,[de,(0,o.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...a)=>n.register&&n.register(...a)),["prevent"]))},[(0,o.Lk)("div",ue,[ve,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=t=>a.name=t),required:""},null,512),[[s.Jo,a.name]])]),(0,o.Lk)("div",me,[pe,(0,o.bo)((0,o.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=a=>i.email=a),required:""},null,512),[[s.Jo,i.email]])]),(0,o.Lk)("div",ge,[fe,(0,o.bo)((0,o.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=a=>i.password=a),required:""},null,512),[[s.Jo,i.password]])]),(0,o.Lk)("div",he,[be,(0,o.bo)((0,o.Lk)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[3]||(t[3]=a=>i.confirmPassword=a),required:""},null,512),[[s.Jo,i.confirmPassword]])]),ke,i.error?((0,o.uX)(),(0,o.CE)("div",ye,(0,$.v_)(i.error),1)):(0,o.Q3)("",!0)],32)])]),(0,o.bF)(c)])}var Le={name:"SignUp",components:{Navbar:U,Footer:Za},data(){return{email:"",password:"",confirmPassword:"",error:""}},methods:{async register(){if(this.error="",this.email&&this.password&&this.confirmPassword)if(this.password.length<8)this.error="password will be up 8char";else if(this.password===this.confirmPassword)try{const a=await se.A.post("http://127.0.0.1:8000/api/register",{name:this.name,email:this.email,password:this.password,password_confirmation:this.confirmPassword});console.log("regester is done",a.data),localStorage.setItem("email",this.email),this.$router.push("/")}catch(a){if(a.response&&422===a.response.status){const t=a.response.data.errors;this.error=t?Object.values(t).flat().join(", "):"this Email is allredy teaken"}else this.error="error pleas try again later";console.error("error",a)}else this.error="password is not ";else this.error="all inputs is required"}}};const Ce=(0,l.A)(Le,[["render",we],["__scopeId","data-v-0d2c018e"]]);var xe=Ce;const Ee=a=>((0,o.Qi)("data-v-a15dd0cc"),a=a(),(0,o.jt)(),a),_e={class:"nav-dashboard"},Fe=Ee((()=>(0,o.Lk)("h1",null,"store",-1))),Ie=Ee((()=>(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",{class:"link",href:"/dashboard"},"user")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{class:"link",href:"/#"},"product")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{class:"link",href:"/#"},"admin")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{class:"link",href:"/#"},"store")])],-1))),Te={class:"container"},Ae=Ee((()=>(0,o.Lk)("h1",{class:"title"},"users",-1))),je=Ee((()=>(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"id"),(0,o.Lk)("th",null,"Name"),(0,o.Lk)("th",null,"Email"),(0,o.Lk)("th",null,"action")])],-1))),Oe=Ee((()=>(0,o.Lk)("i",{class:"fa-solid fa-pen-to-square update"},null,-1))),Xe=["onClick"];function Pe(a,t,e,s,r,i){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("nav",_e,[Fe,Ie,(0,o.bF)(n,{class:"link",to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("go to website")])),_:1})]),(0,o.Lk)("div",Te,[Ae,(0,o.Lk)("table",null,[je,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.users,((a,t)=>((0,o.uX)(),(0,o.CE)("tr",{key:a.id},[(0,o.Lk)("td",null,(0,$.v_)(t+1),1),(0,o.Lk)("td",null,(0,$.v_)(a.name),1),(0,o.Lk)("td",null,(0,$.v_)(a.email),1),(0,o.Lk)("td",null,[(0,o.bF)(n,{class:"link",to:`/${a.id}`},{default:(0,o.k6)((()=>[Oe])),_:2},1032,["to"]),(0,o.Lk)("i",{class:"fa-solid fa-trash delete",onClick:()=>i.delUser(a.id)},null,8,Xe)])])))),128))])])])])}var Me={name:"DashBoard",data(){return{users:[]}},created(){fetch("http://127.0.0.1:8000/api/user/show").then((a=>a.json())).then((a=>{this.users=a})).catch((a=>{console.error("There was an error fetching the users!",a)}))},methods:{async delUser(a){await se.A.delete(`http://127.0.0.1:8000/api/user/delete/${a}`),location.reload()}}};const Se=(0,l.A)(Me,[["render",Pe],["__scopeId","data-v-a15dd0cc"]]);var Re=Se;const Ue=[{path:"/",component:it},{path:"/login",component:ie},{path:"/signup",component:xe},{path:"/category/:category",component:yt},{path:"/product/:id",component:At},{path:"/cart",component:Yt},{path:"/dashboard",component:Re}],$e=(0,u.aE)({history:(0,u.LA)(),routes:Ue});var Be=$e,Ne=(0,Ft.y$)({state:{cartItems:[]},getters:{cartItemCount:a=>a.cartItems.length,cartTotal:a=>a.cartItems.reduce(((a,t)=>a+t.price*t.quantity),0),getCartItems:a=>a.cartItems},mutations:{ADD_TO_CART(a,t){const e=a.cartItems.find((a=>a.id===t.id));e?e.quantity+=t.quantity:(a.cartItems.push(t),t.quantity=1)},REMOVE_FROM_CART(a,t){a.cartItems=a.cartItems.filter((a=>a.id!==t))},UPDATE_QUANTITY(a,{productId:t,quantity:e}){const s=a.cartItems.find((a=>a.id===t));s&&(s.quantity=e)},CLEAR_CART(a){a.cartItems=[]}},actions:{addToCart({commit:a},t){a("ADD_TO_CART",t)},removeFromCart({commit:a},t){a("REMOVE_FROM_CART",t)},updateQuantity({commit:a},t){a("UPDATE_QUANTITY",t)},clearCart({commit:a}){a("CLEAR_CART")}},modules:{}});e(1292);(0,s.Ef)(d).use(Be).use(Ne).mount("#app")}},t={};function e(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return a[s].call(r.exports,r,r.exports,e),r.exports}e.m=a,function(){var a=[];e.O=function(t,s,o,r){if(!s){var i=1/0;for(d=0;d<a.length;d++){s=a[d][0],o=a[d][1],r=a[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(e.O).every((function(a){return e.O[a](s[l])}))?s.splice(l--,1):(n=!1,r<i&&(i=r));if(n){a.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=a.length;d>0&&a[d-1][2]>r;d--)a[d]=a[d-1];a[d]=[s,o,r]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var s in t)e.o(t,s)&&!e.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:t[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){e.p="/aliVue/"}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,s){var o,r,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==a[t]}))){for(o in n)e.o(n,o)&&(e.m[o]=n[o]);if(l)var d=l(e)}for(t&&t(s);c<i.length;c++)r=i[c],e.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return e.O(d)},s=self["webpackChunkali_app"]=self["webpackChunkali_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=e.O(void 0,[504],(function(){return e(2489)}));s=e.O(s)})();
//# sourceMappingURL=app.b3b8513e.js.map