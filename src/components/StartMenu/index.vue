<template>
	<div class="start-menu" :style="style" ref="startMenu">菜单</div>
</template>
<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { useSystemStore } from '@/store';
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
const systemStore = useSystemStore();
const { statusBarHeight } = storeToRefs(systemStore);
const startMenu = ref<HTMLDivElement>();

const style = computed(() => {
	return {
		bottom: statusBarHeight.value + 'px',
	};
});

const handleClick = (e: Event) => {
	console.log(e.target);
};
onMounted(() => {
	gsap.fromTo(
		startMenu.value as object,
		{ bottom: '-40px' },
		{ bottom: statusBarHeight.value + 'px', duration: 0.2 }
	);
	document.addEventListener('click', handleClick);
});
onUnmounted(() => {
	document.removeEventListener('click', handleClick);
});
</script>
<style scoped lang="less">
.start-menu {
	position: fixed;
	left: 0;
	min-height: 40vh;
	background-color: var(--start-menu-bg);
	min-width: 700px;
	z-index: 9;
}
</style>
