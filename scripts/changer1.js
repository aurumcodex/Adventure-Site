$(document).ready(function () {
    $('#autoload').load('../naratives/ranger_nar.html #init');
    $('.button_menu').load('../naratives/ranger_nar.txt #init_menu');
    $('.button_menu').on("click", "#charge_in", loadCharge);
    $('.button_menu').on("click", "#hone_sense", clickMe);
});

function clickMe() { console.log("i've been clicked"); }

function loadCharge() {
    $('#autoload').load('../naratives/ranger_nar.html #charge');
    $('.button_menu').load('../naratives/ranger_nar.html #charge_menu');
    $('.button_menu').on("click", "#noise_ignore", resumeChrgPath);
    $('.button_menu').on("click", "#noise_investigate", clickMe);
}

function resumeChrgPath() {
    $('#autoload').load('../naratives/ranger_nar.html #resume_chrg_path');
    $('.button_menu').load('../naratives/ranger_nar.html #resume_chrg_path_menu');
    $('.button_menu').on("click", "#chrg_avoid", chrgAvoidCamp);
    $('.button_menu').on("click", "#chrg_apprch", clickMe);
}

function chrgAvoidCamp() {
    $('#autoload').load('../naratives/ranger_nar.html #chrg_cmpfr_avoid');
    $('.button_menu').load('../naratives/ranger_nar.html #chrg_cmpfr_avoid_menu');
    $('.button_menu').on("click", "#chrg_continue", toRngrBossPage);
}

function toRngrBossPage() { window.location.href = "./ranger_boss.html"; }