document.addEventListener('DOMContentLoaded', () => {
  $('.contacts__slider').slick();

  document.querySelector('.slick-next').innerHTML = `
    <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.398438 0.302734L5.89844 7.52496L0.398438 14.3027" stroke="black"/>
    </svg>
    `;

  document.querySelector('.slick-prev').innerHTML = `
    <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.13672 14.3154L0.636719 7.09321L6.13672 0.31543" stroke="black"/>
    </svg>
    `;
});
