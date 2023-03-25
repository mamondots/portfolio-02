document.getElementById('workBox').addEventListener('click', function(){
   document.getElementById('single-page').classList.add('active');
});

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('single-page').classList.remove('active');
 });

 document.getElementById('blogBox').addEventListener('click', function(){
   document.getElementById('singleBlogPage').classList.add('is-active');
});

document.getElementById('closeBlog').addEventListener('click', function(){
    document.getElementById('singleBlogPage').classList.remove('is-active');
 });