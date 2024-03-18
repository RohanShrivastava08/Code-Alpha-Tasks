document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateAge();
});

function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var currentDate = new Date(document.getElementById('currentdate').value);

    var age = currentDate.getFullYear() - birthdate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }

    var month = Math.abs(currentDate.getMonth() - birthdate.getMonth());
    var day = Math.abs(currentDate.getDate() - birthdate.getDate());

    document.getElementById('result').innerHTML = `Age: ${age} years, ${month} months, ${day} days`;
}
