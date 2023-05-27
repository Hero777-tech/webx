function checkPassword() {
    var password = document.getElementById("password-input").value;
    var content = document.getElementById("content");
    
    if (password === "7777777777") {
      content.style.display = "block";
      document.getElementById("password-form").style.display = "none";
    } else {
      alert("Invalid password!");
    }
  }
  