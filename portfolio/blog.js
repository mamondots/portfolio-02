document.getElementById('blogBox').addEventListener('click', function(){
    document.getElementById('singleBlogPage').classList.add('is-active');
 });
 
 document.getElementById('closeBlog').addEventListener('click', function(){
     document.getElementById('singleBlogPage').classList.remove('is-active');
  });