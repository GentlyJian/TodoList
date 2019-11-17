<template>
  <div class="taskItem">
    <input type="checkbox" v-model="isChecked" />
    <span :class="{finished: isChecked}">{{task.title}}</span>
    <button class="delete" @click="deleteTask1">删除</button>
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
      default: {}
    }
  },
  mounted() {
      console.log(this.task.isFinished);
      console.log(this.isChecked);
  },
  methods: {
    ...mapMutations({
      updateTask: "update_task",
      deleteTask: "delete_task"
    }),
    deleteTask1() {
      console.log(this.task.id);
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