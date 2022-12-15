import { galleryItems } from './gallery-items.js';
// Change code below this line

const div = document.querySelector(".gallery");

galleryItems.forEach((elem) => {
    const link = document.createElement("a");
    const img = document.createElement("img");
    
    link.classList.add("gallery__item");
    link.href = elem.original;
    img.classList.add("gallery__image");
    img.src = elem.preview;
    img.alt = elem.description;
    div.append(link);
    link.append(img);
})

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
// Zadanie 2 - biblioteka SimpleLightbox
// Utwórz taką samą galerię jak w zadaniu pierwszym, 
// używając jednak biblioteki SimpleLightbox, która zajmie się opracowaniem 
// kliknięć w obrazki, otwieraniem i zamykaniem okna modalnego oraz przewijaniem 
// obrazków za pomocą klawiatury.

// Konieczna jest nieznaczna zmiana znacznika galerii, użyj tego szablonu.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

// Wykonuj to zadanie w plikach 02-lightbox.html i 02-lightbox.js. 
// Rozbij je na kilka podzadań:

// 1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems 
// i dostarczonym szablonem elementu galerii. Użyj gotowego kodu z zadania pierwszego.
// 2. Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs. 
// Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js 
// i simple-lightbox.min.css.
// 3. Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich do 
// div.gallery. Aby to zrobić, zapoznaj się z dokumentacją SimpleLightbox - 
// najpierw sekcje «Usage» i «Markup».
// 4. W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów 
// do obrazków z atrybutu alt. Niech podpis będzie pod spodem i pojawia się po 
// 250 milisekundach po otwarciu obrazka.