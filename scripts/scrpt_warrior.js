/* Author: Nathan Adams */

var get_skunk = false;

$(document).ready(function() {
    $('#autoload').load('../narratives/warrior_nar.html #init');
    $('.button_menu').load('../narratives/warrior_nar.html #init_menu');
    $('.button_menu').on("click", "#common_bttn", takeCommon);
    $('.button_menu').on("click", "#decrepit_bttn", takeDecrepit);
});

// common path functions are denoted w/ cmmn
function takeCommon() {
    $('#autoload').load('../narratives/warrior_nar.html #common_path');
    $('.button_menu').load('../narratives/warrior_nar.html #common_path_menu');
    $('.button_menu').on("click", "#follow_tracks", cmmnFollowTracks);
    $('.button_menu').on("click", "#ignore_tracks", cmmnIgnoreTracks);
}

function cmmnFollowTracks() {
    $('#autoload').load('../narratives/warrior_nar.html #common_path');
    $('.button_menu').load('../narratives/warrior_nar.html #common_path_menu');
    $('.button_menu').on("click", "#follow_tracks", cmmnFollowTracks);
    $('.button_menu').on("click", "#ignore_tracks", cmmnIgnoreTracks);
}

function cmmnIgnoreTracks() {
    $('#autoload').load('../narratives/warrior_nar.html #ignored_tracks');
    $('.button_menu').load('../narratives/warrior_nar.html #path_return_menu');
    $('.button_menu').on("click", "#follow_tracks", toCrossroads);
    // $('.button_menu').on("click", "#ignore_tracks", cmmnIgnoreTracks);
}

// decrepit path functions are denoted w/ dcrp
function takeDecrepit() {
    $('#autoload').load('../narratives/warrior_nar.html #decrepit_path');
    $('.button_menu').load('../narratives/warrior_nar.html #decrepit_path_menu');
    $('.button_menu').on("click", "#glow_avoid_bttn", dcrpAvoidGlow);
    $('.button_menu').on("click", "#glow_apprch_bttn", dcrpApprchGlow);
}

function dcrpAvoidGlow() {
    $('#autoload').load('../narratives/warrior_nar.html #glow_avoided');
    $('.button_menu').load('../narratives/warrior_nar.html #avoid_glow_menu');
    $('.button_menu').on("click", "#glow_avoid_cont", toCrossroads);
}

function dcrpApprchGlow() {
    $('#autoload').load('../narratives/warrior_nar.html #glow_approached');
    $('.button_menu').load('../narratives/warrior_nar.html #apprch_glow_menu');
    $('.button_menu').on("click", "#get_frosted", toDefeatPage);
}

// crossroad functions are denoted w/ xrd
function toCrossroads() {

}

function toWarrBossPage() { window.location.href = "./warrior_boss.txt"; }
function toDefeatPage() { window.location.href = "./defeat.txt"; }
function toVictoryPage() { window.location.href = "./victory.txt"; }