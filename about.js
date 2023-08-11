
let screen = document.querySelector('input')
function input(string){
      let oldValue= screen.value;
      let t = oldValue.length;
      let lastChr = oldValue[t-1]

      let oprSys = ['.','-','+','/','*','%']
      if(oprSys.includes(string)){
            if(oprSys.includes(lastChr)){
                  let removeLast = oldValue.slice(0,-1);
                  screen.value= removeLast+ string
            }else{
                  screen.value = oldValue + string
            }
      }else{
                  screen.value = oldValue + string
            }
}

function allClear(){
      screen.value = ""
}
function back(){
      screen.value = screen.value.slice(0,-1)
}

function calc(){
            
            if (screen.value.includes('%')) {
                screen.value = screen.value.slice(0, -1); // Remove the % symbol
                screen.value = eval(screen.value) / 100;
            } else {
                screen.value = eval(screen.value);
            }
}


