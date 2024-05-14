export const showToast = ({ text }) => {
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
    }).showToast();
};