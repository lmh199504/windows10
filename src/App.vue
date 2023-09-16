<script setup lang="ts">
import StatusBar from '@/components/StatusBar/index.vue';
import StartMenu from '@/components/StartMenu/index.vue';
import { useSystemStore } from '@/store';
import { storeToRefs } from 'pinia';
const systemStore = useSystemStore();
const { showStart } = storeToRefs(systemStore);
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
