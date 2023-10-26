// composables/useTaskManager.js
import { ref } from 'vue';

export const useTaskManager = () => {
  const tasks = ref([]);

  const addTask = (newTask) => {
    tasks.value.push({ content: newTask, done: false });
  };

  const toggleDone = (index) => {
    tasks.value[index].done = !tasks.value[index].done;
  };

  const removeTask = (index) => {
    tasks.value.splice(index, 1);
  };

  return {
    tasks,
    addTask,
    toggleDone,
    removeTask,
  };
};