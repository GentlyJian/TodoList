<template>
  <div class="taskItem">
    <input type="checkBox" v-model="isChecked" />
    <span :class="{finished: isChecked}">{{task.title}}</span>
    <button class="delete" @click="deleteTask">删除</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TaskItem",
  data() {
    return {
      isChecked: this.task.isFinished
    };
  },
  props: {
    task: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapMutations({
      updateTask: "update_task",
      deleteTask: "delete_task"
    }),
    deleteTask() {
      this.deleteTask({ id: this.task.id });
    }
  },
  watch: {
    isChecked(newValue) {
      console.log(newValue);
      this.updateTask({ id: this.task.id, finish: newValue });
    }
  }
};
</script>

<style scoped>
.taskItem {
  border-bottom: 1px solid #e6edef;
  padding: 5px;
}

.taskItem:hover .delete {
  visibility: visible;
}

.finished {
  text-decoration: line-through;
  color: #888;
}

.delete {
  visibility: hidden;
  float: right;
}
</style>