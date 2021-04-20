document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const num = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";
      if (response.type === "success") {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something is rotten in the state of Denmark</li>";
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
