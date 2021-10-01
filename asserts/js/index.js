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

on('click', '.navbar .nav-link', function(e) {
    const section = select(this.hash);
    if (section) {
        e.preventDefault();

        const header = select('#header');
        const sections = select('section', true);
        const navlinks = select('.navbar .nav-link', true);

        navlinks.forEach((item) => {
            item.classList.remove('active')
        });

        this.classList.add('active');

        if (this.hash == '#header') {
            header.classList.remove('header-top')
            sections.forEach((item) => {
                item.classList.remove('show-modal')
            });
            return;
        }

        if (!header.classList.contains('header-top')) {
            header.classList.add('header-top');
            setTimeout(function () {
                sections.forEach((item) => {
                    item.classList.remove('show-modal')
                });
                section.classList.add('show-modal');

            }, 375);
        } else {
            sections.forEach((item) => {
                item.classList.remove('show-modal')
            });
            section.classList.add('show-modal');
        }

        scrollto(this.hash);
    }
}, true);

const modalInit = (modalID) => {
    const modal = document.getElementById(modalID);
    modal.classList.add('show-modal');
}

const about = select('#about');

about.addEventListener('click', () => {
    modalInit('about');
});