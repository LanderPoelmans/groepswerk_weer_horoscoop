document.getElementById("export").addEventListener('click', function () {
    getInput();
})

function getInput() {
    let name_user = sessionStorage.getItem('name');
    let year = sessionStorage.getItem('year');
    let city = sessionStorage.getItem('city');
    console.log(year, city, name_user);

    document.getElementById('welcomefield').innerHTML = "<p>" + "Welcome, " + name_user + "</p>";
}