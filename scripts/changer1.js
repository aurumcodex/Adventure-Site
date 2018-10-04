$(document).ready(function () {
    $('#clickme').click(function() {
        $.ajax({url: "../naratives/test1.txt", success: function(result) {
            $('#changeme').html(result);
        }});
    });

    $('#clickme2').click(function() {
        $('#changeme2').load("../naratives/button_test.txt");
    });
    
    $('#autoload').load('../naratives/bones.html');
});