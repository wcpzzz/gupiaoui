<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view v-for="(item,index) in data" :key="index">
			<view>
				{{item.atom_ID}}
				{{item.atom_NAME}}
				{{item.atom_SUMMARY}}
			</view>
		</view>
	</view>
</template>

<script>
	import {gupiao} from '@/common/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				data:[],
			}
		},
		onLoad() {

		},
		methods: {

		},
		onLoad() {
			gupiao().then((res)=> this.data=res).catch(()=>console.log('gg'))
			console.log(this.data)
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		color: #8f8f94;
	}
</style>
