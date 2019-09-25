function mealsId(req, router) {
  console.log(req.param.id);
  document.body.innerHTML = "<h1>Home test</h1> <ul id='list'></ul>";
  const list = document.getElementById("list");

  fetch("/api/meals")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `name: ${item.name},  price: ${item.price}`;
        list.appendChild(li);
      });
    });
}

export default mealsId;
