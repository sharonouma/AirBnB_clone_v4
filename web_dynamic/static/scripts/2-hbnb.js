$(()=>{
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
    
});
