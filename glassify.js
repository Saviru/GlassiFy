class GlassiFy extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('div');

        const freq = parseFloat(this.getAttribute('frequency')) || 0.01;
        const octaves = parseInt(this.getAttribute('octaves')) || 3;
        const scale = parseInt(this.getAttribute('scale')) || 45;
        const blur = parseInt(this.getAttribute('blur')) || 3;
        const brightness = parseFloat(this.getAttribute('brightness')) || 1.4;


        // Add the content
        wrapper.innerHTML = `
            <!-- GlassiFy Component -->
        `;

        const svg = document.createElement('svg');
        svg.style.display = 'none';
        svg.innerHTML = `
        <filter id="displacementFilter">
            <feTurbulence type="turbulence" baseFrequency="${freq}" numOctaves="${octaves}" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="${scale}" 
                             xChannelSelector="R" yChannelSelector="G" />
        </filter>
        `;

        const style = document.createElement('style');
        style.textContent = `
.glassify{border:#d6d6d66c solid 1px;filter:drop-shadow(-8px -10px 46px #80808075);box-shadow:inset 3px 3px 3px -1px #bbbbbbcc, inset -3px -3px 3px -1px #494949c0;backdrop-filter:brightness(${brightness}) blur(${blur}px) url(#displacementFilter);}glassi-fi{display: none;}
        `;

        shadow.appendChild(wrapper);
        document.head.appendChild(style);
        document.body.appendChild(svg);
    }
}

// Define the custom element
customElements.define('glassi-fy', GlassiFy);


