<template>
  <div id="app">
    <task-head></task-head>
    <task-add></task-add>
    <task-select></task-select>
    <task-list></task-list>
  </div>
</template>

<script>
import TaskHead from 'components/task/TaskHead'
import TaskAdd from 'components/task/TaskAdd'
import TaskSelect from 'components/task/TaskSelect'
import TaskList from 'components/task/TaskList'


export default {
  name: 'app',
  components: {
    TaskHead,
    TaskAdd,
    TaskSelect,
    TaskList
  }
}
</script>

<style scoped>

</style>

