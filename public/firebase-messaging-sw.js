self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received:', event);

  try {
    const data = event.data.json();
    console.log('[Service Worker] Push Data:', data);
    const title = data.title || 'Notifikasi Baru';
    const options = {
      body: data.body || 'Anda memiliki pesan baru.',
      icon: data.icon || 'http://10.37.12.17:5173/logo.png',
      data: {
        url: data.url || '/'
      },
    };

    event.waitUntil(self.registration.showNotification(title, options));
  } catch (error) {
    console.error('[Service Worker] Error processing push event:', error);
  }
});

self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click Received.');
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activated.');
});

