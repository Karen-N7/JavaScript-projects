const Navbar = (function () {
    const navbar = document.querySelector(".navbar");
    const toggler = document.querySelector(".navbar .toggler");
    const links = document.querySelectorAll(".navbar .menu__link");


    const createOverlay = () => {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.addEventListener("click", () => hideMenu());
        document.body.appendChild(overlay);
    };
    const deleteOverlay = () => {
        const overlay = document.querySelector(".overlay");
        if (overlay) document.body.removeChild(overlay);
    };

    const showMenu = () => {
        navbar.classList.add("collapse");
        links.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s `;
        });
        createOverlay()
    };
    const hideMenu = () => {
        navbar.classList.remove("collapse");
        links.forEach((link, index) => {
            link.style.animation = "";
        });
        deleteOverlay()
    };


    const modifyNavbar =()=>{
        navbar.classList.add('modifire')
    }
    const unmodifyNavbar =()=>{
        navbar.classList.remove('modifire')
    }

    toggler.addEventListener("click", () => {
        navbar.classList.contains("collapse") ? hideMenu() : showMenu();
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1300) {
            hideMenu();
        }
    });
    window.addEventListener('scroll',()=>{
        let top = document.body.getBoundingClientRect().top
       if(top < 0) {
           modifyNavbar()
       } else {
           unmodifyNavbar()
       }
    })
})();
