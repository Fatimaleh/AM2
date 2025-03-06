let images = [];
        let currentIndex = 0;

        async function fetchImages() {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=100');
            images = await response.json();
            images = images.map((image, index) => ({ ...image, newIndex: index + 1 })).sort(() => Math.random() - 0.5);
            loadImages();
        }

        function loadImages() {
            const carousel = document.getElementById("carousel");
            carousel.innerHTML = "";
            images.forEach((image, i) => {
                let img = document.createElement("img");
                img.src = `https://picsum.photos/id/${image.id}/600/400`;
                img.dataset.author = image.author;
                img.dataset.id = image.id;
                img.dataset.index = i + 1;
                img.dataset.width = 600;
                img.dataset.height = 400;
                carousel.appendChild(img);
            });
        }

        function moveCarousel(direction) {
            const carousel = document.getElementById("carousel");
            currentIndex = (currentIndex + direction + images.length) % images.length;
            carousel.style.transform = `translateX(-${currentIndex * 600}px)`;
        }

        function saveRating() {
            const ratings = JSON.parse(localStorage.getItem("ratings")) || {};
            const currentImageIndex = images[currentIndex].newIndex;
            const ratingValue = document.getElementById("rating").value;

            ratings[currentImageIndex] = ratingValue;
            localStorage.setItem("ratings", JSON.stringify(ratings));
            alert(`Avaliação para a imagem ${currentImageIndex} salva!`);
        }

        fetchImages();