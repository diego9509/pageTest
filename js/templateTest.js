let navMenus = new Vue({
    el: "#nav-menu",
    data: {
        menus: [
            { type: 'link', href: 'home' },
            { type: 'link', href: 'about' },
            { type: 'link', href: 'contact' },
            { type: 'tel', href: '1522-5626' },
        ],
        
    },
    methods: {
        clicked: function(menu) {
            if (menu.type !== 'tel') {
                event.preventDefault();
                let target = document.getElementById(menu.href);
                document.documentElement.scrollTop = target.offsetTop - 170; //header height
            }
        }
    }
});

let panels = new Vue({
    el: "#panels",
    data: {
        panels: [
            { title: '대형실내구장 보유', imgId: 'icon-01', text:'대형실내구장으로 미세먼지, 우천 등에 안전합니다' },
            { title: '유아축구 전문 코치', imgId: 'icon-02', text:'유아축구 전문 코치의 지도로 체계적입니다' },
            { title: '자연스런 리듬감 형성', imgId: 'icon-03', text:'음악과 함께 하여 자연스런 리듬감을 형성합니다' },
            { title: '수업내용 피드백', imgId: 'icon-04', text:'각 반별로 관리하여 수업내용을 피드백합니다' },
            { title: '소수정예 맞춤식 교육', imgId: 'icon-05', text:'소수정예 맞춤식으로 개성있게 교육합니다' },
            { title: '다양한 대회경험 제공', imgId: 'icon-06', text:'전문적인 교육프로그램 이수 후 다양한 축구대회에 참가합니다' },
        ]
    }
});


document.getElementsByTagName('body')[0].onscroll = () => {
    let nav = document.getElementsByTagName('nav')[0];

    if (window.scrollY > 0) {
        nav.classList.add('scroll');
    } else if (window.scrollY == 0) {
        nav.classList.remove('scroll');
    };
};