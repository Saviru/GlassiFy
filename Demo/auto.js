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
})
.catch(error => console.error('Error:', error));