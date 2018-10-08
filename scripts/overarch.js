$(document).ready(function () {
    $('.warrior').on("mouseover", function() {
        $('#class').css({'color': '#2b2b2b'});
        $('.class_desc').load('../naratives/class_select.txt #warrior', function() {
            $(this).show(400);
        });
    });
    $('.warrior').on("mouseout", function () {
        $('#class').css({ 'color': '#e8ffda' });
        $('.class_desc').load('../naratives/class_select.txt #warrior', function () {
            $(this).hide(200);
        });
    });
    $('.ranger').on("mouseover", function () {
        $('#class').css({ 'color': '#2da707' });
        $('.class_desc').load('../naratives/class_select.txt #ranger', function () {
            $(this).show(400);
        });
    });
    $('.ranger').on("mouseout", function () {
        $('#class').css({ 'color': '#e8ffda' });
        $('.class_desc').load('../naratives/class_select.txt #ranger', function () {
            $(this).hide(200);
        });
    });
    $('.psion').on("mouseover", function () {
        $('#class').css({ 'color': '#00c3ff' });
        $('.class_desc').load('../naratives/class_select.txt #psion', function () {
            $(this).show(400);
        });
    });
    $('.psion').on("mouseout", function () {
        $('#class').css({ 'color': '#e8ffda' });
        $('.class_desc').load('../naratives/class_select.txt #psion', function () {
            $(this).hide(200);
        });
    });
    $('.monk').on("mouseover", function () {
        $('#class').css({ 'color': '#d73737' });
        $('.class_desc').load('../naratives/class_select.txt #monk', function () {
            $(this).show(400);
        });
    });
    $('.monk').on("mouseout", function () {
        $('#class').css({ 'color': '#e8ffda' });
        $('.class_desc').load('../naratives/class_select.txt #monk', function () {
            $(this).hide(200);
        });
    });
});


function changeColorWarrior() {
    var element = document.getElementById("changeme");
    element.style.color = '#2b2b2b';
}

function changeColorRanger() {
    var element = document.getElementById("changeme");
    element.style.color = '#2da707';
}

function changeColorPsion() {
    var element = document.getElementById("changeme");
    element.style.color = '#00c3ff';
}

function changeColorPugilist() {
    var element = document.getElementById("changeme");
    element.style.color = '#d73737';
}

function colorReset() {
    var element = document.getElementById("changeme");
    element.style.color = '#e8ffda';
}

function changePage() {
    window.location = "journey/start.html";
    // $(location).attr('href', 'http://stackoverflow.com');
}