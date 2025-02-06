const listContainer = document.querySelector(".products-grid");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
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
          <p class="saleLabel ${product.discount && "isOnSale"}">-
          ${product.discount}%</p>
          <a href="product.html?id=${product.id}"><p class="read_more">Read more</p></a>
          <p class="${product.soldout && "sold_out"}"></p>
        </article>`;
    })
    .join("");
    listContainer.innerHTML = markup;
} 
