import echarts from 'echarts'

export function drawLineChart(chartId, des, xData, yData) {
    let dom = document.getElementById(chartId);
    var myChart = echarts.init(dom);
    let option = {
        title: {
            text: des,
            x: "center",
            textStyle: {
                color: "red"
            }
        },
        color: ["#3398DB"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "line" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true }, //目前还不知道有啥用
                dataView: { show: true, readOnly: true }, //数据视图
                magicType: { show: true, type: ["line", "bar"] }, //折线与柱状的切换
                restore: { show: true }, //重置
                saveAsImage: { show: true } //保存为图片
            }
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: xData,
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    }
                },
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    formatter: "{value}",
                    textStyle: {
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "line",
                barWidth: "60%",
                data: yData
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

export function drawPieChart(chartId, des, des2, Data){
    let dom = document.getElementById(chartId)
    var mychart = echarts.init(dom)

    let option = {
        title:{
            text: des,
            x: 'center',
            textStyle:{
                color: 'red'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#fff'
            }
            },
            series: [
                {
                    name: des2,
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '60%'],
                    data: Data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]


    }
    if (option && typeof option === "object") {
        mychart.setOption(option, true);
    }
    window.addEventListener('resize', function () {
        mychart.resize();
    })
}

export function drawTest(domId){
        let dom = document.getElementById(domId);
        let mychart = echarts.init(dom);
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
          var now = new Date((base += oneDay));
          date.push(
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
          );
          data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        var option = {
          tooltip: {
            trigger: "axis",
            position: function(pt) {
              return [pt[0], "10%"];
            }
          },
          title: {
            left: "center",
            text: "大数据量面积图"
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: "none"
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, "100%"]
          },
          dataZoom: [
            {
              type: "inside",
              start: 0,
              end: 10
            },
            {
              start: 0,
              end: 10,
              handleIcon:
                "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
              handleSize: "80%",
              handleStyle: {
                color: "#fff",
                shadowBlur: 3,
                shadowColor: "rgba(0, 0, 0, 0.6)",
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            }
          ],
          series: [
            {
              name: "模拟数据",
              type: "line",
              smooth: true,
              symbol: "none",
              sampling: "average",
              itemStyle: {
                color: "rgb(255, 70, 131)"
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255, 158, 68)"
                  },
                  {
                    offset: 1,
                    color: "rgb(255, 70, 131)"
                  }
                ])
              },
              data: data
            }
          ]
        };
        if (option && typeof option === "object") {
            mychart.setOption(option, true);
        }
        window.addEventListener('resize', function () {
            mychart.resize();
        })
}