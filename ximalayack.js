/*
 *
 *
脚本功能：喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
软件版本：9.2.78（兼容最新版本）
下载地址：
脚本作者：**
更新时间：2024-8.14
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ximalaya.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayack.js
# > 去广告,
^https?://passport\.ximalaya\.com/friendship-mobile/v1/findFriendsBanner/show/ url reject
^https?://xdcs-collector\.ximalaya\.com/api/v1/realtime url reject
^https?://.+\.ximalaya\.com/linkeye.+/checkIP\?ip.+passport.ximalaya.com url reject
^https?://adse\.wsa\.ximalaya\.com url reject
^https?://openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?://ulogs\.umeng\.com\/unify_logs url reject
^https?://adse\.ximalaya\.com\/ url reject
^https?://gslbali\.ximalaya\.com url reject
^https?://www\.taobao\.com\/help\/getip\.php url reject
^https?://.+location\.ximalaya\.com url reject
^https?://.+dbehavior\.ximalaya\.com url reject
^https?://ad\.ximalaya\.com url reject
^https?://.+audid-api\.taobao.com url reject
^https?://passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject

[mitm] 
hostname = 42.56.64.*,*.xmcdn.com, *.ximalaya.com, 61.172.194.*,180.153.*.*,180.153.255.*, 180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*, 114.80.161.29,1.62.62.64,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.13*.*, 203.205.250.*, 211.152.137.*, 47.100.227.85, 61.164.145.12, 106.41.204.126, 112.80.180.72, 112.98.170.228, 112.99.146.108, 118.25.119.177, 223.111.231.198, 120.22*.2*.*, 43.132.8*.*, 101.33.27.*, 43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71, 114.80.99.89,114.80.99.91,114.80.99.88, 114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com



*
*
*/

















 








































;var encode_version = 'jsjiami.com.v5', htair = '__0x11c6f5',  __0x11c6f5=['woRbwoDDl8OO','wqZ8BcKTw4A=','RsKAPjE=','F2MqfsK5','TMKEVMOhwro=','w58wfMOkOw==','EFUgGFE=','wobCvzwvw4E=','w5lnwo1aw7o=','RMKmw7soRA==','w6QjbsOHLQ==','wp1Sw5LCtMKw','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','wpVjw6zCnsKCXHbCkTvDrcKV','BsOVP8OswpTDtEI=','w4JPwoRmw68VCQ==','wrrDvMK5','wqTCnsOew4rDlVYfwp5qw5vDlQ==','Q2M1AsOv','woFww63Cl8KoXw==','w5TDj8K0O1JI','wr/Cl0wBA10=','B8KZfznDml4Ywo8Yw43DlXfDqsKPTg==','OH8i','U8OwwqoHwo1gKzrDgQ==','wrTCl1UBBV7DucKLcW7Cr8OUVDs=','54qC5pyc5YyC7768w4PDvuS/guWvk+aeseW/h+epjO+8sei/i+ivmuaUp+aOiOaKjOS5qOeYj+W3tOS/pA==','5YuV6ZqW54ic5p2b5Y2G77+9XsOf5L6/5a6o5p+/5b2056ml','wqxFwpvDk8Odw6TCtyfCjsOUwocVMwdUwqA=','w7rDpXcWFnjDkMOmwrDDim9MwpvCosOuw4U6FhvCtwjCjsK5w5JECMK6woDDicO1wrB9PsKeDsOvWGrDgcOiw5ppw6lRw6PDmcOnw7psXwpfwpYrFMOkwqzCo1wmwrrCig==','PjTDpBE=','wr3CjF4BCg==','w6TDgiVIfg==','RybCvA==','O2PDmw==','PQvDv8KIPQ==','YMOtw4DDr8K9','w67CoHjDqsKT','w6PDvidwfg==','woIqHsO0wqk=','wpPCjzbDu0g=','wp/ClzIhw6c=','KWglAA==','wp7DqMK4PR8=','QsK/Jz3Ciw==','Iz/DvhE=','asKTE8Kpwow=','WcK+PcKpwoc=','cMKhCjXCng==','wot0w4TCtMKe','GC/DnyRK','w49uLzvDmw==','wpzCvhDDsXk=','wpJrMcKRw48=','PMKRd8OtdA==','V0Q8wrHDgQ==','w57DksKDP1I=','wq7DnMK5PQo=','w68FG8Ombw==','wprCtw4Pw54=','wr3DucKOIDg=','EsOXwr3DplY=','NVg8','EhAMbMK5wog2w7DCtVjDqsKqwoIywqDClQ==','e8OXeDZ2w7xuYsOfwojCsMKjY0vDpi9xwp8FYsKUwovCjmDDosOxw4QpwqrDoy/DpsKTMg3Cv0QswoHDvMKiQyNPVcOMa8KoUDrCpz7DosKXwrjDmsKFwpg8w7FTZw==','w5HDhMKzKA==','wrPCmcOzw4zDjA==','DsOIwpTDslo=','NcOmwoQYRQ==','BSg7eMK1','woQREcOSwoM=','Kk/Dow==','JUnDqg==','wqtOJsKEw7I=','f8OJw5/DhMKi','w6PDoMO9CcKm','wpQsOMOJwoI=','RsKMVHEv','aMO/wpgwwq8=','eGsNwofDsQ==','ZTLChcKpwoY=','wpLCm3oMwrI=','w74FTMO0','wo9IH8K4w5k=','wpRow4zCscKI','LW0sbQ==','BzvDnSNI','MnQxNcKM','wqLDrzjCkTg=','w57Dn8KKCG4=','w6h8DA==','w600ScOOLA==','JTPDtwNv','woc1MsODwok=','OFonTcKJ','FMORwpU=','C8OPwpQ=','w7omBAvCpA==','wqURZnfChQ==','NWc0TMKa','wrbDrcK5KQo=','TsKCwrZSKQ==','OnUUMcKM','AMOcwqzDnW8=','H0QiEHI=','U340woHDhw==','w6TChE3DksKw','w4XCsiHDhcKk','w6QXEcOtdQ==','wo1EwrPDv8Ov','BA8pW8KL','RH4AwpfDpQ==','AMK+RcOwQA==','w40ob8OuLw==','DcOSEcOZwrA=','L2YqasKd','G8O9wo4=','wpk0AA==','XcKXw7sGdC0=','wpV1GMKVw4wsfcOdwpY=','ODjDpwB+MQ==','w5XCkB3DvsKowp8Aw5w=','w4vCslXDoTDDk8KtPysFw5TDksO9','BRnDujF6','X8KKYmQx','EhnDmypr','dsKSwpxpNQ==','SMKbIsKIwp8=','UMKKTWUe','wpLChnMfIw==','w4Juwqtsw6M=','BzfDogRn','w48XOA==','wp3Ci1UJCg==','wpbDt8KuPzU=','W8KQHMKcwqA=','w7jDiAdyZQ==','w6zDm8K3Elw=','wpQ/a27CmQ==','YAvCrsKIwoc=','HCEsYcKk','wpIyJ8OHwqk=','T8K4anM/','wq5EwrPDmMOG','RmA0HsOyL8Od','cMOyw4LDtcKmGkA=','Inwe','EsOiw7Yew5h1dSPCk1/CvR8xw47DsijClg==','wpZTQSHCosKbwqQjw4XCrcO3w7HDv8ObFsO9w68=','wrvCiBAyw5I=','wq8UAsOBwpw=','AWUyE10=','wr/CoGoswog=','w4DClR/DtMKo','wpHClzYCw5Y=','IMK7QcOFYA==','Um4oAw==','w6UUIxnCsTMDZ8KU','wr7Ds8KvKg==','AsOUwpbDqFw=','NWc4','OMO2BcOrEQ==','wo7CvgzDtHQ=','aB/Cr8Odw73CvsOlQHU=','RcKEPys=','IyjDrAZ4','QsKOVnIk','w5g5KcOCWQ==','K8OCwpgH','wp9+w6Q=','EsOYwroyQA==','wqTDrcKlLAc=','wqlfwpvDg8OGw6HCvQ==','MMKsQsOTYg==','wrTDssKnNhwtGg==','RsKXLCbCjw==','wpbCnToEw57CnVE=','CsOVLcOx','wrvChmM+wovCth0=','wpkJV2/Cgg==','BMOJworDtEEmw6w=','BsODKMO7wo3DpVh+woA=','worCrxLDsw==','wp8US3PCn8KTw5U=','w4ZFwoI=','w4orIQjChg==','w4DCkQHDtMKywpE=','w6REwqY=','w6Q/Gg==','wpk5JsOCwo/Dkw==','w4w5VA==','w5rChCA=','woZICsKew5k=','woHDvsKhKyI=','woRvK8KZw4c=','F8KdT8O0aA==','NzENXcKg','I8Ocwo4EdQ==','wpfCocO4','w6B6wo9Pw6U=','MWUCFcKi','XHUuwpLDqQ==','wrs+UWfCmg==','QMONwrgMwpg=','w5wBasOzOw==','GE/DusKUCQ==','wrTChcOFw4zDjw==','PcOmCsOOLQ==','wodFwoXDvMO8','wrFMMcKow7s=','wqLDnxjCkA8=','wpbCrDnDhFU=','w7jDuDt0Tg==','LUcfLlE=','w7YGJyXCqg==','WMKFw58zRQ==','QMOrwqABwp9gKjHChQnDlkskwpjCn30=','w5HChwkWKsKtwoNtwqTCiw8/PcOSwqNzIAREMH3DocOvw4/Dt8O2NxHDncKAcMKfw4tqJcOfbsOiwrkFwrvCgHfCuj1Aw4VYw5PDmMOIw4p7w5QpUS0CO8OXPsKg','w4lCwoRrw6Q=','K8OCwo4deA==','wrgPH8OPwpU=','wrLCiyQ+w4k=','KGIUHcKD','b8K5CMKCwrI=','F8OeOMOq'];(function(_0x231fd0,_0x4f680a){var _0x5b4826=function(_0x4a3682){while(--_0x4a3682){_0x231fd0['push'](_0x231fd0['shift']());}};var _0x18d5c9=function(){var _0x4ce2f1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x333808,_0x432180,_0x2ab90b,_0x991246){_0x991246=_0x991246||{};var _0x981158=_0x432180+'='+_0x2ab90b;var _0x57b080=0x0;for(var _0x57b080=0x0,_0x441e3a=_0x333808['length'];_0x57b080<_0x441e3a;_0x57b080++){var _0x2cc193=_0x333808[_0x57b080];_0x981158+=';\x20'+_0x2cc193;var _0x5f41ea=_0x333808[_0x2cc193];_0x333808['push'](_0x5f41ea);_0x441e3a=_0x333808['length'];if(_0x5f41ea!==!![]){_0x981158+='='+_0x5f41ea;}}_0x991246['cookie']=_0x981158;},'removeCookie':function(){return'dev';},'getCookie':function(_0x503809,_0xe42b77){_0x503809=_0x503809||function(_0x56465b){return _0x56465b;};var _0x52cace=_0x503809(new RegExp('(?:^|;\x20)'+_0xe42b77['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x39753a=function(_0xf81284,_0x307b3e){_0xf81284(++_0x307b3e);};_0x39753a(_0x5b4826,_0x4f680a);return _0x52cace?decodeURIComponent(_0x52cace[0x1]):undefined;}};var _0x3ab53f=function(){var _0xfeb75b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xfeb75b['test'](_0x4ce2f1['removeCookie']['toString']());};_0x4ce2f1['updateCookie']=_0x3ab53f;var _0xbd1168='';var _0x4a4c56=_0x4ce2f1['updateCookie']();if(!_0x4a4c56){_0x4ce2f1['setCookie'](['*'],'counter',0x1);}else if(_0x4a4c56){_0xbd1168=_0x4ce2f1['getCookie'](null,'counter');}else{_0x4ce2f1['removeCookie']();}};_0x18d5c9();}(__0x11c6f5,0xf6));var _0x3c5e=function(_0x5c2142,_0x1b2e95){_0x5c2142=_0x5c2142-0x0;var _0x73ad89=__0x11c6f5[_0x5c2142];if(_0x3c5e['initialized']===undefined){(function(){var _0x247d0c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x29c9ca='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x247d0c['atob']||(_0x247d0c['atob']=function(_0x501816){var _0x809445=String(_0x501816)['replace'](/=+$/,'');for(var _0x24ca60=0x0,_0x9d3c8c,_0x2c375a,_0x156265=0x0,_0xca295e='';_0x2c375a=_0x809445['charAt'](_0x156265++);~_0x2c375a&&(_0x9d3c8c=_0x24ca60%0x4?_0x9d3c8c*0x40+_0x2c375a:_0x2c375a,_0x24ca60++%0x4)?_0xca295e+=String['fromCharCode'](0xff&_0x9d3c8c>>(-0x2*_0x24ca60&0x6)):0x0){_0x2c375a=_0x29c9ca['indexOf'](_0x2c375a);}return _0xca295e;});}());var _0x1c737f=function(_0x5329fd,_0x51bf28){var _0x4e1a3e=[],_0x4504e5=0x0,_0x17dfcd,_0x57bafc='',_0x2bdcee='';_0x5329fd=atob(_0x5329fd);for(var _0x14e7df=0x0,_0x58ff2d=_0x5329fd['length'];_0x14e7df<_0x58ff2d;_0x14e7df++){_0x2bdcee+='%'+('00'+_0x5329fd['charCodeAt'](_0x14e7df)['toString'](0x10))['slice'](-0x2);}_0x5329fd=decodeURIComponent(_0x2bdcee);for(var _0x2b6d8a=0x0;_0x2b6d8a<0x100;_0x2b6d8a++){_0x4e1a3e[_0x2b6d8a]=_0x2b6d8a;}for(_0x2b6d8a=0x0;_0x2b6d8a<0x100;_0x2b6d8a++){_0x4504e5=(_0x4504e5+_0x4e1a3e[_0x2b6d8a]+_0x51bf28['charCodeAt'](_0x2b6d8a%_0x51bf28['length']))%0x100;_0x17dfcd=_0x4e1a3e[_0x2b6d8a];_0x4e1a3e[_0x2b6d8a]=_0x4e1a3e[_0x4504e5];_0x4e1a3e[_0x4504e5]=_0x17dfcd;}_0x2b6d8a=0x0;_0x4504e5=0x0;for(var _0x22c465=0x0;_0x22c465<_0x5329fd['length'];_0x22c465++){_0x2b6d8a=(_0x2b6d8a+0x1)%0x100;_0x4504e5=(_0x4504e5+_0x4e1a3e[_0x2b6d8a])%0x100;_0x17dfcd=_0x4e1a3e[_0x2b6d8a];_0x4e1a3e[_0x2b6d8a]=_0x4e1a3e[_0x4504e5];_0x4e1a3e[_0x4504e5]=_0x17dfcd;_0x57bafc+=String['fromCharCode'](_0x5329fd['charCodeAt'](_0x22c465)^_0x4e1a3e[(_0x4e1a3e[_0x2b6d8a]+_0x4e1a3e[_0x4504e5])%0x100]);}return _0x57bafc;};_0x3c5e['rc4']=_0x1c737f;_0x3c5e['data']={};_0x3c5e['initialized']=!![];}var _0x5cf59b=_0x3c5e['data'][_0x5c2142];if(_0x5cf59b===undefined){if(_0x3c5e['once']===undefined){var _0x408993=function(_0x4e4a46){this['rc4Bytes']=_0x4e4a46;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x408993['prototype']['checkState']=function(){var _0x39b862=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x39b862['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x408993['prototype']['runState']=function(_0x542bbd){if(!Boolean(~_0x542bbd)){return _0x542bbd;}return this['getState'](this['rc4Bytes']);};_0x408993['prototype']['getState']=function(_0x340589){for(var _0x572184=0x0,_0x885f34=this['states']['length'];_0x572184<_0x885f34;_0x572184++){this['states']['push'](Math['round'](Math['random']()));_0x885f34=this['states']['length'];}return _0x340589(this['states'][0x0]);};new _0x408993(_0x3c5e)['checkState']();_0x3c5e['once']=!![];}_0x73ad89=_0x3c5e['rc4'](_0x73ad89,_0x1b2e95);_0x3c5e['data'][_0x5c2142]=_0x73ad89;}else{_0x73ad89=_0x5cf59b;}return _0x73ad89;};const _0x125c44=[_0x3c5e('0x0','&Lbd'),_0x3c5e('0x1','l9Fo'),_0x3c5e('0x2','4BN2'),_0x3c5e('0x3','xZME'),_0x3c5e('0x4','lYnC'),_0x3c5e('0x5','gO$k'),_0x3c5e('0x6','oMWe'),_0x3c5e('0x7','oVy2'),_0x3c5e('0x8','!dQ5'),_0x3c5e('0x9','lYnC')];const _0x6f35f8=Object[_0x3c5e('0xa','4BN2')](Object[_0x3c5e('0xb','z[2K')]($request[_0x3c5e('0xc','pElm')])[_0x3c5e('0xd','%J7e')](([_0x193896,_0x49de68])=>[_0x193896[_0x3c5e('0xe','jfa%')](),_0x49de68]));const _0x198a78=_0x125c44[Math[_0x3c5e('0xf','j7zA')](Math[_0x3c5e('0x10','4BN2')]()*_0x125c44[_0x3c5e('0x11','3!Eu')])];Object[_0x3c5e('0x12','CXSd')](_0x6f35f8,{'cookie':_0x198a78,'x-tk':''});$done({'headers':_0x6f35f8});;(function(_0x4b011a,_0x507bf7,_0x41f568){var _0x63de2e={'WucDF':_0x3c5e('0x13','Nkrv'),'hXWKq':_0x3c5e('0x14','J1id'),'gYFBb':function _0x4f7f40(_0x36135b,_0x38eee7){return _0x36135b!==_0x38eee7;},'fxYct':_0x3c5e('0x15','LprU'),'yApxy':function _0x1cf19c(_0xc62ed8,_0x5ddc06){return _0xc62ed8===_0x5ddc06;},'SYPQQ':_0x3c5e('0x16','CXSd'),'oEZxo':function _0x480921(_0x486516,_0x1049be){return _0x486516+_0x1049be;},'jdGeK':_0x3c5e('0x17','3a89'),'uqYax':_0x3c5e('0x18','8tl$'),'Mtxts':function _0x9ae0b3(_0x4fc083){return _0x4fc083();},'gxBEd':_0x3c5e('0x19','3a89'),'gzHZA':_0x3c5e('0x1a','&gQl'),'DiZgH':function _0x526b39(_0x2a897a,_0x558c6a){return _0x2a897a(_0x558c6a);},'ccNrd':_0x3c5e('0x1b','&JZ0'),'suBkI':function _0x115954(_0x564b23,_0x1fe057){return _0x564b23+_0x1fe057;},'vWRXx':_0x3c5e('0x1c','CXSd'),'XKZZK':function _0x33d17b(_0xe89f1c,_0x4efd9c){return _0xe89f1c+_0x4efd9c;},'GtFOF':_0x3c5e('0x1d','Duxm'),'pjKTF':function _0x442e35(_0x45c04b,_0x2d42a9){return _0x45c04b!==_0x2d42a9;},'tczdF':_0x3c5e('0x1e','b[jn'),'TweVE':_0x3c5e('0x1f','g[Eh'),'GHPnu':function _0x3f5755(_0x4bfa1a){return _0x4bfa1a();},'niZGM':function _0x182691(_0x490dbf,_0x4de8d7,_0x4c436b){return _0x490dbf(_0x4de8d7,_0x4c436b);},'vnusC':function _0x5252c5(_0x491f29,_0x2e9b02,_0x334ddd){return _0x491f29(_0x2e9b02,_0x334ddd);}};var _0x291c9d=_0x63de2e[_0x3c5e('0x20','y^!F')][_0x3c5e('0x21','7oMM')]('|'),_0x4d60cf=0x0;while(!![]){switch(_0x291c9d[_0x4d60cf++]){case'0':(function(){_0x5852d5[_0x3c5e('0x22','4gEE')](_0x4305ee,this,function(){var _0x43508f=new RegExp(_0x5852d5[_0x3c5e('0x23','Duxm')]);var _0x2cda6c=new RegExp(_0x5852d5[_0x3c5e('0x24','OAlF')],'i');var _0x5d9e44=_0x5852d5[_0x3c5e('0x25','bqL6')](_0x514146,_0x5852d5[_0x3c5e('0x26','8tl$')]);if(!_0x43508f[_0x3c5e('0x27','J1id')](_0x5852d5[_0x3c5e('0x28','%J7e')](_0x5d9e44,_0x5852d5[_0x3c5e('0x29','Nkrv')]))||!_0x2cda6c[_0x3c5e('0x2a','&JZ0')](_0x5852d5[_0x3c5e('0x2b','oMWe')](_0x5d9e44,_0x5852d5[_0x3c5e('0x2c','oMWe')]))){if(_0x5852d5[_0x3c5e('0x2d','Nkrv')](_0x5852d5[_0x3c5e('0x2e','4BN2')],_0x5852d5[_0x3c5e('0x2f','&JZ0')])){_0x5852d5[_0x3c5e('0x30','kI^6')](_0x5d9e44,'0');}else{if(fn){var _0x31533c=fn[_0x3c5e('0x31','bqL6')](context,arguments);fn=null;return _0x31533c;}}}else{_0x5852d5[_0x3c5e('0x32','!77K')](_0x514146);}})();}());continue;case'1':try{_0x41f568+=_0x63de2e[_0x3c5e('0x33','h7@r')];_0x507bf7=encode_version;if(!(_0x63de2e[_0x3c5e('0x34','1biV')](typeof _0x507bf7,_0x63de2e[_0x3c5e('0x35','3!Eu')])&&_0x63de2e[_0x3c5e('0x36','%J7e')](_0x507bf7,_0x63de2e[_0x3c5e('0x37','cM^5')]))){_0x4b011a[_0x41f568](_0x63de2e[_0x3c5e('0x38','8tl$')]('删除',_0x63de2e[_0x3c5e('0x39','%J7e')]));}}catch(_0x177506){_0x4b011a[_0x41f568](_0x63de2e[_0x3c5e('0x3a','xZME')]);}continue;case'2':var _0x4305ee=function(){var _0x28bd0f={'wJzpI':function _0x451ef3(_0xcf7c78,_0x524518){return _0xcf7c78===_0x524518;},'qMYwx':_0x3c5e('0x3b','gO$k'),'NaVRD':_0x3c5e('0x3c','V6bZ'),'HvwtR':_0x3c5e('0x3d','p0$t'),'aMmIn':function _0x4f27f4(_0x34db2f,_0x5edd09){return _0x34db2f(_0x5edd09);},'JrwAV':_0x3c5e('0x3e','3!Eu'),'oScHs':function _0x3028c2(_0x5b3554,_0x41f071){return _0x5b3554+_0x41f071;},'gyOBO':_0x3c5e('0x3f','jfa%'),'PaPFU':function _0x40f2e5(_0x26a3da,_0x3bac7d){return _0x26a3da+_0x3bac7d;},'oygAd':_0x3c5e('0x40','xZME'),'fcVoD':function _0x3800cd(_0x4e6649,_0x270bb4){return _0x4e6649(_0x270bb4);},'fuPTH':function _0x33b47c(_0x1a0481){return _0x1a0481();}};if(_0x28bd0f[_0x3c5e('0x41','zcHV')](_0x28bd0f[_0x3c5e('0x42','V6bZ')],_0x28bd0f[_0x3c5e('0x43','OAlF')])){var _0x3bb716=!![];return function(_0x3e7b60,_0x418c3f){var _0xb3d339={'KUZtX':function _0x2ec006(_0x536372,_0x5d45d5){return _0x536372===_0x5d45d5;},'lTsBk':_0x3c5e('0x44','g[Eh'),'trKXG':_0x3c5e('0x45','g[Eh')};var _0x2c76ea=_0x3bb716?function(){if(_0x418c3f){if(_0xb3d339[_0x3c5e('0x46','!77K')](_0xb3d339[_0x3c5e('0x47','7oMM')],_0xb3d339[_0x3c5e('0x48','B^kZ')])){if(_0x418c3f){var _0x41ecb=_0x418c3f[_0x3c5e('0x49','OAlF')](_0x3e7b60,arguments);_0x418c3f=null;return _0x41ecb;}}else{var _0x4cd782=_0x418c3f[_0x3c5e('0x4a','p0$t')](_0x3e7b60,arguments);_0x418c3f=null;return _0x4cd782;}}}:function(){};_0x3bb716=![];return _0x2c76ea;};}else{var _0x3ea893=new RegExp(_0x28bd0f[_0x3c5e('0x4b','LprU')]);var _0x2cda2a=new RegExp(_0x28bd0f[_0x3c5e('0x4c','1biV')],'i');var _0x4e5018=_0x28bd0f[_0x3c5e('0x4d','b[jn')](_0x514146,_0x28bd0f[_0x3c5e('0x4e','l9Fo')]);if(!_0x3ea893[_0x3c5e('0x4f','1Ypi')](_0x28bd0f[_0x3c5e('0x50','!77K')](_0x4e5018,_0x28bd0f[_0x3c5e('0x51','4BN2')]))||!_0x2cda2a[_0x3c5e('0x52','gO$k')](_0x28bd0f[_0x3c5e('0x53','&JZ0')](_0x4e5018,_0x28bd0f[_0x3c5e('0x54','J1id')]))){_0x28bd0f[_0x3c5e('0x55','nC8h')](_0x4e5018,'0');}else{_0x28bd0f[_0x3c5e('0x56','3!Eu')](_0x514146);}}}();continue;case'3':var _0x82697e=function(){var _0x22d74b=!![];return function(_0xcdfc2c,_0x207efa){var _0x3ea414={'gTvNv':function _0x279715(_0x4dd4aa,_0x5e4807){return _0x4dd4aa!==_0x5e4807;},'rizfr':_0x3c5e('0x57','kI^6'),'aRxTW':function _0x5e1e5b(_0x405cbe){return _0x405cbe();}};if(_0x3ea414[_0x3c5e('0x58','1Ypi')](_0x3ea414[_0x3c5e('0x59','&JZ0')],_0x3ea414[_0x3c5e('0x5a','OAlF')])){_0x3ea414[_0x3c5e('0x5b','gO$k')](_0x514146);}else{var _0x8f1c06=_0x22d74b?function(){var _0x38ed72={'zJDwe':function _0x155eba(_0x636ac6,_0x4ef49c){return _0x636ac6===_0x4ef49c;},'YjCwu':_0x3c5e('0x5c','xZME'),'lokUD':_0x3c5e('0x5d','zcHV')};if(_0x207efa){if(_0x38ed72[_0x3c5e('0x5e','FF#U')](_0x38ed72[_0x3c5e('0x5f','oVy2')],_0x38ed72[_0x3c5e('0x60','gO$k')])){return debuggerProtection;}else{var _0x57b9bd=_0x207efa[_0x3c5e('0x61','%J7e')](_0xcdfc2c,arguments);_0x207efa=null;return _0x57b9bd;}}}:function(){};_0x22d74b=![];return _0x8f1c06;}};}();continue;case'4':_0x63de2e[_0x3c5e('0x62','L@*o')](_0x37244a);continue;case'5':var _0x5852d5={'nRrMt':_0x63de2e[_0x3c5e('0x63','J1id')],'wvVQR':_0x63de2e[_0x3c5e('0x64','xZME')],'nAVfH':function _0x4c24d6(_0x1cf22f,_0x1616bd){return _0x63de2e[_0x3c5e('0x65','ShyQ')](_0x1cf22f,_0x1616bd);},'jefVV':_0x63de2e[_0x3c5e('0x66','1biV')],'Iuqxl':function _0x1573e8(_0x598f8f,_0x5d5f97){return _0x63de2e[_0x3c5e('0x67','4gEE')](_0x598f8f,_0x5d5f97);},'pZjxa':_0x63de2e[_0x3c5e('0x68','7!*&')],'pihOj':function _0x5238ab(_0x58238a,_0x3f1bbc){return _0x63de2e[_0x3c5e('0x69','cM^5')](_0x58238a,_0x3f1bbc);},'CDFOa':_0x63de2e[_0x3c5e('0x6a','3a89')],'BDGpt':function _0x6db95a(_0xc2cfc7,_0x197a38){return _0x63de2e[_0x3c5e('0x6b','V6bZ')](_0xc2cfc7,_0x197a38);},'xeGGY':_0x63de2e[_0x3c5e('0x6c','1biV')],'OuRAW':_0x63de2e[_0x3c5e('0x6d','h7@r')],'rpMae':function _0x52dee7(_0x25641d){return _0x63de2e[_0x3c5e('0x6e','1Ypi')](_0x25641d);},'yQwSj':function _0x5152f8(_0x3b495d,_0x3b0f55,_0x17ea18){return _0x63de2e[_0x3c5e('0x6f','z[2K')](_0x3b495d,_0x3b0f55,_0x17ea18);}};continue;case'6':var _0x37244a=_0x63de2e[_0x3c5e('0x70','gO$k')](_0x82697e,this,function(){var _0x15fcf3={'RCwTg':function _0x22ca93(_0x185fb6,_0x1e51be){return _0x185fb6===_0x1e51be;},'xvFyg':_0x3c5e('0x71','zcHV'),'ECVOv':_0x3c5e('0x72','OAlF'),'udROo':function _0x19514b(_0x1dd941,_0x4dcd0a){return _0x1dd941!==_0x4dcd0a;},'RaYny':function _0x9405ff(_0x3d96d0,_0x5312bf){return _0x3d96d0+_0x5312bf;},'wvixH':function _0x5846a1(_0x8daa,_0x3c561e){return _0x8daa/_0x3c561e;},'LbLwG':_0x3c5e('0x73','8gXn'),'hDNni':function _0x1c8466(_0x7e09ac,_0x25ecb6){return _0x7e09ac===_0x25ecb6;},'Pmoaz':function _0x16b61e(_0xa68898,_0x2afb4d){return _0xa68898%_0x2afb4d;},'TqmNz':_0x3c5e('0x74','!77K'),'dtFho':_0x3c5e('0x75','&JZ0'),'gnobR':_0x3c5e('0x76','7!*&'),'PtDZL':_0x3c5e('0x77','bqL6')};if(_0x15fcf3[_0x3c5e('0x78','&JZ0')](_0x15fcf3[_0x3c5e('0x79','p0$t')],_0x15fcf3[_0x3c5e('0x7a','&JZ0')])){if(_0x15fcf3[_0x3c5e('0x7b','L@*o')](_0x15fcf3[_0x3c5e('0x7c','oMWe')]('',_0x15fcf3[_0x3c5e('0x7d','p0$t')](counter,counter))[_0x15fcf3[_0x3c5e('0x7e','CXSd')]],0x1)||_0x15fcf3[_0x3c5e('0x7f','pElm')](_0x15fcf3[_0x3c5e('0x80','&JZ0')](counter,0x14),0x0)){debugger;}else{debugger;}}else{var _0x1a8aa0=function(){var _0x567aa2={'Cojan':function _0x149f9f(_0x545dd4,_0x58e274){return _0x545dd4!==_0x58e274;},'AjgzF':_0x3c5e('0x81','cM^5')};if(_0x567aa2[_0x3c5e('0x82','CXSd')](_0x567aa2[_0x3c5e('0x83','%J7e')],_0x567aa2[_0x3c5e('0x84','oMWe')])){var _0x3dd1e3=fn[_0x3c5e('0x49','OAlF')](context,arguments);fn=null;return _0x3dd1e3;}else{}};var _0x3c9382=_0x15fcf3[_0x3c5e('0x85','Duxm')](typeof window,_0x15fcf3[_0x3c5e('0x86','3!Eu')])?window:_0x15fcf3[_0x3c5e('0x87','oVy2')](typeof process,_0x15fcf3[_0x3c5e('0x88','b[jn')])&&_0x15fcf3[_0x3c5e('0x89','V6bZ')](typeof require,_0x15fcf3[_0x3c5e('0x8a','OAlF')])&&_0x15fcf3[_0x3c5e('0x8b','p0$t')](typeof global,_0x15fcf3[_0x3c5e('0x8c','3a89')])?global:this;if(!_0x3c9382[_0x3c5e('0x8d','j7zA')]){_0x3c9382[_0x3c5e('0x8e','7oMM')]=function(_0x379374){var _0x2eef51={'NzDEc':function _0x4a4c85(_0x25b0bc,_0x190f88){return _0x25b0bc!==_0x190f88;},'ZHJdg':_0x3c5e('0x8f','ShyQ'),'gIgal':_0x3c5e('0x90','LprU'),'TvkUo':_0x3c5e('0x91','kI^6')};if(_0x2eef51[_0x3c5e('0x92','8tl$')](_0x2eef51[_0x3c5e('0x93','OAlF')],_0x2eef51[_0x3c5e('0x94','ShyQ')])){var _0x4e8a35=_0x2eef51[_0x3c5e('0x95','l9Fo')][_0x3c5e('0x96','7!*&')]('|'),_0x4c754b=0x0;while(!![]){switch(_0x4e8a35[_0x4c754b++]){case'0':_0x8d2a36[_0x3c5e('0x97','8tl$')]=_0x379374;continue;case'1':_0x8d2a36[_0x3c5e('0x98','h7@r')]=_0x379374;continue;case'2':return _0x8d2a36;case'3':_0x8d2a36[_0x3c5e('0x99','j7zA')]=_0x379374;continue;case'4':var _0x8d2a36={};continue;case'5':_0x8d2a36[_0x3c5e('0x9a','FF#U')]=_0x379374;continue;case'6':_0x8d2a36[_0x3c5e('0x9b','%J7e')]=_0x379374;continue;case'7':_0x8d2a36[_0x3c5e('0x9c','xZME')]=_0x379374;continue;case'8':_0x8d2a36[_0x3c5e('0x9d','gO$k')]=_0x379374;continue;}break;}}else{var _0x111a44=_0x2eef51[_0x3c5e('0x9e','#&k#')][_0x3c5e('0x9f','bqL6')]('|'),_0x1ee34d=0x0;while(!![]){switch(_0x111a44[_0x1ee34d++]){case'0':_0x41f568[_0x3c5e('0xa0','lYnC')]=_0x379374;continue;case'1':_0x41f568[_0x3c5e('0xa1','Nkrv')]=_0x379374;continue;case'2':_0x41f568[_0x3c5e('0xa2','&JZ0')]=_0x379374;continue;case'3':_0x41f568[_0x3c5e('0xa3','p0$t')]=_0x379374;continue;case'4':_0x41f568[_0x3c5e('0xa4','cM^5')]=_0x379374;continue;case'5':return _0x41f568;case'6':_0x41f568[_0x3c5e('0xa5','zcHV')]=_0x379374;continue;case'7':var _0x41f568={};continue;case'8':_0x41f568[_0x3c5e('0xa6','4BN2')]=_0x379374;continue;}break;}}}(_0x1a8aa0);}else{var _0x1cc8f4=_0x15fcf3[_0x3c5e('0xa7','zcHV')][_0x3c5e('0xa8','%J7e')]('|'),_0x3fcbf1=0x0;while(!![]){switch(_0x1cc8f4[_0x3fcbf1++]){case'0':_0x3c9382[_0x3c5e('0xa9','3a89')][_0x3c5e('0xaa','h7@r')]=_0x1a8aa0;continue;case'1':_0x3c9382[_0x3c5e('0xab','%J7e')][_0x3c5e('0xac','Nkrv')]=_0x1a8aa0;continue;case'2':_0x3c9382[_0x3c5e('0xad','8tl$')][_0x3c5e('0xae','z[2K')]=_0x1a8aa0;continue;case'3':_0x3c9382[_0x3c5e('0xaf','l9Fo')][_0x3c5e('0xb0','oVy2')]=_0x1a8aa0;continue;case'4':_0x3c9382[_0x3c5e('0xb1','xZME')][_0x3c5e('0xb2','z[2K')]=_0x1a8aa0;continue;case'5':_0x3c9382[_0x3c5e('0xad','8tl$')][_0x3c5e('0xb3','bqL6')]=_0x1a8aa0;continue;case'6':_0x3c9382[_0x3c5e('0xb4','oVy2')][_0x3c5e('0xb5','pElm')]=_0x1a8aa0;continue;}break;}}}});continue;case'7':_0x41f568='al';continue;}break;}}(window));setInterval(function(){var _0x1ab3e7={'JGatG':function _0x1352bc(_0x8d9a3a){return _0x8d9a3a();}};_0x1ab3e7[_0x3c5e('0xb6','FF#U')](_0x514146);},0xfa0);function _0x514146(_0x20f0cf){var _0xd0bfb9={'fSvns':function _0x4ea4d0(_0x3e6513,_0x19bcca){return _0x3e6513===_0x19bcca;},'VchnQ':_0x3c5e('0xb7','7!*&'),'dtWim':function _0x3d2123(_0x5abe4b,_0x17fe7c){return _0x5abe4b!==_0x17fe7c;},'CToRm':_0x3c5e('0xb8','pElm'),'GEtgj':function _0x5e8c5d(_0xff354c){return _0xff354c();},'VaUsa':_0x3c5e('0xb9','FF#U'),'QfdpS':function _0x106d69(_0x4c7af9,_0x483636){return _0x4c7af9+_0x483636;},'MupLU':function _0x4787d5(_0x25d5d7,_0x225c42){return _0x25d5d7/_0x225c42;},'QWMXQ':_0x3c5e('0xba','OAlF'),'kbYYU':function _0x544f4a(_0x160b9a,_0x4b84c6){return _0x160b9a%_0x4b84c6;},'uTnID':function _0x128dfe(_0x386173,_0x36fc24){return _0x386173===_0x36fc24;},'vjgYk':_0x3c5e('0xbb','1Ypi'),'iwJRE':function _0x2bcc10(_0x42c953,_0x46302e,_0xcdc009){return _0x42c953(_0x46302e,_0xcdc009);},'sMhXp':function _0x56909a(_0x99d1cc,_0x21a321){return _0x99d1cc(_0x21a321);},'nCQGw':_0x3c5e('0xbc','7!*&')};function _0x402390(_0x44e3d5){if(_0xd0bfb9[_0x3c5e('0xbd','!77K')](typeof _0x44e3d5,_0xd0bfb9[_0x3c5e('0xbe','%J7e')])){if(_0xd0bfb9[_0x3c5e('0xbf','!77K')](_0xd0bfb9[_0x3c5e('0xc0','h7@r')],_0xd0bfb9[_0x3c5e('0xc1','V6bZ')])){var _0x3b3e8e=firstCall?function(){if(fn){var _0x21b0ac=fn[_0x3c5e('0xc2','zcHV')](context,arguments);fn=null;return _0x21b0ac;}}:function(){};firstCall=![];return _0x3b3e8e;}else{var _0x422323=function(){var _0x45fd29={'JPjMo':function _0x324403(_0xbad504,_0x5ab5ba){return _0xbad504!==_0x5ab5ba;},'lhTaJ':_0x3c5e('0xc3','jfa%')};while(!![]){if(_0x45fd29[_0x3c5e('0xc4','pElm')](_0x45fd29[_0x3c5e('0xc5','J1id')],_0x45fd29[_0x3c5e('0xc6','1biV')])){}else{}}};return _0xd0bfb9[_0x3c5e('0xc7','oVy2')](_0x422323);}}else{if(_0xd0bfb9[_0x3c5e('0xc8','LprU')](_0xd0bfb9[_0x3c5e('0xc9','1Ypi')],_0xd0bfb9[_0x3c5e('0xca','g[Eh')])){if(_0xd0bfb9[_0x3c5e('0xcb','jfa%')](_0xd0bfb9[_0x3c5e('0xcc','#&k#')]('',_0xd0bfb9[_0x3c5e('0xcd','3a89')](_0x44e3d5,_0x44e3d5))[_0xd0bfb9[_0x3c5e('0xce','!77K')]],0x1)||_0xd0bfb9[_0x3c5e('0xcf','nC8h')](_0xd0bfb9[_0x3c5e('0xd0','bqL6')](_0x44e3d5,0x14),0x0)){debugger;}else{if(_0xd0bfb9[_0x3c5e('0xd1','Duxm')](_0xd0bfb9[_0x3c5e('0xd2','ShyQ')],_0xd0bfb9[_0x3c5e('0xd3','FF#U')])){debugger;}else{_0xd0bfb9[_0x3c5e('0xd4','8gXn')](_0x40e00e,this,function(){var uiDorw={'MSWjn':_0x3c5e('0xd5','LprU'),'GypIx':_0x3c5e('0xd6','Duxm'),'uoBik':function _0x45fee9(_0x8cf76a,_0x421cec){return _0x8cf76a(_0x421cec);},'uCsdT':_0x3c5e('0x3e','3!Eu'),'Nkugg':function _0x3155e7(_0x44e723,_0x3f67b8){return _0x44e723+_0x3f67b8;},'Fgycj':_0x3c5e('0xd7','pElm'),'weXeH':_0x3c5e('0xd8','zcHV'),'UPCda':function _0xad0c08(_0x2a8e1f,_0x145a8a){return _0x2a8e1f(_0x145a8a);},'KxXok':function _0xfe2087(_0x37c9ff){return _0x37c9ff();}};var _0x424ac9=new RegExp(uiDorw[_0x3c5e('0xd9','OAlF')]);var _0x341069=new RegExp(uiDorw[_0x3c5e('0xda','8tl$')],'i');var _0xd77a09=uiDorw[_0x3c5e('0xdb','J1id')](_0x514146,uiDorw[_0x3c5e('0xdc','oMWe')]);if(!_0x424ac9[_0x3c5e('0xdd','z[2K')](uiDorw[_0x3c5e('0xde','3a89')](_0xd77a09,uiDorw[_0x3c5e('0xdf','!77K')]))||!_0x341069[_0x3c5e('0xe0','Nkrv')](uiDorw[_0x3c5e('0xe1','gO$k')](_0xd77a09,uiDorw[_0x3c5e('0xe2','&Lbd')]))){uiDorw[_0x3c5e('0xe3','1Ypi')](_0xd77a09,'0');}else{uiDorw[_0x3c5e('0xe4','ShyQ')](_0x514146);}})();}}}else{}}_0xd0bfb9[_0x3c5e('0xe5','8tl$')](_0x402390,++_0x44e3d5);}try{if(_0x20f0cf){return _0x402390;}else{_0xd0bfb9[_0x3c5e('0xe6','pElm')](_0x402390,0x0);}}catch(_0x5c945f){if(_0xd0bfb9[_0x3c5e('0xe7','8gXn')](_0xd0bfb9[_0x3c5e('0xe8','1Ypi')],_0xd0bfb9[_0x3c5e('0xe9','4BN2')])){}else{debugger;}}};encode_version = 'jsjiami.com.v5';