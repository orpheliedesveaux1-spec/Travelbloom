// Contact Form Submission
function submitForm(event) {
    event.preventDefault();
    document.getElementById("msg").innerHTML = "Message sent successfully!";
}

// Search Function with local images
function searchPlace() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let result = document.getElementById("results");

    if (input.includes("beach")) {
        result.innerHTML = `
    <h2>Rio de Janeiro, Brazil</h2>
    <img src="images/beach1.jpg" alt="Copacabana Beach" class="result-img">
    <img src="images/beach2.jpg" alt="Ipanema Beach" class="result-img">
    <p>Famous beaches like Copacabana and Ipanema located in Brazil, perfect for sunbathing and vibrant culture.</p>
    `;
    }

    else if (input.includes("temple")) {
        result.innerHTML = `
    <h2>Tokyo, Japan</h2>
    <img src="images/temple1.jpg" alt="Kinkaku-ji Temple" class="result-img">
    <img src="images/temple2.jpg" alt="Fushimi Inari Shrine" class="result-img">
    <p>Historic temples and shrines in Japan showcasing beautiful traditional architecture.</p>
    `;
    }

    else if (input.includes("city") || input.includes("usa")) {
        result.innerHTML = `
    <h2>New York City, USA</h2>
    <img src="images/city1.jpg" alt="New York City Skyline" class="result-img">
    <img src="images/city2.jpg" alt="Times Square" class="result-img">
    <p>The city that never sleeps, known for skyscrapers, culture, and iconic landmarks.</p>
    `;
    }

    else {
        result.innerHTML = "<p>No results found</p>";
    }
}

