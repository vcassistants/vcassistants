


// FOR HEADER
    let lastScrollTop = 0; // Tracks the last scroll position
        const header = document.getElementById("gtco-main-nav"); // Get the header element

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      header.style.top = "-100px"; // Hide the header
    } else {
      // Scrolling up
      header.style.top = "0"; // Show the header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
  });


//   FOR LOADING
    window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");
        const content = document.getElementById("content");

        setTimeout(() => {
            preloader.style.opacity = "0"; // Start fade-out
            setTimeout(() => {
                preloader.style.display = "none"; // Hide after fade-out
                content.style.display = "block"; // Show the content
            }, 500); // Match the transition duration
        }, 2000); // 5 seconds
    });



    //  // Array of image URLs
    //  const images = [
    //     "images/Customized Support.png",
    //     "images/learn-img.jpg",
    //     // "images/333.jpg",
    //     // "images/444.jpg",
      
    // ];

    // let currentIndex = 0; // Start with the first image

    // // Reference to the image element
    // const photoElement = document.getElementById("photo");

    // // Function to change the image
    // function changePhoto() {
    //     currentIndex = (currentIndex + 1) % images.length; // Increment index, loop back if at the end
    //     photoElement.style.opacity = "0"; // Start fade out
    //     setTimeout(() => {
    //         photoElement.src = images[currentIndex]; // Change image
    //         photoElement.style.opacity = "1"; // Fade in new image
    //     }, 500); // Match transition duration
    // }

    // // Auto-change photo every 3 seconds
    // setInterval(changePhoto, 3000);