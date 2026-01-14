$(document).ready(function () {

    //스크롤에 따라 클래스 붙이고 떼기    
    let $target = $("#target");
    let targetTop = $target.offset().top; // 타겟의 상단 높이
    let targetBottom = targetTop + $target.outerHeight(); // 타겟의 하단 높이

    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
        let windowHeight = $(window).height(); // 윈도우 높이
        let triggerPoint = targetBottom - windowHeight; // .landing이 유지되는 범위의 끝점

        if (scrollTop > targetTop && scrollTop < triggerPoint) {
            // 스크롤이 타겟 상단보다 크고, 하단 - 윈도우 크기보다 작으면 .landing 유지
            $target.addClass("landing").removeClass("landing-end");
        } else if (scrollTop >= triggerPoint) {
            // 스크롤이 타겟 하단 - 윈도우 크기보다 커지면 .landing 제거 후 .landing-end 추가
            $target.removeClass("landing").addClass("landing-end");
        } else {
            // 스크롤이 타겟 상단보다 작으면 초기 상태
            $target.removeClass("landing landing-end");
        }
    });

    $("#header").load("menu.html");
    $("#footer").load("footer.html");

});