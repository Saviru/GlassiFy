/*
 ____    ___                                ____                  ___         __     
/\  _`\ /\_ \                            __/\  _`\              /'___`\     /'__`\   
\ \ \L\_\//\ \      __      ____    ____/\_\ \ \L\_\__  __     /\_\ /\ \   /\ \/\ \  
 \ \ \L_L \ \ \   /'__`\   /',__\  /',__\/\ \ \  _\/\ \/\ \    \/_/// /__  \ \ \ \ \ 
  \ \ \/, \\_\ \_/\ \L\.\_/\__, `\/\__, `\ \ \ \ \/\ \ \_\ \      // /_\ \__\ \ \_\ \
   \ \____//\____\ \__/.\_\/\____/\/\____/\ \_\ \_\ \/`____ \    /\______/\_\\ \____/
    \/___/ \/____/\/__/\/_/\/___/  \/___/  \/_/\/_/  `/___/> \   \/_____/\/_/ \/___/ 
                                                        /\___/                       
                                                        \/__/                     


GlassiFy 2.0.2511 - https://glassify.saviru.me
===========================================================
An open-source and a lightweight Web Component for creating glassmorphism effects with dynamic displacement.
================================================
*/


// © 2025 Saviru Kashmira Atapattu. MIT License.
// Website: https://saviru.me
// GitHub: https://github.com/saviru


const buttons = document.querySelectorAll(".mainBtns");

buttons.forEach(button => {
    button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const { style } = button;

    const right = event.offsetX > rect.width/2;
    const top = event.offsetY < rect.height/2;

    style.removeProperty("--tr");
    style.removeProperty("--br");
    style.removeProperty("--tl");
    style.removeProperty("--bl");

    if(right) {
        button.classList.add("right");
    } else {
        button.classList.remove("right");
    }


    if (top && right) {
        style.setProperty("--tr", "0");
    } else if (!top && right) {
        style.setProperty("--br", "0");
    } else if (!top && !right) {
        style.setProperty("--bl", "0");
    } else if (top && !right) {
        style.setProperty("--tl", "0");
    }

    style.setProperty("--x", `${event.offsetX}px`);
    style.setProperty("--y", `${event.offsetY}px`);

    button.addEventListener("mouseleave", () => {
        const { style } = button;
        style.removeProperty("--tr");
        style.removeProperty("--br");
        style.removeProperty("--bl");
        style.removeProperty("--tl");
    });

});
});
