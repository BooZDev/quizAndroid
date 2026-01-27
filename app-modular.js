// ===== KOTLIN BASICS QUIZ - MAIN APPLICATION =====

class KotlinQuiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.userAnswers = [];
        this.timer = null;
        this.elapsedSeconds = 0;
        this.hintsUsed = 0;
        this.isAnswered = false;

        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.reviewScreen = document.getElementById('review-screen');

        // Start screen elements
        this.questionCountSelect = document.getElementById('question-count');
        this.questionTypeSelect = document.getElementById('question-type');
        this.topicFilterSelect = document.getElementById('topic-filter');
        this.startBtn = document.getElementById('start-btn');

        // Quiz screen elements
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.timerText = document.getElementById('timer-text');
        this.currentScoreEl = document.getElementById('current-score');
        this.questionCard = document.getElementById('question-card');
        this.questionTypeBadge = document.getElementById('question-type-badge');
        this.questionTopicBadge = document.getElementById('question-topic-badge');
        this.questionDifficulty = document.getElementById('question-difficulty');
        this.questionContent = document.getElementById('question-content');
        this.codeBlock = document.getElementById('code-block');
        this.codeContent = document.getElementById('code-content');
        this.answersContainer = document.getElementById('answers-container');
        this.fillBlankContainer = document.getElementById('fill-blank-container');
        this.fillBlankInput = document.getElementById('fill-blank-input');
        this.feedback = document.getElementById('feedback');
        this.feedbackIcon = document.getElementById('feedback-icon');
        this.feedbackText = document.getElementById('feedback-text');
        this.explanationEl = document.getElementById('explanation');
        this.checkBtn = document.getElementById('check-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.hintBtn = document.getElementById('hint-btn');

        // Result screen elements
        this.resultIcon = document.getElementById('result-icon');
        this.resultTitle = document.getElementById('result-title');
        this.finalScore = document.getElementById('final-score');
        this.correctCountEl = document.getElementById('correct-count');
        this.totalTime = document.getElementById('total-time');
        this.accuracy = document.getElementById('accuracy');
        this.topicBreakdown = document.getElementById('topic-breakdown');
        this.reviewBtn = document.getElementById('review-btn');
        this.retryBtn = document.getElementById('retry-btn');
        this.homeBtn = document.getElementById('home-btn');

        // Review screen elements
        this.backToResultBtn = document.getElementById('back-to-result');
        this.reviewContainer = document.getElementById('review-container');
    }

    initEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.checkBtn.addEventListener('click', () => this.checkAnswer());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.hintBtn.addEventListener('click', () => this.showHint());
        this.reviewBtn.addEventListener('click', () => this.showReview());
        this.retryBtn.addEventListener('click', () => this.startQuiz());
        this.homeBtn.addEventListener('click', () => this.goHome());
        this.backToResultBtn.addEventListener('click', () => this.backToResult());

        // Enter key for fill-blank questions
        this.fillBlankInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !this.isAnswered) {
                this.checkAnswer();
            }
        });
    }

    showScreen(screenName) {
        [this.startScreen, this.quizScreen, this.resultScreen, this.reviewScreen].forEach(screen => {
            screen.classList.remove('active');
        });

        switch (screenName) {
            case 'start':
                this.startScreen.classList.add('active');
                break;
            case 'quiz':
                this.quizScreen.classList.add('active');
                break;
            case 'result':
                this.resultScreen.classList.add('active');
                break;
            case 'review':
                this.reviewScreen.classList.add('active');
                break;
        }
    }

    startQuiz() {
        // Reset state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.userAnswers = [];
        this.elapsedSeconds = 0;
        this.hintsUsed = 0;

        // Filter questions based on settings
        this.filterQuestions();

        // Shuffle questions
        this.shuffleArray(this.questions);

        // Limit question count
        const countSetting = this.questionCountSelect.value;
        if (countSetting !== 'all') {
            this.questions = this.questions.slice(0, parseInt(countSetting));
        }

        // Start timer
        this.startTimer();

        // Show quiz screen
        this.showScreen('quiz');
        this.showQuestion();
    }

    filterQuestions() {
        let filtered = [...questions];

        // Filter by type
        const typeSetting = this.questionTypeSelect.value;
        if (typeSetting !== 'all') {
            filtered = filtered.filter(q => q.type === typeSetting);
        }

        // Filter by topic
        const topicSetting = this.topicFilterSelect.value;
        if (topicSetting !== 'all') {
            filtered = filtered.filter(q => q.topic === topicSetting);
        }

        this.questions = filtered;

        // Ensure we have at least some questions
        if (this.questions.length === 0) {
            this.questions = [...questions];
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.elapsedSeconds++;
            this.updateTimerDisplay();
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.elapsedSeconds / 60);
        const seconds = this.elapsedSeconds % 60;
        this.timerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.isAnswered = false;
        this.selectedAnswer = null;

        // Update progress
        this.updateProgress();

        // Reset UI
        this.feedback.style.display = 'none';
        this.checkBtn.style.display = 'inline-flex';
        this.nextBtn.style.display = 'none';
        this.hintBtn.disabled = false;
        this.fillBlankInput.value = '';
        this.fillBlankInput.className = 'fill-blank-input';

        // Set question metadata
        this.questionTypeBadge.textContent = this.getTypeLabel(question.type);
        this.questionTopicBadge.textContent = this.getTopicLabel(question.topic);
        this.questionDifficulty.textContent = '⭐'.repeat(question.difficulty);

        // Set question content
        this.questionContent.innerHTML = question.question;

        // Show/hide code block
        if (question.code || question.codeWithBlank) {
            this.codeBlock.style.display = 'block';
            this.codeContent.innerHTML = this.highlightCode(question.codeWithBlank || question.code);
        } else {
            this.codeBlock.style.display = 'none';
        }

        // Render answer options based on question type
        this.renderAnswerOptions(question);
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.progressText.textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;
        this.currentScoreEl.textContent = this.score;
    }

    getTypeLabel(type) {
        const labels = {
            'multiple-choice': 'Trắc nghiệm',
            'fill-blank': 'Điền vào chỗ trống',
            'code-completion': 'Hoàn thành code',
            'error-detection': 'Phát hiện lỗi',
            'output-prediction': 'Dự đoán output'
        };
        return labels[type] || type;
    }

    getTopicLabel(topic) {
        const labels = {
            'operators': 'Operators',
            'data-types': 'Data Types',
            'variables': 'Variables',
            'conditionals': 'Conditionals',
            'lists-arrays': 'Lists & Arrays',
            'null-safety': 'Null Safety'
        };
        return labels[topic] || topic;
    }

    highlightCode(code) {
        if (!code) return '';

        // Simple syntax highlighting
        let highlighted = code
            // Strings FIRST
            .replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '<span class="string">$&</span>')
            // Comments (tương đối an toàn)
            .replace(/(^|\s)(\/\/.*)/gm, '$1<span class="comment">$2</span>')
            // Keywords
            .replace(/\b(val|var|fun|if|else|when|for|while|do|return|in|is|as|class|object|interface|this|super|import|package)\b/g, '<span class="keyword">$1</span>')
            // Types
            .replace(/\b(Int|String|Double|Float|Long|Short|Byte|Boolean|Char|Array|List|MutableList|Any|Unit)\b/g, '<span class="type">$1</span>')
            // Numbers
            .replace(/\b(\d+\.?\d*[fFL]?)\b/g, '<span class="number">$1</span>')
            // Functions
            .replace(/\b(println|print|listOf|arrayOf|mutableListOf|intArrayOf|repeat)\b/g, '<span class="function">$1</span>');


        return highlighted;
    }

    renderAnswerOptions(question) {
        this.answersContainer.innerHTML = '';
        this.fillBlankContainer.style.display = 'none';

        if (question.type === 'fill-blank') {
            this.fillBlankContainer.style.display = 'block';
            this.fillBlankInput.focus();
        } else if (question.options) {
            const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
            question.options.forEach((option, index) => {
                const optionEl = document.createElement('div');
                optionEl.className = 'answer-option';
                optionEl.dataset.index = index;
                optionEl.innerHTML = `
                    <span class="answer-letter">${letters[index]}</span>
                    <span class="answer-text">${option}</span>
                `;
                optionEl.addEventListener('click', () => this.selectAnswer(index));
                this.answersContainer.appendChild(optionEl);
            });
        }
    }

    selectAnswer(index) {
        if (this.isAnswered) return;

        this.selectedAnswer = index;

        // Update visual selection
        document.querySelectorAll('.answer-option').forEach((el, i) => {
            el.classList.toggle('selected', i === index);
        });
    }

    checkAnswer() {
        const question = this.questions[this.currentQuestionIndex];
        let isCorrect = false;
        let userAnswer = null;

        if (question.type === 'fill-blank') {
            userAnswer = this.fillBlankInput.value.trim();
            isCorrect = question.answer.some(ans =>
                ans.toLowerCase() === userAnswer.toLowerCase()
            );

            this.fillBlankInput.className = `fill-blank-input ${isCorrect ? 'correct' : 'incorrect'}`;
        } else {
            if (this.selectedAnswer === null) {
                alert('Vui lòng chọn một đáp án!');
                return;
            }
            userAnswer = this.selectedAnswer;
            isCorrect = this.selectedAnswer === question.correct;

            // Show correct/incorrect styling
            document.querySelectorAll('.answer-option').forEach((el, i) => {
                el.classList.add('disabled');
                if (i === question.correct) {
                    el.classList.add('correct');
                } else if (i === this.selectedAnswer && !isCorrect) {
                    el.classList.add('incorrect');
                }
            });
        }

        // Update score
        if (isCorrect) {
            this.score += 10 - (this.hintsUsed * 2);
            this.correctCount++;
        }

        // Save user answer
        this.userAnswers.push({
            questionId: question.id,
            question: question,
            userAnswer: userAnswer,
            isCorrect: isCorrect
        });

        // Show feedback
        this.showFeedback(isCorrect, question.explanation);
        this.isAnswered = true;

        // Update UI
        this.checkBtn.style.display = 'none';
        this.nextBtn.style.display = 'inline-flex';
        this.hintBtn.disabled = true;
        this.hintsUsed = 0;
    }

    showFeedback(isCorrect, explanation) {
        this.feedback.style.display = 'block';
        this.feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedbackIcon.textContent = isCorrect ? '✓' : '✗';
        this.feedbackText.textContent = isCorrect ? 'Chính xác!' : 'Chưa đúng!';
        this.explanationEl.innerHTML = explanation;
    }

    showHint() {
        const question = this.questions[this.currentQuestionIndex];
        this.hintsUsed++;

        let hint = '';
        if (question.type === 'fill-blank') {
            const answer = question.answer[0];
            const revealed = answer.substring(0, Math.min(this.hintsUsed, answer.length));
            hint = `Gợi ý: ${revealed}${'_'.repeat(Math.max(0, answer.length - revealed.length))}`;
        } else if (question.options) {
            // Eliminate one wrong answer
            const wrongOptions = question.options
                .map((_, i) => i)
                .filter(i => i !== question.correct);

            if (wrongOptions.length > 0) {
                const toEliminate = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
                const el = document.querySelector(`.answer-option[data-index="${toEliminate}"]`);
                if (el && !el.classList.contains('eliminated')) {
                    el.style.opacity = '0.3';
                    el.style.pointerEvents = 'none';
                    el.classList.add('eliminated');
                    hint = 'Đã loại bỏ một đáp án sai!';
                }
            }
        }

        if (hint) {
            alert(hint);
        }

        if (this.hintsUsed >= 2) {
            this.hintBtn.disabled = true;
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length) {
            this.endQuiz();
        } else {
            this.showQuestion();
        }
    }

    endQuiz() {
        this.stopTimer();
        this.showScreen('result');
        this.showResults();
    }

    showResults() {
        const totalQuestions = this.questions.length;
        const accuracyPercent = Math.round((this.correctCount / totalQuestions) * 100);

        // Set result icon and title based on performance
        if (accuracyPercent >= 80) {
            this.resultIcon.textContent = '🏆';
            this.resultTitle.textContent = 'Xuất sắc!';
        } else if (accuracyPercent >= 60) {
            this.resultIcon.textContent = '👍';
            this.resultTitle.textContent = 'Tốt lắm!';
        } else if (accuracyPercent >= 40) {
            this.resultIcon.textContent = '💪';
            this.resultTitle.textContent = 'Cần cố gắng thêm!';
        } else {
            this.resultIcon.textContent = '📚';
            this.resultTitle.textContent = 'Hãy ôn tập lại!';
        }

        // Update stats
        this.finalScore.textContent = this.score;
        this.correctCountEl.textContent = `${this.correctCount}/${totalQuestions}`;
        this.totalTime.textContent = this.timerText.textContent;
        this.accuracy.textContent = `${accuracyPercent}%`;

        // Topic breakdown
        this.renderTopicBreakdown();
    }

    renderTopicBreakdown() {
        const topicStats = {};

        this.userAnswers.forEach(answer => {
            const topic = answer.question.topic;
            if (!topicStats[topic]) {
                topicStats[topic] = { correct: 0, total: 0 };
            }
            topicStats[topic].total++;
            if (answer.isCorrect) {
                topicStats[topic].correct++;
            }
        });

        this.topicBreakdown.innerHTML = '';
        Object.entries(topicStats).forEach(([topic, stats]) => {
            const percent = Math.round((stats.correct / stats.total) * 100);
            const fillClass = percent >= 70 ? 'good' : percent >= 40 ? 'medium' : 'poor';

            const item = document.createElement('div');
            item.className = 'topic-item';
            item.innerHTML = `
                <span class="topic-name">${this.getTopicLabel(topic)}</span>
                <div class="topic-bar">
                    <div class="topic-fill ${fillClass}" style="width: ${percent}%"></div>
                </div>
                <span class="topic-score">${stats.correct}/${stats.total}</span>
            `;
            this.topicBreakdown.appendChild(item);
        });
    }

    showReview() {
        this.showScreen('review');
        this.renderReview();
    }

    renderReview() {
        this.reviewContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

        this.userAnswers.forEach((answer, index) => {
            const q = answer.question;
            const item = document.createElement('div');
            item.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

            let answersHtml = '';
            if (q.type === 'fill-blank') {
                answersHtml = `
                    <div class="review-answer user-answer ${answer.isCorrect ? 'correct-answer' : ''}">
                        Câu trả lời của bạn: <strong>${answer.userAnswer || '(không trả lời)'}</strong>
                    </div>
                    ${!answer.isCorrect ? `
                        <div class="review-answer correct-answer">
                            Đáp án đúng: <strong>${q.answer.join(' / ')}</strong>
                        </div>
                    ` : ''}
                `;
            } else if (q.options) {
                answersHtml = q.options.map((opt, i) => {
                    let classes = 'review-answer';
                    if (i === answer.userAnswer) classes += ' user-answer';
                    if (i === q.correct) classes += ' correct-answer';
                    return `
                        <div class="${classes}">
                            <span>${letters[i]}.</span> ${opt}
                            ${i === answer.userAnswer ? ' (Bạn chọn)' : ''}
                            ${i === q.correct ? ' ✓' : ''}
                        </div>
                    `;
                }).join('');
            }

            item.innerHTML = `
                <div class="review-item-header">
                    <span class="review-question-number">Câu ${index + 1}</span>
                    <span class="review-status ${answer.isCorrect ? 'correct' : 'incorrect'}">
                        ${answer.isCorrect ? '✓ Đúng' : '✗ Sai'}
                    </span>
                </div>
                <div class="review-question">${q.question}</div>
                ${q.code ? `<div class="code-block"><pre><code>${this.highlightCode(q.code)}</code></pre></div>` : ''}
                <div class="review-answers">${answersHtml}</div>
                <div class="review-explanation">
                    <h4>💡 Giải thích:</h4>
                    <p>${q.explanation}</p>
                </div>
            `;

            this.reviewContainer.appendChild(item);
        });
    }

    backToResult() {
        this.showScreen('result');
    }

    goHome() {
        this.stopTimer();
        this.showScreen('start');
    }
}

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new KotlinQuiz();
});
