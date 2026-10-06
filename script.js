const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const video = entry.target;

            if (video.hasAttribute("autoplay")) {
                video.play().catch(() => {});
            }

        } else {

            const video = entry.target;

            if (video.hasAttribute("autoplay")) {
                video.pause();
            }

        }

    });

}, {
    threshold: 0.5
});


videos.forEach(video => {
    observer.observe(video);
});
