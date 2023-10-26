<!-- components/Task.vue -->
<template>
	<div :class="`task ${task.done ? 'is-complete' : ''}`">
		<div class="content">{{ task.content }}</div>
		<div class="buttons">
			<button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeTask" class="delete">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
  props: ['task', 'index'],
  methods: {
    toggleDone() {
      this.$emit('toggle-done');
    },
    removeTask() {
      this.$emit('remove-task');
    },
  },
};
</script>