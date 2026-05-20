const form = document.getElementById('contactForm');
const messageBox = document.getElementById('formMessage');

function showMessage(text, isError = false) {
  messageBox.textContent = text;
  messageBox.classList.toggle('error', isError);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.nome.value.trim();
  const email = form.email.value.trim();
  const subject = form.assunto.value.trim();
  const message = form.mensagem.value.trim();
  const invalidFields = [];

  if (!name) invalidFields.push('nome');
  if (!email || !validateEmail(email)) invalidFields.push('e-mail válido');
  if (!subject) invalidFields.push('assunto');
  if (!message) invalidFields.push('mensagem');

  if (invalidFields.length) {
    showMessage(`Preencha corretamente: ${invalidFields.join(', ')}.`, true);
    return;
  }

  showMessage('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
  form.reset();
});
