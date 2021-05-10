// --------------------------------- object literal

// const SLIDER = {
//     slide_index: -1,
//     init() {
//         this.get_slides()
//         document.querySelector('#btnPrev').addEventListener('click', this.slide.bind(this,-1));
//         document.querySelector('#btnNext').addEventListener('click', () => {this.slide(1)});
//     },
//     get_slides() {
//         fetch('https://jsonplaceholder.typicode.com/photos')
//             .then(response =>  response.json())
//             .then(response => this.insert_slides(response))
//     },
//     insert_slides(data) {
//         var slider = document.querySelector('#slider');
//         for (let i = 0; i < 20; i++) {
//             var img = document.createElement('img')
//             img.src = data[i].url
//             img.className = 'slide-item bounce-in-top'
//             // img.style.display = 'none'
//             slider.appendChild(img);
//         }
//         this.slide(1)
//     },
//     slide(type) {
//         type == -1 ? this.slide_index-- : this.slide_index++;

//         var slides = document.querySelectorAll('.slide-item')
//         if (this.slide_index < 0) {
//             this.slide_index = slides.length - 1
//         }
//         if (this.slide_index > slides.length - 1) {
//             this.slide_index = 0
//         }
//         slides.forEach(slide => {
//             slide.style.display = 'none'
//         })
//         slides[this.slide_index].style.display = 'block'
//     }
// }
// SLIDER.init()

//------------------------------------------------ module pattern 

const SLIDER = (function () {
    let index = 1;
    const btnPrev = document.querySelector('#btnPrev'),
    btnNext = document.querySelector('#btnNext'),
    slider = document.querySelector('#slider');
    
    async function getSlides() {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const result = await response.json();
            return result;
        }catch(err){
            console.log('implemented ' + err)
        }
    }
    function setSlides(data) {
        let images = '';
        [...new Array(10)].forEach((item, index) => {
            images += `
            <img src='${data[index].url}' class='slide-item bounce-top'
            style='display: none;height:50vh'/>
            `;
        });
        slider.innerHTML = images;
    }
    function setEvents() {
        btnPrev.onclick = () => slide();
        btnNext.onclick = () => slide(true);
    }
    function slide(increase) {
        increase ? index++ : index--;
        
        const slides = document.querySelectorAll('.slide-item');
        if (index < 0) {
            index = slides.length - 1;
        } else if (index > slides.length - 1) {
            index = 0;
        }
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    getSlides().then((data) => {
        setSlides(data);
        setEvents();
        slide();
    });

    return {
        btnPrev,
        getSlides,
    };
})();

console.log(SLIDER);



