const enddate = "30 oct 2023 6:52 PM"
document.getElementById("title2").innerText = enddate;
const inputs = document.querySelectorAll("input")
/*const clock = () => {

}*/
function clock() {
const end = new Date(enddate)
const now = new Date()
const diff = (end - now)/1000;
console.log(diff);
if(diff < 0) return;
inputs[0].value = Math.floor(diff/3600/24)
console.log(Math.floor(diff/3600)%24);
inputs[1].value = Math.floor(diff/3600)%24
inputs[2].value = Math.floor(diff/60)%60
inputs[3].value = Math.floor(diff)%60


}
//inital call
clock()

setInterval(
    () => {
        clock()
    },
    1000
)