(function(global){
    function createMark(obj){
        var father = obj.father
        var mark = obj.mark
        var clas = obj.clas
        var inhtml = obj.inhtml ||''
        var name = document.createElement(mark)
        name.className = clas
        name.innerHTML = inhtml
        father.appendChild(name)

    }
    function $(dom) {
        return document.querySelectorAll(dom)
    } 
    var Cycl = function(){}
    Cycl.prototype = {
        creatCycl:function(json){
           var box = json.el
           var n = json.data.n
           var imgs = json.imgs
           createMark({
            father:box,
            mark:'div',
            clas:'box1'
           })
            var box1 = $('.box1')[0]
            imgs.forEach(item=>{
                var img = document.createElement('img')
                img.src = item
                box1.appendChild(img)
            })
            createMark({
                father:box,
                mark:'div',
                clas:'btn'
               })
            var btn = $('.btn')[0]
            createMark({
                father:btn,
                mark:'span',
                clas:'left',
                inhtml:'&lt;'
            })
            createMark({
                father:btn,
                mark:'span',
                clas:'right',
                inhtml:'&gt;'
            })
            createMark({
                father:box,
                mark:'div',
                clas:'circle'
            })
            var btnLeft = $('.left')[0]
            var btnRight = $('.right')[0]
            var circle = $('.circle')[0]
            var ul = document.createElement('ul')
            imgs.forEach(item=>{
                var li = document.createElement('li')
                ul.appendChild(li)
            })
            circle.appendChild(ul)
            
            img = $('.box1 img')
            lis = $('li')
            img[0].style.display = 'block'
            lis[0].style.background = 'yellow'
            btnLeft.onclick = function(){
                img[n].style.display = 'none'
                lis[n].style.background = '#fff'
                n--
                if(n<0){
                    n = img.length-1
                }
                img[n].style.display = 'block'
                lis[n].style.background = 'yellow'
            }
            btnRight.onclick = function(){
                img[n].style.display = 'none'
                lis[n].style.background = '#fff'
                n++
                if(n > img.length-1){
                    n = 0
                }
                img[n].style.display = 'block'
                lis[n].style.background = 'yellow'
            }
            Array.from(lis).forEach((item,index)=>{
                item.onclick = function(){
                    img[n].style.display = 'none'
                    lis[n].style.background = '#fff'
                    n = index
                    img[n].style.display = 'block'
                    lis[n].style.background = 'yellow'
                }
            })
        }
    }
    return global.Cycl = Cycl
})(window)