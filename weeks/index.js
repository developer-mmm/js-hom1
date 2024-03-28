let hafta = {
    1: "Dushanba",
    2: "Seshanba",
    3: "Chorshanba",
    4: "Payshanba",
    5: "Juma",
    6: "Shanba",
    7: "Yakshanba"
}

let son = prompt("Haftaning tartib raqamini kiriting (masalan: 1 dan 7 gacha)")

if(son==1){
    console.log('Dushanba');
}
else if(son==2){
    console.log('seshanba')
}
else if(son==3){
    console.log('chorshanba')

}else if(son==4){
    console.log('payshanba')

}else if(son==5){
    console.log('juma')

}else if(son==6){
    console.log('shanba')
}

else if(son==7){
    console.log('Yakshanba')
}
else{
    console.log("xatolik! boshqa son kiriting: ( ex: 1-7 ) ");
}