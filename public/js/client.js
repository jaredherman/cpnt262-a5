fetch("/api/v0/furnitures")
  .then(function (response) {
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error("Not 200 OK");
    }
    return response.json();
  })
  .then(function (furnitures) {
    // Any code that depends on the data must go in this block
    let output = "";

    const gallery = document.querySelector(".gallery");

    furnitures.forEach(function (furnitures) {
      output += `<figure>
    <a href="furnitures/${furnitures.title}" target:"_blank"><img src="${furnitures.pathURL}" alt="pexels:${furnitures.title}" width='${furnitures.width}px' height='${furnitures.height}px'></a>
      <figcaption>
        <h2> <a href="furnitures/${furnitures.title}" target:"_blank">${furnitures.title}</a></h2>
        <h3>${furnitures.description}</h3>
        <a href="${furnitures.creditURL}" target="_blank">Design by ${furnitures.credit}</a>
        <a href="${furnitures.linkURL}" target="_blank">More Info</a>
      </figcaption>
    </figure>`;
    });

    gallery.innerHTML = output;
  })

  .catch(function (err) {
    // An error will go here
    console.log(err);
  });
