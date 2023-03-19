const navicon = document.getElementById('navicon');
const menubar = document.getElementById('menubar');
const menubarul = document.getElementById('menubarul');

const displaySize =()=>{
    let bodywidth = window.screen.width;

    if(bodywidth < 730){
        menubar.classList.add('hidden');
        navicon.classList.remove('hidden');
    }else{
        menubar.classList.remove('hidden');
        navicon.classList.add('hidden');
        menubar.classList.remove('menubarfortoggle');
        menubarul.classList.remove('flex-col');
    }
}

window.addEventListener('resize',()=>{
    displaySize();
});

navicon.addEventListener('click',()=>{
   const checkBox = document.getElementById('checkbox');
   if(checkBox.value == 'on'){
    menubar.classList.add('menubarfortoggle');
    menubar.classList.remove('hidden');
    menubarul.classList.add('flex-col');
    checkBox.value = 'off';
   }else{
    menubar.classList.remove('menubarfortoggle');
    menubar.classList.add('hidden');
    menubarul.classList.remove('flex-col');
    checkBox.value = 'on';
   };
});