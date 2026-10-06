// DOM ELEMENTS
const form = document.getElementById("registrationForm");

const name = document.getElementById("studentName");
const studentNumber = document.getElementById("studentNumber");
const email = document.getElementById("email");
const workshop = document.getElementById("workshop");

const regular = document.getElementById("studentTypeRegular");
const scholar = document.getElementById("studentTypeScholar");
const terms = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const studentNumberError = document.getElementById("studentNumberError");
const emailError = document.getElementById("emailError");
const workshopError = document.getElementById("workshopError");
const termsError = document.getElementById("termsError");

const registrationFee = document.getElementById("registrationFee");
const discount = document.getElementById("discount");
const finalFee = document.getElementById("finalFee");

const registerBtn = document.getElementById("registerBtn");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("registrationResult");

const summaryName = document.getElementById("summaryName");
const summaryStudentNumber = document.getElementById("summaryStudentNumber");
const summaryEmail = document.getElementById("summaryEmail");
const summaryWorkshop = document.getElementById("summaryWorkshop");
const summaryStudentType = document.getElementById("summaryStudentType");
const summaryFee = document.getElementById("summaryFee");
const summaryDiscount = document.getElementById("summaryDiscount");
const summaryFinalFee = document.getElementById("summaryFinalFee");


// INITIAL STATE
result.style.display = "none";
registrationFee.textContent = "₱0";
discount.textContent = "₱0";
finalFee.textContent = "₱0";


// VALIDATION FUNCTION
function validateStudentInfo(name, studentNumber, email) {
    const validName =
        name.trim().length >= 3 &&
        !/\d/.test(name) &&
        name.trim() !== "";

    const validStudentNumber =
        /^\d{2}-\d{4}-\d{3}$/.test(studentNumber);

    const validEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return validName && validStudentNumber && validEmail;
}


// FEE FUNCTION
function calculateFinalFee(workshop, studentType) {
    let fee = 0;

    if (workshop === "Web Development") {
        fee = 500;
    } else if (workshop === "UI/UX Design") {
        fee = 400;
    } else if (workshop === "Cybersecurity") {
        fee = 600;
    }

    if (studentType === "Scholar") {
        fee = fee * 0.80;
    }

    return fee;
}


// GET BASE FEE
function getWorkshopFee() {
    if (workshop.value === "Web Development") return 500;
    if (workshop.value === "UI/UX Design") return 400;
    if (workshop.value === "Cybersecurity") return 600;

    return 0;
}


// UPDATE FEE DISPLAY
function updateFee() {
    const fee = getWorkshopFee();

    let studentType = "";

    if (regular.checked) {
        studentType = "Regular Student";
    } else if (scholar.checked) {
        studentType = "Scholar";
    }

    const final = calculateFinalFee(workshop.value, studentType);
    const discountAmount = fee - final;

    registrationFee.textContent = "₱" + fee;
    discount.textContent = "₱" + discountAmount;
    finalFee.textContent = "₱" + final;
}


// WORKSHOP CHANGE
workshop.addEventListener("change", updateFee);


// STUDENT TYPE CHANGE
regular.addEventListener("change", updateFee);
scholar.addEventListener("change", updateFee);


// FORM SUBMISSION
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear old errors
    nameError.textContent = "";
    studentNumberError.textContent = "";
    emailError.textContent = "";
    workshopError.textContent = "";
    termsError.textContent = "";

    let valid = true;

    // Validate name
    if (
        name.value.trim().length < 3 ||
        /\d/.test(name.value) ||
        name.value.trim() === ""
    ) {
        nameError.textContent = "Enter a valid student name.";
        valid = false;
    }

    // Validate student number
    if (!/^\d{2}-\d{4}-\d{3}$/.test(studentNumber.value)) {
        studentNumberError.textContent =
            "Enter a valid student number.";
        valid = false;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent =
            "Enter a valid email address.";
        valid = false;
    }

    // Validate workshop
    if (getWorkshopFee() === 0) {
        workshopError.textContent =
            "Please select a workshop.";
        valid = false;
    }

    // Validate terms
    if (!terms.checked) {
        termsError.textContent =
            "You must accept the Terms and Conditions.";
        valid = false;
    }

    // Stop if invalid
    if (!valid) {
        result.style.display = "none";
        return;
    }

    // Student type
    let studentType = "";

    if (regular.checked) {
        studentType = "Regular Student";
    } else if (scholar.checked) {
        studentType = "Scholar";
    }

    // Calculate fees
    const fee = getWorkshopFee();
    const final = calculateFinalFee(workshop.value, studentType);
    const discountAmount = fee - final;

    // Display summary safely
    summaryName.textContent = name.value;
    summaryStudentNumber.textContent = studentNumber.value;
    summaryEmail.textContent = email.value;
    summaryWorkshop.textContent = workshop.value;
    summaryStudentType.textContent = studentType;
    summaryFee.textContent = "₱" + fee;
    summaryDiscount.textContent = "₱" + discountAmount;
    summaryFinalFee.textContent = "₱" + final;

    result.style.display = "block";
});


// CLEAR BUTTON
clearBtn.addEventListener("click", function() {
    name.value = "";
    studentNumber.value = "";
    email.value = "";

    workshop.value = "";

    regular.checked = false;
    scholar.checked = false;

    terms.checked = false;

    nameError.textContent = "";
    studentNumberError.textContent = "";
    emailError.textContent = "";
    workshopError.textContent = "";
    termsError.textContent = "";

    registrationFee.textContent = "₱0";
    discount.textContent = "₱0";
    finalFee.textContent = "₱0";

    result.style.display = "none";
});
