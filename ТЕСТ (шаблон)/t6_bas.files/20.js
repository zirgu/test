<!--начало сценария
function test(){
answ="";
with(document){
answ+=control(res.charAt(0), forms[0].q1[0], forms[0].q1[1], forms[0].q1[2], forms[0].q1[3]) ?"1":"0";
answ+=control(res.charAt(1), forms[0].q2[0], forms[0].q2[1], forms[0].q2[2], forms[0].q2[3]) ?"1":"0";
answ+=control(res.charAt(2), forms[0].q3[0], forms[0].q3[1], forms[0].q3[2], forms[0].q3[3]) ?"1":"0";
answ+=control(res.charAt(3), forms[0].q4[0], forms[0].q4[1], forms[0].q4[2], forms[0].q4[3]) ?"1":"0";
answ+=control(res.charAt(4), forms[0].q5[0], forms[0].q5[1], forms[0].q5[2], forms[0].q5[3]) ?"1":"0";
answ+=control(res.charAt(5), forms[0].q6[0], forms[0].q6[1], forms[0].q6[2], forms[0].q6[3]) ?"1":"0";
answ+=control(res.charAt(6), forms[0].q7[0], forms[0].q7[1], forms[0].q7[2], forms[0].q7[3]) ?"1":"0";
answ+=control(res.charAt(7), forms[0].q8[0], forms[0].q8[1], forms[0].q8[2], forms[0].q8[3]) ?"1":"0";
answ+=control(res.charAt(8), forms[0].q9[0], forms[0].q9[1], forms[0].q9[2], forms[0].q9[3]) ?"1":"0";
answ+=control(res.charAt(9), forms[0].q10[0], forms[0].q10[1], forms[0].q10[2], forms[0].q10[3]) ?"1":"0";
answ+=control(res.charAt(10), forms[0].q11[0], forms[0].q11[1], forms[0].q11[2], forms[0].q11[3]) ?"1":"0";
answ+=control(res.charAt(11), forms[0].q12[0], forms[0].q12[1], forms[0].q12[2], forms[0].q12[3]) ?"1":"0";
answ+=control(res.charAt(12), forms[0].q13[0], forms[0].q13[1], forms[0].q13[2], forms[0].q13[3]) ?"1":"0";
answ+=control(res.charAt(13), forms[0].q14[0], forms[0].q14[1], forms[0].q14[2], forms[0].q14[3]) ?"1":"0";
answ+=control(res.charAt(14), forms[0].q15[0], forms[0].q15[1], forms[0].q15[2], forms[0].q15[3]) ?"1":"0";
answ+=control(res.charAt(15), forms[0].q16[0], forms[0].q16[1], forms[0].q16[2], forms[0].q16[3]) ?"1":"0";
answ+=control(res.charAt(16), forms[0].q17[0], forms[0].q17[1], forms[0].q17[2], forms[0].q17[3]) ?"1":"0";
answ+=control(res.charAt(17), forms[0].q18[0], forms[0].q18[1], forms[0].q18[2], forms[0].q18[3]) ?"1":"0";
answ+=control(res.charAt(18), forms[0].q19[0], forms[0].q19[1], forms[0].q19[2], forms[0].q19[3]) ?"1":"0";
answ+=control(res.charAt(19), forms[0].q20[0], forms[0].q20[1], forms[0].q20[2], forms[0].q20[3]) ?"1":"0";

showResult();
}
}
function control(k,f1,f2,f3,f4){
if(k==1&&f1.checked)return true;
if(k==2&&f2.checked)return true;
if(k==3&&f3.checked)return true;
if(k==4&&f4.checked)return true;
return false;
}
function showResult(){
    var nok=0;
    var i; var s;
for(i=0; i<answ.length; i++)
   nok+=answ.charAt(i)=='1'?1:0;

document.forms[0].S1.value="Количество правильных ответов "+nok+" из "+answ.length+".";
with(document.forms[0]){
     if (answ.charAt(0)=="1") {T1.value="  :-))"}
        else {T1.value="  :-(("};
     if (answ.charAt(1)=="1") {T2 .value="  :-))"}
        else {T2.value="  :-(("};
     if (answ.charAt(2)=="1") {T3.value="  :-))"}
        else {T3.value="  :-(("};
     if (answ.charAt(3)=="1") {T4.value="  :-))"}
        else {T4.value="  :-(("};
     if (answ.charAt(4)=="1") {T5.value="  :-))"}
        else {T5.value="  :-(("};
     if (answ.charAt(5)=="1") {T6.value="  :-))"}
        else {T6.value="  :-(("};
     if (answ.charAt(6)=="1") {T7.value="  :-))"}
        else {T7.value="  :-(("};
     if (answ.charAt(7)=="1") {T8.value="  :-))"}
        else {T8.value="  :-(("};
     if (answ.charAt(8)=="1") {T9.value="  :-))"}
        else {T9.value="  :-(("};
     if (answ.charAt(9)=="1") {T10.value="  :-))"}
        else {T10.value="  :-(("};
     if (answ.charAt(10)=="1") {T11.value="  :-))"}
        else {T11.value="  :-(("};
     if (answ.charAt(11)=="1") {T12.value="  :-))"}
        else {T12.value="  :-(("};
     if (answ.charAt(12)=="1") {T13.value="  :-))"}
        else {T13.value="  :-(("};
     if (answ.charAt(13)=="1") {T14.value="  :-))"}
        else {T14.value="  :-(("};
     if (answ.charAt(14)=="1") {T15.value="  :-))"}
        else {T15.value="  :-(("};
     if (answ.charAt(15)=="1") {T16.value="  :-))"}
        else {T16.value="  :-(("};
     if (answ.charAt(16)=="1") {T17.value="  :-))"}
        else {T17.value="  :-(("};
     if (answ.charAt(17)=="1") {T18.value="  :-))"}
        else {T18.value="  :-(("};
     if (answ.charAt(18)=="1") {T19.value="  :-))"}
        else {T19.value="  :-(("};
     if (answ.charAt(19)=="1") {T20.value="  :-))"}
        else {T20.value="  :-(("};

}
}
<!--конец сценария-->
