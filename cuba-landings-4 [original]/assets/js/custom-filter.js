/*=======================
    Custom isotope zoom gallery 
  ======================*/

$(document).ready(function () {
  // *============ Isotope start =================*
  $(".collection-main-wrapper").isotope({
    itemSelector: ".items",
  });

  $(".collection-filter button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var selector = $(this).attr("data-filter");
    $(".collection-main-wrapper").isotope({
      filter: selector,
    });
    return false;
  });
  // *============ Isotope end =================*
});
