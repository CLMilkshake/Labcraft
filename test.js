$(function() {
    var user_name, api_key, twitch_widget;
  
    user_name="f1dd3";
    api_key = "AIzaSyDlS0yzIUoLdsixGW_muZzTkbszlYbBVZk";
    twitch_widget = $("#twitch-widget");
    twitch_widget.attr("href", "https://twitch.tv/" + user_name);
  
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        user_name +
        "?client_id=" +
        api_key +
        "&callback=?",
      function(data) {
        if (data.stream) {
          twitch_widget.html(
            "<span class='online'></span> Online! Playing: " +
              data.stream.game +
              "<span class='viewers'>Viewers: " +
              data.stream.viewers +
              "</span>"
          );
        } else {
          twitch_widget.html("<span class='offline'></span> Offline");
        }
      }
    );
  });