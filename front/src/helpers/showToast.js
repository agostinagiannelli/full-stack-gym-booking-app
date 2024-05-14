export default function showToast({ text, onClick }) {
    Toastify({
        text,
        duration: 3000,
        close: false,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            color: "#0051DB",
            background: "#fff",
        },
        onClick
    }).showToast();
};