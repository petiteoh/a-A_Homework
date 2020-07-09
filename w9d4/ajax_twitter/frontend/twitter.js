const FollowToggle = require("./follow-toggle.js");

window.FollowToggle = FollowToggle;

$(() => {
    // put your code here

   
    //const followToggle = new FollowToggle();
    const $buttons = $('.follow-toggle');
    $buttons.each((idx, el) => {
        console.log(el);
        $el = $(el);
        console.log($el);
        currentButton = new FollowToggle($el);
        currentButton.render();
        currentButton.handleClick();
    });
});