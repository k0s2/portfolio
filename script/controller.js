$(function () {

    // ----------------------------------------
    // タグ取得
    // ----------------------------------------

    const main = document.querySelector(".containers");
    const targets = main.querySelectorAll(".container");

    // ----------------------------------------
    // 現在のタグ位置を取得
    // ----------------------------------------

    function getCurrentIndex() {

        const mainTop = main.getBoundingClientRect().top;
        const scrollTop = main.scrollTop;

        let index = -1;

        targets.forEach(function (section, i) {

            const sectionTop =
                section.getBoundingClientRect().top - mainTop + scrollTop;

            if (sectionTop <= scrollTop + 1) {
                index = i;
            }

        });

        return index;

    }

    // ----------------------------------------
    // タグジャンプ
    // ----------------------------------------

    function scrollToSection(index) {

        if (index < 0 || index >= targets.length) {
            return;
        }

        const mainTop = main.getBoundingClientRect().top;

        const targetTop =
            targets[index].getBoundingClientRect().top
            - mainTop
            + main.scrollTop;

        main.scrollTo({
            top: targetTop,
            behavior: "smooth"
        });

    }

    // ----------------------------------------
    // 上ボタン
    // ----------------------------------------

    $(".btn-up").on("click", function () {

        const index = getCurrentIndex();

        if (index > 0) {
            scrollToSection(index - 1);
        }

    });

    // ----------------------------------------
    // 下ボタン
    // ----------------------------------------

    $(".btn-down").on("click", function () {

        const index = getCurrentIndex();

        if (index < targets.length - 1) {
            scrollToSection(index + 1);
        }

    });

});