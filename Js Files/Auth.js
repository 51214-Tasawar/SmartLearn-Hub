function singUp(event) {
  event.preventDefault();
   localStorage.setItem( "User",document.getElementById("username").value);
   localStorage.setItem("Pass",document.getElementById("userpassword").value);
  showmodel();
}
function showmodel() {
  document.getElementById("SignUpForm").style.display = "none";
  document.getElementById("model").style.display = "flex";
}

function gologin() {
  window.location = "../Html files/login.html";

}

function login(event) {
  event.preventDefault();
  let User = localStorage.getItem('User')
  let password = localStorage.getItem('Pass')
  let loginUser = document.getElementById('loginuser').value
  let loginPass = document.getElementById('loginpass').value
  if(User=== loginUser && password === loginPass){
    alert(' Login Successfully ... ')
    window.location = '../Html files/Index.html'
  }
  else{
    alert('Invalid Credential')
  }
}
