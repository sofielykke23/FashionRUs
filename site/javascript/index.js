fetch(`https://kea-alt-del.dk/t7/api/categories`)
.then((response) => response.json())
.then(showCategori);

function showCategori(data){
    console.log ("min data er:", data);

    const markup = data
    .map(
        (element) =>
            `<article>
        <a href="productlist.html?category=${element.category}">${element.category}</a>
        </article>`
    )
    .join("");
    console.log("min markup er", markup);
    document.querySelector("ul").innerHTML = markup;
}
