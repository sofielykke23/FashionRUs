const listContainer = document.querySelector(".products-grid");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
.then((response) => response.json())
.then((data) => showList(data));

function showList(products){
    console.log(products);
    let markup = "";
    products.map((product)=>{
        markup +=
        `<article class="product_list_container">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Beskrivelse af billede" />
          <h2>${product.productdisplayname}</h2>
          <p>DKK ${product.price},-</p>
          <a href="product.html"><p class="read_more">Read more</p></a>
        </article>`;
    })
    .join("");
    listContainer.innerHTML = markup;
} 
