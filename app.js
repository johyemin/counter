const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains("sub")){
            count --;
        } else if(styles.contains("plus")){
            count ++;
        } else{
            count = 0;
        }

        value.textContent = count;
    })
})