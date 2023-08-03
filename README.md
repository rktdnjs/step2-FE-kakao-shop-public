<details>

<summary>Step-2.-Week-1</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>

## **과제명**
```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```

## **과제 설명**

✅**과제 1-1. 쇼핑몰 웹사이트 분석**
```
쇼핑몰 웹사이트를 탐색해 어떠한 페이지 구성을 가지고 있는지 체크합니다. 
대부분의 쇼핑몰은 다음의 페이지 구성을 가지고 있습니다.

- 메인 페이지
- 상품 검색 결과 페이지
- 개별 상품 상세 페이지
- 주문 목록 페이지
- 결제 페이지
- 결제 완료 페이지
- 장바구니 페이지
- ...

이와 같이 위의 서비스가 동작하는데 필수적인 페이지가 무엇이 있고, 해당 페이지에서 어떠한 기능이 구현되어야 하는지 작성하세요. 
그리고 어떠한 디렉터리 구조로 프로젝트를 진행할지 작성해주세요. (README.md 파일에 작성)
```

```
README.md의 예시 형식입니다. 아래를 참고해 작성해주세요. 
각 페이지마다 핵심 기능, 기능 상세 설명, 인터페이스 요구사항이 어떤 것이 있을지 고민해서 작성해주세요.

###예시

#페이지별 구성
1. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다. 
-- ...

#디렉터리 구조
- public
- src
- components
- hooks
- routes
- styles
- dto
- ...
```  
  
```
분석 내용 : https://bronzed-amount-986.notion.site/23-06-27-9504e5d99815443ba9e9842b445d14f2?pvs=4
```


✅**과제 1-2. 디렉터리 구조 설계**

<div align="center">
  
![image](https://github.com/rktdnjs/step2-FE-kakao-shop/assets/67001905/d739e72b-5e3c-49a0-a9b4-f83965b2ce1c)

</div>

| 디렉터리 명   | 기능 |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| node_modules  |	현재 프로젝트에 포함된 라이브러리들이 설치되어 있는 폴더 |
| public        |	index.html 파일, favicon 또는 기타 정적 파일과 같이 공개적으로 액세스할 수 있는 정적 자산을 포함하고 있는 폴더 |
| src	          |	대부분의 코드가 들어가게 될 기본 폴더 |
| ㄴapi	        |	API 관련 로직의 모듈 파일이 위치하는 폴더 |
| ㄴcomponents  |	React 구성 요소를 구성하는 데 사용되는 다양한 컴포넌트들이 들어가는 폴더 |
| ㄴfonts	      |	프로젝트에서 사용할 폰트 파일들이 들어가는 폴더 |
| ㄴhooks	      |	커스텀 훅이 들어갈 폴더 |
| ㄴimages	    |	프로젝트에서 사용할 이미지 파일들이 들어가는 폴더 |
| ㄴpages	      |	React Router 등을 통해 라우팅을 적용할 때 사용하는 페이지 컴포넌트들이 들어가는 폴더 |
| ㄴstyles	    |	CSS 파일들이 포함되는 폴더 |

</br>

✅**과제 2.**

```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```

```
$ src - components에 각 컴포넌트에 대한 코드가 작성되어 있습니다!
```

</br>

✅**과제 3.**

```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요. 
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```

```
임시 배포 주소 : https://shoppingtest.pages.dev/
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다. 
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다. 
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_1주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-2</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 2주차 클론 과제
</br>

## **과제명**
```
1. 코드 디자인 패턴과 상태 관리
```
</br>

## **과제 설명**

✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용** 
```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

✅**과제 2. 회원 가입, 로그인 페이지 개발** 

```
- 백엔드 API 문서를 참고하여 회원가입, 로그인 페이지를 개발하세요.
- 각 페이지에는 적합한 값이 입력되도록 하고, 적절하지 않은 값이 들어온 경우 API 요청을 보내기 전에 프론트에서 에러 캐칭을 해주세요.
- 회원가입, 로그인 후에는 메인 페이지로 리다이렉트하세요.
- API 응답 과정에서 로그인이 실패하는 경우, 회원가입이 실패한 경우에 대해서 에러 캐칭도 적용해야 합니다.
```

</br>

✅**과제 3. 상태관리 모듈 적용** 

```
- 로그인 후에 사용자의 정보를 상태관리 모듈을 하나 선정해 저장하고 불러올 수 있도록 코드를 작성하세요.
- 사용자가 로그인 상태일 때는 GNB 영역에 로그인 버튼이 보이면 안됩니다.
- 로그아웃시 상태를 초기화하세요.
- 새로고침 시에도 상태를 잃지 않고 유지해야 합니다.
- 일정한 시간이 지나면 로그인 유지가 끝나도록 설정하세요.(예: 1일)
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 아토믹 컴포넌트를 작성할 때 Atoms, Molecules에 반드시 특정한 컴포넌트가 들어갈 필요는 없습니다. 개발자의 주관이 들어갈 수 있는 부분이니 적절한 뎁스로 나누어보세요.

2. API 요청을 보내고, 응답 받을 때 성공 케이스만 생각해 코드를 작성하는 경우가 많습니다. 숨은 에러 케이스는 없을지 한 번 더 고민해보세요.

3. 상태 관리 모듈은 자신이 써보고 싶은 어떤 모듈이던 상관 없습니다. 모듈을 사용해보면서 모듈에 들어가는 미들웨어나 툴도 사용해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_2주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-3</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 3주차 클론 과제
</br>

## **과제명**
```
1. 비동기 통신 활용과 레이아웃
```
</br>

## **과제 설명**

✅**과제 1. 상품 목록 페이지 개발**
```
- 백엔드 API 문서를 참고하여 상품 목록 페이지를 개발하세요.
- 페이지네이션을 이용해 페이지 값을 증가시켜가며 조회될 수 있도록 코드를 작성해주세요. 
- 데이터 로딩 과정에 로더를 구현하세요.
- 데이터 불러오기를 할 때 react-query를 사용해보세요.
```

</br>

✅**과제 2. 스켈레톤과 로더**

```
- 컴포넌트에 props를 전달해 데이터 로딩 중 스켈레톤 또는 로더가 적용될 수 있도록 코드를 작성해보세요.
- 상품 목록 카드에 스켈레톤을 적용하세요.
- 페이지 전체에 대한 로딩이 진행될 때는 글로벌 로더를 적용해보세요.(적절한 모듈을 찾아 적용해도 좋습니다.)
```

</br>

✅**과제 3. 백엔드 상태 코드 반응**

```
- API 응답에 대해 전처리 하는 코드를 작성해보세요.
- 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭이 필요한 경우라면 해당 함수에서 먼저 실행되도록 코드를 작성합니다.
- react-query에서 전처리하는 방식이 있다면 해당 방식을 적용하거나 또는 별도의 함수나 클래스를 만들어 관리를 시도해보면 됩니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 스켈레톤과 로더를 바텀부터 만들기보단 Codepen 등을 참고해 구현하고, Props를 통한 실제 적용에 집중해주세요.
2. 과제 3번을 해결할 때 Facade pattern을 참고해보세요.
3. 과제 1번을 해결할 때 react-query를 사용해보되 전체 프로젝트에 react-query를 적용할 필요는 없습니다. 하나 이상의 API 요청에 적용해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_3주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**
```
상세 페이지 개발과 라이브러리
```
</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**
```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요. 
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_4주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제
</br>

## **과제명**
```
주문 결제 개발 
```
</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**
```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다. 
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_5주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>


---


<details>
<summary>Step-2.-Week-6 (완성된 프로젝트의 결과물은 여기에서 자세히 설명!)</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제
</br>

## **과제명**
```
프로젝트 마무리
```
</br>

## **과제 설명**

✅**과제 1. 배포**
```
- 카카오 배포환경을 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>

✅**과제 3.  README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

## 완선된 프로젝트 관련 Notion 정리글

```
https://bronzed-amount-986.notion.site/23-08-03-732eb61027034353b7a3b7315ea41afe?pvs=4
```

## 완성 프로젝트 URL(~8.16 까지 유효함)

```
https://user-app.krampoline.com/k948de2e6d478a/
```

## 완성된 프로젝트 UI & UX

> **메인 화면**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/5fee3f24-43aa-4845-80c9-5beb92df79fc)

> **회원가입 화면**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/196bfbf0-6f52-44c7-b2a8-dbc11f7ed0b3)


> **로그인 화면**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/862f4989-92d3-4d33-adb4-00f896620520)

> **장바구니(로그인 필요)**

![장바구니(로그인 필요)](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/e52fdb46-efb8-4c39-87f2-7a8b051b07e7)

> **물품 장바구니 담기**

![물품 장바구니 담기](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/c1f558b3-7df3-4e6d-8cd6-a3225f99ed9d)

> **장바구니 물건 구입**

![장바구니 물건 구입](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/b1cb5336-4c33-4af1-938d-0ba664910d08)

## 프로젝트 배포 환경

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/52c9fa45-992e-4076-a4bc-f80dbe32e679)

```
리액트 환경에서 개발 후 카카오 크램폴린 IDE에서 Github 연동을 통해 프로젝트 배포 과정을 거침.
```

## 프로젝트 배포와 관련된 브랜치

```
https://github.com/rktdnjs/step2-FE-kakao-shop2/tree/main
위 링크의 main 브랜치와 관련된 내용이 배포에 사용된다.
개발을 진행해오던 feat-ShinHyoWon 브랜치와 별개로 개발 완료 이후 main 브랜치에서 추가 환경설정 후 배포를 진행하였습니다!
```

## 🎁배포 과정 & 배포시 주의 사항🎁

> **FrontEnd 코드가 포함된 소스 저장소 준비하기(Repo의 main 브랜치가 있어야 배포 가능)**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/663fa4b6-6e76-4cbc-92c8-3e1fad295c18)

> **React App의 Static Path 관련된 설정을 진행한다(중요)**

```
카카오 크램폴린 IDE로 배포할 시 주의할 점 중 하나인 Static Path 관련된 내용
- 카카오 크램폴린으로 배포한 앱은 https://user-app.krampoline.com/[uid]의 형식을 가짐
- 따라서 앱 배포시 URL Path에 대한 처리가 추가적으로 필요함.
- FE에서 사용하는 정적 파일들의 경로 혹은 리액트 라우터와 관련된 Path 부분의 수정이 필요!
- 자세하게 봐주어야 하는 부분은 react-router-dom & window.location.href 파트!
- 위와 같은 링크에는 prefix로 staticServerUri 변수를 정의하여 끼워넣어주어야 한다.
```

```jsx
// 참고로 이번 배포의 경우 카카오 크램폴린 IDE kargo배포시 사용자의 UID를 자동으로 반영하도록 .env 파일이 만들어지도록 사전 설정이 되어있기 때문에 혹여나 나중에 배포할 때는 이 점을 유의하도록 하자.
// https://user-app.krampoline.com/k948de2e6d478a/ 이런식의 staticServerUri + UID 형태
// 아래는 그 예시!
const staticServerUri = process.env.REACT_APP_PATH || "";

<BrowserRouter>
            <GNB/>
            <Routes>
                <Route path={staticServerUri + "/"} element={<HomePage/>}/>
                <Route path={staticServerUri + "/login"} element={<LoginPage/>}/>
                <Route path={staticServerUri + "/register"} element={<RegisterPage/>}/>
                <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage/>}/>
                <Route path={staticServerUri + "/cart"} element={<CartPage/>}/>
                <Route path={staticServerUri + "/order"} element={<OrderPage/>}/>
                <Route path={staticServerUri + "/orders/complete/:id"} element={<OrderCompletePage/>}/>
                <Route path={staticServerUri + "/*"} element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
```

```jsx
// navigate도 변경
const staticServerUri = process.env.REACT_APP_PATH || "";

const logout = () => {
    clearTokens();
    Swal.fire(logoutMessage)
    .then(() => {
        navigate(staticServerUri + "/"); 
    })
}
```

```jsx
// Link를 사용한 부분도 변경
<div className="navbar">
    {/* {email 
    ? <span className="navbarMenu">{email}님 안녕하세요!</span> 
    : <></>} */}
    <Link className="navbarMenu logo" to={staticServerUri + "/"}><LogoIcon /> 쇼핑하기</Link>
    <Link className="navbarMenu cart" to={staticServerUri + "/cart"}>장바구니</Link>
    <div className="divider"></div>
    <Link className="navbarMenu register" to={staticServerUri + "/register"}>회원가입</Link>
    {token 
    ? <Link className="navbarMenu logout" onClick={logout}>로그아웃</Link> 
    : <Link className="navbarMenu login" to={staticServerUri + "/login"}>로그인</Link>}
</div>
```

> **default.conf 파일 생성 및 nginx 설정 진행**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/e78e6edb-dc83-4c50-8f8d-e05e9463aa49)

```
server {
	server_name _;
	
	location / {
		proxy_pass http://localhost:3000;
	}
	location /api/ {
		proxy_pass http://backend-service.default.svc.cluster.local:8080/;
	}
}
```

> **D2Hub 이미지 빌드에 필요한 Dockerfile 생성 및 코드 입력**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/af3dd539-01ad-4db4-ac50-580d4b4b636a)

```
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .

RUN apt-get update && \
	apt-get install -y nginx && \
	rm -rf /var/lib/apt/lists/* && \
	rm /etc/nginx/sites-enabled/default
COPY default.conf /etc/nginx/conf.d/

RUN npm install -g serve

CMD npm run build && service nginx start && serve -s build
```

> **변경된 사항이 있을 경우 main 브랜치(배포 할 브랜치)로 push 후 pull - 빌드 - 배포 반복**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/2e1684a5-9989-4852-bd00-7939d28a34d6)


> **크램폴린 IDE에서 리액트 기반 컨테이너에 자신의 Github 프로젝트를 연동시킴!**

```
주의 : 이 때 자신의 깃허브 프로젝트 이름과 컨테이너의 이름이 동일해야 함
```

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/e49f0782-d78d-4d2b-84d6-6146f6bc5306)

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/01b939aa-42e5-4566-bc44-64c31bbfa3f9)

> **Kargo 탭을 눌러 앱 실행하기 클릭 - 배포하기 클릭**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/90dd0b64-12a8-4f08-a36d-9d5a06a94ebc)

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/f382811d-af6d-408a-b6e6-8e9662979ab5)

```
배포가 전부 끝나게 되면 알림창과 함께 접속할 수 있는 URL을 얻을 수 있다!
```

> **배포후 사이트 접속**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/f63a38ce-e785-470d-a6a8-53717823f02e)

> **배포했던 앱의 로그를 확인해보고 싶을 경우**

```bash
$ kubectl get pods // 배포된 pod의 목록 조회
// 이후 뜨는 화면에서 로그를 확인하고 싶은 pod의 '이름'을 복사해서 다음 명령어 실행
$ kubectl log frontend-5b88bb75f8-dtn61
```

> **그 외 약간의 주의 사항**

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/deffc1de-697b-4943-a58a-ae7043dd16d8)

![image](https://github.com/rktdnjs/step2-FE-kakao-shop2/assets/67001905/f2c47381-5cae-408c-b85c-2fbda4ed0f9e)

```bash
이런식으로 깊게 코드가 연관되어 들어가는 경우, 이에 대한 URL을 정확히 해주어야 한다.
그래야 렌더링 상에 문제가 발생하지 않는다!
```

</div>
</details>

