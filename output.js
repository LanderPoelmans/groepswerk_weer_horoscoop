let name_user = sessionStorage.getItem('name');
let year = sessionStorage.getItem('year');
let city = sessionStorage.getItem('city');
console.log(year, city, name_user);
document.getElementById('welcomeMessage').innerHTML = "<p>" + "Welcome, " + name_user + " " + year + "</p>";
document.getElementById('refreshButton').addEventListener("click", function () {
    window.location.reload();
});
character = year.toString();
console.log(year);
character = year.charAt(3);
console.log(character);
let element ="";
if(character == 0 || character == 1){
    element = "metal";
}
if(character == 2 || character == 3){
    element = "water";
}
if(character == 4 || character == 5){
    element = "wood";
}
if(character == 6 || character == 7){
    element = "fire";
}
if(character == 8 || character == 9){
    element = "earth";
}
console.log(element);
let logo_element = document.getElementById("element");
element.src = element + ".png";


let zodiac_number = 0;
if (year < 2000) {
    year -= 1900;
    year = year % 12;
    year += 1;
    zodiac_number = year;
}
else if (year >= 2000 && year < 3000) {
    year -= 2000;
    year = year % 12;
    year += 5;
    if (year > 12) {
        year -= 12;
    }
    zodiac_number = year;
}
let zodiac = "";
let chineseHoroscope = document.getElementById('chineseHoroscope');
if (zodiac_number == 1) {
    zodiac = "rat";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-03.png";
}
if (zodiac_number == 2) {
    zodiac = "ox";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-04.png";
}
if (zodiac_number == 3) {
    zodiac = "tiger";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-05.png";
}
if (zodiac_number == 4) {
    zodiac = "rabbit";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-06.png";
}
if (zodiac_number == 5) {
    zodiac = "dragon";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-07.png";
}
if (zodiac_number == 6) {
    zodiac = "snake";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-08.png";
}
if (zodiac_number == 7) {
    zodiac = "horse";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-09.png";
}
if (zodiac_number == 8) {
    zodiac = "goat";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-10.png";
}
if (zodiac_number == 9) {
    zodiac = "monkey";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-11.png";
}
if (zodiac_number == 10) {
    zodiac = "rooster";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-12.png";
}
if (zodiac_number == 11) {
    zodiac = "dog";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-13.png";
}
if (zodiac_number == 12) {
    zodiac = "pig";
    chineseHoroscope.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-14.png";
}

console.log(zodiac);
let horoscopeQuotes = ["There are two ways of spreading light. To be the candle or the mirror that reflects it.", "You do not find the happy life. You make it.",
    "The most wasted of days is one without laughter.", "Stay close to anything that makes you glad you are alive.",
    "Make each day your masterpiece.", "Happiness often sneaks in through a door you did not know you left open.",
    "Happiness is not by chance, but by choice.", "Life changes very quickly, in a very positive way, if you let it.",
    "Keep your face to the sunshine and you cannot see a shadow.", "Impossible is for the unwilling.",
    "No pressure, no diamonds.", "Believe you can and you are halfway there.",
    "Failure is the condiment that gives success its flavor.", "It is never too late to be what you might have been.",
    "When you have a dream, you have got to grab it and never let go.", "You must be the change you wish to see in the world.",
    "Stay foolish to stay sane.", "Stay hungry. Stay foolish.",
    "Whatever you are, be a good one.", "You must do the things you think you cannot do.",
    "Wherever you go, go with all your heart.", "Be faithful to that which exists within yourself.",
    "Dream big and dare to fail.", "You are enough just as you are."];
let i = Math.floor(Math.random() * 19);
console.log(i);
console.log(horoscopeQuotes[i]);
document.getElementById('quoteOfTheMoment').innerHTML = horoscopeQuotes[i];