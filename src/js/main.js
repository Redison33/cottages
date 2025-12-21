document.addEventListener('DOMContentLoaded', () => {
    if (window.screen.width > 640) window.addEventListener('scroll', handleScroll);
    // let paddingHeader;
    // if (window.screen.width > 1360) {

    // }

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        let isScrollGoDown;
        let isScrollStart;
        if (document.querySelector('#bx-panel')) {
            isScrollGoDown = scrollTop > document.querySelector('#bx-panel').scrollHeight + document.querySelector('.header').scrollHeight;
            isScrollStart = scrollTop < document.querySelector('#bx-panel').scrollHeight + document.querySelector('.header').scrollHeight;
        } else if (document.querySelector('.wi-special-sblock')) {
            isScrollGoDown = scrollTop > document.querySelector('.wi-special-sblock').scrollHeight + document.querySelector('.header').scrollHeight;
            isScrollStart = scrollTop < document.querySelector('.wi-special-sblock').scrollHeight + document.querySelector('.header').scrollHeight;
        } else if (document.querySelector('#bx-panel') && document.querySelector('.wi-special-sblock')) {
            isScrollGoDown =
                scrollTop >
                document.querySelector('#bx-panel').scrollHeight +
                    document.querySelector('.wi-special-sblock').scrollHeight +
                    document.querySelector('.header').scrollHeight;
            isScrollStart =
                scrollTop <
                document.querySelector('#bx-panel').scrollHeight +
                    document.querySelector('.wi-special-sblock').scrollHeight +
                    document.querySelector('.header').scrollHeight;
        } else {
            if (window.screen.width > 740) {
                isScrollGoDown = scrollTop > 32;
            } else if (window.screen.width > 640) {
                isScrollGoDown = scrollTop > 12;
            }
            // isScrollGoDown = scrollTop > 32;
            isScrollStart = scrollTop < document.querySelector('.header').scrollHeight;
        }
        const isScrollGoTop = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;

        // HeaderTop
        if (isScrollStart) {
            document.querySelector('.header').removeAttribute('style');
            document.querySelector('section').removeAttribute('style');
            document.querySelector('.header__container').removeAttribute('style');
            headerHeight = document.querySelector('.header').scrollHeight;

            // headerMiddle.classList.remove('header__wrap-middle-visible');
            // headerBottom.classList.remove('header__wrap-bottom-visible-start');
        }
        if (isScrollGoDown) {
            // document.querySelector('header').style.marginBottom = '105px';
            console.log(document.querySelector('.header').scrollHeight);

            document.querySelector('section').style.paddingTop = document.querySelector('.header').scrollHeight + 'px';
            document.querySelector('.header').style.position = 'fixed';
            document.querySelector('.header__container').style.padding = '12px 0';
            document.querySelector('.header').style.zIndex = 10000;
            document.querySelector('.header').style.top = 0;
            document.querySelector('.header').style.left = 0;
            document.querySelector('.header').style.right = 0;
            document.querySelector('.header').style.boxShadow = '0px 2px 15px 0px rgba(0,0,0,0.25)';
            headerHeight = document.querySelector('.header').scrollHeight;
        }
    }
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.1,
        },
    );
    document.querySelector('.animationDetected');
    {
        document.querySelectorAll('.animationDetected').forEach((el) => {
            console.log(el);

            observer.observe(el);
            // el.remove();
        });
    }
    if (document.querySelector('.burger-button')) {
        document.querySelector('.burger-button').addEventListener('click', () => {
            if (document.querySelector('.header nav').classList.contains('burger--active')) {
                document.querySelector('.header nav').classList.remove('burger--active');
                document.querySelector('.burger-button').classList.remove('burger-button--active');
                document.body.removeAttribute('style');
            } else {
                document.querySelector('.header nav').classList.add('burger--active');
                document.querySelector('.burger-button').classList.add('burger-button--active');
                if (window.matchMedia('(max-width: 640px)').matches) {
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    }
});
