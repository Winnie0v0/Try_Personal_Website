var 
	typed = $(".typed");
	E=false

  function Chinese(){
      E=false;
      x=document.getElementById("hi")
      x.innerHTML="Hi, I'm &#10; 宗筱雯"
      x1=document.getElementById("I")
	  x1.innerHTML="我想 <img class='img-fluid' src='paw2.png' alt='' width='35'/>"
	  x2=document.getElementById("intro")
	  x2.innerHTML="我目前是美国史密斯学院大一的学生，主修计算机专业。"
	  x3=document.getElementById("winter_1")
	  x3.innerHTML="<img class='img-fluid' src='cat.png' alt='' width='35'/> 这个寒假"
	  x4=document.getElementById("winter_2")
	  x4.innerHTML="我在<a href='https://www.ksyun.com'>金山云</a>实习。"
	  x5=document.getElementById("summer_1")
	  x5.innerHTML="<img class='img-fluid' src='fish.png' alt='' width='35'/> 这个暑假"
	  x6=document.getElementById("summer_2")
	  x6.innerHTML="未完待续..."
	  x7=document.getElementById("aca_1")
	  x7.innerHTML="<img class='img-fluid' src='paw3.png' alt='' width='30'/> 学术经历"
	  x8=document.getElementById("aca_2")
	  x8.innerHTML="CSC111课程：学习Python语言"
	  x9=document.getElementById("aca_3")
	  x9.innerHTML="这是我们期末制作的<a href=''>小游戏</a>!"
	  x10=document.getElementById("aca_4")
	  x10.innerHTML="SDS192课程: 学习R语言"
	  x11=document.getElementById("aca_5")
	  x11.innerHTML="点击这里看看我的<a href=''>期末成果展示</a>!"
	  
	  $(() => {
		if(E==true){
			typed.typed({
				strings: ["programming.", "designing.",  "sketching.", "on my way to somewhere."],
				typeSpeed: 140,
				loop: true,
			  });
			}
		else{
			  typed.typed({
				strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。"],
				typeSpeed: 140,
				loop: true,
			  });
			}	
	});
  }
    
  function English(){
      E=true;
      x=document.getElementById("hi")
      x.innerHTML="Hi, I'm &#10; Winnie."
      x1=document.getElementById("I")
	  x1.innerHTML="I am likely <img class='img-fluid' src='paw2.png' alt='' width='35'/>"
	  x2=document.getElementById("intro")
	  x2.innerHTML="I am currently in my first year of the Computer Science Master's Degree at Smith College in Northampton, MA."
	  x3=document.getElementById("winter_1")
	  x3.innerHTML="<img class='img-fluid' src='cat.png' alt='' width='35'/> This Winter"
	  x4=document.getElementById("winter_2")
	  x4.innerHTML="I'm interning at <a href='https://www.ksyun.com'>Ksyun</a>."
	  x5=document.getElementById("summer_1")
	  x5.innerHTML="<img class='img-fluid' src='fish.png' alt='' width='35'/> This summer"
	  x6=document.getElementById("summer_2")
	  x6.innerHTML="To be continue..."
	  x7=document.getElementById("aca_1")
	  x7.innerHTML="<img class='img-fluid' src='paw3.png' alt='' width='30'/> Academics"
	  x8=document.getElementById("aca_2")
	  x8.innerHTML="CSC111: Learning Python"
	  x9=document.getElementById("aca_3")
	  x9.innerHTML="We made a small game for our <a href=''>final project</a>!"
	  x10=document.getElementById("aca_4")
	  x10.innerHTML="SDS192: Learning R"
	  x11=document.getElementById("aca_5")
	  x11.innerHTML="Click here for the markdown of our <a href=''>final project</a>!"
	  $(() => {
		if(E==true){
			typed.typed({
				strings: ["programming.", "designing.",  "sketching.", "on my way to somewhere."],
				typeSpeed: 140,
				loop: true,
			  });
			}
		else{
			  typed.typed({
				strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。"],
				typeSpeed: 140,
				loop: true,
			  });
			}	
	});
  }

  $(() => {
	if(E==true){
		typed.typed({
			strings: ["programming.", "designing.",  "sketching.", "on my way to somewhere."],
			typeSpeed: 140,
			loop: true,
		  });
		}
	else{
		  typed.typed({
			strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。"],
			typeSpeed: 140,
			loop: true,
		  });
		}	
});


