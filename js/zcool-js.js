window.onload = function () {
    $(function () {
        var index = 0;
        var now = 0;
        var timer = 0;
        var preIndex = 0;

        //获取header的高度
        var $header = $('.wrap > .header')
        //获取头部右侧每个li
        var $li = $('.headerContent > nav > ul > li');
        //获取文本区
        var $content = $(".wrap > .content")
        var $cList = $content.children('.contentList')
        //获取文本区的每个li
        // var $contentLi = $('.contentList > li');
        var $contentLi = $cList.children('li');
        //获取小圆点的每个li
        var $sideNavLi =  $('.sideNav > li');


        // var $secondLi1 = $(".wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(1)");
        // var $secondLi2 = $(".wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(2)");
        // var $secondLi3 = $(".wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(3)");
        var $secondLis = $cList.find(".secondLi .second>.left>.photoList>li")
        var $secondLi1 = $secondLis.eq(0)
        var $secondLi2 = $secondLis.eq(1)
        var $secondLi3 = $secondLis.eq(2)
        var $secondRight = $cList.find(".secondLi .second>.right")
        // var $secondRight =$(".wrap .content .contentList .secondLi .second .right ")

        var $thirdLis = $cList.find(".thirdLi .third>.left>.photoList li")
        var $thirdLi2= $thirdLis.eq(1)
        var $thirdLi3 = $thirdLis.eq(2)
        var $thirdRight = $cList.find(".thirdLi .third>.right")


        var $fourLis = $cList.find(".fourLi .four>.left>.photoList li")
        var $fourLi1 = $fourLis.eq(0)
        var $fourLi2 = $fourLis.eq(1)
        var $fourLi3 = $fourLis.eq(2)
        var $fourRight = $cList.find(".fourLi .four>.right")

        var $fiveLis = $cList.find(".fiveLi .five>.left>.photoList>li")
        var $fiveLi1 = $fiveLis.eq(0)
        var $fiveLi2 = $fiveLis.eq(1)
        var $fiveLi3 = $fiveLis.eq(2)
        var $fiveRight = $cList.find(".fiveLi .five>.right")

        // var $thirdLi3=$(".wrap .content .contentList .thirdLi .third .left .photoList li:nth-of-type(3)")
        // var $thirdRight=$(".wrap .content .contentList .thirdLi .third .right ")

        //循环header中的每个li
        // $li.each(function (index,item) {
        //     //给每个表头li添加点击事件
        //     $(item).click(function () {
        //         //本身添加样式，删除兄弟样式
        //         $(this).addClass("active").siblings().removeClass("active");
        //         //给每个小圆点添加样式
        //         $sideNavLi[index].className = 'active';
        //         // $('.sideNav > li')[index].siblings().removeClass('active');
        //         //删除非当前圆点的样式
        //         $sideNavLi.not($sideNavLi[index]).removeClass('active');
        //         // $('.sideNav > li')[index].addClass('active').siblings().removeClass('active');
        //
        //         //对应的文本框中的内容显示
        //         // $contentLi[index].show;
        //         // $contentLi[index].draggable = true;
        //         //不对应的文本框中的内容隐藏
        //         // $contentLi[index].draggable = false;
        //         // $contentLi.not($contentLi[index]).hide;
        //
        //     })
        // })
        //
        // //循环小圆点中的每个li
        // $sideNavLi.each(function (index, item) {
        //     //给每个小圆点添加点击事件
        //     $(item).click(function () {
        //         //本身添加样式，删除相邻的样式
        //         $(this).addClass('active').siblings().removeClass('active');
        //         //给header中的对应li添加样式
        //         $li[index].className = 'active';
        //         //删除header中非对应li的样式
        //         $li.not($li[index]).removeClass('active');
        //     })
        // })

        //窗口重置
        window.onresize = function () {
            setContentHeight()
        }

        //出入场动画
        var animations = [
            {
                in : function () {
                    var $img = $('.wrap .content .contentList firstLi img');
                    setTimeout(function () {
                        $($img).css({
                            opacity:1
                        });
                    },1000)
                },
                out : function () {
                    var $img = $('.wrap .content .contentList firstLi img');
                    setTimeout(function () {
                        $($img).css({
                            opacity:0
                        })
                    },1000)
                }
            },
            {
                in : function () {
                    setTimeout(function () {
                        $($secondLi1).css({
                            transform : 'translateY(0px)'
                        })
                    },800);

                    setTimeout(function () {
                        $($secondLi2).css({
                            transform: "translateY(0px)"
                        })
                    },800);

                    setTimeout(function () {
                        $($secondLi3).css({
                            transform : 'translateY(0px)'
                        });

                        $($secondRight).css({
                            transform : 'translateY(0px)'
                        })
                    },800)
                },
                out : function () {
                    setTimeout(function () {
                        $($secondLi1).css({
                            transform : 'translateY(800px)'
                        })
                    },800);

                    setTimeout(function () {
                        $($secondLi2).css({
                            transform: "translateY(800px)"
                        })
                    },800);

                    setTimeout(function () {
                        $($secondLi3).css({
                            transform: "translateY(800px)"
                        });
                        $($secondRight).css({
                            transform : 'translateY(-800px)'
                        })
                    },800)
                }

            },
            {
                in : function () {
                    setTimeout(function () {
                        $($thirdLi2).css({
                            transform: "translateX(0px)"
                        })
                        $($thirdLi3).css({
                            transform: "translateX(0px)"
                        })
                        $($thirdRight).css({
                            transform: "translateX(0px)"
                        })
                    },1000)
                },
                out : function () {
                    setTimeout(function () {
                        $($thirdLi2).css({
                            transform: "translateX(-279px)"
                        })
                        $($thirdLi3).css({
                            transform: "translateX(-558px)"
                        })
                        $($thirdRight).css({
                            transform: "translateX(-300px)"
                        })
                    },1000)
                }
            },
            {
                in : function () {
                    $fourLi1.css({display : "block", animation: "move1 2s 0.8s"})
                    $fourLi2.css({display : 'block', animation: "move2 2s 0.8s"})
                    $fourLi3.css({display : 'block', animation: "move3 2s 0.8s"})

                    setTimeout(function () {
                        $($fourLi1).css({
                            transform: 'translate(0px, 0px)'
                        })
                        $($fourLi2).css({
                            transform: 'translate(0px, 0px)'
                        })
                        $($fourLi3).css({
                            transform: 'translate(0px, 0px)'
                        })
                        $($fourRight).css({
                            opacity : 1
                        })
                    },2000)

                },
                out : function () {
                    $($fourLi1).css({
                        display:'none',
                        transform: 'translate(330px, -1000px)'
                    });
                    $($fourLi2).css({
                        display:'none',
                        transform: 'translate(0px, -1000px)'
                    });
                    $($fourLi3).css({
                        display:'none',
                        transform: 'translate(-330px, -1000px)'
                    })
                    $($fourRight).css({opacity : 0})
                }
            },
            {
                in : function () {
                    setTimeout(function () {
                        $($fiveLi1).css({
                            transform : "translate3d(0,0,0) rotateX(0deg)"
                        })
                    },800);
                    setTimeout(function () {
                        $($fiveLi2).css({
                            transform : "translate3d(0,0,0) rotateX(0deg)"
                        })
                    },1000);
                    setTimeout(function () {
                        $($fiveLi3).css({
                            transform : "translate3d(0,0,0) rotateX(0deg)"
                        });
                        $($fiveRight).css({
                            opacity : 1
                        })
                    },1200);
                },
                out : function () {
                    setTimeout(function () {
                        $($fiveLi1).css({
                            transform : "translate3d(-1000px,-800px,0) "
                        })
                    },800);
                    setTimeout(function () {
                        $($fiveLi2).css({
                            transform : "translate3d(-1000px,-800px,0) "
                        })
                    },1000);
                    setTimeout(function () {
                        $($fiveLi3).css({
                            transform : "translate3d(-1000px,-800px,0) "
                        })
                        $($fiveRight).css({
                            opacity : 0
                        })
                    },1200);
                }
            }
        ]

        //循环遍历animations数组 依次调用out方法
        $.each(animations, function (i) {
            if(i > 0){
                animations[i]['out']()
            }
        })

        //滚轮事件的实现
        $content.on('mousewheel DOMMouseScroll', function (e) {
            e = e || event;

            var delta =
                (e.originalEvent.wheelDelta &&
                (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox

            clearTimeout(timer);
            timer = setTimeout(function () {
                //上滑是正值
                if(delta > 0){
                    if(now > 0){
                        now--
                    }

                    move(now)
                } else if(delta < 0){  //下滑是负值
                    if(now < $contentLi.length - 1){
                        now++
                        if(now == 0 && delta < 0 || (now == $contentLi.length && delta < 0 )) {
                            return
                        }
                        move(now)
                    }
                }
                preIndex = now
            },200)

            //取消默认行为
            window.event ? (window.event.returnValue = false) : e.preventDefault()
        });

        //调用点击事件
        clickBind()

        //每次刷新会重置页面
        function setContentHeight() {
            $content.height(document.documentElement.clientHeight - $header.outerHeight())
            $contentLi.height(document.documentElement.clientHeight - $header.outerHeight())
        }

        //调用header和小圆点点击事件
        function clickBind() {
            $.each($li, function (i) {  //头部导航处理
                $li[i].index = i;  //保存当前的i
                $($li[i]).on('click',function () {
                    preIndex = now;
                    move(this.index)
                    now = this.index; //更新now
                })
            })

            $.each($sideNavLi, function (i) { //小圆点导航条处理
                $sideNavLi[i].index = i;
                $($sideNavLi[i]).on('click',function () {
                    preIndex = now;
                    move(this.index)
                    now = this.index; //更新now
                })

            })
            // $li.each(function (index,item) {
            //     $li[index].index = index;  //保存当前的index
            //     $li[index].on('click',function () {
            //         alert(index)
            //     })
            // })
        }

        //同步主导航及侧边导航
        function move(index) {
            $li.attr('class','');
            $li.eq(index).addClass('active');

            $sideNavLi.attr('class', '');
            $sideNavLi.eq(index).addClass('active');

            $cList.css({top : -index * (document.documentElement.clientHeight - $header.outerHeight())})

            animations[index] && animations[index]['in'] && animations[index]['in']()
            animations[preIndex] && animations[preIndex]['out'] && animations[preIndex]['out']()

        }
    });
}
