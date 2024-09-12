document.getElementById('analogButton').addEventListener('click', function() {
    document.querySelector('.analog-clock').style.display = 'block';
    document.querySelector('.digital-clock').style.display = 'none';
    startAnalogClock();
});

document.getElementById('digitalButton').addEventListener('click', function() {
    document.querySelector('.analog-clock').style.display = 'none';
    document.querySelector('.digital-clock').style.display = 'block';
    startDigitalClock();
});

function startAnalogClock() {
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        const secondHand = document.querySelector('.analog-clock .second-hand');
        const minuteHand = document.querySelector('.analog-clock .minute-hand');
        const hourHand = document.querySelector('.analog-clock .hour-hand');
        
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + 90;

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();  // Initial call to set clock immediately
}

function startDigitalClock() {
    function updateDigitalClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.querySelector('.digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateDigitalClock, 1000);
    updateDigitalClock();  // Initial call to set clock immediately
}
