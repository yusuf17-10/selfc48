class TimeTable{
    constructor(){  
        this.input1 = createInput("subject");
        this.submit=createButton("submit");
        this.input2 = createInput("subject");
        this.input3 = createInput("subject");
        this.input4 = createInput("subject");
        this.input5 = createInput("subject");
        this.input6 = createInput("subject");
        this.input7 = createInput("subject"); 
        this.input8 = createInput("subject");
        this.input9 = createInput("subject");
        this.input10 = createInput("subject");
        this.input11 = createInput("subject");
        this.input12 = createInput("subject");
        this.input13 = createInput("subject");
        this.input14= createInput("subject");
        this.input15 = createInput("subject");
        this.input16 = createInput("subject");
        this.input17 = createInput("subject");
        this.input18 = createInput("subject");
        this.input19 = createInput("subject");
        this.input20 = createInput("subject");
        this.input21= createInput("subject");
        this.input22 = createInput("subject");
        this.input23 = createInput("subject");
        this.input24 = createInput("subject");
        this.input25 = createInput("subject");
        this.input26 = createInput("subject"); 
        this.input27 = createInput("subject");
        this.input28 = createInput("subject");
        this.input29 = createInput("subject");
        this.input30 = createInput("subject");
        this.input31 = createInput("subject");
        this.input32 = createInput("subject");
        this.input33= createInput("subject");
        this.input34 = createInput("subject");
        this.input35 = createInput("subject");
        
        this.time1=createInput("");
        this.time2=createInput("");
        this.time3=createInput("");
        this.time4=createInput("");
        this.time5=createInput("");

    }
    hide(){
        this.input1.hide();
        this.submit.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.input9.hide();
        this.input10.hide();
        this.input11.hide();
        this.input12.hide();
        this.input13.hide();
        this.input14.hide();
        this.input15.hide();
        this.input16.hide();
        this.input17.hide();
        this.input18.hide();
        this.input19.hide();
        this.input20.hide();
        this.input21.hide();
        this.input22.hide();
        this.input23.hide();
        this.input24.hide();
        this.input25.hide();
        this.input26.hide();
        this.input27.hide();
        this.input28.hide();
        this.input29.hide();
        this.input30.hide();
        this.input31.hide();
        this.input32.hide();
        this.input33.hide();
        this.input34.hide();
        this.input35.hide();

        this.time1.hide();
        this.time2.hide();
        this.time3.hide();
        this.time4.hide();
        this.time5.hide();

      
    }
    display(){

    var monday=createElement("h4");
    var tuesday=createElement("h4");
    var wednesday=createElement("h4");
    var thursday=createElement("h4");
    var friday=createElement("h4");
    var saturday=createElement("h4");
    var sunday=createElement("h4");

    var time=createElement("h4");

    
    monday.html("Monday");
    tuesday.html("Tuesday");
    wednesday.html("Wednesday");
    thursday.html("Thursday");
    friday.html("Saturday");
    saturday.html("Friday");
    sunday.html("Sunday");
    time.html("Time");

    
    time.position(width/2-600,height/6);

    monday.position(width/2-width/3,height/6);
    tuesday.position(width/2-width/3+150,height/6);
    wednesday.position(width/2-width/3+300,height/6);
    thursday.position(width/2,height/6);
    friday.position(width/2+width/3-150,height/6);
    saturday.position(width/2+width/3-300,height/6);
    sunday.position(width/2+width/3,height/6);

  


   
   

    this.time1.position(width/2-700,height/2-200);
    this.time2.position(width/2-700,height/2-130);
    this.time3.position(width/2-700,height/2-58);
    this.time4.position(width/2-700,height/1-390);
    this.time5.position(width/2-700,height/1-330);


   
    

    this.input1.position(width/2-width/3,height/4+10);
    this.input2.position(width/2-width/3+150,height/4+10);
    this.input3.position(width/2-width/3+300,height/4+10);
    this.input4.position(width/2,height/4+10);
    this.input5.position(width/2+width/3-100,height/4+10);
    this.input6.position(width/2+width/3-300,height/4+10);
    this.input7.position(width/2+width/3,height/4+10);

    this.input8.position(width/2-width/3,height/3+20);
    this.input9.position(width/2-width/3+150,height/3+20);
    this.input10.position(width/2-width/3+300,height/3+20);
    this.input11.position(width/2,height/3+20);
    this.input12.position(width/2+width/3-100,height/3+20);
    this.input13.position(width/2+width/3-300,height/3+20);
    this.input14.position(width/2+width/3,height/3+20);

    this.input15.position(width/2-width/3,height/3+90);
    this.input16.position(width/2-width/3+150,height/3+90);
    this.input17.position(width/2-width/3+300,height/3+90);
    this.input18.position(width/2,height/3+90);
    this.input19.position(width/2+width/3-100,height/3+90);
    this.input20.position(width/2+width/3-300,height/3+90);
    this.input21.position(width/2+width/3,height/3+90); 

    this.input22.position(width/2-width/3,height/3+200);
    this.input23.position(width/2-width/3+150,height/3+200);
    this.input24.position(width/2-width/3+300,height/3+200);
    this.input25.position(width/2,height/3+200);
    this.input26.position(width/2+width/3-100,height/3+200);
    this.input27.position(width/2+width/3-300,height/3+200);
    this.input28.position(width/2+width/3,height/3+200);
    
    this.input29.position(width/2-width/3,height/3+140);
    this.input30.position(width/2-width/3+150,height/3+140);
    this.input31.position(width/2-width/3+300,height/3+140);
    this.input32.position(width/2,height/3+140);
    this.input33.position(width/2+width/3-100,height/3+140);
    this.input34.position(width/2+width/3-300,height/3+140);
    this.input35.position(width/2+width/3,height/3+140);



    this.input1.show();
    this.input2.show();
    this.input3.show();
    this.input4.show();
    this.input5.show();
    this.input6.show();
    this.input7.show();
    this.input8.show();
    this.input9.show();
    this.input10.show();
    this.input11.show();
    this.input12.show();
    this.input13.show();
    this.input14.show();
    this.input15.show();
    this.input16.show();
    this.input17.show();
    this.input18.show();
    this.input19.show();
    this.input20.show();
    this.input21.show();
    this.input22.show();
    this.input23.show();
    this.input24.show();
    this.input25.show();
    this.input26.show();
    this.input27.show();
    this.input28.show();
    this.input29.show();
    this.input30.show();
    this.input31.show();
    this.input32.show();
    this.input33.show();
    this.input34.show();
    this.input35.show();

    this.time1.show();
    this.time2.show();
    this.time3.show();
    this.time4.show();
    this.time5.show();
    
    





        this.submit.show();

        this.submit.position(400,height-200);

        this.submit.mousePressed(()=>{

            user.answer[0]=this.input1.value();
            user.answer[1]=this.input2.value();
            user.answer[2]=this.input3.value();
            user.answer[3]=this.input4.value();
            user.answer[4]=this.input5.value();
            user.answer[5]=this.input6.value();
            user.answer[6]=this.input7.value();

            user.answer[7]=this.input8.value();
            user.answer[8]=this.input9.value();
            user.answer[9]=this.input10.value();
            user.answer[10]=this.input11.value();
            user.answer[11]=this.input12.value();
            user.answer[12]=this.input13.value();
            user.answer[13]=this.input14.value();

            user.answer[14]=this.input15.value();
            user.answer[15]=this.input16.value();
            user.answer[16]=this.input17.value();
            user.answer[17]=this.input18.value();
            user.answer[18]=this.input19.value();
            user.answer[19]=this.input20.value();
            user.answer[20]=this.input21.value();

            user.answer[21]=this.input22.value();
            user.answer[22]=this.input23.value();
            user.answer[23]=this.input24.value();
            user.answer[24]=this.input25.value();
            user.answer[25]=this.input26.value();
            user.answer[26]=this.input27.value();
            user.answer[27]=this.input28.value();

            user.answer[28]=this.input29.value();
            user.answer[29]=this.input30.value();
            user.answer[30]=this.input31.value();
            user.answer[31]=this.input32.value();
            user.answer[32]=this.input33.value();
            user.answer[33]=this.input34.value();
            user.answer[34]=this.input35.value();

            user.time[0]=this.time1.value();
            user.time[1]=this.time2.value();
            user.time[2]=this.time3.value();
            user.time[3]=this.time4.value();
            user.time[4]=this.time5.value();
     
            user.update();
   
           gameState=2;
        })
       
        
    }
} 
