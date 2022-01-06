/* global console,alret,prompt */
var coverNumberForWard = 1,
    backGroundId = document.getElementById("cover").style,
    hText = document.getElementById("Htext"),
    pText = document.getElementById("Ptext");

function changeCoverForWard(){
    "use strict";

    coverNumberForWard++;
    if(coverNumberForWard > 3)
        coverNumberForWard = 1;

    if(coverNumberForWard == 1){
        backGroundId.backgroundImage = "url('desktop-image-hero-1.jpg')";
        hText.innerHTML = "Discover innovative ways to decorate";
        pText.innerHTML = "We provide unmatched quality.Comfort,and style for property oweners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.";
    }
    else if(coverNumberForWard == 2){
        backGroundId.backgroundImage = "url('desktop-image-hero-2.jpg')";
        hText.innerHTML = "We are available all across the globe";
        pText.innerHTML = "With stores all over the world,it`s easy for you to find furniture for our home or place of business.Locally,we`re in most major cities throuout the country.Find the branch nearest you using our store locator.Any question?Don`t hesitote to contact us today.";
    }
    else{
        backGroundId.backgroundImage = "url('desktop-image-hero-3.jpg')";
        hText.innerHTML = "Manufactured with the best materials";
        pText.innerHTML = "Our modren furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consists as possible.With three decades of experience in this industry,we understand what customers want for their home and office.";
    }
}
function changeCoverBackWard(){
    "use strict";

    coverNumberForWard--;
    if(coverNumberForWard < 1)
        coverNumberForWard = 3;

    if(coverNumberForWard == 1){
        backGroundId.backgroundImage = "url('desktop-image-hero-1.jpg')";
        hText.innerHTML = "Discover innovative ways to decorate";
        pText.innerHTML = "We provide unmatched quality.Comfort,and style for property oweners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.";
    }
    else if(coverNumberForWard == 2){
        backGroundId.backgroundImage = "url('desktop-image-hero-2.jpg')";
        hText.innerHTML = "We are available all across the globe";
        pText.innerHTML = "With stores all over the world,it`s easy for you to find furniture for our home or place of business.Locally,we`re in most major cities throuout the country.Find the branch nearest you using our store locator.Any question?Don`t hesitote to contact us today.";
    }
    else{
        backGroundId.backgroundImage = "url('desktop-image-hero-3.jpg')";
        hText.innerHTML = "Manufactured with the best materials";
        pText.innerHTML = "Our modren furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consists as possible.With three decades of experience in this industry,we understand what customers want for their home and office.";
    }
}
