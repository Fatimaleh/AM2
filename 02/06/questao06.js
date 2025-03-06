document.getElementById("load-image").addEventListener("click", function() {
  addImageWithAnimation("https://th.bing.com/th/id/R.f38b6a989f2965015884a197d7c3c2e3?rik=ZoJDeYv3cWhdRQ&riu=http%3a%2f%2fwww.imagenspng.com.br%2fwp-content%2fuploads%2f2017%2f08%2fursinho-marrom-07.png&ehk=5ZfH3hzGsEKLHNNAvBUijIDH4cssj6nhaIXtaJuVpbI%3d&risl=&pid=ImgRaw&r=0");
});

function addImageWithAnimation(imageSrc) {
  const grid = document.getElementById("image-grid");

  if (!grid) {
    console.error("Elemento #image-grid não encontrado!");
    return;
  }

  const div = document.createElement("div");
  const img = document.createElement("img");

  img.src = imageSrc;
  img.alt = "Imagem carregada";
  
  
  img.onerror = function() {
    console.error("Erro ao carregar a imagem:", imageSrc);
  };

  div.appendChild(img);
  div.classList.add("fade-in"); 
  grid.appendChild(div);

  console.log("Imagem adicionada com sucesso:", imageSrc);
}
