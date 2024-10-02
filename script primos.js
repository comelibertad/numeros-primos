// Array de números primos inicial
let primes = [2];
let currentPrimeIndex = 0;  // Índice del número primo actual

// Función para encontrar el siguiente número primo
function getNextPrime() {
    let candidate = primes[primes.length - 1] + 1;
    while (true) {
        if (isPrime(candidate)) {
            primes.push(candidate);
            return candidate;
        }
        candidate++;
    }
}

// Función para verificar si un número es primo
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Muestra el número primo actual en pantalla
function displayPrime() {
    document.getElementById('primeNumber').textContent = primes[currentPrimeIndex];
}

// Evento para click derecho (avanza al siguiente primo)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();  // Previene el menú contextual
    currentPrimeIndex++;
    if (currentPrimeIndex === primes.length) {
        getNextPrime();
    }
    displayPrime();
});

// Evento para click izquierdo (retrocede al primo anterior)
document.addEventListener('click', function() {
    if (currentPrimeIndex > 0) {
        currentPrimeIndex--;
    }
    displayPrime();
});

// Muestra el primer número primo al cargar la página
displayPrime();
