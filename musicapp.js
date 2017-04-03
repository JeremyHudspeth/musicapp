
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {

  Meteor.startup(function () {

});


  Template.playground.helpers({

    "startdac": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.start==1) {
          playAll();

        } else if (stater.start==0){
			stopAll();
		}
      }

      return Session.get('startdac');
    },

    "drums": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums==1) {
          playDrums();

        } else if (starter.drums==0) {

          stopDrums();

        }
      }

      return Session.get('drums');
    },

    "bass": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline==1) {
          playBass();

        } else if (starter.bassline==0) {

          stopBass();

        }
      }
      return Session.get('bass');
    },

    "cymbal": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.cymbal==1) {
          playCymbal();

        } else if (starter.cymbal==0) {

          stopCymbal();

        }
      }
      return Session.get('cymbal');
    },

	"arp": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp==1) {
          playArp();

        } else if (starter.arp==0) {

          stopArp();

        }
      }
      return Session.get('arp');
    },
   
   "hihat": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.hihat==1) {
          playHihat();

        } else if (starter.hihat==0) {

          stopHihat();

        }
      }
      return Session.get('hihat');
    },
	 
	 "snaredrum": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.snaredrum==1) {
         
		 playSnaredrum();

        } else if (starter.snaredrum==0) {

          stopSnaredrum();

        }
      }
      return Session.get('snaredrum');
    },
	
	"bassline": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline==1) {
         
		 playBassline();

        } else if (starter.bassline==0) {

          stopBassline();

        }
      }
      return Session.get('bassline');
    },
	
	"bassdrum": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassdrum==1) {
         
		 playBassdrum();

        } else if (starter.bassdrum==0) {

          stopBassdrum();

        }
      }
      return Session.get('bassdrum');
    },

    //don't forget the commas between each function
//the last one doesn't have to have one!


  "sliderVal1":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider1').data('uiSlider').value(slider.slide);
        setSpeed(slider.slide/50);
        return slider.slide;
      }
    },

  });


  Template.playground.events({

     "click button.startButton": function () {
      Session.set('startdac', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
    },

     "click button.myButton1": function () {
      Session.set('drums', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 1}});

    },
      "click button.myButton2": function () {
      Session.set('drums', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 0}});
    },

      "click button.myButton3": function () {
      Session.set('bass', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 1}});

    },

      "click button.myButton4": function () {
      Session.set('bass', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 0}});

    },
      "click button.myButton5": function () {
      Session.set('cymbal', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal: 1}});

    },

      "click button.myButton6": function () {
      Session.set('cymbal', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal: 0}});

    },
      "click button.myButton7": function () {
      Session.set('arp', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 1}});

    },

      "click button.myButton8": function () {
      Session.set('arp', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 0}});

    },
      "click button.myButton9": function () {
      Session.set('hihat', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat: 1}});

    },

      "click button.myButton10": function () {
      Session.set('hihat', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat: 0}});

    },
      "click button.myButton11": function () {
      Session.set('snaredrum', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum: 1}});

    },

      "click button.myButton12": function () {
      Session.set('snaredrum', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum: 0}});

    },
      "click button.myButton13": function () {
      Session.set('bassline', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 1}});

    },

      "click button.myButton14": function () {
      Session.set('bassline', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 0}});

    },
      "click button.myButton15": function () {
      Session.set('bassdrum', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum: 1}});

    },

      "click button.myButton16": function () {
      Session.set('bassdrum', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum: 0}});

    }

  });

  Template.playground.onRendered(function() {
    $('h2').hide();
    var handler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider1').data('uiSlider')) {
        $("#slider1").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
  });
}

if (Meteor.isServer) {
//      MusicMachine.remove({});
      if (MusicMachine.find().count() === 0) {
      MusicMachine.insert({slide: 50});

    }

}