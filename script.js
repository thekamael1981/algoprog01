// Application State Management
class AppState {
    constructor() {
        this.currentGrade = 10;
        this.currentDifficulty = null;
        this.currentMaterial = null;
        this.currentSection = 'apersepsi';
        this.currentView = 'grade';
        this.quizState = {
            questions: [],
            currentQuestion: 0,
            answers: [],
            score: 0,
            isFinished: false
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateGradeView();
    }
    
    bindEvents() {
        // Navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const grade = parseInt(e.target.dataset.grade);
                this.setGrade(grade);
            });
        });
        
        // Difficulty cards
        document.addEventListener('click', (e) => {
            if (e.target.closest('.difficulty-card')) {
                const difficulty = e.target.closest('.difficulty-card').dataset.difficulty;
                this.setDifficulty(difficulty);
            }
        });
        
        // Material items
        document.addEventListener('click', (e) => {
            if (e.target.closest('.material-item')) {
                const materialId = e.target.closest('.material-item').dataset.material;
                this.setMaterial(materialId);
            }
        });
        
        // Learning tabs
        document.querySelectorAll('.learning-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.setSection(section);
            });
        });
        
        // Back button
        document.getElementById('back-to-materials').addEventListener('click', () => {
            this.showMaterialList();
        });
        
        // Breadcrumb navigation
        document.getElementById('breadcrumb-home').addEventListener('click', () => {
            this.showGradeView();
        });
        
        // Quiz controls
        document.addEventListener('click', (e) => {
            if (e.target.id === 'prev-question') {
                this.previousQuestion();
            }
            if (e.target.id === 'next-question') {
                this.nextQuestion();
            }
            if (e.target.id === 'finish-quiz') {
                this.finishQuiz();
            }
            if (e.target.id === 'retry-quiz') {
                this.retryQuiz();
            }
        });
        
        // Modal controls
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeModals();
            });
        });
        
        // Quiz answer selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.option')) {
                this.selectAnswer(e.target.closest('.option'));
            }
        });
        
        // Visualization demos
        document.addEventListener('click', (e) => {
            if (e.target.closest('.visualization-demo')) {
                const type = e.target.closest('.visualization-demo').dataset.viz;
                this.showVisualization(type);
            }
        });
        
        // Close modal on outside click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModals();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModals();
            }
        });
    }
    
    setGrade(grade) {
        this.currentGrade = grade;
        this.currentDifficulty = null;
        this.currentMaterial = null;
        
        // Update active tab
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
            if (parseInt(tab.dataset.grade) === grade) {
                tab.classList.add('active');
            }
        });
        
        this.updateGradeView();
        this.showGradeView();
    }
    
    setDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
        this.showMaterialList();
    }
    
    setMaterial(materialId) {
        this.currentMaterial = materialId;
        this.currentSection = 'apersepsi';
        this.showLearningContent();
    }
    
    setSection(section) {
        this.currentSection = section;
        this.updateLearningContent();
        
        // Update active tab
        document.querySelectorAll('.learning-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.section === section) {
                tab.classList.add('active');
            }
        });
    }
    
    showGradeView() {
        this.currentView = 'grade';
        this.showSection('grade-view');
    }
    
    showMaterialList() {
        this.currentView = 'material-list';
        this.showSection('material-list');
        this.updateMaterialList();
    }
    
    showLearningContent() {
        this.currentView = 'learning-content';
        this.showSection('learning-content');
        this.updateLearningContent();
    }
    
    showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }
    
    updateGradeView() {
        const gradeTitle = document.getElementById('grade-title');
        const gradeRoman = ['X', 'XI', 'XII'][this.currentGrade - 10];
        gradeTitle.textContent = `Kelas ${gradeRoman} - Algoritma & Pemrograman`;
        
        // Update card statistics
        const gradeData = LearningData.grades[this.currentGrade];
        document.querySelectorAll('.difficulty-card').forEach(card => {
            const difficulty = card.dataset.difficulty;
            const data = gradeData[difficulty];
            
            const lessonCount = card.querySelector('.lesson-count');
            const quizCount = card.querySelector('.quiz-count');
            
            lessonCount.textContent = `${data.materials.length} Materi`;
            
            let totalQuestions = 0;
            data.materials.forEach(material => {
                totalQuestions += material.quiz.questions.length;
            });
            quizCount.textContent = `${totalQuestions} Soal`;
        });
    }
    
    updateMaterialList() {
        const gradeData = LearningData.grades[this.currentGrade];
        const difficultyData = gradeData[this.currentDifficulty];
        
        // Update breadcrumb
        const gradeRoman = ['X', 'XI', 'XII'][this.currentGrade - 10];
        document.getElementById('breadcrumb-grade').textContent = `Kelas ${gradeRoman}`;
        
        const difficultyNames = {
            dasar: 'Materi Dasar',
            menengah: 'Materi Menengah',
            lanjut: 'Materi Lanjut'
        };
        document.getElementById('breadcrumb-difficulty').textContent = difficultyNames[this.currentDifficulty];
        
        // Update title
        document.getElementById('material-title').textContent = 
            `${difficultyNames[this.currentDifficulty]} - Kelas ${gradeRoman}`;
        
        // Update material grid
        const materialGrid = document.getElementById('material-grid');
        materialGrid.innerHTML = '';
        
        difficultyData.materials.forEach((material, index) => {
            const materialItem = document.createElement('div');
            materialItem.className = 'material-item';
            materialItem.dataset.material = index;
            
            materialItem.innerHTML = `
                <h3>${material.title}</h3>
                <p>${material.description}</p>
            `;
            
            materialGrid.appendChild(materialItem);
        });
    }
    
    updateLearningContent() {
        const gradeData = LearningData.grades[this.currentGrade];
        const material = gradeData[this.currentDifficulty].materials[this.currentMaterial];
        
        // Update title
        document.getElementById('content-title').textContent = material.title;
        
        // Show content based on section
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        if (this.currentSection === 'quiz') {
            this.initQuiz();
        } else {
            const contentDiv = document.getElementById(`${this.currentSection}-content`);
            contentDiv.classList.add('active');
            this.renderContent(contentDiv, material[this.currentSection]);
        }
    }
    
    renderContent(container, content) {
        container.innerHTML = '';
        
        if (typeof content === 'string') {
            container.innerHTML = content;
        } else if (Array.isArray(content)) {
            content.forEach(item => {
                if (typeof item === 'string') {
                    const p = document.createElement('p');
                    p.innerHTML = item;
                    container.appendChild(p);
                } else if (item.type === 'visualization') {
                    this.createVisualization(container, item);
                }
            });
        } else if (content.type) {
            this.createSpecialContent(container, content);
        }
    }
    
    createVisualization(container, vizData) {
        const vizDiv = document.createElement('div');
        vizDiv.className = 'visualization-demo';
        vizDiv.dataset.viz = vizData.vizType;
        
        vizDiv.innerHTML = `
            <i class="${vizData.icon}"></i>
            <h4>${vizData.title}</h4>
            <p>${vizData.description}</p>
            <small>Klik untuk melihat visualisasi</small>
        `;
        
        container.appendChild(vizDiv);
    }
    
    showVisualization(type) {
        const modal = document.getElementById('visualization-modal');
        const container = document.getElementById('visualization-container');
        
        container.innerHTML = this.generateVisualization(type);
        modal.classList.add('active');
    }
    
    generateVisualization(type) {
        switch (type) {
            case 'flowchart':
                return `
                    <div class="algorithm-visualization">
                        <h3>Flowchart Algoritma Sederhana</h3>
                        <div class="flowchart">
                            <div class="flowchart-node start">
                                <span>Mulai</span>
                            </div>
                            <div class="flowchart-arrow">⬇</div>
                            <div class="flowchart-node">
                                <span>Input Data</span>
                            </div>
                            <div class="flowchart-arrow">⬇</div>
                            <div class="flowchart-node decision">
                                <span>Kondisi?</span>
                            </div>
                            <div class="flowchart-arrow">⬇</div>
                            <div class="flowchart-node">
                                <span>Proses</span>
                            </div>
                            <div class="flowchart-arrow">⬇</div>
                            <div class="flowchart-node">
                                <span>Output</span>
                            </div>
                            <div class="flowchart-arrow">⬇</div>
                            <div class="flowchart-node end">
                                <span>Selesai</span>
                            </div>
                        </div>
                    </div>
                `;
            
            case 'bubble-sort':
                return `
                    <div class="algorithm-visualization">
                        <h3>Simulasi Bubble Sort</h3>
                        <div class="sorting-visualization" id="bubble-sort-viz">
                            <div class="sort-bar" style="height: 40px;">4</div>
                            <div class="sort-bar" style="height: 20px;">2</div>
                            <div class="sort-bar" style="height: 60px;">6</div>
                            <div class="sort-bar" style="height: 30px;">3</div>
                            <div class="sort-bar" style="height: 50px;">5</div>
                            <div class="sort-bar" style="height: 10px;">1</div>
                        </div>
                        <div class="visualization-controls">
                            <button class="viz-btn play" onclick="app.startBubbleSort()">
                                <i class="fas fa-play"></i> Mulai
                            </button>
                            <button class="viz-btn reset" onclick="app.resetBubbleSort()">
                                <i class="fas fa-redo"></i> Reset
                            </button>
                        </div>
                        <div style="margin-top: 1rem; text-align: center; color: #666;">
                            <p>Bubble Sort membandingkan elemen bersebelahan dan menukarnya jika urutannya salah.</p>
                        </div>
                    </div>
                `;
            
            case 'if-else':
                return `
                    <div class="algorithm-visualization">
                        <h3>Struktur Kontrol IF-ELSE</h3>
                        <div style="background: #f7fafc; padding: 2rem; border-radius: 10px; font-family: monospace;">
                            <div style="margin: 1rem 0;">
                                <strong>if</strong> (kondisi) {
                                <div style="margin-left: 2rem; color: #48bb78;">
                                    // Blok kode jika kondisi benar
                                </div>
                                } <strong>else</strong> {
                                <div style="margin-left: 2rem; color: #e53e3e;">
                                    // Blok kode jika kondisi salah
                                </div>
                                }
                            </div>
                        </div>
                        <div style="margin-top: 1rem;">
                            <h4>Contoh Implementasi:</h4>
                            <div style="background: #2d3748; color: white; padding: 1.5rem; border-radius: 8px; font-family: monospace; margin-top: 1rem;">
                                <div>int nilai = 85;</div>
                                <div><span style="color: #ed8936;">if</span> (nilai >= 75) {</div>
                                <div style="margin-left: 2rem; color: #48bb78;">cout << "Lulus";</div>
                                <div>} <span style="color: #ed8936;">else</span> {</div>
                                <div style="margin-left: 2rem; color: #e53e3e;">cout << "Tidak Lulus";</div>
                                <div>}</div>
                            </div>
                        </div>
                    </div>
                `;
            
            case 'for-loop':
                return `
                    <div class="algorithm-visualization">
                        <h3>Perulangan FOR</h3>
                        <div class="loop-demo" id="for-loop-demo">
                            <div style="background: #f7fafc; padding: 2rem; border-radius: 10px; margin-bottom: 1rem;">
                                <div style="font-family: monospace; font-size: 1.1rem;">
                                    <strong>for</strong> (int i = 1; i <= 5; i++) {
                                    <div style="margin-left: 2rem;">
                                        cout << "Iterasi ke-" << i << endl;
                                    </div>
                                    }
                                </div>
                            </div>
                            <div class="loop-output" style="background: white; padding: 1rem; border-radius: 8px; border: 2px solid #e2e8f0;">
                                <h4>Output:</h4>
                                <div id="loop-output-content" style="font-family: monospace; color: #2d3748;">
                                    <div class="loop-line">Iterasi ke-1</div>
                                    <div class="loop-line">Iterasi ke-2</div>
                                    <div class="loop-line">Iterasi ke-3</div>
                                    <div class="loop-line">Iterasi ke-4</div>
                                    <div class="loop-line">Iterasi ke-5</div>
                                </div>
                            </div>
                        </div>
                        <div class="visualization-controls">
                            <button class="viz-btn play" onclick="app.animateForLoop()">
                                <i class="fas fa-play"></i> Jalankan
                            </button>
                            <button class="viz-btn reset" onclick="app.resetForLoop()">
                                <i class="fas fa-redo"></i> Reset
                            </button>
                        </div>
                    </div>
                `;
            
            default:
                return '<p>Visualisasi tidak ditemukan.</p>';
        }
    }
    
    // Quiz Management
    initQuiz() {
        const gradeData = LearningData.grades[this.currentGrade];
        const material = gradeData[this.currentDifficulty].materials[this.currentMaterial];
        
        this.quizState = {
            questions: this.shuffleQuestions([...material.quiz.questions]),
            currentQuestion: 0,
            answers: [],
            score: 0,
            isFinished: false
        };
        
        document.getElementById('quiz-content').classList.add('active');
        this.renderQuiz();
    }
    
    shuffleQuestions(questions) {
        // Shuffle questions
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        
        // Shuffle options for each question
        return questions.map(question => ({
            ...question,
            options: this.shuffleOptions(question.options, question.correct)
        }));
    }
    
    shuffleOptions(options, correctAnswer) {
        const shuffled = [...options];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    renderQuiz() {
        const quizContainer = document.getElementById('quiz-content');
        const { questions, currentQuestion, answers, isFinished } = this.quizState;
        
        if (isFinished) {
            this.showResults();
            return;
        }
        
        const question = questions[currentQuestion];
        const letters = ['A', 'B', 'C', 'D', 'E'];
        
        quizContainer.innerHTML = `
            <div class="quiz-container">
                <div class="question-counter">
                    Soal ${currentQuestion + 1} dari ${questions.length}
                </div>
                
                <div class="question">
                    <h4>${question.question}</h4>
                    <div class="options">
                        ${question.options.map((option, index) => `
                            <div class="option" data-option="${index}">
                                <div class="option-letter">${letters[index]}</div>
                                <span>${option}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="quiz-controls">
                    <div class="quiz-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(currentQuestion / questions.length) * 100}%"></div>
                        </div>
                        <span class="progress-text">${currentQuestion}/${questions.length}</span>
                    </div>
                    
                    <div>
                        <button class="quiz-btn" id="prev-question" ${currentQuestion === 0 ? 'disabled' : ''}>
                            <i class="fas fa-chevron-left"></i> Sebelumnya
                        </button>
                        ${currentQuestion === questions.length - 1 ? 
                            '<button class="quiz-btn finish" id="finish-quiz" disabled><i class="fas fa-flag-checkered"></i> Selesai</button>' :
                            '<button class="quiz-btn" id="next-question" disabled><i class="fas fa-chevron-right"></i> Selanjutnya</button>'
                        }
                    </div>
                </div>
            </div>
        `;
        
        // Restore previous answer if exists
        if (answers[currentQuestion] !== undefined) {
            const options = document.querySelectorAll('.option');
            options[answers[currentQuestion]].classList.add('selected');
            document.getElementById(currentQuestion === questions.length - 1 ? 'finish-quiz' : 'next-question').disabled = false;
        }
    }
    
    selectAnswer(optionElement) {
        const { currentQuestion } = this.quizState;
        const optionIndex = parseInt(optionElement.dataset.option);
        
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Select new option
        optionElement.classList.add('selected');
        
        // Store answer
        this.quizState.answers[currentQuestion] = optionIndex;
        
        // Enable next button
        const nextBtn = document.getElementById(currentQuestion === this.quizState.questions.length - 1 ? 'finish-quiz' : 'next-question');
        nextBtn.disabled = false;
    }
    
    previousQuestion() {
        if (this.quizState.currentQuestion > 0) {
            this.quizState.currentQuestion--;
            this.renderQuiz();
        }
    }
    
    nextQuestion() {
        if (this.quizState.currentQuestion < this.quizState.questions.length - 1) {
            this.quizState.currentQuestion++;
            this.renderQuiz();
        }
    }
    
    finishQuiz() {
        // Calculate score
        let correctCount = 0;
        this.quizState.questions.forEach((question, index) => {
            const selectedOption = this.quizState.answers[index];
            const selectedText = question.options[selectedOption];
            if (selectedText === question.correct) {
                correctCount++;
            }
        });
        
        this.quizState.score = correctCount;
        this.quizState.isFinished = true;
        
        this.showResults();
    }
    
    showResults() {
        const { score, questions } = this.quizState;
        const percentage = Math.round((score / questions.length) * 100);
        
        // Update results modal
        document.getElementById('score-percentage').textContent = percentage;
        document.getElementById('score-points').textContent = score;
        document.getElementById('total-questions').textContent = questions.length;
        document.getElementById('correct-count').textContent = score;
        document.getElementById('incorrect-count').textContent = questions.length - score;
        
        // Update score circle
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.setProperty('--score-angle', `${(percentage / 100) * 360}deg`);
        
        // Determine category
        let category = 'Kurang';
        if (percentage >= 90) category = 'Sangat Baik';
        else if (percentage >= 80) category = 'Baik';
        else if (percentage >= 70) category = 'Cukup';
        
        document.getElementById('score-category').textContent = category;
        
        // Show modal
        document.getElementById('results-modal').classList.add('active');
    }
    
    retryQuiz() {
        this.closeModals();
        this.initQuiz();
    }
    
    closeModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    // Animation functions for visualizations
    startBubbleSort() {
        const bars = document.querySelectorAll('#bubble-sort-viz .sort-bar');
        let delays = 0;
        
        // Reset all bars
        bars.forEach(bar => {
            bar.classList.remove('comparing', 'swapping', 'sorted');
        });
        
        const values = Array.from(bars).map(bar => parseInt(bar.textContent));
        const n = values.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                setTimeout(() => {
                    // Highlight comparing elements
                    bars[j].classList.add('comparing');
                    bars[j + 1].classList.add('comparing');
                    
                    setTimeout(() => {
                        bars[j].classList.remove('comparing');
                        bars[j + 1].classList.remove('comparing');
                        
                        if (values[j] > values[j + 1]) {
                            // Swap animation
                            bars[j].classList.add('swapping');
                            bars[j + 1].classList.add('swapping');
                            
                            // Swap values
                            [values[j], values[j + 1]] = [values[j + 1], values[j]];
                            
                            setTimeout(() => {
                                // Update display
                                bars[j].textContent = values[j];
                                bars[j].style.height = `${values[j] * 10}px`;
                                bars[j + 1].textContent = values[j + 1];
                                bars[j + 1].style.height = `${values[j + 1] * 10}px`;
                                
                                bars[j].classList.remove('swapping');
                                bars[j + 1].classList.remove('swapping');
                            }, 300);
                        }
                    }, 500);
                }, delays * 800);
                
                delays++;
            }
            
            // Mark as sorted
            setTimeout(() => {
                bars[n - 1 - i].classList.add('sorted');
            }, delays * 800);
        }
        
        // Mark first element as sorted
        setTimeout(() => {
            bars[0].classList.add('sorted');
        }, (delays + 1) * 800);
    }
    
    resetBubbleSort() {
        const bars = document.querySelectorAll('#bubble-sort-viz .sort-bar');
        const originalValues = [4, 2, 6, 3, 5, 1];
        
        bars.forEach((bar, index) => {
            bar.classList.remove('comparing', 'swapping', 'sorted');
            bar.textContent = originalValues[index];
            bar.style.height = `${originalValues[index] * 10}px`;
        });
    }
    
    animateForLoop() {
        const lines = document.querySelectorAll('.loop-line');
        lines.forEach((line, index) => {
            line.style.opacity = '0.3';
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.background = '#48bb78';
                line.style.color = 'white';
                line.style.padding = '0.25rem';
                line.style.borderRadius = '4px';
                line.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    line.style.background = 'transparent';
                    line.style.color = '#2d3748';
                }, 500);
            }, index * 600);
        });
    }
    
    resetForLoop() {
        const lines = document.querySelectorAll('.loop-line');
        lines.forEach(line => {
            line.style.opacity = '0.3';
            line.style.background = 'transparent';
            line.style.color = '#2d3748';
        });
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppState();
});
