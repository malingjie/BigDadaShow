<template>
  <div class="main">
    <canvas></canvas>
    <banner-top></banner-top>
    <div id="line_one"></div>
    <div id="pie_one"></div>
    <div id="pie_two"></div>
    <div id="line_two"></div>
  </div>
</template>

<script>
import Banner from "../../components/banner/banner";
import { drawLineChart, drawPieChart , drawTest} from "../../utils/drawEcharts";
import animate  from "../../utils/drawDots";
export default {
  data() {
    return {};
  },
  components: {
    "banner-top": Banner
  },
  methods: {
    getData() {
      this.$axios
        .get("findDataByHour", {
          params: {
            devicename: "OA系统Web服务器",
            oid: "Tomcat总请求数",
            t: "2019-03-28"
          }
        })
        .then(res => {
          let dataD = res.data;
          let timeb = [];
          let numb = [];
          for (let i in dataD) {
            timeb.push(dataD[i].time + "时");
          }
          for (let j in dataD) {
            numb.push(dataD[j].num);
          }
          drawLineChart("line_one", "Tomcat总请求数", timeb, numb);
        });

      this.$axios
        .get("findDataByDay", {
          params: {
            devicename: "OA系统Oracle服务器",
            oid: "Oracle当前连接数",
            t: "2019-03"
          }
        })
        .then(res => {
          let dataD = res.data;
          let timeb = [];
          let numb = [];
          let brower = [];
          for (let i in dataD) {
            timeb.push(dataD[i].time);
          }
          for (let j in dataD) {
            numb.push(dataD[j].num);
          }
          for (let m = 0; m < timeb.length; m++) {
            let obj = {};
            for (var n = 0; n < numb.length; n++) {
              if (m == n) {
                obj.name = timeb[m];
                obj.value = numb[n];
                brower.push(obj);
              }
            }
          }
          drawPieChart(
            "pie_one",
            "每天Oracle当前连接数占比图",
            "Oracle当前连接数",
            brower
          );
        });

      this.$axios
        .get("warningMonth", {
          params: {
            t: "2019-03"
          }
        })
        .then(res => {
          let dataM2 = res.data;
          var level2 = [];
          var num2 = [];
          var brower2 = [];
          for (var i in dataM2) {
            level2.push(dataM2[i].warnclass);
          }
          for (var j in dataM2) {
            num2.push(dataM2[j].number);
          }
          for (var i = 0; i < level2.length; i++) {
            var obj = {};
            for (var j = 0; j < num2.length; j++) {
              if (i == j) {
                obj.name = level2[i];
                obj.value = num2[j];
                brower2.push(obj);
              }
            }
          }
          drawPieChart("pie_two", "告警级别数量统计", "告警级别", brower2);
        });

        drawTest("line_two");


    }
  },
  mounted() {
    this.getData();
    animate("canvas");
  }
};
</script>

<style lang = 'less' scoped>
canvas{
  position: absolute;
  left: 0;
}
.main {
  width: 100vw;
  height: 100vh;
  background: url(../../assets/imgs/homeB.jpg) no-repeat;
  background-size: cover;
  color: white;
}
#line_one {
  width: 30%;
  height: 40%;
  float: left;
  left: 3%;
  margin-top: 20px;
}
#pie_one {
  width: 30%;
  height: 40%;
  float: left;
  left: 8%;
  margin-top: 20px;
}
#pie_two {
  width: 30%;
  height: 40%;
  float: left;
  left: 8%;
  margin-top: 20px;
}
#line_two{
  width: 100%;
  height: 40%;
  float: left;
  margin-top: 20px;
}
</style>