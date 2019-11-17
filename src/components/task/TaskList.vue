<template>
  <div class="taskList">
    <div class="title">任务列表</div>
    <div v-if="showTasks.length">
      <!-- 这里的key值不能绑定index ,不然勾选的位置不会动 -->
      <task-item class="content" v-for="(item, index) in showTasks" :key="item.id" :task="item"></task-item>
    </div>
    <div class="placeholder" v-else>{{showInfo}}</div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
import { mapGetters, mapState } from "vuex";
export default {
  name: "TaskList",
  data() {
    return {};
  },
  computed: {
    ...mapState(["showIndex"]),
    // ...mapState({
    //     showIndex: state => state.showIndex
    // }),
    ...mapGetters(["showTasks"]),
    showInfo() {
      switch (this.showIndex) {
        case 0:
          return "未添加任务, 请创建新的任务!!!";
        case 1:
          return "没有未完成的任务";
        case 2:
          return "没有已经完成任务";
      }
    }
  },
  components: {
    TaskItem
  }
};
</script>
    
<style scoped>
.title {
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0;
}

.content {
  background-color: #fff;
  border-radius: 5px;
  padding: 8px;
}

.placeholder {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  color: #bd362f;
}
</style>