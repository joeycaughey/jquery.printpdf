var PrintPDF = {
    host: "{API_HOSTNAME}",
    print: function(input_html) {
        var self = this;

        var send_html = $("<html>").append(
            $('<head>').append(
                $('<base href="{ASSETS_BASE}" />')
            ).append(
            	$('<meta charset="utf-8">')
            ).append(
                $('<link rel="stylesheet" href="{ASSETS_BASE}/_assets/app.css" type="text/css" />')
            )
        ).append(
            $('<body>').html(
                $(input_html)
            ).addClass("printing").append(

            	$('<footer>').append(
            		$('<p>').html("{FOOTER_INFORMATION}")
            	)
            )
        )

        $.ajax({
            url: self.host + "pdf/generate/", // url where to submit the request
            type: "POST", // type of action POST || GET
            dataType: 'json', // data type
            data: JSON.stringify({
                html_base64: Base64.encode($(send_html)[0].outerHTML),
                options: {
                	zoom: 0.85
                }
            }),
            success: function(result) {
                var pdf = result.replace(/^"(.*)"$/, '$1');
                if (typeof safari !== "undefined") {
                	console.log("Open Tab")
                	var a = document.createElement('a');
				    a.href = `data:application/pdf;base64,${pdf}`;
				    a.target = '_blank';
				    a.click();
				   
                } else {
	                window.open(`data:application/pdf;base64,${pdf}`, "PrintWindow", "width=1000px,height=1200px");
	            }
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    }
}
