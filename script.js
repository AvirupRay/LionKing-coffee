var tl=gsap.timeline()

tl.from(".nav1,.nav2 a,.nav3 a,.nav3 button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2
})

tl.from(".text h1",{
    y:200,
    duration:1,
    opacity:0,
})

tl.from("#p1,#p2,#p3",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.4,
})
tl.from("h4",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.2,
})
tl.to("h4",{
    bottom:2,
    repeat:-1,
    yoyo:true,
    duration: 0.7
})

var box=[".box1",".box2",".box3",".box4"]
box.forEach(function(elem){
    let a=document.querySelector(`${elem}`)
    let para=document.querySelector(`${elem} p`)
    let img=document.querySelector(`${elem} img`)
    let name=document.querySelector(`${elem} h2`)
    let btn=document.querySelector(`${elem} button`)
    let det=document.querySelector(`${elem} .det`)
        btn.addEventListener("mouseenter",function(){
            gsap.to(a,{
                scale:1.3,
                backgroundColor:"rgb(223,175,103)",
                delay:0.2
                
            })
            gsap.to(para,{
                y: -100,
                delay:0.2,
            })
            img.style.transform="translateY(-100px)"   
            gsap.to(name,{
                color:"white",
                y:-100,
                delay:0.2
            })
            gsap.to(btn,{
                backgroundColor:"white",
                color:"rgb(223,175,103)",
                scale:1.5,
                y:-30,
                delay:0.2
            })
            gsap.to(det,{
                y:-40,
                delay:0.18,
                display:'block',

            })
        })
        btn.addEventListener("mouseout",function(){
            gsap.to(a,{
                scale:1,
                backgroundColor:"white",
                delay:0.2
            })
            gsap.to(para,{
                y: 0,
                delay:0.2,
            })
            img.style.transform="translateY(0px)"
            gsap.to(name,{
                color:"rgb(223,175,103)",
                y:0,
                delay:0.2
            })
            gsap.to(btn,{
                backgroundColor:"rgb(223,175,103)",
                color:"white",
                scale: 1,
                y:0
            })
            gsap.to(det,{
                delay:-1,
                y:0,
                display:'none',
            })
        })
})