const search=document.querySelector('#sch');
const icon=document.querySelector('.fa-search');
function showSearch() {
    search.classList.add('show');

    }
icon.addEventListener('click',showSearch);
const login=document.querySelector('.login');
const sign=document.querySelector('.sign');
const modal=document.querySelector('.modal-outer');
const modalIn=document.querySelector('.modal-inner');
const cl=document.querySelector('.cl');
function showLog(e) {
    modal.classList.add('unvil');
    let content=`
    <span class="cl">x</span>    
    <h3 id="logh">Login Form</h3>
    <form class="logf">
    <input class="logc" type="text" placeholder="USER NAME">
    <input class="logc" type="password" placeholder="PASSWORD">
    <input class="btnlog" type="button" value="Login" >
    </form>
    `;
    modalIn.innerHTML+=content;
    
}


login.addEventListener('click',showLog);

function removeMod() {
    modalIn.innerHTML='';
    modal.classList.remove('unvil');
    
}
modal.addEventListener('click',function(e) {
    const isOut=!e.target.closest('.modal-inner');
    const isCl=e.target.closest('.cl');
    console.log(e.target)
    
    if (isOut||isCl) {
        removeMod();
       
        
    }
    
});
function showSign(e) {
    modal.classList.add('unvil');
    let content=`
    <span class="cl">x</span>    
    <h3 id="logh">Sign Up</h3>
    <form class="logf">
    <input class="logc" type="text" placeholder="USER NAME">
    <input class="logc" type="email" placeholder="E-mail" >
    <input class="logc" type="password" placeholder="PASSWORD">
    <input class="logc" type="password" placeholder="RE-ENTER PASSWORD">
    <input class="btnlog" type="button" value="Sign Up" >
    </form>
    `;
    modalIn.innerHTML+=content;
    
}
sign.addEventListener('click',showSign);
const hero=document.querySelector('.hero');
const slideone=hero.querySelector('.slideone');
const slidetwo=hero.querySelector('.slidetwo');
const slidethree=hero.querySelector('.slidethree');
function slide() {
    setTimeout(function () {
        slidethree.style.transform=`scale(0)`;
        
    },4000)
    setTimeout(function () {
        slidetwo.style.transform=`scale(0)`;
        
    },8000)
    setTimeout(function () {
        slidetwo.style.transform=`scale(1)`;
        
    },16000)
    setTimeout(function () {
        slidethree.style.transform=`scale(1)`;
        
    },22000)
};
// slide();
// setInterval(slide,4000);
function runim(functorun,ms) {

    functorun();
    return setInterval(functorun,ms)
}

runim(slide,25000);

const aside=document.querySelector('.aside');
const h4=aside.querySelector('h4');
const asideImage=aside.querySelectorAll('img');
function move() {
    asideImage.forEach(image=>{
        setTimeout(function () {
            image.style.transform=`translateX(-20%)`;
            
        },1000)
        setTimeout(function () {
            image.style.transform=`translateX(-40%)`;
            
        },2000)
        setTimeout(function () {
            image.style.transform=`translateX(-60%)`;
            
        },3000)
        setTimeout(function () {
            image.style.transform=`translateX(-80%)`;
            
        },4000)
        setTimeout(function () {
            image.style.transform=`translateX(-100%)`;
            
        },5000)
        setTimeout(function () {
            image.style.transform=`translateX(-120%)`;
            
        },6000)
        setTimeout(function () {
            image.style.transform=`translateX(-140%)`;
            
        },7000)
        setTimeout(function () {
            image.style.transform=`translateX(-160%)`;
            
        },8000)
        setTimeout(function () {
            image.style.transform=`translateX(-180%)`;
            
        },9000)
        setTimeout(function () {
            image.style.transform=`translateX(-200%)`;
            
        },10000)
        setTimeout(function () {
            image.style.transform=`translateX(20%)`;
            
        },11000)
    })
    
}
runim(move,15000);
const tabs=document.querySelector('.tabs');
const tablist=tabs.querySelectorAll('[role="tab"]');
const tabpanel=tabs.querySelectorAll('[role="tabpanel"]');
function handleTab(event) {
    //hide all panels
    tabpanel.forEach(panel=>{
        panel.hidden= true;
        
    });
    tablist.forEach(tab=>{
        tab.setAttribute('aria-selected',false);
        
    })
    // event.target.setAttributes('ariaSelected',false);
    event.target.setAttribute('aria-selected',true);
    const id=event.target.id;
    const tabbs=document.querySelector(`[aria-labelledby="${id}"]`);
    tabbs.hidden=false;
    console.log(id)
    
    
}
tablist.forEach(button=>button.addEventListener('click',handleTab))

// move();
// function multiple(x, ms) {
//    return setTimeout(function() {
//     image.style.transform=`translateX(${x})`
    
// },ms) 
// }

