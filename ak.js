



let bl = document.querySelector('.bl');



bl.addEventListener("click",async ()=>{

  let i1 = document.querySelector(".i1").value;
  let i2 = document.querySelector(".i2").value;
 
  await x3(i1,i2);
})







const url = `https://love-calculator.p.rapidapi.com/getPercentage?`;
const optionsNew = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '676ff81ff6mshddfa055d127a7e6p1d1638jsnb17c1c9a5c03',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};


let x3 = async(a,b)=>{
try {
	const response = await fetch(url+`sname=${a}&fname=${b}`, optionsNew);
	let  results = await response.text();
	console.log(results);
	
	await show(results);
} catch (error) {
	console.error(error);
}
}

let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let love = document.querySelector('.love');
let sug = document.querySelector('.sug');
let n1 = document.querySelector('.n1');

let show = (results)=>{

let result = JSON.parse(results);

if(result.sname=="" || result.fname==""){
  alert("please enter some name");
  return;
}

if(result.sname.length <=5 || result.fname.length<=5){
	alert("please enter full name");
	
	return;
  }
  


n1.classList.remove("hidden");



  h3.innerHTML = result.sname;
  h4.innerHTML = result.fname;
  love.innerHTML = result.percentage;
  sug.innerHTML = result.result;


}




