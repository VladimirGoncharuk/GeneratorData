
window.onload = Install();
function Install(){
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#firstPatronymicOutput').innerText = initPerson.Patronymic;
    document.querySelector('#jobOutput').innerText = initPerson.job;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
};


document.querySelector('#Install').addEventListener('click',function () {
    Install();
});
document.querySelector('#throw').addEventListener('click',function () {
    document.querySelector('#firstNameOutput').innerText = '';
    document.querySelector('#surnameOutput').innerText = '';
    document.querySelector('#genderOutput').innerText = '';
    document.querySelector('#birthYearOutput').innerText = '';
    document.querySelector('#firstPatronymicOutput').innerText = '';
    document.querySelector('#jobOutput').innerText = '';
    document.querySelector('#birthMonthOutput').innerText = '';
});