(function () {
    'use strict';

    const select = (el, all = false) => {
        el = el.trim();
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
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    }

    const scrollto = (el) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const modalStart = (modalID) => {
        const open = document.getElementById(modalID);
        open.classList.add('show-modal')
    }

    const modalClose = (modalID) => {
        const close = document.getElementById(modalID);
        close.classList.remove('show-modal');
    }

    on('click', '.navbar .nav-link', function (e) {
        const section = select(this.hash);
        if (section) {
            e.preventDefault();

            const header = select('#header');
            const sections = select('section', true);
            const navlinks = select('.navbar .nav-link', true);

            if (this.hash == '#about') {
                setTimeout(function () {
                    modalStart('section-about');
                    modalClose('section-portfolio');
                }, 275);
            }

            if (this.hash == '#portfolio') {
                setTimeout(function () {
                    modalStart('section-portfolio');
                    modalClose('section-about');
                },275)

            }

            navlinks.forEach((item) => {
                item.classList.remove('active');
            });

            this.classList.add('active');

            if (this.hash == '#header') {
                header.classList.remove('header-top');
                sections.forEach((item) => {
                    item.classList.remove('show-modal');
                });
                return;
            }

            if (!header.classList.contains('header-top')) {
                header.classList.add('header-top');
                section.classList.add('show-modal');
            }
            else {
                section.classList.add('show-modal');
            }
            scrollto(this.hash);
        }
    }, true);
})();