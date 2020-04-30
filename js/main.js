    // 댓글 달기 기능 구현
    const postForm = document.querySelector(".feeds__post");
    const postInput = postForm.querySelector("input");
    const postBtn = postForm.querySelector("button");

    function post(currentValue) {
        const id = document.createElement("span");
        const content = document.createElement("span");
        const like = document.createElement("div");
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const li = document.createElement("li");
        const ul = document.querySelector(".feeds__commentList");
        like.innerHTML = "<img class='feeds__comment-column icon' src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png' / > ";
        li.className = "feeds__comment"
        div.className = "feeds__comment-column"
        div2.className = "feeds__comment-column"
        id.className = "feeds__comment-column id"
        content.className = "feeds__comment-column content"
        div2.className = "feeds__comment-column"
        id.innerText = "nowhhk"
        content.innerText = currentValue;
        div.appendChild(id);
        div.appendChild(content);
        li.appendChild(div);
        div2.appendChild(like);
        li.appendChild(div2);
        ul.appendChild(li);
    }


    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const currentValue = postInput.value;
        post(currentValue);
        postInput.value = "";
    })


    //글자수 25 넘으면 더보기 버튼나오게 하기, 클릭시 전체내용 보임 
    const feedContent = document.querySelector('.feeds__content.content');
    const moreBtn = document.querySelector('.more');

    function hidden(text) {
        moreBtn.style.display = "block"
        text.innerText = text.innerText.substr(0, 25) + " ..."
    }

    function show(text) {
        moreBtn.style.display = "none";
    }

    function contentlength(text) {
        if (text.innerText.length > 25) {
            const originContent = text.innerText;
            hidden(text);
            moreBtn.addEventListener("click", function () {
                moreBtn.style.display = "none";
                text.innerText = originContent;
            });
        } else {
            show(text);
        }
    }

    contentlength(feedContent);