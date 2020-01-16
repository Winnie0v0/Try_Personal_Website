var 
typed = $(".typed");
E=false

function Chinese(){
	E=false
	x=document.getElementById("hi")
	x.innerHTML="Hi, I'm &#10; 宗筱雯"
	x1=document.getElementById("I")
	x1.innerHTML="我想 <img class='img-fluid' src='paw10.png' alt='' width='35'/>"
	x2=document.getElementById("intro")
	x2.innerHTML="我目前是美国史密斯学院大一的学生，主修计算机专业。"
	x3=document.getElementById("winter_1")
	x3.innerHTML="<img class='img-fluid' src='cat7.png' alt='' width='35'/> 这个寒假"
	x4=document.getElementById("winter_2")
	x4.innerHTML="我在<a href='https://www.ksyun.com'>金山云</a>实习。"
	x5=document.getElementById("summer_1")
	x5.innerHTML="<img class='img-fluid' src='cat9.png' alt='' width='35'/> 这个暑假"
	x6=document.getElementById("summer_2")
	x6.innerHTML="未完待续..."
	x7=document.getElementById("aca_1")
	x7.innerHTML="<img class='img-fluid' src='cat5.png' alt='' width='35'/> 学术经历"
	x8=document.getElementById("aca_2")
	x8.innerHTML="CSC111课程：学习Python语言"
	x9=document.getElementById("aca_3")
	x9.innerHTML="这是我们期末制作的<a href=''>小游戏</a>!"
	x10=document.getElementById("aca_4")
	x10.innerHTML="SDS192课程: 学习R语言"
	x11=document.getElementById("aca_5")
	x11.innerHTML="点击这里看看我的<a href=''>期末成果展示</a>!"

	x12=document.getElementById("exp_1")
    x12.innerHTML="<img class='img-fluid' src='cat7.png' alt='' width='35' /> 经历与经验"
    x13=document.getElementById("exp_2")
    x13.innerHTML="核心成员, 史密斯学院中国学生会"
    x14=document.getElementById("exp_3")
    x14.innerHTML="组织活动。"
    x15=document.getElementById("exp_4")
    x15.innerHTML="实习生, 北京市朝阳区永续全球环境研究所"
    x16=document.getElementById("exp_5")
    x16.innerHTML="编辑，研究，分析数据，制作环境保护手册。"
    x17=document.getElementById("exp_6")
    x17.innerHTML="核心成员, Girls Who Code"
    x18=document.getElementById("exp_7")
    x18.innerHTML="教授课程。"
    x19=document.getElementById("exp_8")
    x19.innerHTML="核心成员, 史密斯学院计算机社"
    x20=document.getElementById("exp_9")
	x20.innerHTML="积极参与活动。"
	  
	x21=document.getElementById("hac_1")
    x21.innerHTML="<img class='img-fluid' src='cat10.png' alt='' width='35' /> 黑客马拉松"
    x22=document.getElementById("hac_2")
    x22.innerHTML="积极参与教授讲座。"
    x23=document.getElementById("hac_3")
    x23.innerHTML="Hackholyoke 2019"
    x24=document.getElementById("hac_4")
    x24.innerHTML="未完待续..."
    x25=document.getElementById("hac_5")
    x25.innerHTML="Hack(H)er413 2020"

    x32=document.getElementById("con")
	x32.innerHTML="<img class='img-fluid' src='paw10.png' alt='' width='50' /> 让我们一起努力! <img class='img-fluid' src='paw10.png' alt='' width='65' />"
	  
	x26=document.getElementById("aboutme")
	x26.innerHTML="关于我"
	x26=document.getElementById("home")
	x26.innerHTML="主页"
	x27=document.getElementById("acade")
	x27.innerHTML="学术"
	x28=document.getElementById("exper")
	x28.innerHTML="经历"
	x29=document.getElementById("hack")
	x29.innerHTML="项目"
	x30=document.getElementById("gamee")
	x30.innerHTML="游戏!"
	x31=document.getElementById("contactt")
	x31.innerHTML="联系"

	x31=document.getElementById("start")
	x31.innerHTML="开始"
	
	$(() => {
		typed.typed({
			strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。"],
			typeSpeed: 140,
			loop: true,
		});
	});
}
	  

	  
    
function English(){
	E=true
    x=document.getElementById("hi")
    x.innerHTML="Hi, I'm &#10; Winnie."
    x1=document.getElementById("I")
	x1.innerHTML="I am likely <img class='img-fluid' src='paw10.png' alt='' width='35'/>"
	x2=document.getElementById("intro")
	x2.innerHTML="I am currently in my first year of the Computer Science Master's Degree at Smith College in Northampton, MA."
	x3=document.getElementById("winter_1")
	x3.innerHTML="<img class='img-fluid' src='cat7.png' alt='' width='35'/> This Winter"
	x4=document.getElementById("winter_2")
	x4.innerHTML="I'm interning at <a href='https://www.ksyun.com'>Ksyun</a>."
	x5=document.getElementById("summer_1")
	x5.innerHTML="<img class='img-fluid' src='cat9.png' alt='' width='35'/> This summer"
	x6=document.getElementById("summer_2")
	x6.innerHTML="To be continue..."
	x7=document.getElementById("aca_1")
	x7.innerHTML="<img class='img-fluid' src='cat5.png' alt='' width='35'/> Academics"
	x8=document.getElementById("aca_2")
	x8.innerHTML="CSC111: Learning Python"
	x9=document.getElementById("aca_3")
	x9.innerHTML="We made a small game for our <a href=''>final project</a>!"
	x10=document.getElementById("aca_4")
	x10.innerHTML="SDS192: Learning R"
	x11=document.getElementById("aca_5")
	x11.innerHTML="Click here for the markdown of our <a href=''>final project</a>!"

	x12=document.getElementById("exp_1")
    x12.innerHTML="<img class='img-fluid' src='cat7.png' alt='' width='35' /> Experience"
    x13=document.getElementById("exp_2")
    x13.innerHTML="E-board Member, Smith Chinese Student Accosiation"
    x14=document.getElementById("exp_3")
    x14.innerHTML="Organize events."
    x15=document.getElementById("exp_4")
    x15.innerHTML="Intern, Global Environment Institute (Beijing)"
    x16=document.getElementById("exp_5")
    x16.innerHTML="Researched, edited, and illustrated informational booklet for distribution to fishermen."
    x17=document.getElementById("exp_6")
    x17.innerHTML="Member, Girls Who Code"
    x18=document.getElementById("exp_7")
    x18.innerHTML="Lead classes."
    x19=document.getElementById("exp_8")
    x19.innerHTML="Active Member, Smith in CS"
    x20=document.getElementById("exp_9")
	x20.innerHTML="Attend Events"

	x21=document.getElementById("hac_1")
    x21.innerHTML="<img class='img-fluid' src='cat10.png' alt='' width='35' /> Hackathon Projects"
    x22=document.getElementById("hac_2")
    x22.innerHTML="Attend web build workshop."
    x23=document.getElementById("hac_3")
    x23.innerHTML="Hackholyoke 2019"
    x24=document.getElementById("hac_4")
    x24.innerHTML="To be continue..."
    x25=document.getElementById("hac_5")
    x25.innerHTML="Hack(H)er413 2020"

	x32=document.getElementById("con")
	x32.innerHTML="<img class='img-fluid' src='paw10.png' alt='' width='50' /> Let's work together. <img class='img-fluid' src='paw10.png' alt='' width='65' />"
	  
	x26=document.getElementById("aboutme")
	x26.innerHTML="About Me"
	x26=document.getElementById("home")
	x26.innerHTML="Home"
	x27=document.getElementById("acade")
	x27.innerHTML="Academic"
	x28=document.getElementById("exper")
	x28.innerHTML="Experience"
	x29=document.getElementById("hack")
	x29.innerHTML="Hackathon"
	x30=document.getElementById("gamee")
	x30.innerHTML="Game!"
	x31=document.getElementById("contactt")
	x31.innerHTML="Contact"

	x31=document.getElementById("start")
	x31.innerHTML="Start"


	
	$(() => {
		typed.typed({
			strings: ["programming.", "designing.",  "sketching.", "on my way to somewhere."],
			typeSpeed: 140,
			loop: true,
		});
	});
}

$(() => {
	typed.typed({
		strings: ["我在编程。", "我在设计。",  "我在绘画。", "我在前往未知的路上。"],
		typeSpeed: 140,
		loop: true,
	});
});



