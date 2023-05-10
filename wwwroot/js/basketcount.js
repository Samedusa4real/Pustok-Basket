$(document).ready(function () {
    $("#addtobasket").click(function () {
        var itemId = $(this).data("item-id");
        $.ajax({
            url: "/Basket/AddToBasket/" + itemId,
            type: "POST",
            success: function () {
                var currentCount = parseInt($(".cart-total .text-number").text());
                $(".cart-total .text-number").text(currentCount + 1);
            },
            error: function () {
                alert("An error occurred while adding the item to the basket.");
            }
        });
    });
});