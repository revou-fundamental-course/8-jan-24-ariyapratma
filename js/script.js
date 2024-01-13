document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateSquare);
});

function calculateSquare() {
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    if (isNaN(sideLength)) {
        alert('Masukkan nilai sisi yang valid.');
        return;
    }

    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Luas Persegi: ${area}</p><p>Keliling Persegi: ${perimeter}</p>`;
}
