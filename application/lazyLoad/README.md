# nodejs
## nodejs 크롤링과 ejs 

```
nodemon 사용

npm i
nodemon start main.js
```
1. lazy load `nodejs(구글 이미지 크롤링)와 ejs로 구현`
	```
	local 환경에서 확인 가능
	http://localhost:3000/jqueryPlugin
	http://localhost:3000/intersectionObserver
	```
	1. jquery plugin `js\skin\javascript\lazyLoad\intersectionObserver\index.ejs`
		```
		ex)
		<img class="lazy" data-original="image src">
		<script>
		$(() => {
			$('img.lazy').lazyload();
		});
		</script>
		```
	2. intersectionObserver `js\skin\javascript\lazyLoad\intersectionObserver\index.ejs`
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
