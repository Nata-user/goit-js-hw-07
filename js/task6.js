const testInputRef = document.querySelector('#validation-input');
testInputRef.addEventListener('focus', onInputFocus);
testInputRef.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  const validLengthRef = Number(testInputRef.getAttribute('data-length'));
  const valueInputRef = event.target.value;
  return valueInputRef.length === validLengthRef ? testInputRef.classList.add('valid') : testInputRef.classList.add('invalid');
}
function onInputFocus() {
  testInputRef.classList.remove('valid', 'invalid');
}