/* Captura los campos de los formularios */
const name = document.getElementById("inputName");
const phone = document.getElementById("inputPhone");
const email = document.getElementById("inputEmail");
const origin = document.getElementById("inputOrigin");
const destination = document.getElementById("inputDestination");
const checkbox1 = document.getElementById("inlineCheckbox1");
const checkbox2 = document.getElementById("inlineCheckbox2");
const checkbox3 = document.getElementById("inlineCheckbox3");
const comments = document.getElementById("inputComments");
const opinion = document.getElementById("inputOpinion");
const picture = document.getElementById("photoFile");



/* Captura los formularios */
const form1 = document.getElementById("step1");
const form2 = document.getElementById("step2");
const form3 = document.getElementById("step3");

const btnForm = document.getElementsByClassName("btn-form");

for (let i = 0; i < btnForm.length; i++) {
	btnForm[i].addEventListener("click",handleMultistep);
}

function handleMultistep(e) {
	/* Evita el comportamiento por defecto del formulario: no se va a recargar la página */
	e.preventDefault();

	switch(e.target.id) {
	/* Botón siguiente de formulario 1 */
	case 'btn-next-form1':
		form1.classList.toggle("d-none");
		form2.classList.toggle("d-none");
		break;

	/* Botón anterior de formulario 2 */
	case 'btn-prev-form2':
		form2.classList.toggle("d-none");
		form1.classList.toggle("d-none");
		break;

	/* Botón siguiente de formulario 2 */
	case 'btn-next-form2':
		form2.classList.toggle("d-none");
		form3.classList.toggle("d-none");
		break;

	/* Botón anterior de formulario 3 */
	case 'btn-prev-form3':
		form3.classList.toggle("d-none");
		form2.classList.toggle("d-none");
		break;

	/* Botón submit */
	case 'btn-submit-form3':
		handleSubmit();
		break;

	default:
		break;
	}
}

function handleSubmit() {
	console.log("Hay que procesar el formulario");
}