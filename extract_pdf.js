const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/media/PDF/SparKitt- Company Profile and Portfolio.pdf');

// Sometimes pdf-parse is wrapped or exports default
const parse = typeof pdf === 'function' ? pdf : (pdf.default || pdf.pdf);

parse(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_content.txt', data.text);
    console.log('PDF content extracted to pdf_content.txt');
}).catch(function(error) {
    console.error('Error reading PDF:', error);
});
