$(document).ready(function(){
            var clear = $('#clear'), seconds = 0, minutes = 0, t;
            $("#stop_watch").hide();
            $("#button_type_stop_watch").click(function(){
                $("#stop").hide();
            });
            $("#button_type_timer").click(function(){
                $("#stop_watch").hide();
                $("#timer").show();
            });
            $("#button_type_stop_watch").click(function(){
                $("#timer").hide();
                $("#stop_watch").show();
            });
            $("button_type_timer").click(function(){
                $("#stop_watch").fadeOut("slow");
                $("#timer").fadeIn("slow");
            });
            $("button_type_stop_watch").click(function(){
                $("#timer").fadeOut("slow");
                $("#stop_watch").fadeIn("slow");
            });
            $("#start").click(function(){
                t = setTimeout(add, 1000);
                $("#start").hide();
                $("#stop").show();
                $("#clear").show();
            });
            $("#stop").click(function(){
                clearTimeout(t);
                $("#stop").hide();
                $("#start").show();
                $("#clear").show();
            });
            $("#clear").click(function(){
                clearTimeout(t);
                $('#h1').text('00:00');
                seconds = 0; minutes = 0;
                $("#start").show();
                $("#clear").show();
            });
        });
        function add() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
            timer();
        }
        
jQuery(function ($) {
        var timer = null,
            startTime = null,
            progress = $("#progress").shieldProgressBar({
                min: 0,
                max: 60,
                value: 60,
                layout: "circular",
                layoutOptions: {
                    circular: {
                        width: 40,
                        borderWidth: 0,
                        color: "#1E98E4"
                    }
                },
                text: {
                    enabled: true,
                    template: '<span style="font-size:20px;">{0:n1}</span> seconds'
                },
                reversed: true
            }).swidget();
        $("#start").shieldButton({
            events: {
                click: function () {
                    clearInterval(timer);
                    startTime = Date.now();
                    timer = setInterval(updateProgress, 100);
                }
            }
        });
        $("#stop").shieldButton({
            events: {
                click: function () {
                    clearInterval(timer);
                }
            }
        });
        function updateProgress() {
            var remaining = 60 - (Date.now() - startTime) / 1000;
            progress.value(remaining);
            if (remaining <= 0) {
                clearInterval(timer);
            }
        }
    });