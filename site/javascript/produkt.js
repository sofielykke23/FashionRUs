const productContainer = document.querySelector(".product");
const productId = 1530;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
.then((response) => response.json())
.then((data) =>{
    console.log("Fetched Data:", data);

productContainer.innerHTML = `
        <div>
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
          <div><p class="addtocart">Add to cart</p></div>
        </div>
    `;
  });

