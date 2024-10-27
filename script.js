document.getElementById('scrollup').addEventListener('click',
    function() {
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      });
    });



    function showmenu(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    };


    function closemenu(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    };