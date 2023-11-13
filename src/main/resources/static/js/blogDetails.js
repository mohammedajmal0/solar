// read more logic
// Retrieve the index from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
// const index = urlParams.get("index");
const index=document.getElementById("indexValue").innerHTML;
console.log(index)

if (index !== null) {
    // Get the blog data based on the index
    const blog = blogData[index];

    // Display the blog content in the page
    const blogTitle = document.getElementById("blog-details-title");
    const blogPublishDate = document.getElementById("blog-details-published-date");
    const blogAuthor = document.getElementById("blog-details-author");
    const blogImage = document.getElementById("blog-details-image");
    const blogContent = document.getElementById("blog-details-content");

    if (blog) {
        blogTitle.textContent = blog.title;
        blogPublishDate.textContent =`Published on ${blog.publishedDate}`;
        blogAuthor.innerHTML = `<i class="fa-solid fa-user"></i>${blog.author}`;
        blogImage.innerHTML = `<img src='${blog.imageSrc}'>`;
        blogContent.innerHTML = blog.fullContent;
    }
}


// back button
function goBackToBlogPage() {
// Navigate back in the browser's history
    window.history.back();
}