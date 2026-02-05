const reels = [
  {
    username: "aarav.codes",
    likeCount: 12450,
    isLiked: true,
    commentCount: 342,
    shareCount: 189,
    isFollowed: true,
    caption: "Built this feature in React without using any library. Clean code wins every time 🚀",
    video: "./reels/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    username: "design.with.em",
    likeCount: 9870,
    isLiked: true,
    commentCount: 210,
    shareCount: 154,
    isFollowed: false,
    caption: "Minimal UI is not about less, it’s about clarity. Thoughts? 🎨",
    video: "./reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    username: "rohan.ai",
    likeCount: 15320,
    isLiked: true,
    commentCount: 489,
    shareCount: 276,
    isFollowed: true,
    caption: "This ML model reduced false positives by 32%. Data really tells the story 📊",
    video: "./reels/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    username: "marketing.soph",
    likeCount: 7640,
    isLiked: false,
    commentCount: 132,
    shareCount: 98,
    isFollowed: false,
    caption: "Posting consistently > posting perfectly. Growth comes with patience 📈",
    video: "./reels/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    username: "product.dan",
    likeCount: 11240,
    isLiked: true,
    commentCount: 365,
    shareCount: 220,
    isFollowed: true,
    caption: "A good product roadmap answers *why* before *what*. PM life explained.",
    video: "./reels/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    username: "code.with.yash",
    likeCount: 18650,
    isLiked: true,
    commentCount: 590,
    shareCount: 410,
    isFollowed: true,
    caption: "College projects hit different when you build them like real products 💻",
    video: "./reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
  },
  {
    username: "ux.daily",
    likeCount: 6420,
    isLiked: false,
    commentCount: 98,
    shareCount: 76,
    isFollowed: false,
    caption: "Good UX is invisible. Bad UX is unforgettable.",
    video: "./reels/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    username: "devops.jay",
    likeCount: 9030,
    isLiked: true,
    commentCount: 221,
    shareCount: 143,
    isFollowed: false,
    caption: "Automated the entire deployment pipeline. Sleep > manual releases ⚙️",
    video: "./reels/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    username: "startup.diaries",
    likeCount: 13480,
    isLiked: false,
    commentCount: 412,
    shareCount: 305,
    isFollowed: true,
    caption: "Nobody talks about the boring days of building a startup. This is one of them.",
    video: "./reels/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    username: "learn.tech.fast",
    likeCount: 15890,
    isLiked: true,
    commentCount: 527,
    shareCount: 368,
    isFollowed: true,
    caption: "If you’re learning tech in 2025, consistency matters more than speed 🔁",
    video: "./reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
  }
];

var allReels = document.querySelector('.all-reels')

function addData(){
  var sum = ''
reels.forEach(function(elem,idx){
    sum = sum + `<div class="reels">
                    <video autoplay muted src="${elem.video}"></video>
                    <img class="main-img" src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="">
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed?'Follow':'Unfollow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class="ri-heart-3-line">':'</h6><i class="love ri-heart-3-fill"></i>'}</i></h4>
                            <h6>${elem.likeCount}
                        </div>
                         <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-plane-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

allReels.innerHTML = sum
}

addData()

allReels.addEventListener('click', function(dets){
   if(dets.target.className =='like'){
    if(!reels[dets.target.id].isLiked){
  reels[dets.target.id].likeCount--
  reels[dets.target.id].isLiked = true
  }else{
    reels[dets.target.id].likeCount++
  reels[dets.target.id].isLiked = false
  }
  addData()
  
  if(dets.target.className == 'follow'){
    if(reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed = false
    }
   }else{
    reels[dets.target.id].isFollowed = true
   }
   addData()
  }
  
})
