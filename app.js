const containerQR = document.getElementById('containerQR');
const formulario = document.getElementById('form');

const QR = new QRCode(containerQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(formulario.link.value);
});