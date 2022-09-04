$(function () {
    $(".canvas").on("click", function () {
        $(".aside").toggleClass("asided");
    })
    $(".aside_nav a").each(function (i, e) {
        $(e).on("click", function () {
            $(".swiper-pagination span").eq(i).trigger("click")
        })
    })
    $(".header_nav a").each(function (i, e) {
        $(e).on("click", function () {
            $(".swiper-pagination span").eq(i).trigger("click")
        })
    })
    $(".btn1").on("click", function () {
        $(".swiper-pagination span").eq(3).trigger("click")
    })
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
            path: "./c3、h5/按钮/按钮.html",
            picture: "./img/按钮.png",
            describe: "按钮效果",
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
            path: "./c3、h5/loading.html",
            picture: "./img/loading效果.png",
            describe: "loading效果",
        },
        {
            id: "JS&JQ",
            path: "./三级菜单/三级菜单.html",
            picture: "./img/三级菜单.png",
            describe: "三级菜单",
        },
        {
            id: "JS&JQ",
            path: "./音乐播放器/音乐播放器.html",
            picture: "./img/音乐播放器pc.png",
            describe: "PC端音乐播放器"
        },
        {
            id: "bootStrap",
            path: "./360极速浏览器/浏览器.html",
            picture: "./img/皮卡丘.png",
        },
        {
            id: "bootStrap",
            path: "./360极速浏览器/浏览器.html",
            picture: "./img/皮卡丘.png",
        },
    ]
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
                    var li = $("<li><img src='" + e.picture + "''><p>" + e.describe + "</p><i class='fa fa-search-plus'></i></li>");
                    $(".zuopin").append(li);
                    $(li).click(() => {
                        location.href = e.path;
                    })
                }
            })
        })
    })
    $(".menu_nav li").eq(0).click();




    var dazijiStr = "是阿绵,一名快要秃顶的程序猿!"
    //  打字机效果
    function setText(t) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $(".words span").eq(0).html(t);
                resolve();
            }, 150)
        })
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
        }, 1000)
    }
    main(1);
})