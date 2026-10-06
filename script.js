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


// PART A
result.style.display = "none";
registrationFee.textContent = "₱0";
discount.textContent = "₱0";
finalFee.textContent = "₱0";


// PART B
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


