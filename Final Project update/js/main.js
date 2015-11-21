/**
 * Created by kyleszymanski on 11/21/15.
 */

$(document).ready(function() {

    $('audio,video').mediaelementplayer({
        //mode: 'shim',
        success: function(player, node) {
            $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
        }
    });

});