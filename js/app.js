const sidebarOpen = () =>{
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar-menu');

    burger.addEventListener('click',()=>{
        sidebar.classList.toggle('sidebar-active');
    });
}

sidebarOpen();