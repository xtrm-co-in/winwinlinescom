(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["conactus"],{"1f96":function(e,t,c){"use strict";var n=c("7a23"),a={id:"ft-breadcrumb",class:"ft-breadcrumb-section position-relative",style:{"background-image":"url(../../assets/img/bg/bread-bg.jpg)"}},o=Object(n["g"])("span",{class:"background_overlay"},null,-1),i={class:"container"},l={class:"ft-breadcrumb-content headline text-center position-relative"},s={class:"ft-breadcrumb-list ul-li"},r=Object(n["i"])("Home");function d(e,t,c,d,b,u){var m=Object(n["x"])("router-link");return Object(n["s"])(),Object(n["f"])("section",a,[o,Object(n["g"])("div",i,[Object(n["g"])("div",l,[Object(n["g"])("h2",null,Object(n["z"])(b.routeName),1),Object(n["g"])("div",s,[Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["j"])(m,{to:"/"},{default:Object(n["C"])((function(){return[r]})),_:1})]),Object(n["g"])("li",null,Object(n["z"])(b.routeName),1)])])])])])}c("b0c0");var b=c("1157"),u=c.n(b),m={data:function(){return{routeName:""}},created:function(){this.routeName=this.$route.name},mounted:function(){this.MobileMenu()},methods:{MobileMenu:function(){u()(".open_mobile_menu").on("click",(function(){u()(".mobile_menu_wrap").toggleClass("mobile_menu_on")})),u()(".open_mobile_menu").on("click",(function(){u()("body").toggleClass("mobile_menu_overlay_on")})),u()(".mobile_menu li.dropdown ul").length&&(u()(".mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>'),u()(".mobile_menu li.dropdown .dropdown-btn").on("click",(function(){u()(this).prev("ul").slideToggle(500)}))),u()(".dropdown-btn").on("click",(function(){u()(this).toggleClass("toggle-open")}))}}},g=c("6b0d"),f=c.n(g);const j=f()(m,[["render",d]]);t["a"]=j},fa06:function(e,t,c){"use strict";c.r(t);var n=c("7a23");function a(e,t,c,a,o,i){var l=Object(n["x"])("breadCrumb"),s=Object(n["x"])("contact");return Object(n["s"])(),Object(n["f"])(n["a"],null,[Object(n["j"])(l),Object(n["j"])(s)],64)}var o=c("1f96"),i={id:"ft-contact-page",class:"ft-contact-page-section page-padding"},l={class:"container"},s={class:"ft-contact-page-content"},r={class:"row"},d={class:"col-lg-6"},b={class:"ft-contact-page-text-wrapper"},u=Object(n["g"])("div",{class:"ft-section-title-2 headline pera-content"},[Object(n["g"])("span",{class:"sub-title"},"Contact Us"),Object(n["g"])("h2",null,"Get in Touch And We’ll Help Your Business ")],-1),m={class:"ft-contact-page-contact-info"},g={class:"ft-contact-cta-items d-flex"},f=Object(n["g"])("div",{class:"ft-contact-cta-icon d-flex align-items-center justify-content-center"},[Object(n["g"])("i",{class:"fal fa-map-marker-alt"})],-1),j={class:"ft-contact-cta-text headline pera-content"},p=Object(n["g"])("h3",null,"Office address",-1),O={class:"ft-contact-cta-items d-flex"},v=Object(n["g"])("div",{class:"ft-contact-cta-icon d-flex align-items-center justify-content-center"},[Object(n["g"])("i",{class:"fas fa-phone-alt"})],-1),h={class:"ft-contact-cta-text headline pera-content"},w=Object(n["g"])("h3",null,"Telephone number",-1),x={class:"ft-contact-cta-items d-flex"},y=Object(n["g"])("div",{class:"ft-contact-cta-icon d-flex align-items-center justify-content-center"},[Object(n["g"])("i",{class:"far fa-envelope"})],-1),_={class:"ft-contact-cta-text headline pera-content"},k=Object(n["g"])("h3",null,"Mail address",-1),S={class:"col-lg-6"},C={class:"ft-contact-page-form-wrapper headline"},M=Object(n["g"])("h3",{class:"text-center"},"Contact Us",-1),N=Object(n["h"])('<div class="row"><div class="col-lg-6"><input type="text" name="name" id="name" placeholder="Your Name" required></div><div class="col-lg-6"><input type="email" name="email" id="email" placeholder="Your Email" required></div><div class="col-lg-6"><input type="text" name="phone" id="phone" placeholder="Phone" required></div><div class="col-lg-6"><input type="text" name="subject" id="subject" placeholder="Subject" required></div><div class="col-lg-12"><textarea name="message" id="message" placeholder="Your Message" required></textarea></div><div class="col-lg-12"><button type="submit">Submit</button></div></div>',1),T=[N];function D(e,t,c,a,o,N){return Object(n["s"])(),Object(n["f"])("section",i,[Object(n["g"])("div",l,[Object(n["g"])("div",s,[Object(n["g"])("div",r,[Object(n["g"])("div",d,[Object(n["g"])("div",b,[u,Object(n["g"])("div",m,[Object(n["g"])("div",g,[f,Object(n["g"])("div",j,[p,Object(n["g"])("p",null,Object(n["z"])(o.mainData.address2),1)])]),Object(n["g"])("div",O,[v,Object(n["g"])("div",h,[w,Object(n["g"])("p",null,Object(n["z"])(o.mainData.contact_no),1)])]),Object(n["g"])("div",x,[y,Object(n["g"])("div",_,[k,Object(n["g"])("p",null,Object(n["z"])(o.mainData.email),1)])])])])]),Object(n["g"])("div",S,[Object(n["g"])("div",C,[M,Object(n["g"])("form",{id:"contact-form2",onSubmit:t[0]||(t[0]=function(e){return N.sendmail2()}),action:"javascript:void(0)",class:"contact-form",method:"POST"},T,32)])])])])])])}var q=c("1157"),z=c.n(q),Y=c("7752"),B=c("3d20"),E=c.n(B),F=c("0a26");window.Swal=E.a;var P={data:function(){return{mainData:""}},created:function(){this.mainData=F.companyDeatils},methods:{sendmail2:function(){var e=z()("#name").val(),t=z()("#email").val(),c=z()("#phone").val(),n=z()("#subject").val(),a=z()("#message").val(),o="First Name: "+e+"<br>Email: "+t+"<br>Phone: "+c+"<br>Subject: "+n+"<br>Message: "+a;Y["a"].send({SecureToken:"3152fc5e-458f-4f65-ada8-bdaf7f5b7a0b",To:"info@winwinlines.com",From:"winwincontainerline@gmail.com",Subject:"New message on contact from "+e,Body:o}).then((function(e){"OK"==e?(new E.a("Thank You For Message Us!","We will contact you as soon as possible!","success"),document.getElementById("contact-form2").reset()):(console.error(e),new E.a("Oops!","Something went wrong, please try again!","error"),document.getElementById("contact-form2").reset())}))}}},U=c("6b0d"),H=c.n(U);const I=H()(P,[["render",D]]);var J=I,W={components:{breadCrumb:o["a"],contact:J},data:function(){return{}}};const A=H()(W,[["render",a]]);t["default"]=A}}]);
//# sourceMappingURL=conactus.57082aba.js.map