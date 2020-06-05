function toInput() {
	// body...
	var butValue = event.target.value;
	var inputValue = document.getElementById("lname").value;
	inputValue += butValue;
	 document.getElementById("lname").value = inputValue;
}

function count() {
var toCount = eval(document.getElementById("lname").value);
document.getElementById("lname").value = toCount;
}
function delOne() {
	// body...
var newOne = document.getElementById("lname").value.slice(0,-1);
document.getElementById("lname").value = newOne;
}

function cleart() {
	// body...
	document.getElementById("lname").value = "0";

}



