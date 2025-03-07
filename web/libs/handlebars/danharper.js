/* Handlebars Helpers - Dan Harper (http://github.com/danharper) */

/* This program is free software. It comes without any warranty, to
* the extent permitted by applicable law. You can redistribute it
* and/or modify it under the terms of the Do What The Fuck You Want
* To Public License, Version 2, as published by Sam Hocevar. See
* http://sam.zoy.org/wtfpl/COPYING for more details. */

/**
 * Modifications:
 * 1. all unless removed for >, <, >=, <=
 * 2. instead of {{if_eq a compare=b}}, use {{if_eq a to=b}}

/**
* If Equals
* if_eq this compare=that
*/
Handlebars.registerHelper('if_eq', function(context, options) {
if (context == options.hash.to)
return options.fn(this);
return options.inverse(this);
});

/**
* Unless Equals
* unless_eq this compare=that
*/
Handlebars.registerHelper('unless_eq', function(context, options) {
if (context == options.hash.to)
return options.inverse(this);
return options.fn(this);
});

/**
* If Greater Than
* if_gt this compare=that
*/
Handlebars.registerHelper('if_gt', function(context, options) {
if (context > options.hash.to)
return options.fn(this);
return options.inverse(this);
});

/**
* If Less Than
* if_lt this compare=that
*/
Handlebars.registerHelper('if_lt', function(context, options) {
if (context < options.hash.to)
return options.fn(this);
return options.inverse(this);
});

/**
* If Greater Than or Equal To
* if_gteq this compare=that
*/
Handlebars.registerHelper('if_gteq', function(context, options) {
if (context >= options.hash.to)
return options.fn(this);
return options.inverse(this);
});


/**
* If Less Than or Equal To
* if_lteq this compare=that
*/
Handlebars.registerHelper('if_lteq', function(context, options) {
if (context <= options.hash.to)
return options.fn(this);
return options.inverse(this);
});

/**
* Convert new line (\n\r) to <br>
* from http://phpjs.org/functions/nl2br:480
*/
Handlebars.registerHelper('nl2br', function(text) {
var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
return new Handlebars.SafeString(nl2br);
});