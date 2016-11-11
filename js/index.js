
    // 1 - end
    function searchAllMember() {
        $.ajax({
            url : "http://localhost:7070/bank/selectAllMember",
            dataType : "jsonp",
            jsonp : "callback",
            type : "GET",
            data : {

            },
            timeout : 3000,
            success : function(result) {

                $("#memberAll").empty();

                alert("Select All Member success")
                    for(var i = 0; i < result.length; i++){
                    var tr = $("<tr></tr>");
                    var member_id = $("<td></td>").text(result[i].member_id);
                    var member_name = $("<td></td>").text(result[i].member_name);
                    var member_account = $("<td></td>").text(result[i].member_account);
                    var member_balance = $("<td></td>").text(result[i].member_balance);
                    tr.append(member_id);
                    tr.append(member_name);
                    tr.append(member_account);
                    tr.append(member_balance);

                    $("#memberAll").append(tr);
                }
            },
            error : function () {
                alert("Select All Member SERVER ERROR")
            }
        });
    }

    // 2 - end
    function searchMember() {
        var id = $('#memberId').val();
        if(event.keyCode == 13) {
            $.ajax({
                url: "http://localhost:7070/bank/selectid",
                dataType: "jsonp",
                jsonp: "callback",
                type: "GET",
                data: {
                    member_id: id
                },
                timeout: 3000,
                success: function (result) {
                    $("#memberDetail").empty();

                    for(var i = 0; i < result.length; i++) {
                        var tr = $("<tr></tr>");
                        var member_id = $("<td></td>").text(result[i].member_id);
                        var member_name = $("<td></td>").text(result[i].member_name);
                        var member_account = $("<td></td>").text(result[i].member_account);
                        var member_balance = $("<td></td>").text(result[i].member_balance);
                        tr.append(member_id);
                        tr.append(member_name);
                        tr.append(member_account);
                        tr.append(member_balance);

                        $("#memberDetail").append(tr);
                    }
                },
                error: function () {
                    alert("Select All Member SERVER ERROR")
                }
            });
        }
    }

    // 3 - end
    function inputBalance() {
        var id = $('#depositMemberId').val();
        var money = $('#depositMemberBalance').val();

        $.ajax({
            url : "http://localhost:7070/bank/deposit",
            dataType : "jsonp",
            jsonp : "callback",
            type : "GET",
            data : {
                member_id : id,
                member_balance : money
            },
            timeout : 3000,
            success : function (result) {
                alert("deposit success")
            },
            error : function() {
                alert("Deposit SERVER ERROR")
            }
        });
    }

    // 4 - end
    function withdrawBalance() {
        var id = $('#withdrawMemberId').val();
        var money = $('#withdrawMemberBalance').val();

        $.ajax({
            url : "http://localhost:7070/bank/withdraw",
            dataType : "jsonp",
            jsonp : "callback",
            type : "GET",
            data : {
                member_id : id,
                member_balance : money
            },
            timeout : 3000,
            success : function (result) {
                if(result == true){
                    alert("Withdraw Success")
                }
                if(result == false){
                    alert("Withdraw Fail")
                }
            },
            error : function() {
                alert("Withdraw SERVER ERROR")
            }
        });
    }


    // 5 - end
    function transferBalance() {
        var send_id = $('#sendMemberId').val();
        var receive_id = $('#receiveMemberID').val();
        var transfer_money = $('#transferBalance').val();

        $.ajax({
            url : "http://localhost:7070/bank/transfer",
            dataType : "jsonp",
            jsonp : "callback",
            type : "GET",
            data : {
                send_id: send_id,
                receive_id: receive_id,
                transfer_money: transfer_money
            },
            timeout : 3000,
            success : function () {
                alert("Transfer Success")
            },
            error : function () {
                alert("Transfer SERVER ERROR")
            }
        });
    }


    // 6
    function checkMember() {
        var id = $("#checkMemberId").val();

        $.ajax({
            url : "http://localhost:7070/bank/selectid_2",
            type : "GET",
            dataType : "jsonp",
            jsonp : "callback",
            timeout : 3000,
            data : {
                 member_id : id
             },
            success : function (result) {
                alert("Search success");
                $("#accountSel").val("");
                for(var i =0;i<result.length;i++){
                    var tr = $("<tr></tr>");
                    var kind = $("<td></td>").text(result[i].kind);
                    var money = $("<td></td>").text(result[i].money);

                    tr.append(kind);
                    tr.append(money);
                    $("#accountSel").append(tr);
              }
            },
          error : function () {
              alert("CheckMember SERVER ERROR");
            }
       });
   }

