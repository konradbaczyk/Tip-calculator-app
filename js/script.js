const billValue = document.querySelector("#bill-value");
const tipValues = document.querySelectorAll(".select-tip-value");
const customTipValue = document.querySelector(".custom-tip-value");
const numberOfPeople = document.querySelector("#number-of-people");
const tipAmountPerPerson = document.querySelector("#tip-amount-per-person");
const totalCostPerPerson = document.querySelector("#total-per-person");
const resetBtn = document.querySelector("#reset-btn");
const errorMsg = document.querySelector("#error-msg");

const checkCosts = (e) => {
	unlockReset();

	let bill = billValue.value;
	let tipAmount = e.target.value;
	let numberOfPersons = numberOfPeople.value;

	if (numberOfPeople.value != 0) {
		errorMsg.classList.remove("show-error");
		numberOfPeople.classList.remove("error");

		tipAmountPerPerson.textContent = ((bill * tipAmount) / numberOfPersons).toFixed(2);
		let tipPerPerson = Number(tipAmountPerPerson.textContent);

		totalCostPerPerson.textContent = (bill / numberOfPersons + tipPerPerson).toFixed(2);
	} else {
		errorMsg.classList.add("show-error");
		numberOfPeople.classList.add("error");
	}
};

const checkCostsCustomTip = (e) => {
	unlockReset();

	let bill = billValue.value;
	let customTip = e.target.value / 100;
	let numberOfPersons = numberOfPeople.value;

	if (numberOfPeople.value != 0) {
		errorMsg.classList.remove("show-error");
		numberOfPeople.classList.remove("error");

		tipAmountPerPerson.textContent = ((bill * customTip) / numberOfPersons).toFixed(2);
		let tipPerPerson = Number(tipAmountPerPerson.textContent);

		totalCostPerPerson.textContent = (bill / numberOfPersons + tipPerPerson).toFixed(2);
	} else {
		errorMsg.classList.add("show-error");
		numberOfPeople.classList.add("error");
	}
};

const resetSplitter = () => {
	billValue.value = "";
	customTipValue.value = "";
	numberOfPeople.value = "";
	tipAmountPerPerson.textContent = "0.00";
	totalCostPerPerson.textContent = "0.00";
	errorMsg.classList.remove("show-error");
	numberOfPeople.classList.remove("error");
	resetBtn.classList.remove("unlock-reset");
};

const unlockReset = () => {
	if (billValue != 0 || customTipValue != "" || numberOfPeople != 0) {
		resetBtn.classList.add("unlock-reset");
	}
};

tipValues.forEach((tip) => tip.addEventListener("click", checkCosts));
customTipValue.addEventListener("input", checkCostsCustomTip);
resetBtn.addEventListener("click", resetSplitter);
