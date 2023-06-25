// GENERATE PDF
const generate = document.querySelector('#btn-pdf');
generate.addEventListener("click", () => {
    const content = document.querySelector('#article');
    const options = {
        margin: 10,
        filename: "article(from:jessicasantosb-first_site).pdf",
        html2canvas: {scale: 2},
        pagebreak: { before: '.beforeClass', after: ['#resumo-container', '#article', '#objetivos-container'], avoid: 'img' },
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    };
    html2pdf().set(options).from(content).save();
})

// LANGUAGE SETTINGS
window.gtranslateSettings = {"default_language":"pt","detect_browser_language":true,"languages":["pt","fr","de","it","es","ar","en"],"globe_color":"#212A3E","wrapper_selector":".gtranslate_wrapper","alt_flags":{"pt":"brazil"}},

// DROPDOWN NAVIGATION BAR
(function() {
    document.querySelector('.dropdown-child').addEventListener('click', function() {
      this.parentNode.parentNode.classList.toggle('closed')
    }, false);
})();