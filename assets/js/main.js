(function() {
    var element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                alert("控制台已打开，请关闭控制台后继续操作。");
                window.location.reload(); // 刷新页面
            }
        });
        console.log(element);
    })();
    document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

 
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    video.play();
});

