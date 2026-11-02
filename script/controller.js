$(function () {

    // ----------------------------------------
    // タグ取得
    // ----------------------------------------

    const main = document.querySelector(".section_main");
    const sections = $(".section_main .container");

    // ----------------------------------------
    // 現在のタグ位置を取得
    // ----------------------------------------

    function getCurrentIndex() {

        const mainTop = main.getBoundingClientRect().top;
        const scrollTop = main.scrollTop;

        let index = -1;

        sections.each(function (i) {

            const sectionTop =
                this.getBoundingClientRect().top - mainTop + scrollTop;

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

        if (index < 0 || index >= sections.length) {
            return;
        }

        const mainTop = main.getBoundingClientRect().top;

        const targetTop =
            sections[index].getBoundingClientRect().top
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

        if (index < sections.length - 1) {
            scrollToSection(index + 1);
        }

    });

});