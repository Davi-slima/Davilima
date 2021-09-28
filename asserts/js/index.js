const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
}

const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);

    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

const scrollto = (el) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

on('click', '.mobile-nav', function(e) {
    select('#navbar').classList.toggle('active')
    // this.classList.toggle('mobile-nav')
    this.classList.toggle('header container navbar');
    this.classList.toggle('header container navbar ul');
    this.classList.toggle('header container navbar li');
  })

on('click', '.navbar .nav-link', function(e) {
    const section = select(this.hash);
    if (section) {
        e.preventDefault();

        const navbar = select('.mobile-nav');
        const header = select('#header');
        const sections = select('section', true);
        const navlinks = select('.navbar .nav-link', true);

        navlinks.forEach((item) => {
            item.classList.remove('active')
        });

        this.classList.add('active');

        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const navbarMenu = select('.navbar');
            navbarMenu.classList.toggle('header container navbar');
            navbarMenu.classList.toggle('header container navbar ul');
            navbarMenu.classList.toggle('header container navbar li');
        }

        if (this.hash == '#header') {
            header.classList.remove('header-top')
            sections.forEach((item) => {
                item.classList.remove('mostrar')
            });
            return;
        }

        if (!header.classList.contains('header-top')) {
            header.classList.add('header-top');
            setTimeout(function () {
                sections.forEach((item) => {
                    item.classList.remove('mostrar')
                });
                section.classList.add('mostrar');

            }, 350);
        } else {
            sections.forEach((item) => {
                item.classList.remove('mostrar')
            });
            section.classList.add('mostrar');
        }

        scrollto(this.hash);
    }
}, true);

const modalInit = (modalID) => {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
}

const about = select('#about');

about.addEventListener('click', () => {
    modalInit('modal-about');
});


