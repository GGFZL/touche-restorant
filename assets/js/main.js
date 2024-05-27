/*Dinamicko ispisivanje navigacije*/
var nizHref = ["#about", "#restaurant-menu", "#portfolio", "#contact", "https://cocky-euler-af1882.netlify.app/?fbclid=IwAR0Wl6fJrzysqbJEL7hPAlTL1LKsGXUg5TUmRcrx_p4Vo7RyeZvNrnFwsiM"];
var nizListaIme =["About", "Menu", "Gallery", "Contact", "Autor"];
let ispis1 = "";
for (let i = 0; i < nizHref.length; i++){
    ispis1 += `
    <li class="nav-item"><a class="nav-link" href="${nizHref[i]}">${nizListaIme[i]}</a></li>
    `;
}
document.querySelector("#ul_lista").innerHTML = ispis1;
/*Funkcija za kreiranje menija 1, 2, 3 i 4*/
function createDynamicMenu(itemName, itemPrice, itemDesc, itemDiv){
    let ispisivanje = "";
    for (let i = 0; i < itemName.length; i++){
        ispisivanje +=`
        <div class="menu-item">
            <div class="menu-item-name">${itemName[i]}</div>
            <div class="menu-item-price">${itemPrice[i]}</div>
            <div class="menu-item-description">${itemDesc[i]}</div>
        </div> `;}    
    document.querySelector('#' + `${itemDiv}`).innerHTML = ispisivanje;
}
/*Nizovi menija 1*/
var nizMeniItemName1 = ["Tomato Toast with Macadamia “Ricotta", "Savory Oatmeal with an Egg", "Morning Glory Muffins", "Southwest Tofu Scramble"];
var nizMeniItemPrice1 = ["$5", "$10", "$15", "$20"];
var nizMeniItemDesc1 = ["Vegan summer sandwich for breakfast. A fluffy, rich mixture of nuts, garlic, miso paste, and nutritional yeast is spread on hearty whole-grain bread.", 
"Quick-cooking regular rolled oats mixed with white cheddar cheese, and topped with an over-easy egg.", 
"These oat-based muffins are packed with healthy carrots and zucchini and lightly sweetened with raisins and a pinch of sugar.", 
"Foods with many different types of fruits and vegetables with salty additives."];
createDynamicMenu(nizMeniItemName1, nizMeniItemPrice1, nizMeniItemDesc1, "meniSection1");
/*Nizovi menija 2*/
var nizMeniItemName2 = ["Honey-Soy Grilled Salmon with Edamame", "Sheet Pan Chicken Fajitas", "Lemon-Garlic Shrimp and Grits", "Pork Tenderloin with Seasoned Rub"];
var nizMeniItemPrice2 = ["$20", "$25", "$30", "$30"];
var nizMeniItemDesc2 = ["Stuff a mixture of fresh herbs into the salmon to infuse the fish with bright flavor.", 
"These protein-packed fajitas cleverly use a foil-lined baking sheet and broiler to make a quick and healthy weeknight meal with easy cleanup.", 
"You won't find sticks of butter in this comfort food. Don't worry about flavor, though; these shrimp are plenty zesty from the lemon and garlic.", 
"This lean cut of meat gets tons of flavor from an easy dried-spice rub."];
createDynamicMenu(nizMeniItemName2, nizMeniItemPrice2, nizMeniItemDesc2, "meniSection2");
/*Nizovi menija 3*/
var nizMeniItemName3 = ["Black Coffee", "Cappuccino", "Espresso", "Macchiato"];
var nizMeniItemPrice3 = ["$2", "$3", "$5", "$5"];
var nizMeniItemDesc3 = ["Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm.", 
"Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.", 
"An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.", 
"The macchiato is another espresso-based drink that has a small amount of foam on top."];
createDynamicMenu(nizMeniItemName3, nizMeniItemPrice3, nizMeniItemDesc3, "meniSection3");
/*Nizovi menija 4*/
var nizMeniItemName4 = ["Coca Cola 0,2", "Tea", "Mineral Water", "Energy Drink"];
var nizMeniItemPrice4 = ["$1,5", "$1,2", "$1", "$2"];
var nizMeniItemDesc4 = ["Coca-Cola is a carbonated drink, made by an American company", 
"Tea is an commonly prepared by pouring hot or boiling water over fresh leaves of the Camellia sinensis.", 
"Mineral water is water from a mineral spring that contains various minerals, such as salts and sulfur compounds.", 
"An energy drink is a type of drink containing stimulant compounds, usually caffeine, which is marketed as providing mental and physical stimulations"];
createDynamicMenu(nizMeniItemName4, nizMeniItemPrice4, nizMeniItemDesc4, "meniSection4");
/*Dinamicko ispisivanje slika*/
var nizSrc = ["assets/img/portfolio/01-small.jpg", "assets/img/portfolio/02-small.jpg", "assets/img/portfolio/03-small.jpg", "assets/img/portfolio/04-small.jpg", 
"assets/img/portfolio/05-small.jpg", "assets/img/portfolio/06-small.jpg", "assets/img/portfolio/07-small.jpg", "assets/img/portfolio/08-small.jpg", "assets/img/portfolio/09-small.jpg"];
var nizAlt = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9"];
var nizHoverIme = ["dish1", "dish2", "dish3", "dish4", "dish5", "dish6", "dish7", "dish8", "dish9"];
let ispis2 = "";
for(let i = 0; i < nizSrc.length; i++){
    ispis2 += `
    <div class="col-sm-6 col-md-4 col-lg-4">
        <div class="portfolio-item">
            <div class="hover-bg">
                <div class="hover-text">
                    <h4>${nizHoverIme[i]}</h4>
                </div>
                <img src="${nizSrc[i]}" class="img-responsive" alt="${nizAlt[i]}" />
            </div>
        </div>
    </div>
    `;
}
document.querySelector("#portfolio-item").innerHTML = ispis2;
/*Dinamicko ispisivanje footer-a*/
var nizIme = ["Address", "Opening Hours", "Contact Info"];
var nizP1 = ["1111 California", "Mon-Thurs: 10:00 AM - 11:00 PM", "Phone: +0 123 456 1234"];
var nizP2 = ["San Francisco, CA 12345", "Fri-Sun: 11:00 AM - 02:00 AM", "Email: info@company.com"];
var ispis5 = "";
for (let i = 0; i < nizIme.length; i++){
    ispis5 += `
    <div class="col-md-4">
        <h3>${nizIme[i]}</h3>
        <div class="contact-item">
            <p>${nizP1[i]}</p>
            <p>${nizP2[i]}</p>
        </div>
    </div>
    `;
}
document.querySelector("#footer1").innerHTML = ispis5;
/*Dinamicko ispisivanje footer(linkova)-a*/
var nizLink = ["http://www.facebook.com", "http://www.twitter.com", "http://www.google.com"];
var nizLink1 = ["fa fa-facebook", "fa fa-twitter", "fa fa-google-plus"];
var ispis6 = "";
for (let i = 0; i < nizLink.length; i++){
    ispis6 += `
    <li><a href="${nizLink[i]}" target="_blank"><i class="${nizLink1[i]}"></i></a></li>
    `;
}
document.querySelector("#ul_lista3").innerHTML = ispis6;