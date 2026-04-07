const videoModal = document.querySelector("[data-video-modal]");

if (videoModal) {
    const openButton = document.querySelector("[data-video-open]");
    const closeButtons = videoModal.querySelectorAll("[data-video-close]");
    const iframe = videoModal.querySelector("[data-video-iframe]");
    const videoSrc = iframe?.dataset.videoSrc || "";

    const openVideoModal = () => {
        if (!iframe || !videoSrc) {
            return;
        }

        videoModal.hidden = false;
        iframe.src = videoSrc;
        document.body.style.overflow = "hidden";
    };

    const closeVideoModal = () => {
        if (!iframe) {
            return;
        }

        videoModal.hidden = true;
        iframe.src = "";
        document.body.style.overflow = "";
    };

    openButton?.addEventListener("click", openVideoModal);

    closeButtons.forEach((button) => {
        button.addEventListener("click", closeVideoModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !videoModal.hidden) {
            closeVideoModal();
        }
    });
}
