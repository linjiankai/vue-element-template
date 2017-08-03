<template>
	<div class="table">
		<div class="crumbs">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item><i class="el-icon-menu"></i> 系统用户管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>表格</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="handle-box">
			<el-select v-model="select_cate" placeholder="请选择省份" class="handle-select mr10">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-input v-model="select_word" placeholder="查询姓名或地址" class="handle-input mr10"></el-input>
			<el-button type="primary" icon="search" @click="search">搜索</el-button>
			<el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
		</div>
		<el-table ref="multipleTable" :data="elTableData" border style="width: 100%" @selection-change="handleSelectionChange">
		    <el-table-column type="selection" width="55"></el-table-column>
		    <el-table-column prop="date" label="日期" width="150" sortable></el-table-column>
		    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
		    <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
		    <el-table-column label="操作" width="180" align="center">
				<template scope="scope">
					<el-button size="small"
					  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="small" type="danger"
					  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
		    </el-table-column>
		</el-table>
		<div class="pagination">
			<el-pagination
			   layout="prev, pager, next"
			   :total="1000"
			   @current-change ="handleCurrentChange">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				options: [{
					value: '1',
					label: '广东省'
				},{
					value: '2',
					label: '江苏省'
				}],
				select_cate: '',
				select_word: '',
				url: './static/vuetable.json',
				cur_page: 1,
				tableData: [],
				multipleSelection: [],
				del_list: [],
                is_search: false
			}
		},
		created(){
            this.getData();
        },
        computed: {
        	elTableData(){
        		const self = this;
        		return self.tableData.filter(function(d){
        		    let is_del = false;
        		    for (let i = 0; i < self.del_list.length; i++) {
        		        if(d.name === self.del_list[i].name){
        		            is_del = true;
        		            break;
        		        }
        		    }
        		    if(!is_del){
        		        if(d.address.indexOf(self.select_cate) > -1 && 
        		            (d.name.indexOf(self.select_word) > -1 ||
        		            d.address.indexOf(self.select_word) > -1)
        		        ){
        		            return d;
        		        }
        		    }
        		})
        	}
        },
        methods: {
        	getData(){
        		let self = this;
        		if(process.env.NODE_ENV === 'development'){
        		    self.url = '/ms/table/list';
        		};
        		self.$axios.post(self.url, {page:self.cur_page})
        		.then((res) => {
        		    self.tableData = res.data.list;
        		    // console.log(self.tableData)
        		})
        		.catch((res) => {
        			console.log(res)
        		});
        		// self.$axios.get('./static/vuetable.json').then((res) => {
        		// 		console.log(res)
        		// })
        	},
        	handleSelectionChange(val){
        		this.multipleSelection = val;
        	},
        	handleEdit(index, row){
        		this.$message('编辑第'+(index+1)+'行');
        	},
        	handleDelete(index, row){
        		const self = this;
        		self.del_list = self.del_list.concat(row);
        		self.$message.error('删除了'+ row.name);
        	},
        	formatter(row, column, cellValue){
        		return row.address;
        	},
        	handleCurrentChange(val){
        		this.cur_page = val;
        		this.getData();
        	},
        	search(){
                this.is_search = true;
            },
            delAll(){
            	const self = this,
            	    length = self.multipleSelection.length;
            	let str = '';
            	self.del_list = self.del_list.concat(self.multipleSelection);
            	for (let i = 0; i < length; i++) {
            	    str += self.multipleSelection[i].name + ' ';
            	}
            	self.$message.error('删除了'+str);
            	self.multipleSelection = [];
            }
        }
	}
</script>

<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>