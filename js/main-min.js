var imageFolder="images/";var resumeLink="https://drive.google.com/open?id=1h3bmMUV9P9L4Ey9-NGePv0ZaEv0PKHWO";var particleContainerMobileOffset=320;var particleContainerDesktopOffset=150;var techonologies=["c#","c++","python","javascript","jQuery","html5","css3","sass","php","node","mongoDB","postman","wordpress","atom","visual studio","visual studio code","brackets","unity 3d","windows","linux","osx","bash","cmd","git","github","bitbucket"];var navToMobile=!0;$("#mobile-menu-active").hide();function SetMobileNavigation(enable){if($(window).width()<930){if(enable){$("#mobile-menu").hide();$("#mobile-menu-active").show();$("#nav-bar").show();$("#introduction").css("top","70vh")}else{$("#mobile-menu").show();$("#mobile-menu-active").hide();$("#nav-bar").hide();$("#introduction").css("top","40vh")}}}
$("#mobile-menu").click(function(){SetMobileNavigation(!0)});$("#mobile-menu-active").click(function(){SetMobileNavigation(!1)});$(window).resize(function(){if($(window).width()>930){$("#particle-container").css("top",particleContainerDesktopOffset);$("#nav-bar").show()}
if($(window).width()>930){if(!navToMobile){SetMobileNavigation(!0);$("#mobile-menu").hide();$("#mobile-menu-active").hide();navToMobile=!0;$("#introduction").css("top","40vh")}}else{if(navToMobile){SetMobileNavigation(!1);navToMobile=!1}}});console.log(document.getElementById("zombie-thing-image").offsetTop+200);$("#sactohicoffee-image").css("visibility","hidden");$("#zombie-thing-image").css("visibility","hidden");$(window).scroll(function(){if($(this).scrollTop()>20){$("#sactohicoffee-image").css("visibility","visible");$("#sactohicoffee-image").addClass("animated fadeInLeft")}
if($(this).scrollTop()>document.getElementById("zombie-thing-image").offsetTop-500){$("#zombie-thing-image").css("visibility","visible");$("#zombie-thing-image").addClass("animated fadeInLeft")}
if($(this).scrollTop()>50){$(".navbar").addClass("fixed-top");$(".navbar").css("background","RGBA(255,255,255,.9)")}else{$(".navbar").removeClass("fixed-top");$(".navbar").css("background","RGBA(255,255,255,1)")}
if($(this).scrollTop()>document.getElementById("img-potrait").offsetTop-300){$("#img-potrait").css("visibility","visible");$("#img-potrait").addClass("animated fadeIn")}
if($(this).scrollTop()>document.getElementById("tech-list").offsetTop-600){$(".tech-list li").css("visibility","visible");$(".tech-list li").addClass("animated fadeIn")}});$("#project-link").click(function(){$("html, body").animate({scrollTop:$("#sactohicoffee-image").offset().top-190},1000)});$("#about").click(function(){$("html, body").animate({scrollTop:$("#about-section").offset().top-100}),1000});$("#contact").click(function(){$("html, body").animate({scrollTop:$("#contact-section").offset().top-50}),1000});$("#header-title").click(function(){console.log("hello");$("html, body").animate({scrollTop:0}),1000});$(document).ready(function(){for(var i=0;i<techonologies.length;i++)
$(".tech-list ul").append("<li>"+techonologies[i]+"</li>");particlesJS.load("particles-js","js/particles.js-master/particles.json",function(){console.log("callback - particles.js config loaded")});$(".resume-links").attr("href",resumeLink);$(".resume-links").css("visibility","visible");$(".resume-links").addClass("animated fadeIn")})