import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector(".gallery");


galleryItems.forEach((e,i) => {
    const item = document.createElement("div");
    const link = document.createElement("a");
    const img = document.createElement("img");
    
    item.classList.add("gallery__item");
    link.classList.add("gallery__link");
    link.href = galleryItems[i].original;
    img.classList.add("gallery__image");
    img.src = galleryItems[i].preview;
    img.alt = galleryItems[i].description;
    img.setAttribute("data-source", galleryItems[i].original)
    div.appendChild(img)
})

console.log(galleryItems);


// Zadanie 1 - galeria obrazów
// Utwórz galerię z możliwością kliknięcia w jej elementy 
// i przeglądania pełnego obrazu w oknie modalnym. Obejrzyj 
// wersję demonstracyjną wideo o działaniu galerii.

// Wykonuj to zadanie w plikach 01-gallery.html i 01-gallery.js. 
// Rozbij je na kilka podzadań:

// 1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems 
// i dostarczonym szablonem elementu galerii.
// 2. Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
// 3. Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. 
// Użyj CDN serwisu jsdelivr i dodaj do projektu linki do minimalizowania 
// (.min) plików biblioteki.
// 4. Otworzenie okna modalnego po kliknięciu w element galerii. 
// Aby to zrobić, zapoznaj się z dokumentacją i przykładami.
// 5. Zmiana wartości atrybutu src elementu <img> w oknie modalnym 
// przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem 
// z przykładów biblioteki basicLightbox.

// Znacznik elementu galerii
// Link do oryginalnego obrazka powinien być przechowywany w atrybucie 
// data source w elemencie <img>, i ukazywać się w href linku. 
// Nie dodawaj innych tagów HTML lub klas CSS oprócz tych, 
// które znajdują się w tym szablonie.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

// Zwróć uwagę na to, że obrazek zamieniono w link, a więc po domyślnym 
// kliknięciu użytkownik zostanie przekierowany na inną stronę. 
// Zablokuj to postępowanie domyślnie.

// Zamknięcie z klawiatury
// UWAGA
// Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, 
// ale będzie dobrą dodatkową praktyką.

// Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape. Zrób tak, aby 
// nasłuchiwanie klawiatury było aktywne tylko wtedy, gdy otwarte jest okno modalne. 
// W bibliotece basicLightbox istnieje metoda na programowe zamknięcie okna modalnego.