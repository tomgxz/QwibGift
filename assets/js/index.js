$(document).ready(function() {

  document.body.classList.remove("visibly-hidden")


  function createHexCanvas(id) {

    class Cube {
      constructor(color) {
        this.x = (Math.random() - 0.5) * width;
        this.y = (Math.random() - 0.5) * width;
        this.z = (Math.random() - 0.5) * width;
        this.radius = Math.floor(Math.random() * 12 +  10);
        this.strokeColor=color

        TweenMax.to(this, Math.random() * 20 + 15, {
          x: (Math.random() - 0.5) * (width * 0.5),
          y: (Math.random() - 0.5) * (width * 0.5),
          z: (Math.random() - 0.5) * width,
          repeat: -1,
          yoyo: true,
          ease: Power2.EaseOut,
          delay: Math.random() * -35
        });
      }

      project(x, y, z) {
        const sizeProjection = perspective / (perspective + z);
        const xProject = (x * sizeProjection) + projectionCenterX;
        const yProject = (y * sizeProjection) + projectionCenterY;
        return {
          size: sizeProjection,
          x: xProject,
          y: yProject
        }
      }

      draw() {
        if (this.z < -perspective + this.radius) {
          return;
        }
        for (let i = 0; i < CUBE_LINES.length; i++) {
          const v1 = {
            x: this.x + (this.radius * CUBE_VERTICES[CUBE_LINES[i][0]][0]),
            y: this.y + (this.radius * CUBE_VERTICES[CUBE_LINES[i][0]][1]),
            z: this.z + (this.radius * CUBE_VERTICES[CUBE_LINES[i][0]][2])
          };
          const v2 = {
            x: this.x + (this.radius * CUBE_VERTICES[CUBE_LINES[i][1]][0]),
            y: this.y + (this.radius * CUBE_VERTICES[CUBE_LINES[i][1]][1]),
            z: this.z + (this.radius * CUBE_VERTICES[CUBE_LINES[i][1]][2])
          };
          const v1Project = this.project(v1.x, v1.y, v1.z);
          const v2Project = this.project(v2.x, v2.y, v2.z);
          ctx.lineWidth=2.5;
          ctx.lineCap="round";
          ctx.lineJoin="round";
          ctx.strokeStyle=this.strokeColor
          ctx.beginPath();
          ctx.moveTo(v1Project.x, v1Project.y);
          ctx.lineTo(v2Project.x, v2Project.y);
          ctx.stroke();
        }
      }
    }

    function onResize() {
      width=canvas.offsetWidth;
      height=canvas.offsetHeight;
      perspective = width * 0.8
      projectionCenterX = width/2;
      projectionCenterY = height/2;

      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
        ctx.scale(2, 2);
      } else {
        canvas.width = width;
        canvas.height = height;
      }
    }


    var canvas = document.getElementById(id);

    var width=canvas.offsetWidth;
    var height=canvas.offsetHeight;
    var ctx=canvas.getContext("2d")

    window.addEventListener("resize",onResize);

    onResize();

    var perspective = width * 0.5; // fov
    var projectionCenterX = width/2;
    var projectionCenterY = height/2;

    const CUBE_VERTICES = [
    [0, 0, 0],
    [0.8,-1.3, 0],
    [2.4,-1.3, 0],
    [3.2, 0, 0],
    [2.4, 1.3, 0],
    [0.8, 1.3, 0],

    [0, 0, 1],
    [0.8,-1.3, 1],
    [2.4,-1.3, 1],
    [3.2, 0, 1],
    [2.4, 1.3, 1],
    [0.8, 1.3, 1],
    ];
    const CUBE_LINES = [
    [0,1],
    [1,2],
    [2,3],
    [3,4],
    [4,5],
    [5,0],

    [6,7],
    [7,8],
    [8,9],
    [9,10],
    [10,11],
    [11,6],

    [0,6],
    [1,7],
    [2,8],
    [3,9],
    [4,10],
    [5,11]

    ];

    var colorChoices = ["#425980","#D81836","#E93A55","#EE687C","#3D638A","#4C7BAC","#6E96BF"];

    var shapes=[];

    for (var i=0;i<50;i++) {
      shapes.push(new Cube(colorChoices[Math.floor(Math.random() * colorChoices.length)]));
    }

    function render() {
      ctx.clearRect(0,0,width,height)
      for (let i = 0; i < shapes.length; i++) {
        shapes[i].project();
      }

      shapes.sort((shape1, shape2) => { return shape1.sizeProjection - shape2.sizeProjection; });

      for (let i = 0; i < shapes.length; i++) {
        shapes[i].draw();
      }
      window.requestAnimationFrame(render);
    }

    render()
  }

  createHexCanvas('section-one-canvas')

  createHexCanvas('section-five-canvas')



});

$(document).ready(function() {

    ScrollTrigger.matchMedia({
      "(prefers-reduced-motion: no-preference)": function() {

          gsap.utils.toArray(".text-scroll-reveal").forEach((item) => { gsap.set(item,{autoAlpha:0}) });
          gsap.utils.toArray(".section.one .text-scroll-reveal.three").forEach((item) => { gsap.set(item,{yPercent:100}) });
          gsap.utils.toArray(".section.two .card").forEach((item) => { gsap.set(item,{y:25,autoAlpha:0}) });
          gsap.set(".section.three .section-background",{css:{scale:1.3}});
          gsap.utils.toArray(".section.five .container-item:not(:first-of-type) .icon .faicon").forEach((item) => { gsap.set(item,{opacity:0,xPercent:100}) });
          gsap.utils.toArray(".section.five .container-item:not(:first-of-type) .text").forEach((item) => { gsap.set(item,{opacity:0,y:60}) })
          gsap.set(".section.five",{opacity:0})
          gsap.set(".section.five .section-canvas-background",{opacity:0,filter:"blur(16px)"})

          // section one pin
          gsap.to(".section.one",{scrollTrigger:{
                trigger: ".section.one",
                start: "top top",
                end: "+=1296",
                scrub: true,
                pin: true,
                anticipatePin: 1,
              }});

          // qwibgift title reveal
          gsap.to(".section.one .text-scroll-reveal.one",{css:{autoAlpha:1},scrollTrigger:{
                trigger: "body",
                start: 96,
                end: "+=250",
                scrub: true,
              }});

          // caption one reveal
          gsap.to(".section.one .text-scroll-reveal.two",{css:{autoAlpha:1},scrollTrigger:{
                trigger: "body",
                start: 96+250+100,
                end: "+=250",
                scrub: true,
              }});

          // caption one move up
          gsap.to(".section.one .text-scroll-reveal.two",{css:{yPercent:-100},scrollTrigger:{
                trigger: "body",
                start: 96+250+100+250+100,
                end: "+=250",
                scrub: true,
              }});

          // caption two reveal
          gsap.to(".section.one .text-scroll-reveal.three",{css:{yPercent:0,autoAlpha:1},scrollTrigger:{
                trigger: "body",
                start: 96+250+100+250+100,
                end: "+=250",
                scrub: true,
              }});

          // canvas blur
          gsap.to(".section.one .section-canvas-background",{css:{filter:"blur(16px)"},scrollTrigger:{
                trigger: "body",
                start: 96+250+100+250+100,
                end: "+=500",
                scrub: true,
              }});

          // canvas fadeout
          gsap.to(".section.one .section-canvas-background",{css:{opacity:0},scrollTrigger:{
                trigger: "body",
                start: 96+250+100+250+100+250,
                end: "+=250",
                scrub: true,
              }});

          // first card
          gsap.to(".section.two .card.one",{css:{autoAlpha:1,y:0},scrollTrigger:{
                trigger: ".section.two",
                start: "top 75%",
                end: "+=250",
                scrub: true
          }});

          // second card
          gsap.to(".section.two .card.two",{css:{autoAlpha:1,y:0},scrollTrigger:{
                trigger: ".section.two",
                start: "top+=150 75%",
                end: "+=250",
                scrub: true
          }});

          // third card
          gsap.to(".section.two .card.three",{css:{autoAlpha:1,y:0},scrollTrigger:{
                trigger: ".section.two",
                start: "top+=300 75%",
                end: "+=250",
                scrub: true
          }});

          // image moving
          var timer=0;
          var duration=0;
          var cards=["one","two","three"];
          for (var i=0;i<3;i++) {
              var cardName = cards[i]
              timer=Math.floor((Math.random())*10)
              duration=Math.floor((Math.random())*100)/100
              var imageAni = gsap.timeline({repeat:-1,yoyo:true})
              imageAni.from(".section.two .card."+cardName+" .icon",{x:-timer})
              imageAni.to(".section.two .card."+cardName+" .icon",{x:timer,duration:duration*4})
            }

          // background scale
          gsap.to(".section.three .section-background",{css:{scale:1},scrollTrigger:{
              trigger:".section.three",
              start:"top bottom",
              end: "bottom top",
              ease:Power1.in,
              scrub: true,
            }});

          // section content pin
          gsap.to(".section.three .section-content",{css:{opacity:1},scrollTrigger:{
              trigger:".section.three .section-content",
              start:"top top",
              end:"+=700",
              pin:true,
              anticipatePin:0,
            }});

          // "the #1"
          gsap.to(".section.three .text-scroll-reveal.one",{css:{autoAlpha:1},scrollTrigger:{
              trigger: ".section.three",
              start: "top+=256 top",
              end: "+=250",
              scrub: true,
            }});

          // "gift service subscription"
          gsap.to(".section.three .text-scroll-reveal.two",{css:{autoAlpha:1},scrollTrigger:{
              trigger: ".section.three",
              start: "top+=356 top",
              end: "+=250",
              scrub: true,
            }});

          // divider
          gsap.to(".section.three .text-scroll-reveal.three",{css:{autoAlpha:1},scrollTrigger:{
              trigger: ".section.three",
              start: "top+=456 top",
              end: "+=250",
              scrub: true,
            }});

          // background opacity out
          gsap.to(".section.three .section-background",{css:{opacity:0},scrollTrigger:{
              trigger:".section.three .section-content",
              start:"top+=50 top",
              end: "+=200",
              scrub: true,
            }});

          // section three text to dark
          gsap.to(".section.three .text.light",{css:{color:"#121212"},scrollTrigger:{
              trigger:".section.three .section-content",
              start:"top+=50 top",
              end: "+=200",
              scrub: true,
              onLeave: function() {
                gsap.utils.toArray(".section.three .text.light").forEach((item) => { item.classList.remove("light");item.classList.add("dark") })},
              onEnterBack: function() {
                gsap.utils.toArray(".section.three .text.dark").forEach((item) => { item.classList.remove("dark");item.classList.add("light") })},
            }});

          // section four text to dark
          gsap.to(".section.four .text.light",{css:{color:"#121212"},scrollTrigger:{
              trigger:".section.three .section-content",
              start:"top+=50 top",
              end: "+=200",
              scrub: true,
              onLeave: function() {
                gsap.utils.toArray(".section.four .text.light").forEach((item) => { item.classList.remove("light");item.classList.add("dark") })},
              onEnterBack: function() {
                gsap.utils.toArray(".section.four .text.dark").forEach((item) => { item.classList.remove("dark");item.classList.add("light") })},
            }});

          // reveal first card
          gsap.to(".section.five",{css:{opacity:1},scrollTrigger:{
              trigger:".section.three .section-content",
              start:"top+=250 top",
              end:"+=200",
              scrub:true,
          }})

          // reveal hex background
          gsap.to(".section.five .section-canvas-background",{css:{opacity:0.5,filter:"blur(6px)"},scrollTrigger:{
              trigger:".section.five",
              start:"top top",
              end:"+=800",
              scrub:true,
            }})

          // section five pin
          gsap.to(".section.five .section-content",{css:{opacity:1},scrollTrigger:{
              trigger:".section.five .section-content",
              start:"top top",
              end:"+=5000",
              pin:true,
              anticipatePin:1,
            }});

          //return
          var counter=0;
          gsap.utils.toArray(".section.five .container-item").forEach((item) => {

              if (!(counter==0)) {
                gsap.to(item.querySelectorAll(".text"),{css:{opacity:1,y:0},scrollTrigger:{
                    trigger:".section.five",
                    start:"bottom+="+((counter*500)+100-400)+" bottom",
                    end:"+=200",
                    scrub:true,
                }})

                gsap.to(item.querySelectorAll(".faicon"),{css:{opacity:1,xPercent:0},scrollTrigger:{
                    trigger:".section.five",
                    start:"bottom+="+((counter*500)+100-400)+" bottom",
                    end:"+=200",
                    scrub:true,
                }})
              }

              if (!(counter==7)) {

                gsap.to(item.querySelectorAll(".text"),{css:{opacity:0},scrollTrigger:{
                    trigger:".section.five",
                    start:"bottom+="+((counter*500)+600-400)+" bottom",
                    end:"+=200",
                    scrub:true,
                    immediateRender:false,
                }})

                gsap.to(item.querySelectorAll(".faicon"),{css:{opacity:0,xPercent:-50},scrollTrigger:{
                    trigger:".section.five",
                    start:"bottom+="+((counter*500)+600-400)+" bottom",
                    end:"+=200",
                    scrub:true,
                    immediateRender:false,
                }})

              }

              counter++;
          });

          // hide canvas
          gsap.to(".section.five .section-canvas-background",{css:{autoAlpha:0},scrollTrigger:{
              trigger:".section.six",
              start:"top top",
              end:"+=1",
              scrub:true,
              immediateRender:false,
            }})
      }
    });
});
