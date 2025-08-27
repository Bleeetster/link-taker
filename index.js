import { takeCurrentURL } from './src/handlers/takeCurrentURL.js'

const buttonURL = document.getElementById('buttonURL');

document.addEventListener('DOMContentLoaded', async () => {
	buttonURL.addEventListener('click', takeCurrentURL);
})
