const productContainer = document.querySelector(".product");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
.then((response) => response.json())
.then((data) =>{
    console.log("Fetched Data:", data);

productContainer.innerHTML = `
        <div class="billede_produkt">
          <p class="${data.soldout && "sold_out2"}"></p>
        <img 
        src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
        alt="Beskrivelse af billede" 
        />
     
        </div>
        <div class="product_text">
          <h2>${data.productdisplayname}</h2>
            <p><strong>Category:</strong> ${data.category}</p>
             <p><strong>Type:</strong> ${data.articletype}</p>
          <p><strong>Price: </strong>DKK ${data.price},-</p>
             <span class="saleLabel ${data.discount && "isOnSale"}">
        -${data.discount}%</span>
      
       
          <div><p class="addtocart">Add to cart</p></div>
           
        </div>
    `;
  });

