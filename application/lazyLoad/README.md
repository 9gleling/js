# nodejs
## nodejs 크롤링과 ejs 

```
nodemon 사용

npm i
nodemon start main.js
```
1. lazy load `nodejs(구글 이미지 크롤링)와 ejs로 구현` skin/javascript/lazyLoad 폴더의 ejs파일 참고
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
