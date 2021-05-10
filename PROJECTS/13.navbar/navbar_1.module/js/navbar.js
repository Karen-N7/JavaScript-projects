const Navbar = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;

    const handleRectTop = () => ({
        getRectTop: () => document.body.getBoundingClientRect().top,
    });

    const handleNavbar = ({ navbar }) => ({
        modifyNavbar() {
            let top = this.getRectTop();
            top ? navbar.classList.add('modifire') : navbar.classList.remove('modifire');
        },
    });

    const handleMenu = ({ burger, navbar, list, links }) => ({
        hideMenu() {
            burger.classList.remove('modifire');
            navbar.classList.remove('modifire-2');
            list.classList.remove('modifire');
            links.forEach((link) => (link.style.animation = ''));
        },
        showMenu() {
            burger.classList.add('modifire');
            navbar.classList.add('modifire-2');
            list.classList.add('modifire');
            links.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s `;
            });
        },
    });

    const handleOverlay = () => ({
        createOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.addEventListener('click', () => {
                this.deleteOverlay();
                this.hideMenu();
            });
            document.body.appendChild(overlay);
        },
        deleteOverlay() {
            const overlay = query('.overlay');
            if (overlay) document.body.removeChild(overlay);
        },
    });

    const handleBurgerEvents = ({ burger, list }) => ({
        setBurgerEvents() {
            burger.addEventListener('click', () => {
                if (list.classList.contains('modifire')) {
                    this.deleteOverlay();
                    this.hideMenu();
                } else {
                    this.createOverlay();
                    this.showMenu();
                }
            });
        },
    });
    const handleDocumentEvents = () => ({
        setDocumentEvents() {
            document.addEventListener('scroll', () => this.modifyNavbar());
        },
    });
    
    const handleWindowEvents = () =>({
        setWindowEvents() {
            window.addEventListener('resize', () => {
                if (document.body.offsetWidth > 768) {
                    this.deleteOverlay();
                    this.hideMenu();
                }
            });
        }
    })

    function blueprint_1(state) {
        return {
            ...state,
            ...handleRectTop(state),
            ...handleDocumentEvents(state),
            ...handleBurgerEvents(state),
            ...handleWindowEvents(),
            ...handleNavbar(state),
            ...handleMenu(state),
            ...handleOverlay(),
        };
    }

    const state_1 = {
        navbar: query('.navbar-1'),
        list: query('.navbar-1 .navbar__list'),
        links: queryAll('.navbar-1 .navbar__link'),
        burger: query('.navbar-1 .navbar__burger'),
    };
    const instance_1 = blueprint_1(state_1);
    if (state_1.navbar) {
        instance_1.setDocumentEvents();
        instance_1.setBurgerEvents();
        instance_1.setWindowEvents()
    }
    //
    const state_2 = {
        navbar: query('.navbar-2'),
        list: query('.navbar-2 .navbar__list'),
        links: queryAll('.navbar-2 .navbar__link'),
        burger: query('.navbar-2 .navbar__burger'),
    };
    const instance_2 = blueprint_1(state_2);
    if (state_2.navbar) {
        instance_2.setBurgerEvents();
        instance_2.setWindowEvents()
    }
})();

export default Navbar;
