            $("#keyword").keyup(function() {
                var k = $(this).val();
                $("#user-table > tbody > tr").hide();
                var temp = $("#user-table > tbody > tr > td:nth-child(6n+3):contains('" + k + "')");

                $(temp).parent().show();
                $('.count').text(temp.length);                
            })
