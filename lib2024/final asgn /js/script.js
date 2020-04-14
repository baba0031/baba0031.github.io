const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const province = document.getElementById('province');
const postalCode = document.getElementById('postal-code');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('something working');
  checkInputs();
});

function checkInputs() {
  // Get the values from the inputs
  console.log('something');
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const provinceValue = province.value.trim();

  if (nameValue === '') {
    //show error
    //add error class
    setErrorFor(name, "Name can't be blank.");
  } else {
    //add success class
    setSuccessFor(name);
  }

  if (emailValue === '') {
    //show error
    //add error class
    setErrorFor(email, "Email can't be blank.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not a valid email.');
  } else {
    //add success class
    setSuccessFor(email);
  }

  if (addressValue === '') {
    //show error
    //add error class
    setErrorFor(address, "Address can't be blank.");
  } else {
    //add success class
    setSuccessFor(address);
  }

  if (cityValue === '') {
    //show error
    //add error class
    setErrorFor(city, "City can't be blank.");
  } else {
    //add success class
    setSuccessFor(city);
  }

  if (provinceValue === '') {
    //show error
    //add error class
    setErrorFor(province, "You didn't select a province.");
  } else {
    //add success class
    setSuccessFor(province);
  }

  if (postalCodeValue === '') {
    //show error
    //add error class
    setErrorFor(postalCode, "Postal code can't be blank.");
  } else if (!isPostalCode(postalCodeValue)) {
    setErrorFor(postalCode, 'Postal code is not a valid Postal code');
  } else {
    //add success class
    setSuccessFor(postalCode);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  // add error message inside small element.
  small.innerText = message;

  // add error class

  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement; //.form-control

  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');
  const profilePostalCode = document.getElementById('profile-postal-code');
  const profileAddress = document.getElementById('profile-address');
  const profileCity = document.getElementById('profile-city');
  const profileProvince = document.getElementById('profile-province');

  if (
    name.value &&
    email.value &&
    postalCode.value &&
    address.value &&
    city.value &&
    province.value
  ) {
    profileName.innerText = name.value.trim();
    profileEmail.innerText = email.value.trim();
    profilePostalCode.innerText = postalCode.value.trim();
    profileAddress.innerText = address.value.trim();
    profileCity.innerText = city.value.trim();
    profileProvince.innerText = province.value.trim();
  }
  // add success class

  formControl.className = 'form-control success';
}

function isEmail(email) {
  let path = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return path.test(String(email).toLowerCase());
}

function isPostalCode(postalCode) {
  let path2 = /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/;

  return path2.test(String(postalCode));
}
