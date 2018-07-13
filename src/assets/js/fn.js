window._ = require('underscore');

$(document).ready(function(){
    var config = [];
    var json = [];

    $.getJSON(require("../../app.config.json"), function(data){
        config = data;
        $.fn.getContent(config);
    });

    $.getJSON(require("../../mock.json"), function(data){
        json = data;
        
    });

    $.fn.getContent = function(){
        $.get("views/template.html", function(template){
            $.each(config.data, function(index, data){
                var tmp = template;
                $.each(data, function(field, value){
                    tmp = tmp.split("{{" + field + "}}").join(value);
                });
                tmp+= index % 2 != 0 ? "<div class='clearfix'>&nbsp;<div>" : "";
                $("section").append(tmp);
            });
        });
    };

    $.fn.getFormat = function(type,data){
        switch(type){
            case "message":
                return "<div class='col-lg-12'><div class='alert alert-warning'>" + data + "</div></div>";
            default: return data;
        }
    };

    $.getJsonFormat = function($this){
        switch($this.data("type")){
            case 1:
                return _.filter(json,function(filter){ 
                    return filter[$this.data("field")].toString().toLowerCase().indexOf($this.val().toLowerCase()) > -1; 
                });

            case 2:
                return _.find(json,function(find){ 
                    return find[$this.data("field")].toString().toLowerCase().indexOf($this.val().toLowerCase()) > -1; 
                });
            
            case 3:
                var data = $this.val().split(",");
                if(data.length > 1){
                    return _.sortBy(json,function(sort){ return sort[data[0]];}).reverse();
                }else{
                    return _.sortBy(json,function(sort){ return sort[data[0]];});
                }

            case 4:
                return _.uniq(json,function(uniq){ return uniq[$this.val()];});

            case 5:
                var array = $this.val().split(",");
                return _.filter(json,function(filter){ return _.contains(array, filter.id.toString());});

            case 6:
                var array = $this.val().split(",");
                if(array[0].toString().toLowerCase() == "first"){
                    return _.first(json);
                }else{
                    return _.last(json);
                }

            default: json;
        }
    };
    /*acciones*/
    $(document).on("change", ".txtchange", function(){
        var $this = $(this);
        var arrayIn = [2,6];
        $.get("views/table.html", function(template){
            var html = "";
            $.each($.getJsonFormat($this), function(index, data){
                if(_.contains(arrayIn, $this.data("type"))){
                    template = template.split("{{" + index + "}}").join(data);
                    html = template;
                }else if(index < config.default.maxrecord){
                    var tmp = template;
                    $.each(data, function(field, value){
                        tmp = tmp.split("{{" + field + "}}").join(value);
                    });
                    html+= tmp;
                }
            });
            $(config.default.div + $this.data("id")).html(html.trim().length > 0 ? html : $.fn.getFormat("message", config.mensajeria.noresult));
        });
    });
});