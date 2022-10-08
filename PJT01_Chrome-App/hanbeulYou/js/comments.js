const commentForm = document.getElementById("comment-form");
const commentInput = document.querySelector("#comment-form input");
const commentList = document.getElementById("comments__list");

const COMMENT_KEY = 'comment';

let comments = [];

function saveComments(){
    localStorage.setItem(COMMENT_KEY, JSON.stringify(comments));
}

function deleteComment(event){
    const li = event.target.parentElement;
    comments = comments.filter(item => item.id != li.id);
    li.remove();
    saveComments();
}

function postComment(newComment){
    const li = document.createElement("li");
    li.id = newComment.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    commentList.appendChild(li);
    span.innerText = newComment.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteComment);
}

function commentSubmit(event){
    event.preventDefault();
    const newComment = commentInput.value;
    commentInput.value = "";
    // console.log(newComment);
    const newCommentObj = {
        text: newComment,
        id: Date.now(),
    };
    comments.push(newCommentObj);
    postComment(newCommentObj);
    saveComments();
}

commentForm.addEventListener("submit", commentSubmit);

const savedComments = localStorage.getItem(COMMENT_KEY);
if(savedComments !== null){
    const parsedComments = JSON.parse(savedComments);
    comments = parsedComments;
    parsedComments.forEach(postComment);
}