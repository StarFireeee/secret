<template>
  <div class="mapchart" ref="mapcharts"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
const dataJson = require('./services/world.json')
console.log(dataJson)

export default defineComponent({
  setup() {
    const mapcharts = ref(null)
    onMounted(() => {
      // DOM 元素将在初始渲染后分配给 ref
      initChinaMapChart(mapcharts)
    })

    function initChinaMapChart(mapcharts: any) {
      nextTick(() => {
        const mapEchart = echarts.init(mapcharts.value)
        const option = {
          backgroundColor: '#404a59',
          tooltip: {
            show: true,
            alwaysShowContent: false,
            backgroundColor: '#0C121C',
            borderColor: 'rgba(0, 0, 0, 0.16);',
            hideDelay: 100,
            triggerOn: 'mousemove',
            enterable: true,
            textStyle: {
              color: '#DADADA',
              fontSize: '12',
              width: 20,
              height: 30,
              overflow: 'break',
            },
            showDelay: 100,
          },
          // 地图配置
          geo: {
            map: 'city',
            aspectScale: 1, // 长宽比
            zoom: 1,
            zlevel: 10,
            roam: true,
            label: {
              // 通常状态下的样式
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                },
                areaColor: '#013C62',
                shadowColor: '#01273F',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
              },
              // 鼠标放上去的样式
              emphasis: {
                textStyle: {
                  color: '#fff',
                },
              },
            },
            // 地图区域的样式设置
            itemStyle: {
              normal: {
                borderColor: 'RGBA(3, 223, 224, 1)',
                borderWidth: 1,
                // shadowColor: 'rgba(0,54,255, 0.3)',
                // shadowBlur: 10,
                areaColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 500,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'RGBA(24, 117, 147, 1)', // 0% 处的颜色
                    },
                    {
                      offset: 0.3,
                      color: 'RGBA(19, 95, 123, 1)', // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: 'RGBA(17, 86, 114, 1)', // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'RGBA(13, 71, 98, 1)', // 100% 处的颜色
                    },
                  ],
                  global: true,
                  // globalCoord: false // 缺省为 false
                },
              },
              // 鼠标放上去高亮的样式
              emphasis: {
                areaColor: 'RGBA(28, 181, 117, 1)', //
                borderWidth: 1,
                borderColor: 'RGBA(30, 236, 117, 1)',
              },
            },
            selectedMode: 'single',
          },
        }
        echarts.registerMap('city', dataJson)
        // console.log(option);
        mapEchart.setOption(option)
        mapEchart.on('click', (data) => {
          console.log(data)
          if (data.componentType === 'series') {
            console.log(1)
          }
        })
      })
    }
    return {
      mapcharts,
    }
  },
})
</script>

<style lang="less" scoped>
.mapchart {
  width: 800px;
  height: 800px;
}
</style>
