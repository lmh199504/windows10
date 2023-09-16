<script setup lang="ts">
import StatusBar from '@/components/StatusBar/index.vue';
import StartMenu from '@/components/StartMenu/index.vue';
import { useSystemStore } from '@/store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import gsap from 'gsap';

const systemStore = useSystemStore();
const { showStart } = storeToRefs(systemStore);

onMounted(() => {
	// 去除开机动画
	setTimeout(() => {
		gsap.to('#power-on', {
			opacity: 0,
			duration: 1,
			onComplete: () => {
				document.querySelector('#power-on')?.remove();
			},
		});
	}, 5000);
});
</script>

<template>
	<div class="content">
		<div class="desktop"></div>
		<!-- 状态栏 -->
		<StatusBar />
		<!-- 开始菜单 -->
		<StartMenu v-if="showStart" />
	</div>
</template>

<style scoped lang="less">
.content {
	height: 100vh;
	display: flex;
	flex-direction: column;

	// filter: brightness(0.5);
	.desktop {
		flex: 1;
	}
}
</style>
