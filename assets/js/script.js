const form = document.querySelector('#register-form');
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const confpass = document.querySelector('#confirmpassword');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!checkEmpty()) {
		error.style.color = 'red';
		error.innerHTML = 'Preencha todos os campos!';
		error.style.display = 'block';
		return;
	}
	if (!checkEmail()) {
		error.style.color = 'red';
		error.innerHTML = 'Insira um e-mail válido!';
		error.style.display = 'block';
		return;
	}
	if (!checkPassword()) {
		error.style.color = 'red';
		error.innerHTML = 'Senhas não conferem!';
		error.style.display = 'block';
		return;
	}
	error.style.color = 'green';
	error.innerHTML = 'Registrado com sucesso!';
	error.style.display = 'block';
});

function checkEmpty() {
	if (user.value.length < 1) return;
	if (email.value.length < 1) return;
	if (pass.value.length < 1) return;
	if (confpass.value.length < 1) return;
	return true;
}

function checkEmail() {
	let validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9]+)+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.value.match(validRegex)) return true;
	return false;
}

function checkPassword() {
	if (pass.value !== confpass.value) return false;
	return true;
}
