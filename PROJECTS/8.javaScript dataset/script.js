// var img = document.querySelectorAll('.img');

// function activateRockets() {
//     let length = img.length;
//     for (let i = 0; i < length; i++) {
//         console.log(img[i].dataset);
//         var altitude = img[i].dataset.altitude;
//         var speed = img[i].dataset.speed;
//         var distance = img[i].dataset.rocketDistance;
//         img[i].style.top = altitude + 'px';
//         img[i].style.transitionDuration = speed + 's';
//         img[i].style.left = distance + 'px';

//     }
// }
// window.addEventListener('load', activateRockets);

////////////////////////////////////////////////////////////////////


// document.querySelectorAll('.img').forEach(img=>{
//     let altitude = img.dataset.altitude
//     let speed = img.dataset.speed
//     let rocketDistance = img.dataset.rocketDistance
//     img.style.cssText = `top: ${altitude}px;transition: left ${speed}s;
//                          left:${rocketDistance}px`
//     console.log(img.dataset)
// })