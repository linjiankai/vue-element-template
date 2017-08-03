<template>
	<div class="charts">
		<div class="crumbs">
		    <el-breadcrumb separator="/">
		        <el-breadcrumb-item><i class="el-icon-date"></i> 应用系统管理</el-breadcrumb-item>
		        <el-breadcrumb-item>图表</el-breadcrumb-item>
		    </el-breadcrumb>
		</div>
		<div id="echats"></div>
	</div>
</template>

<script>
	// import echarts from 'echarts'
	import echarts from 'echarts/lib/echarts';
	import 'echarts/lib/chart/bar';
	import 'echarts/lib/chart/line';
	import 'echarts/lib/chart/pie';
	import 'echarts/lib/component/legend';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/title';
	  export default {
	    data() {
	      return {
	        chart: null,
	        opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
	        opinionData: [
	          	{value:26, name:'学习氛围差'},
	          	{value:31, name:'学习氛围一般'},
	          	{value:8, name:'学习氛围很好'}
	        ]
	      }
	    },
	    methods: {
	      drawPie (id) {
	        this.chart = echarts.init(document.getElementById(id))
	        this.chart.setOption({
	          title: {
				text: '寝室学习氛围情况调查',
				left: 'center',
				top: 10,
				textStyle: {
					fontSize: 24,
					fontFamily: 'Helvetica',
					fontWeight: 400
				}
	          },
	          tooltip: {
	            trigger: 'item',
	            formatte: "{b}: {c} ({d}%)"
	          },
	          toolbox: {
	            feature: {
	              saveAsImage: {},
	              dataView: {}
	            },
	            right: 15,
	            top: 10
	          },
	          legend: {
	              orient: 'vertical',
	              left: 5,
	              top: 10,
	              data: this.opinion,
	          },
	          series: [
	            {
	              name: '寝室学习氛围',
	              type: 'pie',
	              radius: ['50%', '70%'],
	              center: ['50%', '60%'],
	              avoidLabelOverlap: false,
	              label: {
	                emphasis: {
	                  show: true,
	                  textStyle: {
	                    fontSize: '24',
	                    fontWeight: 'bold'
	                  }
	                }
	              },
	              labelLine: {
	                normal: {
	                  show: false
	                }
	              },
	              data: this.opinionData,
	              itemStyle: {
	                emphasis: {
	                  shadowBlur: 10,
	                  shadowOffset: 0,
	                  shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	              }
	            }
	          ]
	        })
	      }
	    },
	    mounted() {
	      	this.$nextTick(function() {
	        	this.drawPie('echats')
	      	})
	    }
	  }
	</script>
<style scoped>
	#echats {
		width: 600px;
		height: 400px;
		border: solid #D01257 1px;
		box-shadow: 0 0 8px #FB90B7;
		border-radius: 10px;
	}   
</style>