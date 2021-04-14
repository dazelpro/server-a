# How to run

 1. Download atau Clone repositori ini.
 2. Arahkan terminal ke folder repositori tersebut berada.
 3. Instal semua dependensi dengan perintah `npm install`
 4. Buat variabel environment dengan perintah `cp .env.example .env` (Perintah tersebut akan menghasilkan file .env)
 5. Isi variabel config yang dibutuhkan
 6. Jalankan server dengan perintah `node app.js` atau `nodemon`

# Doc

### Registrasi

```sh
(POST) http://localhost:8081/api-register/send-mail
```
Digunakan untuk mengirim email untuk melanjutkan proses registrasi di frontend
```sh
(POST) http://localhost:8081/api-register/
```
Digunakan untuk menyimpan data registrasi yang diinput user di frontend

### Login

```sh
(POST) http://localhost:8081/api-login/auth
```
Digunakan untuk login dan user akan mendapatkan token 

### Akun

```sh
(GET) http://localhost:8081/api-account/profile
```
Digunakan untuk mengambil data user yang login saat ini berdasarkan token

```sh
(POST) http://localhost:8081/api-account/edit-profile
```
Digunakan untuk merubah data

