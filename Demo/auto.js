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


fetch('./release_info.json')
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll('.dataVer').forEach(el => {
          el.innerHTML = data.version;
        });

    const linkElement = document.getElementById('rlink');
    if (linkElement) {
        linkElement.href = data.url;
    }

    const dateElement = document.getElementById('rdate');
    if (dateElement) {
        const dateObj = new Date(data.date);
        dateElement.innerHTML = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    const cdnElement = document.getElementById('cdnlink');
    if (cdnElement) {
        cdnElement.innerHTML = `https://glassify.saviru.me/cdn/${data.version}/glassify.js`;
    }

    console.log('===========================');
    console.log(`GlassiFy Version: ${data.version}`);
    console.log(`Release: ${data.url}`);
})
.catch(error => console.error('Error:', error));
