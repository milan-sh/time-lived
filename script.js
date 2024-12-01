const toggleButton = document.getElementById("button");
const dobButton = document.getElementById("addDob");
const toggleDiv = document.getElementById("toggle");
const defaultDiv = document.querySelector(".initial");
const showData = document.querySelector(".left");
const user_years = document.getElementById("user_years");
const user_months = document.getElementById("user_months");
const user_days = document.getElementById("user_days");
const user_hours = document.getElementById("user_hours");
const user_minutes = document.getElementById("user_minutes");
const user_seconds = document.getElementById("user_seconds");

let isDobOpen = false;

//toggle the setting svg

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();

  //if isDobOpen true then add the class hide
  if (isDobOpen) {
    toggleDiv.classList.add("hide");
  } else {
    //as initially this is hide so we're removing it
    toggleDiv.classList.remove("hide");
  }
  //changing the value so it can be toggle
  isDobOpen = !isDobOpen;
});

//main functionality
dobButton.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");

  //check value shouldn't empty
  if (input.value == "") {
    alert("Please select DOB");
  } else {
    setInterval(() => {
      //getting the current date values
      const date = new Date();

      //handling the input date
      const inputDate = new Date(`${input.value}`);

      //calculating the currentData
      let dateDiff = date - inputDate;

      // Calculate the number of years
      let years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
      dateDiff -= years * (1000 * 60 * 60 * 24 * 365);

      // Calculate the remaining months
      let months = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30));
      dateDiff -= months * (1000 * 60 * 60 * 24 * 30);

      // Calculate the remaining days
      let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
      dateDiff -= days * (1000 * 60 * 60 * 24);

      // Calculate the remaining hours
      let hours = Math.floor(dateDiff / (1000 * 60 * 60));
      dateDiff -= hours * (1000 * 60 * 60);

      // Calculate the remaining minutes
      let minutes = Math.floor(dateDiff / (1000 * 60));
      dateDiff -= minutes * (1000 * 60);

      // Calculate the remaining seconds
      let seconds = Math.floor(dateDiff / 1000);

      //changing the DOM
      user_years.innerHTML = `${years}`;
      user_months.innerHTML = `${months}`;
      user_months.innerHTML = `${months}`;
      user_days.innerHTML = `${days}`;
      user_hours.innerHTML = `${hours}`;
      user_minutes.innerHTML = `${minutes}`;
      user_seconds.innerHTML = `${seconds}`;

      //showing the final data
      defaultDiv.classList.add("hide");
      showData.classList.remove("hide");
    }, 1000);
  }
});
