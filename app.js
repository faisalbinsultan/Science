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

            <div class="thinking-box">
                🧠 السؤال الأساسي:
                <br>
                لماذا يصنف العلماء المخلوقات الحية؟
            </div>

        </div>


        <div class="lesson-card">

            <h3>🧠 ما علم التصنيف؟</h3>

            <p>
                التصنيف هو تقسيم المخلوقات الحية إلى مجموعات
                بحسب درجة التشابه في الشكل أو التركيب أو الوظائف
                بين أفراد كل مجموعة.
            </p>

            <div class="thinking-box">
                💡 الفكرة المهمة:
                <br>
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

            <h3>🐾 كيف نعرف درجة التقارب؟</h3>

            <p>
                الحصان والعنكبوت والكلب جميعها تنتمي إلى
                المملكة الحيوانية، لكن الحصان والكلب يشتركان
                في مستويات تصنيف أكثر تحديدًا من الحصان والعنكبوت.
            </p>

            <div class="thinking-box">
                🧠 لذلك:
                <br>
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
        title: "🌿 مملكة النباتات",
        icon: "🌿",

        content: `

        <div class="lesson-card">

            <div class="lesson-step">
                الدرس 2
            </div>

            <h2>🌿 مملكة النباتات</h2>

            <p>
                النباتات مخلوقات حية تحتاج إلى الهواء والماء
                والمكان المناسب لكي تعيش وتنمو.
            </p>

            <div class="thinking-box">
                🧠 السؤال الأساسي:
                <br>
                ما أهم التراكيب الموجودة في النباتات؟
                وما وظائفها؟
            </div>

        </div>


        <div class="lesson-card">

            <h3>🔎 كيف تصنف النباتات؟</h3>

            <p>
                تصنف النباتات إلى مجموعتين رئيسيتين:
            </p>

            <div class="kingdom-grid">

                <div>🌱 نباتات لاوعائية</div>
                <div>🌳 نباتات وعائية</div>

            </div>

            <p>
                النباتات اللاوعائية ليس لها نظام نقل،
                لذلك تكون عادة صغيرة وتنمو قريبًا من سطح الأرض.
            </p>

            <p>
                أما النباتات الوعائية فلها أنابيب تنقل الماء
                والمواد الغذائية داخل النبات.
            </p>

        </div>


        <div class="lesson-card">

            <h3>🌱 النباتات الوعائية</h3>

            <p>
                تنقسم النباتات الوعائية إلى:
            </p>

            <div class="classification-levels">

                <div>🌰 نباتات بذرية</div>
                <div>🌿 نباتات لا بذرية</div>

            </div>

            <div class="thinking-box">
                🧠 انتبه:
                <br>
                ليس كل نبات وعائي ينتج بذورًا.
            </div>

        </div>


        <div class="lesson-card">

            <h3>🌰 النباتات البذرية</h3>

            <p>
                النباتات البذرية تنتج بذورًا تساعد على إنتاج
                نبات جديد.
            </p>

            <div class="classification-levels">

                <div>🌲 معراة البذور</div>
                <div>🌸 مغطاة البذور</div>

            </div>

        </div>


        <div class="lesson-card">

            <h3>🌲 معراة البذور</h3>

            <p>
                نباتات لا تنتج أزهارًا، وتكون بذورها داخل
                أعضاء تكاثر مخروطية الشكل.
            </p>

            <p>
                من أمثلتها: الصنوبر.
            </p>

            <div class="thinking-box">
                🧠 استنتج:
                <br>
                نبات لا ينتج أزهارًا وينتج بذورًا في مخاريط.
                إلى أي مجموعة تتوقع أن ينتمي؟
            </div>

        </div>


        <div class="lesson-card">

            <h3>🌸 مغطاة البذور</h3>

            <p>
                النباتات المغطاة البذور هي نباتات بذرية
                تنتج أزهارًا.
            </p>

            <p>
                وتحيط الثمرة ببذورها عادةً.
            </p>

            <p>
                من أمثلتها: التفاح والخوخ والقرع.
            </p>

            <div class="thinking-box">
                🔍 إذا رأيت نباتًا ينتج أزهارًا وثمارًا،
                فأي مجموعة من النباتات البذرية تتوقع أن ينتمي إليها؟
            </div>

        </div>


        <div class="lesson-card">

            <h3>🌿 النباتات اللابذرية</h3>

            <p>
                النباتات اللابذرية لا تنتج بذورًا،
                ومنها السرخسيات وذيل الحصان.
            </p>

            <p>
                وتتكاثر بالأبواغ.
            </p>

        </div>


        <div class="lesson-card">

            <h3>🌱 الجذور</h3>

            <p>
                الجذر جزء من النبات يمتص الماء والأملاح المعدنية
                من التربة، ويدعم النبات ويثبته.
            </p>

            <h3>أجزاء الجذر</h3>

            <ul>
                <li>البشرة</li>
                <li>الشعيرات الجذرية</li>
                <li>القشرة</li>
                <li>أوعية النقل</li>
                <li>القلنسوة</li>
            </ul>

            <div class="thinking-box">
                💡 الشعيرات الجذرية تساعد النبات على
                امتصاص الماء والأملاح المعدنية.
            </div>

        </div>


        <div class="lesson-card">

            <h3>🌳 الساق</h3>

            <p>
                الساق تدعم النبات وتساعد على نقل الماء
                والمواد الغذائية بين أجزاء النبات.
            </p>

            <div class="classification-levels">

                <div>💧 الخشب → ينقل الماء والأملاح المعدنية</div>

                <div>🍬 اللحاء → ينقل السكر الذي يصنع في الأوراق</div>

                <div>🔄 الكامبيوم → ينتج خلايا الخشب واللحاء</div>

            </div>

            <div class="thinking-box">
                🧠 سؤال تفكير:
                <br>
                أي جزء من الساق ينقل السكر من الأوراق
                إلى أجزاء النبات الأخرى؟
            </div>

        </div>


        <div class="lesson-card">

            <h3>🍃 الأوراق</h3>

            <p>
                الأوراق تراكيب تساعد النبات على القيام
                بعملية البناء الضوئي.
            </p>

            <ul>
                <li>البشرة</li>
                <li>الطبقة الشمعية</li>
                <li>الثغور</li>
                <li>الخلايا الحارسة</li>
                <li>الخشب</li>
                <li>اللحاء</li>
            </ul>

        </div>


        <div class="lesson-card">

            <h3>☀️ البناء الضوئي</h3>

            <p>
                يحتاج النبات للقيام بالبناء الضوئي إلى
                ضوء الشمس والماء وثاني أكسيد الكربون.
            </p>

            <div class="thinking-box">
                ☀️ ضوء الشمس + 💧 الماء + 🌬️ ثاني أكسيد الكربون
                <br>
                ⬇️
                <br>
                🍬 سكر + 💨 أكسجين
            </div>

        </div>


        <div class="lesson-card">

            <h3>💧 النتح</h3>

            <p>
                النتح هو خروج الماء من النبات على هيئة
                بخار عن طريق الثغور.
            </p>

            <p>
                وتساعد الخلايا الحارسة على تنظيم فتح وإغلاق الثغور.
            </p>

        </div>


        <div class="lesson-card">

            <h3>🌵 تكيف الصبار</h3>

            <p>
                يستطيع الصبار العيش في البيئة الصحراوية
                والمحافظة على الماء.
            </p>

            <div class="thinking-box">
                🔥 تحدي:
                <br><br>
                لماذا يحتاج نبات الصبار إلى صفات تساعده
                على تقليل فقد الماء؟
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
// أسئلة تصنيف المخلوقات الحية
// =====================================================

const classificationQuizzes = {

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
            q: "كم عدد الممالك الرئيسة للمخلوقات الحية في هذا الدرس؟",
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
            q: "وجد عالم مخلوقين يشتركان في معظم مستويات التصنيف، لكنهما يختلفان في النوع. ماذا يعني ذلك؟",
            options: [
                "أنهما لا علاقة لهما ببعضهما",
                "أنهما متقاربان جدًا في التصنيف لكنهما ليسا من النوع نفسه",
                "أن أحدهما غير حي",
                "أنهما من مملكتين مختلفتين"
            ],
            answer: 1
        },

        {
            q: "قال طالب: بما أن الحصان والعنكبوت ينتميان إلى المملكة نفسها، فهما متساويان في درجة القرابة. ما الخطأ في استنتاجه؟",
            options: [
                "المملكة مستوى واسع، ويجب مقارنة مستويات تصنيف أكثر تحديدًا",
                "الحصان ليس مخلوقًا حيًا",
                "العنكبوت ليس من المخلوقات الحية",
                "لا توجد مستويات أخرى بعد المملكة"
            ],
            answer: 0
        }

    ]

};


// =====================================================
// أسئلة مملكة النباتات
// =====================================================

const plantQuizzes = {

    easy: [

        {
            q: "إلى أي مجموعتين رئيسيتين تصنف النباتات؟",
            options: [
                "فقاريات ولافقاريات",
                "وعائية ولاوعائية",
                "بذرية وحيوانية",
                "زهور وأشجار"
            ],
            answer: 1
        },

        {
            q: "أي مما يلي مثال على نبات معرى البذور؟",
            options: [
                "التفاح",
                "الخوخ",
                "الصنوبر",
                "القرع"
            ],
            answer: 2
        },

        {
            q: "أي جزء من النبات يمتص الماء والأملاح المعدنية من التربة؟",
            options: [
                "الزهرة",
                "الجذر",
                "الثمرة",
                "الورقة"
            ],
            answer: 1
        },

        {
            q: "ما وظيفة الخشب؟",
            options: [
                "نقل الماء والأملاح المعدنية",
                "صنع البذور",
                "إنتاج الأزهار",
                "تكوين الثمار"
            ],
            answer: 0
        },

        {
            q: "ما العملية التي يصنع فيها النبات غذاءه باستخدام ضوء الشمس؟",
            options: [
                "النتح",
                "الامتصاص",
                "البناء الضوئي",
                "التكاثر"
            ],
            answer: 2
        }

    ],


    medium: [

        {
            q: "نبات له أوعية تنقل الماء والمواد الغذائية ولكنه لا ينتج بذورًا. إلى أي مجموعة ينتمي؟",
            options: [
                "نبات وعائي لا بذري",
                "نبات لاوعائي بذري",
                "نبات مغطى البذور",
                "نبات معرى البذور"
            ],
            answer: 0
        },

        {
            q: "نبات ينتج أزهارًا وثمارًا. إلى أي مجموعة من النباتات البذرية ينتمي غالبًا؟",
            options: [
                "معراة البذور",
                "مغطاة البذور",
                "لا بذرية",
                "لاوعائية"
            ],
            answer: 1
        },

        {
            q: "أي جزء من النبات ينقل السكر المصنوع في الأوراق؟",
            options: [
                "الخشب",
                "اللحاء",
                "القلنسوة",
                "البشرة"
            ],
            answer: 1
        },

        {
            q: "ما وظيفة الشعيرات الجذرية؟",
            options: [
                "صنع السكر",
                "امتصاص الماء والأملاح المعدنية",
                "إنتاج البذور",
                "حماية الثمار"
            ],
            answer: 1
        },

        {
            q: "ما النتح؟",
            options: [
                "دخول الماء إلى الجذر",
                "خروج الماء من النبات على هيئة بخار عبر الثغور",
                "صنع السكر في الجذر",
                "انتقال البذور إلى التربة"
            ],
            answer: 1
        }

    ],


    hard: [

        {
            q: "وجد طالب نباتًا لا ينتج أزهارًا، وينتج بذورًا داخل أعضاء مخروطية الشكل. ما التصنيف الأنسب له؟",
            options: [
                "مغطى البذور",
                "معرى البذور",
                "لا بذري",
                "لاوعائي"
            ],
            answer: 1
        },

        {
            q: "نبات يستطيع نقل الماء والأملاح المعدنية داخل جسمه، ولكنه لا ينتج بذورًا. أي استنتاج صحيح؟",
            options: [
                "هو نبات وعائي لا بذري",
                "هو نبات لاوعائي بذري",
                "هو نبات مغطى البذور",
                "هو نبات معرى البذور"
            ],
            answer: 0
        },

        {
            q: "إذا توقفت الخشب في نبات عن العمل، فأي عملية ستتأثر بصورة مباشرة؟",
            options: [
                "انتقال الماء والأملاح المعدنية",
                "إنتاج البذور فقط",
                "تكوين الثمار فقط",
                "فتح الأزهار فقط"
            ],
            answer: 0
        },

        {
            q: "نبات يعيش في منطقة شديدة الجفاف وله صفات تساعده على تقليل فقد الماء. أي تفسير هو الأكثر منطقية؟",
            options: [
                "يحتاج إلى زيادة فقد الماء",
                "التكيف يساعده على المحافظة على الماء",
                "لا يحتاج إلى الماء",
                "لا يقوم بالبناء الضوئي"
            ],
            answer: 1
        },

        {
            q: "إذا أغلقت الثغور في أوراق النبات، فما النتيجة المتوقعة؟",
            options: [
                "زيادة خروج بخار الماء",
                "تقليل خروج بخار الماء وتبادل الغازات",
                "توقف الجذور عن امتصاص الماء فورًا",
                "زيادة إنتاج البذور مباشرة"
            ],
            answer: 1
        },

        {
            q: "نبات أخضر ينتج أزهارًا وثمارًا وله أوعية نقل. أي وصف يجمع صفاته بصورة صحيحة؟",
            options: [
                "نبات لاوعائي لا بذري",
                "نبات وعائي مغطى البذور",
                "نبات وعائي معرى البذور",
                "نبات لا بذري لاوعائي"
            ],
            answer: 1
        },

        {
            q: "إذا كان النبات يحتاج إلى الماء وثاني أكسيد الكربون وضوء الشمس لصنع السكر، فما العملية المقصودة؟",
            options: [
                "النتح",
                "البناء الضوئي",
                "الامتصاص",
                "التلقيح"
            ],
            answer: 1
        },

        {
            q: "لماذا تعد الأوراق مهمة للنبات؟",
            options: [
                "لأنها تقوم بالبناء الضوئي",
                "لأنها تثبت النبات في التربة",
                "لأنها تنتج الماء",
                "لأنها تمنع الجذور من النمو"
            ],
            answer: 0
        },

        {
            q: "أي موقف يوضح الفرق بين الخشب واللحاء بصورة صحيحة؟",
            options: [
                "الخشب ينقل السكر واللحاء ينقل الماء",
                "الخشب ينقل الماء والأملاح واللحاء ينقل السكر",
                "كلاهما ينقل البذور",
                "كلاهما مسؤول عن إنتاج الأزهار"
            ],
            answer: 1
        },

        {
            q: "إذا كان نبات ما لا يمتلك أوعية لنقل الماء والمواد الغذائية، فأي وصف يناسبه أكثر؟",
            options: [
                "نبات وعائي",
                "نبات لاوعائي",
                "نبات مغطى البذور بالضرورة",
                "نبات معرى البذور بالضرورة"
            ],
            answer: 1
        }

    ]

};


// =====================================================
// الاختبار العام
// يجمع أسئلة جميع الدروس الموجودة حاليًا
// =====================================================

function buildGeneralQuizzes() {

    return {

        easy: [
            ...classificationQuizzes.easy,
            ...plantQuizzes.easy
        ],

        medium: [
            ...classificationQuizzes.medium,
            ...plantQuizzes.medium
        ],

        hard: [
            ...classificationQuizzes.hard,
            ...plantQuizzes.hard
        ]

    };

}


const quizzes = buildGeneralQuizzes();


// =====================================================
// متغيرات الاختبار
// =====================================================

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let currentLevel = "easy";
let currentQuizTitle = "الاختبار";


// =====================================================
// فتح الدرس
// =====================================================

function openLesson(id) {

    const lesson = lessons[id];

    const modal =
        document.getElementById("lessonModal");

    const content =
        document.getElementById("lessonContent");


    if (!lesson || !modal || !content) {
        return;
    }


    const lessonQuizButton =
        (id === "classification" || id === "plants")

        ? `
            <button
                class="main-action"
                onclick="startLessonQuiz('${id}')">

                📝 اختبر نفسك في هذا الدرس

            </button>
        `

        : "";


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


        <div class="lesson-actions">

            ${lessonQuizButton}

            <button
                class="secondary-action"
                onclick="closeLesson()">

                🏠 العودة للوحدات

            </button>

        </div>

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
// بدء الاختبار العام
// =====================================================

function startQuiz(level) {

    currentQuizTitle = "الاختبار العام";

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
// بدء اختبار درس محدد
// =====================================================

function startLessonQuiz(lessonId) {

    let lessonQuizzes = null;


    if (lessonId === "classification") {

        lessonQuizzes = classificationQuizzes;

        currentQuizTitle =
            "🔬 تصنيف المخلوقات الحية";

    }


    else if (lessonId === "plants") {

        lessonQuizzes = plantQuizzes;

        currentQuizTitle =
            "🌿 مملكة النباتات";

    }


    else {

        return;

    }


    currentLevel = "hard";


    currentQuiz =
        [...lessonQuizzes[currentLevel]];


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


    closeLesson();


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
                ${currentQuizTitle}
            </span>

            <span class="question-counter">
                ${levelName}
                <br>
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

            <p>
                ${currentQuizTitle}
            </p>

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
                    onclick="restartCurrentQuiz()">

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
// إعادة الاختبار الحالي
// =====================================================

function restartCurrentQuiz() {

    currentQuiz.sort(
        () => Math.random() - 0.5
    );


    currentQuestion = 0;

    score = 0;


    showQuestion();
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
// =====================================================
// لعبة الحروف - البداية
// =====================================================

function openLettersGame() {

    const modal =
        document.getElementById("lettersGameModal");

    const content =
        document.getElementById("lettersGameContent");

    if (!modal || !content) {
        return;
    }

    content.innerHTML = `

        <div class="letters-game">

            <div class="letters-game-header">

                <div class="letters-game-icon">
                    🔤
                </div>

                <h2>
                    لعبة الحروف
                </h2>

                <p>
                    فريقان يتنافسان في أسئلة العلوم!
                </p>

            </div>

            <div class="thinking-box">

                🎮 اللعبة قادمة هنا...

                <br><br>

                أجب عن السؤال،
                وإذا كانت إجابتك صحيحة
                تحصل على الخانة.

            </div>

        </div>

    `;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeLettersGame() {

    const modal =
        document.getElementById("lettersGameModal");

    if (modal) {
        modal.classList.remove("show");
    }

    document.body.style.overflow = "";
}
