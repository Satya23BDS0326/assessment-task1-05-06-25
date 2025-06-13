function calculateAge() {
  const birthDate = new Date(document.getElementById("birthdate").value);
  const currentDate = new Date();

  if (birthDate > currentDate) {
    alert("Please enter a valid birthdate.");
    return;
  }

  const ageInMilliseconds = currentDate - birthDate;
  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  document.getElementById("years").innerText = years < 10 ? "0" + years : years;
  document.getElementById("months").innerText = months < 10 ? "0" + months : months;
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
}
