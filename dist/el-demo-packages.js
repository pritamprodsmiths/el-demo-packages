var e=function(e){return"number"==typeof e||e&&"."!==e?e.toString():""};exports.amountToThousandSeparator=function(r){return e(r).replace(/\D/g,"").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g,"$1, ")},exports.toINRWords=function(r){r=e(r).replace(/, /g,"");var n=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],t=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],a=["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],u=function(e,r){return 0===e?"":" "+(1===e&&t[r]||a[e])},s=function(e,r,t){return(0!=e&&1!=r?" "+n[e]:"")+(0!=r||e>0?" "+t:"")},o="",i=0,h=0,p=0,c=[];if(r+="",Number.isNaN(parseInt(r,10)))return"";if(parseInt(r,10)>0&&r.length<=10){for(i=r.length-1;i>=0;i-=1)switch(h=r[i]-0,p=i>0?r[i-1]-0:0,r.length-i-1){case 0:c.push(s(h,p,""));break;case 1:case 4:case 6:case 8:c.push(u(h,r[i+1]));break;case 2:c.push(0!=h?" "+n[h]+" Hundred"+(0!=r[i+1]&&0!=r[i+2]?" and":""):"");break;case 3:c.push(s(h,p,"Thousand"));break;case 5:c.push(s(h,p,"Lakh"));break;case 7:c.push(s(h,p,"Crore"));break;case 9:c.push(0!=h?" "+n[h]+" Hundred"+(0!=r[i+1]||0!=r[i+2]?" and":" Crore"):"");break;default:c.push("")}return""!==(o=c.reverse().join(""))?o+" rupees":""}return""!=(o="")?o+" rupees":""},exports.transformNullToString=e;
//# sourceMappingURL=el-demo-packages.js.map