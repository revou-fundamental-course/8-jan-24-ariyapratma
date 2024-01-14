// Your existing script.js logic

function calculateLuasPersegi() {
    // Add logic for calculating Luas Persegi here
    var sisiValue = document.getElementById('sisi').value;

    // Example: Display the result in the result-luas-persegi div
    document.getElementById('result-luas-persegi').innerText = 'Luas Persegi: ' + (sisiValue * sisiValue);
    document.getElementById('result-luas-persegi').style.display = 'block';
}

function resetLuasPersegi() {
    // Add logic to reset Luas Persegi form and result here
    document.getElementById('luas-persegi').reset();
    document.getElementById('result-luas-persegi').style.display = 'none';
}

function calculateKelilingPersegi() {
    // Add logic for calculating Keliling Persegi here
    var sisiValue = document.getElementById('sisi').value;

    // Example: Display the result in the result-keliling-persegi div
    document.getElementById('result-keliling-persegi').innerText = 'Keliling Persegi: ' + (4 * sisiValue);
    document.getElementById('result-keliling-persegi').style.display = 'block';
}

function resetKelilingPersegi() {
    // Add logic to reset Keliling Persegi form and result here
    document.getElementById('keliling-persegi').reset();
    document.getElementById('result-keliling-persegi').style.display = 'none';
}
