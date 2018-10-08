var get_bait = false;
var get_treasure = false;

$(document).ready(function () {
    $('#autoload').load('../naratives/ranger_nar.html #init', function() {
        $(this).show(500);
    });
    $('.button_menu').load('../naratives/ranger_nar.txt #init_menu', function() {
        $(this).show(500);
    });
    $('.button_menu').on("click", "#charge_in", loadCharge);
    $('.button_menu').on("click", "#hone_sense", loadSense);
    // console.log("do you have bait? :: " + have_bait);
});

function clickMe() { console.log("i've been clicked"); }

// charge path functions are denoted with "chrg"
function loadCharge() {
    $('#autoload').load('../naratives/ranger_nar.html #charge');
    $('.button_menu').load('../naratives/ranger_nar.html #charge_menu');
    $('.button_menu').on("click", "#noise_ignore", chrgResumePath);
    $('.button_menu').on("click", "#noise_investigate", chrgInvestigate);
}

function chrgResumePath() {
    $('#autoload').load('../naratives/ranger_nar.html #resume_chrg_path');
    $('.button_menu').load('../naratives/ranger_nar.html #resume_chrg_path_menu');
    $('.button_menu').on("click", "#chrg_avoid", chrgAvoidCamp);
    $('.button_menu').on("click", "#chrg_apprch", chrgApprchCamp);
}

function chrgInvestigate() {
    $('#autoload').load('../naratives/ranger_nar.html #investigation');
    $('.button_menu').load('../naratives/ranger_nar.html #investigation_menu');
    $('.button_menu').on("click", "#leave_alone", chrgResumePath);
    $('.button_menu').on("click", "#check_further", checkNoiseFurther);
}

function checkNoiseFurther() {
    $('#autoload').load('../naratives/ranger_nar.html #check_noise');
    $('.button_menu').load('../naratives/ranger_nar.html #check_noise_menu');
    $('.button_menu').on("click", "#poisoned", toDefeatPage);
}

function chrgAvoidCamp() {
    $('#autoload').load('../naratives/ranger_nar.html #chrg_cmpfr_avoid');
    $('.button_menu').load('../naratives/ranger_nar.html #chrg_cmpfr_menu');
    $('.button_menu').on("click", "#chrg_continue", toRngrBossPage);
}

function chrgApprchCamp() {
    $('#autoload').load('../naratives/ranger_nar.html #chrg_cmpfr_apprch');
    $('.button_menu').load('../naratives/ranger_nar.html #chrg_cmpfr_menu');
    $('.button_menu').on("click", "#chrg_continue", toRngrBossPage);
}

// sense path functions are denoted with "snse"
function loadSense() {
    $('#autoload').load('../naratives/ranger_nar.html #sense');
    $('.button_menu').load('../naratives/ranger_nar.html #sense_menu_nrml');
    $('.button_menu').on("click", "#nrml_left_path_bttn", snseTakeLeftPath);
    $('.button_menu').on("click", "#nrml_midl_path_bttn", snseTakeMiddlePath);
    $('.button_menu').on("click", "#nrml_rght_path_bttn", snseTakeRightPath);
}

function snseTakeLeftPath() {
    // get_bait = true;
    // console.log("do you have bait? :: " + have_bait);
    if (get_bait = false)  {
        $('#autoload').load('../naratives/ranger_nar.html #left_path');
        get_bait = true;
    }
    if (get_bait = true) {
        $('#autoload').load('../naratives/ranger_nar.html #left_have_bait');
    }
    $('.button_menu').load('../naratives/ranger_nar.html #left_path_menu');
    $('.button_menu').on("click", "#left_return_bttn", snseLeftReturn);
    sessionStorage.setItem("bait_key", get_bait);
    console.log("have bait? :: " + sessionStorage.getItem("bait_key"));
}

function snseLeftReturn() {
    // left_disabled = true;
    // console.log("left path disabled? :: " + left_disabled);
    $('#autoload').load('../naratives/ranger_nar.html #left_return');
    $('.button_menu').load('../naratives/ranger_nar.html #sense_menu_left_dsbl');
    // $('.button_menu').load('../naratives/ranger_nar.html #sense_menu_left_dsbl');
    // $('.button_menu').find('#left_path_bttn').prop("disabled", true);
    // $('.button_menu').on("click", "#left_path_bttn", function() {console.log('why you click me?')});
    $('.button_menu').on("click", "#lfds_midl_path_bttn", snseTakeMiddlePath);
    $('.button_menu').on("click", "#lfds_rght_path_bttn", snseTakeRightPath);
}

function snseTakeMiddlePath() {
    console.log("middle path taken");
    $('#autoload').load('../naratives/ranger_nar.html #midl_path');
    $('.button_menu').load('../naratives/ranger_nar.html #midl_path_menu');
    $('.button_menu').on("click", "#glint_ignore", snseGlintIgnore);
    $('.button_menu').on("click", "#glint_crouch", snseCrouch);
}

function snseGlintIgnore() {
    $('#autoload').load('../naratives/ranger_nar.html #ignored');
    $('.button_menu').load('../naratives/ranger_nar.html #ignored_menu');
    $('.button_menu').on("click", "#arrow_continue", toDefeatPage);
}

function snseCrouch() {
    $('#autoload').load('../naratives/ranger_nar.html #crouched');
    $('.button_menu').load('../naratives/ranger_nar.html #crouched_menu');
    $('.button_menu').on("click", "#crouch_continue", snseMidPathCont);
}

function snseMidPathCont() {
    $('#autoload').load('../naratives/ranger_nar.html #midl_cont');
    $('.button_menu').load('../naratives/ranger_nar.html #midl_cont_menu');
    $('.button_menu').on("click", "#snse_avoid", snseCampAvoid);
    $('.button_menu').on("click", "#snse_apprch", snseCampApprch);
}

function snseCampAvoid() {
    $('#autoload').load('../naratives/ranger_nar.html #snse_camp_alt');
    $('.button_menu').load('../naratives/ranger_nar.html #snse_camp_continue_menu');
    $('.button_menu').on("click", "#snse_camp_continue", toRngrBossPage);
}

function snseCampApprch() {
    $('#autoload').load('../naratives/ranger_nar.html #snse_camp_apprch');
    $('.button_menu').load('../naratives/ranger_nar.html #snse_camp_continue_menu');
    $('.button_menu').on("click", "#snse_camp_continue", toRngrBossPage);
}

function snseTakeRightPath() {
    console.log("do you have treasure? :: " + get_treasure);
    $('#autoload').load('../naratives/ranger_nar.html #rght_path');
    $('.button_menu').load('../naratives/ranger_nar.html #rght_path_menu');
    // $('.button_menu').on("click", "#rght_return_bttn", snseRghtReturn);
    $('.button_menu').on("click", "#take_trsr_bttn", snseTakeTreasure);
    $('.button_menu').on("click", "#leave_trsr_bttn", snseLeaveTreasure);
}

function snseTakeTreasure() {
    get_treasure = true;
    sessionStorage.setItem("treasure_key", get_treasure);
    $('#autoload').load('../naratives/ranger_nar.html #take_trsr');
    $('.button_menu').load('../naratives/ranger_nar.html #rght_return_menu');
    $('.button_menu').on("click", "#rght_return_bttn", snseRghtReturn);
}

function snseLeaveTreasure() {
    console.log("left the treasure");
    get_treasure = false;
    sessionStorage.setItem("treasure_key", get_treasure);
    $('#autoload').load('../naratives/ranger_nar.html #leave_it');
    $('.button_menu').load('../naratives/ranger_nar.html #rght_return_no_trsr_menu');
    $('.button_menu').on("click", "#rght_return_no_trsr_bttn", snseRghtReturn);
}

function snseRghtReturn() {
    console.log("got treasure? :: " + get_treasure)
    $('#autoload').load('../naratives/ranger_nar.html #rght_return');
    $('.button_menu').load('../naratives/ranger_nar.html #sense_menu_rght_dsbl');
    $('.button_menu').on("click", "#rtds_left_path_bttn", snseTakeLeftPath);
    $('.button_menu').on("click", "#rtds_midl_path_bttn", snseTakeMiddlePath);
    // $('.button_menu').on("click", "#rght_path_bttn", snseTakeRightPath);
}

function toRngrBossPage() { window.location.href = "./ranger_boss.html"; }
function toDefeatPage() { window.location.href = "./defeat.html"; }
function toVictoryPage() { window.location.href = "./victory.html"; }