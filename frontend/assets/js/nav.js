export default function init() {
    const nav = document.getElementById("navegacao");

    function anime(){
        const top = window.pageYOffset;

        return top;
    }

    window.addEventListener("scroll", e => {
        const result = anime();

        if(!result != 0) {
            nav.style.backgroundColor = "#ffffff";
            return;
        } 

        nav.style.backgroundColor = "#fbfbfbbf";
    });
}