function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

// 添加 ESC 键关闭功能
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && document.querySelector('.sidebar').classList.contains('active')) {
        toggleSidebar();
    }
});

// 添加这些调试代码
window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    const container = document.getElementById('navbar-container');
    if (container) {
        console.log('Container found');
        container.innerHTML = navbarContent;
        console.log('Navbar content inserted');
    } else {
        console.error('Container not found');
    }
});