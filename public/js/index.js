
const chart = document.querySelector('.chart');
const barContainers = document.querySelectorAll('.chart .bar-container');

// pull in data from data.json file 
fetch('/json/data.json')
    .then(response => response.json())
    .then(data => {
        let total = 0; 
        let amounts = [];

        data.map(item => {
            total += item.amount;
            amounts.push(item.amount);
        });

        chart.style.height = `${total}px`;
        chart.style.opacity = '1';

        for (const container of barContainers) {
            let day = container.querySelector('.day').textContent;
            let bar = container.querySelector('.bar');

            data.map(item => {
                if (day == item.day) {
                    container.dataset.spendAmount = item.amount;
                }
            });

            // find highest amount and add class to highest amount day
            const maxDay = Math.max(...amounts);

            if (container.dataset.spendAmount == maxDay) {
                container.classList.add('biggest-day');
            }

            // set height of bars 
            container.querySelector('.bar').style.height = `${container.dataset.spendAmount}%`;

            // add Tippy tooltips 
            tippy(bar, {
                content: `$${container.dataset.spendAmount}`,
                arrow: false
            });
        }
    })
    .catch(error => {
        console.error('Error: ', error);
    });
