<template>
	<div class="sidebar">
		<el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index">
						<template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
						<el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}</el-menu-item>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index">
						<i :class="item.icon"></i>{{ item.title }}
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				items: [
					{
					    icon: 'el-icon-setting',
					    index: '1',
					    title: '系统用户管理',
					    subs: [
					    	{
					    		index: 'table',
					    		title: '表格'
					    	},
					    	{
					    		index: 'form',
					    		title: '表单'
					    	},
					    	{
					    		index: 'transfer',
					    		title: '穿梭框'
					    	}
					    ]
					},
					{
					    icon: 'el-icon-menu',
					    index: '2',
					    title: '应用系统管理',
					    subs: [
					    	{
					    		index: 'charts',
					    		title: '图表'
					    	}
					    ]
					},
					{
					    icon: 'el-icon-date',
					    index: '3',
					    title: '系统日志管理'
					},
					{
					    icon: 'el-icon-star-on',
					    index: '4',
					    title: '个人信息管理'
					},
					{
					    icon: 'el-icon-upload',
					    index: '5',
					    title: '其他信息管理'
					}
				]
			}
		},
		computed: {
			onRoutes(){
				return this.$route.path.replace('/','');
			}
		}
	}
</script>
<style scoped>
	.sidebar{
	    display: block;
	    position: absolute;
	    width: 250px;
	    left: 0;
	    top: 70px;
	    bottom:0;
	    background: #2E363F;
	}
	.sidebar > ul {
	    height:100%;
	}
</style>