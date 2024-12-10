import Toast from '/js/bootstrap/src/toast';

const liveToastBtn = document.getElementById('liveToastBtn');
liveToastBtn.addEventListener('click', () => {
  const toastLiveExample = document.getElementById('liveToast')
  const toast = new Toast(toastLiveExample)
  toast.show()
})
// (function () {
// 	let toastElList = [].slice.call(document.querySelectorAll('.toast'));
// 	let toastList = toastElList.map(function (toastEl) {
// 		return new Toast(toastEl);
// 	});

// 	toastList.forEach(function (toast) {
// 		toast.show();
// 	});

	
// })();
document.addEventListener("DOMContentLoaded", () => {
    console.log("Custom JavaScript loaded!");
  });
  