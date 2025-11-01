document.addEventListener('DOMContentLoaded', function() {
    // إضافة popup للصفحة
    const popupHTML = `
        <div id="mobile-footer-popup" style="
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.9);
            z-index: 99999;
            padding: 20px;
        ">
            <div style="
                background: #1a1a1a;
                max-width: 300px;
                margin: 50px auto;
                padding: 20px;
                border-radius: 8px;
                position: relative;
                color: white;
                border: 1px solid rgba(255,65,0,0.2);
            ">
                <button onclick="closeFooterPopup()" style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(255,65,0,0.3);
                    border: none;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 20px;
                ">×</button>
                <div id="popup-content" style="margin-top: 20px;"></div>
            </div>
        </div>
    `;

    // إضافة الـ popup للصفحة
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // تعريف الـ popup وعناصره
    const popup = document.getElementById('mobile-footer-popup');
    const popupContent = document.getElementById('popup-content');

    // إضافة الوظيفة لكل العناوين في الـ footer
    const footerHeaders = document.querySelectorAll('.footer-section h3');
    footerHeaders.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            console.log('Header clicked!'); // للتأكد من عمل الحدث
            const section = this.parentElement;
            const content = Array.from(section.children)
                .filter(el => el !== this)
                .map(el => el.outerHTML)
                .join('');
            
            console.log('Content:', content); // للتأكد من المحتوى
            popupContent.innerHTML = content;
            popup.style.display = 'block';
        });
    });
});

// دالة إغلاق الـ popup
function closeFooterPopup() {
    const popup = document.getElementById('mobile-footer-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// إغلاق الـ popup عند الضغط على ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFooterPopup();
    }
});

// إغلاق الـ popup عند النقر خارجه
document.addEventListener('click', function(e) {
    const popup = document.getElementById('mobile-footer-popup');
    if (popup && e.target === popup) {
        closeFooterPopup();
    }
});