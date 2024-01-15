// Your existing script.js logic

function calculateLuasPersegi() {
    var sisiValue = document.getElementById('sisi').value;
    document.getElementById('result-luas-persegi').innerText = 'Luas Persegi: ' + (sisiValue * sisiValue);
    document.getElementById('result-luas-persegi').style.display = 'block';
}

function calculateKelilingPersegi() {
    var sisiValue = document.getElementById('sisiKeliling').value;
    document.getElementById('result-keliling-persegi').innerText = 'Keliling Persegi: ' + (4 * sisiValue);
    document.getElementById('result-keliling-persegi').style.display = 'block';
}

function resetForm(formId, resultId) {
    document.getElementById(formId).reset();
    document.getElementById(resultId).style.display = 'none';
}
