function insertNumber(number) {
	const existingNumber = document.getElementById("display").value;
	document.getElementById("display").value = existingNumber + number;
}
function clearResult() {
	document.getElementById("display").value = '';
}
function calculate() {
	const result = eval(document.getElementById("display").value);
	document.getElementById("display").value = result;
}
function deleteNumber() {
	const presentValue = document.getElementById("display").value;
	if (presentValue != '') {
		document.getElementById("display").value = presentValue.slice(0, - 1);
	}
}