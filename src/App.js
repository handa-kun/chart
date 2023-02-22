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
      textStyle: {
        fontSize: '5px'
      },

      formatter: function (params) {
        let title = params.map(t => t.axisValue).slice(0, 1);
        let it = params[0].value;
        let cp = params[1].value;
        let amount = it + cp;
        let it2 = params[2].value;
        let cp2 = params[3].value;
        let amount2 = it2 + cp2;
        let percent = (amount / amount2) * 100;
        let fixed = (number) => number.toFixed(0);
        let percentFixed = fixed(percent);
        let percent2 = 100 - percentFixed;
        return `<b>${title} 2023</b><br>
                <b>В программе   ${percentFixed}% | ${amount} шт</b><br>
                Проекты ИТ  <b>${it} шт</b><br>
                Проекты ЦП  <b>${cp} шт</b><br>   
                <b>Вне программ ${percent2}% | ${amount2} шт</b><br>
                Проекты ИТ  <b>${it2} шт</b><br>
                Проекты ЦП  <b>${cp2} шт</b>`
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
        data: data1,
        color: '#56B9F2',
      },
      {
        name: 'В программе ИТ',
        type: 'bar',
        stack: 'one',
        data: data2,
        color: '#0078D2',
      },
      {
        name: 'Вне программ ЦП',
        type: 'bar',
        stack: 'two',
        data: data3,
        color: '#22C38E',
      },
      {
        name: 'Вне программ ИТ',
        type: 'bar',
        stack: 'two',
        data: data4,
        color: '#00724C',
      }
    ]
  };
  return <ReactEcharts option={option} />;
}
export default App;