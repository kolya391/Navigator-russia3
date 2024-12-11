document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const carBrand = document.getElementById('carBrand').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
    const fuelConsumption = document.getElementById('fuelConsumption').value; // Расход топлива на 100 км
    const fuelPrice = document.getElementById('fuelPrice').value;

    // Передача данных на страницу навигатора
    localStorage.setItem('fuelConsumption', fuelConsumption);
    localStorage.setItem('fuelPrice', fuelPrice);

    // Перенаправление на страницу навигатора
    window.location.href = 'navigator.html';
});