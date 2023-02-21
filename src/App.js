import './App.css';
import ReactEcharts from 'echarts-for-react';

function App() {

  let data = [
    { period: "Март", name: "В программе ЦП", value: 120 },
    { period: "Апрель", name: "В программе ЦП", value: 120 },
    { period: "Май", name: "В программе ЦП", value: 120 },
    { period: "Июнь", name: "В программе ЦП", value: 120 },
    { period: "Июль", name: "В программе ЦП", value: 120 },
    { period: "Август", name: "В программе ЦП", value: 120 },
    { period: "Сентябрь", name: "В программе ЦП", value: 120 },
    { period: "Март", name: "В программе ИТ", value: 220 },
    { period: "Апрель", name: "В программе ИТ", value: 182 },
    { period: "Май", name: "В программе ИТ", value: 191 },
    { period: "Июнь", name: "В программе ИТ", value: 234 },
    { period: "Июль", name: "В программе ИТ", value: 290 },
    { period: "Август", name: "В программе ИТ", value: 330 },
    { period: "Сентябрь", name: "В программе ИТ", value: 310 },
    { period: "Март", name: "Вне программ ЦП", value: 620 },
    { period: "Апрель", name: "Вне программ ЦП", value: 732 },
    { period: "Май", name: "Вне программ ЦП", value: 701 },
    { period: "Июнь", name: "Вне программ ЦП", value: 734 },
    { period: "Июль", name: "Вне программ ЦП", value: 1090 },
    { period: "Август", name: "Вне программ ЦП", value: 1130 },
    { period: "Сентябрь", name: "Вне программ ЦП", value: 1120 },
    { period: "Март", name: "Вне программ ИТ", value: 120 },
    { period: "Апрель", name: "Вне программ ИТ", value: 132 },
    { period: "Май", name: "Вне программ ИТ", value: 101 },
    { period: "Июнь", name: "Вне программ ИТ", value: 134 },
    { period: "Июль", name: "Вне программ ИТ", value: 290 },
    { period: "Август", name: "Вне программ ИТ", value: 230 },
    { period: "Сентябрь", name: "Вне программ ИТ", value: 220 }
  ];

  const data1 = data.filter(v => {
    if (v.name === 'В программе ЦП') {
      return v.value
    };
  })

  const data2 = data.filter(v => {
    if (v.name === 'В программе ИТ') {
      return v.value
    };
  })

  const data3 = data.filter(v => {
    if (v.name === 'Вне программ ЦП') {
      return v.value
    };
  })

  const data4 = data.filter(v => {
    if (v.name === 'Вне программ ИТ') {
      return v.value
    };
  })


  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    },
  };

  const option = {
    title: {
      text: 'Проекты в программах и вне программ',
      subtext: 'Сумма и процентное соотношение проектов, находящихся в программах и вне программ',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {

      }
    },
    legend: {
      data: ['В программе ЦП', 'В программе ИТ', 'Вне программ ЦП', 'Вне программ ИТ'],
      bottom: '10px',
      left: '10%',
      icon: 'circle'
    },
    brush: {
      toolbox: [],
      xAxisIndex: 0
    },


    xAxis: {
      data: ["Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь"],
      axisLine: {
        show: false
      }
    },
    yAxis: {},
    series: [
      {
        name: 'В программе ЦП',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data1,
        color: '#56B9F2',
      },
      {
        name: 'В программе ИТ',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data2,
        color: '#0078D2',
      },
      {
        name: 'Вне программ ЦП',
        type: 'bar',
        stack: 'two',
        emphasis: emphasisStyle,
        data: data3,
        color: '#22C38E',
      },
      {
        name: 'Вне программ ИТ',
        type: 'bar',
        stack: 'two',
        emphasis: emphasisStyle,
        data: data4,
        color: '#00724C',
      }
    ]
  };
  return <ReactEcharts option={option} />;
}
export default App;