# AI Thumbnail Generator

An AI-powered web application that generates eye-catching thumbnails using user prompts.
Built with the **MERN stack**, the app leverages **Google Gemini Image Generation API** to create visually engaging thumbnails optimized for high click-through rates.

## 🚀 Features

* 🎨 Generate thumbnails using AI prompts
* 🖼 Customize thumbnail style, color scheme, and aspect ratio
* 🔤 Optional text overlay support
* 👤 User authentication and session management
* ☁️ Cloudinary integration for image storage
* 📂 Save and manage generated thumbnails
* ⚡ Fast REST API powered by Express.js

## 🛠 Tech Stack

**Frontend**

* React.js
* React Router
* Axios
* TailwindCSS / CSS

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Google Gemini Image Generation API
* Cloudinary
* Express Sessions

## 📂 Project Structure

```
thumbnailer
│
├── client/                # React frontend
│   ├── src
│   ├── components
│   └── pages
│
├── server/                # Node + Express backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── config
│
├── images/                # Temporary generated images
├── .env.example           # Environment variables template
└── README.md
```

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/Divyanshukhatri-51/thumbnailer.git
cd thumbnailer
```

### 2️⃣ Install dependencies

Backend:

```
cd server
npm install
```

Frontend:

```
cd client
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the **server** folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection
SESSION_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4️⃣ Run the application

Backend:

```
cd server
npm run dev
```

Frontend:

```
cd client
npm start
```

App will run at:

```
http://localhost:3000
```

## 🧠 How It Works

1. User enters a title and optional prompt details.
2. Backend constructs a prompt for the Gemini image generation model.
3. Gemini generates an AI image.
4. The image is temporarily stored on the server.
5. The image is uploaded to **Cloudinary**.
6. The thumbnail URL is saved in **MongoDB** and returned to the user.

## 📸 Example Use Cases

* YouTube thumbnail generation
* Social media graphics
* Marketing creatives
* Blog post cover images

## 🔒 Environment Variables

Make sure the following environment variables are configured:

| Variable       | Description               |
| -------------- | ------------------------- |
| MONGO_URI      | MongoDB connection string |
| GEMINI_API_KEY | Google Gemini API key     |
| SESSION_SECRET | Session security secret   |
| CLOUDINARY_*   | Cloudinary credentials    |

## 🧩 Future Improvements

* Thumbnail editing tools
* Prompt templates
* AI text generation for titles
* Image history dashboard

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Submit a Pull Request

## 👨‍💻 Author

**Divyanshu Khatri**

GitHub:
https://github.com/Divyanshukhatri-51
