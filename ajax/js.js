let btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'file.txt');
  xhr.send();

  xhr.onreadystatechange = function() {
    let d = xhr.responseText;
    document.body.append(d);
  };
});
