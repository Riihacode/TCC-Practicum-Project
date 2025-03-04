# DOKUMENTASI ENDPOINT

PROJECT NOTES (CATATAN)
BASE URL = http://http://localhost:5000/

==============================
A. Authentication
1. Register Akun (POST)
Endpoint	= /register
Request type	= raw / x-www-form-urlencoded
Body		= username, email, password

2. Login Akun (POST)
Endpoint	= /login
Request type	= raw / x-www-form-urlencoded
Body		= email, password

==============================
B. Notes
1. Menampilkan semua Notes (GET)
Endpoint	= /notes
Request type	= raw / x-www-form-urlencoded
Authorization 	= yes (with login token)

2. Posting notes (POST)
Endpoint	= /notes
Request type	= raw / x-www-form-urlencoded
Body		= title, content
Authorization 	= yes (with login token)

3. Update notes (PUT)
Endpoint	= /notes/:id
Request type	= raw / x-www-form-urlencoded
Body		= title, content
Authorization 	= yes (with login token)

4. Delete notes (DELETE)
Endpoint	= /notes/:id
Request type	= raw / x-www-form-urlencoded
Authorization 	= yes (with login token)


# NOTE:
Untuk dapetin token harus login akun terlebih dahulu. Nantinya tokennya dipake biar bisa CRUD endpoint yang berkaitan sama Notes biar bisa dimodifikasi.
