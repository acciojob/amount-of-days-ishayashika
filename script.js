//your JS code here. If required.
function daysOfAYear(year){
	let leapyear=(year%4===0 && year%100!==0) || (year%400===0)
	return leapyear ? 366 : 365;
}
console.log(daysOfAYear(2022));
console.log(daysOfAYear(2024));
console.log(daysOfAYear(1900));
console.log(daysOfAYear(2000));

