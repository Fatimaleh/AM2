
function addImageWithAuthor(imageUrl, authorName) {
  const imageGrid = document.getElementById('image-grid');
  const imageItem = document.createElement('div');
  imageItem.classList.add('image-item');
  
 
  imageItem.setAttribute('data-author', authorName);
  
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = `${authorName} artwork`;
  
  const author = document.createElement('p');
  author.textContent = authorName;

  imageItem.appendChild(image);
  imageItem.appendChild(author);
  imageGrid.appendChild(imageItem);
}


document.getElementById('search-input').addEventListener('input', function(event) {
  const searchValue = event.target.value.toLowerCase();
  const images = document.querySelectorAll('.image-item');
  
  images.forEach(image => {
      const author = image.getAttribute('data-author').toLowerCase();
      
    
      if (author.includes(searchValue)) {
          image.style.display = 'block'; 
      } else {
          image.style.display = 'none';
      }
  });
});
