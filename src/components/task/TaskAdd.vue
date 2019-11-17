<template>
  <div class="taskAdd">
    <div class="title">添加任务</div>
    <div>
      <input type="text" placeholder="请输入任务，按回车添加" v-model="title" @keyup.enter="addTask" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as task from "../../store/type";
export default {
  name: "TaskAdd",
  data() {
    return {
      title: null
    };
  },
  methods: {
    ...mapMutations({
      addtask: task.ADD_TASK
    }),
    addTask() {
      //   获取title
      const title = this.title && this.title.trim();
      // 判断用户是否输入
      if (title && title != "") {
        // 创建新任务对象
        const firseE = this.$store.state.tasks[0];
        const id = firseE ? firseE.id + 1 : 0;
        const task = {
          title: this.title,
          id,
          isFinished: false
        };
        this.addtask({ task });
        this.title = null;
      } else {
        alert("请输入任务名称");
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0;
}

input {
  width: 100%;
  height: 35px;
  padding-left: 8px;
  box-sizing: border-box;
}
</style>