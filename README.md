# jquery.printpdf
Print PDF Handler for API


Jquery handler to pass HTML to an API service for printing.  You can pass HTML and pass it to an endpoint regardless of any authentication.   You can use your site stylesheets and modify the HTML before sending to structure your PDF's.

```javascript
PrintPDF.print(html);
```


## CONFIGRATION
There are a few configuration settings in the Javascript.

{API_HOSTNAME} - The End point of the API print function

{ASSET_BASE} - The base URL of your site that containts CSS and images.

{FOOTER_HTML} -  Any Footer setup you wish to configure.
