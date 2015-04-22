window.addEventListener('load', function() {
	var pan = document.getElementById('pan');
	var tilt = document.getElementById('tilt');

	pan.addEventListener('change', onChangeValue);
	tilt.addEventListener('change', onChangeValue);

	initCamFrame();

	function initCamFrame() {
		var url = '/camserver/get';
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url)
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				console.log('status:', xhr.status);
				if (xhr.status === 200) {
					var resp = JSON.parse(xhr.responseText);
					var camFrame = document.getElementById('camera-frame');
					camFrame.src = resp.url;
				}
			}
		}
	}

	function onChangeValue() {
		var url = '/servo/set?pan='+ pan.value + '&tilt=' + tilt.value;
		console.log(url);
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url)
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				console.log('status:', xhr.status);
			}
		}
	}

});
