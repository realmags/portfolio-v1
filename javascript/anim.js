
window.onload = function () {
    setTimeout(() => {
        document.querySelector('#heading-anim').classList.add('slide-left');
        document.querySelector('#text-anim').classList.add('slide-right');
    }, 500);

    (function main() {
        function servicesAnimation() {
            const DARKBLUE = 'rgb(75, 61, 156)';
            const BEIGE = 'rgb(224, 230, 202)';
            const servicesOdd = document.querySelectorAll(".services-odd-child");
            const servicesEven = document.querySelectorAll(".services-even-child");

            servicesOdd.forEach(heading => {
                if (heading.style.color) {
                    (heading.style.color == BEIGE) ? heading.style.color = DARKBLUE : heading.style.color = BEIGE;
                }
                else heading.style.color = DARKBLUE;
            });
            servicesEven.forEach(heading => {
                if (heading.style.color) {
                    (heading.style.color == DARKBLUE) ? heading.style.color = BEIGE : heading.style.color = DARKBLUE;
                }
                else heading.style.color = BEIGE;
            });
        }
        function projectsAnimation() {
            const DARKBLUE = 'rgb(75, 61, 156)';
            const MAROON = 'rgb(176, 84, 62)';
            const projectsOdd = document.querySelectorAll('.projects-heading h1:nth-child(odd)');
            const projectsEven = document.querySelectorAll('.projects-heading h1:nth-child(even)');

            projectsOdd.forEach(heading => {
                if (heading.style.color) {
                    (heading.style.color == DARKBLUE) ? heading.style.color = MAROON : heading.style.color = DARKBLUE;
                }
                else heading.style.color = MAROON;
            });
            projectsEven.forEach(heading => {
                if (heading.style.color) {
                    (heading.style.color == MAROON) ? heading.style.color = DARKBLUE : heading.style.color = MAROON;
                }
                else heading.style.color = DARKBLUE;
            });
        }
        // perform animation
        setInterval(() => {
            servicesAnimation();
        }, 1500);
        setInterval(() => {
            projectsAnimation();
        }, 1500);
    })();
}