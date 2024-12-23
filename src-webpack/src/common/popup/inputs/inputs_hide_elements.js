// Inputs - Hide Elements

// Toggle - Hide Reddit Premium
document.querySelector('#checkbox-hide-reddit-premium').addEventListener('change', function (e) {
	const hideRedditPremium = document.querySelector('#checkbox-hide-reddit-premium').checked;
	if (hideRedditPremium === true) {
		BROWSER_API.storage.sync.set({ hideRedditPremium: true });
		document.querySelector('.hide-reddit-premium').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-reddit-premium').classList.remove('icon-show');
		document.querySelector('.hide-reddit-premium').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.includes('reddit.com') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRedditPremium: true });
				}
			});
		});
	} else if (hideRedditPremium === false) {
		BROWSER_API.storage.sync.set({ hideRedditPremium: false });
		document.querySelector('.hide-reddit-premium').style.backgroundColor = '';
		document.querySelector('.hide-reddit-premium').classList.add('icon-show');
		document.querySelector('.hide-reddit-premium').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.includes('reddit.com') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRedditPremium: false });
				}
			});
		});
	}
});

// Toggle - Hide Create Post
document.querySelector('#checkbox-hide-create-post').addEventListener('change', function (e) {
	const hideCreatePost = document.querySelector('#checkbox-hide-create-post').checked;
	if (hideCreatePost === true) {
		BROWSER_API.storage.sync.set({ hideCreatePost: true });
		document.querySelector('.icon-hide-create-post').classList.remove('icon-plus');
		document.querySelector('.icon-hide-create-post').classList.add('icon-plus-slash');
		document.querySelector('.icon-hide-create-post').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCreatePost: true });
				}
			});
		});
	} else if (hideCreatePost === false) {
		BROWSER_API.storage.sync.set({ hideCreatePost: false });
		document.querySelector('.icon-hide-create-post').classList.add('icon-plus');
		document.querySelector('.icon-hide-create-post').classList.remove('icon-plus-slash');
		document.querySelector('.icon-hide-create-post').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCreatePost: false });
				}
			});
		});
	}
});

// Toggle - Hide Home Sidebar
document.querySelector('#checkbox-hide-home-sidebar').addEventListener('change', function (e) {
	const hideHomeSidebar = e.target.checked;
	if (hideHomeSidebar === true) {
		BROWSER_API.storage.sync.set({ hideHomeSidebar: true });
		document.querySelector('.icon-hide-home-sidebar').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-home-sidebar').classList.remove('icon-show');
		document.querySelector('.icon-hide-home-sidebar').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideHomeSidebar: true });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	} else if (hideHomeSidebar === false) {
		BROWSER_API.storage.sync.set({ hideHomeSidebar: false });
		document.querySelector('.icon-hide-home-sidebar').style.backgroundColor = '';
		document.querySelector('.icon-hide-home-sidebar').classList.add('icon-show');
		document.querySelector('.icon-hide-home-sidebar').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideHomeSidebar: false });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	}
});

// Toggle - Hide Sub Sidebar
document.querySelector('#checkbox-hide-sub-sidebar').addEventListener('change', function (e) {
	const hideSubSidebar = document.querySelector('#checkbox-hide-sub-sidebar').checked;
	if (hideSubSidebar === true) {
		BROWSER_API.storage.sync.set({ hideSubSidebar: true });
		document.querySelector('.icon-hide-sub-sidebar').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-sub-sidebar').classList.remove('icon-show');
		document.querySelector('.icon-hide-sub-sidebar').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSubSidebar: true });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	} else if (hideSubSidebar === false) {
		BROWSER_API.storage.sync.set({ hideSubSidebar: false });
		document.querySelector('.icon-hide-sub-sidebar').style.backgroundColor = '';
		document.querySelector('.icon-hide-sub-sidebar').classList.add('icon-show');
		document.querySelector('.icon-hide-sub-sidebar').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSubSidebar: false });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	}
});

// Toggle - Hide Post Sidebar
document.querySelector('#checkbox-hide-post-sidebar').addEventListener('change', function (e) {
	const hidePostSidebar = document.querySelector('#checkbox-hide-post-sidebar').checked;
	if (hidePostSidebar === true) {
		BROWSER_API.storage.sync.set({ hidePostSidebar: true });
		document.querySelector('.icon-hide-post-sidebar').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-post-sidebar').classList.remove('icon-show');
		document.querySelector('.icon-hide-post-sidebar').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostSidebar: true });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	} else if (hidePostSidebar === false) {
		BROWSER_API.storage.sync.set({ hidePostSidebar: false });
		document.querySelector('.icon-hide-post-sidebar').style.backgroundColor = '';
		document.querySelector('.icon-hide-post-sidebar').classList.add('icon-show');
		document.querySelector('.icon-hide-post-sidebar').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostSidebar: false });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	}
});

// Toggle - Hide Post Overlay Sidebar
document.querySelector('#checkbox-hide-post-overlay-sidebar').addEventListener('change', function (e) {
	const hidePostOverlaySidebar = document.querySelector('#checkbox-hide-post-overlay-sidebar').checked;
	if (hidePostOverlaySidebar === true) {
		BROWSER_API.storage.sync.set({ hidePostOverlaySidebar: true });
		document.querySelector('.icon-hide-post-overlay-sidebar').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-post-overlay-sidebar').classList.remove('icon-show');
		document.querySelector('.icon-hide-post-overlay-sidebar').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostOverlaySidebar: true });
				}
			});
		});
	} else if (hidePostOverlaySidebar === false) {
		BROWSER_API.storage.sync.set({ hidePostOverlaySidebar: false });
		document.querySelector('.icon-hide-post-overlay-sidebar').style.backgroundColor = '';
		document.querySelector('.icon-hide-post-overlay-sidebar').classList.add('icon-show');
		document.querySelector('.icon-hide-post-overlay-sidebar').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostOverlaySidebar: false });
				}
			});
		});
	}
});

// Toggle - Hide User Sidebar
document.querySelector('#checkbox-hide-user-sidebar').addEventListener('change', function (e) {
	const hideUserSidebar = document.querySelector('#checkbox-hide-user-sidebar').checked;
	if (hideUserSidebar === true) {
		BROWSER_API.storage.sync.set({ hideUserSidebar: true });
		document.querySelector('.icon-hide-user-sidebar').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-user-sidebar').classList.remove('icon-show');
		document.querySelector('.icon-hide-user-sidebar').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideUserSidebar: true });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	} else if (hideUserSidebar === false) {
		BROWSER_API.storage.sync.set({ hideUserSidebar: false });
		document.querySelector('.icon-hide-user-sidebar').style.backgroundColor = '';
		document.querySelector('.icon-hide-user-sidebar').classList.add('icon-show');
		document.querySelector('.icon-hide-user-sidebar').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideUserSidebar: false });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	}
});

// Toggle - Hide Sidebar Policy
document.querySelector('#checkbox-hide-sidebar-policy').addEventListener('change', function (e) {
	const hideSidebarPolicy = document.querySelector('#checkbox-hide-sidebar-policy').checked;
	if (hideSidebarPolicy === true) {
		BROWSER_API.storage.sync.set({ hideSidebarPolicy: true });
		document.querySelector('.hide-sidebar-policy').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-sidebar-policy').classList.remove('icon-show');
		document.querySelector('.hide-sidebar-policy').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSidebarPolicy: true });
				}
			});
		});
	} else if (hideSidebarPolicy === false) {
		BROWSER_API.storage.sync.set({ hideSidebarPolicy: false });
		document.querySelector('.hide-sidebar-policy').style.backgroundColor = '';
		document.querySelector('.hide-sidebar-policy').classList.add('icon-show');
		document.querySelector('.hide-sidebar-policy').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSidebarPolicy: false });
				}
			});
		});
	}
});

// Toggle - Hide Advertise Button
document.querySelector('#checkbox-hide-advertise-button').addEventListener('change', function (e) {
	const hideAdvertiseButton = document.querySelector('#checkbox-hide-advertise-button').checked;
	if (hideAdvertiseButton === true) {
		BROWSER_API.storage.sync.set({ hideAdvertiseButton: true });
		document.querySelector('.hide-advertise-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-advertise-button').classList.remove('icon-advertise');
		document.querySelector('.hide-advertise-button').classList.add('icon-advertise-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideAdvertiseButton: true });
				}
			});
		});
	} else if (hideAdvertiseButton === false) {
		BROWSER_API.storage.sync.set({ hideAdvertiseButton: false });
		document.querySelector('.hide-advertise-button').style.backgroundColor = '';
		document.querySelector('.hide-advertise-button').classList.add('icon-advertise');
		document.querySelector('.hide-advertise-button').classList.remove('icon-advertise-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideAdvertiseButton: false });
				}
			});
		});
	}
});

// Toggle - Hide Moderation Button
document.querySelector('#checkbox-hide-moderation-button').addEventListener('change', function (e) {
	const hideModerationButton = document.querySelector('#checkbox-hide-moderation-button').checked;
	if (hideModerationButton === true) {
		BROWSER_API.storage.sync.set({ hideModerationButton: true });
		document.querySelector('.hide-moderation-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-moderation-button').classList.remove('icon-mod');
		document.querySelector('.hide-moderation-button').classList.add('icon-mod-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideModerationButton: true });
				}
			});
		});
	} else if (hideModerationButton === false) {
		BROWSER_API.storage.sync.set({ hideModerationButton: false });
		document.querySelector('.hide-moderation-button').style.backgroundColor = '';
		document.querySelector('.hide-moderation-button').classList.add('icon-mod');
		document.querySelector('.hide-moderation-button').classList.remove('icon-mod-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideModerationButton: false });
				}
			});
		});
	}
});

// Toggle - Hide Popular Button
document.querySelector('#checkbox-hide-popular-button').addEventListener('change', function (e) {
	const hidePopularButton = document.querySelector('#checkbox-hide-popular-button').checked;
	if (hidePopularButton === true) {
		BROWSER_API.storage.sync.set({ hidePopularButton: true });
		document.querySelector('.hide-popular-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-popular-button').classList.remove('icon-popular');
		document.querySelector('.hide-popular-button').classList.add('icon-popular-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePopularButton: true });
				}
			});
		});
	} else if (hidePopularButton === false) {
		BROWSER_API.storage.sync.set({ hidePopularButton: false });
		document.querySelector('.hide-popular-button').style.backgroundColor = '';
		document.querySelector('.hide-popular-button').classList.add('icon-popular');
		document.querySelector('.hide-popular-button').classList.remove('icon-popular-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePopularButton: false });
				}
			});
		});
	}
});

// Toggle - Hide Chat Button
document.querySelector('#checkbox-hide-chat-button').addEventListener('change', function (e) {
	const hideChatButton = document.querySelector('#checkbox-hide-chat-button').checked;
	if (hideChatButton === true) {
		BROWSER_API.storage.sync.set({ hideChatButton: true });
		document.querySelector('.hide-chat-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-chat-button').classList.remove('icon-chat');
		document.querySelector('.hide-chat-button').classList.add('icon-chat-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideChatButton: true });
				}
			});
		});
	} else if (hideChatButton === false) {
		BROWSER_API.storage.sync.set({ hideChatButton: false });
		document.querySelector('.hide-chat-button').style.backgroundColor = '';
		document.querySelector('.hide-chat-button').classList.add('icon-chat');
		document.querySelector('.hide-chat-button').classList.remove('icon-chat-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideChatButton: false });
				}
			});
		});
	}
});

// Toggle - Hide Notification Button
document.querySelector('#checkbox-hide-notification-button').addEventListener('change', function (e) {
	const hideNotificationButton = document.querySelector('#checkbox-hide-notification-button').checked;
	if (hideNotificationButton === true) {
		BROWSER_API.storage.sync.set({ hideNotificationButton: true });
		document.querySelector('.hide-notification-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-notification-button').classList.remove('icon-notification');
		document.querySelector('.hide-notification-button').classList.add('icon-notification-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideNotificationButton: true });
				}
			});
		});
	} else if (hideNotificationButton === false) {
		BROWSER_API.storage.sync.set({ hideNotificationButton: false });
		document.querySelector('.hide-notification-button').style.backgroundColor = '';
		document.querySelector('.hide-notification-button').classList.add('icon-notification');
		document.querySelector('.hide-notification-button').classList.remove('icon-notification-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideNotificationButton: false });
				}
			});
		});
	}
});

// Toggle - Hide Create Post Button
document.querySelector('#checkbox-hide-create-post-button').addEventListener('change', function (e) {
	const hideCreatePostButton = document.querySelector('#checkbox-hide-create-post-button').checked;
	if (hideCreatePostButton === true) {
		BROWSER_API.storage.sync.set({ hideCreatePostButton: true });
		document.querySelector('.hide-create-post-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-create-post-button').classList.remove('icon-plus');
		document.querySelector('.hide-create-post-button').classList.add('icon-plus-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCreatePostButton: true });
				}
			});
		});
	} else if (hideCreatePostButton === false) {
		BROWSER_API.storage.sync.set({ hideCreatePostButton: false });
		document.querySelector('.hide-create-post-button').style.backgroundColor = '';
		document.querySelector('.hide-create-post-button').classList.add('icon-plus');
		document.querySelector('.hide-create-post-button').classList.remove('icon-plus-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCreatePostButton: false });
				}
			});
		});
	}
});

// Toggle - Hide Username
document.querySelector('#checkbox-hide-username').addEventListener('change', function (e) {
	const hideUsername = document.querySelector('#checkbox-hide-username').checked;
	if (hideUsername === true) {
		BROWSER_API.storage.sync.set({ hideUsername: true });
		document.querySelector('.hide-username').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-username').classList.remove('icon-user');
		document.querySelector('.hide-username').classList.add('icon-user-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideUsername: true });
				}
			});
		});
	} else if (hideUsername === false) {
		BROWSER_API.storage.sync.set({ hideUsername: false });
		document.querySelector('.hide-username').style.backgroundColor = '';
		document.querySelector('.hide-username').classList.add('icon-user');
		document.querySelector('.hide-username').classList.remove('icon-user-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideUsername: false });
				}
			});
		});
	}
});

// Toggle - Hide Karma
document.querySelector('#checkbox-hide-karma').addEventListener('change', function (e) {
	const hideKarma = document.querySelector('#checkbox-hide-karma').checked;
	if (hideKarma === true) {
		BROWSER_API.storage.sync.set({ hideKarma: true });
		document.querySelector('.icon-hide-karma').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-karma').classList.remove('icon-karma');
		document.querySelector('.icon-hide-karma').classList.add('icon-karma-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideKarma: true });
				}
			});
		});
	} else if (hideKarma === false) {
		BROWSER_API.storage.sync.set({ hideKarma: false });
		document.querySelector('.icon-hide-karma').style.backgroundColor = '';
		document.querySelector('.icon-hide-karma').classList.add('icon-karma');
		document.querySelector('.icon-hide-karma').classList.remove('icon-karma-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideKarma: false });
				}
			});
		});
	}
});

// Toggle - Hide Get New Reddit
document.querySelector('#checkbox-hide-get-new-reddit').addEventListener('change', function (e) {
	const hideGetNewReddit = document.querySelector('#checkbox-hide-get-new-reddit').checked;
	if (hideGetNewReddit === true) {
		BROWSER_API.storage.sync.set({ hideGetNewReddit: true });
		document.querySelector('.hide-get-new-reddit').style.backgroundColor = 'var(--accent)';
		document.querySelector('.hide-get-new-reddit').classList.remove('icon-show');
		document.querySelector('.hide-get-new-reddit').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideGetNewReddit: true });
				}
			});
		});
	} else if (hideGetNewReddit === false) {
		BROWSER_API.storage.sync.set({ hideGetNewReddit: false });
		document.querySelector('.hide-get-new-reddit').style.backgroundColor = '';
		document.querySelector('.hide-get-new-reddit').classList.remove('icon-hide');
		document.querySelector('.hide-get-new-reddit').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideGetNewReddit: false });
				}
			});
		});
	}
});

// Toggle - Hide Promoted Links
document.querySelector('#checkbox-hide-promoted').addEventListener('change', function (e) {
	const hidePromoted = document.querySelector('#checkbox-hide-promoted').checked;
	if (hidePromoted === true) {
		BROWSER_API.storage.sync.set({ hidePromoted: true });
		document.querySelector('.icon-hide-promoted').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-promoted').classList.remove('icon-ad');
		document.querySelector('.icon-hide-promoted').classList.add('icon-ad-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePromoted: true });
				}
			});
		});
	} else if (hidePromoted === false) {
		BROWSER_API.storage.sync.set({ hidePromoted: false });
		document.querySelector('.icon-hide-promoted').style.backgroundColor = '';
		document.querySelector('.icon-hide-promoted').classList.add('icon-ad');
		document.querySelector('.icon-hide-promoted').classList.remove('icon-ad-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePromoted: false });
				}
			});
		});
	}
});

// Toggle - Hide Recommended Links
document.querySelector('#checkbox-hide-recommended').addEventListener('change', function (e) {
	const hideRecommended = document.querySelector('#checkbox-hide-recommended').checked;
	if (hideRecommended === true) {
		BROWSER_API.storage.sync.set({ hideRecommended: true });
		document.querySelector('.icon-hide-recommended').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-recommended').classList.remove('icon-hand');
		document.querySelector('.icon-hide-recommended').classList.add('icon-hand-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRecommended: true });
				}
			});
		});
	} else if (hideRecommended === false) {
		BROWSER_API.storage.sync.set({ hideRecommended: false });
		document.querySelector('.icon-hide-recommended').style.backgroundColor = '';
		document.querySelector('.icon-hide-recommended').classList.add('icon-hand');
		document.querySelector('.icon-hide-recommended').classList.remove('icon-hand-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRecommended: false });
				}
			});
		});
	}
});

// Toggle - Hide See Full Image
document.querySelector('#checkbox-hide-see-full-image').addEventListener('change', function (e) {
	const hideSeeFullImage = document.querySelector('#checkbox-hide-see-full-image').checked;
	if (hideSeeFullImage === true) {
		BROWSER_API.storage.sync.set({ hideSeeFullImage: true });
		document.querySelector('.icon-hide-see-full-image').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-see-full-image').classList.remove('icon-show');
		document.querySelector('.icon-hide-see-full-image').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSeeFullImage: true });
				}
			});
		});
	} else if (hideSeeFullImage === false) {
		BROWSER_API.storage.sync.set({ hideSeeFullImage: false });
		document.querySelector('.icon-hide-see-full-image').style.backgroundColor = '';
		document.querySelector('.icon-hide-see-full-image').classList.add('icon-show');
		document.querySelector('.icon-hide-see-full-image').classList.remove('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSeeFullImage: false });
				}
			});
		});
	}
});

// Toggle - Hide Header Sub Bar
document.querySelector('#checkbox-hide-header-sub-bar').addEventListener('change', function (e) {
	const hideHeaderSubBar = document.querySelector('#checkbox-hide-header-sub-bar').checked;
	if (hideHeaderSubBar === true) {
		BROWSER_API.storage.sync.set({ hideHeaderSubBar: true });
		document.querySelector('.icon-hide-header-sub-bar').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-header-sub-bar').classList.remove('icon-show');
		document.querySelector('.icon-hide-header-sub-bar').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideHeaderSubBar: true });
				}
			});
		});
	} else if (hideHeaderSubBar === false) {
		BROWSER_API.storage.sync.set({ hideHeaderSubBar: false });
		document.querySelector('.icon-hide-header-sub-bar').style.backgroundColor = '';
		document.querySelector('.icon-hide-header-sub-bar').classList.remove('icon-hide');
		document.querySelector('.icon-hide-header-sub-bar').classList.add('icon-show');

		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideHeaderSubBar: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Old
document.querySelector('#checkbox-hide-side-menu-old').addEventListener('change', function (e) {
	const hideSideMenuOld = document.querySelector('#checkbox-hide-side-menu-old').checked;
	if (hideSideMenuOld === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuOld: true });
		document.querySelector('.icon-hide-side-menu-old').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-old').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-old').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuOld: true });
				}
			});
		});
	} else if (hideSideMenuOld === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuOld: false });
		document.querySelector('.icon-hide-side-menu-old').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-old').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-old').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuOld: false });
				}
			});
		});
	}
});

// Toggle - Hide NSFW Links
document.querySelector('#checkbox-hide-nsfw').addEventListener('change', function (e) {
	const hideNSFW = document.querySelector('#checkbox-hide-nsfw').checked;
	if (hideNSFW === true) {
		BROWSER_API.storage.sync.set({ hideNSFW: true });
		document.querySelector('.icon-hide-nsfw').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-nsfw').classList.remove('icon-nsfw');
		document.querySelector('.icon-hide-nsfw').classList.add('icon-nsfw-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideNSFW: true });
				}
			});
		});
	} else if (hideNSFW === false) {
		BROWSER_API.storage.sync.set({ hideNSFW: false });
		document.querySelector('.icon-hide-nsfw').style.backgroundColor = '';
		document.querySelector('.icon-hide-nsfw').classList.add('icon-nsfw');
		document.querySelector('.icon-hide-nsfw').classList.remove('icon-nsfw-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideNSFW: false });
				}
			});
		});
	}
});

// Toggle - Hide "Turn On Notifications" Popup
document.querySelector('#checkbox-hide-turn-on-notifications').addEventListener('change', function (e) {
	const hideTurnOnNotificationsPopup = document.querySelector('#checkbox-hide-turn-on-notifications').checked;
	if (hideTurnOnNotificationsPopup === true) {
		BROWSER_API.storage.sync.set({ hideTurnOnNotificationsPopup: true });
		document.querySelector('.icon-hide-turn-on-notifications').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-turn-on-notifications').classList.remove('icon-bell');
		document.querySelector('.icon-hide-turn-on-notifications').classList.add('icon-bell-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideTurnOnNotificationsPopup: true });
				}
			});
		});
	} else if (hideTurnOnNotificationsPopup === false) {
		BROWSER_API.storage.sync.set({ hideTurnOnNotificationsPopup: false });
		document.querySelector('.icon-hide-turn-on-notifications').style.backgroundColor = '';
		document.querySelector('.icon-hide-turn-on-notifications').classList.add('icon-bell');
		document.querySelector('.icon-hide-turn-on-notifications').classList.remove('icon-bell-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideTurnOnNotificationsPopup: false });
				}
			});
		});
	}
});

// Toggle - Hide Sub Sidebar Exceptions
document.querySelector('#checkbox-hide-sub-sidebar-exceptions-enable').addEventListener('change', function (e) {
	var themeExceptionsEnable = document.querySelector('#checkbox-hide-sub-sidebar-exceptions-enable').checked;
	if (themeExceptionsEnable == true) {
		BROWSER_API.storage.sync.set({ hideSubSidebarExceptionsEnable: true });
		document.querySelector('.icon-hide-sub-sidebar-exceptions').style.backgroundColor = 'var(--accent)';
	} else if (themeExceptionsEnable == false) {
		BROWSER_API.storage.sync.set({ hideSubSidebarExceptionsEnable: false });
		document.querySelector('.icon-hide-sub-sidebar-exceptions').style.backgroundColor = '';
	}
});

// Button - Hide Sub Sidebar Whitelist
document.querySelector('#btn-hide-sub-sidebar-whitelist').addEventListener('click', function (e) {
	e.currentTarget.classList.add('tab-active');
	document.querySelector('#btn-hide-sub-sidebar-whitelist').nextElementSibling.classList.remove('tab-active');
	document.querySelector('[data-lang="HideSubSidebarWhitelistInfo"]').classList.remove('hidden');
	document.querySelector('[data-lang="HideSubSidebarBlacklistInfo"]').classList.add('hidden');
	BROWSER_API.storage.sync.set({ hideSubSidebarExceptionMode: 'whitelist' });
});

// Button - Hide Sub Sidebar Blacklist
document.querySelector('#btn-hide-sub-sidebar-blacklist').addEventListener('click', function (e) {
	e.currentTarget.classList.add('tab-active');
	document.querySelector('#btn-hide-sub-sidebar-blacklist').previousElementSibling.classList.remove('tab-active');
	document.querySelector('[data-lang="HideSubSidebarBlacklistInfo"]').classList.remove('hidden');
	document.querySelector('[data-lang="HideSubSidebarWhitelistInfo"]').classList.add('hidden');
	BROWSER_API.storage.sync.set({ hideSubSidebarExceptionMode: 'blacklist' });
});

// Textarea - Hide Sub Sidebar Exceptions
document.querySelector('#input-hide-sub-sidebar-exceptions').addEventListener('keyup', function (e) {
	const value = e.target.value;
	BROWSER_API.storage.sync.set({ hideSubSidebarExceptionSubList: value });
});

// Toggle - Hide Header Bar
document.querySelector('#checkbox-hide-header-bar').addEventListener('change', function (e) {
	const hideHeaderBar = document.querySelector('#checkbox-hide-header-bar').checked;
	if (hideHeaderBar === true) {
		BROWSER_API.storage.sync.set({ hideHeaderBar: true });
		document.querySelector('.icon-hide-header-bar').classList.remove('icon-header');
		document.querySelector('.icon-hide-header-bar').classList.add('icon-header-slash');
		document.querySelector('.icon-hide-header-bar').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideHeaderBar: true });
				}
			});
		});
	} else if (hideHeaderBar === false) {
		BROWSER_API.storage.sync.set({ hideHeaderBar: false });
		document.querySelector('.icon-hide-header-bar').classList.remove('icon-header-slash');
		document.querySelector('.icon-hide-header-bar').classList.add('icon-header');
		document.querySelector('.icon-hide-header-bar').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideHeaderBar: false });
				}
			});
		});
	}
});

// Toggle - Hide Original Scroll To Top Button
document.querySelector('#checkbox-hide-original-scroll-to-top').addEventListener('change', function (e) {
	const hideOriginalScrollToTop = document.querySelector('#checkbox-hide-original-scroll-to-top').checked;
	if (hideOriginalScrollToTop === true) {
		BROWSER_API.storage.sync.set({ hideOriginalScrollToTop: true });
		document.querySelector('.icon-hide-original-scroll-to-top').classList.remove('icon-show');
		document.querySelector('.icon-hide-original-scroll-to-top').classList.add('icon-hide');
		document.querySelector('.icon-hide-original-scroll-to-top').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideOriginalScrollToTop: true });
				}
			});
		});
	} else if (hideOriginalScrollToTop === false) {
		BROWSER_API.storage.sync.set({ hideOriginalScrollToTop: false });
		document.querySelector('.icon-hide-original-scroll-to-top').classList.remove('icon-hide');
		document.querySelector('.icon-hide-original-scroll-to-top').classList.add('icon-show');
		document.querySelector('.icon-hide-original-scroll-to-top').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideOriginalScrollToTop: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu
function disableHideSideMenu() {
	BROWSER_API.storage.sync.set({ hideSideMenu: false });
	document.querySelector('.icon-hide-side-menu').style.backgroundColor = '';
	document.querySelector('.icon-hide-side-menu').classList.remove('icon-hide');
	document.querySelector('.icon-hide-side-menu').classList.add('icon-show');
	BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
		tabs.forEach(function (tab) {
			if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
				BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenu: false });
			}
		});
	});
}
document.querySelector('#checkbox-hide-side-menu').addEventListener('change', function (e) {
	const hideSideMenu = document.querySelector('#checkbox-hide-side-menu').checked;
	if (hideSideMenu === true) {
		// disable side menu toggle and side menu icons only
		disableSideMenuToggle();
		document.querySelector('#checkbox-side-menu-toggle-button').checked = false;
		disableSideMenuIconsOnly();
		document.querySelector('#checkbox-side-menu-icons-only').checked = false;
		// enable hide side menu
		BROWSER_API.storage.sync.set({ hideSideMenu: true });
		document.querySelector('.icon-hide-side-menu').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenu: true });
				}
			});
		});
	} else if (hideSideMenu === false) {
		disableHideSideMenu();
	}
});

// Toggle - Side Menu Show/Hide Toggle Button
function disableSideMenuToggle() {
	BROWSER_API.storage.sync.set({ sideMenuToggleButton: false });
	document.querySelector('.icon-side-menu-toggle-button').style.backgroundColor = '';
	document.querySelector('.icon-side-menu-toggle-button').classList.remove('icon-show');
	document.querySelector('.icon-side-menu-toggle-button').classList.add('icon-hide');
	BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
		tabs.forEach(function (tab) {
			if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
				BROWSER_API.tabs.sendMessage(tab.id, { sideMenuToggleButton: false });
			}
		});
	});
}
document.querySelector('#checkbox-side-menu-toggle-button').addEventListener('change', function (e) {
	const sideMenuToggleButton = document.querySelector('#checkbox-side-menu-toggle-button').checked;
	if (sideMenuToggleButton === true) {
		// disable hide side menu and side menu icons only
		disableHideSideMenu();
		document.querySelector('#checkbox-hide-side-menu').checked = false;
		disableSideMenuIconsOnly();
		document.querySelector('#checkbox-side-menu-icons-only').checked = false;
		// enable side menu toggle
		BROWSER_API.storage.sync.set({ sideMenuToggleButton: true });
		document.querySelector('.icon-side-menu-toggle-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-side-menu-toggle-button').classList.remove('icon-hide');
		document.querySelector('.icon-side-menu-toggle-button').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { sideMenuToggleButton: true });
				}
			});
		});
	} else if (sideMenuToggleButton === false) {
		disableSideMenuToggle();
	}
});

// Toggle - Hide Side Menu Top Section
document.querySelector('#checkbox-hide-side-menu-top-section').addEventListener('change', function (e) {
	const hideSideMenuTopSection = document.querySelector('#checkbox-hide-side-menu-top-section').checked;
	if (hideSideMenuTopSection === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuTopSection: true });
		document.querySelector('.icon-hide-side-menu-top-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-top-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-top-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuTopSection: true });
				}
			});
		});
	} else if (hideSideMenuTopSection === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuTopSection: false });
		document.querySelector('.icon-hide-side-menu-top-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-top-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-top-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuTopSection: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Moderation Section
document.querySelector('#checkbox-hide-side-menu-moderation-section').addEventListener('change', function (e) {
	const hideSideMenuModerationSection = document.querySelector('#checkbox-hide-side-menu-moderation-section').checked;
	if (hideSideMenuModerationSection === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuModerationSection: true });
		document.querySelector('.icon-hide-side-menu-moderation-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-moderation-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-moderation-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuModerationSection: true });
				}
			});
		});
	} else if (hideSideMenuModerationSection === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuModerationSection: false });
		document.querySelector('.icon-hide-side-menu-moderation-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-moderation-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-moderation-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuModerationSection: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Recent Section
document.querySelector('#checkbox-hide-side-menu-recent-section').addEventListener('change', function (e) {
	const hideSideMenuRecentSection = document.querySelector('#checkbox-hide-side-menu-recent-section').checked;
	if (hideSideMenuRecentSection === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuRecentSection: true });
		document.querySelector('.icon-hide-side-menu-recent-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-recent-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-recent-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuRecentSection: true });
				}
			});
		});
	} else if (hideSideMenuRecentSection === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuRecentSection: false });
		document.querySelector('.icon-hide-side-menu-recent-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-recent-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-recent-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuRecentSection: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Custom Feeds Section
document.querySelector('#checkbox-hide-side-menu-custom-feeds-section').addEventListener('change', function (e) {
	const hideSideMenuCustomFeedsSection = document.querySelector('#checkbox-hide-side-menu-custom-feeds-section').checked;
	if (hideSideMenuCustomFeedsSection === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuCustomFeedsSection: true });
		document.querySelector('.icon-hide-side-menu-custom-feeds-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-custom-feeds-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-custom-feeds-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuCustomFeedsSection: true });
				}
			});
		});
	} else if (hideSideMenuCustomFeedsSection === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuCustomFeedsSection: false });
		document.querySelector('.icon-hide-side-menu-custom-feeds-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-custom-feeds-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-custom-feeds-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuCustomFeedsSection: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Communities Section
document.querySelector('#checkbox-hide-side-menu-communities-section').addEventListener('change', function (e) {
	const hideSideMenuCommunitiesSection = document.querySelector('#checkbox-hide-side-menu-communities-section').checked;
	if (hideSideMenuCommunitiesSection === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuCommunitiesSection: true });
		document.querySelector('.icon-hide-side-menu-communities-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-communities-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-communities-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuCommunitiesSection: true });
				}
			});
		});
	} else if (hideSideMenuCommunitiesSection === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuCommunitiesSection: false });
		document.querySelector('.icon-hide-side-menu-communities-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-communities-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-communities-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuCommunitiesSection: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Resources Section
document.querySelector('#checkbox-hide-side-menu-resources-section').addEventListener('change', function (e) {
	const hideSideMenuResourcesSection = document.querySelector('#checkbox-hide-side-menu-resources-section').checked;
	if (hideSideMenuResourcesSection === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuResourcesSection: true });
		document.querySelector('.icon-hide-side-menu-resources-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-resources-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-resources-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuResourcesSection: true });
				}
			});
		});
	} else if (hideSideMenuResourcesSection === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuResourcesSection: false });
		document.querySelector('.icon-hide-side-menu-resources-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-resources-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-resources-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuResourcesSection: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Topics Section
document.querySelector('#checkbox-hide-side-menu-topics-section').addEventListener('change', function (e) {
	const hideSideMenuTopicsSection = document.querySelector('#checkbox-hide-side-menu-topics-section').checked;
	if (hideSideMenuTopicsSection === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuTopicsSection: true });
		document.querySelector('.icon-hide-side-menu-topics-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-topics-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-side-menu-topics-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuTopicsSection: true });
				}
			});
		});
	} else if (hideSideMenuTopicsSection === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuTopicsSection: false });
		document.querySelector('.icon-hide-side-menu-topics-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-topics-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-side-menu-topics-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuTopicsSection: false });
				}
			});
		});
	}
});

// Toggle - Hide Related Posts Section in Sidebar
document.querySelector('#checkbox-hide-related-posts-section').addEventListener('change', function (e) {
	const hideRelatedPostsSection = document.querySelector('#checkbox-hide-related-posts-section').checked;
	if (hideRelatedPostsSection === true) {
		BROWSER_API.storage.sync.set({ hideRelatedPostsSection: true });
		document.querySelector('.icon-hide-related-posts-section').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-related-posts-section').classList.remove('icon-show');
		document.querySelector('.icon-hide-related-posts-section').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRelatedPostsSection: true });
				}
			});
		});
	} else if (hideRelatedPostsSection === false) {
		BROWSER_API.storage.sync.set({ hideRelatedPostsSection: false });
		document.querySelector('.icon-hide-related-posts-section').style.backgroundColor = '';
		document.querySelector('.icon-hide-related-posts-section').classList.remove('icon-hide');
		document.querySelector('.icon-hide-related-posts-section').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRelatedPostsSection: false });
				}
			});
		});
	}
});

// Toggle - Hide User Profile Pics
document.querySelector('#checkbox-hide-user-profile-pics').addEventListener('change', function (e) {
	const hideUserProfilePics = document.querySelector('#checkbox-hide-user-profile-pics').checked;
	if (hideUserProfilePics === true) {
		BROWSER_API.storage.sync.set({ hideUserProfilePics: true });
		document.querySelector('.icon-hide-user-profile-pics').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-user-profile-pics').classList.remove('icon-show');
		document.querySelector('.icon-hide-user-profile-pics').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideUserProfilePics: true });
				}
			});
		});
	} else if (hideUserProfilePics === false) {
		BROWSER_API.storage.sync.set({ hideUserProfilePics: false });
		document.querySelector('.icon-hide-user-profile-pics').style.backgroundColor = '';
		document.querySelector('.icon-hide-user-profile-pics').classList.remove('icon-hide');
		document.querySelector('.icon-hide-user-profile-pics').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideUserProfilePics: false });
				}
			});
		});
	}
});

// Toggle - Hide Post Hidden Message
document.querySelector('#checkbox-hide-post-hidden-message').addEventListener('change', function (e) {
	const hidePostHiddenMessage = document.querySelector('#checkbox-hide-post-hidden-message').checked;
	if (hidePostHiddenMessage === true) {
		BROWSER_API.storage.sync.set({ hidePostHiddenMessage: true });
		document.querySelector('.icon-hide-post-hidden-message').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-post-hidden-message').classList.remove('icon-show');
		document.querySelector('.icon-hide-post-hidden-message').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostHiddenMessage: true });
				}
			});
		});
	} else if (hidePostHiddenMessage === false) {
		BROWSER_API.storage.sync.set({ hidePostHiddenMessage: false });
		document.querySelector('.icon-hide-post-hidden-message').style.backgroundColor = '';
		document.querySelector('.icon-hide-post-hidden-message').classList.remove('icon-hide');
		document.querySelector('.icon-hide-post-hidden-message').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostHiddenMessage: false });
				}
			});
		});
	}
});

// Toggle - Hide Join Button On r/all Posts
document.querySelector('#checkbox-hide-join-button-on-posts').addEventListener('change', function (e) {
	const hideJoinButtonOnPosts = document.querySelector('#checkbox-hide-join-button-on-posts').checked;
	if (hideJoinButtonOnPosts === true) {
		BROWSER_API.storage.sync.set({ hideJoinButtonOnPosts: true });
		document.querySelector('.icon-hide-join-button-on-posts').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-join-button-on-posts').classList.remove('icon-show');
		document.querySelector('.icon-hide-join-button-on-posts').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideJoinButtonOnPosts: true });
				}
			});
		});
	} else if (hideJoinButtonOnPosts === false) {
		BROWSER_API.storage.sync.set({ hideJoinButtonOnPosts: false });
		document.querySelector('.icon-hide-join-button-on-posts').style.backgroundColor = '';
		document.querySelector('.icon-hide-join-button-on-posts').classList.remove('icon-hide');
		document.querySelector('.icon-hide-join-button-on-posts').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideJoinButtonOnPosts: false });
				}
			});
		});
	}
});

// Toggle - Hide Search Sidebar
document.querySelector('#checkbox-hide-search-sidebar').addEventListener('change', function (e) {
	const hideSearchSidebar = document.querySelector('#checkbox-hide-search-sidebar').checked;
	if (hideSearchSidebar === true) {
		BROWSER_API.storage.sync.set({ hideSearchSidebar: true });
		document.querySelector('.icon-hide-search-sidebar').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-search-sidebar').classList.remove('icon-show');
		document.querySelector('.icon-hide-search-sidebar').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSearchSidebar: true });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	} else if (hideSearchSidebar === false) {
		BROWSER_API.storage.sync.set({ hideSearchSidebar: false });
		document.querySelector('.icon-hide-search-sidebar').style.backgroundColor = '';
		document.querySelector('.icon-hide-search-sidebar').classList.remove('icon-hide');
		document.querySelector('.icon-hide-search-sidebar').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSearchSidebar: false });
					// Reapply Layout Centre
					BROWSER_API.storage.sync.get(['layoutCentre'], function (result) {
						BROWSER_API.tabs.sendMessage(tab.id, { layoutCentre: result.layoutCentre });
					});
				}
			});
		});
	}
});

// Toggle - Hide Post Back Button
document.querySelector('#checkbox-hide-post-back-button').addEventListener('change', function (e) {
	const hidePostBackButton = document.querySelector('#checkbox-hide-post-back-button').checked;
	if (hidePostBackButton === true) {
		BROWSER_API.storage.sync.set({ hidePostBackButton: true });
		document.querySelector('.icon-hide-post-back-button').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-post-back-button').classList.remove('icon-show');
		document.querySelector('.icon-hide-post-back-button').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostBackButton: true });
				}
			});
		});
	} else if (hidePostBackButton === false) {
		BROWSER_API.storage.sync.set({ hidePostBackButton: false });
		document.querySelector('.icon-hide-post-back-button').style.backgroundColor = '';
		document.querySelector('.icon-hide-post-back-button').classList.remove('icon-hide');
		document.querySelector('.icon-hide-post-back-button').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostBackButton: false });
				}
			});
		});
	}
});

// Toggle - Hide Post Karma
document.querySelector('#checkbox-hide-post-karma').addEventListener('change', function (e) {
	const hidePostKarma = document.querySelector('#checkbox-hide-post-karma').checked;
	if (hidePostKarma === true) {
		BROWSER_API.storage.sync.set({ hidePostKarma: true });
		document.querySelector('.icon-hide-post-karma').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-post-karma').classList.remove('icon-show');
		document.querySelector('.icon-hide-post-karma').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostKarma: true });
				}
			});
		});
	} else if (hidePostKarma === false) {
		BROWSER_API.storage.sync.set({ hidePostKarma: false });
		document.querySelector('.icon-hide-post-karma').style.backgroundColor = '';
		document.querySelector('.icon-hide-post-karma').classList.remove('icon-hide');
		document.querySelector('.icon-hide-post-karma').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostKarma: false });
				}
			});
		});
	}
});

// Toggle - Hide Recent Posts
document.querySelector('#checkbox-hide-recent-posts').addEventListener('change', function (e) {
	const hideRecentPosts = document.querySelector('#checkbox-hide-recent-posts').checked;
	if (hideRecentPosts === true) {
		BROWSER_API.storage.sync.set({ hideRecentPosts: true });
		document.querySelector('.icon-hide-recent-posts').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-recent-posts').classList.remove('icon-show');
		document.querySelector('.icon-hide-recent-posts').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRecentPosts: true });
				}
			});
		});
	} else if (hideRecentPosts === false) {
		BROWSER_API.storage.sync.set({ hideRecentPosts: false });
		document.querySelector('.icon-hide-recent-posts').style.backgroundColor = '';
		document.querySelector('.icon-hide-recent-posts').classList.remove('icon-hide');
		document.querySelector('.icon-hide-recent-posts').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideRecentPosts: false });
				}
			});
		});
	}
});

// Toggle - Hide Side Menu Star
document.querySelector('#checkbox-hide-side-menu-star').addEventListener('change', function (e) {
	const hideSideMenuFavouriteButton = document.querySelector('#checkbox-hide-side-menu-star').checked;
	if (hideSideMenuFavouriteButton === true) {
		BROWSER_API.storage.sync.set({ hideSideMenuFavouriteButton: true });
		document.querySelector('.icon-hide-side-menu-star').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-side-menu-star').classList.remove('icon-star');
		document.querySelector('.icon-hide-side-menu-star').classList.add('icon-star-slash');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuFavouriteButton: true });
				}
			});
		});
	} else if (hideSideMenuFavouriteButton === false) {
		BROWSER_API.storage.sync.set({ hideSideMenuFavouriteButton: false });
		document.querySelector('.icon-hide-side-menu-star').style.backgroundColor = '';
		document.querySelector('.icon-hide-side-menu-star').classList.remove('icon-star-slash');
		document.querySelector('.icon-hide-side-menu-star').classList.add('icon-star');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSideMenuFavouriteButton: false });
				}
			});
		});
	}
});

// Toggle - Side Menu Icons Only
function disableSideMenuIconsOnly() {
	BROWSER_API.storage.sync.set({ sideMenuIconsOnly: false });
	document.querySelector('.icon-side-menu-icons-only').style.backgroundColor = '';
	document.querySelector('.icon-side-menu-icons-only').classList.remove('icon-side-menu-icons');
	document.querySelector('.icon-side-menu-icons-only').classList.add('icon-side-menu-list');
	BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
		tabs.forEach(function (tab) {
			if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
				BROWSER_API.tabs.sendMessage(tab.id, { sideMenuIconsOnly: false });
			}
		});
	});
}
document.querySelector('#checkbox-side-menu-icons-only').addEventListener('change', function (e) {
	const sideMenuIconsOnly = document.querySelector('#checkbox-side-menu-icons-only').checked;
	if (sideMenuIconsOnly === true) {
		// disable hide side menu and side menu toggle
		disableHideSideMenu();
		document.querySelector('#checkbox-hide-side-menu').checked = false;
		disableSideMenuToggle();
		document.querySelector('#checkbox-side-menu-toggle-button').checked = false;
		BROWSER_API.storage.sync.set({ sideMenuIconsOnly: true });
		document.querySelector('.icon-side-menu-icons-only').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-side-menu-icons-only').classList.remove('icon-side-menu-list');
		document.querySelector('.icon-side-menu-icons-only').classList.add('icon-side-menu-icons');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { sideMenuIconsOnly: true });
				}
			});
		});
	} else if (sideMenuIconsOnly === false) {
		disableSideMenuIconsOnly();
	}
});

// Toggle - Hide Blank Thumbnails In Compact View
document.querySelector('#checkbox-hide-compact-view-blank-thumbnails').addEventListener('change', function (e) {
	const hideCompactViewBlankThumbnails = document.querySelector('#checkbox-hide-compact-view-blank-thumbnails').checked;
	if (hideCompactViewBlankThumbnails === true) {
		BROWSER_API.storage.sync.set({ hideCompactViewBlankThumbnails: true });
		document.querySelector('.icon-hide-compact-view-blank-thumbnails').style.backgroundColor = 'var(--accent)';
		document.querySelector('.icon-hide-compact-view-blank-thumbnails').classList.remove('icon-show');
		document.querySelector('.icon-hide-compact-view-blank-thumbnails').classList.add('icon-hide');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCompactViewBlankThumbnails: true });
				}
			});
		});
	} else if (hideCompactViewBlankThumbnails === false) {
		BROWSER_API.storage.sync.set({ hideCompactViewBlankThumbnails: false });
		document.querySelector('.icon-hide-compact-view-blank-thumbnails').style.backgroundColor = '';
		document.querySelector('.icon-hide-compact-view-blank-thumbnails').classList.remove('icon-hide');
		document.querySelector('.icon-hide-compact-view-blank-thumbnails').classList.add('icon-show');
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCompactViewBlankThumbnails: false });
				}
			});
		});
	}
});

// Toggle - Hide "NSFW" In The Search Results
document.querySelector('#checkbox-hide-nsfw-search-results').addEventListener('change', function (e) {
	const hideNsfwInSearchResults = document.querySelector('#checkbox-hide-nsfw-search-results').checked;
	if (hideNsfwInSearchResults === true) {
		BROWSER_API.storage.sync.set({ hideNsfwInSearchResults: true });
		document.querySelector('.icon-hide-nsfw-search-results').classList.remove('icon-show');
		document.querySelector('.icon-hide-nsfw-search-results').classList.add('icon-hide');
		document.querySelector('.icon-hide-nsfw-search-results').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideNsfwInSearchResults: true });
				}
			});
		});
	} else if (hideNsfwInSearchResults === false) {
		BROWSER_API.storage.sync.set({ hideNsfwInSearchResults: false });
		document.querySelector('.icon-hide-nsfw-search-results').classList.remove('icon-hide');
		document.querySelector('.icon-hide-nsfw-search-results').classList.add('icon-show');
		document.querySelector('.icon-hide-nsfw-search-results').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideNsfwInSearchResults: false });
				}
			});
		});
	}
});

// Toggle - Hide "Trending Today" In The Search Results
document.querySelector('#checkbox-hide-trending-today-in-search-results').addEventListener('change', function (e) {
	const hideTrendingTodayInSearchResults = document.querySelector('#checkbox-hide-trending-today-in-search-results').checked;
	if (hideTrendingTodayInSearchResults === true) {
		BROWSER_API.storage.sync.set({ hideTrendingTodayInSearchResults: true });
		document.querySelector('.icon-hide-trending-today-in-search-results').classList.remove('icon-show');
		document.querySelector('.icon-hide-trending-today-in-search-results').classList.add('icon-hide');
		document.querySelector('.icon-hide-trending-today-in-search-results').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideTrendingTodayInSearchResults: true });
				}
			});
		});
	} else if (hideTrendingTodayInSearchResults === false) {
		BROWSER_API.storage.sync.set({ hideTrendingTodayInSearchResults: false });
		document.querySelector('.icon-hide-trending-today-in-search-results').classList.remove('icon-hide');
		document.querySelector('.icon-hide-trending-today-in-search-results').classList.add('icon-show');
		document.querySelector('.icon-hide-trending-today-in-search-results').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideTrendingTodayInSearchResults: false });
				}
			});
		});
	}
});

// Toggle - Hide Community Highlights
document.querySelector('#checkbox-hide-community-highlights').addEventListener('change', function (e) {
	const hideCommunityHighlights = document.querySelector('#checkbox-hide-community-highlights').checked;
	if (hideCommunityHighlights === true) {
		BROWSER_API.storage.sync.set({ hideCommunityHighlights: true });
		document.querySelector('.icon-hide-community-highlights').classList.remove('icon-thumbtack');
		document.querySelector('.icon-hide-community-highlights').classList.add('icon-thumbtack-slash');
		document.querySelector('.icon-hide-community-highlights').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCommunityHighlights: true });
				}
			});
		});
	} else if (hideCommunityHighlights === false) {
		BROWSER_API.storage.sync.set({ hideCommunityHighlights: false });
		document.querySelector('.icon-hide-community-highlights').classList.remove('icon-thumbtack-slash');
		document.querySelector('.icon-hide-community-highlights').classList.add('icon-thumbtack');
		document.querySelector('.icon-hide-community-highlights').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideCommunityHighlights: false });
				}
			});
		});
	}
});

// Toggle - Hide NSFW Users In The Search Page Sidebar
document.querySelector('#checkbox-hide-search-sidebar-nsfw-users').addEventListener('change', function (e) {
	const hideSearchSidebarNsfwUsers = document.querySelector('#checkbox-hide-search-sidebar-nsfw-users').checked;
	if (hideSearchSidebarNsfwUsers === true) {
		BROWSER_API.storage.sync.set({ hideSearchSidebarNsfwUsers: true });
		document.querySelector('.icon-hide-search-sidebar-nsfw-users').classList.remove('icon-show');
		document.querySelector('.icon-hide-search-sidebar-nsfw-users').classList.add('icon-hide');
		document.querySelector('.icon-hide-search-sidebar-nsfw-users').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSearchSidebarNsfwUsers: true });
				}
			});
		});
	} else if (hideSearchSidebarNsfwUsers === false) {
		BROWSER_API.storage.sync.set({ hideSearchSidebarNsfwUsers: false });
		document.querySelector('.icon-hide-search-sidebar-nsfw-users').classList.remove('icon-hide');
		document.querySelector('.icon-hide-search-sidebar-nsfw-users').classList.add('icon-show');
		document.querySelector('.icon-hide-search-sidebar-nsfw-users').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideSearchSidebarNsfwUsers: false });
				}
			});
		});
	}
});

// Toggle - Hide Post Divider
document.querySelector('#checkbox-hide-post-divider').addEventListener('change', function (e) {
	const hidePostDivider = document.querySelector('#checkbox-hide-post-divider').checked;
	if (hidePostDivider) {
		BROWSER_API.storage.sync.set({ hidePostDivider: true });
		document.querySelector('.icon-hide-post-divider').classList.remove('icon-show');
		document.querySelector('.icon-hide-post-divider').classList.add('icon-hide');
		document.querySelector('.icon-hide-post-divider').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostDivider: true });
				}
			});
		});
	} else {
		BROWSER_API.storage.sync.set({ hidePostDivider: false });
		document.querySelector('.icon-hide-post-divider').classList.remove('icon-hide');
		document.querySelector('.icon-hide-post-divider').classList.add('icon-show');
		document.querySelector('.icon-hide-post-divider').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hidePostDivider: false });
				}
			});
		});
	}
});

// Toggle - Hide Blurred Media Background
document.querySelector('#checkbox-hide-blurred-media-background').addEventListener('change', function (e) {
	const hideBlurredMediaBackground = document.querySelector('#checkbox-hide-blurred-media-background').checked;
	if (hideBlurredMediaBackground) {
		BROWSER_API.storage.sync.set({ hideBlurredMediaBackground: true });
		document.querySelector('.icon-hide-blurred-media-background').classList.remove('icon-show');
		document.querySelector('.icon-hide-blurred-media-background').classList.add('icon-hide');
		document.querySelector('.icon-hide-blurred-media-background').style.backgroundColor = 'var(--accent)';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideBlurredMediaBackground: true });
				}
			});
		});
	} else {
		BROWSER_API.storage.sync.set({ hideBlurredMediaBackground: false });
		document.querySelector('.icon-hide-blurred-media-background').classList.remove('icon-hide');
		document.querySelector('.icon-hide-blurred-media-background').classList.add('icon-show');
		document.querySelector('.icon-hide-blurred-media-background').style.backgroundColor = '';
		BROWSER_API.tabs.query({ currentWindow: true }, function (tabs) {
			tabs.forEach(function (tab) {
				if (tab.url.match('https://.*.reddit.com/.*') && tab.discarded == false) {
					BROWSER_API.tabs.sendMessage(tab.id, { hideBlurredMediaBackground: false });
				}
			});
		});
	}
});