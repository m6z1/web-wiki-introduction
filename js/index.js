console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.querySelector(".comment-input");
  const submitButton = document.querySelector("button[type='button']");
  const commentList = document.querySelector(".comment-list");

  // 포커스 시 placeholder 제거
  commentInput.addEventListener("focus", function () {
    if (commentInput.getAttribute("data-placeholder")) {
      commentInput.removeAttribute("data-placeholder");
    }
  });

  // 포커스 아웃 시 내용 없으면 placeholder 다시 보이기
  commentInput.addEventListener("blur", function () {
    if (commentInput.textContent.trim() === "") {
      commentInput.setAttribute(
        "data-placeholder",
        "정말 멋진 글이네요. 크루가 감동할 수 있도록 훈훈해지는 댓글 부탁 드립니다."
      );
    }
  });

  // 등록 버튼 클릭 시 댓글 추가
  submitButton.addEventListener("click", function () {
    let commentText = commentInput.textContent.trim();

    if (commentText === "") {
      alert("댓글을 입력해주세요!");
      return;
    }

    // 새로운 댓글 요소 생성
    const newComment = document.createElement("li");
    newComment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${commentText}</div>
      </div>
    `;

    // 댓글 리스트에 추가
    commentList.appendChild(newComment);

    // 입력 필드 초기화
    commentInput.textContent = "";
    commentInput.setAttribute(
      "data-placeholder",
      "정말 멋진 글이네요. 크루가 감동할 수 있도록 훈훈해지는 댓글 부탁 드립니다."
    );

    // 알림 창 띄우기
    alert("댓글이 등록되었습니다");
  });
});
