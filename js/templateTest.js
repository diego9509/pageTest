let navMenus = new Vue({
    el: "#nav-menu",
    data: {
        menus: [
            { type: 'scroll', name: 'home', href: 'home' },
            { type: 'scroll', name: 'about', href: 'about' },
            { type: 'scroll', name: 'contact', href: 'contact' },
            { type: 'link', name: 'blog', href: 'https://blog.naver.com/jkidson' },
            { type: 'link', name: 'instagram', href: 'https://www.instagram.com/jeu_kidssports/' },
            { type: 'tel', href: '1522-5626' },
        ],

    },
    methods: {
        clicked: function (menu) {
            if (menu.type === 'scroll') {
                // event.preventDefault();
                $('#nav-menu li a').removeClass('active');
                let target = document.getElementById(menu.href);
                document.documentElement.scrollTop = target.offsetTop - 64; //header height
                $(this).addClass('active');
            }
            $('nav ul').removeClass('open');
        }
    }
});

let panels = new Vue({
    el: "#panels",
    data: {
        panels: [
            { title: '대형실내구장 보유', imgId: 'icon-01', text: '대형실내구장으로 미세먼지, 우천 등에 안전합니다' },
            { title: '유아축구 전문 코치', imgId: 'icon-02', text: '유아축구 전문 코치의 지도로 체계적입니다' },
            { title: '자연스런 리듬감 형성', imgId: 'icon-03', text: '음악과 함께 하여 자연스런 리듬감을 형성합니다' },
            { title: '수업내용 피드백', imgId: 'icon-04', text: '각 반별로 관리하여 수업내용을 피드백합니다' },
            { title: '소수정예 맞춤식 교육', imgId: 'icon-05', text: '소수정예 맞춤식으로 개성있게 교육합니다' },
            { title: '다양한 대회경험 제공', imgId: 'icon-06', text: '전문적인 교육프로그램 이수 후 다양한 축구대회에 참가합니다' },
        ]
    }
});

let infraPanels = new Vue({
    el: "#infraPanels",
    data: {
        panels: [
            { title: '안전한 실내구장', imgSrc: 'img/infra_01-min.png', text: '대형실내와 실외를 겸비한 어린이전용구장' },
            { title: '카페 라운지', imgSrc: 'img/infra_02-min.png', text: '아이들이 학습하는 동안 학부모님들이 쉴 수 있는 공간을 마련하였습니다' },
            { title: '셔틀버스 운영', imgSrc: 'img/infra_03-min.png', text: '안전한 이동을 위하여 전용 셔틀버스를 운영합니다.' },
        ]
    }
});

function findPosition() {
    let link = $('#nav-menu li a');

    $('section').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) <= 64) {
            link.removeClass('active');
            $('#nav-menu').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
        }
    });
}

function fnMemberValidation() {
    
    if ($('#name').val() === '') {
        alert("성명을 입력해주세요.");
        $('#name').focus();
        return false;
    }

    if ($.trim($('#email').val()) == '') {
        alert("이메일주소를 입력해주세요.");
        $('#email').focus();
        return false;
    } else {
        var emailExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailExp.test($('#email').val())) {
            alert("이메일주소가 유효하지 않습니다.");
            $('#email').focus();
            return false;
        }
    }

    if ($('#contact').val() === '') {
        alert("연락처을 입력해주세요.");
        $('#contact').focus();
        return false;
    }

    if ($('#message').val() === '') {
        alert("문의내용을 입력해주세요");
        $('#message').focus();
        return false;
    }

    if ($('#smsyn').is(':checked') == false) {
        alert("상담을 위한 개인정보 수집에 대한 동의가 필요합니다.");
        $('#smsyn').focus();
        return false;
    }

    $('.gform').submit();
}

function messageShow() {
    setTimeout(function(){
        $('.thankyou_message').show();
    },200)
    
}
function messageHide() {
    $('.thankyou_message').hide();
    $('#name, #email, #contact, #message').val('');
    $('#smsyn').prop('checked', false);
}


$(document).ready(function () {
    findPosition();
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        fade: true,
    });
    $('nav button').click(function(){
        $('nav ul').toggleClass('open');
    })

});

document.getElementsByTagName('body')[0].onscroll = () => {
    
    let nav = document.getElementsByTagName('nav')[0];

    if (window.scrollY > 0) {
        nav.classList.add('scroll');

        findPosition();

    } else if (window.scrollY == 0) {

        nav.classList.remove('scroll');

    };

};

document.addEventListener('touchmove', function (e) { 
    document.getElementById('nav-menu').classList.remove('open');
}, false);  