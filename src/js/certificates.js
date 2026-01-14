// document.addEventListener('DOMContentLoaded', () => {
//   const cards = document.querySelector('.certificates__cards').querySelectorAll('.card');

//   for (const button of document.querySelector('.certificates__links').querySelectorAll('button')) {
//     button.addEventListener('click', () => {
//       for (const button of document.querySelector('.certificates__links').querySelectorAll('button')) {
//         button.classList.remove('filter--active');
//       }
//       button.classList.add('filter--active');

//       if (button.getAttribute('data-filter')) {
//         document.querySelector('.certificates__cards').innerHTML = '';

//         const filterCards = Array.from(cards).filter((card) => {
//           return card.getAttribute('data-filter') == button.getAttribute('data-filter');
//         });

//         for (const card of filterCards) {
//           document.querySelector('.certificates__cards').appendChild(card);
//         }
//       } else {
//         document.querySelector('.certificates__cards').innerHTML = '';

//         for (const card of cards) {
//           document.querySelector('.certificates__cards').appendChild(card);
//         }
//       }
//     });
//   }
// });
