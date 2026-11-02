const pages=[...document.querySelectorAll('[data-slide]')];
const selector=document.querySelector('#slide-select'),previous=document.querySelector('#previous-slide'),next=document.querySelector('#next-slide');
let current=1;
function render(){const match=location.hash.match(/^#slide=(\d+)$/);current=match?Math.min(pages.length,Math.max(1,Number(match[1]))):1;for(const page of pages)page.hidden=Number(page.dataset.slide)!==current;selector.value=String(current);previous.disabled=current===1;next.disabled=current===pages.length;document.querySelector('#slide-counter').textContent=`${current} / ${pages.length}`;document.querySelectorAll('[data-index]').forEach(a=>a.setAttribute('aria-current',String(Number(a.dataset.index)===current)));document.title=`${current}쪽 · 사업계획서 전체 읽기`;}
function navigate(n){location.hash=`slide=${n}`;}
selector.addEventListener('change',()=>navigate(Number(selector.value)));previous.addEventListener('click',()=>navigate(current-1));next.addEventListener('click',()=>navigate(current+1));window.addEventListener('hashchange',render);render();
