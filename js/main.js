// change page logo on hover

$('#page-logo').mouseenter(function() {
    $(this).attr('src', './images/cat-logo.png');
});
$('#page-logo').mouseleave(function() {
    $(this).attr('src', './images/lightsaber-logo.png');
});



// add new reviews
$('#review-box-form').submit(function(event) {
    event.preventDefault();
    const userName = $('#review-username').val();
    const review = $('#review-input').val();

    // check for empty input fields
    if (userName === '' && review === '') {
        return;
    } else if (userName === '') {
        alert('Please enter your name!');
        return;
    } else if (review === '') {
        alert('Please enter your review!');
        return;
    }

    // get date and time when the review was sent
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    const yyyy = today.getFullYear();
    const hours = today.getHours();
    let minutes = today.getMinutes();
    let starsGiven = '';
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    today = dd + '.' + mm + '.' + yyyy + ' ' + hours + ':' + minutes;

    const starsValue = parseInt($('input[name="rate"]:checked').val());
    switch (starsValue) {
        case 1:
            starsGiven = `
            <div class="col d-flex justify-content-end">
            <span class="stars-given">★</span>
            <span class="stars-not-given">★</span>
            <span class="stars-not-given">★</span>
            <span class="stars-not-given">★</span>
            <span class="stars-not-given">★</span>
        </div>`;
            break;
        case 2:
            starsGiven = `
            <div class="col d-flex justify-content-end">
            <span class="stars-given">★</span>
            <span class="stars-given">★</span>
            <span class="stars-not-given">★</span>
            <span class="stars-not-given">★</span>
            <span class="stars-not-given">★</span>
        </div>`;
            break;
        case 3:
            starsGiven = `
                <div class="col d-flex justify-content-end">
                <span class="stars-given">★</span>
                <span class="stars-given">★</span>
                <span class="stars-given">★</span>
                <span class="stars-not-given">★</span>
                <span class="stars-not-given">★</span>
            </div>`;
            break;
        case 4:
            starsGiven = `
                    <div class="col d-flex justify-content-end">
                    <span class="stars-given">★</span>
                    <span class="stars-given">★</span>
                    <span class="stars-given">★</span>
                    <span class="stars-given">★</span>
                    <span class="stars-not-given">★</span>
                </div>`;
            break;
        case 5:
            starsGiven = `
                        <div class="col d-flex justify-content-end">
                        <span class="stars-given">★</span>
                        <span class="stars-given">★</span>
                        <span class="stars-given">★</span>
                        <span class="stars-given">★</span>
                        <span class="stars-given">★</span>
                    </div>`;
            break;
        default:
            alert("Please, rate our product!");
            return;
    }

    const newReview = `
    <li class="review-item list-group-item list-group-item-light ">
    <div class="row">
        <div class="col">
            <span class="user-name lead fw-bold mx-3">${userName}</span>
            <span class="review-sent fw-lighter">${today}</span>
        </div>
        ${starsGiven}
    </div>
    <div class="review pt-2">${review}</div>
    </li>`
        // reser the form values
    $('#list-group').prepend(newReview);
    $('#review-username').val('');
    $('#review-input').val('');
    $('input[name="rate"]:checked').prop('checked', false);
});



$('.collapse-btn').click(function() {
    let $this = $(this);
    if ($this.hasClass('collapsed')) {
        $this.text("Don't have an account yet? Register!");
    } else {
        $this.text('Already have an account? Sign in!');
    }
});