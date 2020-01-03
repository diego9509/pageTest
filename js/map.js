

function initialize() {
    var mapLocation = new google.maps.LatLng('36.322473', '127.412501'); // 지도에서 가운데로 위치할 위도와 경도
    var markLocation = new google.maps.LatLng('36.322473', '127.412501'); // 마커가 위치할 위도와 경도

    var mapOptions = {
        center: mapLocation, // 지도에서 가운데로 위치할 위도와 경도(변수)
        zoom: 15, // 지도 zoom단계
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        style: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
]
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), // id: map-canvas, body에 있는 div태그의 id와 같아야 함
        mapOptions);

    var size_x = 40; // 마커로 사용할 이미지의 가로 크기
    var size_y = 40; // 마커로 사용할 이미지의 세로 크기

    // 마커로 사용할 이미지 주소
    var image = new google.maps.MarkerImage( 'http://www.larva.re.kr/home/img/boximage3.png',
                        new google.maps.Size(size_x, size_y),
                        '',
                        '',
                        new google.maps.Size(size_x, size_y));

    var marker;
    marker = new google.maps.Marker({
            position: markLocation, // 마커가 위치할 위도와 경도(변수)
            map: map,
            icon: image, // 마커로 사용할 이미지(변수)
//             info: '말풍선 안에 들어갈 내용',
            title: 'title' // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
    });

    var content = "content"; // 말풍선 안에 들어갈 내용

    // 마커를 클릭했을 때의 이벤트. 말풍선 뿅~
    var infowindow = new google.maps.InfoWindow({ content: content});

    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map,marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
