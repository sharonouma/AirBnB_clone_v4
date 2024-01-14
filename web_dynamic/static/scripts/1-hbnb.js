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
    
});
