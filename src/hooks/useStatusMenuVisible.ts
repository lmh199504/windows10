import {
	CSSProperties,
	ComputedRef,
	computed,
	onMounted,
	onUnmounted,
	ref,
} from 'vue';
import { useSystemStore } from '@/store';
import { storeToRefs } from 'pinia';
import type { StatusMenuKey } from '@/model/system';
import gsap from 'gsap';

const useStatusMenuVisible = (key: StatusMenuKey) => {
	const dialogRef = ref<HTMLDivElement>();
	const systemStore = useSystemStore();
	const { statusBarHeight } = storeToRefs(systemStore);
	const style: ComputedRef<CSSProperties> = computed(() => {
		return {
			bottom: statusBarHeight.value + 'px',
		};
	});
	const handleClick = (e: Event) => {
		if (systemStore[key] && !dialogRef.value?.contains(e.target as Node)) {
			systemStore.toggleKey(key);
		}
	};
	onMounted(() => {
		gsap.fromTo(
			dialogRef.value as object,
			{ bottom: '-40px' },
			{ bottom: statusBarHeight.value + 'px', duration: 0.2 }
		);
		setTimeout(() => {
			document.addEventListener('click', handleClick);
		});
	});
	onUnmounted(() => {
		document.removeEventListener('click', handleClick);
	});
	return {
		style,
		dialogRef,
	};
};

export default useStatusMenuVisible;
