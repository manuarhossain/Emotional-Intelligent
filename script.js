// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 1, 8, 11
    let group2Score = 0; // For questions 2, 4, 7
    let group3Score = 0; // For questions 6, 10, 12
    let group4Score = 0; // For questions 3, 13, 15
    let group5Score = 0; // For questions 5, 9, 14

    const group1Questions = [1, 8, 11];
    const group2Questions = [2, 4, 7];
    const group3Questions = [6, 10, 12];
    const group4Questions = [3, 13, 15];
    const group5Questions = [5, 9, 14];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 34) {
        comment = "You need to work on your emotional intelligence. You may find that you feel overwhelmed by your emotions, especially in stressful situations; or, you may avoid conflict because you think that you'll find it distressing. It's likely, too, that you find it hard to calm down after you've felt upset, and you may struggle to build strong working relationships. Don't worry – there are plenty of ways that you can build emotional intelligence, starting now.";
    } else if (totalScore <= 55) {
        comment = "Your emotional intelligence level is... OK. You probably have good relationships with some of your colleagues, but others may be more difficult to work with. The good news is that you have a great opportunity to improve your working relationships significantly. Read more below to boost your EI still further.";
    } else if (totalScore <= 75) {
        comment = "Great! You're an emotionally intelligent person. You have great relationships, and you probably find that people approach you for advice. However, when so many people admire your people skills, it's easy to lose sight of your own needs. Read our tips below to find out how you can continue to build your EI. Researchers have found that emotionally intelligent people often have great leadership potential.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "Emotional Intelligent skills is key to professional success and good interpersonal relationships.<br>";
    resultsDiv.innerHTML += "Always strive to improve your emotional intelligent skills to enhance your personal and professional growth.<br><br>";

    resultsDiv.innerHTML += `Self-Awareness: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Self-Regulation: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Motivation: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Empathy: ${group4Score} <br>`;
    resultsDiv.innerHTML += `Social Skills: ${group5Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score, group5Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

