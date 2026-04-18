self.addEventListener('fetch', e => {});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/jurismaster-/'));
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SHOW_NOTIF') {
    self.registration.showNotification(e.data.title, {
      body: e.data.body,
      tag: 'jurismaster-daily',
      renotify: true
    });
  }
});
