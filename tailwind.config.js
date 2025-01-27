/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // เส้นทางไปยังไฟล์ที่ใช้ Tailwind CSS
    ],
    theme: {
        extend: {
            // เพิ่มสี, ขนาด, ฟอนต์ ฯลฯ ที่คุณต้องการ
            colors: {
                primary: '#ff49db',
            },
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
