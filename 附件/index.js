window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });
    document.getElementById('search-input').onkeydown=function(e){
        let keyNum=window.event ? e.keyCode :e.which;
        if(keyNum==13){
            search();
        }
    }
    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    });

}

function search() {
    // TODO: 搜索触发后的行为
    let content=document.getElementsByTagName('input')[0].value;
    // console.log(content);
    // if(!content){
    //     alert('wrong');
    //     return;
    // }
    if(content == ""){
        alert('请输入搜索内容');}
    else
       { 
        window.open("https://www.baidu.com/s?wd="+content);
        // alert(content);
    }
    //     console.log(value);
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    console.log(username);
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"> </span>
                    </div>`;
    document.getElementById('top-right').innerHTML = content;
    document.getElementById('name').textContent=username.split('<')[0];
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}
