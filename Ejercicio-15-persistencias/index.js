const nombre = 'Tu nombre';
const apellido = 'Tu apellido';
const miObjeto = { nombre, apellido };

sessionStorage.setItem('miObjeto', JSON.stringify(miObjeto));
localStorage.setItem('miObjeto', JSON.stringify(miObjeto));

document.cookie = `miObjeto=${JSON.stringify(miObjeto)};expires=${new Date(Date.now() + 120000).toUTCString()}`;
