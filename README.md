# 🔒 Password Verification Feature

This feature allows users to access a different page on the website if the password they enter matches the one specified on the server. It is designed to secure sensitive or restricted content, ensuring that only authorized users can view specific pages.

## 🛠️ Features

- **Password Prompt**: Users are prompted to enter a password to access restricted content.
- **Server-Side Authentication**: The password entered by the user is checked against a server-side stored password.
- **Access Control**: If the password matches, users are redirected to the restricted page. Otherwise, they stay on the current page or are shown an error message.

---

## 🚀 How It Works

1. **Password Verification**: When the user tries to access a protected page, they will be prompted to enter a password.
2. **Server-Side Check**: The entered password is compared with the password stored on the server.
3. **Access Granted**: If the passwords match, the user is redirected to the specified page.
4. **Access Denied**: If the entered password does not match the server password, an error message will be shown, or the user will remain on the current page.

---

## 💻 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Node.js** (for server-side password comparison)

---

## 📂 Getting Started

To implement the password verification feature on your website:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/password-verification-feature.git
   cd password-verification-feature
