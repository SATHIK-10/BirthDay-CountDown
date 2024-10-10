function update(){
const days = new Date().getFullYear();

const newyear = new Date(`August 10, ${days + 1} 00:00:00`);
console.log(newyear);
const currentdate = new Date();
console.log(currentdate);

const diff = newyear - currentdate;
//here the diff of the date or days in ex:2834040202(milliseconds) in this format.so,using some arithmetic calculation based on div and modulus to get respective mins,hrs,sec
console.log(`Difference in milliseconds: ${diff}`);
const day=document.getElementById('days');
const hour=document.getElementById('hours');
const mins=document.getElementById('minutes');
const secs=document.getElementById('seconds');

const diffInSeconds = Math.floor(diff / 1000);
const diffInMinutes = Math.floor(diffInSeconds / 60);
const diffInHours = Math.floor(diffInMinutes / 60);
const diffInDays = Math.floor(diffInHours / 24);

const remainingHours = diffInHours % 24;
const remainingMinutes = diffInMinutes % 60;
const remainingSeconds = diffInSeconds % 60;

//here we use conditional operator if days is greater 10 then it return 0 + respective day if not it simply return day
day.innerHTML=diffInDays<10?"0"+diffInDays:diffInDays;
hour.innerHTML=remainingHours<10?"0"+remainingHours:remainingHours;
mins.innerHTML=remainingMinutes<10?"0"+remainingMinutes:remainingMinutes;
secs.innerHTML=remainingSeconds<10?"0"+remainingSeconds:remainingSeconds;

console.log(`Difference: ${diffInDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`);
}
setInterval(update,1000);