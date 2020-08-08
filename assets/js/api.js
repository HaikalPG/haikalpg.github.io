var obj;

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => document.getElementById('title').innerHTML = obj.title)
  .then(() => document.getElementById('post').innerHTML = obj.body)

function greets(){
  alert("hello");
}

// Fetch nanti kalo butuh data