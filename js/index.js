function checkForName() {
  let name = localStorage.getItem("storageName");
  if (name != "" && name != null) {
    alert("Welcome again " + name);
    console.log("User Relogged")
    document.getElementById("nameOfCompany").innerHTML = "📄 " + name + "'s Paper Company";
  } else {
    name = prompt("Please enter your name:", "");
    if (name != "" && name != null) {
      localStorage.setItem("storageName", name);
      console.log("Registered New User")
          document.getElementById("nameOfCompany").innerHTML = "📄 " + name + "'s Paper Company";
    }
  }
}

function hide(item) {
  document.getElementById(item).hidden = true
}

function show(item) {
  document.getElementById(item).hidden = false
}
