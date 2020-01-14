var 
	typed = $(".typed");
	E=false

  function Chinese(){
      E=false;
      x=document.getElementById("hi")
      x.innerHTML="Hi, I'm &#10; 宗筱雯"
      x1=document.getElementById("I")
	  x1.innerHTML="我想"
	  x2=document.getElementById("intro")
	  x2.innerHTML="我目前是美国史密斯学院大一的学生，主修计算机专业。"
	  x3=document.getElementById("intro")
	  x3.innerHTML="我目前是美国史密斯学院大一的学生，主修计算机专业。"
	  $(() => {
		if(E==true){
			typed.typed({
				strings: ["programming.", "designing.",  "sketching.", "on my way to somewhere.", "waiting for someone."],
				typeSpeed: 140,
				loop: true,
			  });
			}
		else{
			  typed.typed({
				strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。", "我在等心中的那个人。"],
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
	  x1.innerHTML="I am likely"
	  x2=document.getElementById("intro")
	  x2.innerHTML="I am currently in my first year of the Computer Science Master's Degree at Smith College in Northampton, MA."
	  $(() => {
		if(E==true){
			typed.typed({
				strings: ["programming.", "designing.",  "sketching.", "on my way to somewhere.", "waiting for someone."],
				typeSpeed: 140,
				loop: true,
			  });
			}
		else{
			  typed.typed({
				strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。", "我在等心中的那个人。"],
				typeSpeed: 140,
				loop: true,
			  });
			}	
	});
  }

  $(() => {
	if(E==true){
		typed.typed({
			strings: ["programming.", "designing.",  "sketching.", "on my way to somewhere.", "waiting for someone."],
			typeSpeed: 140,
			loop: true,
		  });
		}
	else{
		  typed.typed({
			strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。", "我在等心中的那个人。"],
			typeSpeed: 140,
			loop: true,
		  });
		}	
});


