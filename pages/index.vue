<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addTask"
      />
      <button @click="handleAddTask">Add</button>
    </div>

    <div class="tasks">
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
        @toggle-done="toggleDone(index)"
        @remove-task="removeTask(index)"
      />
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue';
const { tasks, addTask, toggleDone, removeTask } = useTaskManager();
  const newTask = ref('');

  const handleAddTask = () => {
    if (newTask.value.trim() !== '') {
      addTask(newTask.value);
      newTask.value = '';
    }
  };
</script>
