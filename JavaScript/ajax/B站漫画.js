var query = {
    styleId: -1,
    areaId: -1,
    isFinish: -1,
    isFree: -1,
    order: 0,
};

function getAndRender() {
    $.get("https://apis.netstart.cn/bcomic/ClassPage", query, function (res) {
        // console.log(res.data);
        $(".comics").html("");
        res.data.forEach(function (comic) {
            // $(".comics").append("<li>" + comic.title + "</li>");
            let lis = $(`<li><p>${comic.title}</p></li>`)
            $(".comics").append(lis);
        });
        res.data.forEach(function (comic, i) {
            let div = $("<div></div>");
            $("ol li").eq(i).prepend(div);
            $(div).css({
                backgroundImage: "url(" + comic.vertical_cover + ")"
            })
        })
    });
}

var filters = [
    {
        cateName: "题材",
        cateKey: "styleId",
        cates: [
            { text: "全部", code: -1 },
            { text: "热血", code: 999 },
            { text: "古风", code: 997 },
            { text: "玄幻", code: 1016 },
            { text: "奇幻", code: 998 },
            { text: "悬疑", code: 1023 },
            { text: "都市", code: 1002 },
            { text: "历史", code: 1096 },
            { text: "武侠仙侠", code: 1092 },
            { text: "游戏竞技", code: 1088 },
        ],
    },
    {
        cateName: "地区",
        cateKey: "areaId",
        cates: [
            { text: "全部", code: -1 },
            { text: "大陆", code: 1 },
            { text: "日本", code: 2 },
            { text: "韩国", code: 6 },
            { text: "其他", code: 5 },
        ],
    },
    {
        cateName: "进度",
        cateKey: "isFinish",
        cates: [
            { text: "全部", code: -1 },
            { text: "连载", code: 0 },
            { text: "完结", code: 1 },
        ],
    },
    {
        cateName: "收费",
        cateKey: "isFree",
        cates: [
            { text: "全部", code: -1 },
            { text: "免费", code: 1 },
            { text: "付费", code: 2 },
            { text: "等就免费", code: 3 },
        ],
    },
    {
        cateName: "排序",
        cateKey: "order",
        cates: [
            { text: "人气推荐", code: 0 },
            { text: "更新时间", code: 1 },
            { text: "追漫人数", code: 2 },
            { text: "上架时间", code: 3 },
        ],
    },
];
$.each(filters, function (i, e) {
    $("ul").each(function (j, el) {
        if ($(el).attr("class") === e.cateKey) {
            $(e.cates).each((n, ele) => {
                // let li = $("<li data-kd=" + e.cateKey + " data-id=" + ele.code + ">" + ele.text + "</li>");
                let li = $(
                    `<li data-kd=${e.cateKey} data-id= ${ele.code}>${ele.text}</li>`
                )
                $(this).append(li);
            })
        }
    })
});
function clickShow(obj) {
    obj.each(function () {
        $(this).on("click", "li", function (elem) {
            $(elem.target).addClass("active").siblings().removeClass("active");
            for (const key in query) {
                // console.log($(elem.target).data("kd"));
                if ($(elem.target).data("kd") === key) {
                    query[key] = $(elem.target).data("id");
                    getAndRender();
                }
            }
        });
    })
}
$("ul").each(function () {
    clickShow($(this));
    $(this).children().eq(0).click();
})
