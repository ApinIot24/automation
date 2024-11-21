import { io } from 'socket.io-client';

const connectToSocket = () => {
    // Hubungkan ke server dengan IP 10.37.12.17
    const socket = io('http://10.37.12.17:3000');

    // Dengarkan event 'notification' dari server
    socket.on('notification', (data) => {
        console.log('Notifikasi diterima:', data);  
        // Tampilkan notifikasi menggunakan Notification API jika izin diberikan
        if (Notification.permission === 'granted') {
            new Notification(data.title, {
                body: data.body,
                icon: data.icon || '/icon.png', // Pastikan ikon tersedia
            });
        } else if (Notification.permission === 'denied') {
            console.log('Izin notifikasi ditolak');
        }
    });

    // Minta izin untuk notifikasi jika belum diberikan
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        // Menampilkan pop-up perizinan notifikasi
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Izin notifikasi diberikan');
            } else {
                console.log('Izin notifikasi ditolak');
            }
        });
    }

    return socket;
};

export default connectToSocket;
