function addImage(imageUrl, authorName) {
  const imageGrid = document.getElementById('image-grid');
  if (!imageGrid) {
      console.error('Elemento #image-grid não encontrado.');
      return;
  }

  const imageItem = document.createElement('div');
  imageItem.classList.add('image-item');
  imageItem.setAttribute('data-author', authorName);
  imageItem.setAttribute('data-url', imageUrl);

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = `${authorName} artwork`;

  const author = document.createElement('p');
  author.textContent = authorName;

  const starRating = document.createElement('div');
  starRating.classList.add('star-rating');

  for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '&#9733;';
      star.dataset.rating = i;
      star.addEventListener('click', function () {
          setRating(authorName, i);
          updateRatingDisplay(authorName);
      });
      starRating.appendChild(star);
  }

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Resetar Avaliação';
  resetButton.classList.add('reset-button');
  resetButton.addEventListener('click', function () {
      resetRating(authorName);
      updateRatingDisplay(authorName);
  });

  imageItem.appendChild(image);
  imageItem.appendChild(author);
  imageItem.appendChild(starRating);
  imageItem.appendChild(resetButton);
  imageGrid.appendChild(imageItem);

  updateRatingDisplay(authorName);
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', function(event) {
      const searchValue = event.target.value.toLowerCase();
      const images = document.querySelectorAll('.image-item');

      images.forEach(image => {
          const author = image.getAttribute('data-author').toLowerCase();
          image.style.display = author.includes(searchValue) ? 'block' : 'none';
      });
  });
} else {
  console.warn('Elemento #search-input não encontrado.');
}

function setRating(author, rating) {
  let ratings = JSON.parse(localStorage.getItem("imageRatings")) || {};
  ratings[author] = rating;
  localStorage.setItem("imageRatings", JSON.stringify(ratings));
}

function getRating(author) {
  let ratings = JSON.parse(localStorage.getItem("imageRatings")) || {};
  return ratings[author] || 0;
}

function resetRating(author) {
  let ratings = JSON.parse(localStorage.getItem("imageRatings")) || {};
  delete ratings[author];
  localStorage.setItem("imageRatings", JSON.stringify(ratings));
}

function updateRatingDisplay(author) {
  const rating = getRating(author);
  const imageItems = document.querySelectorAll(`.image-item[data-author="${author}"]`);
  imageItems.forEach(item => {
      const stars = item.querySelectorAll('.star');
      stars.forEach((star, index) => {
          star.classList.toggle('checked', index < rating);
      });
  });
}

async function fetchImageInfo(id) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({
              author: id,
              width: '800',
              height: '600',
              url: `https://via.placeholder.com/800x600?text=${id}`
          });
      }, 1000);
  });
}

async function getCachedImageInfo(id) {
  const cached = localStorage.getItem(`imgInfo_${id}`);
  if (cached) {
      return JSON.parse(cached);
  }
  try {
      const info = await fetchImageInfo(id);
      localStorage.setItem(`imgInfo_${id}`, JSON.stringify(info));
      return info;
  } catch (error) {
      console.error("Erro ao obter ou cachear info da imagem:", error);
      return null;
  }
}

async function showImageDetails(id) {
  try {
      const info = await getCachedImageInfo(id);
      if (info) {
          const modalAuthor = document.getElementById("modal-author");
          if (modalAuthor) {
              modalAuthor.textContent = `Autor: ${info.author}`;
          } else {
              console.warn("Elemento #modal-author não encontrado.");
          }
      }
  } catch (error) {
      console.error("Erro ao exibir detalhes da imagem:", error);
  }
}
