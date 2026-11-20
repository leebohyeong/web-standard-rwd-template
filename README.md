# Cafe blog

## 프로젝트 정보

- **배포 주소** : https://leebohyeong.github.io/web-standard-rwd-template/
- **제작 기간** : 2026.11.09 ~ 2026.11.18
- **제작 도구** : VSCode
- **사용 기술** : HTML5, CSS3, JavaScript, Git

## 실행 방법
```bash
git clone https://github.com/leebohyeong/web-standard-rwd-template.git
git pull
```

## 기능 소개
- header menu 클릭 시 해당 섹션으로 이동
- hero 영역에서 좌, 우 버튼 클릭 시 swiper fade 효과를 적용해서 컨텐츠가 한 개씩 보여짐
- 나의 카페 취향 섹션에서 탭 메뉴 클릭 시 해당되는 컨텐츠가 보여지고, 
  active 안 된 컨텐츠는 마우스 호버시 해당 카테고리 문구가 보여짐
- 사이트 오른쪽 하단에 TOP 버튼 클릭 시 사이트 상단으로 이동 되도록 구현
- 미디어쿼리를 사용해서 다양한 디바이스 크기에도 깨지지 않게 보여짐
- AOS 라이브러리 사용해서 fade-up 효과를 적용 함

## 핵심 코드
```bash
//main hero 컨텐츠 swiper silde 적용
//autoplay , delay 5000 값을 줘서 5초마다 컨텐츠가 변경되도록 코딩
//loop를 사용해서 반복되도록 코딩
//effect: fade 효과를 줘서 기본 slide 형태가 아닌 fade 형태로 변경
//navigation 좌,우 버튼을 커스텀해서 넣음
const swiper = new Swiper('.hero-swiper', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.hero-swiper-button-next',
        prevEl: '.hero-swiper-button-prev',
    }
});

```
