const createContactPage = (() => {
  const contentDiv = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const form = document.createElement("form");
  form.classList.add("contact-form");

  // create and append the name input
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.setAttribute("for", "nameInput");
  nameInputLabel.textContent = "Name: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.setAttribute("id", "nameInput");
  nameInput.required = true;
  nameInput.placeholder = "e.g., John Strung";
  nameInputContainer.append(nameInputLabel, nameInput);

  // create and append the address input
  const addressInputContainer = document.createElement("div");
  const addressInputLabel = document.createElement("label");
  addressInputLabel.setAttribute("for", "addressInput");
  addressInputLabel.textContent = "Address: ";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.setAttribute("id", "addressInput");
  addressInput.placeholder = "e.g., 12 Tedt drive, Wiyoma";
  addressInputContainer.append(addressInputLabel, addressInput);

  // create and append the phone number input
  const telNoInputContainer = document.createElement("div");
  const telNoInputLabel = document.createElement("label");
  telNoInputLabel.setAttribute("for", "telNoInput");
  telNoInputLabel.textContent = "Phone Number: ";
  const telNoInput = document.createElement("input");
  telNoInput.type = "tel";
  telNoInput.setAttribute("id", "telNoInput");
  telNoInput.placeholder = "e.g., +233568878";
  telNoInputContainer.append(telNoInputLabel, telNoInput);

  // Create and append the email contact info input
  const emailInputContainer = document.createElement("div");
  const emailInputLabel = document.createElement("label");
  emailInputLabel.setAttribute("for", "emailInput");
  emailInputLabel.textContent = "Email: ";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.setAttribute("id", "emailInput");
  emailInput.required = true;
  emailInput.placeholder = "e.g., youremail@example.com";
  emailInputContainer.append(emailInputLabel, emailInput);

  //create the msg text area field;
  const msgInputContainer = document.createElement("div");
  const msgInputLabel = document.createElement("label");
  msgInputLabel.setAttribute("for", "msgInput");
  msgInputLabel.textContent = "Enter your Message: ";
  const msgInput = document.createElement("textarea");
  msgInput.setAttribute("id", "msgInput");
  msgInputContainer.append(msgInputLabel, msgInput);

  //create and append the submit button;
  const submitBtnContainer = document.createElement("div");
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.type = "submit";
  submitBtn.setAttribute("id", "submit");
  submitBtnContainer.append(submitBtn);

  form.append(
    nameInputContainer,
    addressInputContainer,
    telNoInputContainer,
    emailInputContainer,
    msgInputContainer,
    submitBtnContainer
  );

  pageContent.appendChild(form);

  contentDiv.appendChild(pageContent);
})();

export default createContactPage;
