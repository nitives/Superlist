fetch("../components/selector.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("selector").innerHTML = data;
});

fetch("../components/superheader.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("superheader").innerHTML = data;
});

fetch("../components/footer.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("footer").innerHTML = data;
});