$(function() {
    echarts_1();
    echarts_2();
    echarts_3();
    map();
    echarts_4();
    echarts_5();
    echarts_6();

    function echarts_1() {
        var myChart = echarts.init(document.getElementById('echarts_1'));

        var data = [
            {value: 70473.6, name: '第一产业'},
            {value: 380670.6, name: '第二产业'},
            {value: 535371.0, name: '第三产业'}
        ];

        option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return params.name + ' : ' + "<span style='color:rgba(37, 243, 230)'>" + params.value + "</span> 亿元";
                }
            },
            color: ['#af89d6', '#4ac7f5', '#0089ff', '#f36f8a', '#f5c847'],
            legend: {
                x: '80%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12,
                itemWidth: 10,
                itemHeight: 10,
                data: ['第一产业', '第二产业', '第三产业'],
                textStyle: {
                    color: [],
                    fontStyle: {
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12
                    }
                }
            },
            series: [{
                name: '行业占比',
                type: 'pie',
                clockwise: false,
                minAngle: 20,
                center: ['45%', '50%'],
                radius: [30, 55],
                avoidLabelOverlap: true,
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 2,
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%',
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_2() {
        var myChart = echarts.init(document.getElementById('echarts_2'));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return params.name + ' : ' + "<span style='color:rgba(37, 243, 230)'>" + params.value + "</span> 亿元";
                },
            },
            legend: {
                x: 'center',
                y: '2%',
                data: ['西北', '东北', '港澳台', '西南', '华北', '中南', '华东'],
                icon: 'circle',
                textStyle: {
                    color: '#fff'
                }
            },
            calculable: true,
            series: [{
                name: '车型',
                type: 'pie',
                startAngle: 0,
                radius: [50, 140],
                center: ['50%', '20%'],
                roseType: 'area',
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 2,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 375472.59,
                    name: '华东',
                    itemStyle: {
                        normal: {
                            color: '#81ecec'
                        }
                    }
                },
                {
                    value: 274056.77,
                    name: '中南',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },
                {
                    value: 118819.29,
                    name: '华北',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 111912.5,
                    name: '西南',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 66414.74,
                    name: '港澳台',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 54823.01,
                    name: '东北',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                {
                    value: 50248.95,
                    name: '西北',
                    itemStyle: {
                        normal: {
                            color: '#ff9ff3'
                        }
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }]
            }]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    }

    function echarts_3() {
        var myChart = echarts.init(document.getElementById('echarts_3'));

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                    return params[0].name + ' : ' + "<span style='color:rgba(37, 243, 230)'>" + params[0].data + "</span> 亿元";
                },
            },
            grid: {
                left: '3%',
                right: '3%',
                top: '8%',
                bottom: '5%',
                containLabel: true
            },
            color:['#a4d8cc','#25f3e6'],
            calculable: true,
            xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize: 12,
                    },
                    lineStyle: {
                        color: '#2c3459'
                    }
                },
                data: ['1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
            }],
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                type: 'line',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [{
                            offset: 0,
                            color: '#25f3e6'
                        },{
                            offset: 1,
                            color: 'rgba(68, 175, 240, 0.2)'
                        }], false)
                    }
                },
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [679.1, 824.4, 859.8, 911.6, 1030.7, 1071.4, 1312.3, 1447.5, 1470.1, 1232.3, 1162.2, 1248.3, 1469.9, 1734, 1888.7, 1794.2, 1744.1, 1962.2, 2279.7, 2456.9, 2552.4, 2756.2, 2827.7, 3039.5, 2988.6, 3250, 3678.7, 4100.5, 4587.6, 4935.8, 5373.4, 6020.9, 7278.5, 9098.9, 10376.2, 12174.6, 15180.4, 17179.7, 18872.9, 22005.6, 27194.5, 35673.2, 48637.5, 61339.9, 71813.6, 79715, 85195.5, 90564.4, 100280.1, 110863.1, 121717.4, 137422, 161840.2, 187318.9, 219438.5, 270092.3, 319244.6, 348517.7, 412119.3, 487940.2, 538580, 592963.2, 643563.1, 688858.2, 746395.1, 832035.9, 919281.1, 986515.2]
            }]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    }

    function map() {
        var myChart = echarts.init(document.getElementById('map'));

        gdp_data = {"years": ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
         "provinces":  ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '香港', '澳门', '台湾'],
         "gdp": [[3161.66, 1701.88, 5043.96, 1845.72, 1539.12, 4669.06, 1951.51, 3151.4, 4771.17, 8553.69, 6141.03, 2902.09, 3764.54, 2003.07, 8337.47, 5052.99, 3545.39, 3551.49, 10741.25, 2080.04, 526.82, 1791.0, 3928.2, 1029.92, 2011.19, 117.8, 1804.0, 1052.88, 263.68, 295.02, 1363.56, 11154.76, 436.74, 21429.84], [3707.96, 1919.09, 5516.76, 2029.53, 1713.81, 5033.08, 2120.35, 3390.1, 5210.12, 9456.84, 6898.34, 3246.71, 4072.85, 2175.68, 9195.04, 5533.01, 3880.53, 3831.9, 12039.25, 2279.34, 579.17, 1976.86, 4293.49, 1133.27, 2138.31, 139.16, 2010.62, 1125.37, 300.13, 337.44, 1491.6, 11018.32, 443.05, 19426.19], [4315.0, 2150.76, 6018.28, 2324.8, 1940.94, 5458.22, 2348.54, 3637.2, 5741.03, 10606.85, 8003.67, 3519.72, 4467.55, 2450.48, 10275.5, 6035.48, 4212.82, 4151.54, 13502.42, 2523.73, 642.73, 2232.86, 4725.01, 1243.43, 2312.82, 162.04, 2253.39, 1232.03, 340.65, 377.16, 1612.65, 10819.82, 476.31, 19973.37], [5007.21, 2578.03, 6921.29, 2855.23, 2388.38, 6002.54, 2662.08, 4057.4, 6694.23, 12442.87, 9705.02, 3923.11, 4983.67, 2807.41, 12078.15, 6867.7, 4757.45, 4659.99, 15844.64, 2821.11, 713.96, 2555.72, 5333.09, 1426.34, 2556.02, 185.09, 2587.72, 1399.83, 390.2, 445.36, 1886.35, 10480.62, 532.25, 20601.44], [6033.21, 3110.97, 8477.63, 3571.37, 3041.07, 6672.0, 3122.01, 4750.6, 8072.83, 15003.6, 11648.7, 4759.3, 5763.35, 3456.7, 15021.84, 8553.79, 5633.24, 5641.94, 18864.62, 3433.5, 819.66, 3034.58, 6379.63, 1677.8, 3081.91, 220.34, 3175.58, 1688.49, 466.1, 537.11, 2209.09, 10983.35, 687.6, 22536.41], [6969.52, 3905.64, 10012.11, 4230.53, 3905.03, 8047.26, 3620.27, 5513.7, 9247.66, 18598.69, 13417.68, 5350.17, 6554.69, 4056.76, 18366.87, 10587.42, 6590.19, 6596.1, 22557.37, 3984.1, 918.75, 3467.72, 7385.1, 2005.42, 3462.73, 248.8, 3933.72, 1933.98, 543.32, 612.61, 2604.19, 11777.12, 784.37, 24299.51], [8117.78, 4462.74, 11467.6, 4878.61, 4944.25, 9304.52, 4275.12, 6211.8, 10572.24, 21742.05, 15718.47, 6112.5, 7583.85, 4820.53, 21900.19, 12362.79, 7617.47, 7688.67, 26587.76, 4746.16, 1065.67, 3907.23, 8690.24, 2338.98, 3988.14, 290.76, 4743.61, 2277.35, 648.5, 725.9, 3045.26, 12537.95, 958.18, 25124.61], [9846.81, 5252.76, 13607.32, 6024.45, 6423.18, 11164.3, 5284.69, 7104.0, 12494.01, 26018.48, 18753.73, 7360.92, 9248.53, 5800.25, 25776.91, 15012.46, 9333.4, 9439.6, 31777.01, 5823.41, 1254.17, 4676.13, 10562.39, 2884.11, 4772.52, 341.43, 5757.29, 2703.98, 797.35, 919.11, 3523.16, 13767.31, 1193.35, 26396.79], [11115.0, 6719.01, 16011.97, 7315.4, 8496.2, 13668.58, 6426.1, 8314.37, 14069.86, 30981.98, 21462.69, 8851.66, 10823.01, 6971.05, 30933.28, 18018.53, 11328.92, 11555.0, 36796.71, 7021.0, 1503.06, 5793.66, 12601.23, 3561.56, 5692.12, 394.85, 7314.58, 3166.82, 1018.62, 1203.92, 4183.21, 14240.44, 1358.35, 26966.93], [12153.03, 7521.85, 17235.48, 7358.31, 9740.25, 15212.49, 7278.75, 8587.0, 15046.45, 34457.3, 22990.35, 10062.82, 12236.53, 7655.18, 33896.65, 19480.46, 12961.1, 13059.69, 39482.56, 7759.16, 1654.21, 6530.01, 14151.28, 3912.68, 6169.75, 441.36, 8169.8, 3387.56, 1081.27, 1353.31, 4277.05, 13838.1, 1388.37, 25354.75], [14113.58, 9224.46, 20394.26, 9200.86, 11672.0, 18457.27, 8667.58, 10368.6, 17165.98, 41425.48, 27722.31, 12359.33, 14737.12, 9451.26, 39169.92, 23092.36, 15967.61, 16037.96, 46013.06, 9569.85, 2064.5, 7925.58, 17185.48, 4602.16, 7224.18, 507.46, 10123.48, 4120.75, 1350.43, 1689.65, 5437.47, 14814.61, 1822.24, 28848.82], [16251.93, 11307.28, 24515.76, 11237.55, 14359.88, 22226.7, 10568.83, 12582.0, 19195.69, 49110.27, 32318.85, 15300.65, 17560.18, 11702.82, 45361.85, 26931.03, 19632.26, 19669.56, 53210.28, 11720.87, 2522.66, 10011.37, 21026.68, 5701.84, 8893.12, 605.83, 12512.3, 5020.37, 1670.44, 2102.21, 6610.05, 16133.15, 2383.33, 31404.94], [17879.4, 12893.88, 26575.01, 12112.83, 15880.58, 24846.43, 11939.24, 13691.58, 20181.72, 54058.22, 34665.33, 17212.05, 19701.78, 12948.88, 50013.24, 29599.31, 22250.45, 22154.23, 57067.92, 13035.1, 2855.54, 11409.6, 23872.8, 6852.2, 10309.47, 701.03, 14453.68, 5650.2, 1893.54, 2341.29, 7505.31, 16989.07, 2783.89, 32067.61], [19800.81, 14442.01, 28442.95, 12665.25, 16916.5, 27213.22, 13046.4, 14454.91, 21818.15, 59753.37, 37756.59, 19229.34, 21868.49, 14410.19, 55230.32, 32191.3, 24791.83, 24621.67, 62474.79, 14449.9, 3177.56, 12783.26, 26392.07, 8086.86, 11832.31, 815.67, 16205.45, 6330.69, 2122.06, 2577.57, 8443.84, 17833.46, 3334.87, 33060.9], [21330.83, 15726.93, 29421.15, 12761.49, 17770.19, 28626.58, 13803.14, 15039.38, 23567.7, 65088.32, 40173.03, 20848.75, 24055.76, 15714.63, 59426.59, 34938.24, 27379.22, 27037.32, 67809.85, 15672.89, 3500.72, 14262.6, 28536.66, 9266.39, 12814.59, 920.83, 17689.94, 6836.82, 2303.32, 2752.1, 9273.46, 18848.44, 3579.44, 34242.29], [23014.59, 16538.19, 29806.11, 12766.49, 17831.51, 28669.02, 14063.13, 15083.67, 25123.45, 70116.38, 42886.49, 22005.63, 25979.82, 16723.78, 63002.33, 37002.16, 29550.19, 28902.21, 72812.55, 16803.12, 3702.76, 15717.27, 30053.1, 10502.56, 13619.17, 1026.39, 18021.86, 6790.32, 2417.05, 2911.77, 9324.8, 20001.66, 2932.84, 39217.31], [25669.13, 17885.39, 32070.45, 13050.41, 18128.1, 22246.9, 14776.8, 15386.09, 28178.65, 77388.28, 47251.36, 24407.62, 28810.58, 18499.0, 68024.49, 40471.79, 32665.38, 31551.37, 80854.91, 18317.64, 4053.2, 17740.59, 32934.54, 11776.73, 14788.42, 1151.41, 19399.59, 7200.37, 2572.49, 3168.59, 9649.7, 20773.07, 2933.26, 38239.15], [28014.94, 18549.19, 34016.32, 15528.42, 16096.21, 23409.24, 14944.53, 15902.68, 30632.99, 85869.76, 51768.26, 27018.0, 32182.09, 20006.31, 72634.15, 44552.83, 35478.09, 33902.96, 89705.23, 18523.26, 4462.54, 19424.73, 36980.22, 13540.83, 16376.34, 1310.92, 21898.81, 7459.9, 2624.83, 3443.56, 10881.96, 22192.6, 3272.8, 37042.73], [33105.97, 13362.92, 32494.61, 15958.13, 16140.76, 23510.54, 11253.81, 12846.48, 36011.82, 93207.55, 58002.84, 34010.91, 38687.77, 22716.51, 66648.87, 49935.9, 42021.95, 36329.68, 99945.22, 19627.81, 4910.69, 21588.8, 42902.1, 15353.21, 20880.63, 1548.39, 23941.88, 8104.07, 2748.0, 3510.21, 12809.39, 23445.92, 3570.65, 34334.66], [35371.28, 14104.28, 35104.52, 17026.68, 17212.53, 24909.45, 11726.82, 13612.68, 38155.32, 99631.52, 62351.74, 37113.98, 42395.0, 24757.5, 71067.53, 54259.2, 45828.31, 39752.12, 107671.07, 21237.14, 5308.93, 23605.77, 46615.82, 16769.34, 23223.75, 1697.82, 25793.17, 8718.3, 2965.95, 3748.48, 13597.11, 23706.18, 3491.25, 34044.26]]}
        var years = gdp_data["years"];
        var provinces = gdp_data["provinces"];
        var gdp = gdp_data["gdp"];

        var option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    symbolSize: 12,
                    left: '5%',
                    right: '5%',
                    bottom: '0%',
                    width: '90%',
                    data: years,
                    tooltip: {
                        formatter: years
                    },
                    lineStyle: {
                        color: '#fff'
                    },
                    label: {
                        color: '#fff'
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#25f3e6'
                        }
                    },
                    checkpointStyle: {
                        color: '#25f3e6',
                        borderWidth: 0,
                    },
                    controlStyle: {
                        color: '#fff',
                        borderColor: '#fff',
                    },
                },
                tooltip: {
                    show: true,
                    formatter: function(params) {
                        return params.name + ' : ' + "<span style='color:rgba(37, 243, 230)'>" + params.value + "</span> 亿元";
                    },
                },
                visualMap: {
                    type: 'piecewise',
                    pieces: [
                        {
                            min: 100000,
                            color: '#2093e9'
                        },{
                            min: 50000,
                            max: 99999,
                            color: '#20abe9'
                        },{
                            min: 10000,
                            max: 49999,
                            color: '#20c3e9'
                        },{
                            min: 1000,
                            max: 9999,
                            color: '#20dce9'
                        },{
                            min: 0,
                            max: 999,
                            color: '#20e9dd'
                        }
                    ],
                    orient: 'vertical',
                    itemWidth: 25,
                    itemHeight: 15,
                    showLabel: true,
                    seriesIndex: [0],
                    textStyle: {
                        color: '#7b93a7'
                    },
                    bottom: '10%',
                    left: '5%',
                },
                grid: {
                    right: '5%',
                    top: '20%',
                    bottom: '10%',
                    width: '20%'
                },
                xAxis: {
                    min: 0,
                    max: 110000,
                    show: false
                },
                yAxis: [{
                    inverse: true,
                    offset: '2',
                    type: 'category',
                    data: '',
                    nameTextStyle: {
                        color: '#fff'
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 14,
                            color: '#fff',
                        },
                        interval: 0
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#333'
                        },
                        splitLine: {
                            show: false
                        }
                    },
                }],
                geo: {
                    map: 'china',
                    right: '35%',
                    left: '5%',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: "#acdcfa",
                            borderColor: '#2b91b7',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: '#17f0cc'
                        }
                    }
                },
                series: [{
                    name: 'mapSer',
                    type: 'map',
                    map: 'china',
                    roam: false,
                    geoIndex: 0,
                    label: {
                        show: false,
                    },
                },{
                    name: '',
                    type: 'bar',
                    zlevel: 2,
                    barWidth: '25%',
                    itemStyle: {
                        barBorderRadius: 10,
                    },
                    label: {
                        normal: {
                            show: true,
                            fontSize: 14,
                            color: 'rgba(255, 255, 255, 0.6)',
                            position: 'right',
                            formatter: '{c}'
                        }
                    },
                }],
            },
            animationDurationUpdate: 3000,
            animationEasingUpdate: 'quinticInOut',
            options: []
        };
    
        for (var i=0; i<years.length; i++) {
            var res = [];
            for (j=0; j<gdp[i].length; j++) {
                res.push({
                    name: provinces[j],
                    value: gdp[i][j]
                });
            }
            res.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6);
    
            res.sort(function(a, b) {
                return a.value - b.value;
            });
    
            var res1 = [];
            var res2 = [];
            for (t=0; t<10; t++) {
                res1[t] = res[res.length - 1 - t].name;
                res2[t] = res[res.length - 1 - t].value;
            }
            option.options.push({
                title: {
                    text: "20" + years[i] + "年各省市GDP",
                    textStyle: {
                        color: '#fff',
                        fontSize: 30
                    },
                    left: '4%',
                    top: '0%',
                    subtext: '单位: 亿元',
                    subtextStyle: {
                        color: '#fff',
                        fontSize: 16
                    },
                },
                yAxis: {
                    data: res1,
                },
                series: [{
                    type: 'map',
                    data: res
                },{
                    type: 'bar',
                    data: res2,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = [{
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ffff47'
                                    },{
                                        offset: 1,
                                        color: '#ffff61'
                                    }]
                                },{
                                    colorStops: [{
                                        offset: 0,
                                        color: '#25f3e6'
                                    },{
                                        offset: 1,
                                        color: '#44f4e9'
                                    }]
                                },{
                                    colorStops: [{
                                        offset: 0,
                                        color: '#f5c847'
                                    },{
                                        offset: 1,
                                        color: '#f6cf61'
                                    }]
                                },{
                                    colorStops: [{
                                        offset: 0,
                                        color: '#4ac7f5',
                                    },{
                                        offset: 1,
                                        color: '#63cff6'
                                    }]
                                }];
                                if (params.dataIndex == 0) {
                                    return colorList[0]
                                } else if (params.dataIndex == 1) {
                                    return colorList[1]
                                } else if (params.dataIndex == 2) {
                                    return colorList[2]
                                } else {
                                    return colorList[3]
                                }
                            }
                        }
                    }
                }]
            })
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    }

    function echarts_4() {
        var myChart = echarts.init(document.getElementById('echarts_4'));

        option = {
            tooltip: {
                show: true,
                trigger: 'item',
                padding: [8, 10],
                formatter: function(params) {
                    if (params.seriesName != "") {
                        return params.name + ' : '+ "<span style='color:rgba(37, 243, 230)'>" + params.value + '</span> 亿元';
                    }
                }
            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left: 60,
                right: 30,
                textStyle: {
                    color: '#fff'
                }
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: 12
                    }
                },
                data: ['广东省','江苏省','山东省','浙江省','河南省']
            }],
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: 12
                    }
                }
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00c0e9'
                        },{
                            offset: 1,
                            color: '#3b73cf'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105, 123, 214, 0.7)'
                    }
                },
                barWidth: '30%',
                data: [107671, 99631.52, 71067.53, 62351.74, 54259.2]
            }]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    }

    function echarts_5() {
        var myChart = echarts.init(document.getElementById('echarts_5'));

        var data = [{
                city: "北京市",
                value: 164212.1,
                },
                {
                    city: "上海市",
                    value: 157147.1,
                },
                {
                    city: "江苏省",
                    value: 123459.1,
                },
                {
                    city: "福建省",
                    value: 106707.8,
                },
                {
                    city: "浙江省",
                    value: 106584.2
                }
            ]

        option = {
            grid: {
                top: '10%',
                left: '8%',
                bottom: '3%',
                right: '10%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function(params) {
                    return params[0]['data'].city + '<br/>' + '人均GDP: '+ "<span style='color:rgba(37, 243, 230)'>" + params[0]['data'].value + '</span> 元';
                }
            },
            xAxis: [{
                type: 'category',
                data: ['北京市', '上海市', '江苏省', '福建省', '浙江省'],
                axisLabel: {
                    textStyle: {
                        color: '#b6b5ab'
                    }
                }
            }],
            yAxis: [{
                offset: 30,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: '#b6b5ab'
                }
            }],
            series:[{
                type: 'pictorialBar',
                barCategoryGap: '-60%',
                symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                            ];
                            return colorList[params.dataIndex];
                        }
                  },
                  emphasis: {
                      opacity: 1
                  }
                },
                data: data
            }]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    }

    function echarts_6() {
        var myChart = echarts.init(document.getElementById('echarts_6'));

        var data = [{'city': '北京', 'value': 35371},
                    {'city': '天津', 'value': 14104},
                    {'city': '石家庄', 'value': 5810},
                    {'city': '太原', 'value': 4029},
                    {'city': '呼和浩特', 'value': 2791},
                    {'city': '沈阳', 'value': 6470},
                    {'city': '大连', 'value': 7002},
                    {'city': '长春', 'value': 5904},
                    {'city': '哈尔滨', 'value': 5249},
                    {'city': '上海', 'value': 38155},
                    {'city': '南京', 'value': 14031},
                    {'city': '杭州', 'value': 15373},
                    {'city': '宁波', 'value': 11985},
                    {'city': '合肥', 'value': 9409},
                    {'city': '福州', 'value': 9392},
                    {'city': '厦门', 'value': 5995},
                    {'city': '南昌', 'value': 5596},
                    {'city': '济南', 'value': 9443},
                    {'city': '青岛', 'value': 11741},
                    {'city': '郑州', 'value': 11590},
                    {'city': '武汉', 'value': 16223},
                    {'city': '长沙', 'value': 11574},
                    {'city': '广州', 'value': 23629},
                    {'city': '深圳', 'value': 26927},
                    {'city': '南宁', 'value': 4507},
                    {'city': '海口', 'value': 1672},
                    {'city': '重庆', 'value': 23605},
                    {'city': '成都', 'value': 17013},
                    {'city': '贵阳', 'value': 4040},
                    {'city': '昆明', 'value': 6476},
                    {'city': '拉萨', 'value': 618},
                    {'city': '西安', 'value': 9321},
                    {'city': '兰州', 'value': 2837},
                    {'city': '西宁', 'value': 1328},
                    {'city': '银川', 'value': 1897},
                    {'city': '乌鲁木齐', 'value': 3413}];

        option = {
            title: {
                show: false
            },
            tooltip: {
                formatter: function(info) {
                    return info.data.city + ' : ' + "<span style='color:rgba(37, 243, 230)'>" + info.data.value + '</span> 亿元';
                },
                backgroundColor: 'rgba(29, 38, 71)',
                extraCssText: 'box-shadow: 0 0 3px rgba(10, 88, 82, 0.8);'
            },
            series: [{
                type: 'treemap',
                top: '3%',
                bottom: '3%',
                left: '3%',
                right: '3%',
                breadcrumb: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: function(info) {
                                return info.data.city;
                            },
                        },
                        borderWidth: 1,
                        borderColor: 'rgba(0, 0, 0, 0)',
                        strokeWidth: 2,
                        strokeWidth: 'rgba(0, 0, 0, 0)'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            color: '#14488f'
                        },
                        color: '#81ecec'
                    }
                },
                label: {
                    normal: {
                        fontSize: 14
                    }
                },
                data: data
            }],
            color: ['rgba(10, 179, 229, 0.5)']
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    }
})