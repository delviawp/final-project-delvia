function reservation(data) {
    let name = document.getElementById("name").value;
  
    let date = document.getElementById("date").value;
    if (!name) {
        document.getElementById("empty").innerHTML = `<p>Data is empty</p>`
    } else {
        document.getElementById("finish").innerHTML = `<h3>Thank you</h3>
    <p>Name ${name}</p>
    <p>Date of Arrival ${date}</p>
    <p>We can't wait to see you !</p>`
    }
    
    
    
    
    document.getElementById("finish").style.display = "block"
    document.getElementById("form").style.display = "none"
    document.getElementById("button").style.display = "none"
}





