# jQuery
## jQuery의 기본 사용

- 소개
	1. 룰렛
		1. 랜덤 가중치 사용
		2. jquery rotate 사용
		3. 모듈패턴(IIFE)
		4. https://9gleling.github.io/js/skin/javascript/roulette/roulette.html
	2. 별점
		1. 마우스 이벤트와 라디오 버튼을 이용해 점수 매기기
		2. https://9gleling.github.io/js/skin/javascript/ratedScore/index.html
	3. 검색자동완성
		1. 쓰로틀링을 이용한 검색
		2. jquery ajax 호출 시 코드 내 주석 참고
		3. 입력 글자 일치 하이라이트(strong태그) 처리
		4. https://9gleling.github.io/js/skin/javascript/debounceAndThrottle/throttle.html
	4. lazy load `nodejs(구글 이미지 크롤링)와 ejs로 구현`
		```
		local 환경에서 확인 가능
		http://localhost:3000/jqueryPlugin
		http://localhost:3000/intersectionObserver
		```
		1.jquery plugin 
			```
			ex)
			<img class="lazy" data-original="image src">
			<script>
			$(() => {
				$('img.lazy').lazyload();
			});
			</script>
			```
		2.intersectionObserver
			```
			주요 method
			IntersectionObserver.observe(target): 관찰 시작
			IntersectionObserver.unobserve(target): 관찰 종료
			IntersectionObserver.disconnect(target): 관찰 멈추기

			ex)
			const intersectionObserver = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// do something
						observer.unobserve(entry.target);
					}
				});
			});
			intersectionObserver.observe(element);
			```
			```
			무한 이미지 스크롤 적용 (좋은 방법인지는 모르겠..)
			 - ul 스크롤 끝부분 감시자 추가 
			 - IntersectionObserver를 스크롤과 이미지 lazy load용 두개 생성
			```
