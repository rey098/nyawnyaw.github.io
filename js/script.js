// toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// kalo hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
}

// toggle class active buat search form
const searchForm = document.querySelector('.search-form');
const searchBox= document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// toggle class active untuk shopping cart


// klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click',function(e){
    if(!hm.contains(e.target ) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }

    if(!sb.contains(e.target ) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});
                    /* modal box index.html */
// modal box es teler
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }
});
    
// modal box kopi
const itemDetailModalkopi = document.querySelector('#item-detail-modal-kopi');
const itemDetailButtonkopi = document.querySelectorAll('.item-detail-button-kopi');

itemDetailButtonkopi.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModalkopi.style.display = 'flex';
        e.preventDefault();
    }
});
    
// modal box rotigoreng
const itemDetailModalroti = document.querySelector('#item-detail-modal-rotigorengoriginal');
const itemDetailButtonroti = document.querySelectorAll('.item-detail-button-rotigorengoriginal');

itemDetailButtonroti.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModalroti.style.display = 'flex';
        e.preventDefault();
    }
});
    
// modal box bananaroll
const itemDetailModalbanana = document.querySelector('#item-detail-modal-bananaroll');
const itemDetailButtonbanana = document.querySelectorAll('.item-detail-button-bananaroll');

itemDetailButtonbanana.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModalbanana.style.display = 'flex';
        e.preventDefault();
    }
});
    
// modal box burger
const itemDetailModalburger = document.querySelector('#item-detail-modal-burger');
const itemDetailButtonburger = document.querySelectorAll('.item-detail-button-burger');

itemDetailButtonburger.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModalburger.style.display = 'flex';
        e.preventDefault();
    }
});
    
// klik tombol close modal es teler
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}
// klik tombol close modal kopi
document.querySelector('.modal-kopi .close-icon').onclick = (e) => {
    itemDetailModalkopi.style.display = 'none';
    e.preventDefault();
}

// klik tombol close modal roti goreng
document.querySelector('.modal-rotigorengoriginal .close-icon').onclick = (e) => {
    itemDetailModalroti.style.display = 'none';
    e.preventDefault();
}

// klik tombol close modal banana
document.querySelector('.modal-bananaroll .close-icon').onclick = (e) => {
    itemDetailModalbanana.style.display = 'none';
    e.preventDefault();
}

// klik tombol close modal banana
document.querySelector('.modal-burger .close-icon').onclick = (e) => {
    itemDetailModalburger.style.display = 'none';
    e.preventDefault();
}

// klik diluar modal 
window.onclick = (e) => {
    // es teler
    if (e.target === itemDetailModal ){
        itemDetailModal.style.display = 'none';
    }
    // klik diluar modal kopi
    if (e.target === itemDetailModalkopi ){
        itemDetailModalkopi.style.display = 'none';
    }
    // klik diluar modal roti goreng
    if (e.target === itemDetailModalroti ){
        itemDetailModalroti.style.display = 'none';
    }
    // klik diluar modal banana roll
    if (e.target === itemDetailModalbanana ){
        itemDetailModalbanana.style.display = 'none';
    }
    // klik diluar modal burger 
    if (e.target === itemDetailModalburger ){
        itemDetailModalburger.style.display = 'none';
    }
}

