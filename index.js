var slider = document.querySelectorAll(".slider-main");
var bntAutoPlay = $(".btn-auto-play");
var bntAutoPause = $(".btn-auto-pause");
var durationInput = $("#input-duration");
var btnSetting = $(".setting-icon");
var controllerSetting = $(".controller_options");
var listContainer = $(".list-container");

var idAuto; // duration loop id;

var myItem = [
    {
        id: 1,
        uri: "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-56.jpg",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 2,
        uri: "https://source.unsplash.com/t7YycgAoVSw/1600x900",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 3,
        uri: "https://znews-photo.zingcdn.me/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5.jpg",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 4,
        uri: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 5,
        uri: "https://thuthuatphanmem.vn/uploads/2018/04/10/hinh-anh-dep-ve-tinh-yeu-55_052634485.jpg",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 6,
        uri: "https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-60_044135017.jpg",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 7,
        uri: "https://msmobile.com.vn/images/news/2018/06/08/large/hinh-anh-dep-ve-tinh-yeu-doi-lua_1528442144.jpg",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 8,
        uri: "https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-trai-tim-tinh-yeu-dep-nhat_104527634.png",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    },
    {
        id: 9,
        uri: "https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg",
        description: "Họ Chim ruồi (Trochilidae), còn được gọi là họ Chim ong là một họ chim mà các loài có kích thước nhỏ nhất trong tất cả các loài chim, khi bay và giữ nguyên một vị trí, cánh chim vỗ lên tới 70 lần/giây(trung bình từ 30-40 lần/giây[1]) tạo ra tiếng vo ve như ruồi nên mới có tên là chim ruồi. Vì giống chim này hay hút mật hoa nên danh xưng chim ong cũng hợp với tập tính của loài chim này",
    }
]


const app = {
    index: 0,
    isList: true,
    isCaroul: false,
    pageCount: 1,
    indexListStartCut: 0,
    indexList: 0,
    isStatusButtonSetting: false,
    durationAuto: 3000,




    activeIndex: function (index) {
        slider.forEach((e) => {
            e.classList.remove("active");
        })
        slider[index].classList.add("active");
        this.addActivePage();
        this.scrollToActivePage();
        if (idAuto) {
            this.autoRunAction();
        }
    },
    nextClick: function () {
        $(".next").on("click", () => {
            this.actionNext();
        });

    },
    actionNext: function () {
        this.index++;
        if (this.index >= slider.length) {
            this.index = 0;
        }
        this.activeIndex(this.index);

    },

    prevClick: function () {
        $(".prev").on("click", () => {
            this.actionPrev();
        });


    },
    actionPrev: function () {
        this.index--;
        if (this.index < 0) {
            this.index = slider.length - 1;
        }
        this.activeIndex(this.index);
    },
    autoRunClick: function () {
        bntAutoPlay.on("click", () => {
            this.autoRunAction();
            bntAutoPause.css("display", "block");
            bntAutoPlay.css("display", "none");
        });
        bntAutoPause.on("click", () => {
            if (idAuto) {
                clearInterval(idAuto);
            }
            bntAutoPlay.css("display", "block");
            bntAutoPause.css("display", "none");
        });
    },

    autoRunAction: function () {
        if (idAuto) {
            clearInterval(idAuto);
        }
        idAuto = setInterval(() => {
            this.actionNext();
        }, this.durationAuto);
    },
    handleSubmitDuration: function () {
        durationInput.on("change", () => {
            var value = durationInput.val();
            $("#input-duration-value").html(value);


            if (value) {
                this.durationAuto = (+value) * 1000;
            }
        })
    },
    handleResolveEvent: function () {
        // button setting click
        btnSetting.on("click", () => {
            if (this.isStatusButtonSetting) {
                this.isStatusButtonSetting = false;
                btnSetting.css("color", "black");
                controllerSetting.css("display", "none")

            }
            else {
                this.isStatusButtonSetting = true;
                controllerSetting.css("display", "block");
                btnSetting.css("color", "red");

            }
        });
        $(".setting_close").on("click", () => {
            btnSetting.css("color", "black");
            controllerSetting.css("display", "none")
        });
        $("#input-animation").on("click", () => {
            if ($("#input-animation").is(":checked")) {
                $(".slider-main").removeClass("no-animation");


            }
            else {

                $(".slider-main").addClass("no-animation");
            }
        });

        //caroul setting click

        $("#caroul-checkbox").on("click", () => {
            if ($("#caroul-checkbox").is(":checked")) {
                this.isCaroul = true;
                this.isList = false;
                $("#caroul-checkbox").prop("checked", true);
                $("#list-checkbox").prop("checked", false);
            }
            else {
                console.log("false");
                this.isCaroul = false;
                this.isList = true;
                $("#caroul-checkbox").prop("checked", false);
                $("#list-checkbox").prop("checked", true);

            }
            this.handleShowType();

        });

        $("#list-checkbox").on("click", () => {
            console.log("list");
            if ($("#list-checkbox").is(":checked")) {
                this.isList = true;
                this.isCaroul = false;
                $("#caroul-checkbox").prop("checked", false);
                $("#list-checkbox").prop("checked", true);
            }
            else {
                console.log("false");
                this.isList = false;
                this.isCaroul = true;
                $("#caroul-checkbox").prop("checked", true);
                $("#list-checkbox").prop("checked", false);
            }

            this.handleShowType();
        });

        //selection 
        $("#ddlViewBy").on("change", () => {
            console.log("hehehee");
            console.log($("#ddlViewBy").val());
            this.pageCount = +($("#ddlViewBy").val());
            this.indexList = 0;
            this.renderList();
        });



    },
    handleRenderPaging: function () {
        let array = $('.slider-main');
        if (array && array.length) {
            let paging = [];
            for (let i = 1; i <= array.length; i++) {
                paging.push(`<li id="page__numbers_id-${i}" class="page__numbers"> ${i}</li>`);
            }
            paging = paging.join('');
            $('.page').html(paging)
        }
    },
    handleClickPageCount: function () {
        let arrayPage = document.querySelectorAll(".page__numbers");
        arrayPage.forEach((el, index) => {
            el.addEventListener("click", () => {
                this.index = +el.textContent - 1;
                this.activeIndex(this.index);
            })
        })
    },
    addActivePage: function () {
        let arrayPage = document.querySelectorAll(".page__numbers");
        if (arrayPage && arrayPage.length) {
            arrayPage.forEach((el, index) => {
                el.classList.remove("active");
            });
            arrayPage.forEach((el, index) => {
                if ((+el.textContent - 1) == this.index) {
                    el.classList.add("active");
                }
            });
        }

    },
    scrollToActivePage: function () {
        // console.log("aaaa:", $('.page__numbers.active'));
        // setTimeout(() => {
        //     $('.page__numbers.active').scrollIntoView({behavior: "smooth",block: "center", inline: "center"});
        // }, 100);
    },
    handleShowType: function () {
        if (this.isList) {
            $(".caroul").css("display", "none");
            $(".list").css("display", "block");

            $(".section_choose_caroul").css("display", "none");
            $(".section_choose_list").css("display", "block");


        }
        else {
            $(".caroul").css("display", "block");
            $(".list").css("display", "none");

            $(".section_choose_caroul").css("display", "block");
            $(".section_choose_list").css("display", "none");
        }
        if (idAuto) {
            clearInterval(idAuto);
        }
    },

    renderList() {
        console.log("hehe:", myItem);
        let html = null;

        console.log("pageCount:",this.pageCount);
        console.log("this.indexList:",this.indexList);
        //indexList.
        //myarrr;

        let start = this.indexList*this.pageCount >= myItem.length ? (myItem.length - this.pageCount) :
            this.indexList*this.pageCount
        ;
        let end = (this.indexList*this.pageCount+this.pageCount) >= myItem.length ? myItem.length :
        (this.indexList*this.pageCount+this.pageCount);
        ;

        if (myItem && myItem.length) {
            html = myItem.slice(start, end ).map((el, index) => {
                return (`
                <div class="list-section">
                    <div class="container-image">
                    <img class="container-image-img" src="${el.uri}" />
                    </div>
                    <div class="list-section-text">
                        ${el.description}
                    </div>
                </div>
                `)
            });



        }


        html.join("");
        listContainer.html(html);
        this.renderPaging();

    },
    renderPaging: function () {
        let pageCount = null;
        let valueNeedTo  = (myItem.length/this.pageCount);
        let lengthPage = Math.ceil(valueNeedTo);
        let testArr = [];
        for (let index = 0; index < lengthPage; index++) {
            testArr.push((index+1));
        }
        if (myItem && myItem.length) {
            let start = this.indexList - 2 <= 0 ? 0 : (this.indexList - 2) ;
            let newarr =(testArr.length>5) ? testArr.slice((start + 5) > testArr.length ? testArr.length - 5 : start, (5 + start) > testArr.length ? testArr.length : (5 + start)) : testArr
            


            
            pageCount = newarr.map((e, index) => {
                return (`
                    <li class="page__ ${this.indexList == (e-1) ? " active" : ""}">${e}</li>
                `)
            })

            if (newarr[0] >= 3) {
                pageCount.unshift(`
                <li class="page__dots">...</li>
                `)
                pageCount.unshift(`<li class="page__ ">1</li>`)
            }
            else if (newarr[0] == 2) {
                pageCount.unshift(`<li class="page__ ">1</li>`)
            }

            if ((testArr[testArr.length - 1] - newarr[newarr.length - 1] >= 2) && (testArr.length > 5)) {
                pageCount.push(`<li class="page__dots">...</li>`)
                pageCount.push(`<li class="page__ ">${testArr.length}</li>`)
            }
            else if (testArr[testArr.length - 1] - newarr[newarr.length - 1] == 1 && testArr.length > 5) {
                pageCount.push(`<li class="page__ ">${testArr.length}</li>`)
            }
            // paging-list
            pageCount.unshift(`
        <li class="page__btn"><span class="material-icons"><i class="fa-solid fa-chevron-left"></i></span></li>
        `)
            pageCount.push(`
            <li class="page__btn"><span class="material-icons"> <i class="fa-solid fa-chevron-right"></i></span></li>
        `)
            pageCount.join("");
            $(".paging-list").html(pageCount);

        }
        $(".page__").on("click",(e)=>{
            console.log("indexList:",e.target.textContent);
            this.indexList = +(e.target.textContent) - 1;
            this.renderList();
        })


    },
    start: function () {
        this.nextClick();
        this.prevClick();
        this.autoRunClick();
        this.handleSubmitDuration();
        this.handleResolveEvent();
        this.handleRenderPaging();
        // handle active paging
        this.handleClickPageCount();
        this.handleShowType();
        this.renderList();

    }
}
app.start();
