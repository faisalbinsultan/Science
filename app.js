// ===============================
// مساعد مادة العلوم - app.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // تأثير بسيط عند الضغط على أزرار الموقع
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 120);
        });
    });

    // العودة لأعلى الصفحة عند فتح درس جديد
    const lessonLinks = document.querySelectorAll(
        ".lesson, .lesson-card, .lesson-btn, [data-lesson]"
    );

    lessonLinks.forEach(function (lesson) {
        lesson.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    // إظهار رسالة عند عدم وجود محتوى
    const emptyMessages = document.querySelectorAll(".empty-message");

    emptyMessages.forEach(function (message) {
        message.style.display = "block";
    });

    // منع النقر المزدوج السريع على أزرار الاختبار
    const quizButtons = document.querySelectorAll(
        ".quiz-option, .option, [data-answer]"
    );

    quizButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            quizButtons.forEach(function (item) {
                item.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });

    console.log("Science website loaded successfully ✅");
});
