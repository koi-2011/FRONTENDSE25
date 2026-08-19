let img = document.querySelectorAll('.thumbs img');
for (let im of img){
    im.addEventListener('click',function(){
        let main = document.getElementById('main-img');
        main.src = this.src;
    })
}
function addComment(){
    if (confirm("Bạn có chắc chắn muốn thêm bình luận không?") === true){
        let cmt = document.getElementById('comment-value');
        let h = `
            <li class="comment flex">
                <img class="col10" src="images/9131478.png">
                <div class="col90">
                    <h4>${cmt.value}</h4>
                <p>Bình luận được đăng vào <a href="#">${new moment().locale('vi').startOf('day').fromNow()}</a></p>
                </div>
            </li>
        `
        let html = document.querySelector('.comment-list');
        html.innerHTML = h + html.innerHTML;
    }

}