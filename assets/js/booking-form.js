// ----------------------------------------------------
// 🔴🔴🔴 متغير يحتاج إلى تعديل 🔴🔴🔴
// ضع رابط الـ API الجديد الذي ستأخذه من Google Apps Script هنا
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8GW0UwnDqWED_deH0X6e2YTlc0d5bTAPkxbR4PSQiaGBZ_ujoWAeWJkF7yv3HCJa7/exec';
// ----------------------------------------------------

let bookedData = [];
const btns = document.querySelectorAll('.time-btn');

// 🛠️ دالة مساعدة: تحويل الوقت إلى دقائق للمقارنة
function getMinutes(timeStr) {
    let [time, modifier] = timeStr.trim().split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12' && modifier === 'AM') hours = '00';
    if (modifier === 'PM' && hours !== '12') hours = parseInt(hours, 10) + 12;
    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

// 🛠️ دالة مساعدة: لتوحيد صيغة الوقت للمقارنة (09:00 AM)
function normalizeTime(t) {
    return t.trim().replace(/^(\d):/, '0$1:');
}

// 1. تحميل البيانات عند الفتح
document.addEventListener("DOMContentLoaded", () => {
    fetch(SCRIPT_URL)
        .then(res => res.json())
        .then(data => {
            bookedData = data;
            const statusLabel = document.getElementById('statusLabel');
            if (statusLabel) {
                statusLabel.innerText = "Date & Time (Online)";
                statusLabel.style.color = "#fff";
            }
        })
        .catch(err => {
            const statusLabel = document.getElementById('statusLabel');
            if (statusLabel) {
                statusLabel.innerText = "Date & Time (Error loading)";
                statusLabel.style.color = "red";
            }
        });
});

// 2. إعداد التقويم
flatpickr("#inline_cal", {
    inline: true, minDate: "today", dateFormat: "Y-m-d",
    onChange: (dates, dateStr) => {
        document.getElementById('hDate').value = dateStr;
        const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('dateDisplay').innerText = dates[0].toLocaleDateString('en-US', opts);
        checkAvailability(dateStr);
    }
});

// 3. دالة التحقق من التوافر والوقت الماضي
function checkAvailability(selectedDate) {
    document.getElementById('hTime').value = "";
    btns.forEach(b => { b.classList.remove('active'); b.classList.remove('disabled'); });

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const takenTimes = bookedData
        .filter(r => r.date === selectedDate)
        .map(r => normalizeTime(r.time));

    btns.forEach(b => {
        const btnTime = normalizeTime(b.getAttribute('data-time'));
        let shouldDisable = false;

        // الشرط أ: محجوز مسبقاً
        if (takenTimes.includes(btnTime)) {
            shouldDisable = true;
        }

        // الشرط ب: فات وقته في نفس اليوم
        if (selectedDate === todayStr) {
            const slotMinutes = getMinutes(b.getAttribute('data-time'));
            if (slotMinutes < currentMinutes) {
                shouldDisable = true;
            }
        }

        if (shouldDisable) {
            b.classList.add('disabled');
        }
    });
}

// 4. ضغط الأزرار (تفعيل الاختيار)
btns.forEach(b => b.addEventListener('click', function () {
    if (this.classList.contains('disabled')) return;
    btns.forEach(x => x.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('hTime').value = this.getAttribute('data-time');
}));

// 5. الإرسال (Submit)
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!document.getElementById('hDate').value || !document.getElementById('hTime').value) {
            alert("Choose date and time."); return;
        }

        const btn = document.getElementById('submitBtn');
        const msg = document.getElementById('msg');
        btn.disabled = true; msg.innerText = "Processing...";

        fetch(SCRIPT_URL, { method: 'POST', body: new FormData(this) })
            .then(res => res.json())
            .then(data => {
                if (data.result === 'success') {
                    msg.innerText = "Booking Confirmed!";
                    msg.style.color = "green";
                    // تحديث الواجهة بعد الحجز
                    bookedData.push({ date: document.getElementById('hDate').value, time: document.getElementById('hTime').value });
                    checkAvailability(document.getElementById('hDate').value);
                    this.reset();
                } else {
                    msg.innerText = data.message;
                    msg.style.color = "red";
                }
            })
            .catch(e => msg.innerText = "Network Error")
            .finally(() => btn.disabled = false);
    });
}
