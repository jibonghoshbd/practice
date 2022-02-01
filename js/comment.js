document.getElementById("add_post").addEventListener("click", function () {
    //    get input value 
    const comment = document.getElementById("add_text");
    const yourComment = comment.value;
    // create element 
    const newComment = document.createElement('p');
    newComment.innerText = yourComment;

    // append the comment 
    const commentContiner = document.getElementById("comment_continer")
    commentContiner.appendChild(newComment);

    // clear text area 
    comment.value = '';

})