async function myFunction() {
    var input, filter;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
  
    // Obtenez les données de manière asynchrone
    const response = await fetch('https://mon-api.com/articles');
    const articles = await response.json();
  
    // Créez une nouvelle liste d'articles basée sur la requête de recherche
    var ul = document.getElementById("myUL");
    ul.innerHTML = '';
    articles.forEach(article => {
      if (article.name.toUpperCase().includes(filter)) {
        var li = document.createElement("li");
        li.textContent = article.name;
        ul.appendChild(li);
      }
    });
  
    // Ajoutez les articles au carrousel
    var carousel = document.querySelector('.carousel');
    carousel.innerHTML = '';
    articles.forEach(article => {
      var div = document.createElement("div");
      div.className = "article";
      div.textContent = article.name;
      var btn = document.createElement("button");
      btn.textContent = "Ajouter au panier";
      btn.onclick = function() { addToCart(article); };
      div.appendChild(btn);
      carousel.appendChild(div);
    });
  }
  
  function addToCart(article) {
    var cart = document.getElementById("cart");
    var item = document.createElement("div");
    item.textContent = article.name + " - " + article.price;
    cart.appendChild(item);
  }
  