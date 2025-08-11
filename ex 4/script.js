function addSubject() {
  const container = document.getElementById('subjectContainer');
  const div = document.createElement('div');
  div.className = 'subject';
  div.innerHTML = `
    <input type="number" step="0.01" placeholder="Grade Point" class="grade" required>
    <input type="number" placeholder="Credit" class="credit" required>
  `;
  container.appendChild(div);
}

document.getElementById('cgpaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const grades = document.querySelectorAll('.grade');
  const credits = document.querySelectorAll('.credit');

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    const grade = parseFloat(grades[i].value);
    const credit = parseFloat(credits[i].value);

    if (isNaN(grade) || isNaN(credit)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    totalPoints += grade * credit;
    totalCredits += credit;
  }

  if (totalCredits === 0) {
    document.getElementById('result').innerText = 'Total credits cannot be zero.';
    return;
  }

  const cgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
});
