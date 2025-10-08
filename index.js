function loadArticle (articleName) {
  fetch(articleName)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Network response was not ok.');
    })
    .then(html => {
      document
        .getElementById("main")
        .innerHTML = html;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}

function main () {
  loadArticle("./epistle-10-08-2025.html");
}

window.onload = () => main();