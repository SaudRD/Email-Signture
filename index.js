function handleSubmit() {
  const name = document.getElementById("n1").value;
  const surname = document.getElementById("n2").value;
  const phone = document.getElementById("n3").value;
  const email = document.getElementById("n4").value;

  // to set into local storage
  /* localStorage.setItem("NAME", name);
  localStorage.setItem("SURNAME", surname); */

  sessionStorage.setItem("NAME", name);
  sessionStorage.setItem("SURNAME", surname);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("email", email);

  return;
}
