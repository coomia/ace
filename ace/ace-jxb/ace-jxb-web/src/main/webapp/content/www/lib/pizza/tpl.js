if("localhost"==location.hostname||"192.168.2.253"==location.hostname);else{var hostnameArray=location.hostname.split(".");document.domain=hostnameArray[1]+"."+hostnameArray[2]}var urlData={},params=document.URL.split("?")[1];params&&$.each(params.split("&"),function(){var t=this.split("=");urlData[t[0]]=t[1]});var tplHtml={};$("script").each(function(){"text/template"==$(this).attr("type")&&$(this).attr("id")&&(tplHtml[$(this).attr("id")]=$.trim($(this).html()))}),urlData.callback&&parent.window[urlData.callback](tplHtml);