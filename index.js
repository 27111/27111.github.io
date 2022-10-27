$(function () {
    $(".canvas").on("click", function () {
        $(".aside").toggleClass("asided");
    });
    $(".aside_nav a").each(function (i, e) {
        $(e).on("click", function () {
            $(".swiper-pagination span").eq(i).trigger("click");
        });
    });
    $(".header_nav a").each(function (i, e) {
        $(e).on("click", function () {
            $(".swiper-pagination span").eq(i).trigger("click");
        });
    });
    $(".btn1").on("click", function () {
        $(".swiper-pagination span").eq(1).trigger("click");
    });
    // console.log($(".menu_nav li").eq(2));
    // $(".menu_nav li").eq(2).on("click", function () {
    //     location.href = './360极速浏览器/浏览器.html';
    // })




    var zuopinArr = [
        {
            id: "Css&Html",
            path: "./c3、h5/3D/chart.html",
            picture: "./img/3D卡片.png",
            describe: "3D卡片",
        },
        {
            id: "Css&Html",
            path: "./c3、h5/日月转换/日月转换.html",
            picture: "./img/日月轮换.png",
            describe: "日月转换效果",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/钢琴大师/钢琴大师错误格子初版.html",
            picture: "./img/钢琴大师.png",
            describe: "钢琴大师",
        },
        {
            id: "Css&Html",
            path: "./c3、h5/loading效果/loading.html",
            picture: "./img/loading效果.png",
            describe: "loading效果",
        },
        {
            id: "vue",
            path: "./vue/todos/dist/index.html",
            picture: "./img/todos.png",
            describe: "todos",
        },
        {
            id: "vue",
            path: "./vue/vue2-music/dist/index.html",
            picture: "./img/波点音乐.png",
            describe: "波点音乐",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/ajax/B站漫画.html",
            picture: "./img/bilibili漫画.png",
            describe: "bilibili漫画",
        },
        {
            id: "Css&Html",
            path: "./c3、h5/雷达效果.html",
            picture: "./img/雷达.png",
            describe: "雷达扫描",
        },
        {
            id: "Css&Html",
            path: "./html、css/美容网/meiro.html",
            picture: "./img/meiro.png",
            describe: "美容整形网",
        },
        {
            id: "Css&Html",
            path: "./html、css/第一阶段考试/儿童网.html",
            picture: "./img/儿童网.png",
            describe: "儿童网",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/抽奖.html",
            picture: "./img/九宫格抽奖.png",
            describe: "九宫格抽奖",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/轮盘抽奖.html",
            picture: "./img/轮盘抽奖.png",
            describe: "轮盘抽奖",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/放大镜/放大镜.html",
            picture: "./img/放大镜.png",
            describe: "放大镜",
        },
        {
            id: "bootStrap",
            path: "./360极速浏览器/浏览器.html",
            picture: "./img/360.png",
            describe: "360极速浏览器",
        },
        {
            id: "bootStrap",
            path: "./bootStrap/整形网/整形网.html",
            picture: "./img/整形.png",
            describe: "整形网页",
        },
        {
            id: "Css&Html",
            path: "./c3、h5/按钮/按钮.html",
            picture: "./img/按钮.png",
            describe: "按钮效果",
        },
        {
            id: "JS&JQ",
            path: "./三级菜单/三级菜单.html",
            picture: "./img/三级菜单.png",
            describe: "三级菜单",
        },
        {
            id: "bootStrap",
            path: "./bootStrap/商务公司网站/商务网站.html",
            picture: "./img/商务公司主页.png",
            describe: "商务网站",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/别踩白块.html",
            picture: "./img/别踩白块.png",
            describe: "别踩白块",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/卡片记忆.html",
            picture: "./img/卡片记忆.png",
            describe: "卡片记忆",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/方块时钟.html",
            picture: "./img/方块时钟.png",
            describe: "方块时钟",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/时钟优化版.html",
            picture: "./img/时钟.png",
            describe: "时钟",
        },
        {
            id: "Css&Html",
            path: "./c3、h5/第二题/手风琴.html",
            picture: "./img/仿王者手风琴.png",
            describe: "仿王者手风琴",
        },
        {
            id: "Css&Html",
            path: "./c3、h5/hovercss.html",
            picture: "./img/hornor.png",
            describe: "hovercss",
        },
        {
            id: "JS&JQ",
            path: "./JavaScript/轮播图.html",
            picture: "./img/无缝轮播图.png",
            describe: "无缝轮播图",
        },
        {
            id: "JS&JQ",
            path: "./音乐播放器/音乐播放器.html",
            picture: "./img/音乐播放器pc.png",
            describe: "PC端音乐播放器"
        },
    ];
    // $.each(zuopinArr, function (i, e) {
    //     var li = $("<li></li>");
    //     $(".zuopin").append(li);
    // })

    //  点击动态生成作品集合
    $(".menu_nav li").each(function (j, el) {
        $(el).on("click", function () {
            $(".zuopin").html("");
            //  遍历数组,根据id判断生成对应作品
            $.each(zuopinArr, (i, e) => {
                if ($(this).data("id") === e.id || $(this).data("id") === "all") {
                    var li = $("<li><a href='" + e.path + "' target='_blank'></a><img src='" + e.picture + "''><p>" + e.describe + "</p><i class='fa fa-search-plus'></i></li>");
                    $(".zuopin").append(li);
                    // $(li).click(() => {
                    //     location.href = e.path;
                    // })
                }
            });
        });
    });
    $(".menu_nav li").eq(0).click();




    var dazijiStr = "是阿绵,一名快要秃顶的程序猿!";
    //  打字机效果
    function setText(t) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $(".words span").eq(1).html(t);
                resolve();
            }, 150);
        });
    }
    async function main(flag) {
        if (flag) {
            for (let i = 1; i <= dazijiStr.length; i++) {
                await setText(dazijiStr.substring(0, i));
            }
        } else {
            for (let i = dazijiStr.length; i >= 0; i--) {
                await setText(dazijiStr.substring(0, i));
            }
        }
        setTimeout(() => {
            main(!flag);
        }, 1000);
    }
    main(1);
});