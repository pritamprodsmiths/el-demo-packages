!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).elDemoPackages={})}(this,function(e){var n=function(e){return"number"==typeof e||e&&"."!==e?e.toString():""};e.amountToThousandSeparator=function(e){return n(e).replace(/\D/g,"").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g,"$1, ")},e.toINRWords=function(e){e=n(e).replace(/, /g,"");var r=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],t=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],a=["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],o=function(e,n){return 0===e?"":" "+(1===e&&t[n]||a[e])},u=function(e,n,t){return(0!=e&&1!=n?" "+r[e]:"")+(0!=n||e>0?" "+t:"")},i="",s=0,f=0,d=0,c=[];if(e+="",Number.isNaN(parseInt(e,10)))return"";if(parseInt(e,10)>0&&e.length<=10){for(s=e.length-1;s>=0;s-=1)switch(f=e[s]-0,d=s>0?e[s-1]-0:0,e.length-s-1){case 0:c.push(u(f,d,""));break;case 1:case 4:case 6:case 8:c.push(o(f,e[s+1]));break;case 2:c.push(0!=f?" "+r[f]+" Hundred"+(0!=e[s+1]&&0!=e[s+2]?" and":""):"");break;case 3:c.push(u(f,d,"Thousand"));break;case 5:c.push(u(f,d,"Lakh"));break;case 7:c.push(u(f,d,"Crore"));break;case 9:c.push(0!=f?" "+r[f]+" Hundred"+(0!=e[s+1]||0!=e[s+2]?" and":" Crore"):"");break;default:c.push("")}return""!==(i=c.reverse().join(""))?i+" rupees":""}return""!=(i="")?i+" rupees":""},e.transformNullToString=n});
//# sourceMappingURL=el-demo-packages.umd.js.map