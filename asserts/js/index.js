const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all)

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

on('click', '#navbar .nav-link', function (e) {
    const section = select(this.hash);
    if (section) {
        e.preventDefault()

        const navbar = select('#navbar');
        const header = select('#header');
        const sections = select('section', true);
        const navlinks = select('#navbar .nav-link', true);

        navlinks.forEach((item) => {
            item.classList.remove('active')
        });

        this.classList.add('active');

        if (this.hash == '#header') {
            header.classList.remove('header-top')
            sections.forEach((item) => {
                item.classList.remove('mostrar')
            });
            return;
        }

        if (!header.classList.contains('header-top')) {
            header.classList.add('header-top')
            setTimeout(function () {
                sections.forEach((item) => {
                    item.classList.remove('mostrar')
                })
                section.classList.add('mostrar')

            }, 350);
        } else {
            sections.forEach((item) => {
                item.classList.remove('mostrar')
            })
            section.classList.add('mostrar')
        }

        scrollto(this.hash)
    }
}, true)
window.addEventListener('load', () => {
    if (window.location.hash) {
        const initial_nav = select(window.location.hash);

        if (initial_nav) {
            const header = select('#header');
            const navlinks = select('#navbar .nav-link', true);

            header.classList.add('header-top')

            navlinks.forEach((item) => {
                if (item.getAttribute('href') == window.location.hash) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })

            setTimeout(function () {
                initial_nav.classList.add('mostrar')
            }, 350);

            scrollto(window.location.hash)
        }
    }

    const iniciaModal = (modalID) => {
        const modal = document.getElementById(modalID);
        modal.classList.add('mostrar');
    }

    const about = document.querySelector('#about');
    about.addEventListener('click', () => {
        iniciaModal('modal-about');
    });
});






