

const blogData = [
    {
        author: "New Author 1",
        publishedDate: "New Date 1",
        imageSrc: "assets/images/blog-img1.webp",
        title: "New Blog Title 1",
        brief: "New blog brief 1",
        fullContent: "This is the full content for Blog 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat neque. In at consequat ex, a hendrerit dolor. Aliquam eget mi nibh. Ut eu urna iaculis purus accumsan ornare quis malesuada tortor. Curabitur vulputate lectus ut mi faucibus consectetur. Duis sit amet facilisis justo. Aenean tortor leo, aliquet sit amet mattis ac, aliquam a mauris.<br><br> Pellentesque quis cursus magna. Nulla facilisi. Maecenas tristique varius elit eget pharetra. Suspendisse vehicula consectetur massa, nec tempor sem vehicula at. Ut consequat bibendum congue. Pellentesque vel commodo eros.Proin sed justo risus. Nulla nec tortor libero. Quisque aliquam, risus nec tristique gravida, leo odio semper lacus, vitae dapibus tortor orci quis diam. Cras rhoncus congue enim, in luctus massa vulputate ac. Vivamus eu leo dui. Etiam tempor egestas nibh in lobortis. Etiam dignissim facilisis elit, ut tristique risus. Quisque lacinia arcu eget fringilla bibendum. Phasellus eleifend, lacus at blandit molestie, velit nunc tincidunt dui, sed elementum justo urna id quam.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat neque. In at consequat ex, a hendrerit dolor. Aliquam eget mi nibh. Ut eu urna iaculis purus accumsan ornare quis malesuada tortor. Curabitur vulputate lectus ut mi faucibus consectetur. Duis sit amet facilisis justo. Aenean tortor leo, aliquet sit amet mattis ac, aliquam a mauris.<br><br> Pellentesque quis cursus magna. Nulla facilisi. Maecenas tristique varius elit eget pharetra. Suspendisse vehicula consectetur massa, nec tempor sem vehicula at. Ut consequat bibendum congue. Pellentesque vel commodo eros.Proin sed justo risus. Nulla nec tortor libero. Quisque aliquam, risus nec tristique gravida, leo odio semper lacus, vitae dapibus tortor orci quis diam. Cras rhoncus congue enim, in luctus massa vulputate ac. Vivamus eu leo dui. Etiam tempor egestas nibh in lobortis. Etiam dignissim facilisis elit, ut tristique risus. Quisque lacinia arcu eget fringilla bibendum. Phasellus eleifend, lacus at blandit molestie, velit nunc tincidunt dui, sed elementum justo urna id quam.",
    },
    {
        author: "New Author 2",
        publishedDate: "New Date 2",
        imageSrc: "assets/images/blog-img2.webp",
        title: "New Blog Title 2",
        brief: "New blog brief 2",
        fullContent: "This is the full content for Blog 2.",
    },
    {
        author: "New Author 3",
        publishedDate: "New Date 3",
        imageSrc: "assets/images/blog-img4.webp",
        title: "New Blog Title 3",
        brief: "New blog brief 3",
        fullContent: "This is the full content for Blog 3.",
    },
    {
        author: "New Author 4",
        publishedDate: "New Date 4",
        imageSrc: "assets/images/blog-img3.jpg",
        title: "New Blog Title 4",
        brief: "New blog brief 4",
        fullContent: "This is the full content for Blog 4.",
    },
    {
        author: "New Author 5",
        publishedDate: "New Date 5",
        imageSrc: "assets/images/blog-img5.jpg",
        title: "New Blog Title 5",
        brief: "New blog brief 5",
        fullContent: "This is the full content for Blog 5.",
    },
    {
        author: "New Author 6",
        publishedDate: "New Date 6",
        imageSrc: "assets/images/blog-img6.jpg",
        title: "New Blog Title 6",
        brief: "New blog brief 6",
        fullContent: "This is the full content for Blog 6.",
    },

];


let blogIndex = 0;

function loadMoreBlogs() {
    const container = document.getElementById("blog-container");


    for (let i = 0; i < 3; i++) {
        if (blogIndex < blogData.length) {
            const blog = blogData[blogIndex];
            const newBlogBox = createBlogBox(blog);
            container.appendChild(newBlogBox);
            blogIndex++;
        } else {

            document.getElementById("load-more-button").style.display = "none";
            break;
        }
    }
}

// function createBlogBox(blog) {
//   const blogBox = document.createElement("div");
//   blogBox.className = "blog-box";


//   blogBox.innerHTML = `
//     <div class="blog-img">
//       <img src="${blog.imageSrc}" alt="">
//     </div>
//     <div class="blog-details">
//       <span class="author">${blog.author}</span>
//       <span class="published-date">${blog.publishedDate}</span>
//     </div>
//     <div class="blog-content">
//       <h4 class="blog-head">${blog.title}</h4>
//       <p class="blog-breif">${blog.brief}</p>
//       <button class="readMore">Read More</button>
//       <div class="fullBlogcontent">
//         <i class="fa-solid fa-xmark close-btn"></i>
//         <div class='fullHead'>${blog.title}</div>
//         <div class='fullDetailAuthor'>${blog.author}</div>
//         <div class='fullDetail'>${blog.fullContent}</div>
//       </div>

//     </div>
//   `;

//   return blogBox;
// }

// loadMoreBlogs();


// Creating dynamic blog box content
function createBlogBox(blog) {
    const blogBox = document.createElement("div");
    blogBox.className = "blog-box";

    blogBox.innerHTML = `
    <div class="blog-img">
      <img src="${blog.imageSrc}" alt="">
    </div>
    <div class="blog-details">
      <span class="author">${blog.author}</span>
      <span class="published-date">${blog.publishedDate}</span>
    </div>
    <div class="blog-content">
      <h4 class="blog-head">${blog.title}</h4>
      <p class="blog-breif">${blog.brief}</p>

      <a href="blog-details${blogIndex}" class="readMore">Read More</a>
    </div>
  `;

    return blogBox;
}


loadMoreBlogs();





// read more blog logic(old)
// const blogContainer = document.getElementById("blog-container");
// const blogPage = document.querySelector(".blog-page-section");

// blogContainer.addEventListener('click', function (event) {

//     const target = event.target;

//     if (target.classList.contains('readMore')) {
//         // console.log('Button clicked ok');

//         const blogPost = target.closest(".blog-box");
//         const fullContent = blogPost.querySelector(".fullBlogcontent");
//         fullContent.style.display = 'block';
//         // console.log(fullContent);

//         fullContent.querySelector('.close-btn').addEventListener('click', function () {
//             fullContent.style.display = 'none';
//         });
//         window.addEventListener('click', function (event) {
//             // console.log(event.target);
//             if (event.target === blogContainer || event.target === blogPage) {
//                 fullContent.style.display = "none";
//             }
//         });
//     }
// });