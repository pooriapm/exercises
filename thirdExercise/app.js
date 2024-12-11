document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const dropdown = document.getElementById("dropdown");
  let debounceTimeout;
  let products = [];

  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      products = data;
      displayDropdown(products);
    })
    .catch((error) => console.error("error in retrieving data", error));

  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const query = searchInput.value.trim().toLowerCase();
      const filtered = filterProducts(query);
      displayDropdown(filtered);
    }, 500);
  });

  function filterProducts(query) {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (query === "") {
      return products;
    }
    return filtered;
  }

  function displayDropdown(items) {
    dropdown.innerHTML = "";
    if (items.length === 0) {
      const li = document.createElement("li");
      li.textContent = "no user found!";
      dropdown.appendChild(li);
      return;
    }
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      dropdown.appendChild(li);
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-container")) {
      dropdown.innerHTML = "";
    }
  });
});
