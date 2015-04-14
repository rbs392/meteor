/*
Conventions to follow 
object {"key":value};
strings ""
*/

NavList = new Mongo.Collection("navList")

if (Meteor.isClient) {

    console.log(NavList)
    Template.nav.helpers({
        navList : function(){
            return NavList.find({});;
        }
    })

    function scrollTo(position){
        $("body").animate({
                "scrollTop" : position
        },200);
    }

    Template.nav.events({
        "click .nav-item":function(event){
            //event.stoppropagate();
            console.log(this.nav.toLowerCase())
            switch(this.nav.toLowerCase()){
                case 'who i am':
                    scrollTo($("#am").position().top)
                break;

                case 'what i do':
                    scrollTo($("#do").position().top)
                break;

                case 'what i want':
                    scrollTo($("#want").position().top)
                break;

                case 'where i exist':
                    scrollTo($("#exist").position().top)
                break;

                case 'what is your say':
                    scrollTo($("#say").position().top)
                break;
            }
        }
    })

    $(function(){
        
    })
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup

    });
}
