<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# 스타일 재정의하기

`newtil-css`의 스타일을 여러분의 프로젝트에 맞게 스타일을 커스터마이징하는 알려드릴 차례입니다. 🚀

### 변수를 나만의 스타일로

아래 예시를 살펴보세요:

```html{1}
<div class="padding:5 background-color:main-1 border-radius: color:base-1">
  Hello World
</div>
```

<ExampleSection>
  <template #h>스타일 재정의하기</template>
  <div class="padding:5 bg-color:main-1 border-radius:5 color:base-1">Hello World</div>
</ExampleSection>

이 Hello World 예시에는 다음과 같은 스타일이 적용되어 있습니다.

-   5단계 패딩 : `padding:5`
-   1단계 메인 배경 색 : `background-color:main-1`
-   5단계 모서리 둥글기 : `border-radius:5`

`newtil-css`는 이런 단계를 미리 정의하고 [CSS 변수](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)와 [계단식 및 상속](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)을 통해 간편하게 디자인을 조절할 수 있습니다.

```css
:root {
    /* 이런 변수들이 준비되어있습니다 */
    --color-main-1: #99c842;
    --color-main-2: #85b132;
    --color-main-3: #759d2a;
}
```

이제 여러분의 프로젝트에 어떻게 적용할 수 있는지 알아보겠습니다.

## CSS 사용자 정의하기

프로젝트에 맞게 스타일을 맞춤 설정하려면, 다음과 같이 `root.css` 파일을 생성하고 추가합니다.
:::warning
파일명은 사용자의 편의에 따라 자유롭게 변경할 수 있습니다.
:::

```css
/* css/root.css */
:root {
    /* main 테마 색상을 원하는 색상으로 설정했습니다 */
    --color-main-1: #3b5bdb;
    --color-main-2: #4263eb;
    --color-main-3: #4c6ef5;

    /* 추가로 필요한 스타일을 선언하세요 */
}
```

그리고 HTML 문서의 head 섹션에 `root.css`를 다음과 같이 추가합니다.

```html {11}
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/nutil-css@latest/dist/style.css" />
        <link href="css/root.css" type="text/css" rel="stylesheet" />
    </head>
</html>
```

이제 `root.css` 파일에 원하는 스타일을 추가하여 `newtil-css` 라이브러리를 프로젝트에 맞게 맞춤 설정할 수 있습니다.

아래의 각 항목을 참고하여 커스터마이징을 진행해보세요.

-   [Theme colors](../variables/theme-colors.md)
-   [border-color](../variables/border-color.md)
-   [border-width](../variables/border-width.md)
-   [border-radius](../variables/border-radius.md)
-   [box-shadow](../variables/box-shadow.md)
-   [font-size](../variables/font-size.md)
-   [font-weight](../variables/font-weight.md)
-   [gap](../variables/gap.md)
-   [opacity](../variables/opacity.md)
-   [order](../variables/order.md)
-   [z-index](../variables/z-index.md)

## 간격

`gap` 변수는 여러 곳에서 사용되는 간격을 정의하는데 사용됩니다.

예를 들어 `padding`, `margin`, `width`, `height` 등에 적용될 수 있습니다.

`4px` 간격으로 10단계가 제공되며, 필요에 따라 단계를 재정의 할 수 있습니다.

```css
:root {
    --gap-0: 0rem; /* 0px */
    --gap-1: 0.25rem; /* 4px */
    --gap-2: 0.5rem; /* 8px */
    --gap-3: 0.75rem; /* 12px */
    --gap-4: 1rem; /* 16px */
    --gap-5: 1.25rem; /* 20px */
    --gap-6: 1.5rem; /* 24px */
    --gap-7: 1.75rem; /* 28px */
    --gap-8: 2rem; /* 32px */
    --gap-9: 2.25rem; /* 36px */
    --gap-10: 2.5rem; /* 40px */
    --gap-full: 9999px;
}
```

중간 단계가 필요할 경우 다음과 같이 추가할 수 있습니다.

```css
/* root.css */
:root {
    --gap-1-5: 0.375rem; /* gap-1과 gap-2의 중간 단계 */
}
```
