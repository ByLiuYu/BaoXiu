//点击左侧的选项卡,右侧的iframe会跳转到相应的页面,列如点击信息,右侧的iframe会跳转到/iframe/info.html,点击申请报修,右侧的iframe会跳转到/iframe/repair.html
$(document).ready(function(){
    $("input[name='vertical-menu-radio']").click(function(){
        var value = $(this).val();
        if(value == "option1"){
            $("iframe").attr("src","iframe/info.html");
        }else if(value == "option2"){
            $("iframe").attr("src","iframe/repair.html");
        }else if(value == "option3"){
            $("iframe").attr("src","iframe/repair_list.html");
        }else if(value == "option4"){
            $("iframe").attr("src","iframe/revise.html");
        }
        var value = $(this).val();
        $.cookie("vertical-menu-radio",value,{expires:7,path:"/"});
    });
});
//在选择选项卡的时候，在cookie中记录下来，下次打开页面的时候，自动跳转到上次选择的选项卡,并且选项卡的选择状态也会保留
$(document).ready(function(){
    var value = $.cookie("vertical-menu-radio");
    if(value == "option1"){
        $("iframe").attr("src","iframe/info.html");
        $("input[name='vertical-menu-radio'][value='option1']").attr("checked",true);
    }else if(value == "option2"){
        $("iframe").attr("src","iframe/repair.html");
        $("input[name='vertical-menu-radio'][value='option2']").attr("checked",true);
    }else if(value == "option3"){
        $("iframe").attr("src","iframe/repair_list.html");
        $("input[name='vertical-menu-radio'][value='option3']").attr("checked",true);
    }else if(value == "option4"){
        $("iframe").attr("src","iframe/revise.html");
        $("input[name='vertical-menu-radio'][value='option4']").attr("checked",true);
    }
});