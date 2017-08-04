
//找出当前ip是否在当前数组中
function binarySearch(val) {
	if(val==794368149){
		return 1;
	}
	var neiwangip = "167772160-184549375|2886729728-2886795263|3232235520-3232301055";
	var arr=neiwangip.split("|");
    var low = 0, high = arr.length - 1, mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (parseInt(arr[mid].split("-")[0]) == val || parseInt(arr[mid].split("-")[1]) == val || (val > parseInt(arr[mid].split("-")[0]) && val < parseInt(arr[mid].split("-")[1]))) {
            return mid;
        }
        else if (parseInt(arr[mid].split("-")[1]) > val) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}

function _ip2int(ip) {
    var num = 0;
    ip = ip.split(".");
    num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
    num = num >>> 0;
    return num;
}

var proxy = "PROXY __HPY__SERVER;";
var direct = 'DIRECT;';
function FindProxyForURL(url, host) {
	
    var nowip = dnsResolve(host);
    var tempip = _ip2int(nowip);
	if (binarySearch(tempip)>=0 || url.toUpperCase().substring(0, 16) == "HTTP://LOCALHOST" || url.toUpperCase().substring(0, 16) == "HTTP://127.0.0.1")
    {
		return direct;
	}
	return proxy;

}
