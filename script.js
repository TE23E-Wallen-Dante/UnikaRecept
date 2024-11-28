
// Variabler
const ul = document.querySelector("ul");
const aside = document.querySelector("aside");
const max = 5;
let count = 0;

// Funktion som identifierar namn, pris, typ, och företag, och skriver ut det i konsolen
function choose(namn, pris, typ, företag) {
    console.log("Namn: " + namn + "\nPris: " + pris + "\nTyp: " + typ + "\nFöretag: " + företag)

    // Om count är mindre än max, lägg gör det under
    if (count < max) {
        // Skapa ett li-element med liknande innehåll som konsolen
        let li = document.createElement("li");
        li.textContent = namn + "; Pris: " + pris + " kr; Typ: " + typ + "; Företag: " + företag;
        li.id = "varukorg";

        // Kopplar ul-elementet med det nyskapade li, så att allt hamnar rätt (kommunikation)
        ul.appendChild(li);
        count++;

        console.log("Varukorgen är full!");

        if (count >= max) {
            // Skapa ett p-element med text som säger att varukorgen är full
            let p = document.createElement("p");
            p.textContent = "Varukorgen är full!";
            p.id = "varukorg-full"

            aside.appendChild(p);

        }

    }
};

function buy()
{
    
};

