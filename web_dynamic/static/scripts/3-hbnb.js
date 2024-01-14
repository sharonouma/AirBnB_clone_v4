$(() => {
    const selectedAmenities = [];
    $("input[type='checkbox']").change(function (e) {
        e.preventDefault();
        const amenityId = $(this).attr('data-id');
        const amenityName = $(this).attr('data-name');
        if ($(this).is(":checked")) {
            selectedAmenities.push(amenityName);
        } else {
            const index = selectedAmenities.indexOf(amenityName);
            if (index != -1) {
                selectedAmenities.splice(index, 1);
            }
        }

        $('.amenities h4').text(selectedAmenities.join(', '));
    });
    $.ajax({
        type: 'GET',
        url: 'http://0.0.0.0:5001/api/v1/status/',
        success: (data) => {
            if (data.status == 'OK')
                $('#api_status').addClass('available');
            else
                $('#api_status').removeClass('available');
        },
    });
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        dataType: "json",
        contentType: "application/json",
        data: '{}',
        success: (places) => {
            $.each(places, (i, place) => {
                $(".places").append(`
                <article>
                    <div class="title_box">
                        <h2>${place.name}</h2>
                        <div class="price_by_night">$${place.price_by_night}</div>
                    </div>
                    <div class="information">
                        <div class="max_guest">${place.max_guest} ${place.max_guest != 1 ? "Guests": "Guest"}</div>
                            <div class="number_rooms">${place.number_rooms} ${place.number_rooms != 1 ? "Bedrooms": "Bedroom"}</div>
                            <div class="number_bathrooms">${place.number_bathrooms} ${place.number_bathrooms != 1 ? "Bathrooms": "Bathroom"}</div>
                    </div>
                    <div class="user">
                        </div>
                        <div class="description">
                        ${place.description}
                        </div>
                </article>
                `)
            })
        }
    })

});
