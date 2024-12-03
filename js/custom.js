    const testimonialsContainer = document.querySelector(".testimonials-container");
    const testimonial = document.querySelector(".testimonial");
    const userImage = document.querySelector(".user-image");
    const username = document.querySelector(".username");
    const role = document.querySelector(".role");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const progressDots = document.getElementById("progress-dots");

    const testimonials = [
    {
        name: "Yasir Ahmed",
        position: "CEO - Polomena",
        photo: "../img/quote-author/yasir-ahmed.jpeg",
        text:
        "I am delighted to share my exceptional experience with HRN, a standout leader in business solutions and IT services. Established in 2019, HRN has swiftly made a name for itself as a premier provider in a diverse range of fields, including business software, computer hardware and software, networking solutions, IT services, and security systems"
    },
    {
        name: "Mr. Suleman",
        position: "Owner - YK Buildings",
        photo: "../img/quote-author/mr-suleman.jpeg",
        text:
        "What truly sets HRN apart is their unwavering dedication to delivering top-notch products and services tailored to meet their clients' unique needs. Their expertise spans across software development, web development, mobile application development, and digital signage solutions, ensuring that every aspect of your tech requirements is met with precision and professionalism."
    },
    {
        name: "Abdul Hafeez",
        position: "General Manager - Nexa",
        photo: "https://randomuser.me/api/portraits/men/8.jpg",
        text:
        "The team at HRN is not only skilled but incredibly supportive. They provide comprehensive technical and functional support, which makes working with them a breeze. Their commitment to customer satisfaction is evident in every interaction, and they consistently go above and beyond to ensure that their clients are well taken care of."
    },
    {
        name: "Mr. Dragon",
        position: "Owner - Dragon Food Consultancy",
        photo:
        "../img/quote-author/mr-dragon.jpeg",
        text:
        "If you're looking for a reliable partner in the tech world who offers cutting-edge solutions and unmatched support, look no further than HRN. Their innovative approach and dedication to excellence make them a valuable asset to any business seeking to enhance their technological capabilities."
    },
    {
        name: "Mehmood Alaa",
        position: "CEO - Stalana Restaurant",
        photo: "https://randomuser.me/api/portraits/men/97.jpg",
        text:
        "HRN has been an absolute game-changer for our business. Since we started working with them, their expertise in business software, networking solutions, and IT services has been nothing short of exceptional. Their team’s commitment to excellence and their comprehensive technical support have made a significant difference in our operations. Whether it's software development or mobile app creation, HRN delivers innovative solutions that are both effective and reliable. We couldn’t be more pleased with their service and highly recommend HRN to any business looking for a top-tier tech partner!"
    },
    {
        name: "Bilal Khan",
        position: "Engineer - DCD Company",
        photo: "../img/quote-author/eng-bilal.jpeg",
        text:
        "Working with HRN has been a fantastic experience from start to finish. Established in 2019, HRN has quickly proven itself as a leader in the industry with its extensive range of services, including security systems and digital signage solutions. Their professionalism and attention to detail are evident in every project they undertake. The team is incredibly knowledgeable and supportive, always ready to provide solutions tailored to our specific needs. HRN is a company that truly values its clients and consistently delivers high-quality results. We’re thrilled to have them as our technology partner!"
    }
    ];

    let idx = 0;

    testimonials.forEach((testimonial) => {
    const dot = document.createElement("div");
    dot.classList.add("progress-dot");
    progressDots.appendChild(dot);
    });

    function displayTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    updateProgressDots();
    }

    function updateProgressDots() {
    const dots = progressDots.children;
    [...dots].forEach((dot) => {
        dot.classList.remove("active");
    });
    dots[idx].classList.add("active");
    }

    btnNext.addEventListener("click", () => {
    idx === testimonials.length - 1 ? (idx = 0) : idx++;
    console.log(idx);

    displayTestimonial();
    });

    btnPrev.addEventListener("click", () => {
    idx === 0 ? (idx = testimonials.length - 1) : idx--;
    console.log(idx);

    displayTestimonial();
    });

    displayTestimonial();