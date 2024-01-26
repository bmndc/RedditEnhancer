// Input - Auto Redirect To Reddit Version

import i18next from 'i18next';
import { selectFilterShowNewNewVersion, selectFilterShowNewVersion, selectFilterShowOldVersion } from './filter_version_select';

const redirect_dropdown = document.querySelector('#select-reddit-version');
const redirect_dropdownMenu = document.querySelector('#select-reddit-version-menu');
document.querySelector('#select-reddit-version .select').addEventListener('click', function () {
	if (redirect_dropdown.classList.contains('active')) {
		redirect_dropdown.classList.remove('active');
		redirect_dropdownMenu.style.maxHeight = '0';
	} else {
		redirect_dropdown.classList.add('active');
		redirect_dropdownMenu.style.maxHeight = redirect_dropdownMenu.scrollHeight + 'px';
	}
});
document.addEventListener('click', function (e) {
	if (!redirect_dropdown.contains(e.target)) {
		redirect_dropdown.classList.remove('active');
		redirect_dropdownMenu.style.maxHeight = '0';
	}
});
redirect_dropdownMenu.addEventListener('click', function (e) {
	const btn = e.target.tagName.toLowerCase();
	if (btn === 'li') {
		var version = e.target.getAttribute('data-version');
	}
	if (btn === 'span') {
		var version = e.target.parentNode.getAttribute('data-version');
	}
	if (version === 'old') {
		selectFilterShowOldVersion(i18next.t('OldReddit.message'));
	} else if (version === 'new') {
		selectFilterShowNewVersion(i18next.t('NewReddit.message'));
	} else if (version === 'newnew') {
		selectFilterShowNewNewVersion(i18next.t('LatestReddit.message'));
	}
	document.querySelector('#select-reddit-version .select').querySelector('span').textContent = e.target.textContent;
	redirect_dropdown.classList.remove('active');
	redirect_dropdownMenu.style.maxHeight = '0';
	BROWSER_API.storage.sync.set({ autoRedirectVersion: version });
});
