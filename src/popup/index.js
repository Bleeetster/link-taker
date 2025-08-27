import { takeCurrentURL } from '../handlers/takeCurrentURL.js'

const buttonURL = document.getElementById('buttonURL');

document.addEventListener('DOMContentLoaded', async () => {
	buttonURL.addEventListener('click', takeCurrentURL);
	
})
