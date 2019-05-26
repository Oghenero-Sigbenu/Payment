
const API_publicKey = "FLWPUBK-b5a9e72d0a71b703c3a0ab44a29cde08-X";

function payWithRave() {
    var x = getpaidSetup({
        PBFPubKey: "FLWPUBK-b5a9e72d0a71b703c3a0ab44a29cde08-X",
        customer_email: "user@example.com",
        amount: 2000,
        currency: "NGN",
        txref: "rave-123456",
        subaccounts: [
          
          
          {
            id: "RS_3A4B31CAB1813EB4C2E2F688CEE8F4B1",
            transaction_split_ratio:"3"
          },
          
        //   {
        //     id: "RS_839AC07C3450A65004A0E11B83E22CA9",
        //     transaction_split_ratio:"5"
        //   }
        ],
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect flwRef returned and pass to a 					server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}
