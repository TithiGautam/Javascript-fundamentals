 function expDeliveryTime(Package_type){
    let delivertime;
    switch(Package_type){
        case "standard":
            delivertime = "7 days";
            break;

        case "express":
            delivertime = "2 days";
            break;

        case "overnight":
            delivertime = "1 day";
            break;
        default:
            delivertime = "unknown";
    }
    console.log("Expected delivery time is: " + delivertime);

 }
 expDeliveryTime("standard");