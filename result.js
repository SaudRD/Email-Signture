window.addEventListener("load", () => {
  // Via Query parameters - GET
  /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

  // Via local Storage
  /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

  const name = sessionStorage.getItem("NAME");
  const surname = sessionStorage.getItem("SURNAME");
  const phone = sessionStorage.getItem("phone");
  const email = sessionStorage.getItem("email");

  document.getElementById("Rn1").innerHTML = name;
  document.getElementById("Rn2").innerHTML = surname;
  document.getElementById("Rn3").innerHTML = phone;
  document.getElementById("Rn4").innerHTML = email;
});