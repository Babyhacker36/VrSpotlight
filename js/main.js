// Controls the sticky header

window.onscroll = function () {
    stickyHeader()
};

var sticky = navbar.offsetTop;

function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        navbar
            .classList
            .add('sticky')
    } else {
        navbar
            .classList
            .remove('sticky')

    }
};

// function to open slide menu

function openNav() {
    document
        .getElementById('myNav')
        .style
        .width = '100vw'
    
   
      $(document).ready(function(){

 $('#navBtn').toggle()

})

   

};

// function to close the slide menu when opened

function closeNav() {
    document
        .getElementById('myNav')
        .style
        .width = '0%';
    
    
    
    $(document).ready(function(){

//  $('#navBtnClose').hide();
     $('#navBtn').show() 

    });

};

$('#navoc').children().click(() => {
   document
        .getElementById('myNav')
        .style
        .width = '0%'; 
     $('#navBtn').show() 
    
})



$(document).ready(function(){
 
});



// second navigation on click

$('#divC1, #RtBuyDiv1HaloLense').nextAll().hide();



$('#halolens').click(() => {
   
    $('#divC1').fadeIn(2000);
    $('#divC1').siblings().hide();
    $('#RtBuyDiv1HaloLense').fadeIn(2000);
    $('#RtBuyDiv1HaloLense').siblings().hide();
    $('#navigation').show();
    
    
})

$('#playStation').click(() => {
    $('#divC2').fadeIn(2000);
    $('#divC2').siblings().hide();
    $('#RtBuyDiv2Play').fadeIn(2000);
    $('#RtBuyDiv2Play').siblings().hide();
    $('#navigation').show();

    
})

$('#oculus').click(() => {
    $('#divC3').fadeIn(2000);
    $('#divC3').siblings().hide()
    $('#RtBuyDiv3Oc').fadeIn(2000);
    $('#RtBuyDiv3Oc').siblings().hide();
    $('#navigation').show();
})


$('#samsung').click(() => {
    $('#divC4').fadeIn(2000);
    $('#divC4').siblings().hide()
    $('#RtBuyDiv3Samsung').fadeIn(2000);
    $('#RtBuyDiv3Samsung').siblings().hide();
    $('#navigation').show();
})

// second nav underline

 






// function for the second navigation information section

// const test = document.querySelector('#changingDiv > div');

// const test = document.getElementById('changingDiv').children;

// const kids = test[0] 

// $('#playStation').click(function () {
//     $('div#innerChangeDiv').eg(0).show()
//     $('changingDiv').children().hide()
// })




// function to close the side Nav second navigation area ids of the lis for the
// function
// document
//     .getElementById('sideNav')
//     .style
//     .width = '0';

// document
//     .getElementById('sideNav1')
//     .style
//     .width = '0';

// play station link function

// document
//     .getElementById('playStation')
//     .addEventListener('click', openSideNav);

// function openSideNav() {

//     document
//         .getElementById('changingDiv')
//         .style
//         .display = 'none';
//     document
//         .getElementById('sideNav')
//         .style
//         .width = '33.33%';
//     // document.getElementById("sideNav").style.transition = "all 2s";

//     document
//         .getElementById("sideNav")
//         .style
//         .transitionDuration = "2s";
// }

// // oculus link function

// document
//     .getElementById('oculus')
//     .addEventListener('click', openSideNav1);

// function openSideNav1() {
//     document
//         .getElementById('changingDiv')
//         .style
//         .display = 'none';
//     document.getElementById('sideNav').display = 'none';
//     document
//         .getElementById('sideNav1')
//         .style
//         .width = '33.33%';
//     console.log('Click on oculus is working')
// };

// Banner animation
$(document).ready(function () {
    $('#boxContainer')
        .hide()
        .delay(1000)
        .fadeIn(2000);

    $('#scrollObject')
        .hide()
        .delay(1000)
        .fadeIn(5000);

    // smoothscroll from icon on video background header

    $('#scrollObject').click(function () {
        $('html, body').animate({
            scrollTop: ($('#new').offset().top)
        }, 1000)
    })

    // smooth scroll from navigation
    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash)
                .offset()
                .top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {
            var sectionOffset = $(this.hash)
                .offset()
                .top;
            if (sectionOffset <= scrollbarLocation) {
                $(this)
                    .parent()
                    .addClass('active');
                $(this)
                    .parent()
                    .siblings()
                    .removeClass('active');
            }
        })
    });

    // Modal

    $("#ex1").modal({
        fadeDuration: 1000, fadeDelay: 1.75 // Will fade in 750ms after the overlay finishes.
    });

});




const volumeUp = $('#mutePlay > i:last-child').show()
const volumeMute = $('#mutePlay > i:first-child').hide()
const mainVideo = document.getElementById('video-bg');
volumeUp.click(() => {
    mainVideo.muted = false;
    volumeMute.show()
    volumeUp.hide()
    
})



volumeMute.click(() => {
    mainVideo.muted = true;
    volumeUp.show()
    volumeMute.hide()
    
    

})




