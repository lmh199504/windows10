import type { ISystem } from '@/model/system';
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
	state: (): ISystem => ({
		showStart: false,
		statusBarHeight: 40,
	}),
	actions: {
		setWindowStart(visible: boolean) {
			this.showStart = visible;
		},
		toggleWindowStart() {
			this.showStart = !this.showStart;
		},
	},
});
