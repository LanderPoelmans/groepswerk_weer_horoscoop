document.getElementById("submit").addEventListener('click', function () {
    setInput();
})
function setInput() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let year = document.getElementById("birthDay").value;
    console.log(name, city, year);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('year', year);
    window.location.href = 'output.html';
}