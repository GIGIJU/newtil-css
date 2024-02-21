<script setup>
import iconNameList from "../shared/icon-list.json";
</script>

# 아이콘 목록
`Newtil CSS`에서 사용 가능한 아이콘 목록입니다.
아이콘들은 [phosphor-icons](https://phosphoricons.com/)에서 제공하는 아이콘을 기반으로 합니다.


<table>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">클래스</th>
      <th scope="col">아이콘</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(iconName, index) in iconNameList" :key="iconName">
      <td>{{index + 1}}</td>
      <td><code>icon icon:{{iconName}}</code></td>
      <td><span :class="`icon icon:${iconName}`">{{iconName}}</span></td>
    </tr>
  </tbody>
</table>