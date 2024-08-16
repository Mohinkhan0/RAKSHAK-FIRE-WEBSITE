// Function to animate the counting
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const currentValue = +counter.innerText;
        const increment = target / 200;

        if(currentValue < target) {
            counter.innerText = `${Math.ceil(currentValue + increment)}`;
            setTimeout(updateCounter, 100);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

