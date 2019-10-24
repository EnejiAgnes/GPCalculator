let main = document.querySelector("#main")
let noOfCourse = 0;
const send = ( )=>{
	let range = document.getElementById('range');
	let courseGP = document.getElementById('courseGP');
	let courseUnit = document.getElementById('courseUnit');
	
	console.log(range)
	noOfCourse = range.options[range.selectedIndex].text;
	
	// console.log(noOfCourse)
	
	for (var i = 1; i <= noOfCourse; i++) {
		
		let para = document.createElement("p");
		para.innerHTML = "Course" + i
		let Select = document.createElement("SELECT")
		Select.setAttribute("id", "course" +i);
		let option1 = document.createElement("OPTION");
		option1.innerHTML = "Select Grade"
		option1.setAttribute("disable", "true")
		let option2 = document.createElement("OPTION");
		option2.innerHTML = "A"
		let option3 = document.createElement("OPTION");
		option3.innerHTML = "B"
		let option4 = document.createElement("OPTION");
		option4.innerHTML = "C"
		let option5 = document.createElement("OPTION");
		option5.innerHTML = "D"
		let option6 = document.createElement("OPTION");
		option6.innerHTML = "E"
		let option7 = document.createElement("OPTION");
		option7.innerHTML = "F"
		

		Select.appendChild(option1);
		Select.appendChild(option2);
		Select.appendChild(option3);
		Select.appendChild(option4);
		Select.appendChild(option5);
		Select.appendChild(option6);
		Select.appendChild(option7);
		
		courseGP.appendChild(para)
		courseGP.appendChild(Select)
		
		let unitpara = document.createElement("p");
		unitpara.innerHTML = "Unit" + i
		let unitSelect = document.createElement("SELECT")
		unitSelect.setAttribute("id", "unit" +i);
		let unitOption1 = document.createElement("OPTION");
		unitOption1.innerHTML = "Select Unit"
		unitOption1.setAttribute("disable", "true")
		let unitOption2 = document.createElement("OPTION");
		unitOption2.innerHTML = "1"
		let unitOption3 = document.createElement("OPTION");
		unitOption3.innerHTML = "2"
		let unitOption4 = document.createElement("OPTION");
		unitOption4.innerHTML = "3"
		let unitOption5 = document.createElement("OPTION");
		unitOption5.innerHTML = "4"
		let unitOption6 = document.createElement("OPTION");
		unitOption6.innerHTML = "6"

		unitSelect.appendChild(unitOption1);
		unitSelect.appendChild(unitOption2);
		unitSelect.appendChild(unitOption3);
		unitSelect.appendChild(unitOption4);
		unitSelect.appendChild(unitOption5);
		unitSelect.appendChild(unitOption6);
		
		courseUnit.appendChild(unitpara);
		courseUnit.appendChild(unitSelect)
	}
	let button = document.createElement("button");
	button.innerHTML = "calculate";
	button.setAttribute("onclick", "calculate()")
	main.appendChild(button)
}

const calculate = ( ) =>{
	let gp = 0;
	let totalGp = 0;
	let totalCredit = 0;
	for (var i = 1; i <= noOfCourse; i++){
		let courseGrade = document.getElementById("course"+i);
		let gradevalue = courseGrade.options[courseGrade.selectedIndex].text
		let courseUnit = document.getElementById("unit"+i);
		let unitValue = parseInt(courseUnit.options[courseUnit.selectedIndex].text)
	
		switch(gradevalue){
			case "A":
				gp+= 5*unitValue
				break
			case "B":
				gp+= 4*unitValue
				break
			case "C":
				gp+= 3*unitValue
				break
			case "D":
				gp+= 2*unitValue
				break
			case "E":
				gp+= 1*unitValue
				break
			case "F":
				gp+= 0*unitValue
				break
		}
		totalCredit+=unitValue
	}	
		// console.log(totalCredit)
		// console.log(Gp 	)
	totalGp = (gp/totalCredit).toFixed(2);
	alert ("your CGPA is " +totalGp)
}