class FollowToggle {
    constructor($el) {
        this.$el = $el;
        //console.log(this.$el);
        this.userId = this.$el.attr("user-id");
        this.followState = this.$el.attr("initial-follow-state");
        //this.render();
        
    }
    
    render() {
        if (this.followState === "true") {
            this.$el.text("Unfollow");
        } else {
            this.$el.text("Follow");
        }
    }

    handleClick() {
        this.$el.on("click", e => {
            e.preventDefault();
            if (this.followState === "false") {
                return $.ajax({
                    method: 'POST',
                    url:`/users/${this.userId}/follow`,
                    success: (data) => {
                        debugger;   
                      postMessage("successfully saved")
                    }
                });
            } else {
                return $.ajax({
                    method: 'DELETE',
                    url:`/users/${this.userId}/follow`,
                    success: (data) => {
                        debugger;
                      postMessage("successfully saved")
                    }
                });
            }
        })
    }
}
    



//             return $.ajax(
//                 if (this.followState === "false") {
//                 {                    
//                     method: 'POST',
//                     url:'/users/:id/follow',
//                     success: (gif) => {
//                       postMessage("successfully saved")}
//                   }} else {{
//                     method: 'POST',
//                     url:'/users/:id/follow',
//                     success: (gif) => {
//                       postMessage("successfully saved")
//                     }
//                   }}
//                 }
//             );

//         })
//     }
// }



module.exports = FollowToggle;