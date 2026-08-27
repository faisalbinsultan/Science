// =====================================================
// مساعد العلوم - الصف الخامس الابتدائي
// app.js
// إعداد: فيصل الزامل
// =====================================================


// =====================================================
// محتوى الدروس
// =====================================================

const lessons = {

    classification: {
        title: "🔬 تصنيف المخلوقات الحية",
        icon: "🔬",

        content: `

        <div class="lesson-card">

            <div class="lesson-step">
                الدرس 1
            </div>

            <h2>🔬 تصنيف المخلوقات الحية</h2>

            <p>
                أكثر من مليونَي نوع من المخلوقات الحية تم التعرف عليها،
                ولذلك يحتاج العلماء إلى طريقة لتنظيمها ودراستها.
            </p>

        </div>


        <div class="lesson-card">

            <h3>🧠 ما علم التصنيف؟</h3>

            <p>
                <strong>التصنيف</strong> هو تقسيم المخلوقات الحية
                إلى مجموعات بحسب درجة التشابه في الشكل أو التركيب
                أو الوظائف بين أفراد كل مجموعة.
            </p>

            <div class="thinking-box">
                💡 الفكرة المهمة:
                كلما زاد التشابه بين المخلوقات،
                أمكن وضعها في مجموعة أكثر تحديدًا.
            </div>

        </div>


        <div class="lesson-card">

            <h3>🎯 لماذا يصنف العلماء المخلوقات؟</h3>

            <ul>
                <li>لتسهيل دراسة المخلوقات الحية.</li>
                <li>للتعرف عليها.</li>
                <li>لتسميتها.</li>
                <li>لوضعها في مجموعات منظمة.</li>
            </ul>

        </div>


        <div class="lesson-card">

            <h3>🪜 مستويات التصنيف</h3>

            <p>
                يصنف العلماء المخلوقات الحية في مستويات،
                من المجموعات الكبيرة إلى المجموعات الأصغر.
            </p>

            <div class="classification-levels">

                <div>1️⃣ المملكة</div>
                <div>2️⃣ الشعبة</div>
                <div>3️⃣ الطائفة</div>
                <div>4️⃣ الرتبة</div>
                <div>5️⃣ الفصيلة</div>
                <div>6️⃣ الجنس</div>
                <div>7️⃣ النوع</div>

            </div>

            <div class="thinking-box">
                ⭐ تذكر:
                <br>
                المملكة تضم عددًا أكبر من المخلوقات،
                بينما النوع هو أصغر مستوى ويضم مخلوقات متقاربة جدًا.
            </div>

        </div>


        <div class="lesson-card">

            <h3>🐎 مثال الحصان</h3>

            <p>
                الحصان والحمار الوحشي يشتركان في صفات كثيرة،
                ولكنهما ليسا من النوع نفسه.
            </p>

            <p>
                أما الحصان والحصان القزم فهما متشابهان بدرجة
                تسمح بوضعهما في النوع نفسه.
            </p>

        </div>


        <div class="lesson-card">

            <h3>🔎 الاسم العلمي</h3>

            <p>
                يتألف الاسم العلمي للمخلوق الحي من مقطعين:
            </p>

            <div class="name-science">
                <strong>الجنس + النوع</strong>
            </div>

            <p>
                ويستخدم العلماء هذين المستويين لتحديد المخلوق
                بصورة أكثر دقة.
            </p>

        </div>


        <div class="lesson-card">

            <h3>🌍 الممالك الست</h3>

            <p>
                تصنف المخلوقات الحية في ست ممالك رئيسة:
            </p>

            <div class="kingdom-grid">

                <div>🦠 البدائيات</div>
                <div>🦠 البكتيريا</div>
                <div>🧫 الطلائعيات</div>
                <div>🍄 الفطريات</div>
                <div>🌿 النباتات</div>
                <div>🐾 الحيوانات</div>

            </div>

        </div>


        <div class="lesson-card">

            <h3>🐾 الحصان أم العنكبوت أم الكلب؟</h3>

            <p>
                الحصان والعنكبوت والكلب جميعها تنتمي إلى
                المملكة الحيوانية، لكن الحصان والكلب يشتركان
                في مستويات تصنيف أكثر تحديدًا من الحصان والعنكبوت.
            </p>

            <div class="thinking-box">
                🧠 لذلك:
                كلما اشترك مخلوقان في مستويات تصنيف أكثر،
                كانا أكثر تقاربًا في التصنيف.
            </div>

        </div>


        <div class="lesson-card challenge-card">

            <h3>🔥 تحدي سريع</h3>

            <p>
                مخلوق حي عديد الخلايا، له جدار خلوي،
                لكنه لا يحتوي على بلاستيدات خضراء.
            </p>

            <p>
                لا تتسرع في الإجابة...
                قارن صفاته بالممالك المختلفة.
            </p>

        </div>

        `
    },


    plants: {
        title: "🌿 النباتات",
        icon: "🌿",

        content: `
            <div class="lesson-card">

                <h2>🌿 النباتات</h2>

                <p>
                    في هذا الدرس نتعرف على أهم التراكيب الموجودة
                    في النباتات ووظائفها.
                </p>

                <div class="thinking-box">
                    🚧 سيتم بناء هذا الدرس بالتفصيل من محتوى المنهج
                    في المرحلة التالية.
                </div>

            </div>
        `
    },


    reproduction: {
        title: "🧬 التكاثر",
        icon: "🧬",

        content: `
            <div class="lesson-card">

                <h2>🧬 التكاثر</h2>

                <p>
                    درس التكاثر يوضح كيف تنتج المخلوقات الحية
                    أفرادًا جديدة.
                </p>

                <div class="thinking-box">
                    🚧 سيتم بناء محتوى الدرس بالتفصيل لاحقًا.
                </div>

            </div>
        `
    },


    "life-cycles": {
        title: "🔄 دورات الحياة",
        icon: "🔄",

        content: `
            <div class="lesson-card">

                <h2>🔄 دورات الحياة</h2>

                <p>
                    سنتعرف على مراحل حياة المخلوقات الحية
                    وكيف تختلف دورة الحياة من مخلوق إلى آخر.
                </p>

                <div class="thinking-box">
                    🚧 سيتم بناء محتوى الدرس بالتفصيل لاحقًا.
                </div>

            </div>
        `
    },


    ecosystems: {
        title: "🌳 التفاعلات في الأنظمة البيئية",
        icon: "🌳",

        content: `
            <div class="lesson-card">

                <h2>🌳 التفاعلات في الأنظمة البيئية</h2>

                <p>
                    سنتعرف على العلاقات والتفاعلات التي تحدث
                    بين المخلوقات الحية وبيئاتها.
                </p>

                <div class="thinking-box">
                    🚧 سيتم بناء محتوى الدرس بالتفصيل لاحقًا.
                </div>

            </div>
        `
    },


    adaptation: {
        title: "🦎 التكيف والبقاء",
        icon: "🦎",

        content: `
            <div class="lesson-card">

                <h2>🦎 التكيف والبقاء</h2>

                <p>
                    سنتعرف على الصفات التي تساعد المخلوقات
                    على البقاء في بيئاتها.
                </p>

                <div class="thinking-box">
                    🚧 سيتم بناء محتوى الدرس بالتفصيل لاحقًا.
                </div>

            </div>
        `
    },


    cycles: {
        title: "♻️ الدورات في الأنظمة البيئية",
        icon: "♻️",

        content: `
            <div class="lesson-card">

                <h2>♻️ الدورات في الأنظمة البيئية</h2>

                <p>
                    سنتعرف على انتقال المواد ودوراتها في الأنظمة البيئية.
                </p>

                <div class="thinking-box">
                    🚧 سيتم بناء محتوى الدرس بالتفصيل لاحقًا.
                </div>

            </div>
        `
    },


    "environment-change": {
        title: "🌦️ التغيرات في الأنظمة البيئية",
        icon: "🌦️",

        content: `
            <div class="lesson-card">

                <h2>🌦️ التغيرات في الأنظمة البيئية</h2>

                <p>
                    سنتعرف على التغيرات التي تحدث في الأنظمة البيئية
                    وأسبابها وتأثيراتها.
                </p>

            </div>
        `
    },


    "earth-surface": {
        title: "🏔️ معالم سطح الأرض",
        icon: "🏔️",

        content: `
            <div class="lesson-card">

                <h2>🏔️ معالم سطح الأرض</h2>

                <p>
                    سنتعرف على أشكال ومعالم سطح الأرض.
                </p>

            </div>
        `
    },


    "earth-processes": {
        title: "🌋 العمليات المؤثرة في سطح الأرض",
        icon: "🌋",

        content: `
            <div class="lesson-card">

                <h2>🌋 العمليات المؤثرة في سطح الأرض</h2>

                <p>
                    سنتعرف على العمليات التي تغير سطح الأرض.
                </p>

            </div>
        `
    },


    energy: {
        title: "⚡ مصادر الطاقة",
        icon: "⚡",

        content: `
            <div class="lesson-card">

                <h2>⚡ مصادر الطاقة</h2>

                <p>
                    سنتعرف على مصادر الطاقة واستخداماتها.
                </p>

            </div>
        `
    },


    "air-water": {
        title: "💧 الهواء والماء",
        icon: "💧",

        content: `
            <div class="lesson-card">

                <h2>💧 الهواء والماء</h2>

                <p>
                    سنتعرف على أهمية الهواء والماء
                    وكيفية المحافظة على هذه الموارد.
                </p>

            </div>
        `
    }

};


// =====================================================
// بنك أسئلة درس تصنيف المخلوقات الحية
// =====================================================

const quizzes = {

    easy: [

        {
            q: "ما المقصود بالتصنيف؟",

            options: [
                "تغيير صفات المخلوقات الحية",
                "تقسيم المخلوقات الحية إلى مجموعات بحسب التشابه",
                "حصر المخلوقات في مجموعة واحدة",
                "منع المخلوقات من التكاثر"
            ],

            answer: 1
        },


        {
            q: "أي مستوى من مستويات التصنيف هو الأصغر؟",

            options: [
                "المملكة",
                "الشعبة",
                "الجنس",
                "النوع"
            ],

            answer: 3
        },


        {
            q: "ما الممالك التي تصنف إليها المخلوقات الحية؟",

            options: [
                "أربع ممالك",
                "خمس ممالك",
                "ست ممالك",
                "ثماني ممالك"
            ],

            answer: 2
        },


        {
            q: "يتكون الاسم العلمي للمخلوق الحي من:",

            options: [
                "المملكة والشعبة",
                "الجنس والنوع",
                "الطائفة والرتبة",
                "الفصيلة والمملكة"
            ],

            answer: 1
        }

    ],


    medium: [

        {
            q: "لماذا يحتاج العلماء إلى تصنيف المخلوقات الحية؟",

            options: [
                "لأن جميع المخلوقات متشابهة",
                "لتسهيل التعرف عليها ودراستها وتسميتها وتنظيمها",
                "لمنع المخلوقات من التغير",
                "لإلغاء الاختلافات بين المخلوقات"
            ],

            answer: 1
        },


        {
            q: "أي العبارات التالية صحيحة عن مستويات التصنيف؟",

            options: [
                "كلما صغر المستوى قل التشابه",
                "النوع أكبر من المملكة",
                "كلما صغر مستوى التصنيف زاد التشابه بين أفراده",
                "جميع المستويات تضم العدد نفسه"
            ],

            answer: 2
        },


        {
            q: "الحصان والحمار الوحشي يشتركان في صفات كثيرة، لكنهما ليسا من النوع نفسه. ماذا نستنتج؟",

            options: [
                "لا توجد بينهما أي صلة في التصنيف",
                "يمكن أن يشتركا في مستويات تصنيف أعلى من النوع",
                "هما من مملكتين مختلفتين",
                "لا يمكن تصنيفهما"
            ],

            answer: 1
        },


        {
            q: "أي مستوى يضم أكبر عدد من المخلوقات الحية؟",

            options: [
                "النوع",
                "الجنس",
                "الشعبة",
                "المملكة"
            ],

            answer: 3
        },


        {
            q: "لماذا يستخدم العلماء الجنس والنوع عند تسمية المخلوق الحي؟",

            options: [
                "لأنهما يعطيان تحديدًا أكثر دقة للمخلوق",
                "لأن المملكة لا وجود لها",
                "لأن النوع أكبر مستوى تصنيفي",
                "لأن الجنس والنوع لا علاقة لهما بالتصنيف"
            ],

            answer: 0
        }

    ],


    hard: [

        {
            q: "أمامك ثلاثة مخلوقات: حصان، كلب، عنكبوت. جميعها تنتمي إلى المملكة الحيوانية. إذا كان الحصان والكلب يشتركان في مستوى تصنيفي أكثر تحديدًا من المستوى الذي يشترك فيه الحصان والعنكبوت، فما الاستنتاج الأدق؟",

            options: [
                "الحصان أقرب تصنيفيًا إلى العنكبوت",
                "الحصان أقرب تصنيفيًا إلى الكلب",
                "العنكبوت والكلب من النوع نفسه",
                "المملكة الحيوانية لا تفيد في التصنيف"
            ],

            answer: 1
        },


        {
            q: "صنف طالب مخلوقًا اعتمادًا على شكله الخارجي فقط، ثم وجد أن تراكيبه الداخلية تختلف عن أفراد المجموعة. ما أفضل تفسير لخطئه؟",

            options: [
                "التصنيف يعتمد على صفات وتراكيب متعددة وليس الشكل وحده",
                "لا يمكن استخدام الصفات في التصنيف",
                "المخلوق غير حي",
                "المملكة لا تحتوي على مستويات"
            ],

            answer: 0
        },


        {
            q: "مخلوق حي عديد الخلايا، له جدار خلوي، ولا توجد في خلاياه بلاستيدات خضراء. أي معلومة تساعد أكثر في تحديد مملكته؟",

            options: [
                "لون المخلوق",
                "طريقة حصوله على الغذاء وتركيب خلاياه",
                "مكان رؤيته فقط",
                "حجمه فقط"
            ],

            answer: 1
        },


        {
            q: "إذا انتقلت من المملكة إلى النوع أثناء التصنيف، فما التغير المتوقع؟",

            options: [
                "يزداد عدد المخلوقات ويقل التشابه",
                "يقل عدد المخلوقات ويزداد التشابه",
                "لا يتغير عدد المخلوقات",
                "يختفي التشابه بين المخلوقات"
            ],

            answer: 1
        },


        {
            q: "لماذا لا يكفي استخدام اسم المملكة وحده لتحديد مخلوق حي بصورة دقيقة؟",

            options: [
                "لأن المملكة تضم مجموعة واسعة جدًا من المخلوقات",
                "لأن المملكة هي أصغر مستوى",
                "لأن المملكة لا تحتوي على مخلوقات",
                "لأن المملكة تستخدم للنباتات فقط"
            ],

            answer: 0
        },


        {
            q: "وجد عالم مخلوقين يشتركان في المملكة والشعبة والطائفة والرتبة والفصيلة والجنس، لكنهما يختلفان في النوع. ماذا يعني ذلك؟",

            options: [
                "أنهما لا علاقة لهما ببعضهما",
                "أنهما متقاربان جدًا في التصنيف لكنهما ليسا من النوع نفسه",
                "أن أحدهما غير حي",
                "أنهما من مملكتين مختلفتين"
            ],

            answer: 1
        },


        {
            q: "أي موقف يمثل استخدامًا صحيحًا لفكرة التصنيف؟",

            options: [
                "وضع المخلوقات في مجموعات عشوائية",
                "جمع المخلوقات التي تتشابه في صفاتها ثم تقسيمها إلى مجموعات أكثر تحديدًا",
                "تصنيف المخلوق اعتمادًا على اسمه فقط",
                "اعتبار جميع الحيوانات نوعًا واحدًا"
            ],

            answer: 1
        },


        {
            q: "قال طالب: «بما أن الحصان والعنكبوت ينتميان إلى المملكة نفسها، فهما متساويان في درجة القرابة». ما الخطأ في استنتاجه؟",

            options: [
                "المملكة مستوى واسع، ويجب مقارنة مستويات تصنيف أكثر تحديدًا",
                "الحصان ليس مخلوقًا حيًا",
                "العنكبوت ليس من المخلوقات الحية",
                "لا توجد مستويات أخرى بعد المملكة"
            ],

            answer: 0
        },


        {
            q: "مخلوقان متشابهان جدًا ويشتركان في معظم مستويات التصنيف، لكنهما لا يستطيعان إنتاج أفراد من النوع نفسه معًا. إلى أي مستوى يمكن أن ينتميا بشكل مختلف؟",

            options: [
                "المملكة فقط",
                "الشعبة فقط",
                "النوع",
                "جميع مستويات التصنيف"
            ],

            answer: 2
        },


        {
            q: "إذا كان الهدف تحديد مخلوق حي بدقة باستخدام التسمية العلمية، فلماذا يستخدم العلماء الجنس والنوع تحديدًا؟",

            options: [
                "لأنهما مستويان أكثر تحديدًا من المستويات الأعلى",
                "لأنهما أكبر مجموعتين",
                "لأن الجنس والنوع لا يتغيران أبدًا",
                "لأن المملكة لا تستخدم في التصنيف"
            ],

            answer: 0
        }

    ]

};


// =====================================================
// متغيرات الاختبار
// =====================================================

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let currentLevel = "easy";


// =====================================================
// فتح الدرس
// =====================================================

function openLesson(id) {

    const lesson = lessons[id];

    const modal = document.getElementById("lessonModal");

    const content = document.getElementById("lessonContent");


    if (!lesson || !modal || !content) {
        return;
    }


    content.innerHTML = `

        <div class="lesson-header">

            <div class="lesson-big-icon">
                ${lesson.icon}
            </div>

            <h2>
                ${lesson.title}
            </h2>

            ${lesson.content}

        </div>

        <button class="main-action"
                onclick="closeLesson()">

            🏠 العودة للوحدات

        </button>

    `;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


// =====================================================
// إغلاق الدرس
// =====================================================

function closeLesson() {

    const modal =
        document.getElementById("lessonModal");

    if (modal) {
        modal.classList.remove("show");
    }

    document.body.style.overflow = "";
}


// =====================================================
// بدء الاختبار
// =====================================================

function startQuiz(level) {

    currentLevel = level;

    currentQuiz =
        [...(quizzes[level] || quizzes.easy)];


    currentQuiz.sort(
        () => Math.random() - 0.5
    );


    currentQuestion = 0;

    score = 0;


    const modal =
        document.getElementById("quizModal");


    if (!modal) {
        return;
    }


    modal.classList.add("show");

    document.body.style.overflow = "hidden";


    showQuestion();
}


// =====================================================
// عرض السؤال
// =====================================================

function showQuestion() {

    const content =
        document.getElementById("quizContent");


    if (!content) {
        return;
    }


    if (
        currentQuestion >=
        currentQuiz.length
    ) {

        showResult();

        return;
    }


    const question =
        currentQuiz[currentQuestion];


    let options = "";


    question.options.forEach(
        function(option, index) {

            options += `

                <button
                    class="quiz-option"
                    onclick="answerQuestion(${index})">

                    <span class="option-number">
                        ${index + 1}
                    </span>

                    <span>
                        ${option}
                    </span>

                </button>

            `;
        }
    );


    const levelName =
        currentLevel === "easy"
            ? "🟢 أساسي"
            : currentLevel === "medium"
                ? "🟡 متوسط"
                : "🔴 تحدي";


    content.innerHTML = `

        <button class="close"
                onclick="closeQuiz()">
            ×
        </button>


        <div class="quiz-header">

            <span class="quiz-level-title">
                ${levelName}
            </span>

            <span class="question-counter">
                السؤال
                ${currentQuestion + 1}
                من
                ${currentQuiz.length}
            </span>

        </div>


        <div class="question-box">

            <h2>
                ${question.q}
            </h2>

        </div>


        <div class="quiz-options">

            ${options}

        </div>

    `;
}


// =====================================================
// الإجابة
// =====================================================

function answerQuestion(selected) {

    const question =
        currentQuiz[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function(button) {
            button.disabled = true;
        }
    );


    buttons.forEach(
        function(button, index) {

            if (
                index === question.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index === selected &&
                selected !== question.answer
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    if (
        selected === question.answer
    ) {

        score++;

    }


    setTimeout(
        function() {

            currentQuestion++;

            showQuestion();

        },
        900
    );
}


// =====================================================
// النتيجة
// =====================================================

function showResult() {

    const content =
        document.getElementById("quizContent");


    const percentage =
        Math.round(
            (score / currentQuiz.length) * 100
        );


    let icon;

    let message;


    if (percentage >= 90) {

        icon = "🏆";

        message =
            "ممتاز جدًا! واضح أنك تفهم وتستنتج، وليس فقط تحفظ.";

    }

    else if (percentage >= 75) {

        icon = "👏";

        message =
            "ممتاز! بقيت بعض النقاط الصغيرة وتوصل للمستوى الأعلى.";

    }

    else if (percentage >= 60) {

        icon = "💪";

        message =
            "جيد، لكن راجع المفاهيم التي أخطأت فيها وحاول مرة أخرى.";

    }

    else {

        icon = "📚";

        message =
            "راجع الدرس بهدوء ثم أعد الاختبار. الهدف هو الفهم.";

    }


    content.innerHTML = `

        <button class="close"
                onclick="closeQuiz()">
            ×
        </button>


        <div class="result">

            <div class="result-icon">
                ${icon}
            </div>

            <h2>
                انتهى الاختبار
            </h2>

            <div class="score">
                ${score} / ${currentQuiz.length}
            </div>

            <p class="percentage">
                ${percentage}%
            </p>

            <p>
                ${message}
            </p>


            <div class="result-buttons">

                <button
                    class="main-action"
                    onclick="startQuiz('${currentLevel}')">

                    🔄 إعادة الاختبار

                </button>


                <button
                    class="secondary-action"
                    onclick="closeQuiz()">

                    🏠 العودة للموقع

                </button>

            </div>

        </div>

    `;
}


// =====================================================
// إغلاق الاختبار
// =====================================================

function closeQuiz() {

    const modal =
        document.getElementById("quizModal");


    if (modal) {
        modal.classList.remove("show");
    }


    document.body.style.overflow = "";
}


// =====================================================
// الضغط خارج النافذة
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const lessonModal =
            document.getElementById(
                "lessonModal"
            );


        const quizModal =
            document.getElementById(
                "quizModal"
            );


        if (lessonModal) {

            lessonModal.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target ===
                        lessonModal
                    ) {

                        closeLesson();

                    }

                }
            );

        }


        if (quizModal) {

            quizModal.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target ===
                        quizModal
                    ) {

                        closeQuiz();

                    }

                }
            );

        }

    }
);
