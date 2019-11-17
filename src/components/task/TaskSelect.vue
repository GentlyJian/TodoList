<template>
  <div class="taskSelect clear-fix">
    <div class="unFinished">未完成任务:{{unFinishiedCount}}</div>
    <div class="taskTab">
      <span
        v-for="(item, index) in title"
        :key="index"
        :class="{active: currentIndex === index}"
        @click="itemClick(index)"
      >{{item}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "TaskSelect",
  data() {
    return {
      title: ["所有任务", "未完成任务", "已完成任务"],
      currentIndex: 0
    };
  },
  methods: {
    ...mapMutations({
      showIndex: "show_index"
    }),
    itemClick(index) {
      this.currentIndex = index;
      this.showIndex({ index });
    }
  },
  computed: {
    ...mapGetters(["unFinishiedCount"])
  }
};
</script>

<style scoped>
.taskSelect {
  margin-top: 15px;
  color: rgb(26, 26, 26);
}
.unFinished {
  color: #bd362f;
  float: left;
  margin-left: 5px;
}
.taskTab {
  float: right;
}
.taskTab span {
  margin: 0 8px;
  cursor: pointer;
  padding: 5px;
}
.taskTab span.active {
  color: #bd362f;
}

.taskTab span:hover {
  border-bottom: 2px solid #bd362f;
}
.clear-fix::after {
  display: table;
  content: "";
  clear: both;
}
</style>