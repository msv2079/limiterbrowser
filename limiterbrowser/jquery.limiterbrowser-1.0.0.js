/*
 *  Project: limiterbrowser
 *  Description: Identifies the browser according to the parameters of the plugin.
 *  Author: Murilo Siqueira
 *  License: MIT
 */

; (function ($) {
    var limiterbrowser = "limiterbrowser",
        defaults = {
            text: "",
            currentBrowser: "",
            bool: false,
            currentVersion: 0,
            userAgent: navigator.userAgent
        };


    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = limiterbrowser;
        this.init();
        return this.options;
    }

    Plugin.prototype = {
        init: function () {
            var browserList = this.options.browsers.toLowerCase().split(",");
            var versionList = this.options.blockMinVersions.split(",");

            if (/(MSIE)/.test(this.options.userAgent)) {
                this.options.currentBrowser = "ie";
                /MSIE ([0-9]+\.\d+);/.exec(this.options.userAgent);
                this.options.currentVersion = RegExp.$1;
            } else if (/(Safari)/.test(this.options.userAgent) && /(Chrome)/.test(this.options.userAgent)) {
                this.options.currentBrowser = "chrome";
                this.options.currentVersion = stringToNumber(/Chrome\/[0-9]\d+\.[0-9]\.[0-9]\d+\.[0-9]\d+/.exec(this.options.userAgent).toString().substr(7));
            } else if (/(Safari)/.test(this.options.userAgent) && !/(Chrome)/.test(this.options.userAgent)) {
                this.options.currentBrowser = "safari";
                this.options.currentVersion = stringToNumber(/Version\/[0-9]\.[0-9]\.[0-9]|Version\/[0-9]\.[0-9]/.exec(this.options.userAgent).toString().substr(8));
            } else if (/(Firefox)/.test(this.options.userAgent)) {
                this.options.currentBrowser = "firefox";
                this.options.currentVersion = /Firefox\/[0-9]\d+\.[0-9]/.exec(this.options.userAgent).toString().substr(8);
            } else if (/(Opera)/.test(this.options.userAgent)) {
                this.options.currentBrowser = "opera";
                this.options.currentVersion = /Version\/[0-9]\d+\.[0-9]\d+/.exec(this.options.userAgent).toString().substr(8);
            }

            for (var i in browserList) {
                var minBrowser = browserList[i].replace(" ", "");
                var minVersion = versionList[i].replace(" ", "");
                minVersion = minBrowser == "safari" || minBrowser == "chrome" ? stringToNumber(minVersion) : minVersion;
                
                if (minBrowser == this.options.currentBrowser) {
					this.options.bool = this.options.currentVersion - minVersion <= 0? true : false;
                    break;
                }
            }
			
            if (this.options.bool) {
                $(this.element).css("display", "block");
                $(this.element).text(this.options.text);
				return true;
            }
        }
    };

    $.fn[limiterbrowser] = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + limiterbrowser)) {
                $.data(this, "plugin_" + limiterbrowser, new Plugin(this, options));
            }

            value =  $.data(this, "plugin_" + limiterbrowser).bool;
        });

        return value;
    };

    function stringToNumber(value) {
        var str = "";

        for (var i = 0; i < value.length; i++) {
			if(value[i] == "."){
				break;
			}
			
			str += value[i];
        }
		

        return Number(str);
    }
})($);