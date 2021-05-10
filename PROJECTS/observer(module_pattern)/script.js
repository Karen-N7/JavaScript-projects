const LazyLoading = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        lazyBlocks = queryAll('.lazy-block'),
        images = queryAll('.lazy-block img'),
        items = queryAll('.lazy-block article');

    const setLazyElements = function () {
        images.forEach((image) => image.classList.add('lazy-element', 'lazy-element--up'));
        items.forEach((item) => item.classList.add('lazy-element', 'lazy-element--right'));
    };
    
    const loadLazyElements = function (entry) {
        let lazyElements = entry.target.querySelectorAll('.lazy-element');
        lazyElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.remove('lazy-element--right', 'lazy-element--up');
            }, index * 100);
        });
    };
    
    const loadImages = function (entry) {
        let images = entry.target.querySelectorAll('img');
        images.forEach((image) => {
            image.src = image.dataset.src;
        });
    };

    const setActiveLink = function (entry) {
        if(!entry.target.id)return
        const navbar = query('.navbar')
        const currentActive = navbar.querySelector('.active')
        currentActive.classList.remove('active')
        const newActive = query(`[href='#${entry.target.id }']`)
        newActive.classList.add('active')
        
    }


    function setupObserver(data) {
        let options = {
            root: null,
            threshold: 0.1,
            rootMargin: "-300px",
        };
        let observer = new IntersectionObserver((entries, observer) => { //[entry]
            entries.forEach((entry) => {//
                if (entry.isIntersecting) {
                    loadLazyElements(entry);
                    loadImages(entry);
                    // setActiveLink(entry)
                    // observer.unobserve(entry.target) //if using slide only one time(saving resources)
                } 
            });

        }, options);

        lazyBlocks.forEach((block) => {
            observer.observe(block);
        });
        // observer.observe(lazyBlocks)
    }
    // setLazyElements();
    setupObserver();
})();
