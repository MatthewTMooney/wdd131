const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const temperatureC = 5;
const windSpeedKmh = 20;

function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const windChillSpan = document.getElementById('windchill');
if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    windChillSpan.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillSpan.textContent = 'N/A';
}

document.getElementById('temperature').textContent = `${temperatureC} °C`;
document.getElementById('windspeed').textContent = `${windSpeedKmh} km/h`;