export const showToast = ({ text, destination }) => {
    Toastify({
        text,
        duration: 3000,
        destination,
        newWindow: false,
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